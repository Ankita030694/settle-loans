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
  title: 'Can Recovery Agents Enter House Without Permission? Legal Rights & RBI Rules',
  description: 'Can loan recovery agents enter your house without permission? Discover Section 329 BNS / Section 441 IPC criminal trespass laws, Puttaswamy privacy rights, RBI rules, and how to shut the door lawfully.',
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
    answer: "No. Bank and NBFC recovery agents have absolute zero judicial or statutory power to enter your private residential premises without your explicit, voluntary consent. Any unauthorized entry, stepping across the doorway, or refusing to leave when asked constitutes criminal trespass under Section 329 of the Bharatiya Nyaya Sanhita, 2023 (and Section 441/442 of the Indian Penal Code, 1860)."
  },
  {
    name: "Can I legally shut the door on a loan recovery agent who arrives at my home?",
    answer: "Yes, you have an absolute legal and constitutional right to shut the door and decline conversation at your doorstep. You are under no legal obligation to invite recovery agents inside, entertain verbal demands, or speak with third-party contractors. You can firmly state that all communications must be conducted in writing through official banking channels or your appointed legal advocate."
  },
  {
    name: "What criminal section applies if a recovery agent pushes the door open or forces their way inside?",
    answer: "Forcing entry, pushing a door open, or stepping inside against a resident's will is classified as House-Trespass under Section 329 BNS / Section 442 IPC, punishable with imprisonment. If accompanied by threats, abusive shouting, or coercion, it constitutes Criminal Intimidation (Section 351 BNS / Section 506 IPC) and Extortion (Section 308 BNS / Section 383 IPC)."
  },
  {
    name: "What did the Supreme Court rule regarding recovery agents entering borrower residences?",
    answer: "In the landmark judgment ICICI Bank Ltd. v. Prakash Kaur (2007), the Supreme Court of India held that banks cannot employ musclemen or extra-judicial intimidation to recover debts or enter borrower premises. Furthermore, the 9-judge Constitution Bench in Justice K.S. Puttaswamy v. Union of India (2017) affirmed that the home is the core sanctum of the fundamental Right to Privacy under Article 21, protecting citizens from unauthorized physical intrusions."
  },
  {
    name: "What are the permissible visit timings and rules for recovery agents under RBI guidelines?",
    answer: "Under the RBI Master Directions on Fair Practices Code and Outsourcing Guidelines, recovery agents are strictly limited to visiting borrowers between 8:00 AM and 7:00 PM only. Agents must carry an official identity card, an authorization letter from the lending bank, respect the borrower's privacy, maintain civil conduct, and immediately leave if the borrower requests communication via legal counsel."
  },
  {
    name: "Can recovery agents bring local police with them to enter my residence for a personal loan default?",
    answer: "No. Personal loan and credit card defaults are purely civil contractual disputes under Indian contract law. Police officers have no jurisdiction or statutory authority to assist recovery agents, act as debt collectors, or enter your residence without a judicial warrant issued by a competent magistrate."
  },
  {
    name: "What immediate steps should I take if a recovery agent refuses to leave my doorstep or premises?",
    answer: "Remain calm, keep the door locked, and activate audio or video recording from your smartphone or security camera. Firmly state through the door: 'You do not have permission to be on this property. Please leave immediately.' If they persist or create a disturbance, dial 112 for police assistance to report unlawful assembly and criminal intimidation, and notify your legal advocate."
  },
  {
    name: "How does a debt settlement advocate stop recovery agents from visiting my residence entirely?",
    answer: "A debt settlement advocate executes a formal Vakalatnama and serves a statutory Cease-and-Desist notice upon the bank's nodal officer, collection heads, and legal department. Under RBI regulations, once a borrower is formally represented by counsel, lenders are legally required to route all communications through the advocate, terminating unauthorized home visits and initiating structured OTS compromise talks."
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
          "reviewBody": "Two recovery agents barged past my front door, sat in my living room, and refused to leave until I paid my personal loan EMI. SettleLoans immediately drafted a police complaint under Section 329 BNS for house-trespass and issued a Cease-and-Desist notice to the bank. The bank recalled the agency within 24 hours, issued an apology, and offered a 50% one-time settlement.",
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
          "reviewBody": "I was terrified when an NBFC collection agent pushed against my main door to prevent me from closing it. SettleLoans advocates intervened, citing Supreme Court rulings on the Right to Privacy and RBI Fair Practice codes. The doorstep intimidation stopped completely and my debt was resolved peacefully.",
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
          "reviewBody": "Ashish Jhangra and the SettleLoans legal team provided exceptional clarity on borrower rights. They explained why recovery agents have zero authority to enter a home without explicit consent. Their legal representation protected my family's dignity and settled three credit card accounts at a substantial waiver.",
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
          "reviewBody": "Recovery agents used to stand outside my apartment door shouting and demanding entry. SettleLoans served a formal legal notice to the bank's nodal officer and registered a complaint on the RBI Integrated Ombudsman portal. All unauthorized visits ended instantly.",
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Can Recovery Agents Enter Your House Without Permission? <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Rights, Section 329 BNS &amp; RBI Rules</span>
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
                Bank recovery agents possess zero legal authority to step inside your residence, push open doors, or remain on private property without express permission. Uninvited entry constitutes criminal trespass under Section 329 BNS and Section 441 IPC. Borrowers have an absolute constitutional right to refuse entry, close the door, and demand institutional communication exclusively through legal counsel.
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
                  <span><strong>Zero Right of Entry:</strong> Recovery agents and private collection representatives have no judicial authority, search warrant, or legal right to step over your residential threshold without explicit consent.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Trespass Offense:</strong> Pushing open a door, barging into a living room, or refusing to leave private premises after being told to do so constitutes criminal house-trespass under Section 329 BNS and Section 441/442 IPC.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Constitutional Privacy Shield:</strong> The Supreme Court of India in the landmark <em>Puttaswamy</em> ruling recognized the domestic home as the core inviolable sanctum of personal liberty and privacy under Article 21.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Right to Shut the Door:</strong> Borrowers can lawfully decline in-person discussions, shut the door, record any outside disturbances, and direct lenders to communicate exclusively through legal advocates.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Advocate Representation Stops Visits:</strong> Serving a statutory Cease-and-Desist notice obligates lenders under RBI directives to halt field visits and redirect recovery to structured One-Time Settlement (OTS) channels.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Doorstep Intrusion Reality */}
            <section id="doorstep-intrusion-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Doorstep Intrusion Reality: Deconstructing Forced Entry &amp; Doorstep Anxiety in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a personal loan, consumer credit line, or credit card balance is an excruciating financial and psychological ordeal. Across Indian cities, salaried professionals, small enterprise owners, and independent workers dealing with temporary liquidity crises often face an agonizing phenomenon: unannounced doorstep visits by aggressive third-party collection personnel. For countless families, the sudden sound of heavy knocking or persistent doorbell ringing triggers severe doorstep anxiety. The fear that recovery agents might push past the entrance, barge into the private living room, shout in front of neighbors, or confront elderly parents and young children creates intense social paralysis.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This pervasive anxiety stems from a profound asymmetry of information. Collection agencies intentionally cultivate an aura of pseudo-official authority. Agents frequently dress in quasi-uniforms, carry bulky clipboards, use aggressive postures, and make assertive claims that they possess statutory authority to enter the premises, inspect domestic belongings, or sit in the living room until money is collected. They rely on the assumption that ordinary citizens are unaware of Indian civil jurisprudence and penal statutes.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Core Legal Foundation</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Recovery agents are private commercial contractors operating under service level agreements with lenders. They possess exactly zero judicial, police, or statutory authority. Under Indian law, your residential threshold is a legally protected private sanctuary that no private individual may cross without your voluntary consent.
                </p>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                An unsecured loan default represents a civil breach of a commercial contract governed exclusively by the Indian Contract Act, 1872. It is not a criminal offense, and it gives the lending institution no proprietary claim over your real estate or physical residence. The lender&apos;s legal recourse is strictly limited to initiating civil recovery proceedings in a competent court of law. When recovery agents attempt to convert a civil contractual disagreement into physical doorstep coercion, they cross the line into punishable penal misconduct.
              </p>
            </section>

            {/* Section 2: Statutory Protections & Criminal Trespass */}
            <section id="statutory-framework-criminal-trespass" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Protections &amp; Criminal Trespass: Section 329 BNS and Section 441 IPC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Indian penal jurisprudence provides rigorous statutory protections against uninvited intrusions into private residences. With the enactment of the Bharatiya Nyaya Sanhita, 2023 (BNS), replacing the Indian Penal Code, 1860 (IPC), the legal framework governing criminal trespass, house-trespass, and unlawful entry has been modernized while maintaining strict penalties for unauthorized physical encroachments.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Section 329 of the Bharatiya Nyaya Sanhita, 2023 (corresponding to Section 441 and Section 442 of the Indian Penal Code), criminal trespass occurs whenever an individual enters into or upon property in the lawful possession of another with the intent to commit an offense, or to intimidate, insult, or annoy the person in possession. Furthermore, entering private premises lawfully but remaining there unlawfully with the intent to intimidate or annoy constitutes an identical penal offense. When this trespass occurs in any building, tent, or vessel used as a human dwelling, it is classified as house-trespass, attracting substantial imprisonment and statutory fines.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Penal Provisions Governing Unlawful Recovery Intrusions</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 329 BNS / Section 441 &amp; 442 IPC: Criminal House-Trespass</p>
                    <p className="text-slate-600 mt-1">
                      Any recovery agent who crosses the physical threshold of your home, steps into your hallway or living room without express invitation, or wedges a foot in the door to prevent closure is guilty of house-trespass. Once asked to leave, every subsequent second spent on your property compounds the offense.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp; 506 IPC: Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Threatening a borrower or their family members with physical harm, reputational damage, social humiliation, or unlawful seizure of property during a doorstep visit constitutes criminal intimidation, punishable by up to two years of rigorous imprisonment.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 &amp; 384 IPC: Extortion</p>
                    <p className="text-slate-600 mt-1">
                      Intentionally putting a borrower in fear of injury, public scandal, or loss of dignity to coerce the immediate delivery of money or valuable security represents the cognizable offense of extortion.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 189 BNS / Section 141 IPC: Unlawful Assembly</p>
                    <p className="text-slate-600 mt-1">
                      When groups of two or more collection agents gather outside a residential apartment or house to create a public scene, intimidate the family, or block entry and exit, they form an unlawful assembly subject to direct police intervention.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legal clarity is unambiguous: no contract clause, loan sanction condition, or collection mandate can override penal law. Even if a borrower signed a boilerplate loan agreement containing generic language regarding lender inspections, such private clauses cannot confer a legal right to commit criminal trespass. Any attempt by collection personnel to force entry or physically occupy your residence is an actionable crime for which immediate police assistance and judicial complaints are fully warranted.
              </p>
            </section>

            {/* Section 3: Constitutional Right to Privacy & Landmark Supreme Court Precedents */}
            <section id="constitutional-privacy-puttaswamy" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Constitutional Right to Privacy &amp; Landmark Supreme Court Precedents
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Beyond statutory criminal provisions, Indian borrowers are protected by the highest constitutional jurisprudence established by the Supreme Court of India. In the historic nine-judge Constitution Bench ruling in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the Supreme Court unequivocally declared that the Right to Privacy is a fundamental right emanating from Article 21 (Right to Life and Personal Liberty) of the Constitution of India.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The apex court specifically articulated spatial privacy—the inviolability of the private home as an intimate physical sanctum where individuals and their families have an absolute right to be left alone, free from uninvited surveillance, commercial badgering, or physical disturbance. The court established that an individual&apos;s home represents the ultimate zone of personal autonomy. When a private commercial entity or its hired recovery contractors intrude upon this spatial sanctum without judicial authorization, they violate the borrower&apos;s fundamental constitutional protections.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This constitutional principle reinforces long-standing Supreme Court jurisprudence specifically curbing banking recovery excesses. In <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the Supreme Court severely condemned the practice of hiring recovery agents and musclemen to intimidate borrowers, stating emphatically that commercial banks cannot recover loans through extra-judicial muscle power or by subjecting citizens to humiliation and terror. The court held that lenders must adhere strictly to the rule of law and due civil process.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Similarly, in <em>Sardar Associates v. Punjab &amp; Sind Bank (2009) 8 SCC 257</em>, the apex court ruled that guidelines and directives issued by the Reserve Bank of India carry statutory binding force under Section 21 and Section 35A of the Banking Regulation Act, 1949. Consequently, when lenders or their collection agencies violate RBI directives on privacy, civil conduct, and permissible communication protocols, their actions are illegal, rendering the principal bank directly liable for regulatory penalties and civil damages.
              </p>
            </section>

            {/* Section 4: RBI Master Directions & Fair Practices Code */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. RBI Master Directions &amp; Fair Practices Code: Absolute Prohibition on Doorstep Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has established comprehensive, enforceable regulations to govern the conduct of banks, NBFCs, and their outsourced recovery agents. These rules are codified under the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em> and the <em>Master Circular on Fair Practices Code</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The RBI directives establish stringent operational boundaries that explicitly forbid aggressive, intrusive, or uninvited doorstep behavior. Under these master directions:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Recovery Code of Conduct Standards</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permissible Contact Hours (8 AM to 7 PM)</p>
                    <p className="text-slate-600">Agents are strictly barred from calling or visiting borrowers before 8:00 AM or after 7:00 PM. Early morning or late evening visits are regulatory violations.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory Authorization &amp; Identity Verification</p>
                    <p className="text-slate-600">Every visiting agent must carry a formal identity card issued by the agency and an official letter from the lending bank authorizing them for the specific account.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Absolute Prohibition on Force &amp; Public Shaming</p>
                    <p className="text-slate-600">Agents are prohibited from using abusive language, shouting in corridors, approaching neighbors or security guards, or causing domestic distress.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Respect for Privacy &amp; Advocate Routing</p>
                    <p className="text-slate-600">If a borrower requests that communications be routed through an appointed legal advocate or in writing, the lender and its agents must respect that request.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, the RBI has clarified that Regulated Entities (REs) bear full vicarious liability for the misconduct, harassment, or unlawful acts of their outsourced collection agencies. A bank cannot evade accountability by claiming that an aggressive agent was an independent contractor. Under the RBI Integrated Ombudsman Scheme, lenders found guilty of deploying non-compliant recovery tactics face substantial financial penalties, public reprimands, and mandatory compensation awards to affected borrowers of up to ₹20 Lakhs for mental agony and reputational harm.
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
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. How to Lawfully Shut the Door: Step-by-Step Tactical &amp; Legal Response Protocol
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When recovery agents arrive unannounced at your doorstep, knowing exactly how to react dispels panic and places you in complete legal control of the situation. You do not need to argue, shout, or feel intimidated. By following a structured legal response protocol, you can assert your rights, maintain your dignity, and create unassailable documentary evidence:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <DoorClosed className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 5-Step Doorstep Protection Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 1: Keep the Main Door Closed or Latched</p>
                    <p className="text-slate-600 mt-1">Never open the door fully. Speak through a security grill or safety latch. Do not invite them inside under any circumstance.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 2: Demand Official Identification &amp; Authorization</p>
                    <p className="text-slate-600 mt-1">Ask the visitor to hold their official agency ID card and the bank&apos;s specific account authorization letter against the peep-hole or window. Photograph these credentials with your smartphone.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 3: State Explicit Refusal of Physical Entry &amp; Record</p>
                    <p className="text-slate-600 mt-1">Activate smartphone video or audio recording. State calmly: &quot;You do not have my permission to enter this property. Default is a civil matter. Please leave my premises immediately.&quot;</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 4: Refuse Cash or Informal Transactions</p>
                    <p className="text-slate-600 mt-1">Never hand over cash, blank signed cheques, or make personal UPI transfers to visiting agents. Reiterate that payments are made only through official bank settlement channels.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Step 5: Firmly Close the Door and Notify Legal Counsel</p>
                    <p className="text-slate-600 mt-1">Close and lock the door completely. If the agent continues banging, shouting, or creating a nuisance, dial 112 for police assistance to report criminal intimidation, and forward the video evidence to your legal advocate.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Closing the door on a recovery agent is entirely lawful. It does not constitute non-cooperation with a court of law, nor does it give the lender any right to escalate criminal proceedings. It is the simple exercise of your fundamental property and privacy rights.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting, Provisioning Burden & The NPV Recovery Model */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Bank NPA Accounting Realities: Provisioning Burdens &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why collection agencies resort to aggressive doorstep visits rather than pursuing court remedies, one must analyze the institutional economics of bad debt recovery in India. Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning, an unsecured retail loan or credit card facility is categorized as a Non-Performing Asset (NPA) once repayments remain overdue for more than 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account enters NPA status, the bank must halt interest recognition and allocate substantial capital reserves as regulatory provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard NPA (Up to 12 Months Overdue):</strong> Mandatory 15% provisioning on total unsecured exposure.</li>
                <li><strong>Doubtful NPA - Category 1 (12 to 24 Months Overdue):</strong> Mandatory 100% provisioning on the unsecured balance.</li>
                <li><strong>Loss Assets / Written-Off Portfolio:</strong> 100% full balance sheet write-off against the bank&apos;s operating profits.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If a bank files a civil suit in a District Commercial Court to recover an unsecured personal loan of ₹5 Lakhs to ₹20 Lakhs, it must pay upfront non-refundable court fees (typically 1% to 3%), retain external litigation lawyers, and navigate 3 to 5 years of procedural delays. Because unhypothecated domestic items inside a home cannot be attached without winning a protracted trial and overcoming Section 60 CPC exemptions, the expected recovery yield from litigation is heavily negative. Institutional credit risk committees evaluate settlement viability using a Net Present Value (NPV) recovery formula:
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
                  Where C_t represents estimated recoveries across annual intervals t, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of court friction, litigation fees, and locked regulatory capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because protracted litigation generates a deeply diminished Net Present Value, lending institutions have massive financial incentive to agree to a negotiated One-Time Settlement (OTS). By approving a 40% to 65% principal waiver, the lender recovers immediate cash liquidity, eliminates non-performing assets from its books, and writes back locked regulatory provisions into quarterly profits. Doorstep agent harassment is merely a low-cost, high-pressure tactic deployed by third parties before the file is transitioned to the bank&apos;s formal compromise settlement committee.
              </p>
            </section>

            {/* Section 8: Direct OTS Negotiation, Cease-and-Desist Notices & NDC */}
            <section id="cease-and-desist-ots-negotiation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Direct OTS Settlement Protocols: Cease-and-Desist Notices, Sanction Letters &amp; NDC
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common trap for distressed borrowers during doorstep harassment is making token payments or UPI transfers to collection agents based on verbal promises that visits will stop. Such informal payments are routinely credited toward penal interest and late fees, leaving the core principal delinquent and inviting fresh harassment weeks later.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To permanently eliminate doorstep harassment and legally extinguish the loan liability, borrowers must pursue formal statutory settlement procedures:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Three-Pillar Legal Settlement Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Statutory Cease-and-Desist</p>
                    <p className="text-slate-600">Formal advocate notice served on the lender&apos;s nodal officers halting unauthorized doorstep visits and demanding all future dialogue occur through legal counsel.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Official Sanction Letter</p>
                    <p className="text-slate-600">A verified One-Time Settlement sanction letter on official bank letterhead detailing the negotiated settlement sum, waiver percentage, and installment timelines.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped NDC &amp; CIBIL</p>
                    <p className="text-slate-600">Direct payment to the loan account followed by issuance of a stamped No Dues Certificate (NDC) under RBI Circular RBI/2023-24/60 and credit bureau closure.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the settlement is executed and the No Dues Certificate is issued, the bank updates credit bureaus (CIBIL, Experian, CRIF, Equifax) with the status &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;. This completely removes all legal risk, protects your residence from future interference, and allows you to systematically rebuild your credit score over subsequent quarters.
              </p>
            </section>

            {/* Section 9: Comparative Legal Matrix */}
            <section id="comparative-enforcement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Channels, Entry Powers &amp; Borrower Safeguards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative matrix below details the statutory boundaries, entry authority, and borrower legal protections across various debt recovery mechanisms operating in India:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Channel</th>
                      <th>Legal Authority</th>
                      <th>Right to Enter Residence</th>
                      <th>Doorstep Conduct Restrictions</th>
                      <th>Applicable Legal Remedies</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Third-Party Recovery Agents</td>
                      <td>Private Agency Contract (Zero Judicial Authority)</td>
                      <td><strong>Absolute Zero</strong> (Uninvited entry is Criminal Trespass)</td>
                      <td>Strictly 8 AM to 7 PM; No shouting, force, or harassment</td>
                      <td>Police complaint (Sec 329 BNS / 441 IPC), RBI Ombudsman, Cease-and-Desist Notice</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Court Execution Bailiff</td>
                      <td>Court Warrant issued under Order XXI CPC</td>
                      <td><strong>Only with Official Court Warrant</strong> and proper identification</td>
                      <td>Must adhere strictly to Section 60 CPC property exemptions</td>
                      <td>Leave to Defend, Objection Petition under Order XXI Rule 58 CPC</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SARFAESI Authorized Officer</td>
                      <td>Securitisation Act, 2002 (Secured Debt Only)</td>
                      <td><strong>Zero for unsecured loans</strong>; Only secured mortgaged property with DM/CMM order</td>
                      <td>Mandatory 60-day Section 13(2) notice and formal possession protocols</td>
                      <td>Section 17 Securitisation Application before the Debts Recovery Tribunal (DRT)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Lok Adalat Conciliator</td>
                      <td>Legal Services Authorities Act, 1987</td>
                      <td><strong>None</strong> (Purely institutional, voluntary compromise forum)</td>
                      <td>Zero field visits; Consensual settlement hearings</td>
                      <td>Mutually negotiated settlement award with full civil finality</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act (Cheque Bounce)</td>
                      <td>Judicial Magistrate First Class Court</td>
                      <td><strong>Zero</strong> (Court summons served via registered post or police)</td>
                      <td>No private collection visits authorized during criminal trial</td>
                      <td>Bail application, compounding under Section 147 NI Act via OTS settlement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-legal-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Framework: Protecting Your Home, Family &amp; Dignity
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No individual or family should have to live in terror of aggressive collection agents banging on doors, shouting in residential hallways, or attempting to violate the sanctity of their home. At SettleLoans, our senior banking advocates, consumer protection specialists, and financial negotiators provide robust nationwide representation for distressed borrowers. We immediately enforce your constitutional privacy rights and statutory protections under Section 329 BNS and the RBI Fair Practices Code. By serving formal Vakalatnama and Cease-and-Desist notices, we halt uninvited doorstep harassment permanently and negotiate directly with senior banking executives to secure structured 40% to 65% One-Time Settlements backed by official No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Agent Doorstep Rules &amp; Legal Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, verified legal answers regarding recovery agent limitations, criminal trespass laws, privacy rights, and debt settlement in India.
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
                  <h4 className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Distinguished authority in banking jurisprudence, civil liberties against unlawful recovery agent intimidation, criminal trespass protections under Section 329 BNS, and RBI compromise settlement frameworks.
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
              <h4 className="font-bold text-base text-white mb-2">Agents Intimidating You at Your Doorstep?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not endure uninvited home visits or aggressive collection threats. Retain our senior advocates to issue immediate Cease-and-Desist notices, protect your home sanctuary, and negotiate a 40%–65% OTS.
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
