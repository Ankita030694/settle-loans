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
  TrendingUp,
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
  Sparkles,
  BookOpen,
  ShieldAlert,
  CreditCard,
  Scale,
  FileText,
  CheckCircle2,
  HelpCircle,
  Info,
  Users,
  Percent,
  CheckCircle,
  Calculator,
  Briefcase,
  Layers,
  ArrowUpRight,
  Gavel,
  FileCheck,
  ShieldX,
  UserCheck,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settle Kaise Kare: Bank Se Baat Karne Ka Tarika, Haircut Formula & Legal Rules (2026)',
  description: 'Jane personal loan settle kaise kare step-by-step. Bank negotiation strategies, 40%-60% OTS haircut calculation, legal notice reply, authentic settlement letter audit, aur CIBIL score recovery process.',
  keywords: [
    'personal loan settle kaise kare',
    'loan settlement process in hindi',
    'bank se loan settle kaise kare',
    'personal loan settlement percentage',
    'loan settlement kitne me hota hai',
    'bank loan settlement rules rbi',
    'personal loan settlement letter format',
    'loan settlement cibil score impact',
    'recovery agent harassment complaint rbi',
    'lok adalat loan settlement process',
    'unsecured personal loan default consequences',
    'ots scheme for personal loan',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settle-kaise-kare',
  },
  openGraph: {
    title: 'Personal Loan Settle Kaise Kare: Bank Se Baat Karne Ka Tarika, Haircut Formula & Legal Rules (2026)',
    description: 'Complete legal and financial guide on personal loan settlement in India. Understand RBI compromise settlement policies, NPA provisioning timelines, harassment defense, and step-by-step negotiation protocols.',
    url: 'https://www.settleloans.in/personal-loan-settle-kaise-kare',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settle-kaise-kare.jpg',
        width: 1200,
        height: 675,
        alt: 'Personal Loan Settle Kaise Kare - Step-by-Step Settlement Process, Haircut Formula & Legal Defense',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Personal Loan Settle Kaise Kare: Bank Se Baat Karne Ka Tarika & Legal Rules',
    description: 'Technical and legal manual for settling defaulted unsecured personal loans across Indian commercial banks and NBFCs under RBI compromise settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settle-kaise-kare.jpg'],
  },
};

const faqsList = [
  {
    question: "Personal loan settle kaise kare aur bank se baat shuru karne ka sahi tarika kya hai?",
    answer: "Personal loan settle karne ke liye sabse pehle apni financial hardship (jaise job loss, medical emergency ya business loss) ke verifiable documents assemble karein. Bank ke branch manager ya collection agents se verbal deal karne ke bajaye bank ke Nodal Officer ya Zonal Settlement Desk ko ek formal written hardship representation bhejein. Isme clear karein ki default willful nahi hai aur aap ek One-Time Settlement (OTS) ke through account permanently close karna chahte hain."
  },
  {
    question: "Personal loan settlement me bank kitna discount ya haircut deta hai?",
    answer: "Unsecured personal loan settlement me bank 100% penal interest, late fees aur bounce charges ko completely waive off karta hai. Core principal amount par 40% se 60% tak ka haircut (discount) milna realistic hota hai, jo account ki NPA age (120 se 180 din overdue) aur borrower ki verified repayment capacity par depend karta hai."
  },
  {
    question: "Kya personal loan default hone par police arrest ya jail ho sakti hai?",
    answer: "Bilkul nahi. Unsecured personal loan default karna strictly ek civil dispute hai jo Indian Contract Act, 1872 ke under aata hai. Police ke paas loan default me FIR register karne ya arrest karne ka koi legal right nahi hai. Agar cheque bounce (Section 138 NI Act) ya NACH mandate bounce (Section 25 PSSA) ka notice aata hai, to ye bailable quasi-criminal matters hote hain jisme settlement ke baad court case immediately compound hokar dismiss ho jata hai."
  },
  {
    question: "Recovery agents agar ghar aakar dhamki de ya badtameezi kare to kya karein?",
    answer: "RBI Master Circular (August 2022) ke mutabiq recovery agents subah 8 baje se pehle aur shaam 7 baje ke baad call ya visit nahi kar sakte. Unhe gali-galoch, dhamki, privacy violation ya relatives ko inform karne ki sakht manaahi hai. Aise mamle me turant incident record karein, bank ke Principal Nodal Officer ko complaint bhejein, legal cease-and-desist notice serve karein aur RBI Ombudsman (RB-IOS 2021) portal par complaint register karein."
  },
  {
    question: "Kya bank mere kisi dusre bank ke salary account se paise kaat sakta hai?",
    answer: "Nahi. Bank sirf usi bank me mojood savings ya fixed deposit accounts par Section 171 Indian Contract Act ke tehat 'Banker's Right of Set-Off' use kar sakta hai jaha se loan liya gaya tha. Kisi dusre independent bank ke salary account ko bina civil court decree ke freeze ya auto-debit karne ka bank ke paas koi legal right nahi hota."
  },
  {
    question: "Bank ka official OTS settlement letter authentic hai ya fake, kaise pehchanein?",
    answer: "Authentic settlement letter hamesha bank ke official letterhead par authorized signatory ke physical stamp ya digital verification ke sath aata hai. Isme aapka exact loan account number, agreed settlement amount, payment deadline, aur ek clear clause hona chahiye ki payment ke baad bacha hua balance waive ho jayega aur 30 din me zero-balance No Dues Certificate (NDC) issue kiya jayega. Collection agent ke WhatsApp text ya plain paper par kabhi payment na karein."
  },
  {
    question: "Settlement payment kahan aur kaise karni chahiye?",
    answer: "Settlement payment hamesha directly apne official loan account number me NetBanking, NEFT/RTGS, ya bank branch counter par receipt lekar karni chahiye. Kisi bhi collection agent, recovery agency ke personal account ya kisi third-party account me ek rupaya bhi transfer na karein."
  },
  {
    question: "Loan settlement ke baad No Dues Certificate (NDC) kab milta hai?",
    answer: "Settlement letter me agreed poori amount pay karne ke baad bank ko 21 se 30 dino ke andar official 'No Dues Certificate' (NDC) ya 'No Objection Certificate' (NOC) issue karna mandatory hota hai. Ye certificate confirm karta hai ki loan account permanently close ho chuka hai aur outstanding balance ₹0 hai."
  },
  {
    question: "Loan settlement se CIBIL score par kya asar padta hai aur ise kaise sudharein?",
    answer: "Settlement ke baad credit bureaus (CIBIL, Experian) me account status 'Settled' reflect hota hai aur score temporary 75 se 150 points drop ho sakta hai. Lekin compounding overdue default ruk jata hai. Ek Fixed Deposit ke against Secured Credit Card lekar aur 20%-30% utilization maintain karke 18 se 24 mahine me CIBIL score wapas 750+ tak rebuild kiya ja sakta hai."
  },
  {
    question: "Kya Lok Adalat me personal loan settle karwana zyada faydemand hota hai?",
    answer: "Haan, National Lok Adalat me settlement karwane ka sabse bada fayda ye hai ki waha hua settlement ek Civil Court Decree ke barabar legally binding hota hai. Bank future me us debt par koi further litigation nahi kar sakta aur dono parties ka dispute permanently aur zero court fee ke sath resolve ho jata hai."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#webpage",
      "url": "https://www.settleloans.in/personal-loan-settle-kaise-kare",
      "name": "Personal Loan Settle Kaise Kare: Bank Se Baat Karne Ka Tarika, Haircut Formula & Legal Rules (2026)",
      "description": "Comprehensive guide on settling unsecured personal loan defaults in India under RBI compromise settlement frameworks, legal notice defense, and CIBIL score recovery.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#breadcrumb",
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
          "name": "Personal Loan Settle Kaise Kare",
          "item": "https://www.settleloans.in/personal-loan-settle-kaise-kare"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#article",
      "headline": "Personal Loan Settle Kaise Kare: Bank Se Baat Karne Ka Tarika, Haircut Formula & Legal Rules",
      "description": "Detailed strategic analysis of the personal loan settlement process in India, including NPA provisioning timelines, RBI circulars on compromise settlements, legal notice defense, and credit score rehabilitation.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settle-kaise-kare.jpg",
      "datePublished": "2026-08-26T10:30:00+05:30",
      "dateModified": "2026-08-26T10:30:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#webpage"
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
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo/logo.svg"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-99999-99999",
        "contactType": "Customer Support",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#service",
      "name": "SettleLoans - Personal Loan Settlement & Legal Advisory Desk",
      "description": "Professional debt negotiation, legal notice defense, and RBI-compliant compromise settlement advisory for unsecured personal loan defaults in India.",
      "url": "https://www.settleloans.in/personal-loan-settle-kaise-kare",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settle-kaise-kare.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Connaught Place",
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
        "reviewCount": "2480",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sharma"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "After losing my IT job, my ₹8 Lakh personal loan default led to extreme stress with continuous recovery calls and a Section 25 PSSA notice. SettleLoans stepped in immediately, halted third-party recovery harassment by sending a formal legal notice, and negotiated directly with the bank's zonal credit committee. We closed the entire loan at a 55% haircut with an official bank sanction letter and a verified ₹0 No Dues Certificate.",
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
            "name": "Pooja Hegde"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "My personal loan balance had ballooned from ₹4.5 Lakhs to nearly ₹6.8 Lakhs due to compounding penal interest and bounce charges. SettleLoans conducted a forensic loan statement audit, got 100% of penal charges waived under RBI guidelines, and settled the account for ₹2.1 Lakhs. Excellent legal protection throughout.",
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
            "name": "Amitabh Sen"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "I did not know how to approach the bank for settlement without getting tricked by collection agents who gave fake verbal promises. SettleLoans advocates drafted our financial hardship petition, represented us in Lok Adalat, and secured a genuine settlement sanction letter. Transparent, professional, and completely stress-free.",
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
            "name": "Gaurav Malhotra"
          },
          "datePublished": "2026-05-19",
          "reviewBody": "Settling my defaulted NBFC personal loan seemed impossible with threats of police complaints. SettleLoans explained my civil legal rights, stopped unauthorized home visits, and secured an approved OTS of 48% of the principal balance. Highly recommend their legal debt advisory team.",
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
      "@id": "https://www.settleloans.in/personal-loan-settle-kaise-kare#faq",
      "mainEntity": faqsList.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ]
};

export default function PersonalLoanSettleKaiseKarePage() {
  const tocItems = [
    { id: "institutional-reality-personal-loan-default", title: "1. Personal Loan Default & Bank Mechanics" },
    { id: "delinquency-lifecycle-npa-provisioning", title: "2. Delinquency Lifecycle & NPA Provisioning" },
    { id: "statutory-protections-civil-law-shields", title: "3. Civil Law Protections & Legal Notices" },
    { id: "recovery-agent-harassment-defense", title: "4. Harassment Defense & RBI Compliance" },
    { id: "infographic-resolution-blueprint", title: "5. Visual Settlement Workflow" },
    { id: "haircut-calculation-npv-formula", title: "6. Haircut Formula & Settlement Slabs" },
    { id: "step-by-step-negotiation-protocol", title: "7. 5-Phase Bank Negotiation Protocol" },
    { id: "sanction-letter-forensics-ndc-mandate", title: "8. Sanction Letter Audit & ₹0 NDC" },
    { id: "comparative-resolution-avenues-matrix", title: "9. Comparative Resolution Matrix" },
    { id: "cibil-score-trajectory-credit-repair", title: "10. CIBIL Impact & 750+ Score Repair" },
    { id: "company-resolution-section", title: "11. SettleLoans Legal Advisory" },
    { id: "faqs", title: "12. Frequently Asked Questions" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: "var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif" }}
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
        details summary::-webkit-details-marker {
          display: none;
        }
      `}} />

      {/* 1. Charcoal Navy Hero (#2d313d) */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: "#2d313d" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Master Settlement Guide • RBI Compromise Framework</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Personal Loan Settle Kaise Kare: <span className="text-[#3b82f6] md:text-[#60a5fa]">Bank Se Baat Karne Ka Tarika, Haircut Formula &amp; Legal Rules</span>
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
              <span>RBI Compromise Settlement Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-7 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Free Advocate Settlement Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Calculate Your Loan Haircut
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Widescreen 3-Column Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">

          {/* LEFT COLUMN: Sticky Table of Contents + Executive Case Crux Pill */}
          <aside className="hidden lg:block sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Crux Pill */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 text-xs text-slate-700 shadow-sm">
              <div className="flex items-center gap-2 mb-2 font-bold text-slate-900">
                <Sparkles className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="leading-relaxed text-[11px] text-slate-600">
                Personal loan settlement is a formal, legally protected process under RBI compromise settlement frameworks. By establishing verifiable financial hardship and leveraging bank NPA provisioning mandates, borrowers can eliminate 100% of penal charges and secure a 40% to 60% principal haircut with an official stamped No Dues Certificate.
              </p>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Main Content */}
          <main className="min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-2 border-blue-200/80 rounded-2xl p-6 mb-10 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4 text-[#1F5EFF] font-black text-sm uppercase tracking-wider">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Settlement Rules at a Glance</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-2.5 bg-white/80 rounded-xl p-3 border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% Penal Interest Waiver:</strong> All accumulated overdue fines, late payment charges, and mandate bounce penalties are stripped before calculating the settlement figure.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/80 rounded-xl p-3 border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>40% to 60% Principal Haircut:</strong> Unsecured loans past 90–180 days of default qualify for substantial principal discounts based on verified insolvency.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/80 rounded-xl p-3 border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Arrest Risk:</strong> Unsecured personal loan default is strictly a civil contract dispute; police cannot register FIRs or make arrests for inability to pay.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-white/80 rounded-xl p-3 border border-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory Official Sanction Letter:</strong> Never make payments based on verbal agent promises; verify bank letterhead, account number, and ₹0 NDC guarantee.</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: Institutional Reality & Bank Operations */}
            <section id="institutional-reality-personal-loan-default" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Landmark className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                1. The Reality of Personal Loan Default in India: Institutional Psychology &amp; Operational Stages
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab ek borrower personal loan ki regular Equated Monthly Installments (EMIs) pay karne me asamarth ho jata hai, to wo aksar collection agents ki calling, ghar par physical visits aur legal threats ke chalte severe mental trauma aur confusion ka shikar ho jata hai. Bharat me HDFC Bank, ICICI Bank, State Bank of India, Axis Bank, Kotak Mahindra Bank ya kisi leading NBFC jaise Bajaj Finance, Tata Capital ya Aditya Birla Capital se liya gaya personal loan ek <strong>unsecured credit facility</strong> hota hai. Iska matlab hai ki bank ke paas loan sanction karte waqt koi collateral security, property mortgage ya gold pledge nahi hota.
                </p>
                <p>
                  Jab loan default hota hai, to lending institution ek structured recovery protocol follow karta hai. Shuruat ke 30 se 60 dino me automated SMS reminders, interactive voice response (IVR) calls aur call-center level follow-ups kiye jaate hain. Yadi 60 din tak payment nahi aati, to bank account ko third-party collection agencies (Direct Recovery Agents ya DRAs) ko assign kar deta hai. Ye recovery agents commissions par kaam karte hain, isliye wo aksar illegal psychological tactics, relatives ko call karna ya police complaint ki jhooti dhamkiyan dekar borrower par pressure banate hain.
                </p>
                <p>
                  Ek borrower ke roop me aapke liye ye samajhna behad zaroori hai ki financial insolvency ya genuine majboori (jaise business loss, job loss, ya severe medical emergency) ke kaaran loan default karna koi criminal crime nahi hai. Indian law ke mutabiq ye purely ek <strong>civil contract breach</strong> hai jo Indian Contract Act, 1872 ke purview me aata hai. Bank ka antim maqsad borrower ko jail bhejna nahi (jo ki legally possible bhi nahi hai), balki apne balance sheet se non-performing assets ko clear karke maximum possible recovery karna hota hai. Yahi institutional reality <strong>One-Time Settlement (OTS)</strong> ke legal mechanism ka foundation banati hai.
                </p>
              </div>

              {/* Statutory Callout Box */}
              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong className="font-bold block text-amber-950 mb-1 text-sm">Fundamental Legal Reality: Unsecured Loan Default is Strictly Civil</strong>
                    Hon&apos;ble Supreme Court of India aur High Courts ne kai landmark judgments me clear kiya hai ki failure to repay a loan due to genuine financial distress cannot be treated as cheating under Section 420 of IPC / Section 318 of BNS. Bank recovery ke naam par criminal intimidation ya unauthorized police harassment resort nahi kar sakta.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: Delinquency Lifecycle & NPA Provisioning Dynamics */}
            <section id="delinquency-lifecycle-npa-provisioning" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Calculator className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                2. Delinquency Lifecycle, DPD Timelines &amp; RBI NPA Provisioning Dynamics
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Personal loan me best settlement discount hasil karne ke liye bank ki balance sheet accounting aur Reserve Bank of India (RBI) ke <strong>Prudential Framework on Resolution of Stressed Assets</strong> ko samajhna zaroori hai. Bank har defaulted loan account ko Days Past Due (DPD) ke adhar par alag-alag delinquency buckets me classify karta hai:
                </p>
                <p>
                  1. <strong>SMA-0 (1 se 30 Din Overdue):</strong> Early delinquency stage jisme bank regular reminder notices bhejta hai aur late payment fees add karta hai.
                </p>
                <p>
                  2. <strong>SMA-1 (31 se 60 Din Overdue):</strong> Pre-stress stage jisme collection agents field visits aur regular phone calls shuru karte hain.
                </p>
                <p>
                  3. <strong>SMA-2 (61 se 90 Din Overdue):</strong> Critical alert stage jisme bank borrower ko restructuring ya tenure extension offer kar sakta hai taaki account NPA banne se bach sake.
                </p>
                <p>
                  4. <strong>Non-Performing Asset (NPA) (91+ Din Overdue):</strong> RBI Master Circular on Income Recognition, Asset Classification and Provisioning (IRACP) ke mutabiq, jaise hi loan 90 days continuous overdue cross karta hai, account standard asset se <strong>Substandard NPA</strong> me convert ho jata hai.
                </p>
                <p>
                  Jab koi loan NPA banta hai, to RBI mandates ke tehat bank ko apne operating profits me se ek specific percentage <strong>Provisioning Reserve</strong> ke roop me block karna padta hai. Unsecured loans ke case me Substandard stage par 15%, Doubtful D1 stage (12 se 24 mahine) par 25% se 40%, aur Doubtful D2/Loss Asset stage par 100% tak provisioning karni padti hai. Ye locked capital bank ke profit margins aur lending capacity ko severely affect karta hai. Yahi kaaran hai ki jaise-jaise account purana hota hai (120 se 180 din ke baad), bank ka Zonal Credit Committee ek practical One-Time Settlement (OTS) approve karke account close karne ke liye zyada flexible ho jata hai.
                </p>
              </div>

              {/* Table of Delinquency Stages & Provisioning Impact */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Delinquency Category</th>
                      <th>Overdue Period (DPD)</th>
                      <th>Bank Regulatory Provisioning</th>
                      <th>Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>SMA-0 / SMA-1</strong></td>
                      <td>1 – 60 Days</td>
                      <td>Standard Provisioning (0.4%)</td>
                      <td>Zero Haircut; Only Penal Fee Waiver Possible</td>
                    </tr>
                    <tr>
                      <td><strong>SMA-2</strong></td>
                      <td>61 – 90 Days</td>
                      <td>High Risk Pre-NPA Warning</td>
                      <td>Tenure Restructuring or Part Penal Waiver</td>
                    </tr>
                    <tr>
                      <td><strong>Substandard NPA</strong></td>
                      <td>91 – 180 Days</td>
                      <td>15% Mandatory Capital Provision</td>
                      <td><strong>25% – 40% Principal Haircut Window Opens</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D1 Asset</strong></td>
                      <td>181 – 365 Days</td>
                      <td>25% – 40% Capital Provision</td>
                      <td><strong>40% – 60% Principal Haircut Sweet Spot</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Doubtful D2 / Loss</strong></td>
                      <td>365+ Days</td>
                      <td>100% Written-Off Asset</td>
                      <td>50% – 70% Maximum Debt Waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 3: Legal Protections & Civil Law Shields */}
            <section id="statutory-protections-civil-law-shields" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Scale className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 03</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                3. Statutory Protections, Civil Court Jurisdictions &amp; Legal Notice Defense
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Jab aap personal loan default karte hain, to bank ke legal advocates dwara formal legal notices bheje jaate hain. In notices ko samajhna aur unka sahi legal reply file karna bank ke pressure ko khatam karne ke liye critical hai:
                </p>
                <p>
                  <strong>1. Section 25 Payment and Settlement Systems Act (PSSA), 2007:</strong> Jab aapka automated National Automated Clearing House (NACH) e-mandate ya ECS debit insufficient balance ke kaaran bounce hota hai, to bank Section 25 PSSA ke tehat legal notice dispatch karta hai. Ye notice quasi-criminal nature ka hota hai lekin isme 30 days ka statutory cure period diya jata hai. Ek professional debt settlement advocate iska reply draft karke financial distress aur absence of fraudulent intent establish karta hai, jisse criminal action void ho jata hai aur matter settlement table par shift ho jata hai.
                </p>
                <p>
                  <strong>2. Section 138 Negotiable Instruments Act, 1881:</strong> Yadi bank ke paas aapka security cheque tha aur unhone use present karke bounce karwa diya, to Section 138 NI Act ka demand notice bhejte hain. Notice milne ke 15 dino ke andar legal reply dena mandatory hai. Section 147 NI Act ke tehat cheque bounce ke cases 100% compoundable hote hain, jiska matlab hai ki compromise settlement hote hi court complaint unconditionally withdraw kar li jaati hai.
                </p>
                <p>
                  <strong>3. DRT Pecuniary Limit Barrier (RDB Act, 1993):</strong> Recovery of Debts and Bankruptcy Act ke Section 1(4) ke tehat Debt Recovery Tribunal (DRT) me sirf wahi cases file kiye ja sakte hain jaha debt exposure <strong>₹20 Lakhs ya usse zyada</strong> ho. Agar aapka personal loan ₹20 Lakhs se kam hai, to bank DRT ke summary recovery provisions use nahi kar sakta.
                </p>
                <p>
                  <strong>4. Order XXXVII Civil Procedure Code (CPC) Summary Suits:</strong> Bank civil court me summary suit file kar sakta hai, lekin civil litigation me 4% se 7% non-refundable state court fees lagti hai aur Indian local civil courts me faisla aane me 4 se 8 saal ka samay lagta hai. Is multi-year court friction aur heavy legal costs ke chalte bank civil suits file karne ke bajaye One-Time Settlement (OTS) ko priority deta hai.
                </p>
              </div>

              {/* Banker's Right of Set-Off Callout Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2 font-bold text-slate-900 mb-2">
                  <Lock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Salary Account Safety &amp; Banker&apos;s Right of General Lien (Section 171)</span>
                </div>
                <p className="leading-relaxed">
                  Section 171 Indian Contract Act ke mutabiq, lending bank sirf usi bank me mojood accounts par apna lien ya set-off laga sakta hai jaha se loan liya gaya tha. Agar aapka salary account kisi doosre independent commercial bank me hai, to defaulting bank ke paas aapke doosre account se auto-debit karne ya use freeze karne ka koi legal authority nahi hota.
                </p>
              </div>
            </section>

            {/* SECTION 4: Recovery Agent Harassment Defense */}
            <section id="recovery-agent-harassment-defense" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 04</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                4. Recovery Agent Harassment Defense &amp; RBI Fair Practices Compliance Shield
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Personal loan default ke dauran sabse zyada takleef recovery agents ke aggressive behavior se hoti hai. Lekin Reserve Bank of India ne <strong>Master Circular on Recovery Agents and Fair Practices Code (August 2022)</strong> ke tehat borrowers ke fundamental rights ko protect karne ke liye sakht guidelines banayi hain:
                </p>
                <p>
                  <strong>1. Permitted Calling Hours:</strong> Recovery agents sirf subah <strong>8:00 AM se shaam 7:00 PM</strong> ke beech hi call ya physical visit kar sakte hain. Raat ko call karna ya continuous repetitive calling karna illegal hai.
                </p>
                <p>
                  <strong>2. No Third-Party Privacy Violations:</strong> Agents ko aapke doston, rishtedaron, padosiyon ya office colleagues ko call karke loan ke baare me batane ya social shaming karne ki sakht manaahi hai. Aisa karna Right to Privacy (Article 21) ka direct violation hai.
                </p>
                <p>
                  <strong>3. Mandatory Identity Verification:</strong> Har field recovery agent ke paas bank dwara authorized Identity Card aur Bank Authorization Letter hona anivarya hai. Bina ID card ke aane wale agent ko enter karne se mana kiya ja sakta hai.
                </p>
                <p>
                  <strong>4. Prohibition of Abusive Language &amp; Intimidation:</strong> Physical threats, abusive language, ya mental harassment resort karne par bank aur agency ke khilaaf Indian Penal Code (Section 503/506) / Bharatiya Nyaya Sanhita ke under criminal complaint darj karwayi ja sakti hai.
                </p>
                <p>
                  Jab aap SettleLoans jaise professional legal advocates ko appoint karte hain, to hum bank ko ek formal <strong>Letter of Representation and Cease-and-Desist Notice</strong> serve karte hain. Iske baad bank aur uske collection agencies ko sabhi communications legal counsel ke through karne ka mandate mil jata hai, jisse daily unauthorized calls aur home visits turant band ho jaate hain. Yadi bank compliance follow nahi karta, to RBI Integrated Ombudsman Scheme (RB-IOS 2021) portal par complaint register karke bank par heavy regulatory penalty lagwayi ja sakti hai.
                </p>
              </div>
            </section>

            {/* SECTION 5: Visual Resolution Infographic Banner */}
            <section id="infographic-resolution-blueprint" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 05</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                5. Visual Settlement Workflow: NPA Transition to Zero-Balance NDC
              </h2>
              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
                <Image
                  src="/images/infographics/personal-loan-settle-kaise-kare.jpg"
                  alt="Personal Loan Settlement Process Workflow - From NPA Classification to Sanction Letter and Zero Balance No Dues Certificate"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-center text-xs text-slate-300 border-t border-slate-800">
                  <p className="font-semibold text-white mb-1">Figure 1.0: Comprehensive Personal Loan Resolution Architecture</p>
                  <p>Step-by-step institutional trajectory from 90-day NPA classification to forensic ledger audit, RBI compromise negotiation, and official No Dues Certificate issuance.</p>
                </div>
              </div>
            </section>

            {/* SECTION 6: Haircut Calculation & Net Present Value (NPV) Formula */}
            <section id="haircut-calculation-npv-formula" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Percent className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 06</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                6. The Haircut Calculation Matrix &amp; Net Present Value (NPV) Recovery Formula
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Borrowers ke man me sabse bada sawal hota hai: <strong>&ldquo;Personal loan settle kitne percentage me hota hai?&rdquo;</strong> Iska realistic answer bank ke accounting formula aur recovery economics par depend karta hai. Bank settlement offer banate waqt emotional arguments par nahi, balki cash flow valuation par faisla leta hai.
                </p>
                <p>
                  Har RBI-compliant settlement me sabse pehle loan ledger ki <strong>forensic cleansing</strong> hoti hai:
                </p>
                <p>
                  • <strong>100% Penal Interest Waiver:</strong> Default ke baad bank dwara lagaya gaya 24% se 36% penal interest poori tarah waive hota hai.
                </p>
                <p>
                  • <strong>100% Bounce &amp; Late Fee Waiver:</strong> Mandate bounce charges, late processing fee, aur penal interest par laga GST 100% reverse kiya jata hai.
                </p>
                <p>
                  Iske baad jo actual <strong>Core Principal Balance</strong> bachta hai, us par borrower ki documented financial insolvency ke anusaar <strong>40% se 60% tak ka haircut (discount)</strong> negotiate kiya jata hai.
                </p>
              </div>

              {/* Clean JSX Container Box for NPV Formula */}
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

              {/* Table of Loan Amount vs Realistic Settlement Range */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Original Principal Balance</th>
                      <th>Inflated Bank Ledger (Penal Fees)</th>
                      <th>Realistic OTS Haircut Range</th>
                      <th>Expected Settlement Settlement Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>₹2,00,000</strong></td>
                      <td>₹2,75,000+</td>
                      <td>50% – 60% Haircut</td>
                      <td><strong>₹80,000 – ₹1,00,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>₹5,00,000</strong></td>
                      <td>₹6,80,000+</td>
                      <td>45% – 55% Haircut</td>
                      <td><strong>₹2,00,000 – ₹2,50,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>₹10,00,000</strong></td>
                      <td>₹13,50,000+</td>
                      <td>40% – 50% Haircut</td>
                      <td><strong>₹4,50,000 – ₹5,50,000</strong></td>
                    </tr>
                    <tr>
                      <td><strong>₹20,00,000</strong></td>
                      <td>₹27,00,000+</td>
                      <td>40% – 50% Haircut</td>
                      <td><strong>₹9,00,000 – ₹11,00,000</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 7: Step-by-Step Bank Negotiation Protocol */}
            <section id="step-by-step-negotiation-protocol" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileCheck className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 07</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                7. Bank Se Baat Karne Ka Tarika: 5-Phase Legal Settlement Protocol
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Bank ke sath settlement initiate karte waqt unstructured phone calls ya branch me emotional arguments karne se nuksan hota hai. Settlement ko successful banane ke liye yeh 5-phase professional roadmap follow karein:
                </p>
                <p>
                  <strong>Phase 1: Forensic Loan Ledger Audit.</strong> Sabse pehle apne comprehensive loan statement ko analyze karein. Disbursed amount, total paid EMIs, actual remaining principal, aur bank dwara lagaye gaye penal surcharges aur GST ko alag-alag categorize karein.
                </p>
                <p>
                  <strong>Phase 2: Financial Hardship Dossier Compilation.</strong> Bank ka Credit Committee bina documented proof ke discount approve nahi karta. Apne hardship ke authentic proofs collect karein, jaise job termination letter, salary slip reduction, audited business loss statement, bank account debit statements, ya critical illness hospital discharge summaries.
                </p>
                <p>
                  <strong>Phase 3: Formal Advocate Representation &amp; Channeling.</strong> Local recovery agents ko entertain karne ke bajaye bank ke Nodal Officer aur Zonal Settlement Desk ko ek formal <strong>Hardship Settlement Representation</strong> submit karein. Isme clear karein ki default non-willful hai aur borrower genuine distress me hai.
                </p>
                <p>
                  <strong>Phase 4: Credit Committee OTS Counter-Negotiation.</strong> Bank shuruat me sirf 10% se 20% discount offer karega. Hamare senior legal advocates NPV recovery math aur hardship dossier present karke realistic 40% se 60% haircut secure karne ke liye counter-negotiate karte hain.
                </p>
                <p>
                  <strong>Phase 5: Sanction Letter Verification &amp; Payment Execution.</strong> Settlement finalize hone par bank se official One-Time Settlement Sanction Letter hasil karein. Letter ki legal auditing ke baad hi designated bank loan account me direct payment transfer karein.
                </p>
              </div>
            </section>

            {/* SECTION 8: Sanction Letter Forensics & Zero-Balance NDC */}
            <section id="sanction-letter-forensics-ndc-mandate" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <FileText className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 08</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                8. Sanction Letter Forensics, 7-Point Audit Checklist &amp; Zero-Balance No Dues Certificate
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Loan settlement process me sabse bada fraud collection agents dwara fake settlement letters issue karke hota hai. Agent paise lekar part-payment me daal dete hain aur account default me hi bana rehta hai. Isliye payment transfer karne se pehle settlement letter ka <strong>7-Point Forensic Audit</strong> anivarya hai:
                </p>
                <p>
                  1. <strong>Official Bank Letterhead:</strong> Letter bank ke official printed letterhead par hona chahiye jisme bank ka registered logo, corporate office address aur unique reference number mention ho.
                </p>
                <p>
                  2. <strong>Exact Loan Account Details:</strong> Borrower ka pura naam, registered PAN number, aur exact loan account number clearly print hona chahiye.
                </p>
                <p>
                  3. <strong>Specific Settlement Amount &amp; Due Date:</strong> Negotiated settlement figure (e.g., ₹2,50,000) aur payment deadline date clearly stated honi chahiye.
                </p>
                <p>
                  4. <strong>Full &amp; Final Waiver Clause:</strong> Letter me explicit term honi chahiye ki payment complete hone ke baad bank bacha hua pura balance waive off karega aur borrower ke khilaaf koi future claim ya liability nahi rahegi.
                </p>
                <p>
                  5. <strong>Withdrawal of Legal Proceedings:</strong> Bank commitment dega ki pending legal notices (Section 138 NI Act, Section 25 PSSA, civil suits) withdraw aur dismiss kar liye jayenge.
                </p>
                <p>
                  6. <strong>Authorized Signatory Seal:</strong> Letter par Branch Manager ya Authorized Settlement Officer ka name, employee code aur bank round stamp hona zaroori hai.
                </p>
                <p>
                  7. <strong>No Dues Certificate (NDC) Guarantee:</strong> Letter me likha hona chahiye ki payment ke 21 se 30 dino ke andar bank official <strong>Zero-Balance No Dues Certificate (NDC/NOC)</strong> issue karega.
                </p>
              </div>

              {/* Warning Alert Box */}
              <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl p-5 my-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <ShieldX className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                    <strong className="font-bold block text-rose-950 mb-1 text-sm">Critical Warning: Never Pay into Agent Personal Accounts</strong>
                    Settlement payment kabhi bhi cash me collection agent ko na dein aur na hi kisi agency ke QR code ya private bank account me transfer karein. Payment hamesha directly aapke loan account number me NetBanking ya bank branch counter par receipt ke sath karein.
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 9: Comparative Resolution Matrix Table */}
            <section id="comparative-resolution-avenues-matrix" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <Layers className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 09</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                9. Comparative Resolution Matrix: OTS vs. Lok Adalat vs. Restructuring vs. Court Litigation
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Defaulted personal loan ko resolve karne ke liye multiple institutional avenues available hoti hain. Sahi option chunna aapki financial situation aur immediate cash liquidity par depend karta hai:
                </p>
              </div>

              {/* 4-Sided Bordered Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Avenue</th>
                      <th>Primary Mechanism</th>
                      <th>Typical Haircut / Relief</th>
                      <th>Legal Finality &amp; Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>One-Time Settlement (OTS)</strong></td>
                      <td>Direct advocate negotiation with Bank Zonal Credit Committee</td>
                      <td><strong>40% – 60% Principal Haircut</strong> + 100% Penal Waiver</td>
                      <td>Fastest resolution (30–60 days); Stamped Bank Sanction Letter</td>
                    </tr>
                    <tr>
                      <td><strong>National Lok Adalat</strong></td>
                      <td>Statutory conciliation under Legal Services Authorities Act, 1987</td>
                      <td>35% – 50% Haircut with mutual consensus</td>
                      <td>High finality; Equivalent to Civil Court Decree with zero appeal</td>
                    </tr>
                    <tr>
                      <td><strong>Tenure Restructuring</strong></td>
                      <td>Extending loan tenure to lower monthly EMI burden</td>
                      <td>0% Haircut; Total interest cost increases</td>
                      <td>Keeps credit score intact; Requires active ongoing income</td>
                    </tr>
                    <tr>
                      <td><strong>Civil Court Defense (Order 37)</strong></td>
                      <td>Contesting summary suits through appointed legal counsel</td>
                      <td>Dispute resolution based on procedural lapses &amp; merits</td>
                      <td>Protracted litigation (3–7 years); High court and legal expenses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 10: CIBIL Score Impact & 750+ Rebuilding Roadmap */}
            <section id="cibil-score-trajectory-credit-repair" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <TrendingUp className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 10</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-tight">
                10. Credit Bureau Trajectory: Understanding &lsquo;Settled&rsquo; Status &amp; Rebuilding 750+ CIBIL
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Loan settlement complete hone ke baad Credit Information Companies (Regulation) Act (CICRA), 2005 ke tehat bank 30 se 45 dino ke andar charo credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) ko updated data report karta hai. Loan account status &lsquo;Overdue / Default&rsquo; se hatkar <strong>&lsquo;Settled&rsquo;</strong> reflect hone lagta hai aur current outstanding balance <strong>₹0</strong> ho jata hai.
                </p>
                <p>
                  &lsquo;Settled&rsquo; status aane se CIBIL score me 75 se 150 points ka immediate drop ho sakta hai, lekin iska sabse bada fayda yeh hai ki har mahine lagne wale continuous negative overdue default marks permanently band ho jaate hain. RBI guidelines ke mutabiq agle 12 se 24 mahino ke liye mainstream unsecured loans par cooling-off period rehta hai.
                </p>
                <p>
                  Aap in 3 steps ko follow karke apna CIBIL score wapas <strong>750+ tak rebuild</strong> kar sakte hain:
                </p>
                <p>
                  1. <strong>FD-Backed Secured Credit Card:</strong> Kisi bhi leading bank (jaise IDFC WOW, OneCard, ya SBI Unnati) me ₹25,000 se ₹50,000 ki Fixed Deposit karke 100% approval ke sath Secured Credit Card lein.
                </p>
                <p>
                  2. <strong>20%–30% Credit Limit Utilization:</strong> Har mahine total credit limit ka sirf 20% se 30% hi use karein aur billing cycle generate hone par full amount time par pay karein.
                </p>
                <p>
                  3. <strong>18–24 Months Clean Payment Track Record:</strong> Consistent on-time payments se credit algorithms aapko creditworthy treat karna shuru karte hain aur 2 saal ke andar aapka CIBIL score premium 750+ range me recover ho jata hai.
                </p>
              </div>
            </section>

            {/* SECTION 11: Company Section (Rendered before FAQs) */}
            <div id="company-resolution-section" className="mb-10 scroll-mt-24">
              <CompanySection />
            </div>

            {/* SECTION 12: Frequently Asked Questions Accordion */}
            <section id="faqs" className="mb-10 scroll-mt-24">
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-blue-100 text-[#1F5EFF]">
                  <HelpCircle className="w-5 h-5" />
                </span>
                <span className="text-xs font-black tracking-widest text-[#1F5EFF] uppercase">Section 12</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions: Personal Loan Settlement in India
              </h2>

              <div className="space-y-3">
                {faqsList.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 open:border-blue-300"
                    open={index === 0}
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none gap-4 select-none">
                      <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#1F5EFF] transition-colors">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] transition-transform duration-300 group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Official Sources & Regulatory References Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-10 text-xs text-slate-600">
              <div className="flex items-center gap-2 font-bold text-slate-900 mb-3 text-sm">
                <Landmark className="w-4 h-4 text-[#1F5EFF]" />
                <span>Statutory References &amp; Official Regulatory Sources</span>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=12513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    RBI Master Circular – Framework on Resolution of Stressed Assets &amp; Compromise Settlements (June 2023)
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
                    RBI Master Directions on Outsourcing of Financial Services &amp; Fair Practices Code for Recovery Agents
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2088"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Section 25 of the Payment and Settlement Systems Act, 2007 (Electronic Clearing Mandate Bounce Laws)
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <a
                    href="https://www.indiacode.nic.in/handle/123456789/2281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] hover:underline"
                  >
                    Section 138 &amp; Section 147 of the Negotiable Instruments Act, 1881 (Cheque Dishonor &amp; Legal Compounding)
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
                    National Legal Services Authority (NALSA) – Pre-Litigation Lok Adalat Conciliation &amp; Settlement
                  </a>
                </li>
              </ul>
            </div>

            {/* 10 Internal Topic Badges Strip */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-10 shadow-sm">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Explore Related Loan Settlement &amp; Legal Defense Guides
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/5-lakh-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ₹5 Lakh Loan Settlement
                </Link>
                <Link
                  href="/10-lakh-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ₹10 Lakh Loan Settlement
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Settlement CIBIL Impact
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bank OTS Policy Guidelines
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Settlement Letter Format Audit
                </Link>
                <Link
                  href="/personal-loan-settlement-vs-closure"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Loan Settlement vs Closure
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Credit Card vs Loan Settlement
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/icici-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  ICICI Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="text-xs font-semibold py-1.5 px-3 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 transition-colors border border-slate-200"
                >
                  Bajaj Finance Settlement
                </Link>
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: Author Bio Card, Emergency Advocate CTA & Trust Signals */}
          <aside className="space-y-5 lg:sticky lg:top-24">

            {/* Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-slate-800">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1F5EFF] to-blue-800 flex items-center justify-center text-white font-bold text-lg shadow-sm flex-shrink-0 hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <Link href="/authors/ashish-jhangra" className="font-bold text-slate-900 text-sm hover:text-[#1F5EFF] transition-colors block">
                    Ashish Jhangra
                  </Link>
                  <p className="text-xs text-slate-500">Lead Debt Settlement Counsel</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Specialist in banking dispute resolution, RBI compromise settlements, and defense against Section 25 PSSA and Section 138 NI Act notices across Indian tribunals.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Legal Author</span>
                </div>
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-xs font-bold text-[#1F5EFF] hover:underline flex items-center gap-1"
                >
                  View Profile &rarr;
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-[#0A2540] to-slate-900 border border-slate-700 rounded-2xl p-5 text-white shadow-md">
              <div className="inline-flex items-center gap-1.5 bg-red-500/20 text-red-300 text-[10px] font-black uppercase px-2.5 py-1 rounded-full border border-red-500/30 mb-3">
                <ShieldAlert className="w-3 h-3" />
                <span>Notice Defense Desk</span>
              </div>
              <h3 className="text-base font-black text-white mb-2 leading-snug">
                Facing Bank Legal Notices or Recovery Harassment?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Get immediate advocate intervention to respond to Section 25 PSSA / Section 138 notices, stop unauthorized harassment, and negotiate a 40%–60% OTS haircut.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Urgent Advocate Callback</span>
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-slate-700 shadow-sm space-y-3">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1F5EFF]" />
                <span>SettleLoans Trust Signals</span>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% RBI Compliant:</strong> Settlements executed solely under official RBI compromise frameworks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Bank Settlement:</strong> All settlement payments made directly to bank loan accounts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stamped ₹0 NDC:</strong> Guaranteed audit and delivery of official bank No Dues Certificate.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Over ₹180+ Crores Settled:</strong> Trusted by 12,000+ borrowers across India.</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
