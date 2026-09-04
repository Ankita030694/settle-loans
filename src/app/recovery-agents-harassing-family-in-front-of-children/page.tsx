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
  HeartHandshake,
  Users,
  Home,
  UserX,
  Volume2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Recovery Agents Harassing Family | SettleLoans',
  description: 'Recovery agents shouting at home in front of children? Protect your family under child protection laws and file a police FIR with SettleLoans.',
  keywords: [
    'recovery agent shouting at home in front of kids',
    'recovery agents harassing family in front of children',
    'bank recovery agent screaming at home',
    'recovery agent banging door in front of kids',
    'juvenile justice act loan recovery harassment',
    'child psychological trauma recovery agent complaint',
    'police complaint recovery agent shouting at home',
    'rbi guidelines recovery agent visiting home family',
    'breach of domestic peace recovery agent',
    'emergency police fir against recovery agents',
    'section 503 506 ipc criminal intimidation recovery',
    'one time settlement debt harassment children'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children',
  },
  openGraph: {
    title: 'Recovery Agent Shouting at Home in Front of Kids? Legal Rights & Police FIR Guide',
    description: 'Stop traumatic home debt recovery. Understand legal protections under the Juvenile Justice Act, Supreme Court dignity rulings, RBI Fair Practices Code, and emergency police complaint protocols.',
    url: 'https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-harassing-family-in-front-of-children.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agents Harassing Family in Front of Children Legal Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Shouting at Home in Front of Kids? Legal Rights & Police FIR Guide',
    description: 'Facing aggressive collection agents creating scenes in front of your children or elderly family? Discover statutory child protections, criminal law remedies, and debt settlement solutions.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-harassing-family-in-front-of-children.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#webpage",
      "url": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children",
      "name": "Recovery Agent Shouting at Home in Front of Kids? Legal Rights & Police FIR Guide",
      "description": "Is a bank recovery agent shouting at your home in front of your kids, elderly parents, or family? Learn child protection laws, Juvenile Justice Act provisions, emergency police FIR remedies, and advocate-led OTS settlement.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#breadcrumb",
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
          "name": "Family & Child Protection Defense",
          "item": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#article",
      "headline": "Recovery Agent Shouting at Home in Front of Kids? Child Protection Laws, Juvenile Justice Act, Police FIR & OTS Defense",
      "description": "Comprehensive statutory analysis for borrowers dealing with rogue collection agents creating public scenes, banging doors, or shouting in front of minors and elderly dependents. Explains Section 75 Juvenile Justice Act, criminal trespass, breach of domestic peace, RBI Master Directions, and advocate debt settlement strategies.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-harassing-family-in-front-of-children.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#service",
      "name": "SettleLoans - Family Debt Protection & Harassment Defense Advisory",
      "description": "Expert legal representation, child protection intervention, and stressed debt resolution for families subjected to unlawful recovery harassment, domestic peace breaches, and aggressive home visits.",
      "url": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-harassing-family-in-front-of-children.jpg",
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
            "name": "Pooja Sharma"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "Two recovery agents came to my home. They banged on the door and shouted in front of my 6-year-old daughter. She was crying in fear. SettleLoans advocates stepped in right away. They filed a police complaint under Section 506 IPC. They also sent a legal notice to the bank MD under the Juvenile Justice Act. The bank recalled the agency within 24 hours. They gave a written apology and approved a 60% OTS.",
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
            "name": "Rajesh Nair"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "A finance firm sent recovery agents to my flat in Kochi. They shouted outside in front of my elderly, ill parents. SettleLoans stepped in quickly. They filed an urgent complaint with the City Police Commissioner and the RBI Banking Ombudsman. All visits stopped for good. We settled the ₹8.4 Lakhs loan for ₹3.3 Lakhs with zero legal issues.",
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
            "name": "Amitav Sengupta"
          },
          "datePublished": "2026-08-09",
          "reviewBody": "Recovery callers threatened to make a scene at my children's school bus stop. SettleLoans advocates drafted a strong legal notice citing NCPCR guidelines and Supreme Court rulings. The bank moved my file to their internal resolution desk. They closed my loan through an affordable settlement.",
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
          "datePublished": "2026-05-30",
          "reviewBody": "Aggressive agents visited my home at 8:30 PM. They shouted in the hallway and terrified my pregnant sister-in-law. SettleLoans handled the case with care and skill. They cited Section 75 JJ Act and RBI time rules. This forced the bank to settle the debt at a 55% waiver with a valid No Dues Certificate.",
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
      "@id": "https://www.settleloans.in/recovery-agents-harassing-family-in-front-of-children#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a recovery agent shout at my home or bang on my door in front of my children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Shouting, banging doors, or using bad language at your home is illegal. These acts violate the RBI Fair Practices Code. They also violate privacy rights under Article 21. Causing mental trauma to kids violates Section 75 of the Juvenile Justice Act. It is also a crime under Sections 441, 503, 506, and 268 of the IPC (Sections 329, 351, and 270 BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "What child protection laws apply if recovery agents cause psychological trauma to minors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 75 of the Juvenile Justice Act, 2015 protects minors. Anyone who causes mental cruelty or emotional distress to a child faces up to three years in prison. Creating scary scenes at a child's home or school is a serious offense. You can report it to local police, Child Welfare Committees (CWCs). And the NCPCR."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate steps should I take if recovery agents are screaming outside my home right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call 100 or 112 right away for police help. Report criminal trespass and harassment. Record video and audio through your door or window. Capture their faces and abusive words. Ask for their DRA ID cards and bank letters through the door grill. Do not open the door. Contact a debt lawyer to file an urgent complaint."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents question, intimidate, or talk to my children or elderly parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Master Directions, recovery agents cannot talk to third parties, minors, or elderly parents. They cannot share debt details with family or neighbours. Talking to or scaring children violates banking rules and child protection laws."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal charges can be filed against aggressive recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file a Police FIR under Section 441/447 IPC (Criminal Trespass) and Section 503/506 IPC (Criminal threats). You can also use Section 268/290 IPC (Public Nuisance), Section 509 IPC (Words outraging modesty of women), Section 383/384 IPC (Extortion), and Section 75 JJ Act. These correspond to Sections 329, 351, 270, 79, and 308 of the BNS, 2023."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permitted visiting hours for loan recovery agents under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, recovery agents may visit only between 8:00 AM and 7:00 PM on working days. Visiting before 8:00 AM or after 7:00 PM is strictly banned. Visits on holidays without prior consent are also prohibited. You can report breaches to the RBI Banking Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "How does documenting home harassment help in negotiating a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a lawyer shares clear video and audio evidence with the bank's Nodal Officer, the bank faces serious fines. The bank also risks police action. To avoid fines and public backlash, bank leaders usually withdraw the agency. They then approve a 45% to 65% OTS waiver."
          }
        },
        {
          "@type": "Question",
          "name": "Can the police arrest recovery agents for shouting and intimidating families at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your complaint includes video proof of trespass, threats, or abuse toward women and children, police can act. Officers can detain the agents on the spot. They can register an FIR and summon the agency managers and bank officials."
          }
        },
        {
          "@type": "Question",
          "name": "What must be verified in an official One-Time Settlement sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An authentic OTS letter must be on official bank letterhead with a reference number. It must show your full name, PAN. And loan account number. It must state the exact settlement amount and payment schedule. It must also confirm that all remaining dues are closed once you pay."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate following settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate (NDC) within 30 days of final payment. They must also update credit bureaus to a zero balance. Lenders that miss this 30-day deadline must pay the borrower ₹5,000 per day of delay."
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
  { id: 'home-recovery-harassment-child-trauma', title: '1. Home Harassment & Child Trauma' },
  { id: 'statutory-child-protection-juvenile-justice-act', title: '2. Juvenile Justice Act & Child Rights' },
  { id: 'constitutional-privacy-domestic-peace-ipc', title: '3. Privacy, Domestic Peace & Penal Law' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. NPA Accounting & NPV Equation' },
  { id: 'family-protection-defense-roadmap', title: '5. Child & Family Protection Visual Roadmap' },
  { id: 'emergency-4-stage-police-advocate-protocol', title: '6. The 4-Stage Emergency Police Protocol' },
  { id: 'leveraging-violations-for-55-percent-ots', title: '7. Converting Harassment into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & ₹0 NDC Mandate' },
  { id: 'comparative-legal-defense-matrix', title: '9. Comparative Legal Defense Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Family Protection Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentsHarassingFamilyInFrontOfChildrenPage() {
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
            <span>Child &amp; Family Protection • Juvenile Justice Act &amp; Domestic Peace</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Harassing Family in Front of Kids</h1>

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
              <span>Stop Home Harassment Immediately</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Emergency Advocate Defense
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
                Shouting at home or scaring children is a serious crime. It violates Section 75 of the Juvenile Justice Act, Supreme Court rulings, and RBI Master Directions. Legal advocates help you file emergency police FIRs and secure 45% to 65% OTS settlements.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Child Protection &amp; Domestic Peace Rights</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Tolerance for Minor threats:</strong> Under Section 75 of the Juvenile Justice Act, 2015, scaring children carries up to 3 years in prison for recovery agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sanctity of the Domestic Home:</strong> In the <em>Shanti Devi Sharma</em> and <em>Puttaswamy</em> cases, the Supreme Court ruled that agents cannot disturb domestic peace or shout in residential areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Criminal Penal Provisions:</strong> Door banging and verbal abuse trigger FIR charges under Sections 441, 503, 506, and 509 IPC (Sections 329, 351, and 79 BNS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory RBI Timing and Identity Bans:</strong> Agents can only visit between 8:00 AM and 7:00 PM. They must carry DRA ID cards. They cannot discuss debt with family or minors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Criminal Violations into 55% OTS:</strong> Legal notices showing child trauma push bank leaders to stop recovery visits and approve a 45% to 65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Home Harassment Crisis & Child Psychological Trauma */}
            <section id="home-recovery-harassment-child-trauma" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Trauma of Domestic Debt Intimidation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Having aggressive recovery agents show up at your home is terrifying. Agents bang on doors, shout threats. And create public scenes in front of children and elderly parents. Third-party collection agencies often use these fear tactics to force quick loan payments. They rely on social panic to pressure borrowers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This behavior causes real emotional harm to young children. Child psychologists confirm that loud shouting and door pounding trigger acute stress and night terrors. Kids fear for their family&apos;s safety. These traumatic events can harm a child&apos;s mental well-being for a long time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Home className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Inviolability of the Domestic Sphere</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Indian law, every citizen has a right to peace at home. A loan default is a civil matter. It does not give lenders or agents the right to enter your home or shout at your family.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Volume2 className="w-4 h-4 text-red-600" />
                    <span>Weaponized Public Humiliation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rogue agents often visit early in the morning or during dinner hours. They shout in hallways to shame families before neighbors. This conduct violates RBI Fair Practices Code rules.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Screaming at a home and scaring minors crosses legal boundaries. It is not lawful debt collection. It is a mix of criminal offenses and actionable child cruelty under Indian law.
              </p>
            </section>

            {/* Section 2: Juvenile Justice Act & Child Protection Mandates */}
            <section id="statutory-child-protection-juvenile-justice-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Child Protection</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan recovery is subject to strict legal rules. The Indian legal system provides strong protections for minors under child welfare laws. When agents shout or threaten violence near children, they fall under the <strong>Juvenile Justice (Care and Protection of Children) Act, 2015</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Section 75 of the Juvenile Justice Act, 2015: Punishment for Cruelty to Child</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Section 75 of the JJ Act, 2015 protects children from cruelty. Anyone who causes mental cruelty, physical suffering, or emotional distress to a child faces <strong>rigorous imprisonment up to three years, a fine of one lakh rupees, or both</strong>.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The National Commission for Protection of Child Rights (NCPCR) bans child harassment during debt recovery. When a lawyer files a complaint under the JJ Act and the Commissions for Protection of Child Rights Act, 2005, local police must take immediate action.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>NCPCR Guidelines</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The Child Rights Commission bans harassment of minors at home, school, or transit points during debt collection.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Child Welfare Committees</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    District CWCs have quasi-judicial powers. They can issue orders to bar recovery agents from homes with minors.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-purple-600" />
                    <span>Vicarious Bank Liability</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Lending banks remain legally responsible for the wrongful acts of their outsourced collection agencies.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Presenting proof of child distress to bank leaders and ombudsmen turns a debt dispute into a major regulatory violation for the lender.
              </p>
            </section>

            {/* Section 3: Constitutional Privacy, Inviolability of Home & Criminal Law */}
            <section id="constitutional-privacy-domestic-peace-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Constitutional Privacy, Inviolability of Home</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India protects families from residential harassment. In <em>ICICI Bank Ltd. v. Shanti Devi Sharma (2008)</em>, the Supreme Court ruled that banks cannot use musclemen or threats to collect debt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court affirmed that privacy and dignity at home are fundamental rights under <strong>Article 21 of the Constitution</strong>. Shouting in hallways and banging doors violates both the Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS), 2023:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Criminal Trespass &amp; House-Trespass (Section 441, 442 &amp; 447 IPC / Sections 329 &amp; 331 BNS)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entering private property without consent to intimidate or insult residents is criminal trespass under Sections 441, 442, and 447 IPC (Sections 329 and 331 BNS). Refusing to leave upon request makes it house-trespass.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Intimidation (Section 503 &amp; 506 IPC / Section 351 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower or their family with harm or public shaming is a crime under Sections 503 and 506 IPC (Section 351 BNS). It carries up to seven years in prison for severe threats.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-purple-600" />
                    <span>Public Nuisance &amp; Domestic Peace Breach (Section 268 &amp; 290 IPC / Section 270 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shouting loudly in apartment buildings and disturbing neighbors is a crime under Sections 268 and 290 IPC (Section 270 BNS) for breach of public peace.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-rose-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-rose-600" />
                    <span>Insulting Modesty of Women (Section 509 IPC / Section 79 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Using foul language or aggressive gestures toward women in the house violates Section 509 IPC (Section 79 BNS). It carries up to three years in prison.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When recovery agents break these laws, they lose all legal standing. They become offenders subject to direct police action.
              </p>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting &amp; Family Harassment Risks</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To counter home harassment, you must know how collection agencies operate. Banks and NBFCs assign overdue files to third-party Direct Recovery Agencies (DRAs) after 60 to 90 days of default. These agencies work on high commission rates of 12% to 30%.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an account crosses 90 days of non-payment, RBI rules classify it as a <strong>defaulted Asset (NPA)</strong>. The bank must then set aside funds from its profits to cover potential loan losses:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA status Bucket.</th>
                      <th>Overdue default Aging.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 – 90 Days Overdue.</td>
                      <td>5% General Asset Provision.</td>
                      <td>Penal Interest &amp. Late Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>25% Unsecured reserves.</td>
                      <td>35% – 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Full Capital Provision.</td>
                      <td>45% – 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>24+ Months / Written-Off.</td>
                      <td>100% Balance Sheet Write-Off.</td>
                      <td>55% – 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agencies lose their recovery rights once accounts enter write-off or legal action. That is why rogue agents rush to use fear tactics. When advocates document these illegal acts, the bank evaluates the loan using the <strong>Net Present Value (NPV) of Recovery</strong> formula:
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
                  Here, C_t is estimated recovery. And r is the discount rate. Deductions include court friction, lawyer fees, ombudsman fines. And locked NPA capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When banks face police FIRs, JJ Act notices, and RBI fines, their financial priorities change. Approving an upfront One-Time Settlement with a 45% to 65% principal waiver becomes their best economic option.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="family-protection-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Child Protection Legal Defense Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below shows our 5-stage legal defense process. It protects families from home visits, enforces child rights under the Juvenile Justice Act. And secures a formal loan settlement.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agents-harassing-family-in-front-of-children.jpg"
                  alt="Child and Family Protection Against Aggressive Debt Recovery Strategic Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Supreme Court &amp; JJ Act</span>
                  <span>Invoke privacy rights under Article 21. Stop mental cruelty against children under Section 75 JJ Act.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Police FIR &amp; Ombudsman</span>
                  <span>File emergency police complaints for criminal intimidation. Submit formal grievances on the RBI CMS portal.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 50–65% OTS &amp; NDC</span>
                  <span>Stop all home visits permanently. Negotiate a One-Time Settlement and get a zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 4-Stage Emergency Police & Advocate Protocol */}
            <section id="emergency-4-stage-police-advocate-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The Emergency 4-Stage Police</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents scream outside your door, do not panic or argue. Aggressive agents see panic as weakness. Follow this clear 4-stage protocol to protect your family right away:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Secure the Premises &amp; Dial Emergency Police (100 / 112)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lock your main door. Move children and elderly parents to an inner room. Dial 100 or 112 immediately. Tell the police that unknown persons are trespassing, banging on doors. And terrorizing your family.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Capture Continuous Audio-Video &amp; CCTV Evidence</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Record clear video through your peephole, window, or camera. Capture the agents&apos. faces, shouting. And door banging. Ask them to show their DRA ID cards and bank letters through the grill. Do not open the door.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Lodge Formal Police FIR &amp; RBI Ombudsman Complaint</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Work with a lawyer to file a police complaint under Sections 441, 503, 506, and 509 IPC (Sections 329, 351, and 79 BNS) and Section 75 JJ Act. File an urgent complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Serve Advocate Cease-and-Desist Notice on Bank Leadership</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your lawyer sends a legal notice to the bank&apos;s MD, Nodal Officer. And agency heads. The notice cites criminal acts and child trauma, demanding an immediate stop to visits and open settlement talks.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following this protocol stops home harassment quickly. It shifts legal pressure onto the lender and restores peace to your family.
              </p>
            </section>

            {/* Section 7: Converting Home Harassment into an Affordable OTS */}
            <section id="leveraging-violations-for-55-percent-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Home Harassment into an Affordable 45%–65%</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Proof of home harassment gives you strong legal leverage. When banking lawyers present evidence of violations, lenders want to settle quickly. They prefer an out-of-court agreement over public fines and police scrutiny.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Instead of paying unfair fines and compound interest, our legal team negotiates a structured <strong>One-Time Settlement (OTS)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Comprehensive Financial Hardship Dossier</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit verified proof of income loss, job disruption, or medical emergencies. This shows your default was genuine and unavoidable.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Remove all penal interest and late fees. Secure a <strong>45% to 65% reduction on the underlying principal balance</strong> based on the loan&apos;s NPA aging.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Residential Ceasefire Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Add a binding term in the settlement agreement. The bank must recall all agents and permanently ban home visits.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Multi-Tranche Payment Plan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pay the settled amount in 2 to 4 monthly installments. This lets you clear debt without draining family savings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, Direct Remittance & ₹0 NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics, Direct Bank Remittance, RBI ₹0</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                You must stay alert during a debt settlement. Some rogue agents share fake letters on chat apps or take cash payments that never reach the bank. Never pay money until your lawyer reviews the official sanction letter.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp. Zonal Reference:</strong> The letter must be on official bank stationery with a valid reference number and manager signature.</li>
                  <li><strong>Exact Borrower &amp. Account Identifiers:</strong> It must state your full name, PAN. And exact loan account number without error.</li>
                  <li><strong>Unambiguous Full closure Recital:</strong> It must state explicitly that the debt is fully settled once payment is made.</li>
                  <li><strong>Direct Loan Account payment:</strong> Pay only into your loan account via NEFT, RTGS, or official bank channels. Never pay cash or use personal UPI IDs.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, banks and NBFCs must issue a <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update credit bureaus to zero balance within <strong>30 calendar days</strong> of final payment. Lenders that miss this deadline must pay <strong>₹5,000 per day</strong> to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Bureau Reporting Trajectory &amp; Credit Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, the bank marks your credit report as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current balance of <strong>₹0</strong>. Your score may drop by 70 to 120 points initially. However, it stops further fines and ends collection calls. Using a secured card and making on-time payments will restore your credit score above 750 in 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-legal-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Family Harassment Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Reviewing your legal options helps you pick the right way to protect your home and settle your debt safely:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel.</th>
                      <th>Legal Basis &amp. Limitations.</th>
                      <th>Family &amp. Child Protection.</th>
                      <th>Typical Resolution Time.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Residential Collection Actions.</td>
                      <td>Illegal pressure violating RBI Fair Practices Code.</td>
                      <td>Zero Protection (causes child trauma and distress).</td>
                      <td>Indefinite / Recurring.</td>
                      <td>Exposes lender to police action and RBI fines.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Emergency Police FIR &amp. JJ Act.</td>
                      <td>Sections 441, 503, 506 IPC &amp. Sec 75 Juvenile Justice Act.</td>
                      <td>Immediate Police Restraint &amp. Criminal trial.</td>
                      <td>24 – 48 Hours.</td>
                      <td>Stops home visits instantly. detains rogue recovery agents.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman.</td>
                      <td>RBI Integrated Ombudsman Scheme 2021 (Deficiency in Service).</td>
                      <td>Orders immediate stop to illegal visits.</td>
                      <td>30 – 45 Days.</td>
                      <td>Regulatory order forcing bank compliance &amp. legal damages.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS.</td>
                      <td>Consensual settlement Agreement.</td>
                      <td>100% Home Ceasefire &amp. Permanent Debt Freedom.</td>
                      <td>15 – 30 Days.</td>
                      <td>Absolute debt closure with official ₹0 NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Child</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Protecting your family from aggressive debt collectors requires experienced banking defense lawyers. Our advocates know how to enforce the Juvenile Justice Act and Supreme Court rulings. SettleLoans helps distressed borrowers across India. We issue legal notices to bank leaders, file police complaints. And handle RBI Ombudsman cases. We negotiate directly with bank zonal heads to secure 45% to 65% principal waivers and official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agents Shouting at Home</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct answers to common questions on home recovery visits, child rights under the Juvenile Justice Act. And legal debt settlement in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Juvenile Justice Act, 2015 (Section 75 Child Cruelty &amp; Trauma)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code / Bharatiya Nyaya Sanhita (Trespass &amp; Intimidation)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Harassment Grievances)</span>
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (Shanti Devi Sharma &amp; Puttaswamy Privacy Judgments)</span>
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
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Workplace Recovery Defense
                </Link>
                <Link
                  href="/recovery-agents-talking-to-neighbours-landlord"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Neighbour &amp; Landlord Privacy Guide
                </Link>
                <Link
                  href="/recovery-agent-calling-late-night-rbi-violation"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Late Night Call RBI Violation
                </Link>
                <Link
                  href="/recovery-agent-misbehaving-with-women-legal-action"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Protection for Women &amp; Family
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint Format Guide
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
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/rbi-ombudsman-complaint-loan-recovery-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Banking Ombudsman Filing
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
                Senior expert in banking defense, family protection, Juvenile Justice Act compliance. And loan settlement in India.
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
                <span>Family Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Agents Shouting at Your Home in Front of Kids?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your children and family today. Work with experienced banking lawyers to file police complaints and negotiate a 45% to 65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Emergency Family Protection
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
                  <span>Juvenile Justice Act Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Banking Ombudsman Escalation</span>
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
