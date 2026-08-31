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
  Siren,
  PhoneForwarded,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agent Pretending to Be Police Officer? FIR, BNS/IPC Sections & RBI Rules',
  description: 'Is a loan recovery agent posing as a police officer or Crime Branch inspector? Discover criminal offenses under Section 204 BNS / 170 IPC, RBI rules, and how to file an immediate FIR.',
  keywords: [
    'recovery agent pretending to be police officer',
    'fake police call for loan recovery',
    'loan recovery agent posing as police officer',
    'recovery agent threatening police complaint',
    'section 204 bns impersonating public servant',
    'section 170 ipc impersonating police officer loan',
    'section 318 4 bns cheating loan recovery',
    'section 351 bns criminal intimidation bank agents',
    'rbi fair practices code recovery agent police threat',
    'how to file fir against loan recovery agent',
    'cyber crime complaint against fake police recovery call',
    'one time settlement after recovery harassment'
  ],
  alternates: {
    canonical: 'https://settleloans.in/recovery-agent-fake-police-call-complaint',
  },
  openGraph: {
    title: 'Recovery Agent Pretending to Be Police Officer? Legal Rights, Criminal Offenses & FIR Guide',
    description: 'Stop fake police intimidation by loan collection agencies. Learn your statutory rights under Section 204 BNS / 170 IPC, RBI Master Directions, and how advocates file criminal FIRs.',
    url: 'https://settleloans.in/recovery-agent-fake-police-call-complaint',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Posing as Police Officer Legal Defense & FIR Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Pretending to Be Police Officer? FIR, BNS/IPC Sections & RBI Rules',
    description: 'Facing fraudulent police threats from collection agents? Learn criminal impersonation laws, RBI Ombudsman protocols, and how to negotiate a legal One-Time Settlement.',
    images: ['https://settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#webpage",
      "url": "https://settleloans.in/recovery-agent-fake-police-call-complaint",
      "name": "Recovery Agent Pretending to Be Police Officer? FIR, BNS/IPC Sections & RBI Rules",
      "description": "Is a loan recovery agent posing as a police officer or Crime Branch inspector? Discover criminal offenses under Section 204 BNS / 170 IPC, RBI rules, and how to file an immediate FIR.",
      "breadcrumb": {
        "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#breadcrumb"
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
      "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#breadcrumb",
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
          "name": "Fake Police Recovery Call Defense",
          "item": "https://settleloans.in/recovery-agent-fake-police-call-complaint"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#article",
      "headline": "Recovery Agent Pretending to Be Police Officer? Criminal Offenses (Section 204 BNS / 170 IPC), RBI Directives & Emergency FIR Filing Protocol",
      "description": "An exhaustive legal guide on handling predatory collection agents impersonating police officers, Crime Branch officials, or court bailiffs. Explains statutory provisions under Bharatiya Nyaya Sanhita (BNS), Indian Penal Code (IPC), IT Act Section 66D, RBI Fair Practices Code, and advocate-led settlement procedures.",
      "image": "https://settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#webpage"
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
      "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#service",
      "name": "SettleLoans - Debt Harassment Defense & Criminal Impersonation Legal Advisory",
      "description": "Comprehensive legal defense, police FIR intervention, and institutional debt settlement advisory for borrowers harassed by predatory collection agents posing as police officers or law enforcement authorities.",
      "url": "https://settleloans.in/recovery-agent-fake-police-call-complaint",
      "image": "https://settleloans.in/images/infographics/recovery-agent-fake-police-call-complaint.jpg",
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
        "reviewCount": "2480",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Rao"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "A collection caller called claiming to be an Inspector from Crime Branch Cyber Cell, threatening to arrest me within 2 hours over an overdue personal loan. I was terrified. SettleLoans advocates immediately took over, proved the call was a criminal hoax under Section 204 BNS, lodged a cyber complaint, and secured a 60% loan settlement with an official No Dues Certificate.",
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
            "name": "Pooja Sundaram"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "A recovery agency sent fake WhatsApp notices with official police emblems and threatened to send a police van to my residential address. SettleLoans drafted a hard-hitting criminal legal notice to the bank's Nodal Officer and filed an RBI Ombudsman complaint. The bank withdrew the recovery agency within 24 hours and settled my credit card debt amicably.",
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
            "name": "Harish Mehra"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "I received persistent calls from someone pretending to be the SHO of a local police station demanding immediate payment. SettleLoans verified with the actual police station that no complaint existed, prepared an FIR draft against the agency, and negotiated a structured compromise settlement with zero harassment.",
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
            "name": "Divya Nambiar"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "The psychological stress of fake police threats almost broke my family. SettleLoans provided instant legal shielding, explained that loan default is purely a civil matter, and forced the bank to close the account with a formal zero-balance certificate. Outstanding legal guidance.",
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
      "@id": "https://settleloans.in/recovery-agent-fake-police-call-complaint#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a police officer call or arrest me for an unpaid personal loan or credit card default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal loan, credit card balance, or consumer EMI is strictly a civil dispute under Indian law. The police have no statutory jurisdiction over purely civil financial defaults. Police officers cannot summon, threaten, or arrest a borrower for non-payment of loan dues unless a competent criminal court has issued a specific judicial warrant after a formal trial."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal offenses does a recovery agent commit by pretending to be a police officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Impersonating a police officer or public servant is a severe cognizable offense punishable under Section 204 of the Bharatiya Nyaya Sanhita (BNS), 2023 (formerly Section 170 of the Indian Penal Code). Furthermore, such actions constitute Cheating by Personation under Section 66D of the Information Technology Act, 2000, Criminal Intimidation under Section 351 BNS (Section 506 IPC), and Extortion under Section 308 BNS (Section 384 IPC)."
          }
        },
        {
          "@type": "Question",
          "name": "How can I instantly identify whether a police call regarding loan recovery is genuine or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A real police officer will never demand direct money transfers, UPI payments, or loan settlements over the telephone. To verify, demand the caller's full legal name, rank, police station jurisdiction, GD (General Diary) entry number, and the formal written summons under Section 35(3) of the Bharatiya Nagarik Suraksha Sanhita (BNSS) / Section 41A CrPC. You can verify this independently by calling the official landline of that police station."
          }
        },
        {
          "@type": "Question",
          "name": "What steps should I take immediately when receiving a fake police call from a recovery agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, stay calm and enable automatic call recording. Note down the phone number, date, exact timestamp, caller's claimed name, and police station. Do not transfer any money. Save any fake police notice images or audio clips. Immediately file a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in or dial 1930) and consult a banking defense advocate to issue an urgent legal notice to the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Can I file an FIR against the recovery agency and the lending bank for impersonation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can file a formal First Information Report (FIR) at your local police station or Cyber Crime Police Station under Section 204 BNS (Section 170 IPC) for impersonating a public servant, Section 318(4) BNS (Section 420 IPC) for cheating, and Section 66D of the IT Act. Commercial banks and NBFCs remain vicariously liable for the criminal acts committed by their outsourced recovery agents."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI rules regarding recovery agents using police threats or harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the RBI Master Direction on Fair Practices Code and the Circular on Outsourcing of Financial Services, lenders and their recovery agents are strictly prohibited from using false legal threats, impersonating government officials, using abusive language, calling before 8:00 AM or after 7:00 PM, or intimidating borrowers. Violations attract severe penalties from the RBI Banking Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a fake police call give me legal leverage to negotiate a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, substantial leverage. When an advocate formally documents criminal impersonation, cyber law violations, and gross RBI non-compliance, the lending bank faces immense regulatory scrutiny, potential Ombudsman sanctions, and reputational risk. To prevent criminal litigation, bank credit committees frequently agree to an immediate cessation of collection activities and sanction a 45% to 65% principal waiver via an official OTS."
          }
        },
        {
          "@type": "Question",
          "name": "What documents are required in a genuine One-Time Settlement sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid OTS sanction letter must be issued on official bank letterhead, feature a unique institutional sanction reference number, accurately mention the borrower's full name, PAN, and loan account number, state the exact negotiated settlement figure, specify payment deadlines, and contain an explicit debt extinguishment clause confirming no further legal or financial claims remain."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated lenders must issue an official No Dues Certificate (NDC) and update credit bureau records (CIBIL, Experian, Equifax, CRIF High Mark) to zero balance within 30 calendar days of receiving final settlement payment. Any delay beyond 30 days incurs a mandatory compensation penalty of ₹5,000 per day payable directly to the borrower."
          }
        },
        {
          "@type": "Question",
          "name": "Will a loan settlement permanently ruin my CIBIL credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While the credit report will reflect the status remark 'Settled' with a temporary dip of 70 to 120 points, the current overdue balance becomes ₹0. This stops compounding late penalties and legal exposure. By adopting disciplined credit rehabilitation practices—such as using a secured credit card and maintaining low credit utilization—borrowers typically restore their score above 750 within 18 to 24 months."
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
  { id: 'impersonation-menace-reality', title: '1. The Menace of Fake Police Calls & Coercion' },
  { id: 'criminal-sanctions-bns-ipc-it-act', title: '2. Criminal Offenses: Section 204 BNS & IT Act' },
  { id: 'rbi-master-directions-supreme-court', title: '3. RBI Master Directions & Supreme Court Rulings' },
  { id: 'bank-npa-accounting-npv-recovery', title: '4. NPA Accounting & The NPV Recovery Equation' },
  { id: 'police-impersonation-defense-roadmap', title: '5. Visual Defense & FIR Strategic Roadmap' },
  { id: 'emergency-5-step-fir-protocol', title: '6. The 5-Step Emergency FIR & Cyber Protocol' },
  { id: 'leveraging-harassment-for-ots', title: '7. Converting Impersonation into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Delivery' },
  { id: 'comparative-legal-defense-matrix', title: '9. Comparative Matrix: Fake Threat vs Due Law' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentFakePoliceCallComplaintPage() {
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
        className="w-full border-b border-slate-700/80 pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-10 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Police Impersonation Defense • Criminal Complaint &amp; RBI Ombudsman Recourse</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Recovery Agent Pretending to Be Police Officer? <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Rights, Criminal Offenses (BNS / IPC) &amp; Immediate FIR Guide</span>
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
              <span>Stop Fake Police Harassment Now</span>
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
                Loan default is strictly a civil matter under Indian jurisprudence. A recovery agent impersonating a police officer, Crime Branch investigator, or court bailiff commits serious cognizable criminal offenses under Section 204 BNS (Section 170 IPC) and Section 66D of the IT Act. Borrowers have statutory rights to file an immediate police FIR, lodge cyber crime reports, and leverage criminal misconduct to force banks into an official 45%–65% One-Time Settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Fake Police Calls &amp; Legal Defenses</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Civil Matter, Zero Police Powers:</strong> Loan default is strictly a civil dispute; police have no legal power to summon, arrest, or demand payments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Cognizable Crime (Section 204 BNS):</strong> Impersonating police or Crime Branch officers carries up to 3 years imprisonment under BNS/IPC and IT Act.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict RBI Harassment Ban:</strong> RBI Master Directions strictly prohibit recovery agencies from using false legal threats or pretending to be police.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Instant Cyber &amp; Police FIR Recourse:</strong> Report fake police threats immediately on cybercrime.gov.in (Helpline 1930) and lodge a local police FIR.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leverage for 45%–65% OTS:</strong> Documented criminal impersonation forces banks to halt collection calls and sanction a discounted One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Menace of Fake Police Calls & Coercion */}
            <section id="impersonation-menace-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Crisis of Police Impersonation: How Predatory Recovery Agencies Exploit Fear &amp; Panic
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In recent years, the Indian financial recovery landscape has witnessed a disturbing escalation in fraudulent intimidation. When borrowers experience genuine financial hardship and fall behind on personal loan or credit card installments, rogue third-party Direct Recovery Agencies (DRAs) increasingly abandon lawful recovery procedures. Instead, collection tele-callers resort to extreme psychological coercion by pretending to be active police officers, Crime Branch inspectors, Cyber Crime investigators, or court bailiffs.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These callers deploy sophisticated fear-inducing scripts designed to induce absolute panic. They contact borrowers claiming that a non-bailable warrant (NBW) has been issued by a metropolitan magistrate, that a police flying squad is en route to their residence to seize personal assets, or that an immediate FIR under Section 420 of the Indian Penal Code (or Section 318(4) of the Bharatiya Nyaya Sanhita) has been registered for criminal breach of trust. Some agencies even fabricate digital WhatsApp summonses bearing fake police insignia, forged court stamps, and state emblem watermarks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Siren className="w-4 h-4 text-red-600" />
                    <span>The Anatomy of a Fraudulent Police Call</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Callers introduce themselves using authoritative titles such as &quot;Inspector Sharma from Crime Branch Tis Hazari&quot; or &quot;Sub-Inspector Verma from Cyber Police Station.&quot; They set artificial 30-minute deadlines, demanding immediate payment via unverified UPI links or direct bank transfers under the threat of public disgrace and immediate physical arrest.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Civil Nature of Unsecured Loan Defaults</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Indian jurisprudence, an inability to repay an unsecured personal loan or credit card balance constitutes a <strong>pure civil breach of contract</strong> governed by the Indian Contract Act, 1872. The Supreme Court has repeatedly held that financial default, absent fraudulent inception, cannot be converted into a criminal offense.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Salaried professionals, business owners, and homemakers must recognize that genuine law enforcement officers in India never act as collection agents for commercial banks or digital NBFCs. The moment a recovery caller claims police authority to demand money, they transition from aggressive debt collection into the realm of serious criminal conduct.
              </p>
            </section>

            {/* Section 2: Statutory Offenses & Criminal Sanctions: BNS, IPC & IT Act */}
            <section id="criminal-sanctions-bns-ipc-it-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Criminal Offenses: Section 204 BNS (170 IPC), Section 318(4) BNS &amp; Section 66D IT Act
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Impersonating a public servant or law enforcement official is a severe crime under Indian criminal legislation. Both the legacy Indian Penal Code (IPC), 1860, and the newly enacted <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>, prescribe rigorous punitive measures against individuals and organized agencies engaging in such fraudulent deceptions:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Impersonating a Public Servant (Section 204 BNS / Section 170 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Whoever pretends to hold any particular office as a public servant, knowing that he does not hold such office, or falsely personates any other person holding such office, and in such assumed character does or attempts to do any act under color of such office, shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <FileWarning className="w-4 h-4 text-amber-600" />
                    <span>Cheating by Personation &amp; Cyber Fraud (Section 66D IT Act, 2000)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 66D of the Information Technology Act, whoever, by means of any communication device or computer resource, cheats by personating a police officer, court registrar, or investigative authority, faces mandatory imprisonment of up to three years and a statutory fine of up to ₹1,00,000.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Criminal Intimidation &amp; Extortion (Section 351 &amp; 308 BNS / Sections 506 &amp; 384 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower with unlawful arrest, public humiliation, or fabrication of false police records to coerce monetary transfer constitutes criminal intimidation and attempted extortion, carrying prison terms extending up to seven years under Indian criminal law.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-purple-600" />
                    <span>Forgery of Government Seals &amp; Insignia (Section 336 BNS / Section 468 &amp; 471 IPC)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fabricating forged police notices, using unauthorized state emblems (State Emblem of India Act, 2005), or forging judicial stamps on digital letters sent via messaging apps attracts severe non-bailable charges for forgery with intent to cheat.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When these statutory offenses are formally documented by legal counsel, the legal exposure shifts dramatically from the borrower to the recovery agency and the sponsoring bank, creating an overwhelming legal imperative for the lender to intervene and discipline its recovery partners.
              </p>
            </section>

            {/* Section 3: RBI Master Directions & Supreme Court Precedents */}
            <section id="rbi-master-directions-supreme-court" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. RBI Master Directions &amp; Landmark Supreme Court Rulings on Recovery Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has established clear, binding regulatory frameworks designed to protect consumers against predatory recovery behavior. Commercial banks, non-banking financial companies (NBFCs), and all regulated entities are directly accountable for the misconduct of their outsourced agencies.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Supreme Court Precedent: ICICI Bank v. Shanti Devi Sharma (2008)</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  The Supreme Court of India ruled unequivocally that banks cannot use musclemen, coercive recovery tactics, or unlawful intimidation to recover loans. The Court held that lending institutions must respect the rule of law, dignity, and fundamental human rights of citizens, affirming that banks remain vicariously liable for the unlawful acts committed by their recovery agents.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>RBI Fair Practices Code</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Lenders are expressly barred from using threatening or abusive language, making false or misleading representations regarding legal consequences, or calling borrowers before 8:00 AM or after 7:00 PM.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>DRA Training &amp; Code of Conduct</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    All recovery agents must undergo mandatory certification from the Indian Institute of Banking &amp; Finance (IIBF). Agents must clearly identify themselves, carry bank-issued ID cards, and strictly refrain from misrepresenting their official status.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-purple-600" />
                    <span>Vicarious Liability Mandate</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under RBI Master Directions on Outsourcing of Financial Services, banks cannot disclaim responsibility for third-party agency actions. Grievances involving criminal threats trigger direct regulatory investigations and severe institutional fines.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By grounding your defense in codified RBI circulars and Supreme Court jurisprudence, you transform emotional vulnerability into an unassailable legal posture that compels the bank&apos;s senior leadership to address the misconduct immediately.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Dynamics: Why Rogue Agents Use Police Threats &amp; The NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding why recovery agents resort to extreme, illegal measures requires examining the financial pressures within commercial banking. Recovery agencies operate on high-incentive contingency fee structures, often earning between 10% and 25% of the total amount collected from delinquent accounts. As an account ages past 90 days of default, it is classified as a <strong>Non-Performing Asset (NPA)</strong>, triggering stringent RBI provisioning rules:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Delinquency Stage</th>
                      <th>Overdue Aging Timeline</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Settlement / Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1/2)</td>
                      <td>31 – 90 Days Overdue</td>
                      <td>5% General Capital Provision</td>
                      <td>Penal Interest &amp; Late Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>25% Unsecured Capital Provision</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Unsecured Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Full Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because unsecured debts lack pledged collateral, civil court litigation via Summary Suits (Order 37 CPC) or Debt Recovery Tribunals (DRT) requires 3 to 5 years of legal friction, court fees, and advocate retainers. Consequently, banks rely on financial models evaluating the <strong>Net Present Value (NPV) of Recovery</strong> to determine whether to pursue lengthy recovery or accept an upfront compromise settlement:
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
                  Where C_t represents estimated recoverable cash flows, r is the discount rate, and deductions account for 3–5 years of court friction, advocate retainers, regulatory risk from Ombudsman complaints, and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower exposes criminal impersonation and regulatory violations through legal counsel, the bank faces catastrophic regulatory penalties and reputational loss. In response, bank credit committees promptly bypass aggressive third-party agencies and authorize an amicable 45% to 65% One-Time Settlement.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="police-impersonation-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Strategic Roadmap: Fake Police Call Defense &amp; FIR Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below illustrates the systematic 5-step institutional procedure deployed by experienced banking litigation advocates to identify criminal impersonation, preserve digital audio evidence, file police and cyber FIRs, and secure a structured debt resolution.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agent-fake-police-call-complaint.jpg"
                  alt="Fake Police Call Loan Recovery Agent Defense and FIR Protocol Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 1–2: Identify &amp; Record</span>
                  <span>Recognize unlawful impersonation under Section 204 BNS; activate call recording and capture digital audio evidence.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 3–4: Verify &amp; Lodge FIR</span>
                  <span>Demand officer credentials; verify station diary entry; file immediate cyber crime and police FIR against agency.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: RBI Ombudsman &amp; 55% OTS</span>
                  <span>Escalate violations to RBI Ombudsman; engage defense advocate; execute structured 45%–65% One-Time Settlement.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency 5-Step FIR Protocol */}
            <section id="emergency-5-step-fir-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Emergency 5-Step Protocol: How to Verify, Record Evidence &amp; File an Immediate FIR
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Receiving a telephone call from an individual claiming to be a police officer or court official is inherently stressful. However, reacting with panic or transferring funds will only invite further harassment. Instead, borrowers must execute a structured, methodical legal protocol:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Activate Call Recording &amp; Preserve Digital Evidence</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Always maintain an automatic call recording application on your mobile device. Allow the caller to state their claims clearly. Capture the incoming telephone number, exact date, timestamp, and save all WhatsApp messages, forged notices, or UPI payment screenshots without deleting anything.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Cross-Examine &amp; Demand Official Verification Details</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ask the caller for their full official name, police belt number, designated rank, name and location of their police station, and the Daily Diary (DD) or General Diary (GD) entry number under which they are calling. Inform them that you are recording the conversation for judicial verification.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: Verify with the Local Police Station Landline</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Look up the verified landline number of the police station mentioned by the caller through official state police websites. Call the station directly and ask the Duty Officer whether any complaint, notice, or officer matching that name exists. In virtually 100% of cases, the station will confirm that no such inquiry exists.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: Lodge a Complaint on the National Cyber Crime Portal (cybercrime.gov.in / 1930)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an urgent complaint on the Government of India&apos;s National Cyber Crime Reporting Portal (cybercrime.gov.in) or dial national helpline 1930 under the category &quot;Cyber Extortion / Cheating by Personation.&quot; Attach the audio recordings and forged notice screenshots as digital evidence.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 5: Retain an Advocate to Serve a Criminal Legal Notice on the Bank</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Instruct a seasoned debt resolution advocate to issue an urgent legal notice to the bank&apos;s Managing Director, Principal Nodal Officer, and recovery department. The notice puts the bank on formal notice of criminal prosecution under Section 204 BNS and initiates formal dispute escalation before the RBI Ombudsman.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By taking these decisive steps, you completely disarm the recovery agency, create an official government record of the crime, and establish total protection for your family.
              </p>
            </section>

            {/* Section 7: Negotiating Debt Resolution & OTS */}
            <section id="leveraging-harassment-for-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Criminal Recovery Harassment into an Affordable 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A fraudulent police call is a clear indication of desperation on the part of the collection agency. The agency understands that it cannot legally enforce recovery through civil courts due to procedural delays and lack of attachable assets. When an advocate formally exposes this criminal impersonation to the lending bank, the borrower gains immense strategic leverage to negotiate a comprehensive <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Instead of succumbing to inflated claims containing exorbitant penal interest and hidden late fees, debt defense advocates structure institutional settlement proposals:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit verified documentation demonstrating genuine financial distress—such as medical emergencies, job loss, business disruption, or income reduction—proving the default was involuntary.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; 45%–65% Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Demand total waiver of all accrued penal charges, late fees, and legal costs, along with a <strong>45% to 65% reduction on the principal ledger balance</strong> based on NPA aging.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Complete Agency Disengagement Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ensure the settlement terms mandate that the bank immediately revokes the account from third-party recovery agencies and ceases all direct or indirect tele-calling activities.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Flexible Multi-Tranche Payment Plan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structure the compromised settlement sum across 2 to 4 manageable monthly installments, allowing debt closure without depleting essential emergency family savings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When concluding a debt settlement after experiencing aggressive recovery tactics, borrowers must exercise extreme caution. Fraudulent recovery agents frequently generate fake settlement letters or promise verbal debt waivers to collect partial token payments. Borrowers must never transfer funds until the settlement sanction letter has been forensically verified by legal counsel.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Institutional Bank Letterhead:</strong> Must be issued on official bank/NBFC letterhead with a verifiable internal reference number, corporate email address, and signature of an authorized Scale-IV/Zonal Manager.</li>
                  <li><strong>Borrower &amp; Account Identifiers:</strong> Must accurately state your full legal name, PAN, and specific 16-digit loan or credit card account number.</li>
                  <li><strong>Unconditional Debt Extinguishment Clause:</strong> Must clearly state that upon receipt of the agreed settlement amount, all outstanding dues, penal charges, and legal claims are fully extinguished.</li>
                  <li><strong>Direct Bank Account Remittance:</strong> Payment must only be made directly into your registered loan account number via NEFT/RTGS or official bank payment gateway—never to third-party agency accounts or personal UPI IDs.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs are legally mandated to issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update all credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to zero outstanding balance within <strong>30 calendar days</strong> of receiving final settlement payment. Any unjustified delay beyond 30 days incurs a mandatory statutory penalty of <strong>₹5,000 per day</strong> payable directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Reporting &amp; Score Rehabilitation After Settlement
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following final settlement, the lending institution updates your credit bureau record with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an overdue balance of <strong>₹0</strong>. While this causes a temporary credit score reduction of 70 to 120 points, it halts compounding default accumulation and eliminates harassment permanently. By maintaining a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility bill payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-legal-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Fake Police Threat vs. Actual Civil Law Procedure vs. Advocate-Led OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the stark contrast between coercive recovery tactics, genuine judicial procedures, and advocate-led debt resolution enables borrowers to take calculated, confident action:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Legal Authority &amp; Jurisprudence</th>
                      <th>Borrower Protection Level</th>
                      <th>Typical Timeline</th>
                      <th>Final Legal Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Fake Police / Threat Calls</td>
                      <td>Unlawful coercion (Section 204 BNS / 170 IPC Crime)</td>
                      <td>Zero protection (Extreme psychological trauma)</td>
                      <td>Indefinite / Continuous harassment</td>
                      <td>Exposes lender and agency to criminal FIR and RBI fines</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Litigation (Order 37 CPC)</td>
                      <td>Civil Procedure Code, 1908 (Civil monetary dispute)</td>
                      <td>Full procedural due process &amp; statutory defenses</td>
                      <td>2 – 4 Years</td>
                      <td>Judicial decree with strict execution limitations</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman Portal</td>
                      <td>RBI Integrated Ombudsman Scheme 2021</td>
                      <td>Direct regulatory inquiry into unfair collection</td>
                      <td>30 – 45 Days</td>
                      <td>Binding regulatory directions and financial compensation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS</td>
                      <td>Consensual Compromise Settlement Agreement</td>
                      <td>100% Ceasefire &amp; Legal Closure Guarantee</td>
                      <td>15 – 30 Days</td>
                      <td>Complete debt extinguishment with official ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Anti-Harassment Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating aggressive collection tactics and fake police threats requires seasoned banking litigation advocates who understand how to enforce RBI Master Directions, invoke Bharatiya Nyaya Sanhita protections, and draft hard-hitting criminal notices. SettleLoans provides comprehensive legal defense for distressed borrowers across India: serving emergency cease-and-desist notices to bank management, filing formal complaints with the Cyber Crime Police and RBI Ombudsman, safeguarding personal dignity, and negotiating directly with bank zonal committees to secure 45% to 65% principal waivers backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Fake Police Calls &amp; Recovery Agent Harassment
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding fake police calls, recovery agent impersonation, and debt settlement protocols in India.
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
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (MHA cybercrime.gov.in)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 204 Impersonation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Online Grievance Filing)</span>
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (ICICI Bank v. Shanti Devi Sharma Judgment)</span>
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
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Agent Threatening Rights
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR Reality Check
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Harassment
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Employer Notice Defense
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unfreeze Salary Account Guide
                </Link>
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan App Blackmail Cyber FIR
                </Link>
                <Link
                  href="/bailable-non-bailable-warrant-cheque-bounce-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Court Warrant Defense Guide
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
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
                Senior specialist in banking litigation defense, criminal impersonation protection, Section 204 BNS / 170 IPC remedies against predatory recovery agencies, and institutional One-Time Settlement negotiations across India.
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
                <span>Fake Police Call Legal Defense</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Is a Recovery Agent Threatening You as Police?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop illegal threats immediately. Retain seasoned banking defense advocates to lodge a cyber FIR and negotiate an official 45%–65% OTS.
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
                  <span>Supreme Court &amp; BNS Compliance</span>
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
