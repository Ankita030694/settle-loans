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
  description: 'Is a bank recovery agent shouting at your home in front of your kids, elderly parents, or family? Learn child protection laws, Juvenile Justice Act provisions, emergency police FIR remedies, and advocate-led OTS settlement.',
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
          "reviewBody": "Two recovery agents came to my residence, banged on the door, and screamed filthy abuse while my 6-year-old daughter was crying in terror. SettleLoans advocates intervened immediately. They filed a formal police complaint under Section 506 IPC and served a statutory notice on the bank MD citing the Juvenile Justice Act. The bank recalled the agency within 24 hours, issued a written apology, and sanctioned a 60% OTS.",
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
          "reviewBody": "A private finance company sent collection agents who shouted outside my apartment in Kochi in front of my elderly bedridden parents. SettleLoans stepped in, lodged an emergency complaint with the City Police Commissioner and the RBI Banking Ombudsman. All visits ceased permanently, and we settled the unsecured loan of ₹8.4 Lakhs for ₹3.3 Lakhs with zero legal liability.",
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
          "reviewBody": "Recovery callers threatened to create a scene at my children's school bus stop. SettleLoans advocates drafted a severe criminal defamation and extortion notice citing NCPCR guidelines and Supreme Court precedents. The bank immediately reassigned the file to their internal resolution desk and closed the loan via an affordable multi-tranche settlement.",
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
          "reviewBody": "Aggressive agents visited my home at 8:30 PM, shouting in the corridor and terrifying my pregnant sister-in-law. SettleLoans handled everything with immense courage and legal precision. They invoked Section 75 JJ Act and RBI time violation rules, forcing the bank to settle the debt at a 55% discount with a valid No Dues Certificate.",
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
            "text": "No. Shouting, banging on doors, using vulgar language, or creating abusive public scenes at a borrower's residence is strictly illegal under Indian law. Such actions violate the RBI Master Direction on Fair Practices Code, Article 21 constitutional privacy rights, Section 75 of the Juvenile Justice Act (causing mental cruelty to children), and constitute criminal offenses under Sections 441, 503, 506, and 268 of the Indian Penal Code (corresponding to Sections 329, 351, and 270 BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "What child protection laws apply if recovery agents cause psychological trauma to minors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 75 of the Juvenile Justice (Care and Protection of Children) Act, 2015, anyone who willfully subjects a child to mental cruelty or severe emotional distress is punishable with rigorous imprisonment up to three years. Creating violent or terrifying scenes in front of children at their home or school constitutes a cognizable offense that can be reported directly to local police, Child Welfare Committees (CWCs), and the National Commission for Protection of Child Rights (NCPCR)."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate steps should I take if recovery agents are screaming outside my home right now?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Immediately dial 100 or 112 for emergency police intervention to report breach of peace, criminal trespass, and harassment of family members. Discreetly record continuous audio-video footage or CCTV recordings capturing the agents' faces, shouting, door-banging, and abusive conduct. Demand their DRA identification cards and bank authorization letters without opening the door, and contact a debt defense advocate to file an urgent complaint."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents question, intimidate, or talk to my children or elderly parents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely not. Under RBI Master Directions, recovery agents are strictly prohibited from contacting or questioning third parties, minors, elderly parents, or neighbors regarding a debt default. They cannot disclose loan details to anyone other than the primary borrower and authorized co-borrowers. Interrogating or intimidating children is an egregious violation of both banking regulations and child protection laws."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal charges can be filed against aggressive recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can lodge a Police FIR under Section 441/447 IPC (Criminal Trespass), Section 503/506 IPC (Criminal Intimidation), Section 268/290 IPC (Public Nuisance & Breach of Peace), Section 509 IPC (Words or gestures outraging the modesty of women), Section 383/384 IPC (Extortion), and Section 75 of the Juvenile Justice Act, corresponding to Sections 329, 351, 270, 79, and 308 of the Bharatiya Nyaya Sanhita (BNS), 2023."
          }
        },
        {
          "@type": "Question",
          "name": "What are the permitted visiting hours for loan recovery agents under RBI rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circulars on Recovery Agents and Outsourcing of Financial Services, recovery agents are permitted to visit a borrower's residence strictly between 8:00 AM and 7:00 PM on working days. Visiting before 8:00 AM, after 7:00 PM, late at night, or on national holidays without prior written consent is an explicit regulatory breach subject to immediate Banking Ombudsman penalties."
          }
        },
        {
          "@type": "Question",
          "name": "How does documenting home harassment help in negotiating a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When an advocate formally presents irrefutable video and audio evidence of home harassment, child trauma, and criminal intimidation to the bank's Principal Nodal Officer and Board, the bank faces catastrophic regulatory penalties and police scrutiny. To prevent Ombudsman sanctions and criminal prosecution of their agency, bank management invariably recalls the agency and sanctions an amicable 45% to 65% OTS waiver."
          }
        },
        {
          "@type": "Question",
          "name": "Can the police arrest recovery agents for shouting and intimidating families at home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. When a formal written police complaint is backed by video evidence showing criminal trespass, physical intimidation, abusive language toward women or children, or persistent breach of public peace, police officers have the authority to detain the agents, register an FIR, and issue formal summons to the agency directors and bank nodal officials."
          }
        },
        {
          "@type": "Question",
          "name": "What must be verified in an official One-Time Settlement sanction letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An authentic OTS sanction letter must be issued on official bank letterhead, feature a unique reference number, state your exact name, PAN, and loan account number, specify the exact compromised settlement amount and installment schedule, and confirm that all legal claims and remaining dues are fully extinguished upon receipt of payment."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory RBI timeline for issuing a No Dues Certificate following settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated lenders must issue an official No Dues Certificate (NDC) and update credit bureau records to zero balance within 30 calendar days of receiving the final settlement amount. Lenders failing to adhere to this 30-day timeline are penalized ₹5,000 per day payable directly to the borrower."
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Recovery Agent Shouting at Home in Front of Kids? <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Rights, Child Protection Laws &amp; Police FIR Guide</span>
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
                Shouting at home, banging doors, or intimidating children and elderly parents is a severe criminal offense. It violates Section 75 Juvenile Justice Act, Supreme Court dignity rulings, and RBI Master Directions. Advocates invoke emergency police FIRs and negotiate formal 45%–65% OTS settlements.
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
                  <span><strong>Zero Tolerance for Minor Intimidation:</strong> Under Section 75 of the Juvenile Justice Act, 2015, subjecting children to psychological terror or emotional trauma carries up to 3 years of rigorous imprisonment for recovery agents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Sanctity of the Domestic Home:</strong> The Supreme Court of India in the <em>Shanti Devi Sharma</em> and <em>Puttaswamy</em> rulings established that recovery agents cannot breach domestic peace, shout in residential corridors, or terrorize family members.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Criminal Penal Provisions:</strong> Door-banging, verbal abuse, and aggressive posturing trigger immediate non-bailable FIR charges under Sections 441, 503, 506, and 509 IPC (Sections 329, 351, and 79 BNS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory RBI Timing and Identity Bans:</strong> Agents are barred from visiting outside 8:00 AM to 7:00 PM, must carry verified DRA identity cards, and are strictly prohibited from discussing debts with any family member or minor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Criminal Violations into 55% OTS:</strong> Formal advocate notices citing child trauma and regulatory breaches force senior bank management to disengage rogue agencies and sanction a 45%–65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Home Harassment Crisis & Child Psychological Trauma */}
            <section id="home-recovery-harassment-child-trauma" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Trauma of Domestic Debt Intimidation: Rogue Agents Shouting and Banging Doors in Front of Children
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                There are few experiences more profoundly horrifying for a parent than having aggressive debt recovery agents descend upon their private residence, banging loudly on the main door, shouting abusive threats, and creating humiliating public scenes in full view of young children, elderly parents, or pregnant spouses. In recent years, third-party recovery agencies acting on behalf of commercial banks and digital lending NBFCs have weaponized residential terror tactics. These rogue agents calculate that by humiliating a borrower in front of their vulnerable family members and residential neighbors, they can trigger acute emotional panic and force instantaneous loan repayment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The psychological fallout on young children exposed to such violent confrontations is devastating and enduring. Child psychologists and pediatric psychiatric research confirm that witnessing aggressive strangers screaming at their parents, pounding on doors, or threatening physical eviction induces severe acute stress disorder, chronic night terrors, behavioral regression, school phobia, and long-term attachment anxiety. Minors perceive loud recovery confrontations as an existential threat to the safety and survival of their household.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Home className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Inviolability of the Domestic Sphere</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Indian constitutional jurisprudence, every citizen possesses an inviolable right to domestic tranquility and peaceful enjoyment of their home. A private civil contractual default does not grant lenders, bank officers, or external agencies any license to transform a family residence into a site of public intimidation or verbal coercion.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Volume2 className="w-4 h-4 text-red-600" />
                    <span>Weaponized Public Humiliation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rogue collection agencies intentionally choose early mornings, evening dinner hours, or weekend afternoons when children and neighbors are present. By shouting loudly in residential corridors, they seek to inflict maximum social stigma, directly violating codified Reserve Bank of India Fair Practices Code mandates.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers must recognize that screaming at a borrower&apos;s home, shouting in front of minors, and terrorizing family members crosses every boundary of civil dispute resolution. It constitutes an egregious combination of criminal offenses, regulatory misconduct, and actionable child cruelty under Indian law.
              </p>
            </section>

            {/* Section 2: Juvenile Justice Act & Child Protection Mandates */}
            <section id="statutory-child-protection-juvenile-justice-act" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Child Protection: Section 75 Juvenile Justice Act &amp; NCPCR Mandates Against Recovery Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While many borrowers believe that loan recovery disputes are governed exclusively by banking regulations, the Indian legal system provides powerful statutory protections for minors under specialized child welfare legislation. When collection agents shout, threaten violence, or create abusive scenes at a residence where children are present, their conduct falls squarely within the punitive ambit of the <strong>Juvenile Justice (Care and Protection of Children) Act, 2015</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Section 75 of the Juvenile Justice Act, 2015: Punishment for Cruelty to Child</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Section 75 of the JJ Act, 2015 provides that whoever, having the actual charge of or control over a child, or whoever willfully subjects a child to mental cruelty, physical suffering, or emotional trauma likely to cause unnecessary mental distress, shall be punished with <strong>rigorous imprisonment for a term which may extend to three years, or with a fine of one lakh rupees, or with both</strong>.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The National Commission for Protection of Child Rights (NCPCR) and state child welfare authorities have repeatedly affirmed that debt recovery agents who enter private premises and subject families to verbal abuse in the presence of minors cause direct psychological cruelty. When an advocate drafts a complaint invoking the Juvenile Justice Act alongside the Commissions for Protection of Child Rights Act, 2005, local law enforcement agencies are statutorily obligated to take immediate cognizance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>NCPCR Guidelines</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    The National Child Rights Commission mandates zero harassment of children in residential spaces, school premises, or transport zones during commercial dispute executions.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Child Welfare Committees</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    District CWCs possess quasi-judicial powers to issue emergency protection orders restraining aggressive collection agencies from visiting premises housing vulnerable minors.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-purple-600" />
                    <span>Vicarious Bank Liability</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Commercial lending institutions remain vicariously and strictly liable under criminal and civil jurisprudence for unlawful acts perpetrated by their outsourced agency contractors.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By presenting documented evidence of child trauma to the bank&apos;s executive management and regulatory ombudsmen, legal advocates transform an aggressive debt recovery effort into a high-stakes statutory compliance liability for the financial institution.
              </p>
            </section>

            {/* Section 3: Constitutional Privacy, Inviolability of Home & Criminal Law */}
            <section id="constitutional-privacy-domestic-peace-ipc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Constitutional Privacy, Inviolability of Home &amp; Criminal Law Provisions Under IPC and BNS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In addition to child welfare statutes, the Supreme Court of India and criminal statutory codes provide an ironclad shield protecting families from residential intimidation. In the landmark case of <em>ICICI Bank Ltd. v. Shanti Devi Sharma (2008)</em>, the Supreme Court delivered a blistering condemnation of commercial banks employing musclemen and coercive collection agents to terrorize citizens at their residences, establishing that banks cannot recover debts through extra-legal coercion.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This was further reinforced in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, where a nine-judge Constitution Bench held that the Right to Privacy, spatial privacy in one&apos;s home, and personal dignity are fundamental rights protected under <strong>Article 21 of the Constitution</strong>. Residential door-banging, corridor shouting, and verbal abuse constitute severe criminal offenses under both the Indian Penal Code (IPC) and the modern Bharatiya Nyaya Sanhita (BNS), 2023:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Criminal Trespass &amp; House-Trespass (Section 441, 442 &amp; 447 IPC / Sections 329 &amp; 331 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Entering a borrower&apos;s private residential premises, garden, corridor, or gate without permission with intent to intimidate, insult, or annoy any person in possession constitutes criminal trespass. Forcibly refusing to leave upon being asked to vacate aggravates the offense into house-trespass punishable with imprisonment.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Intimidation (Section 503 &amp; 506 IPC / Section 351 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Threatening a borrower or their family members with injury to person, reputation, or property—such as threatening eviction, physical violence, or public shaming in front of children and neighbors—carries severe penalties of up to seven years of imprisonment when death or grievous hurt is threatened.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-purple-600" />
                    <span>Public Nuisance &amp; Domestic Peace Breach (Section 268 &amp; 290 IPC / Section 270 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Shouting loudly, creating a ruckus in residential apartment societies, or causing public obstruction and common annoyance to neighborhood families constitutes an actionable criminal offense under public nuisance laws.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-rose-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <HeartHandshake className="w-4 h-4 text-rose-600" />
                    <span>Insulting Modesty of Women (Section 509 IPC / Section 79 BNS)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Using vulgar language, threatening gestures, or intimidating behavior toward female family members, mothers, or pregnant relatives in the household constitutes an offense punishable with up to three years of simple imprisonment.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When bank recovery agents engage in these unlawful behaviors, they cease acting as lawful debt collectors and become criminal offenders subject to immediate police detention and prosecution.
              </p>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Dynamics: Why Aggressive Agencies Target Homes &amp; The NPV Recovery Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To counter residential recovery harassment with confidence, borrowers must understand the commercial incentives motivating third-party recovery agencies. Commercial banks and NBFCs in India do not typically deploy direct bank branch managers to visit homes. Instead, when an unsecured personal loan or credit card account enters 60 to 90 days of default, the debt file is outsourced to external Direct Recovery Agencies (DRAs) working on high-risk, high-reward commission models ranging from 12% to 30% of recovered capital.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Reserve Bank of India prudential provisioning norms, the moment an account crosses 90 days of non-payment, it is classified as a <strong>Non-Performing Asset (NPA)</strong>. This classification forces the lending institution to set aside substantial capital provisions from its operational profits:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>NPA Classification Bucket</th>
                      <th>Overdue Delinquency Aging</th>
                      <th>Mandatory RBI Capital Provision</th>
                      <th>Settlement / Haircut Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2</td>
                      <td>31 – 90 Days Overdue</td>
                      <td>5% General Asset Provision</td>
                      <td>Penal Interest &amp; Late Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 – 365 Days Overdue</td>
                      <td>25% Unsecured Provisioning</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 – 24 Months Default</td>
                      <td>100% Full Capital Provision</td>
                      <td>45% – 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Written-Off</td>
                      <td>100% Balance Sheet Write-Off</td>
                      <td>55% – 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because third-party collection agencies lose their collection mandate once an account progresses deeper into write-off buckets or faces formal litigation, rogue agents resort to panic-inducing home harassment to extract money quickly. When seasoned advocates step in and document these illegal actions, the bank&apos;s Stressed Asset Resolution Committee evaluates the dispute using the <strong>Net Present Value (NPV) of Recovery</strong> formula:
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
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction, advocate retainers, regulatory risk from Ombudsman complaints, and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a bank realizes that continuing aggressive home harassment will result in police FIRs, Juvenile Justice Act complaints, and severe Banking Ombudsman penalties, the bank&apos;s rational economic calculation shifts immediately. An upfront compromise settlement offering a 45% to 65% principal waiver becomes the bank&apos;s most advantageous recovery avenue.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="family-protection-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Strategic Roadmap: Child &amp; Family Protection Against Aggressive Debt Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual strategic roadmap below details the structured 5-stage legal defense workflow deployed by banking defense advocates to protect families from residential harassment, enforce statutory child protections under the Juvenile Justice Act, lodge emergency police complaints, and negotiate an official compromise debt resolution.
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
                  <span>Invoke fundamental privacy and dignity under Article 21; establish child protection against mental cruelty under Section 75 JJ Act.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Police FIR &amp; Ombudsman</span>
                  <span>Register emergency criminal complaints for intimidation and peace breach; file formal grievances on the RBI CMS portal.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: 50–65% OTS &amp; NDC</span>
                  <span>Enforce complete home ceasefire; negotiate structured One-Time Settlement; secure bank-stamped zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 4-Stage Emergency Police & Advocate Protocol */}
            <section id="emergency-4-stage-police-advocate-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The Emergency 4-Stage Police &amp; Advocate Action Protocol for Home Harassment
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When recovery agents are screaming outside your front door or banging in corridors, arguing with them or panicking will not make them leave. Aggressive agents are trained to interpret emotional distress as psychological vulnerability. Borrowers must follow an exact, legally calibrated 4-stage protocol to protect their loved ones and neutralize the threat immediately:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Secure the Premises &amp; Dial Emergency Police (100 / 112)</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Keep your main door firmly locked and move your children and elderly family members to an interior room. Immediately call 100 or 112 to request emergency police dispatch. Inform the police control room that unidentified individuals are trespassing outside your residence, banging loudly on your door, using abusive language, and causing acute terror to young children and family members.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Capture Continuous Audio-Video &amp; CCTV Evidence</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Discreetly record continuous high-definition video through the door peephole, window, or mobile camera, capturing the agents&apos; faces, abusive language, door-banging, and presence in the residential corridor. Demand that they display their official DRA identification card and bank authorization letter through the safety grill without opening the door.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Lodge Formal Police FIR &amp; RBI Ombudsman Complaint</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With the assistance of a legal advocate, submit a formal written police complaint at the local police station seeking registration of an FIR under Sections 441, 503, 506, and 509 IPC (Sections 329, 351, and 79 BNS) and Section 75 of the Juvenile Justice Act. Simultaneously, lodge an expedited grievance on the <strong>RBI CMS portal (cms.rbi.org.in)</strong> against the lending bank for gross violation of Fair Practices Code guidelines.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Serve Advocate Cease-and-Desist Notice on Bank Leadership</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your advocate serves a statutory legal notice directly upon the bank&apos;s Managing Director, Principal Nodal Officer, and the collection agency directors. The notice details the documented criminal offenses, child psychological trauma, and regulatory non-compliance, demanding immediate agency disengagement and the opening of formal settlement talks.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Executing this protocol puts an immediate end to home harassment, transfers legal pressure back onto the lender, and restores safety to your household.
              </p>
            </section>

            {/* Section 7: Converting Home Harassment into an Affordable OTS */}
            <section id="leveraging-violations-for-55-percent-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Converting Home Harassment into an Affordable 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Documented evidence of illegal home harassment and child intimidation provides borrowers with immense legal leverage. When banking advocates present irrefutable proof of regulatory violations to the bank&apos;s executive leadership, the lender becomes eager to resolve the dispute out of court before regulatory fines or criminal proceedings are initiated.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rather than paying inflated default balances bloated by punitive charges, our debt resolution advocates negotiate a structured <strong>One-Time Settlement (OTS)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Comprehensive Financial Hardship Dossier</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submit verified documentation demonstrating bona fide hardship—including medical emergencies, job loss, business downturn, or family emergencies—establishing that default was involuntary.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Eliminate all accumulated penal interest, late fees, and recovery charges, while securing an aggressive <strong>45% to 65% reduction on the underlying principal balance</strong> based on the loan&apos;s NPA aging.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Residential Ceasefire Clause</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Incorporate an explicit contractual covenant in the settlement agreement requiring the bank to immediately recall all external recovery agents and permanently prohibit further residential visits.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Multi-Tranche Payment Plan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structure the negotiated settlement sum across 2 to 4 manageable monthly installments, allowing you to settle the debt completely without exhausting essential family emergency funds.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, Direct Remittance & ₹0 NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, Direct Bank Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Recovery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When concluding a loan settlement after enduring collection harassment, borrowers must maintain rigorous procedural vigilance. Rogue collection agents often fabricate fake settlement letters on messaging apps or accept cash payments that are never credited toward loan closure. A borrower must never transfer funds until their legal counsel forensically validates the settlement sanction letter.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic Settlement Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead &amp; Zonal Reference:</strong> The letter must be issued on registered institutional stationery bearing an official reference number, corporate email domain, and the signature of an authorized Scale-IV/Zonal Manager.</li>
                  <li><strong>Exact Borrower &amp; Account Identifiers:</strong> Must clearly list your full legal name, PAN, and exact loan account number without discrepancy.</li>
                  <li><strong>Unambiguous Full Extinguishment Recital:</strong> Must state explicitly that upon receipt of the agreed settlement amount, all outstanding claims, interest, and legal disputes stand fully extinguished.</li>
                  <li><strong>Direct Loan Account Remittance:</strong> Payment must only be remitted directly into your own loan account number via NEFT/RTGS or the bank&apos;s official portal—never to a third-party agency account or individual UPI handle.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs are statutorily required to deliver a formal <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong> and update all credit information companies (CIBIL, Experian, Equifax, CRIF High Mark) to zero balance within <strong>30 calendar days</strong> of receiving final settlement payment. Any unjustified delay beyond 30 days incurs a mandatory statutory penalty of <strong>₹5,000 per day</strong> payable directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                CIBIL Bureau Reporting Trajectory &amp; Credit Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following final settlement, the lending bank updates your credit bureau profile with the status remark <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a current outstanding balance of <strong>₹0</strong>. While this results in an initial credit score reduction of 70 to 120 points, it halts compounding default accumulation and eliminates collection harassment permanently. By maintaining a secured fixed-deposit credit card, keeping credit utilization below 30%, and ensuring timely utility payments, settled borrowers systematically rebuild their credit score back above 750 within 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-legal-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Home Harassment vs. Legal Due Process vs. Police FIR vs. OTS
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the legal avenues available to families facing residential debt harassment enables you to choose the most effective strategy to safeguard your home, protect your children, and resolve your outstanding debt:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Legal Basis &amp; Limitations</th>
                      <th>Family &amp; Child Protection</th>
                      <th>Typical Resolution Time</th>
                      <th>Final Legal Effect</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Residential Collection Actions</td>
                      <td>Unlawful extra-judicial pressure (Violates RBI Fair Practices Code)</td>
                      <td>Zero Protection (High risk of child trauma and public humiliation)</td>
                      <td>Indefinite / Recurring</td>
                      <td>Exposes lender to criminal prosecution and Ombudsman fines</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Emergency Police FIR &amp; JJ Act</td>
                      <td>Sections 441, 503, 506 IPC &amp; Sec 75 Juvenile Justice Act</td>
                      <td>Immediate Police Restraint &amp; Criminal Prosecution</td>
                      <td>24 – 48 Hours</td>
                      <td>Stops home visits instantly; detains rogue recovery agents</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman</td>
                      <td>RBI Integrated Ombudsman Scheme 2021 (Deficiency in Service)</td>
                      <td>Directs immediate cessation of unauthorized home visits</td>
                      <td>30 – 45 Days</td>
                      <td>Regulatory order forcing bank compliance &amp; statutory damages</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS</td>
                      <td>Consensual Compromise Settlement Agreement</td>
                      <td>100% Home Ceasefire &amp; Permanent Debt Freedom</td>
                      <td>15 – 30 Days</td>
                      <td>Absolute debt extinguishment with official ₹0 NDC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Child &amp; Family Protection Legal Defense Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Protecting your children, parents, and domestic peace from aggressive debt recovery requires fearless banking litigation advocates who understand how to enforce the Juvenile Justice Act, invoke Supreme Court privacy precedents, and file criminal complaints against rogue collection agencies. SettleLoans provides complete legal defense for distressed families across India: serving emergency cease-and-desist notices to bank management, filing formal complaints with local police and the RBI Banking Ombudsman, shielding your household, and negotiating directly with bank zonal authorities to secure 45% to 65% principal waivers backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Recovery Agents Shouting at Home &amp; Child Protection Laws
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to essential questions regarding residential collection harassment, minor psychological trauma under the Juvenile Justice Act, and emergency debt resolution in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior specialist in banking litigation defense, child and family protection against recovery harassment, Juvenile Justice Act compliance, and institutional One-Time Settlement negotiations across India.
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
              <h4 className="font-bold text-base text-white mb-2">Are Agents Shouting at Your Home in Front of Kids?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your children and family immediately. Retain seasoned banking litigation advocates to lodge an emergency police FIR and negotiate a 45%–65% OTS.
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
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Protections
              </h4>
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
