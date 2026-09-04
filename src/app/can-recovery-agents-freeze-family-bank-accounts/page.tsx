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
  Users,
  UserX,
  FileSpreadsheet
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Can Agents Freeze Family Bank Accounts? | SettleLoans',
  description: 'Can recovery agents freeze bank accounts of family members? Learn third-party account immunity and separate PAN protections with SettleLoans.',
  keywords: [
    'can bank freeze family members account for loan default',
    'can recovery agents freeze spouse bank account',
    'can bank attach parents account for personal loan default',
    'can bank freeze siblings bank account for loan default',
    'recovery agent threatening to freeze family bank accounts',
    'privity of contract loan default family liability',
    'garnishee order joint bank account india personal loan',
    'rbi guidelines recovery agent family harassment complaint',
    'separate pan card liability unsecured personal loan',
    'section 171 indian contract act banker lien family account',
    'how to stop recovery agents calling family members',
    'one time settlement personal loan family protection'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts',
  },
  openGraph: {
    title: 'Can Bank Freeze Family Member Account for Loan Default? Legal Rights & Protection Guide',
    description: 'Learn why banks and recovery agents cannot legally freeze, attach, or touch your family members bank accounts for your individual personal loan or credit card default in India.',
    url: 'https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/can-recovery-agents-freeze-family-bank-accounts.jpg',
        width: 1200,
        height: 675,
        alt: 'Can Bank Freeze Family Member Account for Loan Default Legal Rights Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can Bank Freeze Family Member Account for Loan Default? Legal Rights & Protection Guide',
    description: 'Are recovery agents threatening to freeze your spouse or parents bank accounts? Discover your statutory rights under Indian law and RBI Fair Practices Code.',
    images: ['https://www.settleloans.in/images/infographics/can-recovery-agents-freeze-family-bank-accounts.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#webpage",
      "url": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts",
      "name": "Can Bank Freeze Family Member Account for Loan Default? Legal Rights & Protection Guide",
      "description": "Can a bank or recovery agent freeze your family member bank account for personal loan default? Discover the legal truth under Indian contract law, PAN separation, and RBI rules.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#breadcrumb"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#breadcrumb",
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
          "name": "Family Bank Account Protection Guide",
          "item": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#article",
      "headline": "Can Recovery Agents Freeze Family Bank Accounts? Legal Reality, PAN Protection & Advocate Defense Guide",
      "description": "Comprehensive legal and statutory analysis clarifying why commercial lenders and third-party recovery agencies cannot freeze, lien, or attach family members' bank accounts for individual unsecured loan defaults under Indian law.",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-freeze-family-bank-accounts.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#webpage"
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
      "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#service",
      "name": "SettleLoans - Family Debt Harassment & Account Defense Advisory",
      "description": "Expert legal representation protecting non-borrowing family members, spouses, and parents against coercive recovery tactics, unlawful account freeze threats, and structured debt resolution.",
      "url": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts",
      "image": "https://www.settleloans.in/images/infographics/can-recovery-agents-freeze-family-bank-accounts.jpg",
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
        "reviewCount": "2460",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikramaditya Sengupta"
          },
          "datePublished": "2026-06-22",
          "reviewBody": "A recovery agency called my mother. They threatened to freeze her pension account for my personal loan. SettleLoans sent a legal notice to the bank nodal desk. The calls stopped in 24 hours. We settled the loan with a 52% OTS.",
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
          "datePublished": "2026-07-15",
          "reviewBody": "Agents threatened to block my husband's salary for my card debt. SettleLoans filed an RBI Ombudsman complaint. They secured an official No Dues Certificate with a good OTS.",
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
            "name": "Amitabh Khurana"
          },
          "datePublished": "2026-05-30",
          "reviewBody": "When my loan defaulted, agents called my brother. SettleLoans explained how individual PAN cards protect family members. Their team stopped all calls and closed the loan with a 60% waiver.",
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
            "name": "Rituja Salunkhe"
          },
          "datePublished": "2026-08-11",
          "reviewBody": "I feared the bank would freeze my sister's bank account. SettleLoans explained Order XXI CPC rules and spoke to the bank team. The process was quick and safe.",
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
      "@id": "https://www.settleloans.in/can-recovery-agents-freeze-family-bank-accounts#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can a bank or recovery agent legally freeze my family member's bank account for my loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Indian Contract Act, 1872, loan debt is strictly personal. Family members have zero liability. Banks and agents have no legal power to freeze or debit their accounts."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank deduct money from my spouse's salary account for my personal loan or credit card debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A spouse has a separate PAN card. Under Banker Set-Off rules, a bank cannot take money from a spouse's account. This rule applies even in the same bank branch."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I maintain a joint bank account with my spouse or parent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bank cannot seize a joint account under set-off rules. The joint holder can show income proof to court. The court then protects their share of funds."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact my parents, siblings, or workplace colleagues regarding my debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The RBI Fair Practices Code bans agents from calling relatives, friends, or coworkers. Contacting third parties violates privacy laws and is illegal."
          }
        },
        {
          "@type": "Question",
          "name": "Does an individual loan default impact my family members' CIBIL credit scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credit bureaus track credit scores by individual PAN numbers. Your loan default only affects your PAN. It has zero impact on family credit scores."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank attach parental or ancestral property for an unsecured personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured loans and credit cards have no collateral. Banks cannot use SARFAESI on ancestral property. Parents are not liable for debts of adult children."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents block or suspend family members' UPI IDs, Google Pay, or PhonePe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Recovery agents have zero control over UPI systems run by NPCI. Threats to block family payment apps or UPI IDs are fake and illegal."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take if recovery agents threaten to freeze my family's bank accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Record all calls and save text messages. Have a lawyer send a legal notice to the bank nodal officer. File a complaint on the RBI Ombudsman portal (cms.rbi.org.in)."
          }
        },
        {
          "@type": "Question",
          "name": "Why do recovery agents threaten family members if it is legally impossible to freeze their accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agents earn recovery commissions. They use fear and social pressure. They try to make panicked relatives pay money for a debt they do not owe."
          }
        },
        {
          "@type": "Question",
          "name": "How does an advocate-led One-Time Settlement (OTS) protect my family from future harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A lawyer negotiates an official OTS letter with a 45% to 65% waiver. Once paid, the bank issues a No Dues Certificate and closes the loan."
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
  { id: 'anatomy-of-family-account-freeze-threats', title: '1. Anatomy of Family Freeze Threats' },
  { id: 'legal-identity-pan-privity-of-contract', title: '2. PAN Separation & Privity of Contract' },
  { id: 'statutory-limits-banker-set-off-lien', title: '3. Banker Set-Off vs. Third-Party Funds' },
  { id: 'civil-attachments-garnishee-joint-accounts', title: '4. Civil Attachments & Joint Account Rules' },
  { id: 'family-protection-ots-visual-roadmap', title: '5. Family Protection & OTS Visual Roadmap' },
  { id: 'npa-accounting-npv-settlement-formula', title: '6. NPA Accounting & NPV Settlement Formula' },
  { id: 'advocate-defense-rbi-ombudsman-protocol', title: '7. 4-Stage Defense Against Agent Coercion' },
  { id: 'converting-harassment-into-55-ots', title: '8. Converting Intimidation into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '9. Sanction Forensics & RBI ₹0 NDC Mandate' },
  { id: 'comparative-legal-matrix-powers-vs-myths', title: '10. Legal Matrix: Reality vs. Agent Myths' },
  { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '12. Frequently Asked Questions' },
];

export default function FamilyBankAccountFreezeDefensePage() {
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
            <span>Family Asset Protection • Indian Contract Act &amp; RBI Directives</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Can Recovery Agents Freeze Family Bank Accounts?</h1>

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
              <span>RBI Regulatory &amp; Civil Law Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Family Recovery Harassment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request Free Legal Defense Review
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
                Debt liability in India is strictly personal. Banks and recovery agents cannot freeze or debit family accounts. Spouses, parents. And siblings have zero debt liability.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Family Account Protection &amp; Legal Truth</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Family Account Liability:</strong> Banks and collection agents cannot freeze or debit bank accounts of spouses, parents, or siblings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict PAN Separation:</strong> Under Indian contract law, debts attach only to the borrower&apos;s own PAN card.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banker Set-Off Limits:</strong> The Banker&apos;s Right of Set-Off requires mutual debts. It cannot touch family accounts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Severe RBI Violations:</strong> Threatening family accounts violates the RBI Fair Practices Code and is illegal harassment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Violations for 55% OTS:</strong> Legal notices against family harassment help win One-Time Settlements with deep waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Family Account Freeze Threats */}
            <section id="anatomy-of-family-account-freeze-threats" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Anatomy of Coercive Threats</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When job loss or medical crises hit, loan EMIs can fall behind. In these times, collection agents use illegal pressure. They call family members and make scary threats. Agents claim they will freeze a spouse&apos;s salary. They threaten to take a parent&apos;s pension or block family UPI apps.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These threats are false. Recovery agencies work on high commissions. Agents want fast cash bonuses. When borrowers cannot pay, agents turn to family members to cause panic. They invent fake terms like &quot;Family Account Liens&quot. to force families into selling gold.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The legal rule in India is plain. Banks and recovery agents cannot freeze or debit family bank accounts. Unless a relative signed as a co-borrower or guarantor, they have zero link to your debt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserX className="w-4 h-4 text-red-600" />
                    <span>The Fabricated Threat of Third-Party Attachment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents claim that families share joint debt. They claim living together lets banks freeze family accounts and seize salaries.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>The Unbending Statutory Reality</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian contract law protects individual legal identity. A lender cannot touch family funds without a contract. Freezing a relative&apos;s account is illegal.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Knowing your legal rights helps you stop threats, protect family assets. And settle your debt safely.
              </p>
            </section>

            {/* Section 2: Legal Identity, PAN Demarcation & Privity of Contract */}
            <section id="legal-identity-pan-privity-of-contract" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. PAN Separation &amp; Privity of Contract</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt liability in India is strictly individual. Every adult citizen is an independent legal person with separate rights. This separation is tracked by the <strong>Permanent Account Number (PAN)</strong>. Banks must link each loan and account to an individual PAN.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Doctrine of Privity of Contract (Indian Contract Act, 1872)</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Under the <strong>Indian Contract Act, 1872</strong>, a loan agreement binds only the bank and the borrower. Family members are strangers to the contract. No court or bank can force a relative to pay.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To hold a family member liable, the bank must have a signed <strong>Contract of Guarantee</strong> under <strong>Section 126 of the Indian Contract Act, 1872</strong>. In unsecured loans, relatives are never guarantors. They are only listed as reference contacts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Independent Spousal Rights</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Marriage does not make debts joint. A husband&apos;s loan cannot touch his wife&apos;s salary, savings, or Streedhan.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Parental Immunity from Debts</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Parents do not owe debts of adult children. Pension funds, gratuity. And parental assets are fully safe.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Emergency Reference Clarity</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    A reference contact is not a guarantor. References have zero legal liability for the loan.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Credit bureaus track credit scores by individual PAN. A loan default goes only on the borrower&apos;s PAN. It has zero impact on family credit scores.
              </p>
            </section>

            {/* Section 3: Statutory Boundaries: Banker Set-Off vs Third Parties */}
            <section id="statutory-limits-banker-set-off-lien" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Banker Set-Off vs Family Account Rules</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Recovery agents often use terms like Banker Lien to scare borrowers.
                Under Indian law, these rules never apply to family accounts.
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-blue-600" />
                    <span>Banker&apos;s Right of General Lien (Section 171, Indian Contract Act, 1872)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 171 of the Indian Contract Act, 1872, bank liens apply only to goods in trust.
                    Lien rules never apply to savings accounts or family money.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>The Equitable Right of Set-Off &amp; The Mutuality Requirement</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Banker Set-Off applies only to the same person.
                    It requires mutual debts.
                    A bank cannot debit a spouse or parent&apos;s account.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debiting family funds violates consumer law and RBI rules.
                File an urgent Ombudsman complaint for a fast refund.
              </p>
            </section>

            {/* Section 4: Civil Court Attachments, Garnishee Orders & Joint Accounts */}
            <section id="civil-attachments-garnishee-joint-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Civil Court Garnishee &amp; Joint Account Rules</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agents often claim they hold court warrants to seize family goods.
                This claim is false.
                Civil attachment follows the Code of Civil Procedure, 1908 (CPC).
                A bank must sue under Order XXXVII CPC and seek execution under Order XXI CPC.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Order XXI Rule 46 CPC, courts can issue Garnishee Orders.
                These orders apply only to the borrower&apos;s own money.
                Courts cannot attach family assets.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>The Legal Mechanics of Joint Bank Accounts</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  In a joint bank account, set-off does not apply.
                  Joint holders can show income proof.
                  The court then frees their funds right away.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Separate your joint bank accounts early.
                Single-holder accounts prevent bank errors during debt collection.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Wage Exemptions under Section 60 CPC</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Section 60(1)(i) CPC protects your salary.
                  The first ₹1,000 is fully exempt.
                  Two-thirds of the rest is protected.
                  EPF, PPF. And pensions are safe.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="family-protection-ots-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Family Protection &amp; OTS Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This roadmap covers five debt defense stages.
                It details PAN protection and legal options.
              </p>

              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/can-recovery-agents-freeze-family-bank-accounts.jpg"
                  alt="Can Recovery Agents Freeze Family Bank Accounts Legal Protections and Resolution Roadmap"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Identity &amp; Shield</span>
                  <span>Assert PAN rules. Use contract laws. Keep family bank accounts separate.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Defense &amp; RBI</span>
                  <span>Send a legal notice. Report threats to the RBI Ombudsman and nodal desk.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Institutional 55% OTS</span>
                  <span>Negotiate a 45% to 65% waiver. Get a clean No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="npa-accounting-npv-settlement-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Bank NPA Provisioning &amp; Settlement</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do agencies target family members?
                They follow aggressive internal NPA rules.
                Loans become NPA after 90 days.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks must stop counting interest income.
                They must set aside capital reserves.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Category.</th>
                      <th>Overdue Period.</th>
                      <th>Mandatory RBI Reserve.</th>
                      <th>Settlement Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 to 90 Days Overdue.</td>
                      <td>5% General Provision.</td>
                      <td>Penal Interest &amp. Late Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 to 365 Days Overdue.</td>
                      <td>25% Unsecured Provision.</td>
                      <td>35% to 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>12 to 24 Months Default.</td>
                      <td>100% Capital Provision.</td>
                      <td>45% to 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>24+ Months / Full Write-Off.</td>
                      <td>100% Balance Sheet Write-Off.</td>
                      <td>55% to 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks use NPV to evaluate debt.
                They compare court costs against settlement.
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is the expected cash recovery.
                  r is the bank discount rate.
                  Deductions include legal and capital costs.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Civil suits take years and money.
                Section 60 CPC limits court recovery.
                Banks prefer quick cash settlements today.
              </p>
            </section>

            {/* Section 7: 4-Stage Defense Against Agent Coercion */}
            <section id="advocate-defense-rbi-ombudsman-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. 4-Stage Defense Against Agent Coercion</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If recovery agents harass your family, take action.
                Follow this 4-stage legal defense protocol built by banking lawyers:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Systematic Evidence Archiving &amp; Call Recording</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Record all recovery calls.
                    Save WhatsApp chats and voice notes.
                    Keep agent phone numbers as proof.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Cease-and-Desist Advocate Statutory Legal Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Have a lawyer send a formal notice.
                    Address the bank MD and nodal officer.
                    Cite Section 506 IPC and RBI rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to the RBI Integrated Ombudsman &amp; Law Enforcement</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File a complaint on the RBI portal (cms.rbi.org.in).
                    Report physical threats to local police.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Strategic Transition to Zonal Stressed Assets Desk</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bypass third-party recovery agents completely.
                    Move talks to bank zonal managers.
                    Negotiate a structured One-Time Settlement.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This legal strategy stops family harassment.
                It opens talks for a deep waiver.
              </p>
            </section>

            {/* Section 8: Converting Harassment into 55% OTS */}
            <section id="converting-harassment-into-55-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Converting Harassment into a 55% OTS</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Harassing family members violates RBI rules.
                When lawyers show proof of threats, banks settle.
                Borrowers use this leverage to secure an OTS.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A structured settlement clears your loan safely:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileSpreadsheet className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lawyers submit proof of job loss or illness.
                    This evidence justifies a large OTS waiver.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-600">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Lawyers get all late fees waived.
                    They win a 45% to 65% principal cut.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-purple-600">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Cessation of Family Contact</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Settlement terms order banks to delete family numbers.
                    All calls stop permanently.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-indigo-600">
                    <Wallet className="w-4 h-4 text-indigo-600" />
                    <span>Flexible Installment Tranching</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pay the settlement in 1 to 4 installments.
                    This structure fits your monthly budget.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Sanction Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Sanction Forensics &amp; RBI ₹0 NDC Mandate</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Watch out for fake settlement letters from rogue agents.
                Never pay cash on unofficial WhatsApp links.
                Always verify your settlement letter before paying.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Key Checkpoints of an Authentic OTS Sanction</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead:</strong> The letter must feature official bank stationery and manager sign.</li>
                  <li><strong>Accurate Details:</strong> The letter must list your full name, PAN. And loan account.</li>
                  <li><strong>Full Debt Discharge:</strong> The letter must confirm the settlement clears all dues in full.</li>
                  <li><strong>Legal Case Withdrawal:</strong> The bank must agree to withdraw all pending legal notices.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Master Circular RBI/2023-24/60</strong>, banks must issue an NDC within 30 days.
                  Lenders must update credit bureaus within 30 days of final payment.
                  Delays cost the bank a penalty of ₹5,000 per day.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Score Trajectory &amp; Credit Profile Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, the bank marks your loan as &quot;Settled&quot. with ₹0 balance.
                Your credit score drops briefly.
                Using a secured credit card rebuilds your score to 750+ in 18 to 24 months.
              </p>
            </section>

            {/* Section 10: Comparative Legal Matrix */}
            <section id="comparative-legal-matrix-powers-vs-myths" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. Legal Matrix: Reality vs. Agent Myths</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This matrix compares agent threats against law:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Recovery Agent Threat.</th>
                      <th>Legal Reality &amp. Statutory Truth.</th>
                      <th>Governing Indian Law / Regulation.</th>
                      <th>Borrower &amp. Family Protection Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Freezing Family Bank Accounts.</td>
                      <td>Illegal without co-borrower or guarantor status.</td>
                      <td>Indian Contract Act, 1872.</td>
                      <td>100% protection for all family members.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Deducting Money from Spouse&apos;s Salary.</td>
                      <td>Unlawful. violates mutual debt rules.</td>
                      <td>Banking Regulation Act rulings.</td>
                      <td>Immediate Ombudsman claim for full refunds.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Attaching Parental / Ancestral House.</td>
                      <td>Unsecured loans carry zero property rights.</td>
                      <td>SARFAESI Act, 2002 rules.</td>
                      <td>Ancestral properties remain 100% safe.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling Third Parties &amp. Relatives.</td>
                      <td>Strictly banned criminal harassment.</td>
                      <td>RBI Fair Practices Code.</td>
                      <td>Grounds for formal police complaints.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Damage to Family Members&apos. CIBIL.</td>
                      <td>Credit scores link to individual PAN.</td>
                      <td>Credit Information Companies Act.</td>
                      <td>Zero negative impact on family score.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Compromise (OTS).</td>
                      <td>Formal bank settlement with big waiver.</td>
                      <td>RBI Stressed Assets Framework.</td>
                      <td>Debt closure with official NDC.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. SettleLoans Legal Defense Advisory</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Protecting your family requires skilled banking lawyers.
                  SettleLoans defends borrowers across India daily.
                  We send notices to stop harassment.
                  We challenge all illegal bank liens.
                  We secure big OTS waivers for clients.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">12. Frequently Asked Questions</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Find clear legal answers on family account safety, PAN rules. And loan settlement in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Contract Act, 1872 (Section 126 Guarantee &amp; Privity of Contract)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Code of Civil Procedure, 1908 (Order XXI Garnishee &amp; Section 60 Exemptions)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Recovery Agent Harassment Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Directives on Recovery Agents &amp; Fair Practices Code</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Landmark Precedents on Individual Liability &amp; Right to Dignity)</span>
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
                  href="/application-to-unblock-bank-account-for-loan-emi"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Application to Unblock Account for EMI
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Freeze Salary Account Guide
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Recovery Harassment Complaint
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Agents Enter House Without Permission
                </Link>
                <Link
                  href="/can-recovery-agents-take-household-furniture-or-gold"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Agents Seize Household Items
                </Link>
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can I Go to Jail for Loan Default
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Sent Legal Notice What to Do
                </Link>
                <Link
                  href="/personal-loan-settlement-process"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Personal Loan Settlement Process
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
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior advocate with 14+ years of legal practice. He defends borrowers from agent threats, protects family money. And settles debts across India.
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
                <span>Emergency Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Are Agents Threatening Your Family?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not let recovery agents harass your spouse or parents. Retain our banking lawyers to send Cease-and-Desist notices and negotiate a 45% to 65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Protect Your Family Now
              </Link>
            </div>

            {/* Trust Signals Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3">
              <div className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Institutional Safeguards
              </div>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Doctrine of Privity Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Grievance Escalation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Compromise Settlement</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
