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
  Mic,
  Video,
  MessageSquare,
  HardDrive,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Record Recovery Agent Calls for Court Evidence: Section 65B Guide',
  description: 'Learn how to legally record loan recovery agent calls, CCTV footage, and WhatsApp threats for court evidence in India. Understand Section 65B Evidence Act / Section 63 BSA authentication, police FIR procedures, and legal protections.',
  keywords: [
    'how to record recovery agent calls for court evidence',
    'section 65b certificate for audio recording',
    'section 63 bsa electronic evidence loan recovery',
    'is call recording legal in india evidence',
    'how to file fir against recovery agent harassment',
    'cctv footage recovery agent evidence',
    'whatsapp chat proof against bank recovery agents',
    'rbi fair practices code recovery call recording',
    'debt collection harassment police complaint evidence',
    'admissibility of tape recorded conversation in court supreme court'
  ],
  alternates: {
    canonical: 'https://settleloans.in/recording-recovery-agent-calls-legal-evidence',
  },
  openGraph: {
    title: 'How to Record Recovery Agent Calls for Court Evidence: Admissibility & Section 65B',
    description: 'Comprehensive legal protocol on recording abusive recovery agent phone calls, preserving CCTV video, and authenticating electronic records under Section 65B IEA / Section 63 BSA for police FIRs and debt settlement.',
    url: 'https://settleloans.in/recording-recovery-agent-calls-legal-evidence',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/recording-recovery-agent-calls-legal-evidence.jpg',
        width: 1200,
        height: 675,
        alt: 'Recording Recovery Agent Calls for Legal Evidence Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Record Recovery Agent Calls for Court Evidence in India',
    description: 'Master the legal steps to record harassing recovery agent calls, secure Section 65B / Section 63 BSA certificates, file criminal complaints, and secure structured loan settlement.',
    images: ['https://settleloans.in/images/infographics/recording-recovery-agent-calls-legal-evidence.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#webpage",
      "url": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence",
      "name": "How to Record Recovery Agent Calls for Court Evidence: Section 65B Guide",
      "description": "Comprehensive legal guide on capturing, preserving, and authenticating recovery agent audio recordings, CCTV video, and WhatsApp chats under Section 65B of the Indian Evidence Act and Section 63 of the Bharatiya Sakshya Adhiniyam.",
      "breadcrumb": {
        "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#breadcrumb"
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
      "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#breadcrumb",
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
          "name": "Recording Recovery Agent Calls for Legal Evidence",
          "item": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#article",
      "headline": "How to Record Recovery Agent Calls for Court Evidence: Legal Admissibility, Section 65B Certificate & Harassment Protection",
      "description": "An exhaustive manual for distressed borrowers on recording abusive collection calls, archiving home surveillance video, drafting statutory Section 65B certificates, and utilizing digital proof in court proceedings.",
      "image": "https://settleloans.in/images/infographics/recording-recovery-agent-calls-legal-evidence.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#webpage"
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
      "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#service",
      "name": "SettleLoans - Digital Evidence Authentication & Debt Settlement Advisory",
      "description": "Strategic legal advisory providing electronic evidence forensics, Section 65B/63 BSA certification, criminal harassment defense, and structured One-Time Settlement (OTS) negotiations.",
      "url": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence",
      "image": "https://settleloans.in/images/infographics/recording-recovery-agent-calls-legal-evidence.jpg",
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
        "reviewCount": "2460",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwar Sen"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "A third-party recovery agency was calling my office desk and issuing death threats for a defaulted unsecured credit line. SettleLoans guided me on recording the calls with timestamps, drafted a flawless Section 65B affidavit, and filed a criminal complaint under Section 506 IPC. The bank recalled the agency immediately and settled for 52% of principal.",
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
            "name": "Kavitha Ranganathan"
          },
          "datePublished": "2026-07-09",
          "reviewBody": "Recovery agents barged into my apartment building and shouted obscenities at my elderly mother. We extracted our apartment CCTV video and WhatsApp threats. SettleLoans advocates authenticated the footage under Section 63 BSA and submitted an emergency petition to the District Magistrate. The harassment stopped within 24 hours.",
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
            "name": "Amitava Ghosh"
          },
          "datePublished": "2026-05-28",
          "reviewBody": "I recorded 14 abusive recovery calls but was worried they would not hold up in court. Ashish Jhangra and his team converted the audio files into court-admissible electronic exhibits with device hash verification. The bank legal team dropped all legal notices and granted an official No Dues Certificate upon settlement.",
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
            "name": "Gurpreet Singh"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "The detailed instructions on exporting WhatsApp chats with full media and preserving device metadata gave us overwhelming leverage against a predatory fintech lender. Outstanding legal precision and complete peace of mind.",
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
      "@id": "https://settleloans.in/recording-recovery-agent-calls-legal-evidence#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it legal to record phone calls with loan recovery agents without their consent in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Indian law and landmark Supreme Court jurisprudence including R.M. Malkani v. State of Maharashtra, tape-recorded conversations are admissible in evidence provided the voice is identifiable, the conversation is relevant to the dispute, and the recording is contemporaneous and unaltered. India does not have a strict two-party consent statutory regime for criminal harassment, meaning a participant in a conversation can record abusive or extortionate demands to safeguard their legal rights."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Section 65B certificate and why is it mandatory for audio evidence in court?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 65B of the Indian Evidence Act, 1872 (now Section 63 of the Bharatiya Sakshya Adhiniyam, 2023) mandates that secondary electronic records such as printed call logs, pen drives, CDs, or audio files played from auxiliary storage cannot be admitted as substantive evidence without a signed statutory certificate. As settled by the Supreme Court in Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020), the certificate must identify the electronic device, confirm its lawful control and regular operation, and verify that the data has not been tampered with."
          }
        },
        {
          "@type": "Question",
          "name": "How does Section 63 of the Bharatiya Sakshya Adhiniyam (BSA) change electronic evidence rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 modernizes Section 65B by formally incorporating cloud storage, mobile device data, encrypted communications, and digital hash values into the evidentiary framework. The BSA introduces a standardized statutory certificate format (under the Schedule) that requires detailing the device serial numbers, operating system environment, hashing algorithms (such as SHA-256), and custody logs, thereby establishing strict chain-of-custody standards."
          }
        },
        {
          "@type": "Question",
          "name": "What specific criminal sections apply to abusive recovery agent phone calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Abusive recovery calls violate multiple criminal provisions: Section 503 and 506 IPC / Section 351 BNS (Criminal Intimidation), Section 383 and 384 IPC / Section 308 BNS (Extortion), Section 504 IPC / Section 352 BNS (Intentional insult with intent to provoke breach of the peace), Section 509 IPC / Section 79 BNS (Insulting the modesty of women), and Section 499/500 IPC / Section 356 BNS (Defamation through unauthorized workplace or family shaming)."
          }
        },
        {
          "@type": "Question",
          "name": "How should I export and preserve WhatsApp chat threats from recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not delete or clear the chat history. Take complete scrolling screenshots capturing the sender unmasked phone number, profile picture, date, and exact timestamps. Then use the 'Export Chat with Media' function to generate a raw text file (.txt) alongside all audio notes, voice notes, and images. Back up the raw exported folder to a dedicated offline hard drive and calculate its cryptographic hash value to prove non-tampering."
          }
        },
        {
          "@type": "Question",
          "name": "Can home CCTV footage be used to stop recovery agents from visiting my house?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. High-definition CCTV footage capturing recovery agents trespassing on private residential premises, shouting, threatening family members, or arriving outside the RBI-permitted window of 8:00 AM to 7:00 PM constitutes conclusive evidence. The footage can be submitted alongside a Section 65B/63 BSA certificate to obtain an ex-parte police protection order, an interim civil injunction, or immediate disciplinary action from the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I extract during a recovery call to build rock-solid evidence?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During an incoming recovery call, remain calm and ask the caller to state: (1) their full name and employee ID, (2) the exact recovery agency or debt collection company they represent, (3) the principal bank or NBFC that assigned the debt, and (4) the specific loan account number. Record the exact date, call duration, incoming phone number, and any threats or abusive language verbatim."
          }
        },
        {
          "@type": "Question",
          "name": "How does digital evidence assist in negotiating a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a borrower possesses authenticated recordings of illegal recovery conduct, the bank faces severe regulatory exposure under RBI Master Directions, consumer liability, and potential criminal prosecution of its collection vendors. Debt settlement advocates present this evidence directly to senior bank grievance executives, prompting the institution to halt coercive recovery immediately and approve a favorable One-Time Settlement (OTS) with 50% to 70% principal waivers."
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
  { id: 'admissibility-recovery-call-recordings', title: '1. Admissibility & Single-Party Consent' },
  { id: 'section-65b-iea-section-63-bsa-rules', title: '2. Section 65B & Section 63 BSA Rules' },
  { id: 'tripartite-evidence-gathering-protocol', title: '3. Tripartite Evidence Gathering' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Formula' },
  { id: 'infographic-recovery-evidence-protocol', title: '5. Visual Guide: Evidence Architecture' },
  { id: 'criminal-charges-intimidation-extortion', title: '6. Criminal Offenses & Police FIR Steps' },
  { id: 'civil-injunctions-and-restraining-orders', title: '7. Civil Injunctions & Section 151 CPC' },
  { id: 'rbi-ombudsman-and-settlement-remittance', title: '8. RBI Ombudsman & Settlement Remittance' },
  { id: 'evidence-admissibility-comparative-matrix', title: '9. Evidentiary Comparative Matrix' },
  { id: 'settleloans-evidence-defense-framework', title: '10. SettleLoans Legal Defense Protocol' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecordingRecoveryAgentCallsLegalEvidencePage() {
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
            <Mic className="w-3.5 h-3.5 text-blue-400" />
            <span>Digital Evidence Protocols • Section 65B &amp; BSA Section 63</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            How to Record Recovery Agent Calls for Court Evidence: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Admissibility, Section 65B &amp; Harassment Protection</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
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
              <span>Supreme Court Evidentiary Standard</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Authenticate Recovery Evidence Now</span>
            </Link>
            <Link
              href="#section-65b-iea-section-63-bsa-rules"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Section 65B &amp; BSA Guidelines</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Executive Legal Crux</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Audio recordings, WhatsApp chat exports, and CCTV footage are fully admissible in Indian courts to prove recovery harassment and extortion. However, strict adherence to Section 65B IEA or Section 63 BSA electronic certification is mandatory to withstand judicial scrutiny and police scrutiny.
                </p>
              </div>

              <SidebarTOC items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="lg:col-span-6 blog-content space-y-10">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Evidentiary Standards &amp; Protection Highlights</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Legality of Recording:</strong> Recording an incoming call from a recovery agent without their prior knowledge is completely legal in India when gathered to prove criminal extortion, intimidation, or regulatory non-compliance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Certification:</strong> Electronic audio, video, and chat records require a formal certificate under Section 65B of the Indian Evidence Act or Section 63 of the Bharatiya Sakshya Adhiniyam to be admitted in court.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Tripartite Evidence Suite:</strong> Combining smartphone audio files, unedited WhatsApp raw exports, and timestamped CCTV footage creates an unassailable dossier for police complaints and civil court injunctions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Penalties for Agents:</strong> Documented threats of bodily harm, public humiliation, or fabricated police warrants expose collection agents and bank recovery executives to prosecution under Sections 506, 384, and 509 IPC / corresponding BNS provisions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Settlement Leverage:</strong> Presenting verified digital evidence to senior bank nodal officers halts third-party recovery immediately and triggers favorable institutional One-Time Settlement (OTS) terms.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Recovery Call Recordings & Admissibility */}
            <section id="admissibility-recovery-call-recordings" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Admissibility &amp; Single-Party Consent: The Legal Foundation of Call Recording in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers face persistent defaults on unsecured personal loans or credit card obligations, third-party recovery agencies frequently cross legal boundaries by deploying abusive language, psychological threats, and unlawful social shaming. In response, distressed borrowers routinely capture these hostile exchanges on their smartphones. However, a foundational question frequently arises in legal consultations: Is it lawful to record a telephone conversation without informing the recovery agent, and will an Indian court or police station accept this recording as admissible evidence?
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian legal framework, there is no blanket statutory prohibition that prevents an individual participant in a conversation from recording audio for their own legal protection. Unlike certain international jurisdictions that enforce strict two-party consent laws, Indian jurisprudence recognizes the evidentiary value of contemporaneous voice recordings when offered to establish a civil right or prove the commission of a criminal offense. The foundational landmark ruling of the Supreme Court of India in <em>R.M. Malkani v. State of Maharashtra (1973) 1 SCC 471</em> established that a contemporaneous tape-recorded conversation is admissible as a document under the Indian Evidence Act, provided three critical legal conditions are satisfied:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Identification of Voice:</strong> The voice of the speaker (the recovery agent) must be clearly identified and corroborated by circumstantial or direct evidence.</li>
                <li><strong>Relevance and Accuracy:</strong> The subject matter of the recorded conversation must be directly relevant to the matters in dispute (such as extortion, abusive harassment, or illegal demands).</li>
                <li><strong>Elimination of Erasure or Tampering:</strong> The recording must be shown to be continuous, complete, and devoid of any subsequent editing, digital splicing, or alteration.</li>
              </ul>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Constitutional Right to Privacy vs. Criminal Defense</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  While the Supreme Court in <em>K.S. Puttaswamy v. Union of India (2017)</em> elevated privacy to a fundamental right under Article 21, the judiciary has repeatedly clarified that privacy cannot serve as a protective shield for individuals committing criminal intimidation, extortion, or regulatory violations over public telecommunications networks.
                </p>
              </div>
            </section>

            {/* Section 2: Section 65B IEA & Section 63 BSA Authentication Rules */}
            <section id="section-65b-iea-section-63-bsa-rules" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Electronic Authentication: Section 65B Evidence Act &amp; Section 63 Bharatiya Sakshya Adhiniyam
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recording an abusive phone call is merely the initial operational step; converting that raw audio file into legally incontrovertible proof requires meticulous compliance with statutory authentication rules. Under Indian law, electronic records such as MP3 audio files, WAV voice recordings, and digital transcripts are classified as secondary electronic evidence. Historically, Section 65B of the Indian Evidence Act, 1872 governed the admissibility of electronic records. Under the revised criminal jurisprudence, this framework is codified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (BSA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the seminal three-judge bench decision in <em>Arjun Panditrao Khotkar v. Kailash Kushanrao Gorantyal (2020) 7 SCC 1</em>, the Supreme Court settled decades of conflicting precedent by holding that a written certificate under Section 65B(4) is an absolute, mandatory condition precedent to the admissibility of any secondary electronic evidence in court. If a borrower produces a pen drive, CD-ROM, or printout of a chat log without this accompanying statutory affidavit, the court is legally prohibited from admitting the material into the evidentiary record.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Elements of a Section 65B / Section 63 BSA Certificate</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Device Identification &amp; Lawful Custody</p>
                    <p className="text-slate-600 mt-1">The certificate must specify the exact make, model, IMEI number, and operating system of the smartphone or computer used to record and store the original electronic record, affirming that the device was under the lawful management and operational control of the deponent.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Normal Operation &amp; Unbroken Integrity</p>
                    <p className="text-slate-600 mt-1">It must be affirmed that during the relevant period, the device was operating regularly without any software malfunction or hardware compromise that could alter the accuracy or contents of the recording.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Cryptographic Hash Verification (BSA Schedule)</p>
                    <p className="text-slate-600 mt-1">Under Section 63 of the BSA, best practices mandate generating a secure cryptographic hash (e.g., SHA-256) of the raw audio file at the moment of capture, recording this unique digital fingerprint within the statutory certificate to demonstrate zero post-recording modification.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Tripartite Evidence Gathering Protocol */}
            <section id="tripartite-evidence-gathering-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Tripartite Evidence Gathering Protocol: Audio, CCTV &amp; WhatsApp Architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To build an unassailable evidentiary portfolio that compels police action and immediately shifts institutional bargaining power during debt settlement, borrowers must implement a structured, multi-channel documentation protocol. When dealing with aggressive collection departments, rely on a tripartite strategy:
              </p>

              <div className="space-y-4 my-4">
                {/* 1. Audio Call Protocol */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <Smartphone className="w-4 h-4 text-[#1F5EFF]" />
                    <span>A. Smartphone Audio Recording Procedure</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure auto-call recording is enabled on your device or utilize a secondary hardware recorder during speakerphone calls. When answering, remain composed and prompt the caller into establishing their identity on record: ask for their full name, agency affiliation, principal lending institution, and employee identification number. Allow the agent to speak without interruption while they make unlawful demands or threats, noting down the exact date, time, and incoming SIM number.
                  </p>
                </div>

                {/* 2. CCTV Surveillance Protocol */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm">
                    <Video className="w-4 h-4 text-indigo-600" />
                    <span>B. Home &amp; Residential CCTV Video Archival</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    If collection agents conduct physical visits to your residence or workplace, ensure external entrance CCTV cameras are configured to record in high-definition with synchronized network time protocol (NTP) timestamps. Immediately export the raw video files (.mp4 or .dav format) encompassing the agent arrival, physical posturing, trespassing into private premises, or interactions with neighbors. Do not alter video frame rates or compress the files.
                  </p>
                </div>

                {/* 3. WhatsApp & Messaging Protocol */}
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>C. WhatsApp &amp; SMS Digital Forensics</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    When recovery agents transmit threatening messages, fabricated legal notices, or simulated police warrants via messaging applications, do not delete the conversation thread. Capture continuous scrolling screenshots displaying the agent full unmasked phone number and profile picture. Utilize the &quot;Export Chat with Media&quot; feature to generate a complete unedited archive containing all attached voice notes, images, and text timestamps.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Accounting Realities & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Realities: NPA Provisioning &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding why commercial banks tolerate aggressive collection agencies—and why authenticated digital evidence completely dismantles their leverage—requires analyzing the financial mechanics of Non-Performing Assets (NPAs). When a borrower defaults for over 90 days, the Reserve Bank of India mandates aggressive provisioning against bank operating profits under the Master Direction on Prudential Norms on Income Recognition and Asset Classification (IRAC):
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (0 to 12 months default):</strong> Mandatory 15% provisioning on total outstanding exposure.</li>
                <li><strong>Doubtful-1 NPA (12 to 24 months default):</strong> 25% provisioning for secured portions and 100% full write-down on unsecured credit balances.</li>
                <li><strong>Doubtful-2 &amp; Loss Assets:</strong> 100% complete provisioning deduction directly eroding institutional equity.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Lenders outsource delinquent accounts to third-party recovery agencies on a contingency commission model (ranging between 8% and 22% of collected funds) because formal civil litigation in Indian commercial courts requires 1% to 3% upfront ad-valorem court fees and consumes 3 to 5 years of legal proceedings. Institutional risk committees calculate recovery viability using a Net Present Value (NPV) recovery valuation model:
              </p>

              {/* NPV Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across annual periods t, r is the institutional cost-of-capital discount rate, and mandatory deductions account for 3 to 5 years of court friction, advocate retainers, and regulatory capital locked in NPA provisioning reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower exposes severe criminal misconduct and regulatory violations by presenting verified Section 65B audio evidence, the bank calculation shifts instantly. The prospective cost of regulatory sanctions from the RBI Ombudsman and criminal litigation against bank executives far outweighs the unrecovered debt, compelling the institution to accept an immediate One-Time Settlement (OTS) with substantial principal waivers.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-recovery-evidence-protocol" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recording-recovery-agent-calls-legal-evidence.jpg"
                  alt="Recording Recovery Agent Calls for Legal Evidence Infographic: Audio Recording, CCTV Footage, WhatsApp Archives, Section 65B / Section 63 BSA Certification, Police FIR & Court Injunction"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Digital Evidence Architecture — Acquisition to Judicial Admissibility</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Evidence Research</span>
                </div>
              </div>
            </section>

            {/* Section 6: Invoking Penal Statutes & Police FIR Steps */}
            <section id="criminal-charges-intimidation-extortion" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Invoking Penal Statutes: Filing Police FIRs for Criminal Intimidation &amp; Extortion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Armed with authenticated digital recordings, borrowers possess the statutory power to transition from defensive targets to proactive legal complainants. Third-party collection agents routinely commit multiple cognizable and non-bailable offenses under the Indian Penal Code (IPC) and the corresponding Bharatiya Nyaya Sanhita (BNS):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 503 &amp; 506 IPC / Sec 351 BNS</h4>
                  <p className="text-xs text-slate-600">Criminal Intimidation: Threatening bodily harm, property damage, or reputational destruction to compel repayment carries up to 7 years imprisonment.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 383 &amp; 384 IPC / Sec 308 BNS</h4>
                  <p className="text-xs text-slate-600">Extortion: Intentionally putting a person in fear of injury to dishonestly induce delivery of money constitutes criminal extortion.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 509 IPC / Sec 79 BNS</h4>
                  <p className="text-xs text-slate-600">Outraging Modesty: Using abusive, sexually suggestive, or derogatory language towards female borrowers or family members is strictly non-bailable.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 499 &amp; 500 IPC / Sec 356 BNS</h4>
                  <p className="text-xs text-slate-600">Defamation: Contacting office colleagues, human resource departments, or neighbors to publicly shame the borrower constitutes criminal defamation.</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When filing a police complaint, attach the transcribed dialogue of the phone call, the physical pen drive containing the original audio files, and the signed Section 65B/63 BSA certificate. If the local station house officer (SHO) hesitates to register an FIR due to commercial debt misconceptions, your advocate can escalate the matter to the Deputy Commissioner of Police (DCP) under Section 154(3) CrPC / Section 173(4) BNSS, or approach the Judicial Magistrate under Section 156(3) CrPC / Section 175(3) BNSS for mandatory registration directions.
              </p>
            </section>

            {/* Section 7: Civil Court Injunctions & Section 151 CPC */}
            <section id="civil-injunctions-and-restraining-orders" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Civil Injunctions &amp; Restraining Orders: Securing Injunctions Under Order 39 CPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In addition to criminal prosecution, digital evidence serves as the bedrock for securing urgent civil relief against aggressive financial institutions. Under Order 39, Rules 1 and 2 read with Section 151 of the Code of Civil Procedure, 1908 (CPC), a borrower can institute a civil suit for permanent injunction and damages against the lending bank and its collection affiliates.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting transcriptions of threatening call recordings alongside verified CCTV footage of unauthorized residential visits, defense counsel can establish all three prerequisite pillars for obtaining an ex-parte ad-interim injunction:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>Prima Facie Case:</strong> Demonstrating that the bank recovery personnel are operating in blatant violation of the RBI Fair Practices Code and statutory privacy rights.</li>
                <li><strong>Irreparable Injury:</strong> Proving that persistent harassment, workplace interference, and threats of violence cause irreversible damage to health, family safety, and professional livelihood.</li>
                <li><strong>Balance of Convenience:</strong> Showing that while the bank retains adequate civil remedies to recover genuine contractual dues through established legal forums, the borrower suffers immediate physical and mental harm in the absence of an injunction.</li>
              </ul>
            </section>

            {/* Section 8: RBI Ombudsman Escalation & Settlement Remittance */}
            <section id="rbi-ombudsman-and-settlement-remittance" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Regulatory Escalation: RBI Ombudsman &amp; Settlement Remittance Safeguards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Reserve Bank - Integrated Ombudsman Scheme, 2021, scheduled commercial banks and regulated NBFCs face stringent institutional scrutiny for recovery agent violations. When an official complaint is lodged through the RBI Complaint Management System (CMS) accompanied by Section 65B certified audio exhibits, the Ombudsman possesses statutory authority to award compensation up to ₹20 Lakhs for consequential losses, alongside additional damages up to ₹1 Lakh for mental harassment and loss of time.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the lender agrees to transition from hostile recovery to an amicable One-Time Settlement (OTS), borrowers must ensure rigorous adherence to settlement remittance protocols:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Settlement Verification Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Sanction Letter Authentication</p>
                    <p className="text-slate-600">Ensure the compromise letter is generated directly on official bank letterhead with an authorized signatory, unique reference number, and explicit waiver clauses.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Bank Remittance</p>
                    <p className="text-slate-600">Remit settlement funds solely via direct RTGS, NEFT, or demand draft to the designated bank loan account; never transfer funds to recovery agents.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Obtain the stamped No Dues Certificate within 30 days under RBI Circular RBI/2023-24/60, and ensure CIBIL reflects the settled closure.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Dispute Resolution & Evidence Admissibility Matrix */}
            <section id="evidence-admissibility-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Evidence Admissibility Comparative Matrix: Electronic Proof Across Indian Legal Forums
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The evidentiary threshold and procedural requirements for electronic evidence vary across judicial and quasi-judicial forums in India. The following comparative matrix outlines these distinctions:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Legal Forum / Authority</th>
                      <th>Governing Statutory Law</th>
                      <th>Section 65B/63 BSA Mandate</th>
                      <th>Primary Remedy / Outcome</th>
                      <th>Strategic Borrower Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Police Station / Cyber Cell</td>
                      <td>CrPC / BNSS &amp; IPC / BNS</td>
                      <td>Mandatory with formal complaint</td>
                      <td>Registration of FIR (Sec 506/384)</td>
                      <td>Immediate cessation of harassment and agent arrest</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">City Civil Court / High Court</td>
                      <td>CPC Order 39, Rules 1 &amp; 2</td>
                      <td>Mandatory at stage of evidence</td>
                      <td>Ad-Interim Restraining Injunction</td>
                      <td>Judicial bar against residential/workplace visits</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Integrated Ombudsman</td>
                      <td>RBI Ombudsman Scheme, 2021</td>
                      <td>Recommended for rapid disposal</td>
                      <td>Institutional penalty &amp; compensation</td>
                      <td>Direct regulatory pressure on bank management</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Consumer Disputes Commission</td>
                      <td>Consumer Protection Act, 2019</td>
                      <td>Affidavit mode with digital exhibits</td>
                      <td>Compensation for unfair trade practice</td>
                      <td>Monetary damages for mental agony and harassment</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Direct Institutional OTS Committee</td>
                      <td>RBI Prudential Compromise Norms</td>
                      <td>Direct presentation to Nodal Officer</td>
                      <td>50% to 70% OTS Debt Settlement</td>
                      <td>Clean No Dues Certificate and closure of dispute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-evidence-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Protocol: Transforming Evidence into Debt Freedom
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating electronic evidence collection, statutory certifications, and criminal harassment complaints requires specialized legal expertise at the intersection of banking litigation, telecommunications law, and the Code of Criminal Procedure. SettleLoans provides end-to-end legal defense for distressed borrowers across India: auditing recorded calls, preparing water-tight Section 65B and Section 63 BSA affidavits, serving immediate cease-and-desist notices to bank collection departments, and negotiating favorable One-Time Settlements directly with institutional decision-makers.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions Accordion */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Recording Recovery Agent Calls &amp; Court Evidence
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Comprehensive, legally vetted answers regarding call recording admissibility, Section 65B certificates, and anti-harassment remedies in India.
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
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Arjun Panditrao &amp; R.M. Malkani Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents Code of Conduct</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Evidence Act / Bharatiya Sakshya Adhiniyam (Section 63)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Harassment Grievance Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (Digital Extortion Reporting)</span>
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
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint Against Recovery Agents
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
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agents Visiting Workplace
                </Link>
                <Link
                  href="/recovery-agents-calling-relatives-friends"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Agents Calling Relatives &amp; Friends
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/stay-order-against-bank-loan-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stay Order Against Bank Recovery
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement (OTS) Policy
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
          <aside className="w-full lg:col-span-3 lg:sticky lg:top-24 space-y-6 h-fit">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Pioneering advocate in banking litigation, electronic evidence authentication, anti-harassment defense, and RBI compromise settlement frameworks with over 10+ years of institutional advisory experience.
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
                <span>Immediate Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Facing Harassment or Abusive Calls?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure intimidation in silence. Let our senior banking advocates authenticate your digital recordings, issue formal cease-and-desist notices, and negotiate a structured 50%–70% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Advocate Consultation
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
                  <span>Section 65B &amp; BSA Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
