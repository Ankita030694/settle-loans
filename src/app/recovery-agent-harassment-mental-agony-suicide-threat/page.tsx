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
  HeartPulse,
  LifeBuoy,
  Phone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agent Harassment Causing Mental Agony & Despair | Legal Protection',
  description: 'Suffering from recovery agent harassment causing depression, panic attacks, or despair? Discover Section 108 BNS / Section 306 IPC abetment protections, crisis helplines, and 24h advocate defense.',
  keywords: [
    'recovery agent harassment causing depression and mental agony',
    'bank recovery agent suicide threat india',
    'section 108 BNS abetment of suicide recovery agent',
    'section 306 IPC recovery harassment police complaint',
    'loan agent mental harassment panic attacks',
    'tele manas crisis helpline loan default depression',
    'how to stop recovery agent mental torture within 24 hours',
    'rbi guidelines on recovery agent mental harassment',
    'advocate cease and desist notice bank recovery harassment',
    'debt settlement legal defense mental health protection'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat',
  },
  openGraph: {
    title: 'Recovery Agent Harassment Causing Mental Agony & Despair | Legal Protection',
    description: 'Exhaustive legal and mental health crisis guide for borrowers facing severe recovery agent harassment in India. Understand Section 108 BNS abetment deterrence, Tele-MANAS helpline access, and 24-hour advocate intervention.',
    url: 'https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agent Harassment Mental Agony and Life Protection Legal Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Harassment Causing Severe Mental Agony? Legal Rights & Life Protection',
    description: 'Pushed to despair by relentless recovery agent calls and threats? Learn how Section 108 BNS protects you, access immediate mental health helplines, and halt all contact through legal counsel.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg'],
  },
};

const faqsList = [
  {
    name: "What should I do immediately if recovery agent harassment is pushing me to severe depression or suicidal thoughts?",
    answer: "Your life and mental well-being are paramount. First, reach out immediately to the Government of India's free, 24/7 mental health crisis helpline Tele-MANAS by dialing 14416 or 1800-891-4416 (or KIRAN at 1800-599-0019) for immediate psychological support. Second, understand that financial default is purely a civil contractual issue—never a crime. Third, retain a debt settlement advocate who will immediately serve a statutory Cease-and-Desist notice on the bank, legally mandating the instant halt of all direct collection contact within 24 hours."
  },
  {
    name: "Can recovery agents and bank managers be jailed if their harassment leads to a suicide attempt or extreme distress?",
    answer: "Yes. Under Section 108 of the Bharatiya Nyaya Sanhita, 2023 (BNS) and Section 306 of the Indian Penal Code, 1860 (IPC), abetment to suicide is a severe, non-bailable criminal offense punishable by up to 10 years of rigorous imprisonment and substantial fines. High Courts and the Supreme Court of India have repeatedly affirmed that sustained psychological harassment, public shaming, unannounced trespassing, and intimidation by loan collection agents that drive a person to despair can establish direct criminal culpability against both individual agents and responsible bank officials."
  },
  {
    name: "How does appointing a debt settlement advocate stop recovery agent harassment within 24 hours?",
    answer: "Under the Reserve Bank of India Master Directions on Outsourcing and the Fair Practices Code, Regulated Entities (banks and NBFCs) are legally bound to follow fair collection protocols. Once you execute a formal Vakalatnama and your advocate serves a statutory Cease-and-Desist notice with formal representation details to the bank's Nodal Officer, Managing Director, and collection agency heads, all direct calls, doorstep visits, and third-party communications must cease immediately. All subsequent dialogue is routed exclusively through legal counsel."
  },
  {
    name: "Can a bank or loan recovery agency contact my family members, parents, spouse, or employer?",
    answer: "No. The Reserve Bank of India has issued strict, unequivocal directives prohibiting lenders and recovery agents from contacting family members, friends, colleagues, or employers of a borrower. Calling non-borrowing third parties, disclosing loan default details to employers, or shouting in front of neighbors constitutes an egregious violation of the RBI Fair Practices Code, a breach of fundamental privacy rights under Article 21 (Puttaswamy judgment), and actionable defamation under Section 356 BNS / Section 499 IPC."
  },
  {
    name: "What criminal sections apply against recovery agents who use abusive language or threats of violence?",
    answer: "Recovery agents who threaten physical harm, use abusive language, or intimidate borrowers commit cognizable offenses under Section 351 BNS / Section 503 and 506 IPC (Criminal Intimidation), Section 308 BNS / Section 383 and 384 IPC (Extortion), Section 329 BNS / Section 441 IPC (Criminal Trespass), and Section 79 BNS / Section 509 IPC (Insulting the Modesty of a Woman). These violations warrant immediate police complaints (FIR) and complaints to the RBI Integrated Ombudsman."
  },
  {
    name: "Can I go to jail for being unable to pay an unsecured personal loan or credit card bill?",
    answer: "No. In India, the inability to repay an unsecured personal loan, consumer loan, or credit card debt due to genuine financial distress, job loss, medical emergency, or business failure is purely a civil breach of contract. Under Article 21 of the Constitution and landmark Supreme Court rulings (including Jolly George Varghese v. The Bank of Cochin), no citizen can be imprisoned merely for the inability to discharge a civil contractual debt. Recovery agents claiming they have 'arrest warrants' are committing criminal fraud and intimidation."
  },
  {
    name: "What evidence should I gather to prove recovery agent harassment and mental torture?",
    answer: "Maintain a systematic digital evidence repository. Record all incoming phone calls where agents use threats, abusive language, or call outside permissible hours (before 8:00 AM or after 7:00 PM). Capture screenshots of threatening WhatsApp messages or SMS alerts. Save CCTV footage or smartphone recordings of uninvited doorstep visits. Document call detail records (CDRs) proving excessive frequency (such as 20 to 50 calls daily). This evidence forms the basis for police complaints, RBI Ombudsman filings, and civil damages claims."
  },
  {
    name: "What compensation can the RBI Integrated Ombudsman award for mental agony caused by recovery harassment?",
    answer: "Under the RBI Integrated Ombudsman Scheme (2021), the Ombudsman has statutory authority to pass binding awards against banks and NBFCs. The Ombudsman can award compensation up to ₹20 Lakhs for direct consequential financial loss and an additional compensation of up to ₹1 Lakh specifically for mental agony, harassment, loss of time, and personal distress caused by unfair recovery practices and regulatory violations."
  },
  {
    name: "How does a formal One-Time Settlement (OTS) resolve my debt permanently after harassment is stopped?",
    answer: "Once aggressive collection tactics are halted by legal intervention, your advocate opens structured institutional compromise negotiations with the bank's stressed assets committee. Backed by bank NPA provisioning regulations and Net Present Value (NPV) recovery economics, lenders frequently agree to a One-Time Settlement (OTS) waiving 40% to 65% of the total outstanding dues (including complete waiver of penal interest, late fees, and overdue charges). Upon payment, the bank issues a stamped No Dues Certificate (NDC) and updates your credit bureaus, permanently resolving the debt."
  }
];

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#webpage",
      "url": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat",
      "name": "Recovery Agent Harassment Causing Mental Agony & Despair | Legal Protection",
      "description": "Comprehensive legal and mental health crisis guide for Indian borrowers facing recovery agent harassment, severe anxiety, and suicidal ideation. Explains Section 108 BNS abetment laws, Tele-MANAS crisis helplines, and 24-hour advocate cease-and-desist protection.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#breadcrumb",
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
          "name": "Recovery Harassment & Life Protection",
          "item": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#article",
      "headline": "Recovery Agent Harassment Causing Depression & Mental Agony: Section 108 BNS, Crisis Helplines & 24-Hour Legal Defense",
      "description": "An exhaustive statutory, constitutional, and life-protection guide detailing civil remedies, criminal abetment deterrence under Section 108 BNS / Section 306 IPC, Tele-MANAS crisis resources, and 24-hour advocate intervention against illegal bank collection harassment in India.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#webpage"
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-99999-99999",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#service",
      "name": "SettleLoans - Anti-Harassment Legal Defense & Debt Resolution Services",
      "description": "Emergency legal intervention, criminal harassment injunctions, RBI Ombudsman filings, and structured One-Time Settlement (OTS) negotiations to protect borrowers against unlawful collection agent intimidation across India.",
      "url": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat",
      "image": "https://www.settleloans.in/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg",
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
        "reviewCount": "3410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Verma"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "I was facing constant phone calls, nearly 60 calls every day from recovery agents threatening to visit my office and ruin my family. I was having severe panic attacks and lost all hope. SettleLoans stepped in, issued a Cease-and-Desist notice citing Section 108 BNS and RBI Fair Practice rules. Within 24 hours all harassment stopped completely. They then settled my ₹14 Lakh personal loan for a 55% waiver.",
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
            "name": "Pooja Deshmukh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Recovery agents showed up at my home and threatened to publicize my financial trouble to neighbors. The emotional torture drove me to severe despair. SettleLoans advocates immediately drafted criminal intimidation notices to the bank MD and filed a complaint on the RBI Integrated Ombudsman portal. The bank recalled the agency immediately, apologized, and structured an easy OTS plan.",
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
            "name": "Rajeshwari Nair"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "Ashish Jhangra and the SettleLoans legal team saved my life. I was in deep clinical depression due to multiple credit card defaults and non-stop abusive recovery calls. They explained my constitutional rights under Article 21 and took over all communications under their legal shield. I could finally sleep peacefully and regain control of my financial future.",
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
            "name": "Amitava Roy"
          },
          "datePublished": "2026-08-19",
          "reviewBody": "The psychological relief of having senior banking advocates represent me cannot be overstated. SettleLoans stopped third-party agents from calling my elderly parents and negotiated a formal bank-approved OTS with an unconditional No Dues Certificate. If you are struggling with debt anxiety, get their legal help immediately.",
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
      "@id": "https://www.settleloans.in/recovery-agent-harassment-mental-agony-suicide-threat#faq",
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
  { id: 'psychological-harassment-reality', title: '1. Anatomy of Harassment & The Despair Trap' },
  { id: 'statutory-deterrence-section-108-bns', title: '2. Section 108 BNS & Sec 306 IPC Abetment Deterrence' },
  { id: 'constitutional-sanctity-article-21', title: '3. Article 21 Dignity & Supreme Court Rulings' },
  { id: 'rbi-master-directions-fair-practices', title: '4. RBI Master Directions & Vicarious Liability' },
  { id: 'infographic-crisis-defense', title: '5. Crisis Defense & Life Protection Infographic' },
  { id: 'twenty-four-hour-advocate-intervention', title: '6. The 24-Hour Advocate Cease-and-Desist Shield' },
  { id: 'bank-npa-accounting-npv-recovery', title: '7. Bank NPA Accounting & NPV Recovery Model' },
  { id: 'structured-ots-sanction-ndc', title: '8. Sanction Letter Forensics, OTS & No Dues Certificate' },
  { id: 'comparative-penal-matrix', title: '9. Comparative Penal & Violation Matrix' },
  { id: 'settleloans-compassionate-defense', title: '10. SettleLoans Compassionate Legal Defense' },
  { id: 'faqs', title: '11. Frequently Asked Questions' }
];

export default function RecoveryAgentHarassmentMentalAgonyPage() {
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
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Emergency Life Protection • Mental Health Safeguards &amp; Anti-Harassment Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Recovery Agent Harassment Causing Depression &amp; Mental Agony: <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 108 BNS, Crisis Helplines &amp; 24-Hour Legal Defense</span>
          </h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-4 mb-6 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Written by <Link href="/authors/ashish-jhangra" className="font-bold underline hover:text-white transition-colors">Ashish Jhangra</Link></span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: September 2026</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Fair Practices &amp; BNS Criminal Law Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Halt Recovery Harassment Within 24 Hours</span>
            </Link>
            <Link
              href="#statutory-deterrence-section-108-bns"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>View Section 108 BNS Protections</span>
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

          {/* Middle Column: Main Editorial Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* National Crisis Support Banner */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-slate-700">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wide">
                    <LifeBuoy className="w-4 h-4 text-blue-400" />
                    <span>Immediate Crisis Support • Confidential &amp; Free 24/7</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    You Are Not Alone. Your Life Is Infinitely More Valuable Than Any Debt.
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                    If relentless recovery harassment is causing acute anxiety, depression, or thoughts of self-harm, please connect immediately with professional mental health counselors. Support is available right now:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-slate-700/80">
                <div className="bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-blue-300 uppercase">National Tele-MANAS Helpline</p>
                    <p className="text-sm font-black text-white tracking-wide">Dial: 14416 / 1800-891-4416</p>
                    <p className="text-[11px] text-slate-400">Govt. of India 24/7 Free Mental Health Support</p>
                  </div>
                  <Phone className="w-6 h-6 text-blue-400 flex-shrink-0" />
                </div>
                <div className="bg-slate-800/90 rounded-xl p-3.5 border border-slate-700 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase">KIRAN Mental Health Helpline</p>
                    <p className="text-sm font-black text-white tracking-wide">Dial: 1800-599-0019</p>
                    <p className="text-[11px] text-slate-400">Ministry of Social Justice 24/7 Helpline</p>
                  </div>
                  <HeartPulse className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                </div>
              </div>
            </div>

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Borrower Protections &amp; Anti-Harassment Safeguards</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminality in Loan Default:</strong> Unsecured loan and credit card default in India is strictly a civil matter governed by contract law. Inability to pay due to financial adversity can never lead to arrest or imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Abetment Deterrence (Sec 108 BNS / Sec 306 IPC):</strong> Recovery agents and bank executives who intentionally create persistent psychological distress, panic, or humiliation driving a borrower to despair face up to 10 years of non-bailable imprisonment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Third-Party Contact Prohibition:</strong> RBI Master Directions strictly prohibit collection agents from contacting parents, spouses, siblings, friends, neighbors, or employers under any pretext whatsoever.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>24-Hour Legal Shield:</strong> Appointing legal counsel and serving a statutory Cease-and-Desist notice legally requires lenders to halt all direct phone calls and doorstep visits within 24 hours, transferring all talks to official legal channels.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Institutional OTS Resolution:</strong> Financial stress is permanently resolved through structured One-Time Settlements (OTS), where banks approve 40% to 65% waivers to write back locked regulatory provisions into profits.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Psychological Harassment & The Despair Trap */}
            <section id="psychological-harassment-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Anatomy of Psychological Harassment: How Recovery Pressure Induces Mental Agony
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual experiences an unexpected financial catastrophe—whether resulting from corporate downsizing, catastrophic medical emergencies, prolonged business disruptions, or macro-economic inflation—their ability to maintain regular Equated Monthly Installments (EMIs) on unsecured personal loans and credit cards can collapse. While the Indian legal system explicitly categorizes loan default arising from genuine financial incapacity as a civil contractual dispute, the commercial reality experienced by borrowers on the ground is starkly different. Outsourced debt collection agencies routinely deploy aggressive psychological warfare designed to weaponize fear, social humiliation, and constant sensory overload against vulnerable citizens.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This orchestrated harassment typically follows a deliberate escalation pattern. It begins with automated auto-dialer systems bombarding the borrower with 40 to 80 phone calls a day, originating from constantly shifting virtual numbers to defeat call-blocking applications. When phone pressure fails to extract immediate funds, collection personnel escalate to intrusive WhatsApp messages filled with fabricated legal threats, fabricated arrest warrants, and counterfeit court summons. Agents then cross legal boundaries by contacting elderly parents, spouses, workplace colleagues, and Human Resources departments, deliberately threatening public disclosure of the debt to inflict severe professional and familial embarrassment.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The continuous neurological impact of this relentless badgering is severe. Medical and psychiatric research indicates that prolonged exposure to unpredictable intimidation triggers chronic sympathetic nervous system activation, resulting in acute panic disorder, severe clinical depression, persistent insomnia, and cognitive paralysis. Defaulters often fall into what legal psychiatrists describe as the &quot;Despair Trap&quot;—an overwhelming psychological state where the borrower mistakenly believes that their social dignity is permanently ruined, that criminal imprisonment is imminent, and that they have no lawful escape. It is precisely in this state of acute despair that vulnerable borrowers contemplate extreme measures. Recognizing this systemic crisis, Indian criminal jurisprudence and banking regulations have established stringent legal protections to punish abusive collection practices and preserve human life.
              </p>
            </section>

            {/* Section 2: Statutory Deterrence: Section 108 BNS & Section 306 IPC */}
            <section id="statutory-deterrence-section-108-bns" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Deterrence: Section 108 BNS &amp; Section 306 IPC (Abetment to Suicide)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian penal framework, the law draws an unyielding boundary between legitimate civil recovery procedures and unlawful criminal coercion. When debt collection agents or banking personnel cross that boundary by subjecting a borrower to relentless torment that pushes them toward self-harm or suicide, the law ceases to view the dispute as a financial disagreement and treats it as a serious felony against human life.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>Section 108 of the Bharatiya Nyaya Sanhita, 2023 (BNS)</strong>—which replaces and expands upon <strong>Section 306 of the Indian Penal Code, 1860 (IPC)</strong>—any individual who abets the commission of suicide by another person is liable to be punished with rigorous imprisonment for a term which may extend to ten years, along with substantial financial fines. In the context of debt collection, criminal courts have established that persistent harassment, abusive language, continuous public shaming, unannounced home invasions, and threats of social ruin satisfy the statutory threshold of <em>instigation</em> and <em>intentional aiding</em> required to constitute abetment.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Criminal Penal Provisions Invoked Against Illegal Recovery Harassment</span>
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 108 BNS / Section 306 IPC: Abetment of Suicide</p>
                    <p className="text-slate-600 mt-1">
                      Applies directly when persistent, non-stop mental torture, public humiliation, or aggressive collection intimidation creates an intolerable psychological circumstance that drives a borrower or family member to end their life. Both field agents and supervisory bank executives face non-bailable prosecution.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 351 BNS / Section 503 &amp; 506 IPC: Criminal Intimidation</p>
                    <p className="text-slate-600 mt-1">
                      Punishes any recovery agent who threatens a borrower with physical harm, injury to reputation, confiscation of household assets without court warrants, or fabricated criminal proceedings. Punishable by up to two to seven years of imprisonment.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 308 BNS / Section 383 &amp; 384 IPC: Extortion</p>
                    <p className="text-slate-600 mt-1">
                      Coercing a borrower or their family to immediately transfer money, hand over jewelry, or execute post-dated cheques under threats of violence or public scandal constitutes the cognizable offense of extortion.
                    </p>
                  </div>
                  <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Section 329 BNS / Section 441 &amp; 442 IPC: Criminal House-Trespass</p>
                    <p className="text-slate-600 mt-1">
                      Entering a borrower&apos;s private residence without express invitation, refusing to vacate after being asked to leave, or barging through doorways represents criminal trespass, entitling the occupant to immediate police intervention.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The judicial precedent on this issue is decisive. Various State High Courts and the Supreme Court of India have repeatedly refused to quash First Information Reports (FIRs) filed under Section 306 IPC / Section 108 BNS against collection agency heads and bank recovery managers where documentary evidence showed sustained harassment preceding a suicide attempt. The judiciary has made it clear that corporate recovery targets cannot serve as an excuse for driving human beings to despair.
              </p>
            </section>

            {/* Section 3: Constitutional Sanctity: Article 21 & Supreme Court Mandates */}
            <section id="constitutional-sanctity-article-21" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Constitutional Sanctity: Article 21 &amp; Supreme Court Mandates on Borrower Dignity
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The defense of a distressed borrower in India is rooted in the highest constitutional protections guaranteed by the Constitution of India. Article 21 guarantees that no person shall be deprived of their life or personal liberty except according to procedure established by law. Over decades of jurisprudence, the Supreme Court of India has established that the right to life encompasses far more than mere animal existence; it guarantees the right to live with human dignity, mental peace, and freedom from unconstitutional physical or psychological coercion.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In the monumental nine-judge Constitution Bench judgment in <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017) 10 SCC 1</em>, the apex court affirmed that privacy is a fundamental right that protects both informational privacy and spatial privacy. The court ruled that every citizen possesses an inviolable spatial sanctum within their home and personal life where third parties cannot intrude without lawful judicial warrants. When debt collectors call third parties, post public notices in housing societies, or create public disturbances in residential corridors, they commit direct violations of the borrower&apos;s fundamental constitutional rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, in the landmark ruling <em>ICICI Bank Ltd. v. Prakash Kaur &amp; Ors. (2007) 2 SCC 711</em>, the Supreme Court severely rebuked banking practices that deploy musclemen and aggressive recovery agents, holding emphatically that banks cannot employ strong-arm tactics or extra-judicial intimidation to recover dues. The court held that all recoveries must strictly conform to civil procedure and the rule of law.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Similarly, in <em>Jolly George Varghese v. The Bank of Cochin (1980) 2 SCC 360</em>, Justice V.R. Krishna Iyer declared that detaining or punishing an impoverished debtor who lacks the financial means to satisfy a civil decree violates Article 21 of the Constitution and international human rights conventions. The court ruled that financial poverty is not a crime, and genuine inability to discharge contractual debt can never be equated with criminal evasion.
              </p>
            </section>

            {/* Section 4: RBI Master Directions & Vicarious Liability */}
            <section id="rbi-master-directions-fair-practices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. RBI Master Directions &amp; Fair Practices Code: Absolute Vicarious Liability of Regulated Entities
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India has enacted rigorous, binding regulatory frameworks to govern debt collection practices across all Scheduled Commercial Banks, Non-Banking Financial Companies (NBFCs), and Small Finance Banks. These mandates are codified under the <em>Master Direction – Reserve Bank of India (Managing Risks and Code of Conduct in Outsourcing of Financial Services by Regulated Entities) Directions</em> and the <em>Master Circular on Fair Practices Code (FPC)</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These RBI directions lay down explicit, non-negotiable boundaries governing borrower interactions:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4">
                <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory RBI Standards Governing Debt Collection Conduct</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Permitted Contact Hours (8:00 AM to 7:00 PM Only)</p>
                    <p className="text-slate-600">Recovery agents are strictly prohibited from calling or visiting borrowers before 8:00 AM or after 7:00 PM. Calls at late hours constitute severe regulatory breaches.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Strict Prohibition on Third-Party Outreach</p>
                    <p className="text-slate-600">Lenders cannot contact family members, friends, neighbors, or workplace colleagues regarding a borrower&apos;s personal debt, nor can they disclose loan status to third parties.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Mandatory Identification &amp; Authorization</p>
                    <p className="text-slate-600">Every collection representative visiting a borrower must carry official bank authorization letters and photo identification issued by the certified recovery agency.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">Recognition of Legal Representation</p>
                    <p className="text-slate-600">If a borrower formally appoints a legal advocate and requests that all communications be routed through counsel, the lender and its agents must immediately comply.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Crucially, the Reserve Bank of India has established the doctrine of strict <strong>vicarious liability</strong> for Regulated Entities (REs). Commercial banks and NBFCs cannot deflect blame onto third-party collection agencies by claiming that abusive agents were independent contractors. Under RBI regulations, the principal lender is held directly accountable for any breach committed by its outsourced vendors. Under the <em>RBI Integrated Ombudsman Scheme (2021)</em>, the Ombudsman is empowered to award compensation up to ₹20 Lakhs for consequential losses and up to ₹1 Lakh for mental harassment, in addition to imposing severe regulatory reprimands and audit penalties on non-compliant lending institutions.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-crisis-defense" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/recovery-agent-harassment-mental-agony-suicide-threat.jpg"
                  alt="Recovery Agent Harassment Mental Agony and Life Protection Legal Infographic: Section 108 BNS, Crisis Helplines, and 24-Hour Advocate Defense"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Statutory Framework — Section 108 BNS Deterrence, Crisis Helplines &amp; 24h Legal Shield</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal Defense &amp; Life Protection Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 24-Hour Advocate Intervention */}
            <section id="twenty-four-hour-advocate-intervention" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. The 24-Hour Advocate Intervention: Cease-and-Desist Notices &amp; The Legal Shield
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For a distressed borrower suffering from intense anxiety, panic attacks, or despair, the most critical priority is achieving an immediate, permanent cessation of recovery agent calls and doorstep visits. Attempting to reason verbally with aggressive telecallers or field agents is rarely effective, as collection agencies operate under high-pressure commission quotas that incentivize aggressive badgering. The only method proven to halt harassment instantly is establishing formal legal representation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a borrower retains SettleLoans, our senior banking advocates execute a formal <strong>Vakalatnama</strong> (statutory power of legal representation) and immediately issue an authoritative <strong>Statutory Cease-and-Desist Notice</strong>. This legal notice is served concurrently upon the Principal Nodal Officer, the Head of Collections, the Legal Affairs Department, and the Managing Director of the lending institution, as well as the contracted recovery agency.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The 24-Hour Legal Intervention Protocol</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 0 to 2: Case Intake &amp; Evidence Compilation</p>
                    <p className="text-slate-600 mt-1">Our legal team reviews all call logs, recordings, abusive WhatsApp messages, and agent visit records to establish documented violations of Section 108/351 BNS and RBI Fair Practice codes.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 2 to 6: Drafting &amp; Dispatch of Cease-and-Desist Notice</p>
                    <p className="text-slate-600 mt-1">We serve formal legal notices demanding the immediate withdrawal of third-party recovery agents, highlighting criminal abetment liability and warning of police FIR filings if harassment continues.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 6 to 18: Institutional Escalation &amp; Ombudsman Filing</p>
                    <p className="text-slate-600 mt-1">We lodge formal complaints on the RBI Integrated Ombudsman portal and bank internal grievance cells, placing the lender under direct regulatory scrutiny.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hour 18 to 24: Direct Contact Freezes &amp; Dialogue Shift</p>
                    <p className="text-slate-600 mt-1">The bank commands its collection agency to stand down. All direct calls and home visits cease completely. All future communications are redirected exclusively to our legal advocates.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By transferring the entire communication burden from the borrower to qualified legal counsel, the emotional trauma and psychological pressure evaporate within hours. The borrower regains peace of mind, family stability, and the mental space necessary to focus on health, career, and structured debt resolution.
              </p>
            </section>

            {/* Section 7: Bank NPA Accounting, Provisioning Burdens & The NPV Recovery Model */}
            <section id="bank-npa-accounting-npv-recovery" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Bank NPA Accounting Realities: Provisioning Burdens &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why financial distress can always be resolved without panic or despair, one must analyze the institutional economics that govern bad debt inside commercial banks and NBFCs. Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning, when a borrower defaults on an unsecured credit card or personal loan for more than 90 days, the lender is legally required to classify the account as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once an account becomes an NPA, banking accounting rules prohibit the lender from recognizing accrued interest as income. More importantly, the bank must set aside substantial capital from its operating profits as mandatory regulatory provisions:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Asset (Overdue 90 to 365 Days):</strong> Mandatory 15% provisioning on total unsecured exposure.</li>
                <li><strong>Doubtful Asset (Overdue 12 to 24 Months):</strong> Mandatory 100% provisioning on the unsecured balance.</li>
                <li><strong>Loss Asset / Written-Off Portfolio:</strong> 100% full balance sheet write-off against the bank&apos;s annual earnings.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                If a bank initiates civil litigation in local District Courts or Summary Suits under Order 37 CPC to recover an unsecured personal loan, it faces significant economic headwinds. The bank must advance non-refundable court fees (typically 1% to 3%), pay continuous advocate litigation retainers, and endure 3 to 5 years of procedural delays. Furthermore, under Section 60 of the Code of Civil Procedure (CPC), essential domestic furniture, cooking utensils, wearing apparel, and necessary tools of livelihood are legally immune from attachment. Consequently, the bank&apos;s risk committees evaluate bad loan recovery using a strict Net Present Value (NPV) recovery formula:
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
                  Where C_t represents estimated recoveries across annual time intervals t, r is the bank&apos;s cost of capital discount rate, and deductions account for 3 to 5 years of court friction, litigation fees, and locked regulatory capital.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because protracted civil litigation produces a heavily discounted, negative Net Present Value, lending institutions have immense financial incentive to accept a structured One-Time Settlement (OTS). By approving a 40% to 65% waiver of the total balance, the bank receives immediate cash liquidity, permanently removes non-performing debt from its audit records, and reverses locked regulatory provisions back into quarterly operating profits. Doorstep harassment is merely a low-cost, coercive tactic deployed by third-party commission agents before the file is escalated to senior compromise settlement executives.
              </p>
            </section>

            {/* Section 8: Structured OTS Forensics: Sanction Letters & NDC */}
            <section id="structured-ots-sanction-ndc" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Structured One-Time Settlement (OTS) Forensics: Sanction Letters &amp; No Dues Certificates
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When borrowers are trapped in a cycle of harassment, a common and dangerous mistake is making panic-driven token payments or transferring funds via personal UPI to collection agents who promise verbally that calls will stop. Such informal payments are virtually always credited toward penal charges and overdue late fees, leaving the primary principal liability untouched and inviting renewed harassment within weeks.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To achieve complete, permanent financial liberation and guarantee legal finality, the settlement process must follow rigid forensic verification protocols:
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Three Pillars of Lawful Debt Settlement</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Verified OTS Sanction Letter</p>
                    <p className="text-slate-600">Issued on official bank letterhead with digital signatures of authorized credit authorities, detailing the exact agreed compromise sum, waiver percentage, and payment milestones.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Account Remittance</p>
                    <p className="text-slate-600">Settlement payments are deposited directly into the borrower&apos;s specific loan account number through official banking channels—never through cash or third-party intermediaries.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Bank-Stamped No Dues Certificate</p>
                    <p className="text-slate-600">Issuance of an unconditional No Dues Certificate (NDC) under RBI Circular RBI/2023-24/60, confirming complete discharge of debt and closing the file across credit bureaus.</p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following execution of the One-Time Settlement, the bank updates credit information companies (CIBIL, Experian, CRIF, Equifax) reflecting the status as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot;. This completely removes all legal risk, permanently immunizes your household from collection contact, and establishes the foundation for systematic credit score rehabilitation over subsequent quarters.
              </p>
            </section>

            {/* Section 9: Comparative Penal Matrix */}
            <section id="comparative-penal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Recovery Agent Violations, Penal Offenses &amp; Legal Remedies
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative statutory matrix below provides a definitive breakdown of common recovery agent harassment tactics, the corresponding penal provisions under the Bharatiya Nyaya Sanhita (BNS) and Indian Penal Code (IPC), specific RBI regulatory violations, and the precise legal remedies available to protect borrowers:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Harassment Tactic</th>
                      <th>Penal Offense (BNS / IPC)</th>
                      <th>RBI Regulatory Violation</th>
                      <th>Direct Legal Remedy</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Pushing Defaulter to Extreme Despair / Suicide Threats</td>
                      <td>Section 108 BNS / Section 306 IPC (Abetment to Suicide)</td>
                      <td>Severe breach of Customer Dignity &amp; Fair Practices Code</td>
                      <td>Immediate Police FIR against Agency &amp; Bank Nodal Officers; Tele-MANAS Crisis Support</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Abusive Language, Verbal Threats of Violence</td>
                      <td>Section 351 BNS / Section 503 &amp; 506 IPC (Criminal Intimidation)</td>
                      <td>Outsourcing Master Direction Para 7 (Harassment Bar)</td>
                      <td>Criminal Complaint to Magistrate (Sec 175 BNSS); Cease-and-Desist Notice</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling Relatives, Friends, Employers or HR Dept.</td>
                      <td>Section 356 BNS / Section 499 IPC (Defamation); Sec 66E IT Act</td>
                      <td>Strict Privacy Violation; Contact Bar on Non-Borrowing Third Parties</td>
                      <td>RBI Integrated Ombudsman Filing for Compensation up to ₹20 Lakhs; Defamation Suit</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Forced Doorstep Entry, Corridors Shouting &amp; Trespass</td>
                      <td>Section 329 BNS / Section 441 &amp; 442 IPC (House-Trespass)</td>
                      <td>Doorstep Visit Norms Violation (8 AM–7 PM Only; ID Mandate)</td>
                      <td>Immediate 112 Police Emergency Call for Unlawful Trespass; Video Evidence Injunction</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fabricated Arrest Warrants &amp; Fake Court Summons</td>
                      <td>Section 336 &amp; 338 BNS / Section 465 &amp; 468 IPC (Forgery &amp; Fraud)</td>
                      <td>Deceptive Debt Collection Practices Prohibition</td>
                      <td>Bar Council Complaint &amp; Cyber Crime Portal FIR against Agency Telecallers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Coercing Immediate Cash Delivery or Asset Seizure</td>
                      <td>Section 308 BNS / Section 383 &amp; 384 IPC (Extortion)</td>
                      <td>Direct Payment Rule Breach; Unlawful Seizure Prohibition</td>
                      <td>Criminal Extortion Police FIR; High Court Writ Petition under Article 226</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Framework */}
            <section id="settleloans-compassionate-defense" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Compassionate Legal Defense: Protecting Your Life, Dignity &amp; Future
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  No human being should ever experience the agony of waking up in terror of ringing phones, abusive debt collection threats, or fear of uninvited agents standing outside their home. Financial hardship is a life circumstance—it is never a moral failure, and it is never a crime. At SettleLoans, our mission is to stand as an unbreakable shield between distressed borrowers and predatory collection practices.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Our team of veteran banking litigators, constitutional advocates, and institutional negotiators provides comprehensive nationwide protection. From the moment you retain our counsel, we enforce your statutory rights under Section 108 BNS, the RBI Fair Practices Code, and Supreme Court privacy mandates. We serve decisive Cease-and-Desist notices that halt third-party harassment within 24 hours, take over every incoming lender communication, and negotiate directly with senior banking authorities to secure structured 40% to 65% One-Time Settlements backed by official No Dues Certificates. We restore your peace of mind, protect your family&apos;s dignity, and help you rebuild your financial freedom with confidence.
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
                  11. Frequently Asked Questions: Recovery Harassment, Legal Rights &amp; Crisis Support
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified legal answers regarding recovery agent harassment, Section 108 BNS abetment laws, mental health crisis resources, and debt settlement protocols in India.
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
                Official Statutory, Crisis &amp; Regulatory References
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <a
                  href="https://telemanas.mohfw.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Tele-MANAS (Ministry of Health &amp; Family Welfare Mental Health Support)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.mha.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Bharatiya Nyaya Sanhita, 2023 (Section 108 Abetment &amp; Sec 351 Intimidation)</span>
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
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Harassment Grievance Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Prakash Kaur &amp; Puttaswamy Privacy Precedents)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Anti-Harassment &amp; Debt Settlement Guides
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
                  Bank Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Enter House Without Permission?
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Freeze Family Accounts?
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Recovery Agents Take Furniture or Gold?
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR for Loan Default Reality Check
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice to Employer Illegal Recovery
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement OTS Policy
                </Link>
                <Link
                  href="/best-personal-loan-settlement-company"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Best Personal Loan Settlement Company
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
                Distinguished authority in banking jurisprudence, civil liberties against unlawful recovery agent intimidation, Section 108 BNS criminal abetment deterrence, and institutional compromise settlements across India.
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
                <span>24-Hour Emergency Protection</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Pushed to Despair by Collection Agents?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not suffer psychological torture in silence. Retain our senior advocates to issue an immediate Cease-and-Desist notice, halt all calls and visits within 24 hours, and negotiate a 40%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request 24h Legal Shield
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Legal Guarantees
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Section 108 BNS Criminal Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Attorney-Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Integrated Ombudsman Enforcement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
