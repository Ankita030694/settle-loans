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
  ShieldQuestion,
  HandCoins
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cheque Bounce Hone Par Kya Hoga: Section 138 Legal Defence & OTS',
  description: 'Cheque bounce hone par kya kare? Discover your rights against bank security cheque misuse, Section 138 notice timelines, bailable offense protections, and case withdrawal via OTS.',
  keywords: [
    'cheque bounce hone par kya kare',
    'cheque bounce hone par kya hoga',
    'section 138 ni act legal notice reply',
    'bank security cheque bounce rules',
    'cheque bounce bailable offense bail process',
    'section 147 ni act compounding of offence',
    'cheque bounce loan settlement case withdrawal',
    'cheque bounce hone par police arrest karegi kya',
    '15 day notice period cheque bounce reply',
    'magistrate court summons cheque bounce defence'
  ],
  alternates: {
    canonical: 'https://settleloans.in/cheque-bounce-hone-par-kya-hoga',
  },
  openGraph: {
    title: 'Cheque Bounce Hone Par Kya Hoga: Section 138 Legal Defence & Settlement',
    description: 'Bank deposited your blank security cheque? Understand Section 138 notice timelines, bail rights in Magistrate Court, and how compounding under Section 147 withdraws criminal cases.',
    url: 'https://settleloans.in/cheque-bounce-hone-par-kya-hoga',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg',
        width: 1200,
        height: 675,
        alt: 'Cheque Bounce Hone Par Kya Hoga Legal Defence Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cheque Bounce Hone Par Kya Hoga: Comprehensive Borrower Legal Guide',
    description: 'Exhaustive defence roadmap for loan cheque dishonour: Section 138 notice audit, bailable offence bail procedures, and complete case compounding through One-Time Settlement (OTS).',
    images: ['https://settleloans.in/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#webpage",
      "url": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga",
      "name": "Cheque Bounce Hone Par Kya Hoga: Section 138 Legal Defence, Bail Rights & Case Withdrawal",
      "description": "A comprehensive legal and financial guide detailing borrower rights, statutory timelines, criminal intimidation defense, bail procedures, and compounding of Section 138 cases via loan settlement.",
      "breadcrumb": {
        "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#breadcrumb"
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
      "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#breadcrumb",
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
          "name": "Cheque Bounce Hone Par Kya Hoga",
          "item": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#article",
      "headline": "Cheque Bounce Hone Par Kya Hoga: Section 138 Defence, Bail Rights, and OTS Compounding",
      "description": "In-depth legal analysis of cheque dishonour under Section 138 of the Negotiable Instruments Act, Supreme Court precedents on security cheques, bailable offence provisions, and compounding under Section 147.",
      "image": "https://settleloans.in/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg",
      "datePublished": "2026-08-26T09:00:00+05:30",
      "dateModified": "2026-08-26T09:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#webpage"
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
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": "https://settleloans.in/logo/logo.svg",
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
      "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#service",
      "name": "SettleLoans Section 138 Cheque Bounce Defence & OTS Advisory",
      "description": "Specialized banking and criminal law defense consultancy protecting borrowers against malicious security cheque presentation, Section 138 notices, and executing case compounding through structured debt settlements.",
      "url": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga",
      "image": "https://settleloans.in/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg",
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
        "ratingValue": "4.95",
        "reviewCount": "2490",
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
          "datePublished": "2026-07-20",
          "reviewBody": "Bank deposited my old blank security cheque of ₹8.5 Lakhs after 3 missed business loan EMIs and sent an intimidating Section 138 legal notice. SettleLoans advocates drafted a robust legal reply highlighting that the cheque was for security and challenged the inflated interest. We negotiated a clean 52% OTS and the court case was formally withdrawn under Section 147.",
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
            "name": "Sanjay Deshmukh"
          },
          "datePublished": "2026-06-15",
          "reviewBody": "Recovery agents were threatening immediate police arrest for a bounced EMI cheque. SettleLoans explained the bailable nature of Section 138, secured bail on the very first court appearance, and stopped all recovery agent intimidation. We closed the loan in two easy settlement tranches.",
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
            "name": "Priyanka Sen"
          },
          "datePublished": "2026-05-18",
          "reviewBody": "An NBFC filed a criminal complaint in Metropolitan Magistrate Court in Delhi. SettleLoans represented me through their panel advocates, filed an application for compounding under Section 147 NI Act, and ensured the lender issued a zero balance No Dues Certificate.",
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
            "name": "Harishankar Pandey"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "Excellent legal advice on Section 138 timelines! They audited the 15-day notice period and proved that the bank presented the security cheque without prior demand intimation. Saved me from prolonged criminal trial and settled the credit card debt seamlessly.",
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
      "@id": "https://settleloans.in/cheque-bounce-hone-par-kya-hoga#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Cheque bounce hone par sabse pehla legal step kya hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cheque bounce hone par bank ya payee ko 30 din ke bheetar Section 138 NI Act ke tahat ek formal statutory legal demand notice bhejna padta hai. Is notice mein borrower ko payment karne ke liye 15 calendar days ka mandatory samay diya jata hai. Yadi borrower is 15-day window mein advocate ke madhyam se legal reply bhejta hai ya dispute clarify karta hai, toh criminal complaint ko roka ya settle kiya ja sakta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Kya cheque bounce hone par police sidhe ghar aakar arrest kar sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nahi, cheque bounce (Section 138 NI Act) ek non-cognizable aur bailable offense hai. Isme police ke paas sidhe FIR darj karne ya bina court warrant ke arrest karne ka koi statutory adhikar nahi hota. Bank ko pehle Judicial Magistrate Court mein private criminal complaint file karni padti hai, jiske baad court summons issue karti hai."
          }
        },
        {
          "@type": "Question",
          "name": "Loan lete waqt diya gaya Security Cheque bounce hone par kya Section 138 lagu hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Supreme Court of India ke landmark judgments (jaise Indus Airways aur Dashrathbhai Trikambhai Patel cases) ke mutabiq, blank security cheque kisi existing 'legally enforceable debt' ke bina directly criminal liability create nahi karta. Yadi bank ne bina loan ledger reconcile kiye ya advance notice diye security cheque present kiya hai, toh ise advocate reply aur court trial mein solid legal defence banaya ja sakta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Section 138 notice aane ke baad 15 din ka samay kyu critical hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "15 din ka statutory period borrower ka 'cure period' hota hai. Yadi notice receive hone ke 15 din ke andar koi action nahi liya jata, tab jakar bank ke paas agle 30 dinon ke bheetar court mein Section 138 complaint darj karne ka cause of action banta hai. 15 din ke andar formal advocate rejoinder dispatch karne se lender par settlement pressure banta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Court summons aane par bail lene ka procedure kya hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 138 ek bailable offense hai, jiska matlab hai ki bail pana borrower ka statutory right hai. Court summons mein nirdharit tareekh par aapke advocate ke sath court mein pesh hokar ek simple Bail Application aur local surety (ya personal bond) submit karni hoti hai, jise Magistrate court usi din instantly grant kar deti hai."
          }
        },
        {
          "@type": "Question",
          "name": "Section 147 NI Act ke tahat cheque bounce case compound kaise hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 147 of the Negotiable Instruments Act cheque bounce offenses ko 'compoundable' banata hai. Iska matlab hai ki yadi borrower aur bank ke beech out-of-court One-Time Settlement (OTS) tay ho jata hai aur settlement amount pay ho jata hai, toh court mein joint compromise application file karke criminal case ko 100% permanently withdraw aur close karwa liya jata hai."
          }
        },
        {
          "@type": "Question",
          "name": "Kya cheque bounce case chalte waqt bank ke sath loan settlement ho sakta hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Haan, bilkul. Indian judiciary aur Lok Adalats Section 138 cases mein compromise settlement ko actively encourage karti hain. Bank litigation panel lambi trial ke bajaye discounted OTS amount lene ko prefer karta hai. Settlement finalize hote hi bank court se case withdraw karne ka formal No Objection statement deta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Cheque bounce case mein maximum punishment ya penalty kya ho sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 138 NI Act ke tahat maximum punishment 2 saal tak ki imprisonment ya cheque amount ka double fine, ya dono ho sakta hai. Halanki, genuine financial hardship wale cases mein courts trial ke dauran mediation aur settlement ko priority deti hain, aur timely advocate intervention se jail term ki naubat kabhi nahi aati."
          }
        },
        {
          "@type": "Question",
          "name": "Kya har cheque bounce par court doosre shahar ya state mein bula sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Negotiable Instruments (Amendment) Act ke Section 142(2) ke mutabiq, cheque bounce case sirf usi court jurisdiction mein file ho sakta hai jahan payee (bank branch) ka account maintain hota hai ya jahan borrower ne cheque present kiya tha. Malicious outstation litigation ko jurisdiction objection ke zariye challenge kiya ja sakta hai."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: 'understanding-section-138-cheque-bounce', title: '1. Anatomy of Section 138 NI Act' },
  { id: 'criminal-intimidation-vs-bailable-reality', title: '2. Criminal Intimidation vs Bail Reality' },
  { id: 'statutory-notice-timelines-and-deadlines', title: '3. 15-Day Notice & Limitation Deadlines' },
  { id: 'bank-accounting-and-npv-recovery-formula', title: '4. NPA Accounting & NPV Recovery' },
  { id: 'infographic-cheque-bounce-workflow', title: '5. Visual 4-Stage Action Blueprint' },
  { id: 'advocate-reply-security-cheque-defense', title: '6. Security Cheque Misuse Defence' },
  { id: 'magistrate-court-bail-and-summons-process', title: '7. Magistrate Summons & Bail Process' },
  { id: 'compounding-offence-section-147-case-withdrawal', title: '8. Compounding & OTS Case Withdrawal' },
  { id: 'comparative-legal-matrix-table', title: '9. Cheque vs NACH vs Civil Matrix' },
  { id: 'settleloans-advisory-desk', title: '10. SettleLoans Legal Desk' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function ChequeBounceHoneParKyaHogaPage() {
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
            <Scale className="w-3.5 h-3.5" />
            <span>Negotiable Instruments Act • Borrower Statutory Defence Protocol</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Cheque Bounce Hone Par Kya Hoga: <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 138 Notice, Bail Rights &amp; Case Withdrawal</span>
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
              <span>NI Act &amp; CrPC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Draft Section 138 Notice Reply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Cheque Defence Advocate
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
          <aside className="hidden lg:block sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Crux Pill */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-600">
                Cheque bounce hone par bank recovery agents dwara di jane wali direct police arrest ki dhamki kanooni roop se asatyah hai. Section 138 ek non-cognizable aur bailable offense hai. 15 din ke statutory notice window mein advocate rejoinder bhejna, Magistrate court mein bail secure karna, aur Section 147 ke tahat One-Time Settlement (OTS) execute karke case ko permanently withdraw karwana sabse prabhavi kanooni rasta hai.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Main Rich Editorial Content */}
          <main className="min-w-0">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-base">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Strategic Takeaways: Cheque Dishonour Defence Protocol</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Direct Police Power:</strong> Section 138 Negotiable Instruments Act is a quasi-criminal, non-cognizable, and bailable offense; local police cannot register an automatic FIR or arrest borrowers without court warrants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Golden 15-Day Statutory Cure Window:</strong> Following cheque dishonour, lenders must issue a 30-day demand notice, providing borrowers a mandatory 15 calendar day cure window before any court cause of action arises.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Blank Security Cheque Legal Defence:</strong> Depositing pre-signed blank security cheques without reconciling actual outstanding debt or serving ledger adjustments violates established Supreme Court precedents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Seamless Compounding via Section 147 NI Act:</strong> Negotiating a structured One-Time Settlement (OTS) enables immediate compounding of the offence, compelling the complainant bank to withdraw court proceedings permanently.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Anatomy of Section 138 NI Act */}
            <section id="understanding-section-138-cheque-bounce" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. Anatomy of Cheque Bounce Under Section 138 NI Act: Security Cheques vs. Legally Enforceable Debt
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab koi udhardata (borrower) kisi commercial bank, non-banking financial company (NBFC), ya personal lender se loan leta hai, toh loan sanctioning ke dauran aksar lender dwara multiple blank signed cheques &quot;security deposit&quot; ke taur par jama karwaye jate hain. Jab borrower ki financial sthiti bigadti hai aur consecutive monthly installments (EMIs) miss hoti hain, toh lenders aksar in blank security cheques par manmani rakam bharkar bina borrower ki prior intimation ke unhe clearinghouse mein deposit kar dete hain. Account mein balance na hone ke kaaran jab cheque return memo ke sath &quot;Funds Insufficient&quot; ya &quot;Account Closed&quot; likhkar wapas aata hai, toh <strong>Section 138 of the Negotiable Instruments Act, 1881</strong> ke tahat statutory dispute generate hota hai.
                </p>
                <p>
                  Section 138 NI Act ka mool uddeshya banking transactions aur commercial credibility ko banaye rakhna hai. Lekin kanoon ke mutabiq, kisi bhi cheque ke bounce hone par criminal prosecution chalane ke liye ek sarvopari shart ka pura hona anivarya hai: cheque kisi <em>&apos;Legally Enforceable Debt or Liability&apos;</em> ke settlement ke liye issue kiya gaya hona chahiye. Yadi bank ne loan sanctioning ke samay liya gaya ek purana blank security cheque present kiya hai aur us par aisi rakam likh di hai jismein unconstitutional compound penal interest, arbitrary late charges, aur collection fees shamil hain, toh wahan debt legally enforceable liability ki legal definition se bahar chala jata hai.
                </p>
                <p>
                  Hon&apos;ble Supreme Court of India ne landmark judgments jaise <em>Indus Airways Pvt Ltd v. Magnum Aviation Pvt Ltd</em> tatha <em>Dashrathbhai Trikambhai Patel v. Hitesh Mahendrabhai Patel (2022)</em> mein spasht vyavastha di hai ki yadi cheque presentation ki tareekh par cheque par darshayi gayi rakam borrower ke actual crystallized debt se match nahi karti ya partial payments ko account ledger mein credit nahi kiya gaya hai, toh Section 138 ki criminal complaint sustain nahi kar sakti. Isliye, cheque bounce hone par ghabrane ke bajaye transaction ke legal mechanics ko samajhna aapka pehla defensive kadam hai.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Statutory Precondition for Section 138 Prosecution</strong>
                    Cheque dishonour ka apradh tab tak commit nahi mana jata jab tak payee bank cheque bounce hone ke 30 din ke bheetar formal written demand notice na bheje aur us notice ke receipt hone ke baad borrower ko 15 din ka statutory payment cure window na diya jaye. Bina is statutory compliance ke file ki gayi koi bhi court complaint ab-initio void hoti hai.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Criminal Intimidation vs Bail Reality */}
            <section id="criminal-intimidation-vs-bailable-reality" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Criminal Intimidation vs Bail Reality: Why Police Cannot Arrest You for Cheque Bounce
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Cheque bounce hone ke baad banks aur NBFCs ke third-party recovery agents dwara borrowers ko sabse jyada daraane ke liye criminal intimidation ka sahara liya jata hai. Agents phone karke ya WhatsApp par aisi warning dete hain ki &quot;Local police station se sub-inspector aapke ghar arrest karne aa raha hai&quot; ya &quot;Aapke khilaf Section 420 aur 406 IPC ke tahat non-bailable FIR darj ho chuki hai.&quot; Yeh poori tarah se gair-kanooni aur misleading tactic hoti hai jo borrower ke psychological panic ka fayda uthane ke liye create ki jati hai.
                </p>
                <p>
                  Code of Criminal Procedure, 1973 (CrPC) aur Bharatiya Nagarik Suraksha Sanhita (BNSS) ke tahat, Section 138 NI Act ek <strong>Non-Cognizable, Bailable, aur Compoundable Offense</strong> hai. Is kanooni classification ke tin spasht matlab hain jo har borrower ko maloom hone chahiye:
                </p>
                <p>
                  <strong>Pehla: No Automatic Police Jurisdiction.</strong> Non-cognizable offense hone ke kaaran local police station ke paas na toh cheque bounce par direct FIR darj karne ki power hoti hai aur na hi bina kisi magistrate ke written warrant ke kisi vyakti ko arrest karne ka adhikar hota hai. Police aisi complaints par sidhe action nahi le sakti.
                </p>
                <p>
                  <strong>Doosra: Private Complaint Before Judicial Magistrate.</strong> Bank ko cheque bounce case shuru karne ke liye Judicial Magistrate First Class (JMFC) ya Metropolitan Magistrate (MM) ki adalat mein ek formal <em>Private Criminal Complaint</em> file karni padti hai. Magistrate pehle complainant ka statement (pre-summoning evidence) record karta hai aur documents verify karne ke baad hi borrower ko preliminary Court Summons jari karta hai.
                </p>
                <p>
                  <strong>Teesra: Absolute Right to Bail.</strong> Bailable offense hone ke kaaran adalat mein pesh hone par bail pana borrower ka kanooni adhikar (statutory right) hai. Magistrate court first appearance par hi simple personal bond aur local surety par bail grant kar deti hai. Isiliye, recovery agents ki police arrest ki khokhli dhamkiyon se bilkul darne ki zaroorat nahi hai.
                </p>
              </div>
            </section>

            {/* SECTION 3: 15-Day Notice & Limitation Deadlines */}
            <section id="statutory-notice-timelines-and-deadlines" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. The 15-Day Statutory Notice Window &amp; Mandatory Limitation Timelines
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Negotiable Instruments Act mein litigation initiate karne ke liye behad kade statutory time limits tay kiye gaye hain. Yadi bank inme se kisi bhi limitation deadline ko miss kar deta hai ya timeline ka ullekhit ullanghan karta hai, toh complaint technical grounds par dismiss hone yogya ho jati hai.
                </p>
                <p>
                  Section 138 ke antargat char mukhya samay seemayein (timelines) lagu hoti hain:
                </p>
                <p>
                  <strong>1. Cheque Presentation Window (3 Months):</strong> Cheque uspar likhi gayi date se 3 mahine ke bheetar bank clearinghouse mein present kiya jana anivarya hai. 3 mahine ke baad present kiya gaya cheque stale mana jata hai aur uspar Section 138 lagu nahi hota.
                </p>
                <p>
                  <strong>2. Demand Notice Dispatch (30 Days from Memo):</strong> Bank ko drawee bank se Cheque Return Memo prapt hone ki tareekh se 30 calendar days ke bheetar borrower ko formal written legal notice bhejna padta hai.
                </p>
                <p>
                  <strong>3. Borrower Cure Period (15 Days from Notice Receipt):</strong> Legal notice borrower ko deliver hone ki tareekh se agle 15 dinon tak borrower ko &quot;cure period&quot; milta hai. In 15 dinon ke dauran bank koi court complaint file nahi kar sakta. Yeh 15 din borrower ke paas advocate ke zariye solid rejoinder bhejne ya dispute settle karne ka sabse shaktishali samay hota hai.
                </p>
                <p>
                  <strong>4. Court Complaint Filing Limitation (30 Days):</strong> Yadi 15 din ke cure period ke bheetar payment nahi hota ya notice ka koi compromise conclusion nahi nikalta, tab 16ve din se bank ke paas agle 30 dinon ke bheetar competent Magistrate Court mein complaint darj karne ka samay hota hai. Yadi bank is 30-day window ke baad complaint file karta hai, toh use Section 142(1)(b) ke tahat delay condonation ki rigorous application lagani padti hai.
                </p>
              </div>
            </section>

            {/* SECTION 4: Bank Accounting Dynamics & NPV Recovery Formula */}
            <section id="bank-accounting-and-npv-recovery-formula" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-4 h-4" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Bank Accounting Dynamics: NPA Provisioning, Court Friction &amp; Net Present Value (NPV)
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Commercial banks cheque bounce hone par criminal notice bhejte hain, lekin antatah wahi bank loan ko 40% se 60% ke bhari discount par settle karne ke liye raazi kyu ho jate hain? Iske peeche Reserve Bank of India (RBI) ke asset classification rules aur banking balance sheet ka financial mathematics hota hai. Jab koi borrower 90 din tak default rehta hai, toh RBI ke <strong>Income Recognition, Asset Classification and Provisioning (IRAC)</strong> norms ke antargat bank ko us loan ko Sub-Standard ya Doubtful NPA mark karna padta hai.
                </p>
                <p>
                  NPA ghoshit hone ke baad bank ko apne khud ke profits mein se 15% se lekar 100% tak provisioning reserve ke roop mein freeze rakhna padta hai. Iske alawa, Section 138 trial court mein litigation chalane ke liye bank ko private advocates ki appearance fees, procedural expenses, aur administrative costs uthane padte hain. Magistrate courts mein pending lakho cases ke bojh ke kaaran ek cheque bounce case ko trial se hokar final judgment tak pahunchne mein aamtaur par 3 se 5 saal ka samay lag jata hai.
                </p>
                <p>
                  Bank ki Credit Risk Committee aur Asset Recovery Branch hamesha <strong>Net Present Value (NPV)</strong> benchmark par recovery options ka aakalan karti hai:
                </p>
              </div>

              {/* NPV Valuation Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
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
                  Is mathematical model ke anusar, agle 4 saal court mein bhatakne aur advocate fees kharch karne ke baad anishchit recovery prapt karne ke mukable, bank ko aaj bina court friction ke One-Time Settlement (OTS) ke zariye 45%–55% discounted cash prapt karna balance sheet ke liye kahin adhik faydemand lagta hai. Isiliye, structured legal reply ke baad mamla litigation se nikal kar OTS compromise table par convert ho jata hai.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-cheque-bounce-workflow" className="mb-10 scroll-mt-24">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Statutory Defence Workflow
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Cheque Bounce Hone Par Kya Hoga: 4-Stage Legal Defence &amp; OTS Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg"
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
                      src="/images/infographics/cheque-bounce-hone-par-kya-hoga.jpg"
                      alt="Cheque Bounce Hone Par Kya Hoga 4-Stage Legal Defence Blueprint Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Action:</strong> 15-day notice window mein advocate rejoinder bhejein, court mein bail secure karein, aur Section 147 ke tehat OTS execute karein.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Consult SettleLoans Advocates &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6: Security Cheque Misuse Defence */}
            <section id="advocate-reply-security-cheque-defense" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Advocate Reply Drafting Strategy: Challenging Security Cheque Misuse &amp; Penal Figures
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab bank ka Section 138 demand notice aapke registered address par receive hota hai, toh sabse pehli aur sabse prabhavi legal action hoti hai 15 din ke bheetar ek formal <strong>Advocate Rejoinder</strong> dispatch karna. Ek seasoned banking advocate dwara draft kiya gaya rejoinder bank ki criminal complaint ko shuruat mein hi challenge kar deta hai aur future court proceedings ke liye borrower ke paksh mein certified documentary evidence create karta hai.
                </p>
                <p>
                  Ek robust legal notice reply mein char mukhya statutory grounds shamil kiye jate hain:
                </p>
                <p>
                  <strong>Ground 1: Misuse of Undated Blank Security Cheque.</strong> Reply mein yeh record par laya jata hai ki disputed cheque kisi crystallized debt ke bhugtan ke liye issue nahi kiya gaya tha, balki loan disbursement ke samay ek blank security instrument ke roop mein handover kiya gaya tha. Bank dwara bina prior ledger intimation ke cheque par arbitrary figures bharna breach of contract aur fiduciary trust ka ullanghan hai.
                </p>
                <p>
                  <strong>Ground 2: RBI Fair Lending Guidelines Violations.</strong> RBI ke Circular on <em>&apos;Penal Charges in Loan Accounts (2024)&apos;</em> ke tahat banks default par compound interest ya excessive penal surcharges nahi laga sakte. Reply mein bank se complete itemized statement of accounts aur ledger breakdown ki mang ki jati hai, jisse unke inflated figures legally expose ho jate hain.
                </p>
                <p>
                  <strong>Ground 3: Recording Bona Fide Hardship &amp; Absence of Mens Rea.</strong> Cheque bounce mamlon mein criminal culpability tabhi banti hai jab intentional fraud ya deception prove ho. Advocate reply mein borrower ki genuine economic hardship (jaise job loss, business downturn, ya medical crisis) ko record par lakar yeh establish kiya jata hai ki default unintentional tha.
                </p>
                <p>
                  <strong>Ground 4: Proposal for Amicable Debt Resolution.</strong> Reply ke conclusion mein Section 89 CPC aur Section 147 NI Act ke principles ka hawala dete hue bank ko mamla litigation mein kheenchne ke bajaye Alternative Dispute Resolution (ADR) ya Lok Adalat ke zariye mutually agreeable One-Time Settlement par resolve karne ka formal offer diya jata hai.
                </p>
              </div>
            </section>

            {/* SECTION 7: Magistrate Summons & Bail Process */}
            <section id="magistrate-court-bail-and-summons-process" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Gavel className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Magistrate Court Summons, Furnishing Bail, and Personal Exemption Under Section 205 CrPC
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Yadi notice ke baad bhi bank Judicial Magistrate Court mein Section 138 ke tahat Private Criminal Complaint file karta hai, toh court preliminary verification ke baad borrower ke naam par <strong>Court Summons</strong> dispatch karti hai. Summons aane ka matlab yeh bilkul nahi hota ki aapko jail bheja ja raha hai; summons ka matlab sirf yeh hai ki adalat aapko matter mein apna paksh rakhne ke liye nirdharit tareekh par bulawa bhej rahi hai.
                </p>
                <p>
                  Court Summons receive hone par nimnlikhit steps follow karne chahiye:
                </p>
                <p>
                  1. <strong>Never Evade or Ignore Court Summons:</strong> Summons ko ignore karne par Magistrate bailable warrant (BW) aur uske baad non-bailable warrant (NBW) jari kar sakta hai. Isliye court hearing date par vakalatnama file karke appear hona behad zaroori hai.
                </p>
                <p>
                  2. <strong>Instant Bail on First Appearance:</strong> Bailable offense hone ke kaaran aapka advocate adalat mein Section 436 CrPC ke tahat Bail Application lagata hai. Ek local surety (zamanti) ya nominal cash security jama karne par Magistrate usi waqt bail grant kar deta hai.
                </p>
                <p>
                  3. <strong>Application for Permanent Exemption (Section 205 CrPC):</strong> Yadi borrower kisi doosre shahar mein rehta hai, senior citizen hai, ya severely ill hai, toh uska advocate Section 205 CrPC ke antargat regular physical appearance se permanent exemption ki application file kar sakta hai, jisse advocate khud borrower ke behalf par hearings represent karta hai.
                </p>
              </div>
            </section>

            {/* SECTION 8: Compounding & OTS Case Withdrawal */}
            <section id="compounding-offence-section-147-case-withdrawal" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <HandCoins className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Compounding of Offence Under Section 147 NI Act: How Loan Settlement (OTS) Formally Withdraws Cases
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Section 138 Negotiable Instruments Act ki sabse anokhi visheshta iska <strong>Section 147</strong> hai, jo is offense ko &quot;Compoundable&quot; banata hai. Indian criminal law mein compounding ka matlab hota hai dono pakshon ke beech samjhauta (compromise) hona, jiske baad criminal case permanently khatam ho jata hai aur borrower par acquittal (doshmukt) ka legal effect padta hai. Supreme Court of India ne <em>Damodar S. Prabhu v. Sayed Babalal H. (2010)</em> tatha <em>M/s Meters and Instruments Pvt Ltd v. Kanchan Mehta (2018)</em> ke landmark faislon mein spasht kiya hai ki Section 138 cases ka primary objective compensation aur recovery hai, na ki criminal punishment.
                </p>
                <p>
                  Jab borrower SettleLoans ke legal counsel ke madhyam se bank ke sath One-Time Settlement (OTS) negotiate karta hai, toh mamla nimnlikhit disciplined procedure se withdraw karwaya jata hai:
                </p>
                <p>
                  <strong>Step 1: Sanction of Formal OTS Letter.</strong> Bank ke Zonal Credit Committee dwara official letterhead par settlement figure aur installment breakdown ke sath stamped OTS Sanction Letter issue kiya jata hai.
                </p>
                <p>
                  <strong>Step 2: Payment Execution into Loan Account.</strong> Agreed discounted settlement amount ka bhugtan sidhe designated bank loan account mein RTGS/NEFT ya demand draft ke dwara kiya jata hai.
                </p>
                <p>
                  <strong>Step 3: Filing Joint Application Under Section 147 NI Act.</strong> Full settlement payment hone ke baad, bank ka panel advocate aur borrower ka advocate Magistrate Court ke samaksh ek <em>Joint Compromise and Compounding Application</em> submit karte hain. Bank court ko formal statement deta hai ki unka pura claim satisfy ho chuka hai.
                </p>
                <p>
                  <strong>Step 4: Judicial Disposal &amp; No Dues Certificate.</strong> Magistrate court compounding application ko allow karke criminal complaint ko dismissed as settled ghoshit karti hai. Bank borrower ko stamped No Dues Certificate (NDC) issue karta hai aur CIBIL credit bureaus ko zero-balance status report karta hai.
                </p>
              </div>
            </section>

            {/* SECTION 9: Comparative Matrix Table */}
            <section id="comparative-legal-matrix-table" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileSpreadsheet className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Evaluation Matrix: Cheque Dishonour vs. Alternate Banking Recovery Mechanisms
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Lenders borrower ke default par alag-alag kanooni dastavez aur statutes ka prayog karte hain. Niche di gayi comparative matrix table aapko Section 138 Cheque Bounce, Section 25 PSSA NACH Bounce, Order 37 CPC Summary Suit, aur Arbitration Act ke beech ke kanooni antar aur defensive remedies ko spasht roop se darshati hai:
                </p>
              </div>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-slate-300 rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 font-bold">
                      <th className="p-3 text-left border-r border-slate-300">Recovery Mechanism</th>
                      <th className="p-3 text-left border-r border-slate-300">Governing Statute</th>
                      <th className="p-3 text-left border-r border-slate-300">Legal Classification</th>
                      <th className="p-3 text-left border-r border-slate-300">Mandatory Response Window</th>
                      <th className="p-3 text-left">Primary Defence &amp; Compounding Strategy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Physical Cheque Bounce</td>
                      <td className="p-3 border-r border-slate-200">Section 138 Negotiable Instruments Act</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">Quasi-Criminal / Bailable</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-red-700">15 Days from Notice Receipt</td>
                      <td className="p-3">Challenge security cheque misuse; compound offence under Section 147 via OTS</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Electronic NACH / e-Mandate Bounce</td>
                      <td className="p-3 border-r border-slate-200">Section 25 Payment &amp; Settlement Systems Act</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">Quasi-Criminal / Bailable</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-red-700">15 Days from Notice Receipt</td>
                      <td className="p-3">Establish electronic mandate technical errors &amp; bona fide financial hardship</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Civil Recovery Summary Suit</td>
                      <td className="p-3 border-r border-slate-200">Order 37 Code of Civil Procedure (CPC)</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-blue-700">Pure Civil Proceeding</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">10 Days for Leave to Defend</td>
                      <td className="p-3">File Leave to Defend challenging compound penal interest; seek ADR under Sec 89</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Sole Arbitrator Proceeding</td>
                      <td className="p-3 border-r border-slate-200">Arbitration &amp; Conciliation Act, 1996</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-purple-700">Alternate Dispute Forum</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">30 Days (Section 21)</td>
                      <td className="p-3">Object to unilateral arbitrator appointment under Perkins Eastman ruling</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">National Lok Adalat Settlement</td>
                      <td className="p-3 border-r border-slate-200">Legal Services Authorities Act, 1987</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-emerald-700">Statutory Compromise Forum</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-blue-700">Pre-Litigation Hearing Date</td>
                      <td className="p-3">Obtain 100% penal waiver; secure non-appealable final consent award</td>
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
                Frequently Asked Questions: Cheque Bounce Legal Defence &amp; Case Withdrawal
              </h2>

              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300" open>
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Cheque bounce hone par sabse pehla legal step kya hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Cheque bounce hone par bank ya payee ko 30 din ke bheetar Section 138 NI Act ke tahat ek formal statutory legal demand notice bhejna padta hai. Is notice mein borrower ko payment karne ke liye <strong>15 calendar days ka mandatory cure period</strong> diya jata hai. Yadi borrower is 15-day window mein experienced banking advocate ke madhyam se formal legal rejoinder bhejta hai, toh dispute record par aa jata hai aur bank ke premature criminal action par strong legal check lagta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya cheque bounce hone par police sidhe ghar aakar arrest kar sakti hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    <strong>Nahi, bilkul nahi. Section 138 NI Act ek non-cognizable aur bailable offense hai.</strong> Isme police ke paas sidhe FIR darj karne ya bina court ke non-bailable warrant ke kisi vyakti ko arrest karne ka koi statutory adhikar nahi hota. Bank ko pehle Judicial Magistrate Court mein private criminal complaint file karni padti hai, jiske baad court formal summons issue karti hai. Recovery agents ki police arrest ki dhamkiyan kanooni roop se baseless hoti hain.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Loan lete waqt diya gaya Security Cheque bounce hone par kya Section 138 lagu hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Supreme Court of India ke landmark judgments (jaise <em>Indus Airways</em> aur <em>Dashrathbhai Trikambhai Patel</em> cases) ke mutabiq, blank security cheque kisi existing &apos;legally enforceable debt&apos; ke bina directly criminal liability create nahi karta. Yadi bank ne bina loan ledger reconcile kiye ya arbitrary penal charges jodkar security cheque present kiya hai, toh ise advocate reply aur court trial mein solid legal defence banaya ja sakta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Section 138 notice aane ke baad 15 din ka samay kyu critical hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    15 din ka statutory period borrower ka <strong>&apos;cure period&apos;</strong> hota hai. Yadi notice receive hone ke 15 din ke andar koi reply nahi diya jata, toh bank court mein claim kar sakta hai ki borrower ne liability admit kar li hai. 15 din ke andar formal advocate rejoinder dispatch karne se lender ke claims actively dispute ho jate hain aur matter One-Time Settlement (OTS) table par shift ho jata hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Court summons aane par bail lene ka procedure kya hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Section 138 ek bailable offense hai, jiska matlab hai ki bail pana borrower ka statutory right hai. Court summons mein nirdharit tareekh par aapke advocate ke sath court mein pesh hokar ek simple Section 436 CrPC Bail Application aur local surety (ya nominal personal bond) submit karni hoti hai, jise Magistrate court usi din bina kisi detention ke instantly grant kar deti hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Section 147 NI Act ke tahat cheque bounce case compound kaise hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    <strong>Section 147 of the Negotiable Instruments Act</strong> cheque bounce offenses ko explicitly compoundable banata hai. Jab borrower aur bank ke beech out-of-court One-Time Settlement (OTS) tay ho jata hai aur settlement amount pay ho jata hai, toh court mein joint compromise application file karke criminal case ko 100% permanently withdraw aur close karwa liya jata hai, jisse borrower completely exonerate ho jata hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya cheque bounce case chalte waqt bank ke sath loan settlement ho sakta hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Haan, bilkul. Indian judiciary aur Lok Adalats Section 138 cases mein compromise settlement ko actively encourage karti hain. Bank litigation panels 3 se 5 saal lambi trial ke bajaye 40% se 60% discounted OTS amount lekar account close karne ko prefer karte hain. Settlement finalize hote hi bank court se case withdraw karne ka formal No Objection statement deta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Cheque bounce case mein maximum punishment ya penalty kya ho sakti hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Statute ke tehat Section 138 mein maximum punishment 2 saal tak ki imprisonment ya cheque amount ka double fine, ya dono ho sakta hai. Lekin reality mein, commercial banking loan defaults mein courts trial ke dauran mediation aur financial settlement ko hi priority deti hain. Timely advocate intervention se jail term ki naubat kabhi nahi aati.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya har cheque bounce par bank doosre shahar ya state mein case kar sakta hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Negotiable Instruments (Amendment) Act ke Section 142(2) ke mutabiq, cheque bounce case sirf usi local court jurisdiction mein file ho sakta hai jahan payee bank branch ka account maintain hota hai ya jahan borrower ne account maintain kiya hua hai. Malicious outstation litigation ko territorial jurisdiction objection ke zariye adalat mein challenge kiya ja sakta hai.
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
                    href="https://www.indiacode.nic.in/handle/123456789/2191"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Negotiable Instruments Act, 1881 – Section 138, 142, and 147 Statutory Compounding Provisions
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Reserve Bank of India (RBI) – Master Directions on Fair Practices Code &amp; Fair Lending Charges
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2042"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Payment and Settlement Systems Act, 2007 – Section 25 Electronic Clearing Mandate Regulations
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
                    National Legal Services Authority (NALSA) – National Lok Adalat Pre-Litigation Cheque Dispute Guidelines
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
                    RBI Integrated Ombudsman Scheme – Online Portal for Harassment &amp; Banking Grievances
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
                  href="/bank-ka-legal-notice-aane-par-kya-kare"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank Ka Legal Notice Aane Par Kya Kare
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank Sent Legal Notice: What to Do
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank FIR For Loan Default Reality Check
                </Link>
                <Link
                  href="/lok-adalat-me-loan-settlement-kaise-kare"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Lok Adalat Loan Settlement Process
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Stop Recovery Agent Threatening
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank One Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/how-to-verify-authentic-bank-settlement-letter"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Verify Bank Settlement Letter
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  CIBIL Score Improvement After Settlement
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
                Senior banking litigation advocate specializing in Section 138 Negotiable Instruments Act defence, bailable court protections, and formal debt compounding through structured One-Time Settlement (OTS).
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
              <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-red-500/30 mb-3">
                <ShieldAlert className="w-3 h-3" />
                <span>Urgent Section 138 Desk</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">
                Received a Cheque Bounce Notice?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the 15-day statutory window lapse. Connect with SettleLoans senior banking advocates to draft a formal rejoinder, secure court bail, and initiate OTS compounding.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Draft Section 138 Reply Now</span>
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
                  <span><strong>100% Bar Council &amp; NI Act Compliant:</strong> Legal rejoinders drafted by high court and criminal defence advocates.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Magistrate Court Summons Defence:</strong> Comprehensive bail assistance and personal appearance exemption filings.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Waiver of Penal Surcharges:</strong> Aggressive legal audit to eliminate compounding default charges.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Over ₹180+ Crores Settled:</strong> Defending 12,000+ borrowers against aggressive bank recovery.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
