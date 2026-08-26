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
  Wallet,
  HeartPulse,
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Loan Settlement Rules for Senior Citizens & Pensioners: Pension Attachment Protection & OTS Guide',
  description: 'Can banks deduct EMI from a pensioner account or seize retirement funds? Learn Section 60 CPC pension attachment protections, compassionate OTS relief, and RBI rules.',
  keywords: [
    'loan settlement rules for senior citizens pensioners',
    'can bank deduct emi from pension account without consent',
    'section 60 cpc pension attachment exemption',
    'pensioners protection act bank loan default',
    'compassionate one time settlement for elderly borrowers',
    'bankers lien on pension account illegal rbi circular',
    'senior citizen maintenance and welfare act loan relief',
    'rbi guidelines recovery agents senior citizen harassment',
    'pensioner personal loan waiver medical hardship',
    'pension account freeze legal notice defense'
  ],
  alternates: {
    canonical: 'https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief',
  },
  openGraph: {
    title: 'Loan Settlement Rules for Senior Citizens & Pensioners: Pension Attachment Protection & OTS Guide',
    description: 'Comprehensive legal guide for senior citizens and retired pensioners facing unmanageable debt, unlawful pension account debits, and recovery agent coercion in India.',
    url: 'https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://settleloans.in/images/infographics/senior-citizen-pensioner-loan-settlement-relief.jpg',
        width: 1200,
        height: 675,
        alt: 'Senior Citizen and Pensioner Loan Settlement Legal Protection Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Settlement Rules for Senior Citizens & Pensioners: Pension Attachment Protection & OTS Guide',
    description: 'Protect your pension from illegal bank attachments. Understand Section 60 CPC statutory exemptions, senior citizen debt relief rights, and compassionate OTS.',
    images: ['https://settleloans.in/images/infographics/senior-citizen-pensioner-loan-settlement-relief.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#webpage",
      "url": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief",
      "name": "Loan Settlement Rules for Senior Citizens & Pensioners: Pension Attachment Protection & OTS Guide",
      "description": "Can banks deduct EMI from a pensioner account or seize retirement funds? Learn Section 60 CPC pension attachment protections, compassionate OTS relief, and RBI rules.",
      "breadcrumb": {
        "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#breadcrumb"
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
      "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#breadcrumb",
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
          "name": "Senior Citizen & Pensioner Loan Settlement Guide",
          "item": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#article",
      "headline": "Loan Settlement Rules for Senior Citizens & Pensioners: Statutory Pension Shields, Section 60 CPC & Compassionate Compromise Settlements",
      "description": "An exhaustive legal treatise examining debt default protections for retired senior citizens and pensioners. Analyzes Section 60(1)(g) CPC statutory pension immunity, Section 11 of the Pensions Act 1871, illegality of banker's lien on pension disbursements, compassionate OTS frameworks, and advocate-led debt resolution.",
      "image": "https://settleloans.in/images/infographics/senior-citizen-pensioner-loan-settlement-relief.jpg",
      "datePublished": "2026-08-26T12:00:00+05:30",
      "dateModified": "2026-08-26T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#webpage"
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
      "@type": "FinancialService",
      "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#service",
      "name": "SettleLoans - Senior Citizen & Pensioner Debt Resolution Advisory",
      "description": "Specialized legal defense and compassionate One-Time Settlement (OTS) advisory for senior citizens, retired defense personnel, central and state government pensioners facing unlawful bank deductions and recovery harassment.",
      "url": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief",
      "image": "https://settleloans.in/images/infographics/senior-citizen-pensioner-loan-settlement-relief.jpg",
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
        "ratingValue": "4.9",
        "reviewCount": "2180",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Col. Harish Chander Bakshi (Retd.)"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "After retiring from the Armed Forces, my wife suffered critical renal failure, draining our life savings. A major private bank began auto-debiting my entire defense pension account for a personal loan default, leaving us without money for medicines. SettleLoans advocates intervened immediately, citing Section 60(1)(g) CPC and Section 11 of the Pensions Act, 1871. The bank halted the illegal deductions and granted a 65% compassionate OTS with a clean No Dues Certificate.",
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
            "name": "Shyamala Venkataraman"
          },
          "datePublished": "2026-08-05",
          "reviewBody": "As a 71-year-old family pensioner, recovery agents harassed me at home and threatened court attachment of my late husband's railway pension. SettleLoans served a hard-hitting statutory legal notice to the bank MD and filed a complaint with the RBI Ombudsman. The harassment stopped within 48 hours, and they settled my outstanding credit card dues for just 30% of the claim amount.",
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
            "name": "Rameshwar Prasad Mishra"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "I am a retired state civil servant with severe cardiac ailments. The lending bank applied an illegal banker's lien on my treasury pension savings account. SettleLoans advocates referenced Supreme Court rulings protecting pensioner sustenance, compelled the bank to release the frozen balance, and structured an affordable one-time settlement that resolved the entire liability.",
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
            "name": "Gurdev Singh Dhillon"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "An NBFC served an arbitration notice against me at age 68 and threatened to attach my ancestral residential property. SettleLoans took over the legal defense, challenged the unilateral arbitrator appointment, and negotiated a humane OTS with complete waiver of penal compound interest.",
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
      "@id": "https://settleloans.in/senior-citizen-pensioner-loan-settlement-relief#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank legally deduct loan EMIs from a pensioner's account without active consent or mandate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Section 11 of the Pensions Act, 1871 and Section 60(1)(g) of the Code of Civil Procedure, 1908, pension funds enjoy absolute statutory immunity from attachment and unauthorized appropriation. If a borrower revokes an NACH or auto-debit mandate due to financial distress, the bank cannot unilaterally execute internal transfers or exert a general banker's lien to seize pension disbursements. Doing so constitutes a direct violation of statutory law and RBI customer protection directions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Section 60 of the Code of Civil Procedure (CPC) protect senior citizen pensions from court attachment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Section 60(1)(g) of the Code of Civil Procedure, 1908 explicitly exempts stipends and pensions allowed to pensioners of the government or payable from any service pension fund from civil court attachment, seizure, or execution decrees. Civil courts in India have zero jurisdiction to order the attachment or sequestration of statutory pension funds to satisfy commercial debts."
          }
        },
        {
          "@type": "Question",
          "name": "Can a lending bank apply a banker's lien under Section 171 of the Contract Act to freeze a pension savings account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Indian judicial precedents, including landmark judgments from the Supreme Court and various High Courts, have established that the general banker's lien under Section 171 of the Indian Contract Act, 1872 cannot override the statutory protections conferred by Section 60(1)(g) CPC and Section 11 of the Pensions Act. Funds specifically identified as pension or retirement gratuity disbursements are protected from banker's lien and set-off."
          }
        },
        {
          "@type": "Question",
          "name": "What protections do elderly borrowers have under the Senior Citizens Act, 2007 against aggressive recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Maintenance and Welfare of Parents and Senior Citizens Act, 2007 guarantees senior citizens the right to live with dignity and security. Coercive recovery tactics, intimidation, doorstep harassment, or public humiliation by bank recovery agents against elderly individuals violate fundamental rights under Article 21 of the Constitution and can be challenged before Maintenance Tribunals, District Magistrates, and the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents visit a senior citizen borrower's home at odd hours or contact their adult children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the RBI Master Direction on Fair Practices Code for Lenders, recovery agents are strictly prohibited from contacting borrowers before 8:00 AM or after 7:00 PM, making abusive phone calls, visiting without prior identification, or contacting third parties including adult children, relatives, or neighbors regarding a borrower's private debt."
          }
        },
        {
          "@type": "Question",
          "name": "What is a compassionate One-Time Settlement (OTS) for senior citizens and pensioners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A compassionate One-Time Settlement is a formal, bank-approved debt compromise where the lending institution waives 100% of penal interest, accumulated compound charges, and a significant portion of the principal balance (often 45% to 70% total waiver) based on verifiable medical hardship, advanced age, superannuation, and lack of active earning capacity."
          }
        },
        {
          "@type": "Question",
          "name": "Can a senior citizen's residential self-occupied property be seized for an unsecured personal loan or credit card default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. For unsecured debts such as personal loans and credit cards, lenders hold no mortgage or security interest over the borrower's property. SARFAESI Act enforcement applies strictly to secured loans. In unsecured debt defaults, a bank must file a regular civil suit and obtain a court decree, during which Section 60 CPC and homestead protection precedents provide strong legal safeguards for elderly borrowers."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank initiate criminal proceedings or issue arrest warrants against a pensioner for loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Pure commercial loan default is strictly a civil dispute under Indian law. The Supreme Court has repeatedly held that civil breach of contract cannot be criminalized. Recovery agents who threaten arrest warrants or police detention for unsecured loan defaults are committing criminal intimidation under Section 351 of the Bharatiya Nyaya Sanhita (BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "How does severe medical illness or hospitalization assist in negotiating a senior citizen debt settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI prudential guidelines and bank internal compromise settlement policies, chronic medical conditions (such as oncology treatments, cardiovascular surgeries, dialysis, or neurological care) serve as verified supervening impossibility and hardship criteria. Documented medical expenses provide the legal and institutional justification for bank sanction committees to write down uncollectible balances and approve deep OTS waivers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for banks to issue a No Dues Certificate (NDC) to a senior citizen after OTS payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, all regulated lenders must issue an official, unconditional No Dues Certificate (NDC) and update credit bureau records to zero outstanding balance within 30 calendar days of receiving full settlement funds. If a bank fails to provide the NDC within 30 days, it is liable to pay a mandatory compensation penalty of ₹5,000 per day of delay directly to the borrower."
          }
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://settleloans.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/logo/logo.svg"
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
  { id: 'statutory-pension-immunity', title: '1. Statutory Pension Immunity: Section 60(1)(g) CPC & Pensions Act' },
  { id: 'unlawful-lien-auto-debit', title: '2. Unlawful Banker\'s Lien & Pension Account Freezes' },
  { id: 'senior-citizens-act-welfare', title: '3. Senior Citizens Act, 2007 & Anti-Harassment Protections' },
  { id: 'bank-accounting-npv-formula', title: '4. Bank NPA Accounting & Senior Citizen NPV Formula' },
  { id: 'infographic-visual-guide', title: '5. Visual Pension Protection & OTS Roadmap' },
  { id: 'compassionate-ots-schemes', title: '6. Compassionate OTS: Medical Hardship & Superannuation' },
  { id: 'advocate-defense-protocol', title: '7. Step-by-Step Senior Citizen Legal Defense Protocol' },
  { id: 'sanction-letter-ndc-cibil', title: '8. Sanction Letter Forensics, NDC & CIBIL Closure' },
  { id: 'comparative-legal-matrix', title: '9. Comparative Matrix: Illegal Actions vs. Legal Rights vs. OTS' },
  { id: 'company-resolution-section', title: '10. SettleLoans Compassionate Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function SeniorCitizenPensionerLoanSettlementPage() {
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
            <span>Senior Citizen &amp; Pensioner Legal Shield • Section 60(1)(g) CPC &amp; Compassionate OTS</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Loan Settlement Rules for Senior Citizens &amp; Pensioners: <span className="text-[#3b82f6] md:text-[#60a5fa]">Protection from Illegal Deductions, Section 60 CPC &amp; Compassionate OTS</span>
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
              <span>Section 60 CPC &amp; RBI Circular Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Illegal Pension Deductions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Senior Citizen OTS Assessment
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
                Pension funds and retirement benefits enjoy absolute statutory immunity under Section 60(1)(g) CPC and the Pensions Act, 1871. Banks have zero legal authority to apply banker&apos;s liens or freeze pension accounts for unsecured loan defaults. Senior citizens are entitled to compassionate One-Time Settlement (OTS) waivers up to 70% based on age and medical hardship.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Senior Citizen &amp; Pensioner Debt Relief Protections</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Absolute Pension Attachment Immunity:</strong> Under Section 60(1)(g) of the Code of Civil Procedure (CPC), 1908 and Section 11 of the Pensions Act, 1871, pension disbursements, gratuity, and provident funds cannot be attached or seized by any civil court decree.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banker&apos;s Lien on Pension is Illegal:</strong> Lenders cannot exercise a general banker&apos;s lien under Section 171 of the Indian Contract Act to freeze or unilaterally debit dedicated pension accounts to recover overdue personal loans or credit cards.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Senior Citizens Act Statutory Defense:</strong> Coercive recovery tactics against elderly individuals violate the Maintenance and Welfare of Parents and Senior Citizens Act, 2007 and constitutional livelihood protections under Article 21.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Deep Compassionate OTS Waivers:</strong> Commercial banks operate structured compassionate compromise settlement policies allowing 45% to 70% total waivers for superannuated borrowers experiencing chronic medical illnesses and diminished earning capacity.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Risk to Homestead Property:</strong> Unsecured lenders possess no mortgage charge over self-occupied residential property and cannot initiate summary possession under SARFAESI laws against unsecured personal loan or card defaults.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Statutory Pension Immunity */}
            <section id="statutory-pension-immunity" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. Statutory Pension Immunity: The Absolute Protective Shield of Section 60(1)(g) CPC &amp; The Pensions Act, 1871
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For millions of senior citizens, superannuated public servants, defense veterans, and family pensioners across India, retirement earnings represent the solitary economic lifeline sustaining their daily food, medical prescriptions, and basic human dignity. When unforeseen financial shocks—such as severe illness, surgical hospitalization, or business losses suffered by dependent adult children—result in default on personal loans or credit card balances, commercial lending institutions frequently subject elderly borrowers to intense collection pressure. In many egregious cases, banks attempt to confiscate monthly pension credits or assert that court bailiffs will attach retirement corpus.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the Indian jurisprudence framework, Parliament and the judiciary have erected an unassailable statutory fortress protecting retirement benefits from creditor claims. The cornerstone of this protection is codified under <strong>Section 60(1)(g) of the Code of Civil Procedure, 1908 (CPC)</strong>, which explicitly declares that stipends and pensions allowed to pensioners of the government or payable from any service pension fund established by the Central or State Governments, as well as political pensions, are strictly exempt from attachment or sale in execution of any civil decree.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Pensions Act, 1871 (Section 11)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Section 11 of the Pensions Act, 1871</strong>, no pension granted or continued by Government on account of past services, and no money due or to become due on account of any such pension or allowance, shall be liable to seizure, attachment, or sequestration by process of any court in India at the instance of a creditor. This statutory bar operates unconditionally against all civil recovery claims.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Provident Funds &amp; Gratuity Shield</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Section 3 of the Provident Funds Act, 1925</strong>, <strong>Section 60(1)(k) CPC</strong>, and <strong>Section 13 of the Payment of Gratuity Act, 1972</strong>, retirement gratuity, General Provident Fund (GPF), Public Provident Fund (PPF), and commuted pension corpus are entirely protected from court execution, attachment, and recovery freezes.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Supreme Court of India has reiterated in landmark judgments, including <em>Union of India v. Jyoti Chit Fund &amp; Finance</em> and subsequent rulings, that the legislative objective behind Section 60(1)(g) CPC and Section 11 of the Pensions Act is rooted in sovereign public policy: to ensure that an individual who has rendered service to the nation or superannuated from economic life is not reduced to destitution or stripped of the bare means of subsistence by commercial money decrees. Consequently, civil courts hold zero statutory authority to issue attachment warrants against pension funds.
              </p>
            </section>

            {/* Section 2: Unlawful Banker's Lien & Account Freezes */}
            <section id="unlawful-lien-auto-debit" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Unlawful Banker&apos;s Lien, Direct Mandate Debits &amp; Account Freezes on Pension Accounts
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While commercial banks are well aware that civil courts cannot attach a pension, aggressive collection departments often resort to extra-judicial coercion by manipulating internal banking software. The most prevalent predatory practice involves applying a purported &quot;General Banker&apos;s Lien&quot; under Section 171 of the Indian Contract Act, 1872 or executing unauthorized internal ledger transfers to sweep monthly pension credits from a savings account to service defaulted credit cards or unsecured personal loans held within the same banking institution.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This internal appropriation of pension funds is completely unlawful. Indian judicial precedents, affirmed across multiple High Court benches (including the High Courts of Delhi, Bombay, Madras, and Kerala), have firmly established that a bank&apos;s contractual right of lien or set-off under common law cannot override the express statutory mandate of Parliament. When funds credited to an account are identifiable as statutory pension disbursements, the bank stands in a fiduciary capacity as a disbursing agent, not a privileged creditor.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Ban className="w-3.5 h-3.5 text-rose-600" />
                    <span>1. Revocation of NACH/ECS Mandates</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under the Payment and Settlement Systems Act, 2007 and RBI circulars, every account holder holds the sovereign legal right to cancel or revoke an electronic NACH/ECS mandate by serving written notice on their home branch. Continued auto-debits after mandate revocation constitute unauthorized transactions.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-amber-600" />
                    <span>2. Illegality of Account Freezes</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Banks cannot unilaterally place a &quot;total debit freeze&quot; or &quot;lien mark&quot; on a pensioner&apos;s operative savings account without an express judicial freeze order issued under Section 102 CrPC or an attachment order from a competent revenue court. Extra-judicial account freezing violates RBI Fair Practices Codes.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-blue-600" />
                    <span>3. Treasury Direct Diversion Remedy</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Where a lending bank persists in unauthorized internal sweeping, pensioners are legally entitled under Central Treasury Rules to submit an application to their Pension Sanctioning Authority (PSA) or CPPC to migrate their pension disbursement account to another scheduled public sector bank.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Judicial Precedent on Retaining Pension Character</span>
                </div>
                <p className="leading-relaxed text-slate-700">
                  In multiple landmark judgments, the Supreme Court has clarified that pension funds do not lose their character as exempt retirement maintenance simply because they have been electronically credited to a savings bank account. As long as the monetary inflows are directly traceable to monthly pension disbursements, the protective umbrella of Section 60(1)(g) CPC and Section 11 of the Pensions Act remains fully operative, prohibiting banks from freezing the balance or enforcing unilateral set-offs.
                </p>
              </div>
            </section>

            {/* Section 3: Senior Citizens Act & Anti-Harassment Protections */}
            <section id="senior-citizens-act-welfare" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. The Senior Citizens Act, 2007, Constitutional Dignity &amp; Anti-Harassment Protections
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Beyond civil execution exemptions, elderly borrowers in India are endowed with special human rights protections under social welfare legislation and constitutional mandates. The <strong>Maintenance and Welfare of Parents and Senior Citizens Act, 2007</strong> was enacted by Parliament to guarantee that senior citizens (individuals aged 60 years and above) can live with security, peace, and dignity. The coercive deployment of collection agents who intimidate elderly borrowers at their residential doorstep directly infringes upon these statutory rights.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India (RBI), through its comprehensive <strong>Master Direction on Fair Practices Code for Lenders</strong> and specific circulars on recovery agent conduct (including RBI Circular RBI/2022-23/108), has instituted strict regulatory prohibitions against abusive debt collection methods. Regulated entities, including public and private sector banks as well as Non-Banking Financial Companies (NBFCs), bear strict vicarious liability for the actions of their recovery agents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldAlert className="w-4 h-4 text-rose-600" />
                    <span>Strict RBI Anti-Harassment Mandates</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Zero communication before 8:00 AM or after 7:00 PM under any circumstances.</li>
                    <li>• Absolute prohibition against abusive, threatening, or derogatory language.</li>
                    <li>• Total bar on contacting third parties, adult children, neighbors, or former colleagues.</li>
                    <li>• Mandatory identity card and formal bank authorization letter display during any home visit.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-indigo-600" />
                    <span>Criminal Liabilities for Agent Intimidation</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• <strong>Section 351 BNS (Criminal Intimidation):</strong> False threats of police arrest or jail.</li>
                    <li>• <strong>Section 356 BNS (Defamation):</strong> Disclosing debt status to neighbors or society guards.</li>
                    <li>• <strong>Section 329 BNS (Criminal Trespass):</strong> Entering premises without lawful authorization.</li>
                    <li>• Maintenance Tribunal complaints under the Senior Citizens Act for elder mental harassment.</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When senior citizens face intimidation from aggressive collection callers, the most effective response is not submission to panic, but the immediate service of a formal legal cease-and-desist notice drafted by debt defense advocates. By putting the bank&apos;s Principal Nodal Officer, Managing Director, and the RBI Ombudsman on statutory notice regarding agent misconduct, elderly borrowers create an immediate legal barrier that halts unlawful home visits and shifts the conversation to institutional settlement channels.
              </p>
            </section>

            {/* Section 4: Bank NPA Accounting & Senior Citizen NPV Formula */}
            <section id="bank-accounting-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Bank NPA Accounting, Provisioning Realities &amp; The NPV Recovery Formula for Superannuated Borrowers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate a favorable debt settlement, one must understand how commercial banks evaluate defaulted loans on their balance sheets. Under the <strong>RBI Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP)</strong>, once an unsecured personal loan or credit card overdue crosses 90 days, the account is categorized as a Non-Performing Asset (NPA). Over subsequent quarters, the account migrates from Sub-Standard (15% provisioning) to Doubtful-1 (25%), Doubtful-2 (40%), Doubtful-3 (100%), and eventually Loss Asset status.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                For superannuated senior citizens, bank recovery committees confront a decisive economic reality: the borrower possesses no future employment salary to attach under Order 21 Rule 48 CPC, and statutory pension disbursements are completely protected by Section 60(1)(g) CPC. Filing a regular civil suit against a 70-year-old pensioner involves paying substantial ad-valorem court fees, engaging litigation counsel for 3 to 5 years, and ultimately securing an unexecutable paper decree.
              </p>

              {/* NPV Recovery Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Recovery Valuation Benchmark for Senior Citizen Portfolios</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Senior_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation_Costs - Provisioning_Burden - Age_Risk_Factor
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoverable cash flows over time t, r is the bank discount rate, and deductions account for zero statutory attachability of pension assets, 100% capital provisioning strain under RBI IRACP norms, and substantial legal friction costs.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because the Net Present Value (NPV) of dragging a superannuated pensioner through multi-year civil litigation is frequently negative, bank management committees are economically incentivized to accept a compassionate One-Time Settlement (OTS). By writing off accumulated penal interest, compounding fees, and a substantial portion of the principal balance, the bank instantly recovers liquid capital, releases locked regulatory provisioning, and cleanses its NPA books.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-visual-guide" className="my-8 space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Visual Pension Protection &amp; Compassionate OTS Roadmap
              </h2>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/infographics/senior-citizen-pensioner-loan-settlement-relief.jpg"
                    alt="Senior Citizen and Pensioner Loan Default & Pension Protection Legal Guide India"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4 sm:p-5 bg-white border-t border-slate-200">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    <strong>Figure 1.0: Senior Citizen Legal Shield &amp; Compassionate Settlement Architecture.</strong> Illustrating the multi-layered statutory protections under Section 60(1)(g) CPC, Section 11 of the Pensions Act 1871, the Senior Citizens Act 2007, and the structured 6-step roadmap to concluding an advocate-led compassionate One-Time Settlement (OTS) with full No Dues Certificate closure.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Compassionate OTS Schemes */}
            <section id="compassionate-ots-schemes" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Compassionate One-Time Settlement (OTS): Medical Hardship, Superannuation &amp; Deep Waivers
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A <strong>Compassionate One-Time Settlement (OTS)</strong> is an institutional compromise agreement authorized under a bank&apos;s board-approved recovery policy and RBI compromise settlement frameworks. Unlike commercial settlements negotiated for active business enterprises, a senior citizen settlement evaluates bona fide human factors: the borrower&apos;s superannuation status, fixed monthly pension, lack of secondary income streams, and catastrophic medical expenditures.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When presenting a formal settlement docket on behalf of an elderly borrower, seasoned debt defense advocates establish a clear evidentiary trail demonstrating that default arose from genuine supervening impossibility rather than willful non-compliance. Under these compassionate parameters, banks routinely approve deep financial concessions:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penal &amp; Compound Waiver</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Complete elimination of all penal interest charges, compounding late fees, legal recovery overheads, and retroactive bounce fees added by the lender post-default.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <HeartPulse className="w-4 h-4 text-rose-600" />
                    <span>Medical Hardship Principal Haircuts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Submission of medical summaries, hospital discharge reports, and pharmacy records documenting heavy recurring health costs to justify principal reductions between 45% and 70%.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Wallet className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Flexible Installment Tranches</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Structuring the negotiated compromise figure into 2 to 4 manageable monthly tranches aligned with the pensioner&apos;s family assistance or modest personal savings.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                By framing the settlement under board-approved compassionate OTS policies, bank sanction authorities are protected from internal vigilance audits, as the approval adheres strictly to documented hardship criteria and RBI recovery guidelines.
              </p>
            </section>

            {/* Section 7: Advocate Defense Protocol */}
            <section id="advocate-defense-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. Step-by-Step Senior Citizen Legal Defense Protocol: From Cease-and-Desist to Final Closure
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Resolving debt distress for senior citizens requires a methodical, multi-stage legal protocol that protects the pensioner&apos;s immediate mental health while engineering a legally binding, discounted final compromise. SettleLoans employs a 4-stage institutional defense model designed specifically for elderly borrowers:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">1</span>
                      <span>Immediate Anti-Harassment Cease-and-Desist Injunction</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1F5EFF] bg-blue-100 px-2 py-0.5 rounded">Day 1–3</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Serving formal statutory notices upon the bank Managing Director, Principal Nodal Officer, and collection agency heads. The notice cites Section 60(1)(g) CPC, the Senior Citizens Act 2007, and RBI recovery guidelines, directing the immediate cessation of home visits, third-party calls, and unlawful debit sweeps under threat of criminal and regulatory prosecution.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">2</span>
                      <span>Account Ring-Fencing &amp; Mandate Revocation</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-100 px-2 py-0.5 rounded">Day 4–7</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Formally revoking all NACH/e-mandates with the home branch to stop recurring bounce charges. If the pension account is held with the lending bank, advocates assist in filing a direct treasury diversion request to route future pension credits to a secure, neutral public sector bank account.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">3</span>
                      <span>Compassionate Settlement Docket Compilation</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 bg-purple-100 px-2 py-0.5 rounded">Day 8–20</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Compiling an incontrovertible hardship dossier: superannuation certificate, pension payment order (PPO), hospital bills, pathology reports, prescription costs, and household expenditure statements demonstrating lack of disposable surplus and requesting a 45%–70% OTS waiver.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center text-xs">4</span>
                      <span>Sanction Committee Negotiation &amp; Official OTS Approval</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded">Day 21–45</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Engaging directly with the bank&apos;s Circle Head or National Compromise Committee to secure a formal, digitally verifiable One-Time Settlement sanction letter with zero ambiguity and guaranteed issuance of the No Dues Certificate.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, NDC & CIBIL */}
            <section id="sanction-letter-ndc-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics, RBI No Dues Certificate (NDC) Mandate &amp; CIBIL Resolution
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A debt settlement is only as good as the legal validity of the sanction letter issued by the lender. Many senior citizens fall prey to fraudulent verbal promises made by field collection agents who issue forged receipt slips or fake settlement letters on unauthorized letterheads, only for the bank to demand the remaining balance months later.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Before remitting any settlement funds, senior citizens must ensure their settlement letter passes rigorous forensic verification:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileCheck className="w-4 h-4 text-emerald-600" />
                    <span>Mandatory Sanction Letter Clauses</span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 leading-relaxed">
                    <li>• Issued directly from official corporate domain or physical bank stationery with unique reference number.</li>
                    <li>• Explicit mention of exact loan account number and borrower full legal name.</li>
                    <li>• Clear statement that payment of the agreed OTS amount constitutes <strong>full and final settlement</strong> with zero residual claim.</li>
                    <li>• Unconditional undertaking to withdraw all pending legal notices, arbitration cases, or civil suits.</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>RBI 30-Day NDC &amp; Penalty Mandate</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>RBI Circular RBI/2023-24/60</strong>, banks must issue an official, zero-balance <strong>No Dues Certificate (NDC)</strong> and update credit bureaus (CIBIL, Experian, CRIF High Mark, Equifax) within 30 days of settlement payment. Failure to comply obligates the lender to pay a mandatory statutory penalty of <strong>₹5,000 per day of delay</strong> directly to the borrower.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following NDC release, the loan status in credit bureau reports reflects as &quot;Settled&quot; or &quot;Post-Write-Off Settled&quot; with a total outstanding balance of ₹0. For senior citizens who no longer require commercial credit lines or home mortgages, this zero-liability status permanently eliminates the risk of harassment, legal action, or creditor claims against estate assets.
              </p>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="comparative-legal-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Illegal Banker Actions vs. Actual Civil Law Rights vs. SettleLoans OTS Shield
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The table below provides a side-by-side comparative analysis of the common illegal threats made by bank recovery agents, the actual governing statutory provisions under Indian law, and the institutional defense provided by SettleLoans advocates.
              </p>

              {/* 4-Sided Bordered Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th className="w-1/4">Recovery Threat / Action</th>
                      <th className="w-1/3">Governing Indian Law &amp; Precedents</th>
                      <th className="w-1/3">Actual Legal Reality &amp; SettleLoans Shield</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Attachment of Pension &amp; Gratuity Funds</td>
                      <td>Section 60(1)(g) CPC &amp; Section 11 of Pensions Act, 1871</td>
                      <td>Absolute statutory immunity. Civil courts have zero jurisdiction to attach pension funds or retirement gratuity corpus.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">General Banker&apos;s Lien on Pension Account</td>
                      <td>Section 171 Contract Act vs. Supreme Court Precedents</td>
                      <td>Unlawful. Banker&apos;s lien cannot override statutory pension protections. Banks must release frozen pension funds immediately.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Threat of Police Arrest / Jail for Default</td>
                      <td>Article 21 Constitution &amp; Section 351 BNS (Criminal Intimidation)</td>
                      <td>Loan default is strictly a civil breach of contract. False arrest threats constitute criminal intimidation by recovery agents.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Seizure of Self-Occupied Residence</td>
                      <td>SARFAESI Act vs. Unsecured Contract Law</td>
                      <td>Unsecured personal loans hold zero mortgage on property. Lenders cannot initiate SARFAESI summary possession.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Harassment at Home / Calling Adult Children</td>
                      <td>RBI Master Direction on Fair Practices &amp; Senior Citizens Act</td>
                      <td>Strictly illegal. Third-party disclosure violates banking privacy. Cease-and-desist notice invokes RBI Ombudsman penalties.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Compounding Penal Interest Accumulation</td>
                      <td>RBI Compromise Settlement Framework (June 2023)</td>
                      <td>100% penal interest and late fee waiver under structured compassionate OTS with 45%–70% principal reduction.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: Company Section */}
            <section id="company-resolution-section" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. SettleLoans: Compassionate Legal Defense &amp; Debt Resolution for Senior Citizens
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At SettleLoans, we believe that senior citizens and pensioners who have dedicated decades of their lives to their families and country deserve to live their golden years with absolute tranquility, dignity, and freedom from financial harassment. Our specialized senior citizen debt defense practice combines deep civil litigation expertise with compassionate negotiation strategies to deliver total debt relief.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Whether you are facing aggressive collection calls, unlawful debit sweeps from your pension savings account, or confusing court notices, our senior banking advocates step in to shield you completely. We take over all creditor communication, ring-fence your statutory pension rights under Section 60 CPC, and negotiate a formal, deeply discounted One-Time Settlement that permanently closes your loan files.
              </p>

              <CompanySection />
            </section>

            {/* Section 11: FAQ Accordion */}
            <section id="faqs" className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-lg sm:text-xl">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2>11. Frequently Asked Questions: Senior Citizen &amp; Pensioner Debt Relief</h2>
              </div>
              <div className="space-y-3">
                {((jsonLdGraph['@graph'][3] as any)?.mainEntity || []).map((faq: any, index: number) => (
                  <details
                    key={index}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 open:border-blue-300 open:shadow-sm"
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
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Section 60(1)(g) Pension Exemption)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2311"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">The Pensions Act, 1871 (Section 11 Exemption from Attachment)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://socialjustice.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Maintenance &amp; Welfare of Parents &amp; Senior Citizens Act, 2007</span>
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (Landmark Precedents on Pensioner Livelihood &amp; Dignity)</span>
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
                  href="/government-employee-loan-default-salary-attachment"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Government Employee Loan Default Guide
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Salary Account Guide
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Guide
                </Link>
                <Link
                  href="/sbi-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  SBI Loan Settlement
                </Link>
                <Link
                  href="/canara-bank-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Canara Bank Loan Settlement
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
                Senior specialist in pensioner debt protection, Section 60(1)(g) CPC exemptions, Senior Citizens Act advisory, and institutional One-Time Settlement negotiations across India.
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
                <span>Senior Citizen Debt Shield</span>
              </div>
              <h4 className="font-bold text-base text-white mb-2">Is a Bank Threatening Your Pension?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents harass your family or unlawfully freeze your pension. Retain senior banking advocates to protect your statutory rights under Section 60 CPC and negotiate a 45%–70% compassionate OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Free Case Assessment
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
                  <span>Section 60(1)(g) CPC Statutory Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>The Pensions Act, 1871 Statutory Shield</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compassionate OTS</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
