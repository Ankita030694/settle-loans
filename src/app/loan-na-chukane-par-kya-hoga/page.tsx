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
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Na Chukane Par Kya Hota Hai? Police Threat Myths, Civil Law & Legal Settlement',
  description: 'Bank ka loan na chukane par kya hota hai? Understand your legal rights against recovery harassment, why police cannot arrest you for loan default, CIBIL impact, and OTS exit solutions.',
  keywords: [
    'loan na chukane par kya hota hai',
    'loan default hone par kya kare',
    'kya loan na chukane par police pakad sakti hai',
    'personal loan default legal consequences in india',
    'bank recovery agent harassment police complaint',
    'section 420 ipc loan default reality',
    'civil vs criminal liability in loan default',
    'cibil score impact after personal loan default',
    'bank loan one time settlement process',
    'how to stop recovery agent calls in india'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-na-chukane-par-kya-hoga',
  },
  openGraph: {
    title: 'Loan Na Chukane Par Kya Hota Hai? Civil Law vs Recovery Myths & Legal Exit',
    description: 'Comprehensive legal analysis on bank loan default in India. Clear the police arrest fear, understand civil law protections under Supreme Court rulings, CIBIL recovery, and One-Time Settlement (OTS).',
    url: 'https://www.settleloans.in/loan-na-chukane-par-kya-hoga',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-na-chukane-par-kya-hoga.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Na Chukane Par Kya Hota Hai Infographic Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Na Chukane Par Kya Hota Hai? Legal Facts & Borrower Rights',
    description: 'Worried about police action or court cases for unpaid loans? Discover landmark Supreme Court protections, RBI guidelines against recovery harassment, and legal debt settlement options.',
    images: ['https://www.settleloans.in/images/infographics/loan-na-chukane-par-kya-hoga.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#webpage",
      "url": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga",
      "name": "Loan Na Chukane Par Kya Hota Hai? Bank Action, Police Threat Myths & Legal Exit via Settlement",
      "description": "Comprehensive legal and financial analysis answering what happens when you cannot repay a personal loan or credit card debt in India. Explains civil breach of contract, police non-involvement, RBI guidelines, and structured OTS debt resolution.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#breadcrumb",
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
          "name": "Loan Na Chukane Par Kya Hoga",
          "item": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#article",
      "headline": "Loan Na Chukane Par Kya Hota Hai? Bank Action, Police Threat Myths & Legal Exit via Settlement",
      "description": "An exhaustive guide addressing borrower anxieties when unable to service loans in India. Covers civil vs criminal liability, Section 420 IPC myths, landmark Supreme Court rulings, RBI Fair Practices Code, CIBIL repair, and One-Time Settlement protocols.",
      "image": "https://www.settleloans.in/images/infographics/loan-na-chukane-par-kya-hoga.jpg",
      "datePublished": "2026-08-26T10:00:00+05:30",
      "dateModified": "2026-08-26T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#webpage"
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
      "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#service",
      "name": "SettleLoans - Debt Resolution & Legal Protection Services",
      "description": "Professional advocate-led legal protection against unlawful debt recovery intimidation, false criminal complaints, and unyielding collection agents, combined with structured One-Time Settlement (OTS) negotiations.",
      "url": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga",
      "image": "https://www.settleloans.in/images/infographics/loan-na-chukane-par-kya-hoga.jpg",
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
        "reviewCount": "2450",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rajesh Kumar Sharma"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "Recovery agents threatened police custody for my unpaid personal loan. SettleLoans advocates intervened, stopped the calls, and resolved the matter at a 55% waiver with a bank NDC.",
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
          "datePublished": "2026-07-11",
          "reviewBody": "After job loss, agents harassed my family. SettleLoans explained civil protections under Supreme Court rulings and secured an official OTS closure.",
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
          "datePublished": "2026-05-24",
          "reviewBody": "Agents sent fake court summons on WhatsApp. Advocates filed counter-complaints under Section 506 IPC and negotiated a clean debt exit.",
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
            "name": "Harpreet Singh"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "Removed all fear of criminal arrest. We settled multiple unsecured debts systematically with authentic bank-stamped sanction letters.",
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
      "@id": "https://www.settleloans.in/loan-na-chukane-par-kya-hoga#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kya loan na chukane par police mujhe arrest ya pakad sakti hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nahi. Bharat me personal loan ya credit card default civil breach of contract hai. Supreme Court aadesh ke anusar police bina shuruati fraud ke kisi borrower ko arrest nahi kar sakti."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal difference between civil loan default and Section 420 cheating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 420 IPC requires proving dishonest intention from day one. Genuine default due to financial hardship after paying initial EMIs is strictly a civil breach, not cheating."
          }
        },
        {
          "@type": "Question",
          "name": "Recovery agent police ki dhamki kyu dete hain aur fake notice kyu bhejte hain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agents darr peda karke vasooli karne ke liye dhamki dete hain kyunki civil court me 3-5 saal lagte hain. Farzi notices bhejna IPC Section 506 aur 383 ke tehat dandniya hai."
          }
        },
        {
          "@type": "Question",
          "name": "What actually happens to your CIBIL score when you default on a loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "90 din par loan NPA banta hai aur score 150-250 points girta hai. One-Time Settlement (OTS) ke baad status 'Settled' ho jata hai, jisse score rebuilding ka rasta khulta hai."
          }
        },
        {
          "@type": "Question",
          "name": "Can bank freeze my salary account or seize my household assets for personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unsecured loan me bank bina court decree ke assets seize nahi kar sakta. Section 60 CPC ke tehat gharelu saman aur provident fund (EPF) poori tarah protected hain."
          }
        },
        {
          "@type": "Question",
          "name": "What is the step-by-step NPA timeline after missing loan EMIs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "1-30 din SMA-0 reminders, 31-60 din SMA-1 calls, 61-90 din SMA-2 notices, aur 91 din par account NPA ho jata hai, jahan se OTS settlement ka rasta khul jata hai."
          }
        },
        {
          "@type": "Question",
          "name": "What legal remedies do banks legitimately have to recover unpaid unsecured debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank Order 37 CPC summary suit, civil arbitration, DRT (₹20 Lakhs se upar), Lok Adalat conciliation ya mutual One-Time Settlement (OTS) se hi recovery kar sakte hain."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do immediately if recovery agents harass my family or workplace?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recordings save karein. Advocate dwara Nodal Officer ko cease-and-desist notice bhijwayein aur RBI Integrated Ombudsman portal (cms.rbi.org.in) par turant complaint darj karein."
          }
        },
        {
          "@type": "Question",
          "name": "How does advocate-assisted One-Time Settlement (OTS) work for a clean exit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advocate Zonal Committee ko financial hardship dossier bhejkar 50%-65% principal waiver negotiate karte hain aur bank-stamped No Dues Certificate jari karwate hain."
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
  { id: 'anxiety-and-the-police-arrest-myth', title: '1. The Core Fear: Kya Police Pakad Legi?' },
  { id: 'civil-vs-criminal-law-protections', title: '2. Civil Breach vs Criminal Fraud: IPC 420' },
  { id: 'recovery-agent-tactics-and-harassment', title: '3. Recovery Agent Coercion & Fake Notices' },
  { id: 'bank-npa-accounting-and-npv-formula', title: '4. Bank NPA Accounting & NPV Strategy' },
  { id: 'infographic-loan-default-realities', title: '5. Visual Guide: Loan Default Legal Realities' },
  { id: 'advocate-intervention-and-defense', title: '6. How Advocates Stop Threats & Shield You' },
  { id: 'sanction-letter-forensics-and-quashing', title: '7. Sanction Forensics & Section 482 Quashing' },
  { id: 'cibil-impact-ndc-and-credit-rebuilding', title: '8. CIBIL Impact, Remittance & Stamped NDC' },
  { id: 'comparative-dispute-resolution-matrix', title: '9. Dispute Resolution Comparative Matrix' },
  { id: 'settleloans-legal-resolution-pathway', title: '10. SettleLoans Legal Defense & OTS Pathway' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LoanNaChukaneParKyaHogaPage() {
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
            <Gavel className="w-3.5 h-3.5" />
            <span>Borrower Safeguards • Civil Rights &amp; OTS Exit</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Na Chukane Par Kya Hota Hai? <span className="text-[#3b82f6] md:text-[#60a5fa]">Bank Action, Police Threat Myths &amp; Legal Settlement</span>
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
              <span>RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Get Legal Protection &amp; Settle Debt</span>
            </Link>
            <Link
              href="#anxiety-and-the-police-arrest-myth"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Understand Your Statutory Rights</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_300px] xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-6 xl:gap-8 items-start">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block sticky top-24 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Case Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Defaulting on a personal loan or credit card in India is exclusively a civil contract dispute. Police cannot arrest or summon honest borrowers. Advocates stop harassment and secure structured 50%–65% OTS settlements.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body */}
          <main className="min-w-0 blog-content space-y-10">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Crucial Realities for Borrowers Facing Loan Default</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Arrest Risk:</strong> Defaulting on unsecured loans due to genuine financial insolvency is a civil breach of contract; police have no legal jurisdiction to arrest or detain you.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 420 IPC Inapplicable:</strong> Cheating requires proving pre-planned deceit at loan disbursement; genuine post-disbursement default is purely a commercial failure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>RBI Protection from Harassment:</strong> Recovery agents cannot contact relatives, visit workplaces unannounced, call after 7 PM, or issue fabricated legal notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Section 60 CPC Asset Shield:</strong> Basic household necessities, tools of trade, salary limits, and employee provident funds (EPF) are completely protected from bank attachment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Exit via OTS:</strong> An advocate-negotiated One-Time Settlement allows a 45% to 65% principal waiver with a bank-stamped No Dues Certificate.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Core Fear: Kya Police Pakad Legi? */}
            <section id="anxiety-and-the-police-arrest-myth" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Core Fear: Kya Police Pakad Legi? Understanding Loan Default Reality
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Jab kisi vyakti ki aarthik sthiti kharab hoti hai—chahe job loss se ya medical emergency se—aur wo bank loan EMIs nahi chuka pata, to sabse bada darr hota hai: <em>&quot;Kya bank police complaint karega? Kya police mujhe pakad legi?&quot;</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Is sawal ka spasht kanooni jawab hai: <strong>Nahi, police aapko personal loan default par arrest nahi kar sakti.</strong> Bharat me loan na chuka pana commercial civil dispute hai, koi criminal offense nahi. Loan agreement Indian Contract Act, 1872 ke tehat civil contract hota hai jisme bank ke paas keval civil recovery ke raste hote hain.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Kanooni Adhar (Constitutional Principle)</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  Supreme Court ne tay kiya hai ki police debt recovery agency nahi hai. Agar agent arrest ki dhamki deta hai, to wo khud IPC Section 506 ke tehat apradh karta hai.
                </p>
              </div>
            </section>

            {/* Section 2: Civil Breach vs Criminal Fraud: IPC 420 & BNS Debunked */}
            <section id="civil-vs-criminal-law-protections" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Civil Breach vs Criminal Fraud: Section 420 IPC &amp; BNS Provisions Debunked
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents darre hue borrowers ko Section 420 IPC (Cheating) aur Section 406 (Criminal Breach of Trust) ke tehat FIR ki dhamki dete hain. Lekin kanoon ke mutabiq Section 420 ke liye shuruat se hi thagne ki mansha (mens rea) hona zaroori hai. Asali documents par liye gaye loan me baad ka default dhokhadhadi nahi banta.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Supreme Court of India ke Aitihasik Faisle</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Dalip Kaur v. Jagnar Singh (2009) 14 SCC 696</p>
                    <p className="text-slate-600 mt-1">Breach of contract ko cheating me tabdeel nahi kiya ja sakta jab tak shuruat me hi thagne ki mansha na ho.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Hridaya Ranjan Prasad Verma v. State of Bihar (2000) 4 SCC 168</p>
                    <p className="text-slate-600 mt-1">Vaada pura na kar pane aur dhokhadhadi me antar hai. Commercial default par FIR dakhil karna kanoon ka durupyog hai.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Recovery Agent Coercion & Fake Notices */}
            <section id="recovery-agent-tactics-and-harassment" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Recovery Agent Coercion, Fake Police Notices &amp; RBI Safeguards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bank civil court me lamba samay lagne ke kaaran third-party collection agencies ko commission par hire karte hain. Yeh agents borrower ke darr ka fayda uthane ke liye gair-kanooni hathkande apnate hain:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Fake Police Notices</h4>
                  <p className="text-xs text-slate-600">WhatsApp par farzi seals aur arrest warrants bhejkar darana IPC Section 465/468 ke tehat non-bailable forgery apradh hai.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Relatives &amp; Workplace Calls</h4>
                  <p className="text-xs text-slate-600">Parivar ya employer ko call karke badnam karna RBI Fair Practices Code aur privacy rights ka ghor ullanghan hai.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Abusive Language &amp; Odd Hours</h4>
                  <p className="text-xs text-slate-600">Subah 8 baje se pehle ya sham 7 baje ke baad call karna, gaali dena IPC Section 506 ke tehat dandniya hai.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Illegal Home Visits</h4>
                  <p className="text-xs text-slate-600">Bina official ID card ke ghar par aakar shor machana legal trespass aur criminal harassment banta hai.</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                RBI Circular (RBI/2022-23/108) ke mutabiq banks apne agents ke har aacharan ke liye kanooni roop se zimmedar hain aur RBI Ombudsman ke madhyam se bank par jurmana lagwaya ja sakta hai.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & NPV Recovery Formula */}
            <section id="bank-npa-accounting-and-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Realities: NPA Provisioning &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Jab borrower 90 din tak EMI nahi bharta, to account Non-Performing Asset (NPA) ban jata hai. Bank ko Substandard NPA me 15% aur Doubtful asset me 100% mandatory provisioning karni padti hai. Kyunki civil court me 3-5 saal lagte hain, bank Net Present Value (NPV) recovery formula se settlement evaluate karte hain:
              </p>

              {/* NPV Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries across time periods t, r is the bank discount rate, and deductions account for 3 to 5 years of litigation expenses and locked regulatory capital reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Is commercial model ke karan bank 50% se 65% principal discount par One-Time Settlement (OTS) karne ke liye taiyar ho jate hain, jisse unka blocked capital release ho jata hai.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-loan-default-realities" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/loan-na-chukane-par-kya-hoga.jpg"
                  alt="Loan Na Chukane Par Kya Hota Hai Infographic: Civil Law vs Recovery Myths, Supreme Court Rulings, NPV Formula & OTS Process"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Legal Roadmap — Civil Default vs Criminal Myths, RBI Rights &amp; OTS Exit</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Analysis</span>
                </div>
              </div>
            </section>

            {/* Section 6: How Advocates Defang Criminal Threats & Shield You */}
            <section id="advocate-intervention-and-defense" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. How Advocate Intervention Stops Harassment &amp; Shifts Bank to Settlement
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Advocate ke formal legal representation lete hi bank recovery ka roop badal jata hai:
              </p>
              <div className="space-y-3 my-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Formal Cease-and-Desist Notice</h4>
                    <p className="text-xs text-slate-600 mt-1">Bank Nodal Officer ko notice bhejkar direct calls band karwayi jati hain aur communication counsel ke through transfer hoti hai.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Counter-Complaints for Coercion (IPC 506)</h4>
                    <p className="text-xs text-slate-600 mt-1">Farzi notices ka record banakar Cyber Crime aur Magistrate ke samne counter-criminal proceedings ki jati hain.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">RBI Ombudsman Escalation</h4>
                    <p className="text-xs text-slate-600 mt-1">RBI Integrated Ombudsman portal par recovery violations ki complaint se bank par regulatory penalty ka dabav banta hai.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <BadgePercent className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Direct Institutional OTS Negotiation</h4>
                    <p className="text-xs text-slate-600 mt-1">Hardship dossier ke aadhar par bank Zonal Committee se 50% se 65% principal waiver par settlement tay hota hai.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Sanction Letter Forensics & Section 482 CrPC Quashing */}
            <section id="sanction-letter-forensics-and-quashing" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Sanction Letter Forensics &amp; Section 482 CrPC / 528 BNSS Quashing Precedents
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Yadi collection agency Magistrate ke samne Section 156(3) ya Section 200 CrPC ke tehat farzi criminal complaint dakhil kare, to High Court me Section 482 CrPC (Section 528 BNSS) ke tehat petition dakhil karke use turant quash karwaya jata hai:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-700">
                <li><strong>No Initial Deceit:</strong> Sanction letters aur KYC sabit karte hain ki borrower ne shuruat me koi jaal-saazi nahi ki.</li>
                <li><strong>History of Part-Payment:</strong> Shuruati EMIs sabit karti hain ki borrower ki mansha dhokha dene ki nahi thi.</li>
                <li><strong>Civil Nature:</strong> Vivad keval balance amount ka hai jiska faisla civil court me hi ho sakta hai.</li>
                <li><strong>Bhajan Lal Precedent:</strong> Ulterior motive aur anuchit dabav banane ke liye dakhil criminal case ko High Court radd karta hai.</li>
              </ul>
            </section>

            {/* Section 8: CIBIL Impact, Remittance Protocols & Stamped NDC */}
            <section id="cibil-impact-ndc-and-credit-rebuilding" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. CIBIL Score Impact, Secure Remittance &amp; RBI-Mandated No Dues Certificate
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Loan default se credit score 150-250 points gir jata hai. Lekin settlement ke baad recovery band hoti hai aur score re-build hota hai. Surakshit settlement ke 3 anivarya niyam:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Settlement Protocols</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Official Sanction Letter</p>
                    <p className="text-slate-600">Letter bank ke official letterhead par unique reference number ke sath aana chahiye.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Direct Bank Remittance</p>
                    <p className="text-slate-600">Payment seedhe bank loan account me RTGS/NEFT se honi chahiye, agent ko nahi.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Stamped NDC &amp; CIBIL</p>
                    <p className="text-slate-600">RBI circular ke tehat 30 din me No Dues Certificate aur CIBIL me Settled status update hota hai.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix Table */}
            <section id="comparative-dispute-resolution-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Dispute Resolution Comparative Matrix: Bank Recovery Avenues in India
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Bharat me loan default ke recovery madhyamon ka tulnatmak vishleshan:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Recovery Mechanism</th>
                      <th>Legal Forum / Authority</th>
                      <th>Statutory Basis</th>
                      <th>Criminal Risk</th>
                      <th>Typical Settlement Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Police FIR / Arrest Threat</td>
                      <td>Local Police Station</td>
                      <td>Section 420 IPC / 318 BNS</td>
                      <td><strong>Zero</strong> (Rejected)</td>
                      <td>Quashed or closed as civil matter</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Summary Recovery Suit</td>
                      <td>City Civil Court</td>
                      <td>Order 37, CPC 1908</td>
                      <td>None (Monetary)</td>
                      <td>Compromise decree with installment relief</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Commercial Arbitration</td>
                      <td>Arbitrator Tribunal</td>
                      <td>Arbitration Act</td>
                      <td>None (Civil Award)</td>
                      <td>Section 30 Consent Award (45%–60% OTS)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 Cheque Bounce</td>
                      <td>Magistrate Court</td>
                      <td>NI Act</td>
                      <td>Quasi-criminal</td>
                      <td>Compounded on payment of agreed amount</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">National Lok Adalat</td>
                      <td>DLSA</td>
                      <td>Legal Services Act</td>
                      <td>None (Compromise)</td>
                      <td>Final award with 50%–70% waiver</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & OTS Pathway + CompanySection */}
            <section id="settleloans-legal-resolution-pathway" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense Pathway: Your Shield Against Harassment
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Karz na chuka pane par darr me jeene ke bajaye sahi kanooni rasta apnayein. SettleLoans banking advocates harassment rukwate hain aur One-Time Settlement (OTS) karwake aarthik aazaadi dilwate hain.
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
                  11. Frequently Asked Questions: Loan Na Chukane Par Kya Hoga
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Loan na chukane par bank action, police arrest myths, civil rights aur settlement se jude sawalon ke kanooni jawab.
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (Dalip Kaur Precedent)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure (Section 60 CPC)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://nalsa.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">National Legal Services Authority (Lok Adalat Guidelines)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Protection &amp; Loan Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2">
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
                  Bank FIR Reality Check
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Harassment Complaint Guide
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property?
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Loan Settlement
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Settlement
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6 h-fit">
            
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
                Senior advocate specializing in banking law, borrower rights protection against recovery intimidation, and RBI-compliant compromise settlement frameworks with over 10+ years of institutional advisory experience.
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
              <h4 className="font-bold text-base text-white mb-2">Recovery Agents Threatening Arrest?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not suffer under illegal threats or fake police summons. Have our senior banking advocates serve cease-and-desist notices, halt harassment, and negotiate an official 50%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Legal Consultation
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
                  <span>Supreme Court Precedent Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
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
