import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Award,
  ExternalLink,
  Scale,
  FileCheck,
  CheckCircle2,
  HelpCircle,
  Calculator,
  BookOpen,
  UserCheck,
  Calendar,
  PhoneCall,
  ChevronDown,
  ArrowRight,
  Landmark,
  FileSpreadsheet,
  Clock,
  ShieldAlert,
  AlertTriangle,
  FileText,
  Gavel,
  HandCoins,
  Building2,
  FileCheck2,
  Percent
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'One Time Settlement OTS Kaise Le: Bank NPA Strategy & ₹0 NDC Guide',
  description: 'One Time Settlement OTS kaise le? Learn how to approach bank NPA Stressed Asset management, draft an OTS proposal, secure 40-70% waivers, and get a ₹0 NDC.',
  keywords: [
    'one time settlement ots kaise le',
    'one time settlement ots kaise kare',
    'bank ots scheme apply process india',
    'ots proposal letter format banking npa',
    'bank stressed asset management vertical ots',
    'rbi compromise settlement master directions',
    'rbi prudential framework for resolution of stressed assets',
    'how to get zero balance no dues certificate ndc',
    'cibil score settled status to closed removal',
    'bank one time settlement formula npv',
    'personal loan credit card ots settlement discount'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/one-time-settlement-ots-kaise-kare',
  },
  openGraph: {
    title: 'One Time Settlement (OTS) Kaise Le: Complete Bank NPA Negotiation & NDC Roadmap',
    description: 'Struggling with unpaid personal loans or credit cards? Discover how to bypass third-party recovery agents, approach the bank Stressed Asset Department, negotiate OTS waivers, and secure an authentic No Dues Certificate.',
    url: 'https://www.settleloans.in/one-time-settlement-ots-kaise-kare',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/one-time-settlement-ots-kaise-kare.jpg',
        width: 1200,
        height: 675,
        alt: 'One Time Settlement OTS Kaise Le Bank Negotiation Blueprint Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One Time Settlement OTS Kaise Le: Bank NPA Negotiation & ₹0 NDC Guide',
    description: 'Step-by-step masterclass: approach bank NPA branches, leverage RBI Compromise Settlement circulars, calculate NPV recovery, and obtain ₹0 No Dues Certificate.',
    images: ['https://www.settleloans.in/images/infographics/one-time-settlement-ots-kaise-kare.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#webpage",
      "url": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare",
      "name": "One Time Settlement OTS Kaise Le: Bank NPA Negotiation, Proposal Strategy & ₹0 NDC Guide",
      "description": "Comprehensive legal and financial manual explaining how Indian borrowers can negotiate a One-Time Settlement (OTS) with bank Stressed Asset departments under RBI Master Directions.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#breadcrumb"
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
      "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#breadcrumb",
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
          "name": "One Time Settlement OTS Kaise Le",
          "item": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#article",
      "headline": "One Time Settlement OTS Kaise Le: Bank NPA Negotiation, Proposal Strategy & ₹0 NDC Guide",
      "description": "An exhaustive analysis of bank NPA compromise settlement dynamics, detailing how to engage Stressed Asset Management Verticals, draft compelling OTS proposals, audit sanction letters, and secure ₹0 No Dues Certificates.",
      "image": "https://www.settleloans.in/images/infographics/one-time-settlement-ots-kaise-kare.jpg",
      "datePublished": "2026-08-26T09:00:00+05:30",
      "dateModified": "2026-08-26T09:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#webpage"
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
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#service",
      "name": "SettleLoans Bank OTS Advisory & Stressed Asset Settlement Desk",
      "description": "Professional debt resolution and banking negotiation service helping borrowers approach bank NPA departments, draft formal OTS proposals, secure maximum legal waivers, and obtain authentic ₹0 No Dues Certificates.",
      "url": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare",
      "image": "https://www.settleloans.in/images/infographics/one-time-settlement-ots-kaise-kare.jpg",
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
        "ratingValue": "4.95",
        "reviewCount": "2840",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Suresh Singhania"
          },
          "datePublished": "2026-07-20",
          "reviewBody": "Mera SBI personal loan account 14 mahine se NPA tha aur recovery agents mujhe daily pareshan kar rahe the. SettleLoans ki team ne sidhe Stressed Assets Resolution Branch (SARB) ko approach kiya aur formal OTS proposal submit kiya. Mujhe total outstanding par 54% discount mila aur payment ke 25 din mein official ₹0 No Dues Certificate mil gaya.",
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
            "name": "Kavita Ramachandran"
          },
          "datePublished": "2026-06-15",
          "reviewBody": "After a major medical emergency, I had 3 credit cards with ICICI and HDFC accumulating huge compounding interest. SettleLoans audited the ledgers, proved bona fide hardship, and structured an RBI-compliant compromise settlement across all cards with 58% overall waiver.",
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
            "name": "Deepak Vardhan"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "The best guidance on OTS negotiation! They warned me not to pay recovery agents directly and ensured that Axis Bank issued a properly stamped Sanction Letter from the Zonal Office before I deposited even a single rupee.",
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
            "name": "Harpreet Singh Sodhi"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "Kotak Mahindra Bank filed an arbitration notice for an unsecured business loan. SettleLoans stepped in, challenged the arbitrary penal surcharges, and redirected the matter into a structured OTS settled at Lok Adalat. Excellent legal clarity.",
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
      "@id": "https://www.settleloans.in/one-time-settlement-ots-kaise-kare#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "One Time Settlement (OTS) lene ke liye loan account kitna purana NPA hona chahiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI guidelines aur standard banking policies ke mutabiq, kisi bhi loan par One-Time Settlement (OTS) initiate karne ke liye account ka 90 din overdue hokar Non-Performing Asset (NPA) classify hona anivarya hota hai. Halanki, banks behtar compromise waivers (45% se 70%) tab offer karte hain jab account 180 din se adhik (Sub-Standard ya Doubtful Asset category) default mein rehta hai aur bank ko recovery mein substantial litigation friction dikhta hai."
          }
        },
        {
          "@type": "Question",
          "name": "OTS ke liye bank ke kis department se contact karna chahiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Borrowers ko regular branch managers ya third-party collection agencies se baat karne ke bajaye bank ke Stressed Asset Management Vertical (SAMV), Stressed Assets Resolution Branch (SARB), ya Zonal Asset Recovery Cell se direct sampark karna chahiye. Regular branches ke paas principal waiver sanction karne ki authority nahi hoti, jabki Zonal Settlement Committee ke paas discretionary financial powers hote hain."
          }
        },
        {
          "@type": "Question",
          "name": "OTS Proposal Letter mein kin cheezon ka ullekh hona sabse zaroori hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ek effective OTS proposal letter mein borrower ka exact loan account number, current financial crisis ka authentic kaaran (jaise job loss, business liquidation ya medical emergency), supporting financial proofs (ITR, salary slips, medical discharge summary), unconstitutional penal charges ko waive karne ki maang, aur ek realistic upfront lump-sum payment offer shamil hona chahiye."
          }
        },
        {
          "@type": "Question",
          "name": "Kya recovery agent ke sath verbal agreement karke payment ki ja sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bilkul nahi. Kisi bhi recovery agent ya collection executive ke verbal assurance par kabhi payment na karein. Settlement payment tabhi karein jab bank ke authorized officer dwara official letterhead par signed aur stamped OTS Sanction Letter issue ho chuka ho, aur payment hamesha seedhe designated bank loan account mein hi jama karein."
          }
        },
        {
          "@type": "Question",
          "name": "Bank OTS Sanction Letter mein kin terms ko verify karna anivarya hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sanction letter mein loan account number, total agreed settlement amount, payment schedule (single tranche ya structured installments), full and final waiver clause, legal proceedings withdraw karne ka undertaking, aur payment ke 21-30 din ke bheetar ₹0 No Dues Certificate (NDC) issue karne ki explicit commitment honi chahiye."
          }
        },
        {
          "@type": "Question",
          "name": "Settlement ke baad ₹0 No Dues Certificate (NDC) kaise prapt karein?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agreed settlement amount ka full payment clear hone ke baad payment receipt ke sath bank ke Zonal Recovery Cell aur nodal officer ko registered email aur letter bhejein. RBI circulars ke mutabiq bank ko payment completion ke 30 dinon ke bheetar formal No Dues Certificate issue karna aur credit bureau ko zero balance report karna legal compulsion hai."
          }
        },
        {
          "@type": "Question",
          "name": "OTS ke baad CIBIL report par kya asar padta hai aur ise kaise theek karein?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTS hone ke baad credit bureau par loan status 'Settled' ya 'Post-Write-Off Settled' show hota hai, jisse score temporary down hota hai. Score ko rebuild karne ke liye secured credit card (FD-backed) lein, utility bills samay par bharein, aur 12-24 mahine disciplined repayment track record banakar score ko 750+ tak recover karein."
          }
        },
        {
          "@type": "Question",
          "name": "Kya bank OTS proposal ko reject kar sakta hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Haan, bank commercial viability aur borrower ki repayment capacity audit ke adhar par pehla proposal reject kar sakta hai. Yadi proposal reject hota hai, toh bank ke higher authority (Zonal Head / Banking Ombudsman) ko detailed financial justification ke sath counter-proposal submit karein ya mamle ko National Lok Adalat mein compromise bench ke samne layen."
          }
        },
        {
          "@type": "Question",
          "name": "Willful Defaulter aur Genuine Hardship Borrower mein kya antar hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI definitions ke mutabiq, yadi kisi borrower ke paas repayment capacity hone ke bawajood jaanbujhkar default kiya gaya ho ya funds siphoned kiye gaye hon, toh use Willful Defaulter mana jata hai jahan OTS prohibited hota hai. Jabki genuine economic distress (job loss, business loss, health calamity) wale bona fide borrowers RBI Compromise Settlement policy ke tahat full OTS benefits ke haqdar hote hain."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'npa-classification-and-stressed-assets', title: '1. NPA Classification & Stressed Assets' },
  { id: 'approaching-bank-stressed-asset-department', title: '2. Approaching NPA Department' },
  { id: 'rbi-statutory-framework-and-compromise-rules', title: '3. RBI Compromise Settlement Directives' },
  { id: 'bank-npv-recovery-calculation', title: '4. Bank NPV Recovery Formula' },
  { id: 'infographic-ots-process-blueprint', title: '5. 4-Stage OTS Process Blueprint' },
  { id: 'drafting-persuasive-ots-proposal', title: '6. Drafting Persuasive OTS Proposal' },
  { id: 'multi-tier-negotiation-tactics', title: '7. Multi-Tier Negotiation Tactics' },
  { id: 'sanction-letter-forensics-and-ndc', title: '8. Sanction Letter Forensics & NDC' },
  { id: 'cibil-restoration-and-comparative-matrix', title: '9. CIBIL Rebuilding & Matrix Table' },
  { id: 'settleloans-advisory-desk', title: '10. SettleLoans Stressed Asset Desk' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function OneTimeSettlementOtsKaiseKarePage() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: "var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      {/* 1. Charcoal Navy Hero Section (#2d313d) */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: "#2d313d" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Borrower Legal Defence Protocol • RBI Stressed Asset Resolution Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            One Time Settlement OTS Kaise Le: <span className="text-[#3b82f6] md:text-[#60a5fa]">Bank NPA Negotiation, Proposal &amp; ₹0 NDC Guide</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Authored by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI &amp; Banking Regulations Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Bank OTS Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Stressed Asset Counsel
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* LEFT COLUMN: Sticky Table of Contents + Quick Crux Pill */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Crux Pill */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-600">
                One-Time Settlement (OTS) lene ke liye third-party recovery agents ke shor-sharabe se nikal kar sidhe bank ke Zonal Stressed Assets Resolution Branch (SARB) ko target karein. Formal hardship audit, unconstitutional penal interest ka cancellation, aur Net Present Value (NPV) calculation par adharit proposal bank ko 40% se 70% discount par authentic ₹0 No Dues Certificate (NDC) sanction karne par majboor karta hai.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Main Rich Editorial Content */}
          <main className="min-w-0">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-base">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Strategic Takeaways: Bank OTS Resolution Protocol</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bypass Call Centre Agents:</strong> Third-party collection agencies have zero waiver authority; direct negotiations must be conducted with the Bank Stressed Assets Management Vertical (SAMV).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory RBI Compromise Protection:</strong> The Reserve Bank of India Framework for Compromise Settlements obligates commercial banks to maintain transparent, board-approved OTS policies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leverage NPV Accounting Strain:</strong> High capital provisioning requirements under IRAC norms incentivize banks to accept discounted upfront lump-sums over protracted litigation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Sanction Letter Audit:</strong> Never pay settlement dues without an official, stamped OTS Sanction Letter confirming exact principal write-offs and a guaranteed ₹0 No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: NPA Classification & Stressed Asset Dynamics */}
            <section id="npa-classification-and-stressed-assets" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. NPA Classification &amp; Stressed Asset Dynamics: When Does a Loan Qualify for OTS?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab koi udhardata (borrower) kisi vyaktigat loan (personal loan), credit card, auto loan ya unsecured business loan ki masik EMI lagatar teen mahine ya 90 dinon tak jamane mein asafal rehta hai, toh Reserve Bank of India ke prudential accounting norms ke tehat us loan account ko <strong>Special Mention Account-2 (SMA-2)</strong> se transition karke <strong>Non-Performing Asset (NPA)</strong> ghoshit kar diya jata hai. Banking jurisprudence mein NPA ka darja milte hi bank ki balance sheet mein us account se aane wala interest income recognize hona band ho jata hai, aur bank par statutory provisioning ka bhari bojh padna shuru ho jata hai.
                </p>
                <p>
                  Yeh point samajhna behad mahatvapurna hai ki jab tak aapka loan standard performing category (1 se 89 din ke default) mein rehta hai, bank ka internal retail collections wing aapko kisi bhi prakar ka principal discount offer karne ke liye authorized nahi hota. Is charan par bank sirf penal charges ya late fees mein mamuli concession dekar restructuring ka prastav de sakta hai. Lekin jaise hi account 90 din ki boundary cross karke Sub-Standard Asset (NPA) banta hai, loan file standard branch banking se transfer hokar bank ke <strong>Stressed Asset Management Vertical (SAMV)</strong> ya <strong>Stressed Assets Resolution Branch (SARB)</strong> ke nirdeshon mein aa jati hai.
                </p>
                <p>
                  Yahin se <strong>One-Time Settlement (OTS)</strong> ka kanooni aur practical dwar khulta hai. Bank ke stressed asset officers yeh bhabhi roop se jante hain ki unsecured personal loans aur credit card portfolios mein physical collateral ya mortgaged property na hone ke kaaran lambi civil litigation (Civil Suits, Summary Suits under Order 37 CPC ya Section 138 NI Act) mein shamil hona bank ke liye financial aur administrative roop se behad nuksaandeh hota hai. Isiliye, jab borrower bona fide financial crisis prove karta hai, toh bank unrecoverable NPA ko write-off book karke compromise settlement finalize karne ke liye teji se taiyar hota hai.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Regulatory Distinction: Willful Defaulter vs. Genuine Hardship Borrower</strong>
                    RBI Master Directions clearly mandate that borrowers experiencing genuine economic hardship (job termination, business failure, critical medical emergencies) are fully entitled to board-approved compromise settlements. In contrast, borrowers who have siphoned funds or possess repayment capacity but deliberately withhold payment are classified as Willful Defaulters, permanently barring them from OTS relief under Indian banking law.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Approaching Bank Stressed Asset Department */}
            <section id="approaching-bank-stressed-asset-department" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Building2 className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Approaching the Bank&apos;s Stressed Asset Department: Bypassing Third-Party Recovery Chaos
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Adhikansh borrowers jo loan default mein aate hain, unka sabse pehla aur durbhagyavash sabse galat samna third-party collection agencies aur outsourced telecallers se hota hai. Yeh recovery agents pure commission model par kaam karte hain aur unke paas kisi bhi prakar ke financial discount ya loan write-off ko approve karne ki koi kanooni shakti nahi hoti. Unka ekmatra uddeshya borrower par psychological pressure create karke minimum overdue amount jama karwana hota hai, jisse unka monthly target pura ho sake.
                </p>
                <p>
                  Yadi aap One-Time Settlement (OTS) lena chahte hain, toh aapko in third-party recovery agents ke sath behas karke samay vyarth karne ke bajaye bank ke authentic administrative hierarchy ko formal tarike se approach karna hoga. Har commercial bank (jaise SBI, HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda) aur licensed NBFC (jaise Bajaj Finance, Tata Capital) mein ek dedicated <strong>Stressed Assets Resolution Branch (SARB)</strong>, <strong>Special Stressed Asset Vertical (SSAV)</strong> ya <strong>Zonal Asset Recovery Operations Desk</strong> hota hai.
                </p>
                <p>
                  Stressed Asset Department ko approach karne ke teen vyavasthit tareeqe hote hain:
                </p>
                <p>
                  <strong>1. Identifying the Regional Asset Recovery Head:</strong> Apne district ya city ke Zonal Office mein jakar Chief Manager (Asset Recovery) ya Stressed Assets Vertical Lead ka contact address prapt karein. Regular branch managers aksar files ko delay karte hain kyunki unki appraisal performance NPA numbers par nirbhar karti hai, jabki recovery vertical ka mandate hi bad loans ko recover karke close karna hota hai.
                </p>
                <p>
                  <strong>2. Submitting Through Authorised Registered Post:</strong> Bank ke Stressed Asset Vertical ko formal representations hamesha Registered Post with A.D. ya official registered email IDs par dispatch karein, jisse communication ka ek unbreakable audit trail maintain rahe.
                </p>
                <p>
                  <strong>3. Legal Representation through Banking Counsel:</strong> Jab aap kisi seasoned debt settlement advocate ke madhyam se representation bhejte hain, toh bank legal desk ko yeh pata chal jata hai ki borrower apne rights aur consumer protections se poori tarah avgat hai, jisse arbitrary harassment turant ruk jati hai aur formal settlement talks shuru hoti hain.
                </p>
              </div>
            </section>

            {/* SECTION 3: RBI Statutory Framework & Compromise Rules */}
            <section id="rbi-statutory-framework-and-compromise-rules" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Scale className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. RBI Statutory Framework &amp; Compromise Settlement Directives: Borrower Rights &amp; Protections
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  One-Time Settlement koi bank ki kripa ya daya par aadharit anurodh nahi hai, balki Reserve Bank of India dwara nirdharit <strong>Prudential Framework for Resolution of Stressed Assets</strong> aur <strong>Master Directions on Compromise Settlements and Technical Write-offs (2023–2024 Guidelines)</strong> ke tehat ek legitimate kanooni upchar hai. RBI ne sabhi commercial scheduled banks, regional rural banks, aur NBFCs ko spashtha aadesh diya hai ki unke board of directors dwara approved ek transparent settlement policy honi chahiye.
                </p>
                <p>
                  In statutory guidelines ke tehat borrower ko nimnlikhit shaktishali kanooni surakshaen prapt hain:
                </p>
                <p>
                  <strong>Right to Fair Treatment &amp; Penal Charge Elimination:</strong> RBI ke Fair Lending Practice circulars ke mutabiq, banks kisi bhi overdue amount par compound penal interest ya hidden administrative charges nahi laga sakte. Settlement calculations ke dauran borrower bank se sabhi penal surcharges aur capitalised charges ko 100% reverse karne ki maang kar sakta hai.
                </p>
                <p>
                  <strong>Mandatory Written Board Policy Adherence:</strong> Bank arbitrary tareeqe se kisi ek borrower ko discount dekar doosre ko deny nahi kar sakta. Har sanction decision bank ke delegation of financial powers matrix (Scale IV Chief Managers se lekar Executive Committee of the Board tak) ke transparent norms par aadharit hona anivarya hai.
                </p>
                <p>
                  <strong>Protection Against Coercive Debt Collection:</strong> Banking Regulation Act, 1949 aur RBI Master Directions on Recovery Agents ke anusaar, jab formal settlement talks chal rahi hon ya legal notice ka dispute live ho, bank kisi bhi prakar ki physical intimidation, odd-hours calling (subah 8 baje se pehle ya sham 7 baje ke baad), ya workplace humiliation nahi kar sakta. Aisa hone par Banking Ombudsman aur Indian Penal Code ke Section 503/506 ke tehat bank par kadi kanooni karwayi ki ja sakti hai.
                </p>
              </div>
            </section>

            {/* SECTION 4: Bank NPV Recovery Calculation */}
            <section id="bank-npv-recovery-calculation" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-4 h-4" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Bank Accounting Mechanics: How Stressed Asset Committees Calculate NPV &amp; Haircuts
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab aap bank ko OTS proposal bhejte hain, toh bank ka Stressed Assets Committee yeh faisla kaise leta hai ki aapko 40%, 50% ya 65% ka discount diya jaye? Iske peeche banking finance ka ek scientific mathematical evaluation hota hai jise <strong>Net Present Value (NPV) of Recovery</strong> kaha jata hai.
                </p>
                <p>
                  Jab koi loan NPA ban jata hai, toh bank ko RBI ke <strong>Income Recognition and Asset Classification (IRAC)</strong> norms ke mutabiq apni balance sheet ke profit mein se substantial provisioning reserve create karna padta hai: Sub-Standard Asset par 15% to 25%, Doubtful Asset-1 (1 saal tak NPA) par 25% to 40%, Doubtful Asset-2 (1 se 3 saal) par 40% to 100%, aur Loss Asset par 100% provisioning. Yeh provisioning bank ke capital adequacy ratio (CAR) par bhari dabav banati hai.
                </p>
                <p>
                  Yadi bank borrower ke khilaf Civil Court, Debt Recovery Tribunal (DRT), ya Section 138 NI Act ke tehat litigation karta hai, toh Indian judicial ecosystem mein case chalne mein kam se kam 3 se 6 saal ka samay lagta hai. Is dauran bank ko heavy advocate fees, execution court expenses, aur administrative cost uthani padti hai. Isiliye bank ki credit risk evaluation team nimnlikhit formula par recovery compare karti hai:
                </p>
              </div>

              {/* NPV Valuation Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Is calculation ke tahat, yadi bank ko 5 saal baad court se litigation ke kharche kaatkar 70% milne ki sambhavna hai, toh aaj ke din bina kisi court friction aur litigation cost ke 40% se 50% cash recovery lena bank ke financial health ke liye zyada profitable hota hai. Jab aapka advocate bank ke saamne is NPV balance sheet reality ko present karta hai, toh bank settlement approval ko green signal deta hai.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-ots-process-blueprint" className="mb-10 scroll-mt-24">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Statutory Resolution Workflow
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        One Time Settlement (OTS) Process in Indian Banking: 4-Stage Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/one-time-settlement-ots-kaise-kare.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/one-time-settlement-ots-kaise-kare.jpg"
                      alt="One Time Settlement OTS Process in Indian Banking Sequential 4-Stage Resolution Blueprint Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Protocol:</strong> Always demand an official stamped OTS Sanction Letter before paying any compromise amount to ensure a ₹0 No Dues Certificate.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Consult SettleLoans Stressed Asset Advocates &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6: Drafting a Shaktishali OTS Proposal */}
            <section id="drafting-persuasive-ots-proposal" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Drafting a Shaktishali OTS Proposal: Hardship Documentation &amp; Forensic Substantiation
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Ek shaktishali One-Time Settlement (OTS) proposal letter koi sadharan maafi-nama ya emotional application nahi hota, balki ek highly structured legal and financial dossier hota hai. Bank ke Stressed Asset Committee ke samne har roz saikdon settlement requests aati hain. Aapka proposal tabhi approve hota hai jab woh bank ke internal audit standards aur RBI prudential requirements par 100% khara utarta hai.
                </p>
                <p>
                  Ek professional OTS representation dossier mein nimnlikhit pancho mukhya forensic pillars shamil hone chahiye:
                </p>
                <p>
                  <strong>Pillar 1: Complete Identification &amp; Loan Ledger Audit.</strong> Proposal mein borrower ka naam, pan card number, loan account number, sanction date, original sanctioned amount, aur total repaid EMIs ka exact breakdown hona chahiye. Iske sath bank ke ledger par lagaye gaye illegal compound interest, bouncing charges, aur penal surcharges ko itemized karke unhe waive karne ka formal claim hona chahiye.
                </p>
                <p>
                  <strong>Pillar 2: Substantiating Bona Fide Economic Hardship.</strong> Bank ko yeh thos praman dena hoga ki default jaanbujhkar nahi balki unki niyantran se bahar ke paristhitiyon ke kaaran hua. Yadi default job termination ya salary cut ke kaaran hua hai, toh resignation/termination letters aur bank statements lagaye jayein. Yadi business downturn hua hai, toh audited balance sheets, GST filing drops, ya client cancellation notices shamil karein. Medical calamity ke mamle mein hospital discharge summaries aur pharmacy expenditure bills attach karein.
                </p>
                <p>
                  <strong>Pillar 3: Statement of Inability to Service Future EMIs.</strong> Spasht roop se establish karein ki current cash flow regular EMIs ko sustain karne mein asafal hai aur aane wale samay mein financial recovery asambhav hai.
                </p>
                <p>
                  <strong>Pillar 4: Source of Compromise Settlement Funds.</strong> Bank hamesha yeh janna chahta hai ki yadi aapke paas paise nahi hain, toh settlement amount kahan se aayega. Proposal mein mention karein ki compromise amount parivar ke sadasyon, doston se udhar lekar, ya kisi gold asset ko liquidate karke arrange kiya ja raha hai, jo sirf one-time compromise closure ke liye hi uplabdh hai.
                </p>
                <p>
                  <strong>Pillar 5: Firm, Time-Bound Payment Commitment.</strong> Bank ko ek clear proposal dein (jaise: <em>&quot;Upon receipt of official sanction, ₹X will be deposited within 15 to 30 days via direct RTGS/NEFT against ₹0 No Dues Certificate&quot;</em>).
                </p>
              </div>
            </section>

            {/* SECTION 7: Multi-Tier Negotiation Tactics */}
            <section id="multi-tier-negotiation-tactics" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Percent className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Multi-Tier Negotiation Tactics: Countering Initial Rejections &amp; Securing Maximum Haircuts
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Banking negotiations mein pehla proposal aamtaur par bank dwara reject kar diya jata hai ya bank behad unchi counter-offer (jaise 85% se 90% of total dues) pesh karta hai. Yeh bank ki ek standard tactical move hoti hai jisse woh borrower ki financial capacity ko test karte hain. Yahan par borrower ko ghabra kar surrender nahi karna chahiye, balki structured multi-tier escalation tactics ka upyog karna chahiye:
                </p>
                <p>
                  <strong>Tactic 1: Anchoring on Net Principal Outstanding.</strong> Bank ke total inflated claim (jismein penal interest aur legal costs shamil hain) par negotiation karne ke bajaye hamesha <strong>Net Principal Outstanding</strong> par discussion ko anchor karein. Unsecured personal loans aur credit cards mein target hamesha net principal ka 35% se 50% hona chahiye.
                </p>
                <p>
                  <strong>Tactic 2: Leveraging Fiscal Year-End &amp; Quarter-End Pressures.</strong> Commercial banks par har quarter (visheshkar March, September aur December quarter-ends) mein apne gross NPA aur net NPA numbers ko kam karne ka bhari managerial pressure hota hai. In mahino ke aakhiri 20 dinon mein Stressed Asset Committees maximum discount (50% se 70% haircut) approve karne ke liye adhik lachili (flexible) hoti hain.
                </p>
                <p>
                  <strong>Tactic 3: Single Tranche vs. Multi-Tranche Structuring.</strong> Bank hamesha single lump-sum payment ko preference dete hain aur uspe maximum discount dete hain. Lekin yadi aapke paas lump sum nahi hai, toh aap settlement ko 2 se 3 structured monthly tranches mein split karne ke liye negotiate kar sakte hain, bas shart yeh hai ki sanction letter mein clear installment dates mentioned hon.
                </p>
                <p>
                  <strong>Tactic 4: Escalation to Alternate Dispute Forums (Lok Adalat).</strong> Yadi bank branch arbitrary roop se negotiations ko stall karti hai, toh matter ko <strong>National Lok Adalat</strong> mein pre-litigation settlement ke liye reference appeal file karke judicial bench ke samne transfer karein. Lok Adalat bench unfair penalties ko cancel karwake ek dignified settlement execute karwati hai.
                </p>
              </div>
            </section>

            {/* SECTION 8: Sanction Letter Forensics & Securing ₹0 NDC */}
            <section id="sanction-letter-forensics-and-ndc" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck2 className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Sanction Letter Forensics &amp; Securing ₹0 No Dues Certificate: Preventing Future Legal Traps
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  One-Time Settlement ka sabse nazuk aur kanooni roop se sensitive charan hota hai <strong>OTS Sanction Letter ki forensic auditing</strong>. Bharat mein hajaron borrowers fraud ka shikar bante hain jab woh recovery agent ke bheje gaye WhatsApp PDF ya plain email par bharosa karke paise transfer kar dete hain. Kuch mahino baad unhe pata chalta hai ki unke paise regular EMI account mein deduct ho gaye aur baki lakho rupaye ka loan abhi bhi unke naam par chal raha hai.
                </p>
                <p>
                  Kisi bhi settlement amount ko pay karne se pehle official Sanction Letter mein nimnlikhit chaar anivarya elements ki forensic janch karein:
                </p>
                <p>
                  <strong>1. Authentic Bank Letterhead &amp; Stamped Authority:</strong> Sanction letter bank ke official corporate letterhead par hona chahiye, jismein Competent Authority (Scale-IV Chief Manager ya AGM) ke official rubber stamp aur physical/digital signature hone anivarya hain.
                </p>
                <p>
                  <strong>2. Unambiguous Account Details &amp; Settlement Amount:</strong> Letter mein aapka 16-digit loan account number, original outstanding claim, sanctioned settlement amount, aur waiver amount spashth roop se alag-alag likha hona chahiye.
                </p>
                <p>
                  <strong>3. Full &amp; Final Satisfaction Clause:</strong> Letter mein explicitly likha hona chahiye: <em>&quot;Upon payment of the agreed settlement amount of ₹X on or before [Date], the bank shall have no further claims whatsoever against the borrower, and the loan account shall stand fully and finally closed.&quot;</em>
                </p>
                <p>
                  <strong>4. Mandatory Commitment to Issue ₹0 NDC within 30 Days:</strong> Letter mein yeh undertaking honi chahiye ki payment credit hone ke 21 se 30 dinon ke bheetar bank stamped <strong>No Dues Certificate (NDC) / No Objection Certificate (NOC)</strong> dispatch karega aur court litigation (yadi koi ho) ko withdraw karega.
                </p>
              </div>
            </section>

            {/* SECTION 9: CIBIL Restoration & Comparative Matrix */}
            <section id="cibil-restoration-and-comparative-matrix" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileSpreadsheet className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. CIBIL Rectification &amp; Comparative Settlement Matrix: Post-OTS Financial Rehabilitation
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  One-Time Settlement finalize hone ke baad credit reporting ek crucial reality hoti hai. Jab aap loan compromise settle karte hain, toh RBI Credit Information Companies (Regulation) Act ke mutabiq bank TransUnion CIBIL, Experian, Equifax, aur CRIF High Mark ko account status <strong>&apos;Settled&apos;</strong> ya <strong>&apos;Post-Write-Off Settled&apos;</strong> ke roop mein report karta hai, jabki balance ₹0 darshaya jata hai.
                </p>
                <p>
                  Halanki &apos;Settled&apos; status se credit score temporary roop se prabhavit hota hai, lekin yeh continuous default ya legal suit filed status se hazar guna behtar hota hai kyunki legal liability hamesha ke liye samapt ho jati hai. 12 se 24 mahino ke bheetar aap ek secured fixed deposit credit card banwakar, timely utility bill payments karke aur disciplined financial management ke zariye apne credit score ko punah 750+ tak recover kar sakte hain.
                </p>
                <p>
                  Niche di gayi comparative matrix table aapko alag-alag loan categories mein standard OTS discount expectations aur approval parameters ko spasht karti hai:
                </p>
              </div>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-slate-300 rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 font-bold">
                      <th className="p-3 text-left border-r border-slate-300">Loan Facility Category</th>
                      <th className="p-3 text-left border-r border-slate-300">Typical NPA Aging</th>
                      <th className="p-3 text-left border-r border-slate-300">Achievable OTS Waiver Range</th>
                      <th className="p-3 text-left border-r border-slate-300">Target Approval Authority</th>
                      <th className="p-3 text-left">Closure Documentation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Unsecured Personal Loans</td>
                      <td className="p-3 border-r border-slate-200">120 – 360 Days</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-emerald-700">45% – 65% of Total Dues</td>
                      <td className="p-3 border-r border-slate-200">Zonal Stressed Asset Committee</td>
                      <td className="p-3">Stamped OTS Sanction &amp; ₹0 No Dues Certificate</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Credit Card Outstanding</td>
                      <td className="p-3 border-r border-slate-200">90 – 270 Days</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-emerald-700">50% – 75% of Total Dues</td>
                      <td className="p-3 border-r border-slate-200">Card Operations Settlement Desk</td>
                      <td className="p-3">Card Account Closure Letter with ₹0 Balance</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Unsecured Business Loans (MSME)</td>
                      <td className="p-3 border-r border-slate-200">180 – 540 Days</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-blue-700">40% – 60% of Total Dues</td>
                      <td className="p-3 border-r border-slate-200">SARB Chief Manager / DGM Level</td>
                      <td className="p-3">MSME Compromise Settlement Award &amp; NOC</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">App-Based Fintech / Digital Loans</td>
                      <td className="p-3 border-r border-slate-200">90 – 180 Days</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-emerald-700">50% – 70% of Total Dues</td>
                      <td className="p-3 border-r border-slate-200">Digital Lending Nodal Officer</td>
                      <td className="p-3">Digital NOC &amp; CIBIL Bureau Zero Out Receipt</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Secured Loans (Shortfall After Auction)</td>
                      <td className="p-3 border-r border-slate-200">Post-SARFAESI Action</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">30% – 50% of Residual Balance</td>
                      <td className="p-3 border-r border-slate-200">Executive Committee of the Board</td>
                      <td className="p-3">Full Title Release &amp; Residual Satisfaction NOC</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Company Section (Rendered directly before FAQs) */}
            <div id="settleloans-advisory-desk" className="mb-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* SECTION 11: Interactive FAQ Accordion */}
            <section id="faqs" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <HelpCircle className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 11</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: One Time Settlement (OTS) Rules &amp; Negotiation Guide
              </h2>

              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300" open>
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>One Time Settlement (OTS) lene ke liye loan account kitna purana NPA hona chahiye?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    RBI guidelines aur standard banking policies ke mutabiq, kisi bhi loan par One-Time Settlement (OTS) initiate karne ke liye account ka <strong>90 din overdue hokar Non-Performing Asset (NPA) classify hona anivarya hota hai</strong>. Halanki, banks behtar compromise waivers (45% se 70%) tab offer karte hain jab account 180 din se adhik (Sub-Standard ya Doubtful Asset category) default mein rehta hai aur bank ko recovery mein substantial litigation friction dikhta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>OTS ke liye bank ke kis department se contact karna chahiye?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Borrowers ko regular branch managers ya third-party collection agencies se baat karne ke bajaye bank ke <strong>Stressed Asset Management Vertical (SAMV)</strong>, <strong>Stressed Assets Resolution Branch (SARB)</strong>, ya Zonal Asset Recovery Cell se direct sampark karna chahiye. Regular branches ke paas principal waiver sanction karne ki authority nahi hoti, jabki Zonal Settlement Committee ke paas discretionary financial powers hote hain.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>OTS Proposal Letter mein kin cheezon ka ullekh hona sabse zaroori hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Ek effective OTS proposal letter mein borrower ka exact loan account number, current financial crisis ka authentic kaaran (jaise job loss, business liquidation ya medical emergency), supporting financial proofs (ITR, salary slips, medical discharge summary), unconstitutional penal charges ko waive karne ki maang, aur ek realistic upfront lump-sum payment offer shamil hona chahiye.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya recovery agent ke sath verbal agreement karke payment ki ja sakti hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    <strong>Bilkul nahi. Kisi bhi recovery agent ya collection executive ke verbal assurance par kabhi payment na karein.</strong> Settlement payment tabhi karein jab bank ke authorized officer dwara official letterhead par signed aur stamped OTS Sanction Letter issue ho chuka ho, aur payment hamesha seedhe designated bank loan account mein hi jama karein.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Bank OTS Sanction Letter mein kin terms ko verify karna anivarya hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Sanction letter mein loan account number, total agreed settlement amount, payment schedule (single tranche ya structured installments), full and final waiver clause, legal proceedings withdraw karne ka undertaking, aur payment ke 21-30 din ke bheetar ₹0 No Dues Certificate (NDC) issue karne ki explicit commitment honi chahiye.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Settlement ke baad ₹0 No Dues Certificate (NDC) kaise prapt karein?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Agreed settlement amount ka full payment clear hone ke baad payment receipt ke sath bank ke Zonal Recovery Cell aur nodal officer ko registered email aur letter bhejein. <strong>RBI circulars ke mutabiq bank ko payment completion ke 30 dinon ke bheetar formal No Dues Certificate issue karna aur credit bureau ko zero balance report karna legal compulsion hai.</strong>
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>OTS ke baad CIBIL report par kya asar padta hai aur ise kaise theek karein?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    OTS hone ke baad credit bureau par loan status &apos;Settled&apos; ya &apos;Post-Write-Off Settled&apos; show hota hai, jisse score temporary down hota hai. Score ko rebuild karne ke liye secured credit card (FD-backed) lein, utility bills samay par bharein, aur 12-24 mahine disciplined repayment track record banakar score ko 750+ tak recover karein.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya bank OTS proposal ko reject kar sakta hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Haan, bank commercial viability aur borrower ki repayment capacity audit ke adhar par pehla proposal reject kar sakta hai. Yadi proposal reject hota hai, toh bank ke higher authority (Zonal Head / Banking Ombudsman) ko detailed financial justification ke sath counter-proposal submit karein ya mamle ko National Lok Adalat mein compromise bench ke samne layen.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Willful Defaulter aur Genuine Hardship Borrower mein kya antar hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    RBI definitions ke mutabiq, yadi kisi borrower ke paas repayment capacity hone ke bawajood jaanbujhkar default kiya gaya ho ya funds siphoned kiye gaye hon, toh use Willful Defaulter mana jata hai jahan OTS prohibited hota hai. Jabki genuine economic distress (job loss, business loss, health calamity) wale bona fide borrowers RBI Compromise Settlement policy ke tahat full OTS benefits ke haqdar hote hain.
                  </div>
                </details>
              </div>
            </section>

            {/* Official Statutory References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Official Statutory References &amp; Regulatory Authorities</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Reserve Bank of India (RBI) – Master Directions on Compromise Settlements and Technical Write-offs
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Banking Regulation Act, 1949 – Section 35A &amp; Resolution of Stressed Assets Provisions
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    RBI Integrated Ombudsman Scheme – Redressal of Unfair Banking &amp; Recovery Grievances
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    National Legal Services Authority (NALSA) – Lok Adalat Pre-Litigation Debt Settlement Directives
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.cibil.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    TransUnion CIBIL – Credit Information Companies (Regulation) Act Rules for Closed &amp; Settled Accounts
                  </a>
                </li>
              </ul>
            </div>

            {/* 10 Related Guide Badges */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-10 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Explore Related Loan Settlement &amp; Legal Protection Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank One Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/lok-adalat-me-loan-settlement-kaise-kare"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Lok Adalat Loan Settlement Guide
                </Link>
                <Link
                  href="/bank-ka-legal-notice-aane-par-kya-kare"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank Ka Legal Notice Aane Par Kya Kare
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Verify Authentic Settlement Letter
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  CIBIL Score Improvement After Settlement
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Stop Recovery Agent Threatening
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Section 138 Cheque Bounce Defence
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Section 25 PSSA NACH Bounce Notice
                </Link>
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: Author Bio Card, Emergency Advocate CTA & Trust Signals */}
          <aside className="space-y-5 lg:sticky lg:top-24">

            {/* Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1F5EFF] to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-sm hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Lead Debt Settlement Counsel</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior banking litigation advocate specializing in bank NPA management, RBI compromise settlements, DRT defense, and authentic No Dues Certificate procurement for Indian borrowers.
              </p>
              <div className="text-[11px] text-blue-600 font-semibold flex items-center justify-between border-t border-slate-100 pt-2.5">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Legal Author</span>
                </div>
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] hover:underline font-bold">
                  View Profile &rarr;
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 border border-slate-700 rounded-2xl p-5 text-white shadow-md">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-blue-500/30 mb-3">
                <ShieldAlert className="w-3 h-3" />
                <span>NPA Resolution Desk</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">
                Need Help with Bank OTS Negotiation?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Stop aggressive recovery calls today. SettleLoans banking advocates directly approach the bank Stressed Asset Department to negotiate up to 70% waiver and secure an authentic ₹0 NDC.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Start OTS Settlement Representation</span>
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1F5EFF]" />
                <span>SettleLoans Legal Safeguards</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% RBI &amp; Banking Norms Compliant:</strong> Formal compromise proposals under RBI Master Directions.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct SARB Department Representation:</strong> Bypassing unauthorized third-party recovery agencies.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Forensic Sanction Letter Verification:</strong> Ensuring zero residual liability and 100% genuine ₹0 NDC.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Over ₹180+ Crores Settled:</strong> Trusted by 12,000+ borrowers across all major Indian banks and NBFCs.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
