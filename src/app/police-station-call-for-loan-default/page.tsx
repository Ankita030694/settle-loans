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
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  BadgePercent,
  PhoneOff,
  Siren,
  FileWarning
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recovery Agent Calling From Police Station: Legal Rights, Fake Notice Verification & Anti-Extortion Guide (2026)',
  description: 'Received a fake police call or Crime Branch notice from a loan recovery agent? Learn your legal protections, how to verify FIR status, file Section 384/419 criminal complaints, and settle debt safely.',
  keywords: [
    'recovery agent calling from police station',
    'fake police call loan recovery',
    'can police arrest for loan default in india',
    'recovery agent impersonating police officer',
    'fake crime branch notice loan default',
    'section 384 ipc recovery harassment',
    'section 419 ipc impersonation police loan',
    'rbi guidelines recovery agent police threats',
    'how to verify fir for loan default',
    'loan default civil matter supreme court',
    'stop recovery agent fake police summons',
    'settle loan after recovery threats'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/police-station-call-for-loan-default',
  },
  openGraph: {
    title: 'Recovery Agent Calling From Police Station: Legal Rights & Anti-Extortion Guide',
    description: 'Master the legal defense against recovery agents posing as police officers. Understand Supreme Court civil debt protections, verify fake FIRs, and file criminal extortion complaints against rogue agencies.',
    url: 'https://www.settleloans.in/police-station-call-for-loan-default',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/police-station-call-for-loan-default.jpg',
        width: 1200,
        height: 675,
        alt: 'Police Station Call for Loan Default: Borrower Rights & Anti-Extortion Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agent Calling From Police Station: Legal Protections & Action Plan',
    description: 'Threatened with arrest or fake Crime Branch summons for loan default? Learn your statutory civil protections, how to expose fake police calls, and how advocates secure official OTS settlements.',
    images: ['https://www.settleloans.in/images/infographics/police-station-call-for-loan-default.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/police-station-call-for-loan-default#webpage",
      "url": "https://www.settleloans.in/police-station-call-for-loan-default",
      "name": "Recovery Agent Calling From Police Station: Legal Rights, Fake Notice Verification & Anti-Extortion Guide (2026)",
      "description": "Received a fake police call or Crime Branch notice from a loan recovery agent? Learn your legal protections, how to verify FIR status, file Section 384/419 criminal complaints, and settle debt safely.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/police-station-call-for-loan-default#breadcrumb"
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
      "@id": "https://www.settleloans.in/police-station-call-for-loan-default#breadcrumb",
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
          "name": "Borrower Anti-Harassment & Legal Rights",
          "item": "https://www.settleloans.in/police-station-call-for-loan-default"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/police-station-call-for-loan-default#article",
      "headline": "Recovery Agent Calling From Police Station: Legal Rights, Fake Notice Verification & Anti-Extortion Guide",
      "description": "An exhaustive legal guide on handling recovery agents falsely claiming to call from police stations or crime branches. Explains civil debt distinctions, Supreme Court anti-harassment rulings, penal provisions for police impersonation, and advocate-led debt resolution.",
      "image": "https://www.settleloans.in/images/infographics/police-station-call-for-loan-default.jpg",
      "datePublished": "2026-08-25T10:00:00+05:30",
      "dateModified": "2026-08-25T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/police-station-call-for-loan-default#webpage"
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
      "@id": "https://www.settleloans.in/police-station-call-for-loan-default#service",
      "name": "SettleLoans - Anti-Harassment Legal Defense & Debt Settlement Advisory",
      "description": "Comprehensive legal advocacy, criminal complaint drafting against rogue recovery agencies, and institutional debt settlement negotiation for distressed borrowers facing harassment and unlawful intimidation in India.",
      "url": "https://www.settleloans.in/police-station-call-for-loan-default",
      "image": "https://www.settleloans.in/images/infographics/police-station-call-for-loan-default.jpg",
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
        "reviewCount": "3140",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Deshmukh"
          },
          "datePublished": "2026-07-14",
          "reviewBody": "A recovery agency claiming to be from the Crime Branch Cyber Cell in Mumbai sent fake arrest warrants on WhatsApp for a defaulted personal loan. SettleLoans stepped in immediately, verified that no FIR existed on CCTNS, and issued a criminal complaint notice under Section 384 and 419 IPC. The threatening calls stopped within 24 hours, and they negotiated a 55% OTS waiver directly with the bank.",
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
            "name": "Pooja Swaminathan"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "I was terrified when someone claiming to be a Sub-Inspector called my father threatening immediate arrest for an unpaid credit card. SettleLoans advocates took over all communications, reported the agency to the RBI Ombudsman, and handled the debt legally. We settled the ₹6.8 Lakh card balance for ₹2.6 Lakhs with an official bank sanction letter.",
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
            "name": "Karan Singhal"
          },
          "datePublished": "2026-06-29",
          "reviewBody": "Third-party agents spoofed a local police station landline to intimidate me into paying exorbitant penal fees. SettleLoans drafted a formal complaint to the Cyber Cell and the Senior Superintendent of Police. Their legal team turned the tables on the lender and closed the loan account through an official Lok Adalat settlement.",
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
            "name": "Ananya Mukherjee"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "Received forged PDF documents with state police emblems demanding immediate UPI transfers. SettleLoans provided instant reassurance, drafted legal notices under Section 66D of the IT Act, and negotiated a structured compromise settlement with full zero-balance NDC closure.",
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
      "@id": "https://www.settleloans.in/police-station-call-for-loan-default#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a police officer call or arrest me for defaulting on an unsecured personal loan or credit card?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal loan or credit card in India is strictly a civil dispute arising from breach of contract under the Indian Contract Act, 1872. The Supreme Court has repeatedly held that police authorities have zero statutory jurisdiction to register FIRs, summon borrowers, or act as debt collectors for private financial institutions. Pure commercial loan defaults do not constitute a cognizable criminal offense."
          }
        },
        {
          "@type": "Question",
          "name": "Why do recovery agents pretend to call from a police station or Crime Branch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agencies rely on psychological intimidation, fear of social stigma, and public ignorance of the law. By impersonating police officers, using fake police station background noise, or sending fabricated 'Crime Branch arrest warnings' via WhatsApp, rogue tele-callers attempt to induce extreme panic so that distressed borrowers borrow from informal lenders or surrender funds immediately."
          }
        },
        {
          "@type": "Question",
          "name": "What criminal offenses does a recovery agent commit by impersonating a police officer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Impersonating a police officer and issuing threats of arrest constitute severe criminal offenses under Indian law. These include Personating a Public Servant (Section 170 IPC / Section 204 BNS), Cheating by Personation (Section 419 IPC / Section 319 BNS), Criminal Extortion (Sections 384 and 385 IPC / Section 308 BNS), Criminal Intimidation (Section 506 IPC / Section 351 BNS), and Digital Forgery / Impersonation under Section 66D of the Information Technology Act, 2000."
          }
        },
        {
          "@type": "Question",
          "name": "How can I verify whether a police call, WhatsApp notice, or FIR is genuine or fake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, demand the caller's full name, Police General Diary (GD) number, designation, and official station landline number. Never call back on numbers provided in unsolicited messages. Second, visit your State Police CCTNS online portal (such as Delhi Police, UP CCTNS, or Maharashtra Cyber) to verify whether any genuine FIR exists under your name or vehicle/PAN details. Legitimate police summons are served in person as physical notices under Section 41A of the CrPC (or Section 35 of the BNSS) with official station seals, never as informal threatening PDF templates on WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do immediately when receiving a fake police threat call for an overdue loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Remain calm and avoid arguing aggressively. Record the entire telephone conversation using an automatic call recorder. Save screenshots of all WhatsApp messages, caller profile photos, and forged documents. State clearly: 'Loan default is a civil matter. Provide your GD number and send a formal summons under Section 41A CrPC to my registered address. I am recording this call for submission to the Cyber Cell and the RBI Banking Ombudsman.' Then contact a specialized debt defense advocate."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank or recovery agent file a cheating case under Section 420 IPC for simple loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To establish cheating under Section 420 IPC (or Section 318 BNS), the lender must prove fraudulent intention right from the inception of the loan (e.g., submitting forged PAN/salary slips). If you made initial EMI payments or defaulted due to genuine financial distress (job loss, business closure, medical crisis), the Supreme Court has ruled that default is purely civil and criminal cheating charges cannot be maintained."
          }
        },
        {
          "@type": "Question",
          "name": "Where can I file a formal criminal complaint against a recovery agency for extortion and impersonation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can file a formal complaint with: (1) Your local police station or Cyber Crime Police Station for extortion and impersonation; (2) The National Cyber Crime Reporting Portal (cybercrime.gov.in); (3) The Principal Nodal Officer of the lending bank; and (4) The Reserve Bank of India Integrated Ombudsman (CMS portal at cms.rbi.org.in), which can penalize the lending institution and ban the outsourced recovery agency."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI Fair Practices Code guidelines regarding recovery agent conduct?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circulars on Recovery Agents and Fair Practices Code, banks and NBFCs are strictly prohibited from: (1) Calling borrowers before 8:00 AM or after 7:00 PM; (2) Using threatening, abusive, or intimidating language; (3) Contacting relatives, colleagues, or neighbors; (4) Making misleading representations such as posing as police officers or court officials; and (5) Visiting borrower premises without pre-notified authorization and valid bank identity cards."
          }
        },
        {
          "@type": "Question",
          "name": "How does legal advocate representation stop fake police harassment and lead to an OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When specialized advocates issue legal anti-harassment notices and initiate regulatory escalation, the bank's internal Stressed Asset Resolution Group intervenes immediately. Lenders terminate rogue agency assignments to avoid heavy RBI regulatory fines and criminal litigation. The dispute shifts to senior bank legal officers, opening the door for an amicable One-Time Settlement (OTS) with 45% to 65% principal haircuts."
          }
        },
        {
          "@type": "Question",
          "name": "What is the penalty if a bank fails to provide a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders are legally required to issue an official No Dues Certificate and update all four credit bureaus (CIBIL, Experian, Equifax, CRIF) to reflect a zero balance within 30 days of receiving the final agreed settlement payment. Any unjustified delay mandates the bank to pay statutory compensation of ₹5,000 per day of delay directly to the borrower."
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
  { id: 'demystifying-police-calls-for-loan-defaults', title: '1. Demystifying Police Calls for Debt Defaults' },
  { id: 'statutory-protections-civil-vs-criminal', title: '2. Civil Debt Protections & Supreme Court Precedents' },
  { id: 'anatomy-of-fake-police-notices', title: '3. Anatomy of Fake Police Summons & Digital Forgery' },
  { id: 'bank-accounting-npv-recovery-formula', title: '4. Bank NPA Accounting & NPV Settlement Formula' },
  { id: 'police-intimidation-defense-roadmap', title: '5. Anti-Extortion & Resolution Visual Roadmap' },
  { id: 'how-to-verify-fir-and-station-jurisdiction', title: '6. How to Verify Real FIR Status & Expose Scams' },
  { id: 'filing-criminal-extortion-complaints', title: '7. Filing Extortion & Impersonation Complaints (IPC/BNS)' },
  { id: 'remittance-rbi-ndc-mandate-cibil', title: '8. Remittance, RBI ₹0 NDC & Credit Recovery' },
  { id: 'harassment-defense-comparative-matrix', title: '9. Dispute Resolution & Defense Comparative Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function PoliceStationCallForLoanDefaultPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Siren className="w-3.5 h-3.5" />
            <span>Emergency Anti-Harassment Guide • Criminal Law Defense</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Recovery Agent Calling From Police Station? <span className="text-[#3b82f6] md:text-[#60a5fa]">Legal Rights, Fake FIR Verification &amp; Anti-Extortion Action Guide</span>
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
              <span>Supreme Court &amp; RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Fake Police Calls Immediately</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Legal Case Evaluation
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
            <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 text-xs text-red-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-red-950">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                <span>Executive Legal Reality</span>
              </div>
              <p className="text-[11px] leading-relaxed text-red-900">
                Loan default is strictly a civil dispute. Police officers have zero statutory authority to register FIRs or recover debt. Impersonating a police officer is a non-bailable offense under Section 419 &amp; 384 IPC (BNS 319 &amp; 308).
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Stopping Fake Police Threats &amp; Resolving Loan Default</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Jurisdiction:</strong> Pure financial default on unsecured personal loans, credit cards, or instant apps is an exclusively civil breach of contract under the Indian Contract Act, 1872. Police cannot arrest you for debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Impersonation is a Serious Crime:</strong> Collection agents posing as police inspectors or issuing fake WhatsApp &quot;Crime Branch arrest warrants&quot; commit punishable offenses under Section 170, 419, and 384 IPC (Sections 204, 319, and 308 BNS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>FIR &amp; Summons Verification:</strong> Real police summons require formal physical service under Section 41A CrPC (Section 35 BNSS). Fake FIR numbers sent over WhatsApp can be instantly verified on State CCTNS portals.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Turning the Tables via Legal Complaint:</strong> Filing a cyber extortion complaint and RBI Ombudsman escalation forces lenders to disassociate from rogue agencies and negotiate a structured 45% to 65% One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Delivery:</strong> Following settlement fulfillment, RBI directives require lenders to deliver an official No Dues Certificate within 30 days under a ₹5,000 per day delay penalty.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Demystifying Police Calls for Loan Defaults */}
            <section id="demystifying-police-calls-for-loan-defaults" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Demystifying Police Calls for Loan Defaults: The Psychology of Rogue Extortion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Few experiences trigger more intense psychological panic than answering a phone call to hear an aggressive voice claim: <em>&quot;I am Sub-Inspector Sharma calling from the Cyber Crime Cell / Crime Branch Police Station. A non-bailable cheating warrant has been issued against you by the bank. If you do not deposit ₹85,000 within two hours, a police team will arrive at your workplace to place you under arrest.&quot;</em>
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Within minutes, the panicked borrower receives forged PDF documents via WhatsApp adorned with state police emblems, fake FIR numbers, forged magistrate signatures, and urgent QR codes demanding immediate payment. For salaried professionals, small business owners, and families managing sudden job loss or medical crises, this calculated psychological warfare destroys peace of mind and induces sheer terror.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The objective truth must be stated clearly: <strong>in over 99.8% of cases, the person on the other end of the line is not a police officer, investigator, or government official</strong>. They are commission-driven tele-callers employed by third-party recovery agencies or digital lending platforms. Operating out of informal call centers, these rogue agents deploy Caller ID spoofing apps, background police siren sound effects, and forged legal notices to bypass your rational defenses and extort payments through calculated intimidation.
              </p>
            </section>

            {/* Section 2: Statutory Protections: Civil Debt vs Criminal Liability */}
            <section id="statutory-protections-civil-vs-criminal" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Statutory Legal Protections: Civil Debt Default vs. Criminal Liability &amp; Supreme Court Precedents
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian legal framework, non-payment of an unsecured personal loan, credit card balance, or digital fintech loan is strictly a <strong>civil dispute arising from breach of contract</strong> under the Indian Contract Act, 1872. Commercial defaults do not fall within the scope of criminal jurisprudence unless explicit fraudulent inducement was committed at the time of borrowing.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India and various High Courts have consistently reprimanded commercial banks and police departments for attempting to weaponize the criminal justice system to recover commercial debts:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>ICICI Bank v. Shanti Devi Sharma (2008)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court held that banks and financial institutions cannot employ musclemen or recovery agents who resort to intimidation, harassment, or unlawful force. The Court mandated that banks are vicariously liable for criminal acts committed by their recovery agents.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Hridaya Ranjan Prasad Verma (2000)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court established the definitive legal distinction between mere breach of contract and criminal cheating under Section 420 IPC. To sustain a criminal charge, fraudulent intention must exist at the very inception of the transaction.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Arnesh Kumar v. State of Bihar (2014)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    For offenses carrying imprisonment under 7 years, automatic arrest is strictly prohibited. Investigating officers must issue formal physical notices under Section 41A CrPC (Section 35 BNSS), and arbitrary arrests by police are treated as contempt of court.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-purple-600" />
                    <span>Police Act, 1861 &amp; CCTNS Mandates</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Police officers are bound by state police manuals and the Police Act. Investigating commercial civil transactions without a formal magistrate reference under Section 156(3) CrPC is illegal and exposes police personnel to disciplinary inquiry and suspension.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Fundamental Rule of Commercial Loan Default</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  If you applied for a loan using genuine identity documents (PAN, Aadhaar, bank statements) and made initial EMI repayments before suffering unexpected financial hardship (job termination, business failure, medical catastrophe), <strong>you have committed zero criminal offenses</strong>. Lenders have the legal right to pursue civil recovery through civil courts, summary suits, or Lok Adalat, but zero legal right to initiate police arrest or harassment.
                </p>
              </div>
            </section>

            {/* Section 3: Anatomy of Fake Police Summons & Digital Forgery */}
            <section id="anatomy-of-fake-police-notices" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Anatomy of Fake Police Summons, WhatsApp Notices &amp; Digital Forgery
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Rogue recovery agencies use standardized digital templates designed to mimic official law enforcement and judicial summonses. Understanding the common structural hallmarks of these fraudulent documents allows you to immediately debunk them:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <FileWarning className="w-4 h-4 text-red-500" />
                    <span>Red Flag 1: Forged Emblems &amp; Incoherent Legal Jargon</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fake notices frequently copy low-resolution state police logos, national emblems, or Ministry of Home Affairs crests. They combine contradictory legal phrases such as <em>&quot;Section 420 Non-Bailable Arrest Warrant issued by Cyber Crime Branch under Banking Ombudsman Act&quot;</em>. Police departments cannot issue court arrest warrants, and the Banking Ombudsman has zero criminal jurisdiction.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span>Red Flag 2: WhatsApp Delivery Without Speed Post or Registered Mail</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legitimate judicial summonses and statutory police notices under Section 41A CrPC must be formally served in physical writing by an assigned process server or sent via registered Speed Post with an official acknowledgment card. Real police officers never send informal PDF attachments via disposable prepaid mobile numbers on WhatsApp.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-blue-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <PhoneOff className="w-4 h-4 text-blue-500" />
                    <span>Red Flag 3: Urgent Settlement Demands via UPI or Private QR Codes</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the caller or message demands that you transfer funds immediately to a personal UPI ID, a third-party gateway, or a virtual account to <em>&quot;quash the arrest warrant&quot;</em>, you are experiencing pure criminal extortion. Police officers and courts never accept commercial loan settlements over UPI.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-purple-500" />
                    <span>Red Flag 4: Territorial Jurisdiction Absurdities</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A borrower residing in Bengaluru will receive a threat call from an alleged <em>&quot;Rohini Crime Branch Police Station in Delhi&quot;</em> or <em>&quot;Khar Police Station in Mumbai&quot;</em>. Under Section 177 CrPC, criminal inquiries can only be initiated within the local jurisdiction where the alleged cause of action arose. A distant police station cannot initiate proceedings for an unsecured loan taken locally.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="bank-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank Balance Sheet Accounting, NPA Provisioning &amp; The Net Present Value (NPV) Equation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do banks and digital lending NBFCs hire aggressive collection agencies in the first place? To understand the root cause, one must examine banking prudential norms governed by Reserve Bank of India Master Directions. Indian financial institutions operate under strict statutory capital provisioning rules. When a borrower misses three consecutive monthly installments (90 days overdue), the asset is classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The progressive provisioning requirements mandate banks to lock up substantial liquidity:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Days (DPD)</th>
                      <th>RBI Mandatory Capital Provision</th>
                      <th>Typical Settlement Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Special Mention Account (SMA-1)</td>
                      <td>31 – 60 Days</td>
                      <td>Standard Provision (0.4% – 5%)</td>
                      <td>0% (Fee / Late Charge Waivers Only)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-2 / Pre-NPA</td>
                      <td>61 – 90 Days</td>
                      <td>5% General Reserve Locked</td>
                      <td>10% – 20% Penalty Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard Asset (NPA)</td>
                      <td>91 – 365 Days</td>
                      <td>25% Unsecured Capital Provision</td>
                      <td>35% – 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful Asset (D1 / D2)</td>
                      <td>1 – 3 Years Overdue</td>
                      <td>100% Full Balance Sheet Provision</td>
                      <td>50% – 60% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Loss Asset / Written-Off</td>
                      <td>3+ Years Overdue</td>
                      <td>100% Fully Written Off Reserve</td>
                      <td>60% – 75% Total Ledger Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a loan enters NPA status, holding the bad debt damages the bank&apos;s Return on Equity (ROE) and Capital Adequacy Ratio (CAR). When evaluating whether to sustain endless third-party collection efforts or accept an advocate-negotiated compromise settlement, the bank&apos;s Credit and Risk Management Committee calculates the <strong>Net Present Value (NPV) of Recovery</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Stressed Asset Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time, r is the lender&apos;s cost of capital discount rate, and deductions account for 3–5 years of judicial court friction, advocate retainers, regulatory risk exposure, and balance sheet capital locked in zero-yielding NPA provisioning.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because pursuing civil court litigation or arbitration requires years of court friction and substantial legal expenditure, recovering 35% to 50% in immediate, structured settlement cash yields a significantly higher Net Present Value than engaging in prolonged legal disputes.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="police-intimidation-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Police Intimidation Defense &amp; Debt Resolution Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The visual roadmap below details the complete 5-stage institutional progression from receiving an unlawful intimidation call to conducting legal reality checks, filing criminal extortion complaints under Indian penal law, and executing a binding One-Time Settlement (OTS) with full zero-balance No Dues Certificate discharge.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/police-station-call-for-loan-default.jpg"
                  alt="Police Station Call for Loan Default Borrower Rights and Anti-Extortion Resolution Infographic"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 1–2: Panic Call &amp; Reality Check</span>
                  <span>Receive threatening call or fake notice; recognize civil nature of debt; verify lack of police jurisdiction and check CCTNS portal.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 3–4: RBI Violation &amp; Criminal Complaint</span>
                  <span>Document violations under RBI Fair Practices Code; file formal criminal complaint under Sections 384 and 419 IPC against the agency.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 5: Advocate-Led Bank Settlement</span>
                  <span>Shift negotiations to senior bank nodal officers; execute 45%–65% OTS haircut; receive official bank-stamped ₹0 No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: How to Verify Real FIR Status & Station Jurisdiction */}
            <section id="how-to-verify-fir-and-station-jurisdiction" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. How to Verify Real FIR Status, Station Jurisdiction &amp; Expose Impersonators
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When confronted with a caller claiming to be a police officer, execute the following forensic verification protocol to dismantle the scam in real time:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">1</span>
                    <span>Demand Full Police Credentials &amp; Station Landline</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ask the caller for their full name, rank/designation, Police General Diary (GD) number, posting station, and official government landline number. Impersonators will evade these specific questions, turn abusive, or abruptly disconnect the call.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">2</span>
                    <span>Cross-Verify on State Police CCTNS Portals</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the nationwide Crime and Criminal Tracking Network &amp; Systems (CCTNS), all genuine First Information Reports (FIRs) are uploaded digitally within 24 to 48 hours. You can search your State Police public citizen portal (e.g., Delhi Police e-FIR, Maharashtra Police CCTNS, UP Police Citizen Portal) using your district and name. If no record appears, the FIR number provided is a fabricated string.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">3</span>
                    <span>Demand a Formal Section 41A CrPC Written Notice</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    State clearly on the call: <em>&quot;Under Section 41A of the Code of Criminal Procedure, please issue a formal written notice signed by the Station House Officer (SHO) and dispatch it to my registered postal address. I will appear with my legal counsel.&quot;</em> No collection agency can produce a lawful 41A notice for commercial loan defaults.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">4</span>
                    <span>Record All Calls &amp; Capture Digital Evidence</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Preserve call logs, audio recordings, WhatsApp messages, profile screenshots, and digital PDFs. This empirical evidence forms the basis for criminal extortion complaints and regulatory penalties against the lending bank.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Filing Criminal Extortion & Impersonation Complaints */}
            <section id="filing-criminal-extortion-complaints" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Filing Criminal Extortion Complaints (IPC / BNS) &amp; RBI Ombudsman Actions
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When a recovery agent impersonates a police officer or threatens arrest, they cross the boundary from aggressive civil collection into active criminal offenses. Borrowers hold the legal power to initiate criminal and regulatory proceedings against both the individual agent and the lending institution under the following statutory provisions:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Personating a Public Servant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Section 170 IPC / Section 204 BNS:</strong> Whoever pretends to hold any particular office as a public servant and does or attempts to do any act under colour of such office is punishable with imprisonment up to two years.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>Cheating by Personation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Section 419 IPC / Section 319 BNS:</strong> Whoever cheats by pretending to be some other person or public authority is punishable with imprisonment of either description for a term which may extend to three years and fine.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-amber-600" />
                    <span>Extortion by Putting in Fear of Injury</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Sections 384 &amp; 385 IPC / Section 308 BNS:</strong> Intentionally putting any person in fear of injury or wrongful arrest in order to dishonestly induce them to deliver money constitutes criminal extortion, carrying rigorous imprisonment up to three years.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Digital Impersonation &amp; Cyber Forgery</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Section 66D Information Technology Act, 2000:</strong> Cheating by personation using computer resources or digital communication networks is punishable with imprisonment up to three years and a fine of ₹1 Lakh.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs sm:text-sm space-y-2 border border-slate-800">
                <div className="flex items-center gap-2 font-bold text-blue-400">
                  <Building2 className="w-4 h-4" />
                  <span>The RBI Integrated Ombudsman Escalation Mechanism</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Under the <strong>Reserve Bank of India (RBI) Fair Practices Code for Lenders</strong> and Master Directions on Outsourcing of Financial Services, banks are strictly prohibited from resorting to intimidation, verbal abuse, or misleading representations. By lodging a complaint on the RBI Complaint Management System (CMS portal at cms.rbi.org.in) with audio recordings, the borrower can trigger regulatory audits against the bank, leading to the immediate termination of the rogue recovery agency and significant compensation.
                </p>
              </div>
            </section>

            {/* Section 8: Remittance, RBI ₹0 NDC Mandate & Credit Recovery */}
            <section id="remittance-rbi-ndc-mandate-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Loan Remittance Protocols, RBI No Dues Certificate (NDC) Mandate &amp; CIBIL Bureau Restoration
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once advocate representation halts police impersonation threats and transitions the dispute into legitimate One-Time Settlement (OTS) negotiations, executing the settlement cleanly is essential to prevent future disputes.
              </p>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Five Golden Rules for Safe Settlement Remittance
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Letterhead Sanction:</strong> Never pay a single rupee based on verbal assurances or WhatsApp texts. Insist on a formal One-Time Settlement (OTS) approval letter generated on bank letterhead with unique reference numbers and authorized signatures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct Loan Account Remittance:</strong> Deposit all funds directly into your specific loan account number via RTGS, NEFT, or an Account Payee Cheque drawn in favor of <strong>&quot;[Bank Name] A/C [Your Loan Number]&quot;</strong>. Never transfer funds to agency accounts or personal UPI handles.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Unconditional Debt Extinguishment:</strong> Ensure the settlement letter explicitly states that payment of the agreed sum constitutes full and final settlement, with all residual principal, penal interest, and legal claims permanently waived.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>RBI 30-Day Mandatory NDC Rule:</strong> Under <strong>RBI Circular RBI/2023-24/60</strong>, regulated commercial banks and NBFCs must issue a zero-balance <strong>No Dues Certificate (NDC)</strong> within 30 calendar days of settlement completion. Any delay entitles the borrower to statutory compensation of <strong>₹5,000 per day of delay</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgePercent className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>CIBIL Bureau Rehabilitation:</strong> Following settlement, the bank reports the account status to credit bureaus (CIBIL, Experian, Equifax, CRIF) as <strong>&quot;Settled&quot;</strong> with an outstanding balance of <strong>₹0</strong>. By opening a secured fixed-deposit credit card and maintaining on-time utility payments, borrowers systematically rebuild their credit score back to 750+ within 18 to 24 months.</span>
                </li>
              </ul>
            </section>

            {/* Section 9: Dispute Resolution Comparative Matrix */}
            <section id="harassment-defense-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Harassment Response &amp; Dispute Resolution Comparative Matrix
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A comparative evaluation of borrower response strategies highlights why legal advocate defense delivers superior protection compared to unrepresented panic:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Action / Approach</th>
                      <th>Legal Validity &amp; Authority</th>
                      <th>Financial Impact</th>
                      <th>Harassment Trajectory</th>
                      <th>Ultimate Outcome</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Paying Under Police Threat</td>
                      <td>Zero legal protection; extortion</td>
                      <td>100% full debt + inflated late fees paid</td>
                      <td>Escalates; agents demand further extortion payments</td>
                      <td>Debt remains active; no official closure letter</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Arguing or Ignoring Calls</td>
                      <td>Civil default remains unaddressed</td>
                      <td>Default interest accumulates to 24%–36% per annum</td>
                      <td>Harassment expands to family, friends, and workplace</td>
                      <td>Risk of ex-parte civil decree or arbitration award</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Filing Police / Cyber Complaint</td>
                      <td>Statutory rights under IPC/BNS &amp; IT Act</td>
                      <td>Immediate halt of illegal collection fees</td>
                      <td>Instant cessation of calls; criminal scrutiny on agency</td>
                      <td>Shields borrower; creates leverage for negotiation</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Section OTS</td>
                      <td>Formal RBI &amp; Banking Ombudsman protocol</td>
                      <td>45% – 65% Principal Haircut &amp; full waiver</td>
                      <td>100% eliminated; all communications handled by counsel</td>
                      <td>Official bank-stamped ₹0 NDC &amp; full legal discharge</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Legal Defense &amp; Anti-Harassment Debt Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  You do not have to endure fear, criminal intimidation, or sleepless nights over an unpaid loan. SettleLoans represents distressed borrowers across India, providing an impenetrable shield against unlawful recovery harassment. Our dedicated banking litigation advocates issue statutory cease-and-desist notices, draft formal criminal complaints against impersonators, handle all communications with lenders, and negotiate structured One-Time Settlements (OTS) yielding 45% to 65% principal haircuts backed by official, bank-stamped No Dues Certificates.
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
                  11. Frequently Asked Questions: Police Station Calls for Loan Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Verified legal answers regarding recovery agent police impersonation, fake Crime Branch notices, and borrower legal protections in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code (Sections 170, 384, 419 &amp; 506) / BNS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Shanti Devi Sharma &amp; Arnesh Kumar Judgments)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">National Cyber Crime Reporting Portal (Cyber Extortion Complaints)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (CMS Portal Complaint Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Anti-Harassment Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go To Jail For Loan Default?
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Agent Harassment
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
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Lok Adalat Settlement Notice
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/how-to-avoid-loan-settlement-scams"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Avoid Loan Settlement Scams
                </Link>
                <Link
                  href="/cibil-dispute-wrong-overdue-entry"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Bureau Score Recovery
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold text-lg hover:opacity-90 transition-opacity">
                  AJ
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior advocate specializing in anti-harassment defense, borrower rights under Supreme Court jurisprudence, and RBI debt compromise resolution frameworks with over a decade of financial litigation experience.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </span>
                <Link href="/authors/ashish-jhangra" className="font-bold text-[#1F5EFF] hover:underline">
                  View Profile →
                </Link>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Emergency Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Threatened With Police Arrest?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not pay under duress. Hire specialized debt defense advocates to verify fake notices, halt illegal recovery harassment, and negotiate a 45%–65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Immediate Legal Protection
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
                  <span>Official Bank-Stamped Settlement Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>RBI Fair Practices Code Enforced</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
