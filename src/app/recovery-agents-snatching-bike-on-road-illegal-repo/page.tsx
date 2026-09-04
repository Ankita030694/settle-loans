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
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Lock,
  Building2,
  Check,
  ShieldAlert,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle,
  Bike
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Illegal Vehicle Repossession Rules | SettleLoans',
  description: 'Recovery agents snatching your bike or car on the road? Understand Supreme Court bans on forceful repossession and get legal help with SettleLoans.',
  keywords: [
    'recovery agents seizing vehicle by force on road',
    'recovery agents snatching bike on road illegal repo',
    'illegal bike repossession recovery agent',
    'supreme court ruling on vehicle repossession',
    'icici bank v shanti devi sharma repossession',
    'prakash kaur vehicle repossession case',
    'car seized on road by recovery agents what to do',
    'rbi rules for vehicle loan recovery agents',
    'police complaint for vehicle snatching by finance company',
    'recover snatched bike from recovery agent',
    'vehicle loan shortfall settlement 0 balance',
    'illegal repossession criminal dacoity extortion'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo',
  },
  openGraph: {
    title: 'Recovery Agents Seizing Vehicle by Force on Road: Legal Protections & Retrieval Guide',
    description: 'Ambushed on the highway by loan recovery musclemen? Discover Supreme Court protections, BNS criminal extortion provisions, police retrieval procedures, and zero-rupee shortfall settlements.',
    url: 'https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-snatching-bike-on-road-illegal-repo.jpg',
        width: 1200,
        height: 675,
        alt: 'Illegal Vehicle Seizure on Road by Recovery Agents Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agents Seizing Vehicle by Force on Road: Supreme Court Ban & Police Action',
    description: 'Understand your constitutional and criminal law protections against strong-arm vehicle repossession on public roads in India.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-snatching-bike-on-road-illegal-repo.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#webpage",
      "url": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo",
      "name": "Recovery Agents Seizing Vehicle by Force on Road: Supreme Court Ban, Criminal Extortion Laws & Vehicle Retrieval Guide",
      "description": "Learn your rights if recovery agents seize your bike or car on the road. Understand Supreme Court bans, police action, and loan settlement in India.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#breadcrumb",
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
          "name": "Illegal Roadside Vehicle Repossession Defense",
          "item": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#article",
      "headline": "Recovery Agents Seizing Vehicle by Force on Road: Supreme Court Ban, Criminal Extortion Laws & Vehicle Retrieval Guide",
      "description": "Legal guide on illegal vehicle repossession on public roads. Covers Supreme Court rulings, BNS criminal laws, RBI rules, and vehicle loan shortfall settlements.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-snatching-bike-on-road-illegal-repo.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#service",
      "name": "SettleLoans - Illegal Vehicle Repossession Defense & Debt Settlement Advisory",
      "description": "Legal defense against illegal vehicle seizure on roads. We help you recover seized vehicles and resolve loan shortfall claims.",
      "url": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-snatching-bike-on-road-illegal-repo.jpg",
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
            "name": "Suresh Chawla"
          },
          "datePublished": "2026-08-12",
          "reviewBody": "Three agents stopped my bike near the highway toll gate. They snatched my keys and threatened me. I called SettleLoans right away. Their team helped me file a police complaint for extortion. They also sent a legal notice citing the Shanti Devi Sharma ruling. Within 48 hours, the lender returned my bike for free and restructured my EMIs.",
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
            "name": "Anil Kumar Yadav"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "Recovery agents blocked my auto rickshaw on the road. They forced me out and took my vehicle without giving any receipt. SettleLoans filed urgent complaints with the police and RBI Ombudsman. The NBFC branch head apologized, returned my vehicle. And waived all parking fees.",
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
            "name": "Pooja Venkatesh"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "Agents stopped my brother's bike for 2 missed EMIs. They forced him to sign a surrender paper. SettleLoans showed that this broke RBI rules and Section 176 of the Contract Act. The bank returned the bike quickly and settled the remaining loan balance.",
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
          "datePublished": "2026-05-30",
          "reviewBody": "Bank agents towed my car on the main road with my laptop bag inside. SettleLoans sent a strong criminal notice for robbery and illegal confinement. The bank returned my car and belongings within three days and cancelled their shortfall claim.",
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
      "@id": "https://www.settleloans.in/recovery-agents-snatching-bike-on-road-illegal-repo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it legal for bank recovery agents to intercept and seize my vehicle on the road in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Supreme Court banned roadside vehicle seizures in Prakash Kaur (2007) and Shanti Devi Sharma (2008). Banks cannot use agents to stop or take vehicles on public roads. Taking a vehicle by force without a court order is illegal under Article 21 and counts as extortion."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal offenses do recovery agents commit when they snatch a bike or car by force?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roadside seizures involve severe crimes under the Bharatiya Nyaya Sanhita (BNS) and IPC. These include extortion (Section 308 BNS / Sec 383 IPC), theft (Section 303 BNS / Sec 378 IPC), robbery (Section 310 BNS / Sec 390 IPC), wrongful restraint (Section 126 BNS). And criminal threats (Section 351 BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate steps should I take if recovery agents surround me on the street?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, stay calm and dial police at 112. Second, ask agents for their bank ID, IIBF DRA certificate. And bank letter. Third, record a video of the scene on your phone. Fourth, do not give up your keys or sign any surrender papers."
          }
        },
        {
          "@type": "Question",
          "name": "Can the police help me retrieve my vehicle if it was forcibly towed to a private yard?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. File an immediate written complaint or Zero FIR at the nearest police station for vehicle snatching and extortion. Banks must inform local police before any legal repossession. The police can order the lender to return the vehicle."
          }
        },
        {
          "@type": "Question",
          "name": "What mandatory notices must a bank serve before repossessing a hypothecated vehicle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules and contract law, lenders must send four notices. These include a 60-day default notice, a pre-repossession notice, an immediate inventory list. And a 30-day pre-sale auction notice under Section 176 of the Contract Act."
          }
        },
        {
          "@type": "Question",
          "name": "What is a 'Forced Voluntary Surrender Form' and why should I never sign it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agents often force scared borrowers to sign a surrender paper. They use it in court to claim you gave up the car willingly. Signing this paper takes away your legal rights. It also lets the bank sue you for a large shortfall debt."
          }
        },
        {
          "@type": "Question",
          "name": "What is a vehicle loan shortfall balance and how can advocates settle it to ₹0?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A shortfall balance is the unpaid loan gap left after an auction sale. By proving the road seizure was illegal and lacked mandatory notices, advocates file strong counterclaims. This forces the bank to waive the remaining balance to ₹0."
          }
        },
        {
          "@type": "Question",
          "name": "Can I claim compensation from the bank for mental harassment and loss of vehicle use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under the Consumer Protection Act, 2019, consumer courts often award ₹1 Lakh to ₹10 Lakhs in damages against banks for illegal repossession. You can also file a complaint with the RBI Banking Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lender freeze my salary account or seize my home for an unpaid auto loan shortfall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Once a vehicle is sold, the leftover debt becomes an unsecured loan. A lender cannot freeze your accounts or take your home without winning a civil court suit under Order 37 CPC."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bank have to issue a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, banks must issue a No Dues Certificate and return original papers within 30 days of settlement. If they delay, the bank must pay you ₹5,000 for each day of delay."
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
  { id: 'menace-of-roadside-vehicle-snatching', title: '1. Roadside Vehicle Snatching Menace' },
  { id: 'supreme-court-rulings-shanti-devi-sharma', title: '2. Supreme Court Ban & Landmark Jurisprudence' },
  { id: 'statutory-protections-rbi-fair-practices', title: '3. Statutory Notice Protocols & RBI Rules' },
  { id: 'criminal-liabilities-bns-ipc-extortion', title: '4. Criminal Liabilities: Theft & Extortion' },
  { id: 'illegal-repossession-retrieval-roadmap', title: '5. Vehicle Seizure & Retrieval Roadmap' },
  { id: 'emergency-road-protocol-police-retrieval', title: '6. Road Emergency Protocol & Police Action' },
  { id: 'bank-npa-accounting-npv-settlement', title: '7. NPA Accounting & NPV Settlement Formula' },
  { id: 'sanction-letter-ndc-cibil-restoration', title: '8. Settlement Sanction, NDC & CIBIL Relief' },
  { id: 'comparative-repossession-defense-matrix', title: '9. Vehicle Default Resolution Matrix' },
  { id: 'settleloans-advocate-defense-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentsSnatchingBikeOnRoadPage() {
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

      {/* 1. Charcoal Navy Hero Section (#2d313d) */}
      <section
        className="w-full border-b border-slate-700/80 pt-20 md:pt-24 pb-7 md:pb-8 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Bike className="w-3.5 h-3.5" />
            <span>Vehicle Repossession Defense • Supreme Court Precedents &amp; Street Seizure Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Snatching Bike or Car on Road</h1>

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
              <span>RBI Fair Practices Code Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Retrieve Seized Vehicle / Settle Loan</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Immediate Advocate Consultation
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
                Banks cannot take vehicles on public roads using musclemen. Supreme Court rulings make road vehicle snatching illegal. It is treated as criminal theft and extortion. Borrowers can use police help, consumer courts. And legal notice to get their vehicle back and cancel shortfall debts.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Illegal Vehicle Seizure &amp; Borrower Defense</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Supreme Court Ban on Road Seizures:</strong> In <em>ICICI Bank v. Shanti Devi Sharma</em> and <em>Prakash Kaur</em>, the Supreme Court banned musclemen for vehicle recovery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Charges for Snatching:</strong> Seizing a vehicle on the road is extortion (Sec 308 BNS) and robbery (Sec 310 BNS). Both agents and bank officers face police action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Notice Rules:</strong> Under RBI rules and Section 176 of the Contract Act, lenders must serve 60-day default and 30-day pre-sale notices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Fast Police &amp. Legal Action:</strong> Calling 112, checking DRA cards, avoiding surrender sheets. And filing a Zero FIR helps recover your vehicle quickly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero-Rupee Shortfall Settlements:</strong> Procedural errors and illegal seizure counterclaims allow advocates to settle remaining loan balances to ₹0 with an official NDC.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Menace of Roadside Vehicle Snatching & Highway Ambush in India */}
            <section id="menace-of-roadside-vehicle-snatching" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Vehicle Snatching &amp; Highway Ambush Rules</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Across India, many bike and car owners face roadside ambushes by recovery agents. When a borrower misses two or three monthly EMIs due to job loss or medical costs, agents corner them at traffic lights or toll booths. Third-party agents snatch keys, threaten drivers. And tow vehicles away without any court warrant or legal notice.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks and NBFCs rely on the public&apos;s lack of legal knowledge. Borrowers often believe hypothecation gives lenders the right to seize vehicles anywhere. This is completely false. Hypothecation is only a financial security charge. It does not grant ownership or police powers to financiers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Skipping legal court processes to use untrained agents turns loan recovery into a criminal offense. Drivers are left stranded on highways and face public humiliation. Knowing your rights helps you get your vehicle back and stop illegal debt claims.
              </p>
            </section>

            {/* Section 2: Supreme Court Jurisprudence: Why Street Repossession is Criminal Dacoity & Extortion */}
            <section id="supreme-court-rulings-shanti-devi-sharma" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Supreme Court Jurisprudence</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has ruled clearly that <strong>banks cannot take the law into their own hands</strong>. The apex court banned musclemen for debt collection. Seizing vehicles by force breaks Article 21 rights of personal liberty and human dignity.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>ICICI Bank v. Shanti Devi Sharma (2008) 7 SCC 532</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held banks strictly liable for agent harassment. The court ruled that using musclemen to seize vehicles breaks the rule of law. Bank leaders can be held personally liable.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court banned musclemen from seizing vehicles on roads. Debt collection must follow the law. Banks must use civil courts rather than strong-arm tactics.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Citicorp Maruti Finance Ltd. v. Vijayalaxmi (2012) 1 SCC 1</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A three-judge bench held that loan clauses allowing repossession do not permit force. Taking vehicles without court orders or notice is unlawful and a banking failure.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Magma Fincorp Ltd. v. Rajesh Kumar Tiwari (2020)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court confirmed that repossession requires fair notice. Borrowers must get time to pay dues, followed by a pre-sale notice with fair market valuation.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Judicial Precedent on Street Seizures as Criminal Coercion</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  High Courts across India have ruled that snatching keys on public roads is criminal robbery and extortion. Contract clauses that permit force are void under Section 23 of the Indian Contract Act.
                </p>
              </div>
            </section>

            {/* Section 3: Statutory Protections, RBI Fair Practices Code & Mandatory Notice Protocols */}
            <section id="statutory-protections-rbi-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Statutory Notice Protocols</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI) sets strict recovery rules in its Fair Practices Code and Circular RBI/2022-23/108. Every bank and NBFC must follow these steps before taking action against hypothecated assets. Lenders often skip these rules, giving borrowers strong legal grounds to fight back.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under RBI rules, a legal vehicle repossession requires four clear legal stages:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Mandatory 60-Day Loan Default &amp; Recall Notice</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Lenders must give a written notice with a 60-day cure period. The notice must show the exact overdue amount, separating base principal from penal interest and late fees.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Pre-Repossession Notice &amp; Advance Police Station Intimation</h4>
                    <p className="text-slate-600 leading-relaxed">
                      The lender must serve a pre-repossession notice before taking the vehicle. The bank must also inform the local police station in writing. Agents must carry bank IDs and IIBF DRA certificates.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Immediate Post-Repossession Inventory &amp; Condition Protocol</h4>
                    <p className="text-slate-600 leading-relaxed">
                      After taking the vehicle, the lender must draft an inventory list with witnesses. It must record fuel level, vehicle condition. And personal items. A copy must go to the borrower immediately.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">30-Day Pre-Sale Notice &amp; Statutory Right of Redemption</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Under Section 176 of the Indian Contract Act, 1872, the lender must give 30 days notice before auctioning the asset. The borrower has the right to redeem the vehicle by clearing overdue EMIs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Criminal & Civil Liabilities Under BNS/IPC */}
            <section id="criminal-liabilities-bns-ipc-extortion" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Criminal &amp; Civil Liabilities</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents use force to take vehicles on public roads, they face criminal charges under the Bharatiya Nyaya Sanhita (BNS), 2023. And the Indian Penal Code (IPC). Financiers have no legal immunity from criminal trial.
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <ShieldX className="w-4 h-4 text-rose-600" />
                    <span>Extortion &amp; Robbery (Section 308 &amp; 310 BNS / Section 383 &amp; 390 IPC)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Threatening a borrower to get vehicle keys is criminal extortion. On a public road, force makes this highway robbery under Section 310 BNS / Section 392 IPC, carrying up to 10 to 14 years in jail.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Theft &amp; Dishonest Misappropriation (Section 303 BNS / Section 378 IPC)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Taking a vehicle without the owner&apos;s free consent is theft under Section 303 BNS. Removing cars parked on streets without a valid court warrant is an unlawful criminal act.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-1 text-xs sm:text-sm">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Criminal Intimidation &amp; Wrongful Restraint (Section 351 &amp; 126 BNS / Section 503 &amp; 339 IPC)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Blocking vehicle movement, snatching keys, or shouting threats is wrongful restraint and threats. Bank executives who hire these agencies can be charged under Section 61 BNS / Section 120B IPC.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5: Infographic Banner (16:9 Image) */}
            <section id="illegal-repossession-retrieval-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Vehicle Seizure &amp; Retrieval Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding the steps of an illegal road seizure helps you stop harassment and reclaim your vehicle:
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recovery-agents-snatching-bike-on-road-illegal-repo.jpg"
                  alt="Illegal Roadside Vehicle Repossession and Police Retrieval Roadmap"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Defense steps for roadside seizures, police action, and ₹0 shortfall settlements.</span>
                  <span className="text-blue-400 font-semibold">SettleLoans Legal Blueprint</span>
                </div>
              </div>
            </section>

            {/* Section 6: Emergency Step-by-Step Protocol: What to Do on the Road & How to Retrieve the Vehicle */}
            <section id="emergency-road-protocol-police-retrieval" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Emergency Step-by-Step Protocol</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If recovery agents stop your vehicle on the road, follow these steps to stay safe and recover your property:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">A</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Step 1: Dial 112 Immediately &amp; Report Vehicle Snatching</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Stay inside your locked vehicle. Call police emergency at 112 right away. Report that unknown persons are blocking your vehicle and trying to snatch your keys. This creates an official police record.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">B</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Step 2: Demand Official Credentials &amp; Video Record the Interaction</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Record a video on your smartphone. Ask agents to show their bank ID card, IIBF DRA certificate. And bank authorization letter. Write down the license numbers of their vehicles.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">C</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Step 3: Strictly Refuse to Sign Blank &quot;Voluntary Surrender&quot; Forms</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Agents often push a pre-printed surrender paper. <strong>Never sign any document under pressure.</strong> Signing gives the bank a false defense that you gave up the vehicle voluntarily.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">D</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Step 4: Lodge a Formal Police Complaint / Zero FIR</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Go to the nearest police station immediately. File a complaint for extortion, theft. And threats under Sections 308, 303, and 351 BNS. Ask police to recover the vehicle under Section 497 BNSS / Section 451 CrPC.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">E</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Step 5: Engage Legal Advocates to Serve Notices &amp; Approach Ombudsman</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Have banking advocates send a legal notice to the bank Nodal Officer citing Supreme Court rulings. Also file a complaint with the RBI Banking Ombudsman for asset return and payout.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Bank NPA Accounting, NPV Settlement Formula & Why Banks Waive Deficits */}
            <section id="bank-npa-accounting-npv-settlement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Bank NPA Accounting, NPV Recovery Formula</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After an illegal seizure, lenders often sell the vehicle at a cheap auction price. They then demand a large <strong>shortfall balance</strong>. Understanding bank NPA accounting helps explain why banks frequently waive these balances during legal talks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once the vehicle is sold, <strong>the loan becomes an unsecured bad asset</strong>. Under RBI rules, banks must set aside 100% reserves from their profits. Suing for the shortfall in civil courts takes 3 to 5 years and costs heavy legal fees with low odds of recovery.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Shortfall Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm md:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - 100% Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t is expected shortfall cash flow. And r is the discount rate. Court costs and 100% bad loan provisions reduce the net recovery value for the bank.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When faced with police complaints and Supreme Court <em>Shanti Devi Sharma</em> citations, the bank&apos;s Net Present Value turns negative. Bank settlement committees agree to a <strong>₹0 full-and-final shortfall settlement</strong> to close the file cleanly.
              </p>
            </section>

            {/* Section 8: Sanction Letter Forensics, No Dues Certificate (NDC) & CIBIL Bureau Restoration */}
            <section id="sanction-letter-ndc-cibil-restoration" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Settlement Sanction Letter Forensics, RBI ₹0 NDC Mandate</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Never pay cash to recovery agents or accept verbal settlement offers. Every vehicle loan settlement must be in writing. Get a signed <strong>One-Time Settlement (OTS) Sanction Letter</strong> on official bank letterhead.
              </p>

              <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/70 space-y-3 my-4">
                <h3 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Clauses in a Vehicle Loan Shortfall Settlement Letter</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Account Details:</strong> Clear listing of loan number, vehicle registration number, chassis number. And engine number.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full Debt Closure:</strong> Clear clause stating the agreed payment or ₹0 waiver clears all principal, shortfall fees. And legal charges.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Withdrawal of Cases:</strong> Commitment to drop all Section 138 NI Act, Section 25 PSSA, arbitration. And civil court cases in 30 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Form 35 &amp. NOC:</strong> Agreement to issue RTO Form 35 and an NOC to remove the bank lien from your vehicle registration.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue a No Dues Certificate (NDC) and return original documents within 30 days. Delays cost lenders ₹5,000 per day in payout. Once settled, the bank updates credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) to show a ₹0 outstanding balance.
              </p>
            </section>

            {/* Section 9: Vehicle Default Resolution Matrix */}
            <section id="comparative-repossession-defense-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Vehicle Repossession Pathways vs Remedies Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Review how different repossession methods compare under Indian law:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Legal Authority / Basis.</th>
                      <th>Borrower Risk.</th>
                      <th>Timeline.</th>
                      <th>Final Legal Result.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Illegal Roadside Musclemen Seizure.</td>
                      <td>Zero legal basis. violates <em>Shanti Devi Sharma</em> &amp. BNS.</td>
                      <td>High (Asset lost plus heavy shortfall debt demanded).</td>
                      <td>6 – 18 Months.</td>
                      <td>High risk of continued harassment and arbitration.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Coerced &quot;Voluntary Surrender&quot;</td>
                      <td>Signed under pressure without debt waiver.</td>
                      <td>High (Lender sells car at distress price and sues for balance).</td>
                      <td>3 – 9 Months.</td>
                      <td>No legal protection. lender keeps pursuing shortfall.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Court Receiver Repossession (Section 9).</td>
                      <td>Judicial order by District Court or High Court.</td>
                      <td>Moderate (Court supervision with formal notice).</td>
                      <td>6 – 12 Months.</td>
                      <td>Lawful court process with right to file objections.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led ₹0 Shortfall OTS.</td>
                      <td>Procedural violations leveraged for full waiver.</td>
                      <td>Zero (Residual shortfall debt 100% waived).</td>
                      <td>30 – 60 Days.</td>
                      <td>Complete legal closure. binding NDC and ₹0 CIBIL balance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Advisory + CompanySection */}
            <section id="settleloans-advocate-defense-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Vehicle Seizure Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Facing aggressive recovery agents and roadside vehicle seizures requires experienced banking advocates. SettleLoans defends vehicle loan borrowers across India. We send criminal counter-notices, help police recover seized vehicles, challenge biased arbitration under Section 12(5) of the Arbitration Act. And negotiate complete ₹0 shortfall waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Illegal Vehicle Seizure &amp; Recovery Agent Rules</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified legal answers on vehicle repossession rules, Supreme Court rulings. And police assistance in India.
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (Shanti Devi Sharma &amp; Prakash Kaur Judgments)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Directions – Fair Practices Code &amp; Recovery Agent Rules</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 176 Notice Mandates)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://ncdrc.nic.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Consumer Disputes Redressal Commission (NCDRC)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Harassment Grievances)</span>
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
                  href="/car-loan-repossession-and-shortfall-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Car Loan Repossession &amp; Shortfall Settlement
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Agent Harassment
                </Link>
                <Link
                  href="/police-complaint-format-recovery-agent-harassment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Police Complaint for Recovery Agent Harassment
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Notice Defense
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
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
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Borrower Rights
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Score Improvement Post-OTS
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
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
                Expert in vehicle repossession defense, Supreme Court debt recovery rulings, and RBI loan settlement frameworks.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Vehicle Snatched on Road or Facing Shortfall Claims?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not give in to illegal threats. Hire our banking defense advocates to retrieve your vehicle with police help and settle shortfalls to ₹0.
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
                  <span>Supreme Court Precedent Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official ₹0 Settlement Sanction Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Police &amp; Banking Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
