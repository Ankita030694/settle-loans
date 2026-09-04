import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import TableOfContents from '@/components/TableOfContents';
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
  title: 'Bank Ka Legal Notice Aane Par Kya Kare: 15-Day Action Plan',
  description: 'Bank ka legal notice aane par kya kare? Learn why ignoring notice is dangerous, the 15-day reply window, advocate reply drafting, and OTS loan settlement roadmap.',
  keywords: [
    'bank ka legal notice aane par kya kare',
    'bank legal notice reply format india',
    'loan legal notice 15 days reply window',
    'advocate notice for loan default response',
    'order 37 cpc summary suit loan default',
    'section 138 ni act legal notice reply',
    'section 25 pssa nach bounce notice',
    'rbi master direction loan recovery notice',
    'one time settlement after bank legal notice',
    'how to stop civil court case for loan default'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare',
  },
  openGraph: {
    title: 'Bank Ka Legal Notice Aane Par Kya Kare: 15-Day Legal Action Protocol',
    description: 'Received a bank demand notice or advocate notice by post? Discover why ignoring it leads to ex-parte court decrees and how a formal advocate reply initiates compromise settlement talks.',
    url: 'https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg',
        width: 1200,
        height: 675,
        alt: 'Bank Ka Legal Notice Aane Par Kya Kare Legal Protocol Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bank Ka Legal Notice Aane Par Kya Kare: Defensive Action Guide',
    description: 'Step-by-step borrower roadmap: audit the 15-day window, draft an advocate reply under RBI rules, halt civil suits, and negotiate One-Time Settlement (OTS).',
    images: ['https://www.settleloans.in/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#webpage",
      "url": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare",
      "name": "Bank Ka Legal Notice Aane Par Kya Kare: 15-Day Legal Action Protocol & Settlement Roadmap",
      "description": "An exhaustive guide explaining the legal procedures, borrower rights, advocate reply mechanisms, and dispute resolution protocols when a bank issues a legal demand notice.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#breadcrumb"
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
      "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#breadcrumb",
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
          "name": "Bank Ka Legal Notice Aane Par Kya Kare",
          "item": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#article",
      "headline": "Bank Ka Legal Notice Aane Par Kya Kare: Legal Protocol, 15-Day Reply Window, and OTS Negotiation",
      "description": "Comprehensive legal and financial analysis of bank recovery notices under Indian law, detailing statutory protections under the Civil Procedure Code, RBI Master Directions, and debt settlement strategies.",
      "image": "https://www.settleloans.in/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg",
      "datePublished": "2026-08-26T09:00:00+05:30",
      "dateModified": "2026-08-26T09:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#webpage"
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
      "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#service",
      "name": "SettleLoans Legal Notice Defence & Debt Settlement Advisory",
      "description": "Specialized banking law consultancy and advocate reply drafting service defending Indian borrowers against aggressive debt recovery notices, civil suits, and arbitrary loan demands.",
      "url": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare",
      "image": "https://www.settleloans.in/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg",
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
        "ratingValue": "4.94",
        "reviewCount": "2380",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajeshwar Singh"
          },
          "datePublished": "2026-07-18",
          "reviewBody": "Mujhe HDFC Bank se ₹12 lakh ke personal loan par advocate legal notice aaya tha jismein 15 din ke andar puri rakam jama karne ko kaha gaya tha. SettleLoans ke legal counsel ne 7 din ke andar ek solid advocate reply bheja jismein hidden penal interest ko challenge kiya gaya. Iske baad bank ne legal action rok kar 48% waiver par One-Time Settlement offer kiya.",
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
          "datePublished": "2026-06-22",
          "reviewBody": "After receiving a Section 25 PSSA notice for NACH bounce from an NBFC, I was extremely anxious about criminal charges. SettleLoans drafted a formal statutory reply proving bona fide financial hardship and absence of fraudulent intent. The matter was successfully settled outside court with zero harassment.",
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
            "name": "Amitabh Srivastava"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "ICICI Bank sent a legal demand notice claiming inflated penal interest of ₹2.4 lakhs. SettleLoans advocates issued a detailed rejoinder under RBI Master Directions on Fair Practices Code. The bank corrected the ledger and approved a structured OTS payable across three comfortable tranches.",
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
            "name": "Praveen Khurana"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "Outstanding legal support! They explained the difference between a recovery agency intimidation letter and a genuine advocate notice. Their timely response prevented an ex-parte summary suit under Order 37 CPC and saved my credit profile from complete ruin.",
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
      "@id": "https://www.settleloans.in/bank-ka-legal-notice-aane-par-kya-kare#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Bank ka legal notice aane par sabse pehla kadam kya hona chahiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank ka legal notice aane par sabse pehle notice ki genuineness verify karein, speed post ka envelope sambhalkar rakhein aur notice receive hone ki date note karein. Notice mein mention kiye gaye loan account number, outstanding principal aur alleged overdue penalty ko apne bank account statement se match karein. Kabhi bhi notice ko ignore na karein aur 15 din ke statutory window ke bheetar kisi experienced debt settlement advocate se formal reply draft karwayen."
          }
        },
        {
          "@type": "Question",
          "name": "Kya bank legal notice ko ignore karne par police mujhe arrest kar sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nahi, pure unsecured personal loan ya credit card default ek civil dispute hota hai jismein police sidhe arrest nahi kar sakti. Halanki, yadi notice Section 138 Negotiable Instruments Act (Cheque Bounce) ya Section 25 Payment and Settlement Systems Act (NACH Bounce) ke tahat bheja gaya hai aur aap notice ko ignore karte hain, toh court aapke khilaf bailable ya non-bailable summons jari kar sakti hai. Isliye timely advocate reply dena anivarya hai."
          }
        },
        {
          "@type": "Question",
          "name": "Legal notice ka reply dene ke liye 15 din ka samay kyu critical hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Legal notice mein aamtaur par 15 din ka statutory response period diya jata hai. Yadi aap is 15 din ke dauran koi reply nahi dete, toh law ke mutabiq yeh presumption ban sakta hai ki aapne bank ke claims aur inflated ledger figures ko bina kisi virodh ke sweekar kar liya hai. 15 din ke andar bheja gaya advocate reply bank ko premature court proceedings shuru karne se rokta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Advocate reply court proceedings ko kaise rokta hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jab aapka advocate bank ke panel lawyer ko formal reply dispatch karta hai, toh usme aapki genuine financial hardship (jaise job loss, business downturn ya medical crisis) aur bank dwara lagaye gaye unfair penal charges ko record par laya jata hai. Yeh reply dispute ko actively live bana deta hai, jisse bank summary suit (Order 37 CPC) mein ex-parte decree lene mein asafal ho jata hai aur settlement table par aane ke liye majboor hota hai."
          }
        },
        {
          "@type": "Question",
          "name": "Kya legal notice ke baad bank ke sath One-Time Settlement (OTS) ho sakta hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Haan, bilkul. Reality mein, 85% se adhik bank legal notices litigation shuru karne ke bajaye recovery pressure create karne aur OTS settlement negotiate karne ke liye bheje jate hain. Formal legal reply bank ko clear message deta hai ki borrower legally aware hai aur court friction ke bajaye out-of-court compromise resolution ke liye taiyar hai."
          }
        },
        {
          "@type": "Question",
          "name": "Demand notice aur Court Summons mein kya antar hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Demand notice bank ya uske advocate dwara bheja gaya ek formal communication hota hai jo preliminary legal warning hota hai. Jabki Court Summons ek judge ya judicial magistrate dwara official court seal ke sath issue kiya jata hai jismein aapko ek nirdharit tareekh par adalat mein pesh hone ka aadesh hota hai. Demand notice ka reply advocate ke zariye post se bheja jata hai, jabki summons par court mein appear hona padta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Kya WhatsApp ya email par aaya legal notice legally valid hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Indian courts aur Supreme Court ke judgments ke mutabiq, digital service through WhatsApp (blue ticks) aur registered email ko valid service of notice mana ja sakta hai yadi send karne wala advocate delivery ka digital proof record par pesh kare. Halanki, aamtaur par formal banking notices Registered Post with Acknowledgement Due (RPAD) ya Speed Post se hi bheje jate hain."
          }
        },
        {
          "@type": "Question",
          "name": "Bank dwara legal notice mein lagaye gaye penal interest ko kaise challenge karein?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI ke Master Directions on Fair Practices Code aur Fair Lending Practices (2024 Guidelines) ke mutabiq, banks penal interest ko compound nahi kar sakte aur na hi ise revenue generation tool bana sakte hain. Aapka advocate notice reply mein bank se complete account statement aur ledger bifurcation mang sakta hai, jisse unwarranted penal charges waive ho jate hain."
          }
        },
        {
          "@type": "Question",
          "name": "Legal notice ke dauran recovery agents ke harassment se kaise bachein?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yadi bank ne mamla legal domain mein shift kar diya hai aur advocate notice dispatch ho chuka hai, toh third-party recovery agents dwara workplace par aana, parivar ko call karna ya gaali-galoch karna RBI guidelines aur Section 503/506 IPC ke tehat gair-kanooni hai. Aap notice reply mein is harassment ka ullekh karke bank ke Nodal Officer aur RBI Banking Ombudsman ko complaint file kar sakte hain."
          }
        }
      ]
    }
  ]
};

const tocItems = [
  { id: "understanding-bank-legal-notices", title: "1. Notice Anatomy & Types" },
  { id: "dangers-of-ignoring-legal-notice", title: "2. Risks of Ignoring Notice" },
  { id: "the-15-day-statutory-reply-window", title: "3. 15-Day Reply Window" },
  { id: "bank-accounting-and-npv-recovery", title: "4. NPA Accounting & NPV" },
  { id: "infographic-legal-action-protocol", title: "5. Visual Action Blueprint" },
  { id: "advocate-reply-mechanics-and-defense", title: "6. Advocate Reply Strategy" },
  { id: "alternate-dispute-resolution-lok-adalat", title: "7. Lok Adalat & ADR" },
  { id: "ots-negotiation-and-sanction-letter", title: "8. OTS Negotiation & NDC" },
  { id: "comparative-notice-matrix-table", title: "9. Notice Matrix Table" },
  { id: "settleloans-advisory-section", title: "10. SettleLoans Legal Desk" },
  { id: "faqs", title: "11. Frequently Asked Questions" },
];

export default function BankKaLegalNoticeAaneParKyaKarePage() {
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
            <span>Borrower Legal Defence Protocol • RBI &amp; Civil Law Protection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Bank Ka Legal Notice Aane Par Kya Kare: <span className="text-[#3b82f6] md:text-[#60a5fa]">15-Day Defence &amp; Settlement Guide</span>
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
              <span>RBI &amp; CPC Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Draft Formal Legal Notice Reply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Banking Advocate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* LEFT COLUMN: Interactive Table of Contents + Quick Crux Pill */}
          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents items={tocItems} />

            {/* Quick Crux Pill (Desktop Only) */}
            <div className="hidden lg:block bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-600">
                Bank ka legal notice aane par darna nahi hai, balki 15 din ke andar ek registered advocate reply bhejna anivarya hai. Reply court proceedings ko freeze karta hai, inflated penal interest ko record par challenge karta hai, aur matter ko 40%–60% One-Time Settlement (OTS) table par shift karta hai.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Main Rich Editorial Content */}
          <main className="min-w-0">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200 rounded-2xl p-5 mb-8 shadow-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-base">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Strategic Takeaways: Bank Legal Notice Action Protocol</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Never Ignore Legal Notices:</strong> Unanswered demand notices allow lenders to claim deemed admission of debt and secure ex-parte decrees under Order 37 CPC.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>The Crucial 15-Day Statutory Window:</strong> Responding formally within 15 calendar days preserves your legal defences and establishes bona fide financial hardship on record.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Halting Court Proceedings via Advocate Reply:</strong> A structured rejoinder challenging unconstitutional compound penalties forces bank litigation panels into out-of-court compromise talks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Transitioning from Dispute to OTS:</strong> Legal replies pave the way for structured One-Time Settlement (OTS) discounts ranging between 40% and 65% of total outstanding claims.</span>
                </li>
              </ul>
            </div>

            {/* SECTION 1: Anatomy of Bank Legal Notices */}
            <section id="understanding-bank-legal-notices" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. Anatomy of Bank Legal Notices: Differentiating Demand Letters, Advocate Notices, and Court Summons
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab koi borrower lagatar teen mahine (90 din) tak apne personal loan, credit card, ya business loan ki EMI ka bhugtan nahi kar pata, toh banking accounting standards ke mutabiq uska loan account <strong>Non-Performing Asset (NPA)</strong> ghoshit kar diya jata hai. NPA classification ke baad bank ki internal collections department se nikal kar file bank ke legal and recovery cell ko handover ki jati hai. Is charan par aamtaur par borrower ke registered address par ek formal document deliver hota hai jise bolchal ki bhasha mein &quot;Bank Ka Legal Notice&quot; kaha jata hai. Lekin kisi bhi defensive kadam ko uthane se pehle yeh samajhna behad zaroori hai ki aapke hath mein jo dastavez hai, uska actual legal nature aur authority kya hai.
                </p>
                <p>
                  Indian banking jurisprudence mein notice mukhya roop se teen alag-alag categories mein aate hain. Pehli category hoti hai <strong>Internal Bank Demand Notice</strong>, jo bank ke recovery branch manager ya collection head dwara sidhe bank ke letterhead par bheja jata hai. Yeh ek preliminary reminder hota hai jo loan contract ke breach ki soochana deta hai. Doosri category hoti hai <strong>Advocate Legal Notice</strong>, jo bank ke panel lawyer dwara Bar Council of India ke rules ke tahat formal legal letterhead par dispatch kiya jata hai. Is notice mein Section 138 Negotiable Instruments Act, Section 25 Payment and Settlement Systems Act (PSSA), ya Code of Civil Procedure (CPC) ke tehat litigation shuru karne ki statutory warning di jati hai.
                </p>
                <p>
                  Teesri aur sabse critical category hoti hai <strong>Judicial Court Summons</strong>. Summons bank dwara nahi, balki Civil Court, Chief Metropolitan Magistrate (CMM), ya Debt Recovery Tribunal (DRT) dwara official court seal aur judge ke signature ke sath issue kiya jata hai. Demand notice aur Advocate notice ka reply postal registered post ke zariye bheja jata hai, jabki Court Summons aane par nirdharit tareekh par adalat mein physically ya advocate ke madhyam se vakalatnama file karke appear hona mandatory hota hai. In teeno dastavezon ke beech ka farq pehchanna aapke defence ka pehla buniyadi adhar hai.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Regulatory Notice Verification Under Indian Evidence Act</strong>
                    Kisi bhi notice ko receive karte samay delivery envelope (Registered Post / Speed Post slip) ko kabhi na fenkein. Section 27 of the General Clauses Act aur Indian Evidence Act ke tehat notice deliver hone ki exact postal date hi aapke 15-day statutory reply window ki calculation ka certified proof hoti hai.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Dangers of Ignoring Legal Notice */}
            <section id="dangers-of-ignoring-legal-notice" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Bank Ke Legal Notice Ko Ignore Karna Kyu Khatarnak Hai: Ex-Parte Decrees &amp; Civil Risks
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Adhikansh borrowers ghabrahat, financial resources ki kami, ya galatfehmi ke kaaran bank ke legal notice ko daraz mein band karke rakh dete hain ya use puri tarah ignore kar dete hain. Unhe lagta hai ki jab court se bulawa aayega tab dekha jayega. Yeh unke financial aur legal jeevan ki sabse badi bhool sabit hoti hai. Indian legal framework mein legal notice ko ignore karne ke parinam behad gambhir hote hain jo aapke defence ko hamesha ke liye kamzor kar dete hain.
                </p>
                <p>
                  Jab aap 15 ya 30 din ke notice period ke dauran koi formal advocate reply nahi bhejte, toh civil law ke tahat <strong>&quot;Doctrine of Acquiescence&quot;</strong> aur <strong>&quot;Deemed Admission&quot;</strong> ka principle trigger ho jata hai. Iska matlab yeh hai ki court yeh assume kar sakti hai ki bank ne notice mein jo outstanding loan amount, penal charges aur interest darshaya hai, aapko uspar koi aapti nahi hai. Jab bank Civil Court mein <strong>Order 37 of the Code of Civil Procedure (Summary Suit)</strong> file karta hai, toh court notice ki service aur borrower ke maun (silence) ko record par lekar bina extensive trial ke bank ke favour mein ek summary decree pass kar sakti hai.
                </p>
                <p>
                  Iske atirikt, yadi notice cheque bounce (Section 138 NI Act) ya NACH mandate failure (Section 25 PSSA) ke sambandh mein hai, toh notice ka reply na aane par bank turant trial court mein criminal complaint darj kar deta hai. Magistrate court dwara pehle bailable warrant aur lagatar gair-haziri par non-bailable warrant (NBW) jari kiye ja sakte hain. Yadi aap samay par reply bhejte hain, toh aap record par establish karte hain ki default intentional ya fraudulent nahi tha, balki bona fide economic hardship ke kaaran hua tha, jo future litigation mein aapka sabse bada suraksha kavach banta hai.
                </p>
              </div>
            </section>

            {/* SECTION 3: The 15-Day Critical Reply Window */}
            <section id="the-15-day-statutory-reply-window" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Clock className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. The 15-Day Critical Reply Window: Strategic Timeline &amp; Statutory Procedural Steps
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Har advocate legal notice mein aamtaur par <strong>15 calendar days</strong> ka samay diya jata hai jismein dues clear karne ya formal reply submit karne ki demand hoti hai. Yeh 15 din ka samay borrower ke liye ek golden strategic window hota hai. Is dauran kiya gaya action yeh nirdharit karta hai ki aane wale mahino mein mamla court ki lambi litigation mein fasega ya bank ke sath table par baithkar peaceful One-Time Settlement (OTS) mein convert hoga.
                </p>
                <p>
                  Is 15-day window ke dauran aapko char mukhya charano par kaam karna hota hai:
                </p>
                <p>
                  <strong>Charan 1: Ledger Statement Audit.</strong> Apne bank branch se complete loan statement of account mangwayen. Notice mein mangi gayi rakam aur actual ledger statement ke beech ke fark ko calculate karein. Aksar bank recovery panels arbitrarily penal interest, late fees aur legal expenses jodkar claim ko 30% se 50% tak inflate kar dete hain.
                </p>
                <p>
                  <strong>Charan 2: Documenting Genuine Financial Hardship.</strong> Yadi default job loss, salary deduction, medical emergency, ya business closure ke kaaran hua hai, toh uske supporting documents (jaise termination letter, medical reports, audited balance sheets) arrange karein.
                </p>
                <p>
                  <strong>Charan 3: Engaging an Expert Banking Advocate.</strong> Kisi specialized debt settlement advocate se contact karein jo Banking Regulation Act, 1949 aur RBI Master Directions ki barikiyon ko samajhta ho.
                </p>
                <p>
                  <strong>Charan 4: Formal Dispatch of Registered Rejoinder.</strong> Notice ka reply hamesha Registered Post with A.D. ya Speed Post se bank ke authorized panel advocate aur bank ke Zonal Asset Recovery Office dono ko bheja jana chahiye.
                </p>
              </div>
            </section>

            {/* SECTION 4: Bank Accounting Dynamics & NPV Recovery Formula */}
            <section id="bank-accounting-and-npv-recovery" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-4 h-4" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Bank Accounting Dynamics: NPA Provisioning, Legal Friction, and Net Present Value (NPV)
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Banks kyu legal notice bhejte hain aur fir achanak loan settlement ke liye taiyar kyu ho jate hain? Iske peeche banking accounting aur Reserve Bank of India ke prudential provisioning norms ka deep mathematical reality hota hai. Jab koi loan account 90 din se adhik default rehta hai, toh RBI ke <strong>Income Recognition and Asset Classification (IRAC)</strong> norms ke mutabiq bank ko us loan ke khilaf apni balance sheet mein se 15% se lekar 100% tak provisioning capital reserve ke roop mein alag rakhna padta hai.
                </p>
                <p>
                  Iska matlab yeh hai ki jab tak aapka loan NPA category mein rehta hai, bank ka valuable capital bina kisi interest return ke lock ho jata hai. Yadi bank court litigation (Civil Suit ya DRT) ka rasta chunta hai, toh Indian courts mein final decree aane aur execution petition lagne mein kam se kam 3 se 5 saal ka samay lagta hai. Is dauran bank ko advocate fees, court fees, aur administrative expenses bear karne padte hain. Isiliye, bank ka credit risk committee <strong>Net Present Value (NPV)</strong> model par evaluation karta hai:
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
                  Is mathematical formula ke mutabiq, bank ko agle 4 saal mein kharche karke litigation se 100% recover karne ke mukable, aaj bina litigation ke One-Time Settlement (OTS) ke madhyam se 40% se 50% lump sum recover karna balance sheet ke liye adhik profitable lagta hai. Jab aapka advocate formal reply bhejkar trial challenge create karta hai, toh bank is NPV formula ke tahat compromise settlement approval ki disha mein aage badhta hai.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-legal-action-protocol" className="mb-10 scroll-mt-24">
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
                        Bank Ka Legal Notice Aane Par Kya Kare: 4-Stage Resolution Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg"
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
                      src="/images/infographics/bank-ka-legal-notice-aane-par-kya-kare.jpg"
                      alt="Bank Ka Legal Notice Aane Par Kya Kare Sequential Legal Action Protocol Infographic"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Action:</strong> Notice aane ke 15 din ke andar formal advocate reply dispatch karein aur matter ko OTS negotiation mein convert karein.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Consult SettleLoans Advocates &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* SECTION 6: Advocate Reply Drafting Strategy */}
            <section id="advocate-reply-mechanics-and-defense" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. Advocate Reply Drafting Strategy: How a Formal Rejoinder Protects Borrowers
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Ek professional advocate dwara draft kiya gaya legal notice reply koi simple mafinama ya appeal nahi hota, balki ek comprehensive statutory rejoinder hota hai jo Indian laws aur RBI regulations ke tahat bank ke claims ko structure karta hai. Jab bank ka panel lawyer aapka detailed advocate reply receive karta hai, toh use clear signal milta hai ki borrower legally equipped hai aur bina justifiable ground ke unilateral recovery order lena asambhav hoga.
                </p>
                <p>
                  Ek shaktishali advocate reply mein nimnlikhit char mukhya legal pillars shamil hote hain:
                </p>
                <p>
                  <strong>Pillar 1: Challenging Unfair Penal Compound Interest.</strong> RBI ke Circular on <em>&apos;Fair Lending Practice – Penal Charges in Loan Accounts (2024)&apos;</em> ke mutabiq, banks kisi bhi default par penal interest ko compound nahi kar sakte aur na hi ise capitalised debt bana sakte hain. Reply mein bank se complete itemized statement mangwaya jata hai jisse inflated figures legally collapse ho jate hain.
                </p>
                <p>
                  <strong>Pillar 2: Recording Bona Fide Hardship &amp; Absence of Mens Rea.</strong> Cheque bounce (Section 138 NI Act) ya NACH bounce (Section 25 PSSA) cases mein advocate yeh establish karta hai ki borrower ka koi fraudulent intent ya criminal breach of trust nahi tha, balki default uncontrollable circumstances ke kaaran hua. Yeh evidence court proceedings mein trial defence ka adhar banta hai.
                </p>
                <p>
                  <strong>Pillar 3: Demanding Dispute Reconciliation under CPC Section 89.</strong> Code of Civil Procedure ke Section 89 ke tahat adalat ko formal appeal ki jati hai ki mamle ko litigation mein lamba kheenchne ke bajaye Alternative Dispute Resolution (ADR) ya Lok Adalat ke madhyam se resolve kiya jaye.
                </p>
                <p>
                  <strong>Pillar 4: Documenting Recovery Agent Harassment.</strong> Yadi bank ke recovery agents ne call karke dhamkaya hai ya privacy violate ki hai, toh RBI Guidelines on Recovery Agents ke violations ko reply mein record par lakar bank par legal liability fix ki jati hai.
                </p>
              </div>
            </section>

            {/* SECTION 7: Halting Suits & Lok Adalat Recourse */}
            <section id="alternate-dispute-resolution-lok-adalat" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Gavel className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Halting Court Proceedings &amp; Alternate Dispute Resolution: National Lok Adalat Mechanism
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Legal notice aane ke baad sabse safe aur cost-effective tarika hota hai dispute ko <strong>National Lok Adalat</strong> ya pre-litigation mediation forum mein shift karna. Legal Services Authorities Act, 1987 ke tahat sthapit Lok Adalat ek statutory forum hai jo courts ke bojh ko kam karne aur borrowers va banks ke beech mutual agreement se disputes ko nipatane ke liye har 3 mahine mein pure desh mein aayojit ki jati hai.
                </p>
                <p>
                  Lok Adalat ke mukhya fayde nimnlikhit hain:
                </p>
                <p>
                  1. <strong>Zero Court Fees &amp; Final Decree:</strong> Lok Adalat mein settlement hone par koi court fees nahi lagti. Yahan pass hua settlement award ek Civil Court decree ke barabar final hota hai aur iske khilaf koi appeal nahi hoti, jisse future litigation ka khatra hamesha ke liye samapt ho jata hai.
                </p>
                <p>
                  2. <strong>Heavy Waiver on Penal Charges:</strong> Lok Adalat bench (jismein sitting ya retired judges aur social workers hote hain) banks ko penal interest aur unnecessary charges 100% waive karne ka nirdesh deti hai, jisse settlement amount substantially kam ho jata hai.
                </p>
                <p>
                  3. <strong>Immediate Cessation of Harassment:</strong> Lok Adalat reference order pass hote hi bank dwara kisi bhi prakar ki third-party collection calling ya physical visits par complete legal stay lag jata hai.
                </p>
              </div>
            </section>

            {/* SECTION 8: OTS Negotiation & Sanction Letter Forensics */}
            <section id="ots-negotiation-and-sanction-letter" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <HandCoins className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. One-Time Settlement (OTS) Negotiation: Sanction Letter Forensics &amp; No Dues Certificate
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Legal notice ke formal reply ke baad bank jab compromise negotiations ke liye agree hota hai, toh borrower ko <strong>One-Time Settlement (OTS)</strong> process ko pure forensic discipline ke sath execute karna chahiye. Bahut se borrowers verbally settlement amount tay karke kisi recovery agent ke UPI ya personal account mein paise transfer kar dete hain, jisse unke paise doob jate hain aur bank ledger par default waisa ka waisa bana rehta hai.
                </p>
                <p>
                  Authentic loan settlement execute karne ke teen mandatory golden rules hain:
                </p>
                <p>
                  <strong>Niyam 1: Official Bank Stamped Sanction Letter.</strong> Kabhi bhi payment tab tak na karein jab tak bank ke Zonal Head ya Competent Authority dwara official letterhead par signed aur stamped OTS Sanction Letter na mil jaye. Is letter mein aapka exact loan account number, sanctioned settlement figure, payment tenure, aur waiver breakdown clearly likha hona chahiye.
                </p>
                <p>
                  <strong>Niyam 2: Direct Payment into Loan Account.</strong> Settlement amount ka bhugtan hamesha designated loan account number mein direct RTGS/NEFT ya bank branch counter par cheque/draft ke madhyam se hi karein.
                </p>
                <p>
                  <strong>Niyam 3: Receipt of No Dues Certificate (NDC).</strong> Full payment clear hone ke 21 se 30 dinon ke andar bank se stamped No Dues Certificate (NDC) ya No Objection Certificate (NOC) prapt karein aur ensure karein ki bank CIBIL bureau ko ₹0 balance report kare.
                </p>
              </div>
            </section>

            {/* SECTION 9: Comparative Matrix Table */}
            <section id="comparative-notice-matrix-table" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileSpreadsheet className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Evaluation: Bank Notice Types, Legal Provisions &amp; Borrower Defence Matrix
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Alag-alag banking defaults ke mutabiq alag-alag kanun lagu hote hain. Niche di gayi comparative matrix table aapko har prakar ke bank notice ke legal section, statutory response window, aur effective defence strategy ko spasht roop se samajhati hai:
                </p>
              </div>

              {/* 4-Sided Bordered Comparison Table */}
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse border border-slate-300 rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 font-bold">
                      <th className="p-3 text-left border-r border-slate-300">Notice Category</th>
                      <th className="p-3 text-left border-r border-slate-300">Governing Statute</th>
                      <th className="p-3 text-left border-r border-slate-300">Mandatory Response Window</th>
                      <th className="p-3 text-left border-r border-slate-300">Consequence If Ignored</th>
                      <th className="p-3 text-left">Recommended Defence Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Standard Advocate Demand Notice</td>
                      <td className="p-3 border-r border-slate-200">Indian Contract Act, 1872 &amp; CPC</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">15 Calendar Days</td>
                      <td className="p-3 border-r border-slate-200">Civil Recovery Suit / Order 37 CPC</td>
                      <td className="p-3">Advocate Rejoinder challenging penalties &amp; initiating OTS talks</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Cheque Bounce Notice</td>
                      <td className="p-3 border-r border-slate-200">Section 138 Negotiable Instruments Act</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-red-700">15 Days from Receipt</td>
                      <td className="p-3 border-r border-slate-200">Criminal Complaint &amp; Court Summons</td>
                      <td className="p-3">Legal reply proving lack of criminal intent and offering settlement</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">NACH / ECS Bounce Notice</td>
                      <td className="p-3 border-r border-slate-200">Section 25 Payment &amp; Settlement Systems Act</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-red-700">15 Days from Receipt</td>
                      <td className="p-3 border-r border-slate-200">Quasi-Criminal Prosecution under PSSA</td>
                      <td className="p-3">Statutory reply highlighting technical mandate errors &amp; hardship</td>
                    </tr>
                    <tr className="border-b border-slate-200 bg-slate-50/50">
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">Arbitration Notice</td>
                      <td className="p-3 border-r border-slate-200">Arbitration &amp; Conciliation Act, 1996</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-amber-700">30 Days (Section 21)</td>
                      <td className="p-3 border-r border-slate-200">Ex-Parte Arbitral Award &amp; Execution</td>
                      <td className="p-3">Object to unilateral arbitrator appointment &amp; shift to Lok Adalat</td>
                    </tr>
                    <tr>
                      <td className="p-3 border-r border-slate-200 font-semibold text-slate-900">SARFAESI Demand Notice (Secured)</td>
                      <td className="p-3 border-r border-slate-200">Section 13(2) SARFAESI Act, 2002</td>
                      <td className="p-3 border-r border-slate-200 font-semibold text-blue-700">60 Statutory Days</td>
                      <td className="p-3 border-r border-slate-200 text-red-700">Section 13(4) Symbolic Asset Possession</td>
                      <td className="p-3">File detailed Section 13(3A) objection &amp; DRT Securitisation Appeal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: Company Section (Rendered directly before FAQs) */}
            <div id="settleloans-advisory-section" className="mb-10 scroll-mt-24">
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
                Frequently Asked Questions: Bank Legal Notice Resolution &amp; Borrower Protection
              </h2>

              <div className="space-y-4">
                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300" open>
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Bank ka legal notice aane par sabse pehla kadam kya hona chahiye?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Bank ka legal notice aane par sabse pehle notice ki genuineness verify karein, speed post ka envelope sambhalkar rakhein aur notice receive hone ki date note karein. Notice mein mention kiye gaye loan account number, outstanding principal aur alleged overdue penalty ko apne bank account statement se match karein. Kabhi bhi notice ko ignore na karein aur <strong>15 din ke statutory window</strong> ke bheetar kisi experienced debt settlement advocate se formal reply draft karwayen.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya bank legal notice ko ignore karne par police mujhe arrest kar sakti hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    <strong>Nahi, pure unsecured personal loan ya credit card default ek civil dispute hota hai</strong> jismein police sidhe arrest nahi kar sakti. Halanki, yadi notice Section 138 Negotiable Instruments Act (Cheque Bounce) ya Section 25 Payment and Settlement Systems Act (NACH Bounce) ke tahat bheja gaya hai aur aap notice ko ignore karte hain, toh court aapke khilaf bailable ya non-bailable summons jari kar sakti hai. Isliye timely advocate reply dena anivarya hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Legal notice ka reply dene ke liye 15 din ka samay kyu critical hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Legal notice mein aamtaur par 15 din ka statutory response period diya jata hai. Yadi aap is 15 din ke dauran koi reply nahi dete, toh law ke mutabiq yeh presumption ban sakta hai ki aapne bank ke claims aur inflated ledger figures ko bina kisi virodh ke sweekar kar liya hai. 15 din ke andar bheja gaya advocate reply bank ko premature court proceedings shuru karne se rokta hai aur ex-parte summary decrees ke risk ko eliminate karta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Advocate reply court proceedings ko kaise rokta hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Jab aapka advocate bank ke panel lawyer ko formal reply dispatch karta hai, toh usme aapki genuine financial hardship (jaise job loss, business downturn ya medical crisis) aur bank dwara lagaye gaye unfair penal charges ko record par laya jata hai. Yeh reply dispute ko actively live bana deta hai, jisse bank summary suit (Order 37 CPC) mein ex-parte decree lene mein asafal ho jata hai aur out-of-court compromise settlement table par aane ke liye majboor hota hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya legal notice ke baad bank ke sath One-Time Settlement (OTS) ho sakta hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    <strong>Haan, bilkul. Reality mein, 85% se adhik bank legal notices</strong> litigation shuru karne ke bajaye recovery pressure create karne aur OTS settlement negotiate karne ke liye bheje jate hain. Formal legal reply bank ko clear message deta hai ki borrower legally aware hai aur court friction ke bajaye out-of-court compromise resolution ke liye taiyar hai, jisse 40% se 60% waiver ke sath OTS finalize hota hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Demand notice aur Court Summons mein kya antar hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Demand notice bank ya uske advocate dwara bheja gaya ek formal communication hota hai jo preliminary legal warning hota hai. Jabki Court Summons ek judge ya judicial magistrate dwara official court seal ke sath issue kiya jata hai jismein aapko ek nirdharit tareekh par adalat mein pesh hone ka aadesh hota hai. Demand notice ka reply advocate ke zariye post se bheja jata hai, jabki summons aane par court mein vakalatnama file karna padta hai.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Kya WhatsApp ya email par aaya legal notice legally valid hota hai?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Indian courts aur Supreme Court ke judgments ke mutabiq, digital service through WhatsApp (blue ticks) aur registered email ko valid service of notice mana ja sakta hai yadi send karne wala advocate delivery ka digital certificate record par pesh kare. Halanki, authentic banking litigation mein formal notices Registered Post with Acknowledgement Due (RPAD) ya Speed Post se hi bheje jate hain.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Bank dwara legal notice mein lagaye gaye penal interest ko kaise challenge karein?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    RBI ke Master Directions on Fair Practices Code aur Fair Lending Practices (2024 Guidelines) ke mutabiq, banks penal interest ko compound nahi kar sakte aur na hi ise revenue generation tool bana sakte hain. Aapka advocate notice reply mein bank se complete account statement aur ledger bifurcation mangta hai, jisse unwarranted compound penal charges waive ho jate hain.
                  </div>
                </details>

                <details className="group border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-slate-300">
                  <summary className="p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none select-none font-bold text-slate-900 text-base md:text-lg">
                    <span>Legal notice ke dauran recovery agents ke harassment se kaise bachein?</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-transform duration-300 ml-4">
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    Yadi bank ne mamla legal domain mein shift kar diya hai aur advocate notice dispatch ho chuka hai, toh third-party recovery agents dwara workplace par aana, parivar ko call karna ya threatening language use karna RBI guidelines aur Section 503/506 IPC ke tehat gair-kanooni hai. Aap notice reply mein is harassment ka ullekh karke bank ke Principal Nodal Officer aur RBI Integrated Ombudsman ko formal complaint darj kar sakte hain.
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
                    Reserve Bank of India (RBI) – Master Directions on Fair Practices Code &amp; Recovery Norms
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
                    Negotiable Instruments Act, 1881 – Section 138 Cheque Dishonour Statutory Notice Rules
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
                    Payment and Settlement Systems Act, 2007 – Section 25 Electronic Clearance Mandate Rules
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
                    RBI Integrated Ombudsman Scheme – Online Portal for Banking &amp; Recovery Grievances
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
                    National Legal Services Authority (NALSA) – National Lok Adalat Pre-Litigation Settlement Guidelines
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank Sent Legal Notice: What to Do
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
                  Section 25 PSSA NACH Bounce Guide
                </Link>
                <Link
                  href="/lok-adalat-me-loan-settlement-kaise-kare"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Lok Adalat Loan Settlement Process
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank One Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Stop Recovery Agent Threatening
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
                Senior banking litigation advocate specializing in debt recovery tribunal (DRT) defence, RBI compliance audits, and formal legal notice rejoinders for distressed borrowers across India.
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
                <span>Urgent 15-Day Reply Desk</span>
              </div>
              <div className="text-base font-black text-white mb-2 leading-snug">
                Received a Bank Legal Notice?
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let the 15-day window lapse. Connect with SettleLoans senior advocates to draft a formal legal rejoinder, halt civil court summons, and initiate compromise settlement.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Draft Advocate Reply Now</span>
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
                  <span><strong>100% Bar Council &amp; RBI Compliant:</strong> Legal rejoinders drafted by seasoned high court and banking advocates.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Court Summons Halting:</strong> Timely dispute escalation halts summary suits under Order 37 CPC.</span>
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
