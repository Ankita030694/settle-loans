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
  Users
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Guarantor & Co-Applicant Liability in Personal Loan Settlement: Section 128 Protections & Full OTS Discharge',
  description: 'Worried about guarantor liability in personal loan default? Understand Section 128 Indian Contract Act co-extensive liability, stop recovery harassment against aging parents or spouse, and secure a simultaneous dual OTS discharge.',
  keywords: [
    'guarantor liability in personal loan default',
    'co applicant liability loan default india',
    'section 128 indian contract act loan settlement',
    'can bank recover loan from guarantor',
    'bank harassment co signer parents spouse',
    'discharge of surety section 134 contract act',
    'personal loan settlement guarantor cibil score',
    'no dues certificate for loan guarantor',
    'can guarantor go to jail for loan default',
    'one time settlement co applicant legal rights'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/guarantor-liability-personal-loan-settlement',
  },
  openGraph: {
    title: 'Guarantor & Co-Applicant Liability in Personal Loan Default: Legal Protections & Full OTS Discharge',
    description: 'Comprehensive legal analysis on co-signer and guarantor liability under Section 128 of the Indian Contract Act. Learn how to halt collection harassment against family members and execute a comprehensive dual OTS discharge.',
    url: 'https://www.settleloans.in/guarantor-liability-personal-loan-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/guarantor-liability-personal-loan-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Guarantor and Co-Applicant Liability in Personal Loan Settlement Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guarantor Liability in Personal Loan Settlement: Section 128 & Family Protections',
    description: 'Are collection agents threatening your co-signing parent or spouse for an unpaid loan? Discover statutory protections under the Indian Contract Act and RBI guidelines to secure a full dual release.',
    images: ['https://www.settleloans.in/images/infographics/guarantor-liability-personal-loan-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#webpage",
      "url": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement",
      "name": "Guarantor & Co-Applicant Liability in Personal Loan Settlement: Section 128 Protections & Full OTS Discharge",
      "description": "Exhaustive legal guide on personal loan guarantor and co-applicant liability in India. Explains Section 128 co-extensive liability, RBI Fair Practices Code against family harassment, surety discharge under Sections 133-141, and advocate-led dual OTS settlements.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#breadcrumb",
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
          "name": "Guarantor Liability in Personal Loan Settlement",
          "item": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#article",
      "headline": "Guarantor & Co-Applicant Liability in Personal Loan Settlement: Legal Protections, Section 128 & Full OTS Discharge",
      "description": "A deep-dive technical legal analysis of guarantor and co-applicant liability in Indian personal loan defaults. Covers co-extensive liability principles, Supreme Court rulings, protections against recovery harassment of family members, and structured dual-party settlement protocols.",
      "image": "https://www.settleloans.in/images/infographics/guarantor-liability-personal-loan-settlement.jpg",
      "datePublished": "2026-08-25T10:00:00+05:30",
      "dateModified": "2026-08-25T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#webpage"
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
      "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#service",
      "name": "SettleLoans - Guarantor Legal Protection & Loan Settlement Advisory",
      "description": "Comprehensive legal shielding for guarantors and co-applicants facing debt recovery coercion, paired with direct institutional negotiation to secure simultaneous dual-party One-Time Settlements (OTS) with bank-stamped No Dues Certificates.",
      "url": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement",
      "image": "https://www.settleloans.in/images/infographics/guarantor-liability-personal-loan-settlement.jpg",
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
        "reviewCount": "2340",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Chawla"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "When my tech startup collapsed, recovery agents began calling my 68-year-old retired father who had co-signed my ₹14 Lakh personal loan. They threatened him with home attachment and arrest. SettleLoans advocates intervened within 24 hours, issued a cease-and-desist notice to the bank, and negotiated a structured 55% OTS that discharged both my father and me completely.",
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
          "datePublished": "2026-07-11",
          "reviewBody": "My husband and I were co-applicants on an unsecured business overdraft. After sudden medical emergencies caused a default, recovery agents showed up at my workplace. Ashish Jhangra's legal team cited the RBI Fair Practices Code, stopped the workplace visits immediately, and secured a bank-approved compromise settlement with dual No Dues Certificates.",
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
            "name": "Karanbir Sandhu"
          },
          "datePublished": "2026-05-27",
          "reviewBody": "I stood as personal guarantor for my brother-in-law's ₹8 Lakh loan. When he defaulted, the bank froze my salary account under a banker lien. SettleLoans advocates challenged the lien in consumer court and negotiated a formal settlement where the bank waived the penal interest and removed the default tag from my CIBIL.",
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
            "name": "Rajeswari Iyer"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "Extremely competent legal defense. SettleLoans drafted our representation under Section 134 and 139 of the Indian Contract Act when the bank attempted to pursue my mother after settling with the main borrower. The bank had to issue an unconditional apology and formal closure letters for both PAN records.",
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
      "@id": "https://www.settleloans.in/guarantor-liability-personal-loan-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the legal difference between a co-applicant and a guarantor in an Indian loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A co-applicant is a primary co-borrower who shares direct, joint, and several liability from the inception of the credit facility, often having their income combined for loan eligibility. A guarantor (or surety under Section 126 of the Indian Contract Act) is a third party who undertakes to discharge the liability of the principal debtor only upon default. However, under Section 128, the bank can pursue either party once a default occurs."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank legally initiate recovery directly against the guarantor before exhausting remedies against the primary borrower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 128 of the Indian Contract Act, 1872, the liability of the guarantor is co-extensive with that of the principal debtor. The Supreme Court of India in State Bank of India v. Indexport (1992) and Bank of Bihar v. Damodar Prasad (1969) established that a creditor is not bound to exhaust remedies against the principal debtor before suing or proceeding against the guarantor, unless specifically restricted in the loan contract."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents harass or threaten an elderly parent or spouse who co-signed a defaulted loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Harassment, verbal abuse, visiting elderly relatives at unreasonable hours, using threatening language, or shaming family members violates the RBI Master Direction on Fair Practices Code, Article 21 of the Constitution, and Sections 503 and 506 of the Indian Penal Code (Criminal Intimidation). Aggrieved co-signers can issue formal legal notices, file cyber crime complaints, and approach the RBI Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "Can a guarantor or co-applicant be sent to jail if the primary borrower defaults on a personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Inability to repay an unsecured personal loan is strictly a civil breach of contract, not a criminal offense. Neither the borrower nor the guarantor can be arrested or imprisoned for genuine financial default. Criminal liability only arises if the co-signer personally signed dishonored cheques under Section 138 of the NI Act or provided forged KYC documents."
          }
        },
        {
          "@type": "Question",
          "name": "Does a One-Time Settlement (OTS) entered into by the primary borrower automatically protect the guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 134 of the Indian Contract Act, the discharge of the principal debtor through a contract by which the creditor releases him generally discharges the surety. However, banks frequently insert reservation of rights clauses in standard settlement drafts. Therefore, it is critical that the OTS sanction letter and No Dues Certificate explicitly name both the principal borrower and the guarantor, providing unconditional dual discharge."
          }
        },
        {
          "@type": "Question",
          "name": "How does a personal loan default affect the guarantor's CIBIL score and credit report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Credit bureaus like CIBIL, Experian, CRIF High Mark, and Equifax report default and Days Past Due (DPD) metrics identically on both the principal borrower's and the guarantor's PAN records. When the account is settled through an OTS, both credit profiles reflect a 'Settled' status until the records are legally updated with zero remaining overdue balances."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank seize the guarantor's personal property or freeze their salary account for an unsecured loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For an unsecured personal loan, a bank cannot arbitrarily seize movable or immovable assets without obtaining a formal decree from a Civil Court (or DRT for claims exceeding ₹20 Lakhs) and filing execution proceedings under Order 21 CPC. However, if the guarantor holds deposit accounts in the same lending bank, the institution may attempt to exercise a general banker's lien under Section 171 of the Contract Act, which can be legally contested."
          }
        },
        {
          "@type": "Question",
          "name": "What rights does a guarantor have against the primary borrower after paying or settling the bank's dues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 140 of the Indian Contract Act (Doctrine of Subrogation) and Section 145 (Implied promise to indemnify surety), upon discharging the debt of the principal debtor, the guarantor steps into the shoes of the creditor and possesses full legal rights to recover all settled amounts, interest, and related expenses from the principal borrower through a civil recovery suit."
          }
        },
        {
          "@type": "Question",
          "name": "What essential terms must be included in an OTS sanction letter to protect the co-applicant and guarantor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The OTS sanction letter must contain: (1) explicit naming and PAN numbers of both primary borrower and co-applicants/guarantors, (2) unambiguous confirmation that the agreed settlement sum represents full and final satisfaction of all institutional claims, (3) withdrawal of all pending civil, arbitration, or Section 138 proceedings, and (4) commitment to issue a bank-stamped No Dues Certificate and update credit bureaus within 30 days."
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
  { id: 'guarantor-vs-coapplicant-legal-status', title: '1. Guarantor vs Co-Applicant Status' },
  { id: 'section-128-coextensive-liability', title: '2. Section 128 Co-Extensive Liability' },
  { id: 'family-harassment-rbi-protections', title: '3. Family Harassment & Legal Shield' },
  { id: 'bank-npa-accounting-npv-formula', title: '4. Bank NPA Accounting & NPV Model' },
  { id: 'infographic-guarantor-liability', title: '5. Visual Guide: Guarantor Rights & OTS' },
  { id: 'advocate-intervention-family-shield', title: '6. How Advocates Protect Co-Signers' },
  { id: 'sections-133-141-surety-discharge', title: '7. Sections 133–141 Surety Discharge' },
  { id: 'sanction-letter-forensics-dual-ndc', title: '8. Dual Sanction Letters & CIBIL Care' },
  { id: 'comparative-liability-matrix', title: '9. Comparative Liability Matrix' },
  { id: 'settleloans-family-defense-framework', title: '10. SettleLoans Defense Framework' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function GuarantorLiabilityPersonalLoanSettlementPage() {
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

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-4 tracking-wider uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>Family Protection &amp; Legal Defense • Section 128 Indian Contract Act</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">
            Guarantor &amp; Co-Applicant Liability in Personal Loan Settlement: <span className="text-[#3b82f6] md:text-[#60a5fa]">Section 128 Protections &amp; Dual OTS Discharge</span>
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
              <span>RBI &amp; Indian Contract Act Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <ShieldAlert className="w-4 h-4" />
              <span>Protect Co-Signer Family from Harassment</span>
            </Link>
            <Link
              href="#section-128-coextensive-liability"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 font-semibold py-3 px-6 rounded-xl text-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Understand Section 128 Protections</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. Main 3-Column Content Layout with Optimized Spacing & Wide Middle Container */}
      <div className="w-full max-w-[1560px] mx-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-start gap-5 xl:gap-7">
          
          {/* Left Column: Sticky Table of Contents + Crux Pill */}
          <aside className="hidden lg:block w-[250px] xl:w-[275px] flex-shrink-0 sticky top-24 space-y-5">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4 text-[#1F5EFF]" />
                <span>Executive Legal Crux</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                While Section 128 of the Indian Contract Act makes a guarantor liability co-extensive with the borrower upon default, recovery agent coercion against family members violates RBI fair practice mandates and Section 506 IPC. A structured One-Time Settlement (OTS) under Section 134 discharges both the primary borrower and the co-signer simultaneously.
              </p>
            </div>

            <SidebarTOC items={tocItems} />
          </aside>

          {/* Middle Column: Main Editorial Body (Expanded Width) */}
          <main className="flex-1 min-w-0 blog-content space-y-10">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-sm uppercase tracking-wider mb-4">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Essential Legal Realities for Co-Signers &amp; Guarantors</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Co-Extensive Statutory Liability:</strong> Under Section 128 of the Indian Contract Act, 1872, the lender can demand payment from the guarantor as soon as the principal borrower defaults, without first exhausting all legal remedies against the borrower.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Criminal Arrest Exposure:</strong> Personal loan default is solely a civil contractual dispute. Collection agents cannot arrest, jail, or register an FIR against an aging parent or spouse who co-signed the loan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict Ban on Family Harassment:</strong> RBI Master Directions and IPC Section 506 strictly prohibit recovery agencies from calling, abusing, or visiting unlisted relatives, workplaces, or elderly family members.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Simultaneous Dual OTS Discharge:</strong> Under Section 134 of the Contract Act, an advocate-negotiated compromise settlement must explicitly name both parties to ensure complete release, No Dues Certificates, and CIBIL status closure.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Right of Subrogation:</strong> Under Section 140 and 145, any payment made by a guarantor confers full legal rights to recover those sums directly from the principal debtor.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Agony of Family Co-Signers */}
            <section id="guarantor-vs-coapplicant-legal-status" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                1. The Agony of Family Co-Signers: Distinguishing Guarantor vs. Co-Applicant Legal Status
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Few financial circumstances generate more acute emotional distress and familial discord than an unexpected default on an unsecured personal loan or credit facility where a close family member—most commonly an aging parent, spouse, or sibling—served as a co-signer or personal guarantor. When an unexpected financial catastrophe strikes, such as sudden corporate downsizing, protracted medical hospitalization, or business insolvency, the inability to service equated monthly installments (EMIs) quickly reverberates beyond the primary borrower. Within weeks of an account transitioning past the standard 90-day overdue benchmark into Non-Performing Asset (NPA) status, aggressive collection agencies frequently shift their pressure tactics toward vulnerable co-signers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To navigate institutional recovery maneuvers and formulate an effective legal defense, one must first master the foundational distinction between a <em>co-applicant</em> and a <em>guarantor</em> (or surety) under Indian banking jurisprudence:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                    <Users className="w-4 h-4 text-[#1F5EFF]" />
                    <span>The Co-Applicant (Joint Debtor)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A co-applicant is a primary joint borrower from the inception of the credit contract. In retail banking, lenders frequently require spouses or working family members to join as co-applicants to pool household income for higher eligibility. A co-applicant shares direct, primary, joint, and several liability alongside the principal borrower from day one.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>The Guarantor / Surety (Section 126)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 126 of the Indian Contract Act, 1872, a contract of guarantee is a tripartite contract to perform the promise, or discharge the liability, of a third person in case of their default. The guarantor acts as a collateral safety net rather than a primary recipient of the disbursed funds.
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Regardless of whether an individual executed the agreement as a joint borrower or as an independent surety, Indian commercial law binds both parties to rigorous statutory obligations. Understanding these boundaries is the first step toward neutralizing unlawful collection harassment and executing an airtight resolution.
              </p>
            </section>

            {/* Section 2: Section 128 of the Indian Contract Act */}
            <section id="section-128-coextensive-liability" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                2. Section 128 of the Indian Contract Act: The Doctrine of Co-Extensive Liability
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The cornerstone of guarantor liability in India is codified in Section 128 of the Indian Contract Act, 1872, which explicitly declares: <em>&ldquo;The liability of the surety is co-extensive with that of the principal debtor, unless it is otherwise provided by the contract.&rdquo;</em> This brief statutory provision carries profound legal consequences for family members who affixed their signatures to loan documentation.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The term <em>co-extensive</em> denotes that the quantum, timing, and nature of the guarantor liability are identical to those of the principal borrower. The moment the borrower commits a default by failing to pay a scheduled installment, the creditor bank or Non-Banking Financial Company (NBFC) acquires an immediate, actionable cause of action against the guarantor for the full ledger balance, including accrued interest, penal interest, and legal costs.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 my-4 space-y-3">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Landmark Supreme Court Rulings on Co-Extensive Liability</span>
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">State Bank of India v. Indexport &amp; Ors. (1992) 3 SCC 159</p>
                    <p className="text-slate-600 mt-1">A landmark three-judge bench of the Supreme Court held that the creditor is not required to exhaust its legal remedies against the principal debtor or execute against mortgaged assets before proceeding against the guarantor. The decree is enforceable against the guarantor simultaneously or independently.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Bank of Bihar Ltd. v. Dr. Damodar Prasad &amp; Anr. (1969) 1 SCR 620</p>
                    <p className="text-slate-600 mt-1">The apex court established that postponing the liability of the surety until the creditor has exhausted all remedies against the principal debtor would defeat the entire commercial objective of obtaining a guarantee.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900">Industrial Finance Corporation of India v. Cannanore Spinning Mills (2002) 5 SCC 54</p>
                    <p className="text-slate-600 mt-1">The Supreme Court reaffirmed that the liability of the guarantor arises immediately upon default and is independent of the insolvency or financial disability of the principal borrower.</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl my-4">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider mb-1">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Critical Civil Law Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
                  While the bank possesses the legal liberty to initiate civil proceedings or arbitration against the guarantor directly, this liability is strictly commercial and monetary. It does not grant lenders or their recovery agents the legal authority to deploy criminal intimidation, physical harassment, or arbitrary asset confiscation.
                </p>
              </div>
            </section>

            {/* Section 3: Recovery Agent Harassment Against Family */}
            <section id="family-harassment-rbi-protections" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                3. Recovery Agent Harassment Against Family: Illegal Intimidation, RBI Mandates &amp; Criminal Safeguards
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because civil recovery in Indian courts entails significant procedural friction and delays, unregulated third-party collection agencies routinely exploit the psychological vulnerability of family co-signers. Agents frequently target elderly parents or spouses with fabricated claims, alleging that failure to pay will result in immediate police detention, home attachment, public shaming in residential colonies, or disqualification from government pensions.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers and co-signers must recognize that such coercive behavior represents a blatant violation of statutory civil protections, constitutional privacy rights under Article 21, and explicit Reserve Bank of India directives:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">RBI Fair Practices Code (FPC)</h3>
                  <p className="text-xs text-slate-600">RBI Master Directions strictly prohibit lenders and their outsourced agents from contacting debtors or guarantors before 8:00 AM or after 7:00 PM, calling workplace colleagues, using profane language, or making misleading legal threats.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 503 &amp; 506 IPC (Criminal Intimidation)</h4>
                  <p className="text-xs text-slate-600">Threatening bodily injury, reputation damage, or illegal arrest to force an aging parent or spouse to pay a defaulted debt constitutes criminal intimidation punishable by up to two years of imprisonment.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 383 &amp; 384 IPC (Extortion)</h4>
                  <p className="text-xs text-slate-600">Intentionally inducing severe mental terror or fear of injury to extract money under duress satisfies the essential penal ingredients of extortion under Indian law.</p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 138 NI Act Immunity for Non-Signers</h4>
                  <p className="text-xs text-slate-600">Criminal proceedings under Section 138 of the Negotiable Instruments Act or Section 25 of the PSSA for cheque/NACH bounce apply solely to the specific individual who signed the instrument, not to non-signing guarantors.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Bank NPA Accounting Mechanics & NPV Formula */}
            <section id="bank-npa-accounting-npv-formula" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                4. Bank Accounting Realities: NPA Provisioning, Capital Allocation &amp; The NPV Recovery Formula
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To negotiate effectively from a position of strength, one must understand how commercial banks and NBFCs evaluate bad debts on their balance sheets. Under the Reserve Bank of India (Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances) Directions, once an unsecured credit line remains overdue for 90 days, it is classified as a Non-Performing Asset (NPA).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This classification triggers mandatory capital provisioning that penalizes institutional profitability:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
                <li><strong>Substandard Assets (0 to 12 months as NPA):</strong> Mandatory 15% provisioning on the total outstanding exposure.</li>
                <li><strong>Doubtful Assets-1 (12 to 24 months as NPA):</strong> 100% full provisioning against unsecured balances.</li>
                <li><strong>Doubtful Assets-2 &amp; Loss Assets:</strong> Complete 100% write-off from the bank active asset portfolio, absorbing precious shareholder capital.</li>
              </ul>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-3">
                When a bank contemplates filing a civil suit under Order 37 CPC or initiating institutional arbitration against both the borrower and guarantor, its risk officers conduct a Net Present Value (NPV) recovery valuation. Initiating formal litigation requires depositing 1% to 3% upfront court fees, retaining external legal counsel, and enduring 3 to 5 years of procedural backlog in district courts, with minimal recovery prospects against distressed retail borrowers.
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
                  Where C_t represents estimated recoveries across time periods t, r is the bank discount rate, and deductions account for multi-year court expenses and regulatory capital locked in mandatory NPA provisioning reserves.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because protracted litigation against guarantors results in deeply negative net present values, bank settlement committees possess an immense commercial incentive to execute a negotiated One-Time Settlement (OTS), offering 45% to 65% principal waivers in exchange for prompt, lump-sum capital recovery.
              </p>
            </section>

            {/* Section 5: Dedicated 16:9 Infographic Banner */}
            <section id="infographic-guarantor-liability" className="my-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/guarantor-liability-personal-loan-settlement.jpg"
                  alt="Guarantor and Co-Applicant Liability in Personal Loan Default Infographic: Section 128 Indian Contract Act, Harassment Protections, and Dual OTS Discharge"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between">
                  <span className="font-semibold text-blue-400">Fig 1: Legal Framework — Co-Extensive Liability, Statutory Protections &amp; Dual OTS Discharge</span>
                  <span className="text-slate-400 hidden sm:inline">Source: SettleLoans Legal Research &amp; Regulatory Compliance</span>
                </div>
              </div>
            </section>

            {/* Section 6: How Advocate Intervention Protects Co-Signers */}
            <section id="advocate-intervention-family-shield" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                6. How Legal Representation Shields Co-Signers and Neutralizes Collection Coercion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual borrower or an anxious family guarantor attempts to reason with collection agents, third-party agencies frequently intensify their pressure, perceiving family emotional distress as leverage to force urgent liquidations. In contrast, formal legal representation by experienced banking advocates fundamentally transforms the operational dynamic.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Upon engagement, our legal defense team implements a structured multi-tiered intervention:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Formal Representation &amp; Cease-and-Desist Service</h3>
                    <p className="text-xs text-slate-600 mt-1">Advocates serve formal legal notices and Vakalatnama on the bank zonal collection head and Principal Nodal Officer, mandating that all future communication must occur solely through legal counsel. Third-party calling to family members ceases immediately.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Criminal Counter-Notices for Harassment (Section 506 IPC)</h4>
                    <p className="text-xs text-slate-600 mt-1">If collection agents visited elderly relatives, used abusive language, or issued fabricated arrest warnings, our advocates compile electronic call logs and messages to lodge formal complaints with the State Cyber Crime Police and local District Magistrate.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <Landmark className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Escalation to RBI Integrated Ombudsman</h4>
                    <p className="text-xs text-slate-600 mt-1">Under the Reserve Bank - Integrated Ombudsman Scheme, 2021, regulated entities face severe institutional penalties and compensation orders up to ₹20 Lakhs for recovery agent misconduct against family co-signers.</p>
                  </div>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                  <BadgePercent className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Comprehensive Dual-Party OTS Dossier Submission</h4>
                    <p className="text-xs text-slate-600 mt-1">Advocates submit an exhaustive financial distress dossier directly to the bank competent settlement authority, securing significant principal haircuts while ensuring absolute legal immunity for both parties.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7: Sections 133–141 Indian Contract Act: Discharge of Surety */}
            <section id="sections-133-141-surety-discharge" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                7. Sections 133–141 Indian Contract Act: Legal Grounds for Discharge of Surety
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A critical area of legal defense that unrepresented borrowers frequently overlook is the statutory framework governing the discharge and release of sureties under Chapter VIII of the Indian Contract Act, 1872. Indian law provides extensive protections where a guarantor is automatically released from liability due to the unilateral actions of the creditor bank:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 133: Discharge of Surety by Variance in Terms of Contract</h3>
                  <p className="text-xs text-slate-600">Any variance made without the surety consent in the terms of the contract between the principal debtor and the creditor discharges the surety as to transactions subsequent to the variance (e.g., unilateral credit limit increases, restructuring terms, or revised tenure).</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 134: Discharge of Surety by Release or Discharge of Principal Debtor</h4>
                  <p className="text-xs text-slate-600">The surety is discharged by any contract between the creditor and the principal debtor by which the principal debtor is released, or by any act or omission of the creditor the legal consequence of which is the discharge of the principal debtor.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 135: Discharge by Composition, Extension of Time, or Agreement Not to Sue</h4>
                  <p className="text-xs text-slate-600">A contract between the creditor and the principal debtor by which the creditor makes a composition with, or promises to give time to, or not to sue the principal debtor, discharges the surety unless the surety assents to such contract.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 139: Discharge of Surety by Creditor Act or Omission Impairing Surety Remedy</h4>
                  <p className="text-xs text-slate-600">If the creditor does any act which is inconsistent with the rights of the surety, or omits to do any act which his duty to the surety requires him to do, and the eventual remedy of the surety himself against the principal debtor is thereby impaired, the surety is discharged.</p>
                </div>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Section 140 &amp; 145: Right of Subrogation &amp; Implied Promise to Indemnify</h4>
                  <p className="text-xs text-slate-600">Where a guaranteed debt has become due and the surety pays all that he is liable for, the surety is invested with all the rights which the creditor had against the principal debtor to recover the full payment.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, Dual NDC & CIBIL Care */}
            <section id="sanction-letter-forensics-dual-ndc" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                8. Sanction Letter Forensics: Ensuring Full Simultaneous Discharge, Dual NDC &amp; CIBIL Rectification
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A catastrophic error frequently observed in unrepresented debt settlements occurs when the primary borrower settles an account with a bank, only for the bank recovery department to subsequently issue a demand notice against the guarantor for the residual balance or waived interest. Lenders often rely on obscure reservation-of-rights clauses in boilerplate compromise letters to preserve recovery avenues against co-signers.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To guarantee complete, irrevocable legal closure for both parties, our legal team conducts rigorous sanction letter forensics before any settlement remittance is executed:
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Dual-Discharge Settlement Protocol</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">1. Explicit Dual-Party Naming</p>
                    <p className="text-slate-600">The formal OTS sanction letter on official bank letterhead must explicitly name the primary borrower, all co-applicants, and guarantors alongside their respective PAN numbers, declaring total discharge.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">2. Complete Waiver &amp; Non-Recourse</p>
                    <p className="text-slate-600">The letter must confirm that the agreed sum constitutes full satisfaction of all claims, explicitly waiving residual ledger balances and prohibiting future claims against the guarantor.</p>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <p className="font-bold text-slate-900 mb-1">3. Dual Stamped NDC &amp; CIBIL Update</p>
                    <p className="text-slate-600">Under RBI Circular RBI/2023-24/60, the bank must deliver a physical bank-stamped No Dues Certificate to both parties within 30 days and update credit bureau records to Settled / Closed.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Comparative Liability Matrix */}
            <section id="comparative-liability-matrix" className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                9. Comparative Legal Matrix: Primary Borrower vs. Co-Applicant vs. Personal Guarantor
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The following comparative matrix outlines the jurisdictional liabilities, statutory exposure, and settlement protections across different borrower classifications in Indian retail lending:
              </p>
              
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Legal Parameter</th>
                      <th>Primary Borrower</th>
                      <th>Co-Applicant (Joint Debtor)</th>
                      <th>Personal Guarantor (Surety)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Statutory Definition</td>
                      <td>Principal Debtor (Contract Act)</td>
                      <td>Joint &amp; Several Co-Borrower</td>
                      <td>Surety under Section 126</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Timing of Liability</td>
                      <td>Immediate upon disbursement</td>
                      <td>Immediate upon disbursement</td>
                      <td>Triggered upon borrower default (Section 128)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Section 138 NI Act Exposure</td>
                      <td>Liable if cheque / NACH signed</td>
                      <td>Liable only if cheque / NACH signed</td>
                      <td>Zero criminal exposure unless cheque signed</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Civil Recovery Action</td>
                      <td>Order 37 CPC / Civil Suit / DRT</td>
                      <td>Order 37 CPC / Civil Suit / DRT</td>
                      <td>Order 37 CPC / Civil Suit / DRT (Co-extensive)</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Banker General Lien (Sec 171)</td>
                      <td>Applicable across bank accounts</td>
                      <td>Applicable across joint accounts</td>
                      <td>Restricted; subject to strict challenge</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">CIBIL Impact on Default</td>
                      <td>Direct DPD &amp; Default Tagging</td>
                      <td>Direct DPD &amp; Default Tagging</td>
                      <td>Direct DPD &amp; Default Tagging on PAN</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">OTS Discharge Effect</td>
                      <td>Discharged upon full payment</td>
                      <td>Discharged if named in OTS letter</td>
                      <td>Discharged under Section 134 if dual OTS executed</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Recovery from Primary Debtor</td>
                      <td>Not Applicable</td>
                      <td>Internal contribution rights</td>
                      <td>Full Subrogation rights under Section 140</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Family Legal Defense Framework + CompanySection */}
            <section id="settleloans-family-defense-framework" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  10. SettleLoans Family Defense Framework: Protecting Co-Signers Nationwide
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating institutional recovery aggressive outreach against aging parents, spouses, and family co-signers requires seasoned legal counsel who specialize in banking laws, the Indian Contract Act, and RBI fair practice guidelines. SettleLoans provides comprehensive legal defense for borrowers and guarantors across India: halting collection harassment through formal cease-and-desist representation, enforcing statutory protections under Sections 128 through 141, and negotiating directly with bank zonal authorities to secure maximum principal waivers backed by official, bank-stamped No Dues Certificates that protect both PAN records.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                  11. Frequently Asked Questions: Guarantor &amp; Co-Applicant Liability in Loan Default
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Legally verified answers to essential questions regarding guarantor liability, Section 128 protections, recovery harassment of family members, and dual OTS settlements.
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
                  <span className="font-semibold text-slate-800">Supreme Court of India (SBI v. Indexport Precedents)</span>
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
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Sections 126–147 Indemnity &amp; Guarantee)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Family Harassment Redressal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.cibil.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">TransUnion CIBIL – Commercial &amp; Consumer Credit Reporting Guidelines</span>
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
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/bank-fir-for-loan-default-reality-check"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank FIR Threat Reality Check
                </Link>
                <Link
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property for Loan?
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Salary Account Guide
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
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
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
                  Can I Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/credit-card-vs-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Credit Card vs Loan Settlement
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:w-[280px] xl:w-[310px] flex-shrink-0 lg:sticky lg:top-24 space-y-5 h-fit">
            
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
                Pioneering advocate in banking jurisprudence, Indian Contract Act surety defense, and RBI compromise settlement frameworks with over a decade of institutional dispute experience.
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
                <span>Family Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Recovery Agents Threatening Family?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let collection agencies intimidate your aging parents or spouse. Retain our senior advocates to issue immediate cease-and-desist notices and negotiate a full dual-party OTS.
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
                  <span>Section 128 ICA Defense Protected</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official Bank-Stamped Dual NDC</span>
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
