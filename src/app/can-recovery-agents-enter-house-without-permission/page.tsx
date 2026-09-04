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
  Home,
  DoorClosed,
  EyeOff
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Recovery Agents Enter Your House? | SettleLoans',
  description: 'Can loan recovery agents enter your house without consent? Learn house trespass laws under Section 329 BNS and RBI rules with SettleLoans.',
  keywords: [
    'can recovery agents enter house without permission',
    'can recovery agents enter my home without consent',
    'recovery agents forced entry india legal rights',
    'section 329 BNS criminal trespass recovery agent',
    'section 441 IPC criminal trespass debt collection',
    'justice ks puttaswamy right to privacy home doorstep',
    'can i refuse to open door to bank recovery agent',
    'rbi guidelines recovery agent doorstep visit permission',
    'what to do when recovery agent refuses to leave house',
    'police complaint against recovery agent entering house'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/can-recovery-agents-enter-house-without-permission',
  },
  openGraph: {
    title: 'Can Recovery Agents Enter House Without Permission? Legal Rights & RBI Rules',
    description: 'Exhaustive legal analysis on borrower rights against uninvited recovery agent doorstep entry in India. Understand Section 329 BNS criminal trespass, constitutional privacy protections, and RBI Fair Practice Directives.',
    url: 'https://www.settleloans.in/can-recovery-agents-enter-house-without-permission',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/can-recovery-agents-enter-house-without-permission.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Recovery Agents Enter House Without Permission Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Recovery Agents Force Entry Into Your House? Legal Rights & Protections',
    description: 'Facing uninvited loan agents at your front door? Learn why forced entry is criminal trespass under Section 329 BNS / Section 441 IPC and how to lawfully shut the door on recovery personnel.',
    images: ['https://www.settleloans.in/images/infographics/can-recovery-agents-enter-house-without-permission.jpg'],
  },
};

const faqsList = [
  {
    name: "Can a bank recovery agent enter my house or living room without my explicit permission?",
    answer: "No. Recovery agents have no legal power to enter your home without your clear consent. They cannot step across your doorway. They cannot refuse to leave when asked. Any uninvited entry is criminal house-trespass under Section 329 BNS and Section 441/442 IPC."
  },
  {
    name: "Can I legally shut the door on a loan recovery agent who arrives at my home?",
    answer: "Yes. You have a full legal right to close your door. You can refuse doorstep talks. You do not have to let agents inside. You do not have to speak to them in person. Tell them to send all notices in writing or speak to your lawyer."
  },
  {
    name: "What criminal section applies if a recovery agent pushes the door open or forces their way inside?",
    answer: "Forcing entry or pushing a door open is criminal house-trespass under Section 329 BNS and Section 442 IPC. It carries jail time. If agents make threats or shout, it is Criminal Intimidation under Section 351 BNS / Section 506 IPC. Demanding money through fear is Extortion under Section 308 BNS / Section 383 IPC."
  },
  {
    name: "What did the Supreme Court rule regarding recovery agents entering borrower residences?",
    answer: "In ICICI Bank Ltd. v. Prakash Kaur (2007), the Supreme Court banned musclemen and threats. Banks must follow due civil process. In Justice K.S. Puttaswamy v. Union of India (2017), the court upheld the Right to Privacy under Article 21. Your home is a private zone free from forced intrusions."
  },
  {
    name: "What are the permissible visit timings and rules for recovery agents under RBI guidelines?",
    answer: "Under RBI Fair Practice rules, agents can visit only between 8:00 AM and 7:00 PM. Agents must carry a bank authorization letter and valid ID card. They must speak with respect. They must leave if you request talks through your legal counsel."
  },
  {
    name: "Can recovery agents bring local police with them to enter my residence for a personal loan default?",
    answer: "No. Personal loan and credit card default is a civil matter. Police officers cannot act as debt collectors. They cannot enter your house for an unsecured loan without a court warrant."
  },
  {
    name: "What immediate steps should I take if a recovery agent refuses to leave my doorstep or premises?",
    answer: "Stay calm and keep the door locked. Start recording video on your phone. Tell the agent through the door: 'You do not have permission to be here. Please leave now.' If they refuse to leave or shout, dial 112 for police help. Then call your debt lawyer."
  },
  {
    name: "How does a debt settlement advocate stop recovery agents from visiting my residence entirely?",
    answer: "A lawyer files a Vakalatnama and sends a Cease-and-Desist notice to the bank. Under RBI rules, lenders must then talk only to your lawyer. This stops doorstep visits and starts formal One-Time Settlement (OTS) talks."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#webpage",
      "url": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission",
      "name": "Can Recovery Agents Enter House Without Permission? Legal Rights & RBI Rules",
      "description": "Comprehensive legal guide explaining borrower protections against uninvited doorstep entry by bank and NBFC recovery agents in India. Details criminal trespass under Section 329 BNS / Section 441 IPC, Puttaswamy privacy jurisprudence, and RBI Fair Practices Code.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#breadcrumb"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#breadcrumb",
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
          "name": "Can Recovery Agents Enter House Without Permission",
          "item": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#article",
      "headline": "Can Recovery Agents Enter House Without Permission? Legal Rights & RBI Rules",
      "description": "An in-depth statutory and constitutional breakdown examining the legal invalidity of forced home entry by loan collection personnel in India. Covers Section 329 Bharatiya Nyaya Sanhita, Section 441 IPC, Article 21 Right to Privacy, and advocate-led debt settlement protocols.",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-enter-house-without-permission.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#webpage"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#service",
      "name": "SettleLoans - Borrower Legal Defense & Debt Resolution Services",
      "description": "Dedicated legal defense against unconstitutional recovery agent doorstep intrusion, illegal harassment, and criminal trespass, paired with institutional One-Time Settlement (OTS) negotiations across India.",
      "url": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-enter-house-without-permission.jpg",
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
        "reviewCount": "2580",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Malhotra"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Two recovery agents pushed past my front door and sat in my living room. They refused to leave without payment. SettleLoans filed a police complaint under Section 329 BNS for house-trespass. They also sent a Cease-and-Desist notice. The bank withdrew the agency within 24 hours. They offered a 50% one-time settlement.",
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
            "name": "Ananya Sengupta"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "An NBFC agent pushed my door to stop me from closing it. I felt terrified. SettleLoans stepped in fast. They cited the Supreme Court Right to Privacy ruling and RBI rules. The home visits stopped at once. We settled the debt with a big waiver.",
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
            "name": "Manish Kulkarni"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Ashish Jhangra and the SettleLoans team gave me clear legal guidance. They explained that agents have zero right to enter my house without consent. Their legal notice protected my family. We settled three credit cards peacefully.",
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
            "name": "Kavita Nair"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "Recovery agents used to shout outside my flat door and demand entry. SettleLoans sent a formal notice to the bank nodal officer. They also filed a complaint on the RBI Ombudsman portal. All home visits ended right away.",
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
      "@id": "https://www.settleloans.in/can-recovery-agents-enter-house-without-permission#faq",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question",
        "name": faq.name,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

const tocItems = [
  { id: 'doorstep-intrusion-reality', title: '1. The Doorstep Intrusion Reality' },
  { id: 'statutory-framework-criminal-trespass', title: '2. Criminal Trespass: Sec 329 BNS & Sec 441 IPC' },
  { id: 'constitutional-privacy-puttaswamy', title: '3. Right to Privacy & Supreme Court Rulings' },
  { id: 'rbi-master-directions-fair-practices', title: '4. RBI Rules on Doorstep Recovery Visits' },
  { id: 'infographic-doorstep-rights', title: '5. Doorstep Defense Infographic' },
  { id: 'lawful-door-shutting-protocol', title: '6. Tactical Protocol: Lawfully Shutting the Door' },
  { id: 'bank-npa-accounting-npv-recovery', title: '7. Bank NPA Accounting & NPV Recovery Model' },
  { id: 'cease-and-desist-ots-negotiation', title: '8. Legal Notices, OTS Sanction & NDC' },
  { id: 'comparative-enforcement-matrix', title: '9. Comparative Protection Matrix' },
  { id: 'settleloans-legal-defense-framework', title: '10. SettleLoans Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function CanRecoveryAgentsEnterHouseWithoutPermissionPage() {
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
            <span>Borrower Statutory Protections • Criminal Trespass &amp; Privacy Rights</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Can Recovery Agents Enter House Without Permission?</h1>

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
              <span>RBI Fair Practices &amp; Constitutional Privacy Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Stop Unlawful Doorstep Harassment</span>
            </Link>
            <Link
              href="#statutory-framework-criminal-trespass"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Criminal Trespass Laws</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1700px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_290px] xl:grid-cols-[270px_minmax(0,1fr)_310px] 2xl:grid-cols-[290px_minmax(0,1fr)_330px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block w-full lg:sticky lg:top-24 space-y-4 h-fit self-start max-h-[calc(100vh-110px)] overflow-y-auto pr-1">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Recovery agents have no legal power to enter your home. They cannot push doors open. They cannot stay on your property without your consent. Uninvited entry is criminal trespass under Section 329 BNS and Section 441 IPC. You have a full right to shut the door. Demand that all talks go through your legal counsel.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Borrower Rights &amp; Doorstep Legal Boundaries</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Right of Entry:</strong> Recovery agents have no court warrant or legal right to step into your home without your explicit consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Trespass Offense:</strong> Forcing a door open or refusing to leave is criminal house-trespass under Section 329 BNS and Section 441/442 IPC.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Constitutional Privacy Shield:</strong> The Supreme Court in <em>Puttaswamy</em> ruled that your home is a private zone protected under Article 21.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Right to Shut the Door:</strong> You can refuse in-person talks, close your door, record any threats. And ask for legal notice in writing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Representation Stops Visits:</strong> A formal Cease-and-Desist notice stops doorstep visits under RBI rules and starts structured One-Time Settlement (OTS) talks.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Doorstep Intrusion Reality */}
            <section id="doorstep-intrusion-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Doorstep Intrusion Reality</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a personal loan or credit card is stressful. In many Indian cities, borrowers face unannounced home visits by recovery agents. Heavy knocking or doorbell ringing creates deep anxiety. Families worry that agents will barge inside, shout in front of neighbors, or harass elderly parents. This fear is common.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This fear comes from a lack of legal awareness. Collection agencies pretend to have official power. Agents wear uniforms, hold clipboards. And act tough. They falsely claim they have the right to enter your home or check your belongings. They hope you do not know the law.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Core Legal Foundation</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Recovery agents are private contractors hired by banks. They have zero police or court powers. Under Indian law, your home is a private space. No agent can cross your doorway without your permission.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An unsecured loan default is a civil dispute under the Indian Contract Act, 1872. It is not a crime. It gives lenders no right over your house. A lender can only file a civil suit in court. When agents try to force entry, they commit a punishable crime.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Criminal Trespass */}
            <section id="statutory-framework-criminal-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Protections &amp; Criminal Trespass</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian law gives strong protection to private homes. The Bharatiya Nyaya Sanhita, 2023 (BNS) replaced the Indian Penal Code, 1860 (IPC). It sets strict jail terms for unlawful entry and trespass.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 329 BNS (Section 441 and Section 442 IPC), criminal trespass means entering private property to commit an offense or intimidate the owner. Staying on property unlawfully after being asked to leave is also a crime. When done in a home, it is house-trespass and brings jail time.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Penal Provisions Governing Unlawful Recovery Intrusions</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 329 BNS / Section 441 &amp. 442 IPC: Criminal House-Trespass</p>
                    <p className="text-slate-600 mt-1">
                      An agent who steps into your home without consent commits house-trespass. Putting a foot in the door is also illegal. Every minute spent after you say &apos;leave&apos. adds to the crime.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp. 506 IPC: Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Threatening a borrower with physical harm or public shaming is criminal intimidation. It carries up to two years in prison.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 &amp. 384 IPC: Extortion</p>
                    <p className="text-slate-600 mt-1">
                      Using fear or public shaming to force an instant payment is extortion under law.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 189 BNS / Section 141 IPC: Unlawful Assembly</p>
                    <p className="text-slate-600 mt-1">
                      If two or more agents gather outside your home to create a scene or block your door, it is unlawful assembly. Call the police at once.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The law is clear. No loan agreement clause can override criminal law. Even if a loan form mentions inspection visits, it gives no right to trespass. Forcing entry into your home is an actionable crime.
              </p>
            </section>

            {/* Section 3: Constitutional Right to Privacy & Landmark Supreme Court Precedents */}
            <section id="constitutional-privacy-puttaswamy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Right to Privacy &amp; Supreme Court Precedents</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian borrowers have strong constitutional rights. In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, a 9-judge bench of the Supreme Court gave a historic ruling. It held that the Right to Privacy is a fundamental right under Article 21.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The court protected spatial privacy. Your home is a private sanctuary. You have the right to be left alone from uninvited visits and harassment. Private debt collectors have no right to break into this personal zone.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This ruling builds on earlier court verdicts. In <em>ICICI Bank Ltd. v. Prakash Kaur &amp. Ors. (2007) 2 SCC 711</em>, the Supreme Court ruled that banks cannot use musclemen to collect debts. Lenders must follow the rule of law and due process.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Sardar Associates v. Punjab &amp. Sind Bank (2009) 8 SCC 257</em>, the Supreme Court ruled that RBI guidelines have statutory binding force under Section 21 and Section 35A of the Banking Regulation Act, 1949. If agents violate RBI rules, the lender is directly liable for fines and damages.
              </p>
            </section>

            {/* Section 4: RBI Master Directions & Fair Practices Code */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. RBI Fair Practice Code on Doorstep Recovery</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets strict rules for banks, NBFCs. And recovery agents. These rules come under the RBI Master Direction on Outsourcing and the Fair Practices Code.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI bans aggressive, rude, or uninvited doorstep behavior. Under these master directions:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h3 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Recovery Code of Conduct Standards</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permissible Contact Hours (8 AM to 7 PM)</p>
                    <p className="text-slate-600">Agents can only call or visit between 8:00 AM and 7:00 PM. Early morning or late night visits violate RBI rules.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory Authorization &amp. Identity Verification</p>
                    <p className="text-slate-600">Every agent must show an ID card and a bank letter authorizing them for your specific loan account.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Absolute Prohibition on Force &amp. Public Shaming</p>
                    <p className="text-slate-600">Agents cannot use abusive words or shout in corridors. They cannot talk to neighbors or security guards about your debt.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Respect for Privacy &amp. Advocate Routing</p>
                    <p className="text-slate-600">If you ask to route talks through your legal counsel in writing, the lender and agents must comply.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Lenders are fully responsible for the actions of their recovery agents. A bank cannot blame an outside agency for bad conduct. Under the RBI Ombudsman scheme, banks face heavy fines and must pay payout up to ₹20 Lakhs for borrower harassment.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-doorstep-rights" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/can-recovery-agents-enter-house-without-permission.jpg"
                  alt="Can Recovery Agents Enter House Without Permission Infographic: Borrower Legal Protections, Criminal Trespass, and Doorstep Defense Protocol"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Doorstep Defense, Section 329 BNS &amp; RBI Compliance Rules</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal &amp; Compliance Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: Tactical Protocol: How to Lawfully Shut the Door */}
            <section id="lawful-door-shutting-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. How to Lawfully Shut the Door</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents show up at your door, stay calm. You do not need to shout or argue. Follow this simple 5-step legal protocol to protect your rights:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Doorstep Protection Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Keep the Main Door Closed or Latched</p>
                    <p className="text-slate-600 mt-1">Never open the door fully. Speak through a safety grill or latch. Do not invite them inside.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Demand Official Identification &amp. Authorization</p>
                    <p className="text-slate-600 mt-1">Ask the agent to show their agency ID and bank authorization letter. Take clear photos with your phone.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: State Explicit Refusal of Physical Entry &amp. Record</p>
                    <p className="text-slate-600 mt-1">Record video on your phone. Say calmly: &quot;You do not have permission to enter. Loan default is a civil matter. Please leave now.&quot;</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Refuse Cash or Informal Transactions</p>
                    <p className="text-slate-600 mt-1">Never hand over cash, blank cheques, or make personal UPI transfers. All settlement payments go directly to the bank.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Firmly Close the Door and Notify Legal Counsel</p>
                    <p className="text-slate-600 mt-1">Close and lock your door. If they make noise, call 112 for police help. Send the video proof to your lawyer.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Closing your door on an agent is legal. It is not contempt of court. It gives the lender no right to file criminal cases. You are simply using your basic property rights.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting, Provisioning Burden & The NPV Recovery Model */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Accounting &amp; Doorstep Economics</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do agencies use aggressive doorstep visits instead of going to court? The answer lies in bad debt economics. Under RBI Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), an unpaid loan becomes a Non-Performing Asset (NPA) after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account becomes an NPA, banks must set aside capital provisions from their profits:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 Months Overdue):</strong> Mandatory 15% provision on unsecured debt.</li>
                <li><strong>Doubtful NPA - Category 1 (12 to 24 Months Overdue):</strong> Mandatory 100% provision on unsecured balance.</li>
                <li><strong>Loss Assets / Written-Off Portfolio:</strong> Full 100% write-off against bank profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                Filing a civil suit for an unsecured personal loan of ₹5 Lakhs to ₹20 Lakhs costs money. The bank must pay court fees of 1% to 3%, hire lawyers. And wait 3 to 5 years. Household items cannot be seized due to Section 60 CPC exemptions. Thus, court recovery yields a low return. Banks evaluate settlements using Net Present Value (NPV):
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
                  Where C_t is estimated recovery over years t, r is the bank discount rate. And deductions cover court fees and locked capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because long court cases lower NPV, banks prefer a negotiated One-Time Settlement (OTS). By granting a 40% to 65% waiver, the bank gets fast cash and releases locked provisions back into profits. Doorstep visits are just cheap pressure tactics before files move to the settlement team.
              </p>
            </section>

            {/* Section 8: Direct OTS Negotiation, Cease-and-Desist Notices & NDC */}
            <section id="cease-and-desist-ots-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Direct OTS Settlement Protocol for Borrowers</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common mistake is paying token cash or UPI to agents on verbal promises. These informal payments go toward late fees and fines. They do not clear the loan. And visits resume soon.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To stop home visits for good, follow these three formal legal steps:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Three-Pillar Legal Settlement Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">A formal lawyer notice sent to bank nodal officers. It stops doorstep visits and routes all talks through legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Official Sanction Letter</p>
                    <p className="text-slate-600">A signed OTS letter on official bank letterhead. It states the agreed settlement amount, waiver percentage. And payment dates.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp. CIBIL</p>
                    <p className="text-slate-600">Direct payment to the loan account, followed by a stamped No Dues Certificate under RBI Circular RBI/2023-24/60 and bureau closure.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After payment, the bank marks your credit files at CIBIL, Experian, CRIF, and Equifax as &quot;Settled&quot. or &quot;Post-Write-Off Settled&quot;. This ends all legal risk, keeps your home safe. And lets you rebuild your credit score.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Doorstep Recovery &amp; Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details the statutory boundaries, entry authority. And borrower legal protections across various debt recovery mechanisms operating in India:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Channel.</th>
                      <th>Legal Authority.</th>
                      <th>Right to Enter Residence.</th>
                      <th>Doorstep Conduct Restrictions.</th>
                      <th>Applicable Legal Remedies.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents.</td>
                      <td>Private Agency Contract (Zero Judicial Authority).</td>
                      <td><strong>Absolute Zero</strong> (Uninvited entry is Criminal Trespass).</td>
                      <td>Strictly 8 AM to 7 PM. No shouting, force, or harassment.</td>
                      <td>Police complaint (Sec 329 BNS / 441 IPC), RBI Ombudsman, Cease-and-Desist Notice.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution Bailiff.</td>
                      <td>Court Warrant under Order XXI CPC.</td>
                      <td><strong>Only with Official Court Warrant</strong> and proper ID.</td>
                      <td>Must follow Section 60 CPC property exemptions.</td>
                      <td>Leave to Defend, Objection Petition under Order XXI Rule 58 CPC.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer.</td>
                      <td>Securitisation Act, 2002 (Secured Debt Only).</td>
                      <td><strong>Zero for unsecured loans</strong>. Only secured mortgaged property with DM/CMM order.</td>
                      <td>Mandatory 60-day Section 13(2) notice and formal possession protocols.</td>
                      <td>Section 17 Securitisation Application before DRT.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Conciliator.</td>
                      <td>Legal Services Authorities Act, 1987.</td>
                      <td><strong>None</strong> (Consensual compromise forum).</td>
                      <td>Zero field visits. Consensual settlement hearings.</td>
                      <td>Mutually negotiated settlement award with full finality.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce).</td>
                      <td>Judicial Magistrate First Class Court.</td>
                      <td><strong>Zero</strong> (Court summons served via registered post or police).</td>
                      <td>No private collection visits during court trial.</td>
                      <td>Bail application, compounding under Section 147 NI Act via OTS settlement.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Doorstep Harassment Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No family should live in fear of collection agents banging on doors or shouting in hallways. At SettleLoans, our banking lawyers protect your privacy and dignity under Section 329 BNS and RBI rules. We send Cease-and-Desist notices to stop doorstep visits. We then negotiate directly with senior bank managers to get a 40% to 65% One-Time Settlement with a stamped No Dues Certificate.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agent Doorstep Rules &amp; Legal Rights</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, verified legal answers regarding recovery agent limitations, criminal trespass laws, privacy rights. And debt settlement in India.
              </p>

              <div className="space-y-3">
                {faqsList.map((faq, idx) => (
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
                      <p>{faq.answer}</p>
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
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 329 Criminal House-Trespass)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
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
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Justice K.S. Puttaswamy Right to Privacy Ruling)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Agent Harassment Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code, 1860 (Sections 441 Trespass, 506 Intimidation &amp; 383 Extortion)</span>
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
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Take Furniture or Gold?
                </Link>
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
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Personal Loan?
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior expert in banking law, borrower rights against recovery harassment, Section 329 BNS criminal trespass, and RBI debt settlements.
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
                <span>Immediate Legal Protection</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Agents Intimidating You at Your Doorstep?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not face aggressive collection agents alone. Hire our lawyers to send a Cease-and-Desist notice, protect your home. And negotiate a 40% to 65% OTS.
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
                  <span>Section 329 BNS Statutory Immunity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
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
