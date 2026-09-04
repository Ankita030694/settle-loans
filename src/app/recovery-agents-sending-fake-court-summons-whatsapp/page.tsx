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
  FileWarning,
  Search,
  MessageSquareWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fake Court Notice by Loan Recovery Agent on WhatsApp: Legal Rights & FIR Process',
  description: 'Received a fake court notice or arrest warrant on WhatsApp from a recovery agent? Learn how to identify forged court summons, Section 336/338 BNS and 465/471 IPC penalties, and how to take legal action.',
  keywords: [
    'fake court notice by loan recovery agent on whatsapp',
    'fake legal notice on whatsapp for personal loan',
    'forged lok adalat notice recovery agent',
    'fake arrest warrant loan recovery whatsapp',
    'section 336 338 BNS loan recovery',
    'section 465 471 IPC court notice forgery',
    'how to identify fake court summons whatsapp',
    'fir against loan recovery agent for fake notice',
    'rbi ombudsman complaint fake legal notice',
    'police complaint against recovery agency forgery'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp',
  },
  openGraph: {
    title: 'Fake Court Notice by Loan Recovery Agent on WhatsApp: Legal Truth vs Forged Threats',
    description: 'Comprehensive legal analysis on fabricated court summons, fake Lok Adalat seals, and bogus arrest notices sent by recovery agents on WhatsApp. Discover statutory remedies under BNS, IPC, and RBI directives.',
    url: 'https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-sending-fake-court-summons-whatsapp.jpg',
        width: 1200,
        height: 675,
        alt: 'Fake Court Notice by Loan Recovery Agent on WhatsApp Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fake Court Notice on WhatsApp from Recovery Agents: What to Do?',
    description: 'Received a terrifying PDF claiming to be a court summons or arrest order on WhatsApp? Understand why it is a criminal forgery under Sections 336/338 BNS & 465/471 IPC, and how advocates stop harassment.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-sending-fake-court-summons-whatsapp.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#webpage",
      "url": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp",
      "name": "Fake Court Notice by Loan Recovery Agent on WhatsApp: Legal Rights & FIR Process",
      "description": "Exhaustive legal guide on borrower protections against fabricated court notices, bogus arrest summons, and forged Lok Adalat orders sent on WhatsApp by loan recovery agencies. Covers Section 336/338 BNS, Sections 465/471 IPC, RBI Fair Practices Code, and debt settlement strategies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#breadcrumb",
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
          "name": "Fake Court Notice on WhatsApp",
          "item": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#article",
      "headline": "Fake Court Notice by Loan Recovery Agent on WhatsApp: Legal Rights, Forgery Laws & How to Take Action",
      "description": "An in-depth legal examination of forged court summons, fake Lok Adalat seals, and deceptive arrest threats delivered via WhatsApp by loan collection agencies. Details criminal liabilities under Sections 336/338 BNS and Sections 465/471 IPC, RBI Fair Practices Code, and advocate-led debt resolution protocols.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-sending-fake-court-summons-whatsapp.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#webpage"
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
      "logo": "https://www.settleloans.in/logo/logo.svg",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#service",
      "name": "SettleLoans - Legal Defense & Loan Settlement Services",
      "description": "Nationwide legal defense against unlawful recovery agent intimidation, forged court notices, and criminal deception, paired with institutional One-Time Settlement (OTS) negotiations.",
      "url": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-sending-fake-court-summons-whatsapp.jpg",
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
        "reviewCount": "2830",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwar Sharma"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "I received an urgent PDF on WhatsApp stamped with a fake District Court seal and a fabricated arrest warrant for a ₹4 Lakh overdue personal loan. SettleLoans advocates verified on the e-Courts portal that no such case existed, filed an official cyber crime complaint, and issued a legal notice to the bank. The bank recalled the agency and settled the loan for a 50% waiver.",
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
            "name": "Sunita Menon"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "A collection agency sent me a fake National Lok Adalat summon claiming police would come to my office within 2 hours. SettleLoans stepped in immediately, explained Section 465 IPC forgery laws, and filed an RBI Ombudsman complaint. All threatening messages stopped instantly.",
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
            "name": "Manish Agarwal"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "The psychological terror of receiving fake police notices on WhatsApp was unbearable. Ashish Jhangra and his legal team took charge, demonstrated the forgery to the lender's nodal desk, and secured a clean settlement with an official No Dues Certificate.",
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
            "name": "Kavita Rao"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "Highly professional legal experts. They exposed the fabricated digital stamps on the recovery agent's WhatsApp notice. With their legal shield, I was able to settle my credit card dues peacefully without fear.",
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
      "@id": "https://www.settleloans.in/recovery-agents-sending-fake-court-summons-whatsapp#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can Indian courts serve legal summons or arrest warrants directly through WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under the Code of Civil Procedure, 1908 (Order V Rule 9), official court summons must be served by an authorized Court Bailiff, registered post with acknowledgment due, speed post, or an approved courier. While the Supreme Court and High Courts permit electronic service via WhatsApp or email in specific ongoing civil litigation, it requires prior judicial sanction, an authentic Case Number Record (CNR) verifiable on the official e-Courts portal, and an accompanying court-stamped process memo. Indian courts never send informal PDF arrest warrants or urgent settlement ultimatums over WhatsApp from personal mobile numbers."
          }
        },
        {
          "@type": "Question",
          "name": "Is sending a fake court notice or fabricated judicial seal a criminal offense in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, it is a grave cognizable criminal offense. Fabricating court documents, forging judicial seals, creating counterfeit judge signatures, or sending bogus arrest summons constitutes Forgery under Section 465 IPC (Section 336 BNS), Forgery of Court Records under Section 466 IPC (Section 338 BNS, carrying up to 7 years imprisonment), Forgery for Purpose of Cheating under Section 468 IPC, Using Forged Documents under Section 471 IPC (Section 340 BNS), Criminal Intimidation under Section 506 IPC (Section 351 BNS), Extortion under Section 383/384 IPC (Section 308 BNS), and Digital Impersonation Fraud under Section 66D of the Information Technology Act, 2000."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify if a court notice received on WhatsApp is real or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every genuine Indian court summon contains a 16-digit alphanumeric Case Information System (CIS) Case Number Record (CNR) number, a designated court room number, and the presiding judicial officer's designation. You can independently verify any genuine case by entering the CNR number on the official e-Courts mobile app or website (services.ecourts.gov.in). If the notice lacks a verifiable CNR number, contains urgent countdown timers, demands immediate UPI transfers, or mentions immediate police raid teams, it is 100% fabricated."
          }
        },
        {
          "@type": "Question",
          "name": "Can National Lok Adalat issue an arrest warrant or police seizure order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. National Lok Adalats organized under the Legal Services Authorities Act, 1987 are strictly voluntary, pre-litigation or pending dispute conciliation bodies. Lok Adalats possess zero punitive powers, cannot issue non-bailable warrants, cannot direct police arrests, and cannot order asset attachment. Any notice claiming that a Lok Adalat has issued an arrest warrant or directed local police to raid your house is entirely fraudulent."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate legal steps should I take after receiving a fake court notice on WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not delete the chat. Take complete high-resolution screenshots showing the sender's phone number, profile image, date, and time. Export the full WhatsApp chat history along with the raw PDF file. Do not make any panic payments. Engage a debt settlement advocate to serve a statutory Cease-and-Desist notice upon the lending bank's Principal Nodal Officer and Managing Director, and file an official complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and with the local police station."
          }
        },
        {
          "@type": "Question",
          "name": "Is the lending bank legally responsible for fake notices sent by outsourced recovery agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the Reserve Bank of India (RBI) Master Directions on Outsourcing of Financial Services and Fair Practices Code (Circular RBI/2022-23/108), regulated commercial banks and NBFCs bear absolute vicarious liability for all acts and omissions of their outsourced recovery agencies. The RBI strictly prohibits lenders from engaging in deceptive intimidation or sending misleading legal representations. Borrowers can file a formal complaint with the RBI Integrated Ombudsman for severe monetary compensation and disciplinary action against the bank."
          }
        },
        {
          "@type": "Question",
          "name": "Can I go to jail for defaulting on an unsecured personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal loan or credit card is purely a civil breach of contract under the Indian Contract Act, 1872. There is no criminal liability, arrest, or imprisonment for honest financial inability to repay unsecured commercial debt in India. Arrest is only conceivable in cases involving proven fraudulent loan applications with forged income credentials (cheating) or dishonored cheques under Section 138 of the Negotiable Instruments Act, which are bailable offenses resolved through compounding."
          }
        },
        {
          "@type": "Question",
          "name": "How does legal representation by SettleLoans resolve the dispute and protect the borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SettleLoans advocates issue a formal Vakalatnama and legal representation notice to the bank's senior leadership, bringing an immediate halt to all third-party collection harassment. By exposing the forged notices and invoking criminal statutes alongside RBI regulations, our legal team shifts the lender into defensive risk mitigation. We then steer the matter into institutional channels to negotiate an official 40% to 65% One-Time Settlement (OTS) supported by a genuine bank sanction letter and No Dues Certificate."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'rise-of-deceptive-whatsapp-notices', title: '1. Deceptive WhatsApp Notices' },
  { id: 'forensics-identifying-fake-court-summons', title: '2. Forensics of Fake Notices' },
  { id: 'statutory-criminal-laws-bns-ipc', title: '3. Sections 336/338 BNS & IPC' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. Bank Accounting & NPV Model' },
  { id: 'infographic-fake-notices-vs-legal-reality', title: '5. Legal Reality Infographic' },
  { id: 'criminal-proceedings-fir-cyber-crime', title: '6. Filing FIR & Cyber Crime' },
  { id: 'civil-procedure-real-summons-protocols', title: '7. Order V CPC Summons Rules' },
  { id: 'direct-bank-settlement-ots-cibil', title: '8. Settlement, NDC & CIBIL' },
  { id: 'comparative-matrix-fake-vs-real-notices', title: '9. Comparative Verification Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Shield' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function FakeCourtNoticeWhatsAppPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Protections • Court Summons &amp; Forgery Penalties</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Fake Court Notice by Loan Recovery Agent on WhatsApp: <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Rights, Forgery Laws &amp; How to Take Action</span>
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
              <span>RBI Fair Practices &amp; High Court Precedent Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Illegal Fake Notices Now</span>
            </Link>
            <Link
              href="#statutory-criminal-laws-bns-ipc"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Statutory Forgery Protections</span>
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
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Legal Facts: WhatsApp Legal Notices &amp; Forgery Protections</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Judicial Validity:</strong> Indian courts do not dispatch informal PDF summons, urgent arrest threats, or immediate seizure orders through WhatsApp from personal mobile numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Severe Criminal Forgery Penalties:</strong> Fabricating court records, judges&apos; signatures, or Lok Adalat stamps violates Section 338 BNS and Section 466 IPC, punishable by up to 7 years of rigorous imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verifiable on e-Courts Portal:</strong> Every authentic Indian court proceeding carries a verifiable 16-digit CNR number on the official e-Courts portal; fake notices invariably lack authentic case metadata.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Vicarious Bank Liability:</strong> Under RBI Master Directions, commercial banks and NBFCs are strictly liable for the deceptive acts of their outsourced collection agencies, exposing lenders to heavy regulatory penalties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate-Led Strategic Shield:</strong> Serving statutory Cease-and-Desist notices and criminal complaints forces lenders to withdraw aggressive agencies and negotiate structured 40% to 65% One-Time Settlements (OTS).</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Rise of Deceptive WhatsApp Legal Notices */}
            <section id="rise-of-deceptive-whatsapp-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Rise of Deceptive WhatsApp Legal Notices: Unmasking Collection Agency Intimidation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India&apos;s rapidly evolving digital lending landscape, distressed borrowers navigating overdue personal loans, credit card balances, or micro-fintech borrowings are increasingly confronted with an alarming collection tactic: receiving counterfeit legal notices, fabricated court summons, and phony arrest warrants directly on WhatsApp. Unregulated third-party collection agencies, operating under immense pressure to recover delinquent accounts, frequently bypass legitimate judicial channels to deploy high-pressure psychological warfare. These agencies generate deceptive PDF documents adorned with forged emblems of the Supreme Court of India, National Lok Adalat seals, bogus police department crests, and fictitious judicial signatures designed to induce instantaneous panic.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The core motivation behind these fabricated electronic notices is to create an artificial legal emergency. The messages typically accompany threatening ultimatums stating that a non-bailable arrest warrant has been signed by a Chief Judicial Magistrate, that a local police team has been dispatched to the borrower&apos;s workplace, or that a National Lok Adalat bench will issue attachment orders within two hours unless an immediate online transfer is executed. For borrowers unfamiliar with the intricate procedures of Indian civil and criminal jurisprudence, such graphic threats create severe emotional distress, prompting many to borrow from predatory loan sharks or liquidate family savings to appease aggressive recovery agents.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Foundational Legal Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Defaulting on an unsecured personal loan or credit card is strictly a civil dispute governed by contract law. No judicial magistrate, civil court, or police station in India issues immediate arrest warrants, WhatsApp seizure notices, or two-hour repayment countdowns for an unsecured financial default.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To effectively dismantle this deceptive practice, borrowers must understand that third-party recovery agencies possess absolute zero judicial authority. They are neither officers of the court nor law enforcement officials. When collection agents fabricate judicial stationery or send counterfeit legal notices across messaging platforms, they cross the boundary from aggressive civil debt collection into serious, cognizable criminal offenses punishable under Indian penal statutes.
              </p>
            </section>

            {/* Section 2: Forensics of Forgery */}
            <section id="forensics-identifying-fake-court-summons" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Forensics of Forgery: How to Identify Fake Court Summons, Bogus Seals &amp; Phony Lok Adalat Orders
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Identifying a forged WhatsApp legal notice requires analyzing specific structural, grammatical, and procedural red flags inherent in collection agency fabrications. Authentic judicial notices in India adhere to strict statutory formatting under the High Court Rules and the Civil Procedure Code, 1908. In contrast, recovery agency fabrications are typically produced using desktop publishing templates that contain glaring legal and factual anomalies.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The most critical forensic indicator is the complete absence of a valid Case Information System (CIS) Case Number Record (CNR). Under the nationwide e-Courts initiative managed by the e-Committee of the Supreme Court of India, every single plaint, petition, summary suit, or criminal complaint registered across District Courts and High Courts is assigned a unique, immutable 16-digit alphanumeric CNR number. If a notice received on WhatsApp displays vague notations such as &quot;Case Ref: REC/2026/DL/9812&quot; or &quot;Summons No: NBFC/COURT/772&quot; rather than a verifiable CNR number, the document is an absolute fabrication.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Forensic Red Flags in Fabricated WhatsApp Legal Notices</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Fabrication of National Lok Adalat Powers</p>
                    <p className="text-slate-600 mt-1">
                      Agencies routinely send PDF notices titled &quot;National Lok Adalat Final Arrest Notice&quot; or &quot;Lok Adalat Non-Bailable Warrant&quot;. Under the Legal Services Authorities Act, 1987, Lok Adalats are purely voluntary conciliation forums. They possess zero criminal jurisdiction, cannot issue arrest warrants, and cannot direct police attachment. Any notice claiming punitive Lok Adalat action is an outright forgery.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Fictitious Urgency &amp; Direct UPI / Bank Transfer Demands</p>
                    <p className="text-slate-600 mt-1">
                      Legitimate court summons provide a formal hearing date typically scheduled several weeks in advance to allow the defendant to engage legal counsel and file a Written Statement. Fake WhatsApp notices almost always demand immediate payment within 2 to 4 hours and include individual UPI QR codes or private agency account numbers to avert imminent arrest.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Blatant Jumbling of Civil &amp; Criminal Statutory Provisions</p>
                    <p className="text-slate-600 mt-1">
                      Forged notices frequently cite incompatible sections of law on a single page, such as combining Section 138 of the Negotiable Instruments Act (cheque bounce), Section 420 of the Indian Penal Code (cheating), Section 25 of the Payment and Settlement Systems Act, and Section 13(2) of the SARFAESI Act, alongside civil breach of contract claims, revealing non-lawyer drafting.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Pixelated Seals, Fake Ashoka Emblems &amp; Generic Stamps</p>
                    <p className="text-slate-600 mt-1">
                      Forgers cut and paste low-resolution graphic images of the State Emblem of India (Lion Capital of Ashoka), generic clip-art scales of justice, and forged rubber stamps reading &quot;Chief Legal Cell - High Court Verified&quot;. Genuine judicial processes carry physical court-stamped seals and verifiable administrative signatures.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whenever a borrower receives a suspicious document on WhatsApp, they can instantly verify its authenticity by searching the e-Courts portal (services.ecourts.gov.in) using the CNR number or searching by party name across the relevant District Court registry. If no active record appears on the official judicial repository, the document is an unlawful instrument of extortion.
              </p>
            </section>

            {/* Section 3: Statutory Criminal Protections */}
            <section id="statutory-criminal-laws-bns-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Criminal Protections: Sections 336 &amp; 338 BNS vs. Sections 465, 468 &amp; 471 IPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The creation, transmission, and deployment of counterfeit judicial documents to coerce debt repayment is not merely an ethical violation or an administrative irregularity; it represents severe criminal misconduct under the substantive penal laws of India. Following the enactment of the Bharatiya Nyaya Sanhita, 2023 (BNS) replacing the Indian Penal Code, 1860 (IPC), the statutory framework provides formidable criminal remedies against recovery agents, agency directors, and principal lending officers who authorize such practices.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian Penal Code and its corresponding provisions in the Bharatiya Nyaya Sanhita, the key criminal sections governing forged notices include:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 466 IPC / Section 338 BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Forgery of Court Records:</strong> Whoever forges a document purporting to be a record or proceeding of or in a Court of Justice, or a register or certificate, shall be punished with imprisonment of either description for a term which may extend to 7 years, and shall also be liable to fine. This is a severe, non-bailable offense.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 471 IPC / Section 340 BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Using as Genuine a Forged Document:</strong> Whoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be a forged document, shall be punished in the same manner as if he had forged such document.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 468 IPC / Section 336(3) BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Forgery for Purpose of Cheating:</strong> Forging judicial summons with the intent to deceive a debtor into transferring money to an unauthorized collection agency constitutes criminal forgery for cheating, carrying up to 7 years imprisonment.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 383/384 IPC / Section 308 BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Extortion:</strong> Intentionally putting any person in fear of injury, public arrest, or social disgrace to induce them to deliver money constitutes criminal extortion, carrying rigorous imprisonment up to 3 years.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Additionally, transmitting forged documents through electronic communication channels activates Section 66D of the Information Technology Act, 2000 (cheating by personation by using computer resources), which carries up to 3 years imprisonment and substantial fines, as well as Section 170 IPC / Section 204 BNS for personating a public servant or court officer.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In numerous authoritative rulings, including <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007)</em> and subsequent High Court directives, the judiciary has held that financial institutions cannot outsource debt collection to rogue elements who resort to forgery and criminal intimidation. When an aggrieved borrower files a well-documented criminal complaint citing these exact penal provisions, the burden of criminal liability falls directly upon the collection agency and the commissioning bank officers.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics & NPV Model */}
            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Economics: NPA Provisioning &amp; The NPV Recovery Valuation Model
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why collection agencies resort to desperate measures such as fabricating court summons on WhatsApp, one must examine the internal balance sheet economics and regulatory provisioning mandates governing Indian commercial banks and NBFCs. Under the Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP), an unsecured loan account is classified as a Non-Performing Asset (NPA) once repayments remain overdue past the 90-day threshold.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once classified as an NPA, the lender is prohibited from recognizing accrued interest as income and is legally compelled to lock away substantial shareholder capital in mandatory risk provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (NPA up to 12 Months):</strong> Mandatory 15% provisioning on the total outstanding exposure for unsecured facilities.</li>
                <li><strong>Doubtful Assets (NPA 12 to 24 Months):</strong> Mandatory 100% provisioning on the entire unsecured exposure, locking matching capital from bank reserves.</li>
                <li><strong>Loss Assets / Written-Off Accounts:</strong> Complete 100% write-off against the institution&apos;s operating profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If a lender decides to pursue genuine civil litigation in a District Court or Commercial Court to recover an unsecured personal loan of ₹3 Lakhs to ₹15 Lakhs, it must pay 1% to 3% non-refundable court fees, engage external advocates, and navigate 3 to 5 years of procedural delays. Because unsecured debts carry no hypothecated physical collateral, the net financial yield from prolonged litigation is deeply negative. Consequently, institutional credit and recovery committees evaluate settlement proposals using a Net Present Value (NPV) recovery formula:
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
                  Where C_t represents estimated recoveries across annual intervals t, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of court friction, advocate retainers, and locked regulatory capital reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because authentic civil litigation yields an inferior Net Present Value, banks have immense commercial motivation to resolve delinquent accounts through a negotiated One-Time Settlement (OTS). By agreeing to a 40% to 65% principal waiver, the lender instantly unlocks cash liquidity, eliminates toxic debt from its balance sheet, and immediately writes back regulatory provisions to boost quarterly profitability. The recovery agency&apos;s frantic dissemination of fake WhatsApp notices is a desperate attempt to collect exorbitant commissions before the bank formally transfers the debt to the institutional settlement division.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-fake-notices-vs-legal-reality" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recovery-agents-sending-fake-court-summons-whatsapp.jpg"
                  alt="Fake Court Notice by Loan Recovery Agent on WhatsApp: Legal Truth vs Forged Threats Infographic"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Forged WhatsApp Notices vs. Verified Legal Due Process in India</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Regulatory Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Step-by-Step Criminal & Regulatory Action */}
            <section id="criminal-proceedings-fir-cyber-crime" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Step-by-Step Criminal &amp; Regulatory Action: Filing Cyber Crime Complaints &amp; Police FIRs
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower receives a forged court notice or fabricated arrest summons on WhatsApp, passive tolerance or verbal arguments with recovery personnel are counterproductive. The borrower must execute a systematic, legally grounded response to shift the liability onto the perpetrators:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileWarning className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Legal Counter-Action Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Forensic Digital Evidence Preservation</p>
                    <p className="text-slate-600 mt-1">
                      Do not delete the WhatsApp conversation or block the sender immediately. Capture comprehensive full-screen screenshots displaying the sender&apos;s phone number, profile photo, and timestamps. Export the raw WhatsApp chat history (.txt) and preserve the original downloaded PDF document with its digital metadata intact.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Lodge National Cyber Crime Reporting Portal Complaint</p>
                    <p className="text-slate-600 mt-1">
                      File a formal complaint on the Government of India National Cyber Crime Reporting Portal (cybercrime.gov.in) under the category of &quot;Online Financial Fraud / Digital Impersonation &amp; Forgery&quot;. Attach the exported chat, forged PDF, and sender phone numbers to generate an official Cyber Crime Acknowledgement Number.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: Serve Statutory Cease-and-Desist Notice on Principal Bank</p>
                    <p className="text-slate-600 mt-1">
                      Engage a debt settlement advocate to draft and serve a formal legal notice to the Managing Director, Principal Nodal Officer, and Head of Collections of the lending institution. The notice details the criminal offenses under Section 338 BNS / Section 466 IPC and RBI Circular RBI/2022-23/108, demanding the immediate recall of the agency.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Escalate to the RBI Integrated Ombudsman</p>
                    <p className="text-slate-600 mt-1">
                      If the bank fails to provide an adequate resolution within 30 days, file an online escalation on the RBI Complaint Management System (cms.rbi.org.in). The Banking Ombudsman possesses statutory powers to penalize the regulated entity, award compensation up to ₹20 Lakhs for mental harassment, and direct debt restructuring.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: File Police Complaint / Section 156(3) CrPC Application</p>
                    <p className="text-slate-600 mt-1">
                      Submit a written complaint to the Station House Officer (SHO) of your local police station seeking registration of an FIR for forgery of court records and extortion. If local police hesitate to register an FIR against corporate collection agencies, your advocate can file an application before the Judicial Magistrate under Section 156(3) CrPC (Section 175 BNSS) to direct an immediate police investigation.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By initiating formal legal and regulatory counter-proceedings, the dynamic of intimidation is entirely inverted. Lenders quickly recognize that continued aggressive recovery by rogue agencies poses severe operational, reputational, and criminal risks, paving the way for a swift institutional settlement.
              </p>
            </section>

            {/* Section 7: Civil Court & Real Summons Protocols */}
            <section id="civil-procedure-real-summons-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Civil Court Realities: Order V CPC Summons Protocols vs. Unlawful Electronic Messages
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To evaluate any document claiming to be a court summons, borrowers must understand the statutory mechanism of service of summons under the Code of Civil Procedure, 1908 (CPC). Order V Rule 9 of the CPC explicitly governs how an Indian court delivers summons to a defendant:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Summons issued by a competent Civil Judge or Commercial Court must be delivered through an authorized ministerial officer of the court—known as a Court Process Server or Court Bailiff—or transmitted through Registered Post with Acknowledgment Due (RPAD), Speed Post, or High Court-approved courier services. The physical summons document is invariably accompanied by a complete copy of the filed plaint, supporting affidavits, and list of relied-upon documents signed by the plaintiff&apos;s advocate.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While the Supreme Court of India in <em>In Re: Cognizance for Extension of Limitation (2020)</em> and various High Courts have recognized the service of notices via electronic modes including WhatsApp and email, such electronic service is subject to strict judicial prerequisites. It is permissible only after the court has formally instituted the suit, issued specific directions permitting substituted electronic service, and when transmitted by an authenticated court email address or the registered advocate on record, complete with a process tracking affidavit filed before the bench.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An anonymous WhatsApp message from an unverified mobile number containing a standalone, poorly formatted PDF document, demanding payment within hours to avoid arrest, meets none of the procedural standards of Order V CPC. Recognizing this stark divergence empowers borrowers to reject bogus threats with complete legal confidence.
              </p>
            </section>

            {/* Section 8: Direct Bank Settlement Protocols */}
            <section id="direct-bank-settlement-ots-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Direct Bank Settlement Protocols: Converting Coercive Threats into a Valid 40%–65% OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical mistake made by distressed borrowers when subjected to aggressive WhatsApp threats is agreeing to transfer informal partial sums directly to recovery agents or via unverified payment links. Recovery personnel routinely promise, &quot;Pay ₹25,000 immediately and we will cancel the arrest warrant and close your loan.&quot; In practice, such informal transfers are credited entirely toward penal charges, compound interest, and agent commissions, leaving the core principal delinquent and inviting renewed harassment weeks later.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To achieve permanent legal closure and extinguish the debt, borrowers must bypass rogue collection agencies and execute an official One-Time Settlement (OTS) directly with the lending institution&apos;s authorized authorities:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Three-Pillar Settlement Verification Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Sanction Letter</p>
                    <p className="text-slate-600">
                      Obtain an authentic Settlement Sanction Letter issued on official bank letterhead, bearing a verifiable reference number, approved waiver amount, and explicit payment schedule signed by an authorized signatory.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Account Remittance</p>
                    <p className="text-slate-600">
                      Execute remittances exclusively through formal banking channels (RTGS, NEFT, or Account Payee Demand Draft) payable directly to the designated loan account number, never to third-party agency UPI handles.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">
                      Secure a physical, bank-stamped No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60, followed by credit bureau reporting reflecting the status as &quot;Settled&quot;.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following full remittance of the negotiated compromise amount, the bank submits an updated status to credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax). While a &quot;Settled&quot; remark temporarily reflects on credit histories, it permanently halts all legal exposure, stops collection harassment, and allows the borrower to systematically rebuild their credit score over 12 to 24 months through disciplined financial planning.
              </p>
            </section>

            {/* Section 9: Comparative Matrix Table */}
            <section id="comparative-matrix-fake-vs-real-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Verification Matrix: Legitimate Court Summons vs. Forged WhatsApp Notices
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details the crucial procedural, structural, and legal distinctions between authentic judicial summons and forged electronic notices dispatched by recovery agencies:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Verification Parameter</th>
                      <th>Authentic Judicial Court Summons</th>
                      <th>Forged WhatsApp Recovery Notice</th>
                      <th>Applicable Legal Statute / Rule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Mode of Delivery</td>
                      <td>Court Process Server, Bailiff, RPAD, Speed Post, or formally sanctioned electronic service</td>
                      <td>Unverified WhatsApp message, SMS, or Telegram PDF from personal mobile number</td>
                      <td>Order V Rule 9 CPC (Service of Summons)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Case Number &amp; CNR</td>
                      <td>Unique 16-digit alphanumeric CNR number verifiable on e-Courts portal</td>
                      <td>Missing, fictitious reference number, or internal agency recovery code</td>
                      <td>e-Courts Case Information System (CIS) Standards</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Response Timeline</td>
                      <td>Standard 30 days to enter appearance and file Written Statement</td>
                      <td>Coercive 2 to 4 hour ultimatum demanding instant funds transfer</td>
                      <td>Order VIII Rule 1 CPC (Written Statement Timeline)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Threat Content</td>
                      <td>Formal civil adjudication notice; no immediate arrest threats for debt default</td>
                      <td>Threats of immediate police raid, non-bailable arrest, and workplace seizure</td>
                      <td>Sec 338 BNS / Sec 466 IPC &amp; Sec 506 IPC Intimidation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment Instructions</td>
                      <td>No payment demands in summons; matters contested before the bench</td>
                      <td>Demands immediate UPI transfer, personal agency QR code, or unverified link</td>
                      <td>Sec 468 IPC / Sec 336 BNS (Forgery for Cheating)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Protecting Borrowers from Deceptive Intimidation
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating the fear and confusion of receiving forged legal notices, bogus arrest warrants, and aggressive recovery calls on WhatsApp can be an isolating and overwhelming experience. At SettleLoans, our team of seasoned banking advocates, consumer protection attorneys, and debt resolution professionals provides comprehensive nationwide defense for borrowers in distress. We immediately intervene by filing formal Vakalatnama notices, issuing statutory Cease-and-Desist directives to lending institutions, initiating cyber crime and police proceedings against rogue recovery agencies, and negotiating structured 40% to 65% One-Time Settlements backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Fake Court Notices &amp; Recovery Agent Forgery
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers regarding forged WhatsApp court summons, Section 338 BNS / Section 466 IPC protections, and debt resolution procedures in India.
              </p>

              <div className="space-y-3">
                {((jsonLdGraph['@graph'].find((item: any) => item['@type'] === 'FAQPage') as any)?.mainEntity || []).map((faq: any, idx: number) => (
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
                  href="https://services.ecourts.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">e-Courts Services Portal (Verify Genuine Court CNR Numbers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (Report Digital Forgery &amp; Extortion)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (File Bank Harassment Grievance)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code / BNS (Sections on Forgery of Court Records &amp; Extortion)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (NALSA Lok Adalat Rules &amp; Powers)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Loan Settlement Guides
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
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Agents Take Furniture or Gold?
                </Link>
                <Link
                  href="/cyber-crime-complaint-illegal-loan-apps-blackmail"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Cyber Crime Complaint Loan App Harassment
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Reply
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
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
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit self-start">
            
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
                Distinguished authority in banking jurisprudence, criminal defense against debt recovery forgery under Sections 336/338 BNS and 465/471 IPC, RBI fair practice enforcement, and institutional compromise debt settlements with over a decade of legal advocacy experience.
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
              <h4 className="font-bold text-base text-white mb-2">Received a Fake Court Notice on WhatsApp?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let collection agencies intimidate you with forged summons or arrest threats. Engage our senior advocates to issue immediate Cease-and-Desist notices, file cyber crime complaints, and negotiate an official 40%–65% OTS.
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
                  <span>Section 338 BNS / 466 IPC Criminal Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Advocate-Client Privilege</span>
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
