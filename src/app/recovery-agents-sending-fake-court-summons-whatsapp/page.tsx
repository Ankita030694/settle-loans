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
  title: 'Fake Court Summons on WhatsApp Rules | SettleLoans',
  description: 'Received fake court summons or police notice on WhatsApp from recovery agents? Learn Section 336 BNS forgery laws and action with SettleLoans.',
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
      "description": "Are recovery agents sending fake court notices or arrest threats on WhatsApp? Learn your rights under Section 338 BNS and how to take legal action.",
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
      "description": "Legal guide on handling fake court summons on WhatsApp from recovery agents. Covers Section 338 BNS forgery laws, RBI rules, and loan settlements.",
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
      "description": "Legal protection for borrowers facing fake court summons and recovery threats on WhatsApp. We stop harassment and negotiate One-Time Settlements.",
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
          "reviewBody": "I got an urgent PDF on WhatsApp with a fake court seal and arrest threat for my ₹4 Lakh loan. SettleLoans checked the e-Courts portal and found no case. They filed a cyber crime complaint and served a legal notice on the bank. The bank recalled the agency and settled the loan with a 50% waiver.",
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
          "reviewBody": "An agency sent me a fake Lok Adalat notice. They claimed police would come to my office in two hours. SettleLoans stepped in fast. They cited Section 465 IPC forgery laws and filed an RBI Ombudsman complaint. All threats stopped at once.",
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
          "reviewBody": "Receiving fake police notices on WhatsApp caused huge panic. Ashish Jhangra and his legal team took charge. They proved the forgery to the bank nodal desk. They also got me a clean settlement with an official No Dues Certificate.",
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
          "reviewBody": "Very professional legal team. They proved the digital stamps on the WhatsApp notice were fake. With their legal shield, I settled my credit card dues peacefully.",
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
            "text": "Under Order V Rule 9 CPC, court summons must come through a Court Bailiff, registered post, speed post, or approved courier. Courts allow WhatsApp notice only during active cases with prior judicial approval. Even then, it needs a valid 16-digit CNR number on the e-Courts portal. Courts never send informal PDF arrest threats on WhatsApp from personal numbers."
          }
        },
        {
          "@type": "Question",
          "name": "Is sending a fake court notice or fabricated judicial seal a criminal offense in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. It is a grave crime. Making fake court papers breaks Section 466 IPC and Section 338 BNS. It carries up to seven years in jail. It also violates Section 471 IPC (Section 340 BNS), Section 506 IPC (Section 351 BNS), and Section 66D of the IT Act."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify if a court notice received on WhatsApp is real or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real court notices contain a 16-digit CNR number, court room number, and judge name. Enter the CNR number on the e-Courts website (services.ecourts.gov.in) to verify it. If a notice lacks a CNR number or demands urgent UPI transfers, it is 100% fake."
          }
        },
        {
          "@type": "Question",
          "name": "Can National Lok Adalat issue an arrest warrant or police seizure order?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. National Lok Adalats under the Legal Services Authorities Act, 1987 are voluntary conciliation bodies. They cannot issue arrest warrants or direct police raids. Any notice claiming a Lok Adalat issued an arrest warrant is completely fraudulent."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate legal steps should I take after receiving a fake court notice on WhatsApp?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do not delete the chat. Take full screenshots showing the sender number, date, and time. Save the raw PDF file. Do not make panic payments. Have a lawyer send a notice to the bank and file a complaint on cybercrime.gov.in."
          }
        },
        {
          "@type": "Question",
          "name": "Is the lending bank legally responsible for fake notices sent by outsourced recovery agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under RBI Circular RBI/2022-23/108, banks and NBFCs are strictly liable for the actions of their collection agencies. Borrowers can file a complaint with the RBI Integrated Ombudsman to demand action and compensation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I go to jail for defaulting on an unsecured personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured loan default is a civil matter under the Indian Contract Act, 1872. You cannot be jailed for honest financial inability to pay. Arrest only applies in proven loan fraud or Section 138 NI Act cheque bounce cases."
          }
        },
        {
          "@type": "Question",
          "name": "How does legal representation by SettleLoans resolve the dispute and protect the borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SettleLoans lawyers issue a formal legal notice to bank leadership. This stops third-party collection harassment immediately. We expose fake notices and negotiate a 40% to 65% One-Time Settlement with an official No Dues Certificate."
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Fake Court Summons from Recovery Agents on WhatsApp</h1>

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

          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Legal Facts: WhatsApp Legal Notices &amp; Forgery Protections</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Judicial Validity:</strong> Indian courts never send informal PDF summons or arrest threats on WhatsApp from personal numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Forgery Penalties:</strong> Forging court records, judge signatures, or Lok Adalat stamps breaks Section 338 BNS and Section 466 IPC. It brings up to 7 years in jail.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Verifiable on e-Courts:</strong> Every real case has a 16-digit CNR number on the e-Courts portal. Fake notices lack valid case data.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Vicarious Bank Liability:</strong> Under RBI rules, banks bear full legal liability for deceptive acts by their collection agencies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate-Led Defense:</strong> Legal notices and complaints stop harassment fast. They open the door to a 40% to 65% One-Time Settlement (OTS).</span>
                </li>
              </ul>
            </div>

            <section id="rise-of-deceptive-whatsapp-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Rise of Deceptive WhatsApp Legal Notices</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Many borrowers across India face an alarming collection tactic. Recovery agents send fake legal notices, false court summons, and phony arrest warrants on WhatsApp. Unregulated collection agencies try to create sudden panic. They paste fake Supreme Court emblems, bogus Lok Adalat seals, and fake judge signatures onto PDF files.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These fake notices aim to create an artificial legal crisis. Messages claim a Chief Judicial Magistrate signed an arrest warrant. They claim police are on the way to your workplace. They set 2-hour payment deadlines to push borrowers into panic. Fearing jail, many people take costly loans or spend family savings to pay.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Foundational Legal Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Defaulting on an unsecured personal loan or credit card is a civil dispute. No magistrate, civil judge, or police officer issues arrest warrants on WhatsApp for an unpaid loan.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Third-party recovery agencies have zero judicial power. They are not court officers or police. Making fake court papers is a serious crime under Indian law.
              </p>
            </section>

            <section id="forensics-identifying-fake-court-summons" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Forensics of Forgery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You can identify a fake WhatsApp notice by checking a few clear signs. Real court notices follow strict rules under the Civil Procedure Code, 1908. Recovery agent fakes use cheap digital templates full of legal errors.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The biggest red flag is a missing Case Information System (CIS) Case Number Record (CNR). Under Supreme Court rules, every registered court case has a unique 16-digit alphanumeric CNR number. If a notice shows vague codes like &quot;Case Ref: REC/2026/DL/9812&quot; instead of a CNR number, it is fake.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Search className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Forensic Red Flags in Fabricated WhatsApp Legal Notices</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">1. Fake Lok Adalat Powers</p>
                    <p className="text-slate-600 mt-1">
                      Agencies send notices titled &quot;Lok Adalat Arrest Notice&quot;. Under the Legal Services Authorities Act, 1987, Lok Adalats are voluntary forums. They have no criminal powers and cannot order arrests. Any arrest notice from a Lok Adalat is fake.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">2. Urgent Deadlines and Direct UPI Demands</p>
                    <p className="text-slate-600 mt-1">
                      Real court summons give several weeks to respond. Fake notices demand payment in 2 to 4 hours. They include private UPI QR codes to steal money.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">3. Mixing Civil and Criminal Laws</p>
                    <p className="text-slate-600 mt-1">
                      Fake notices often mix Section 138 NI Act, Section 420 IPC, Section 25 PSSA, and SARFAESI on one page. This messy drafting reveals an agent fake.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">4. Blurry Seals and Fake Emblems</p>
                    <p className="text-slate-600 mt-1">
                      Forgers copy blurry images of the Ashoka Emblem and generic scales of justice. Real court summons carry physical stamped seals and clear official signatures.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers can check any notice on the e-Courts website (services.ecourts.gov.in). Search using the CNR number or party name. If no case appears, the document is an extortion attempt.
              </p>
            </section>

            <section id="statutory-criminal-laws-bns-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Statutory Criminal Protections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Sending fake court notices to collect debt is a major crime in India. Under the Bharatiya Nyaya Sanhita, 2023 (BNS) and the Indian Penal Code, 1860 (IPC), strict laws punish this conduct.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key penal sections that apply to fake legal notices include:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 466 IPC / Section 338 BNS</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Forgery of Court Records:</strong> Forging court papers carries up to 7 years in jail and fines. This is a serious, non-bailable offense.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 471 IPC / Section 340 BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Using as Genuine a Forged Document:</strong> Using a forged document as genuine carries the same penalty as making it.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 468 IPC / Section 336(3) BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Forgery for Purpose of Cheating:</strong> Forging court summons to trick a borrower into paying brings up to 7 years in jail.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 383/384 IPC / Section 308 BNS</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Extortion:</strong> Putting someone in fear of arrest to demand money is criminal extortion. It carries up to 3 years in jail.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Sending forged files digitally also breaks Section 66D of the Information Technology Act, 2000. It also violates Section 170 IPC / Section 204 BNS for pretending to be a public officer.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007)</em>, the Supreme Court ruled that banks cannot use musclemen or forgery. Filing a formal criminal complaint puts direct liability on the agency and the bank.
              </p>
            </section>

            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Balance Sheet Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why agencies send fake notices, look at bank economics. Under RBI Prudential Norms (IRACP), an unsecured loan becomes a Non-Performing Asset (NPA) after 90 days of default.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account is an NPA, the bank must set aside capital in mandatory provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (NPA up to 12 Months):</strong> 15% provision on total unsecured debt.</li>
                <li><strong>Doubtful Assets (NPA 12 to 24 Months):</strong> 100% provision on the full unsecured amount.</li>
                <li><strong>Loss Assets / Written-Off Accounts:</strong> Complete 100% write-off on the bank balance sheet.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Filing a civil court case costs 1% to 3% in fees and takes 3 to 5 years. Because unsecured loans have no collateral, court litigation yields poor returns. Banks evaluate cases using the Net Present Value (NPV) recovery formula:
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here C_t is expected recovery, and r is the discount rate. Deductions include court fees, lawyer retainers, and funds locked in NPA reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Settling the loan gives the bank a better return than court action. A 40% to 65% One-Time Settlement (OTS) unlocks cash and clears provisions. Agents send fake notices in a rush to claim commissions before the bank settles the account.
              </p>
            </section>

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

            <section id="criminal-proceedings-fir-cyber-crime" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Step-by-Step Criminal &amp; Regulatory Action</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you get a fake notice on WhatsApp, do not panic or argue with agents. Follow this step-by-step legal plan:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileWarning className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Legal Counter-Action Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Save Digital Evidence</p>
                    <p className="text-slate-600 mt-1">
                      Do not delete the chat. Take full screenshots showing the sender number, photo, and time. Save the chat history and the raw PDF file.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: File a Cyber Crime Complaint</p>
                    <p className="text-slate-600 mt-1">
                      Report the incident on cybercrime.gov.in under digital fraud and forgery. Keep the official complaint number.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: Serve a Legal Notice on the Bank</p>
                    <p className="text-slate-600 mt-1">
                      Have a lawyer send a notice to the bank Managing Director and Nodal Officer. Cite Section 338 BNS, Section 466 IPC, and RBI rules.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Escalate to the RBI Ombudsman</p>
                    <p className="text-slate-600 mt-1">
                      If the bank fails to resolve the issue within 30 days, file a complaint on cms.rbi.org.in. The Ombudsman can penalize the bank and award compensation.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: File a Police Complaint</p>
                    <p className="text-slate-600 mt-1">
                      Submit a written complaint to your local police station. If needed, your lawyer can file an application under Section 156(3) CrPC (Section 175 BNSS) before a magistrate.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Taking legal action shifts the pressure back to the lender. Banks realize the severe legal risks and quickly move toward a fair settlement.
              </p>
            </section>

            <section id="civil-procedure-real-summons-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Civil Court Realities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To spot fake summons, you should know the legal rules for court notices. Order V Rule 9 CPC sets the exact procedure for serving court summons:
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Real summons come through a Court Bailiff, registered post, speed post, or approved courier. The summons always includes a full copy of the plaint and supporting affidavits.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>In Re: Cognizance for Extension of Limitation (2020)</em>, the Supreme Court allowed electronic notices only under strict conditions. The court must approve electronic service first. The notice must come from an official email or registered lawyer.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An anonymous WhatsApp PDF demanding money in two hours breaks all Order V CPC rules. Knowing this helps you dismiss bogus threats with confidence.
              </p>
            </section>

            <section id="direct-bank-settlement-ots-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Direct Bank Settlement Protocols</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay money directly to recovery agents or through unverified links. Agents often claim that paying ₹25,000 will cancel an arrest warrant. In truth, that money goes to penalties and agent fees, leaving the debt unpaid.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To close the loan permanently, work directly with the bank on an official One-Time Settlement (OTS):
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
                      Get a settlement letter on bank letterhead. It must state the agreed amount, waiver, and payment dates with an official signature.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Bank Remittance</p>
                    <p className="text-slate-600">
                      Pay money only to your official loan account via RTGS, NEFT, or Demand Draft. Never pay through third-party UPI links.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">
                      Get a stamped No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60. The bank will mark the debt as Settled.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After full payment, the bank updates credit bureaus. While a Settled mark causes a temporary score drop, it ends all legal risks. You can rebuild your credit score above 750 in 12 to 24 months.
              </p>
            </section>

            <section id="comparative-matrix-fake-vs-real-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Verification Matrix</h2>
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
                      <td className="font-semibold text-slate-900">Mode of Delivery.</td>
                      <td>Court Process Server, Bailiff, RPAD, Speed Post, or court-approved electronic service.</td>
                      <td>Unverified WhatsApp message or PDF from a private mobile number.</td>
                      <td>Order V Rule 9 CPC rules on summons.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Case Number &amp; CNR.</td>
                      <td>Unique 16-digit CNR number verifiable on the e-Courts portal.</td>
                      <td>Missing number, fake reference code, or internal recovery tag.</td>
                      <td>e-Courts Case Information System standards.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Response Timeline.</td>
                      <td>Standard 30 days to appear in court and file a Written Statement.</td>
                      <td>Urgent 2 to 4 hour ultimatum demanding instant funds transfer.</td>
                      <td>Order VIII Rule 1 CPC timeline rules.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Penal Threat Content.</td>
                      <td>Formal civil suit notice with no arrest threats for debt default.</td>
                      <td>Threats of immediate police raids, arrest warrants, and workplace visits.</td>
                      <td>Section 338 BNS, Section 466 IPC, and Section 506 IPC.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment Instructions.</td>
                      <td>No payment demands in summons; cases are heard before the judge.</td>
                      <td>Demands immediate UPI payment, personal QR codes, or unverified links.</td>
                      <td>Section 468 IPC and Section 336 BNS on fraud.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Legal Relief</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Getting fake legal notices and arrest threats on WhatsApp can be stressful. At SettleLoans, our banking advocates and debt resolution experts protect borrowers. We file formal legal notices, issue Cease-and-Desist directives, and report rogue agencies. We also negotiate 40% to 65% One-Time Settlements with official bank No Dues Certificates.
                </p>
              </div>

              <CompanySection />
            </section>

            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Fake Court Notices &amp; Recovery Agent Forgery</h2>
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
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Distinguished authority in banking law, criminal defense against debt forgery under Sections 336/338 BNS and 465/471 IPC, RBI rules, and debt settlements.
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
              <div className="font-bold text-base text-white mb-2">Received a Fake Court Notice on WhatsApp?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let collection agencies intimidate you with fake summons or arrest threats. Our senior advocates issue Cease-and-Desist notices, file complaints, and negotiate a 40% to 65% OTS.
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
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </div>
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
