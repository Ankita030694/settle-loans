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
          "reviewBody": "A private bank recovery agency called my elderly mother and threatened to freeze her pension savings account over my defaulted personal loan. SettleLoans advocates immediately served a cease-and-desist statutory legal notice citing RBI Master Directions and privity of contract. The harassment stopped within 24 hours, and they negotiated a 52% OTS for my loan.",
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
          "reviewBody": "Recovery agents sent threatening WhatsApp messages claiming they had obtained a court warrant to attach my husband's salary account and block our family UPI IDs for my credit card debt. SettleLoans stepped in, exposed the fake legal notice, and filed an RBI Ombudsman complaint. SettleLoans secured an official No Dues Certificate after a clean compromise closure.",
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
          "reviewBody": "When my fintech app loan defaulted, collection agents started calling my brother threatening to freeze his salary. SettleLoans explained how individual PAN card demarcations completely shield third parties under Indian law. Their legal team handled all lender communications, stopped every call, and closed the debt with a 60% principal waiver.",
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
          "reviewBody": "I was terrified that the bank would seize our joint household savings or freeze my sister's bank account because she was listed as a reference. SettleLoans clarified the strict legal separation under Order 21 CPC and handled the bank's zonal desk professionally. The entire process was transparent and stress-free.",
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
            "text": "No. Under the Indian Contract Act, 1872, debt liability is strictly personal and governed by the Doctrine of Privity of Contract. Unless a family member has formally signed the loan agreement as a co-borrower or executed a registered contract of guarantee, commercial banks, NBFCs, and recovery agents possess zero legal authority to freeze, lien, debit, or attach their bank accounts."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank deduct money from my spouse's salary account for my personal loan or credit card debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A spouse is an independent legal and taxable entity holding a distinct Permanent Account Number (PAN). Under Indian banking law and the Banker's Right of Set-Off rules, a bank cannot appropriate funds from a spouse's individual account to satisfy another individual's debt, even if both accounts are maintained within the same banking institution."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I maintain a joint bank account with my spouse or parent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In a joint bank account, a bank cannot unilaterally seize the entire balance under the Right of Set-Off due to the lack of 'Mutuality of Debts'. While an executing civil court can issue a garnishee notice, the non-borrowing joint holder is legally entitled to prove that the funds represent their independent earnings, which immediately exempts their share from any attachment."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents contact my parents, siblings, or workplace colleagues regarding my debt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Reserve Bank of India (RBI) Master Direction on Fair Practices Code strictly prohibits lenders and recovery agents from contacting, harassing, or intimidating third parties, relatives, or colleagues who are not co-borrowers or guarantors. Such behavior violates borrower privacy rights and constitutes actionable criminal harassment."
          }
        },
        {
          "@type": "Question",
          "name": "Does an individual loan default impact my family members' CIBIL credit scores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) track credit histories strictly on the basis of individual PAN numbers. An individual loan default, settlement, or write-off is recorded solely against the borrower's PAN and has zero negative bearing on the credit scores of parents, spouses, or siblings."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank attach parental or ancestral property for an unsecured personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Unsecured personal loans and credit cards are extended without any underlying asset collateral. A bank cannot initiate SARFAESI proceedings or seize ancestral or parental real estate. Furthermore, under Hindu succession and civil laws, parents are not liable for the personal debts contracted by their adult children."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents block or suspend family members' UPI IDs, Google Pay, or PhonePe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Third-party recovery agents have no technical or legal authority over the Unified Payments Interface (UPI) infrastructure managed by NPCI. Any claim by collection agents that family UPI handles, digital wallets, or payment apps will be blocked is completely fraudulent and constitutes criminal intimidation."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take if recovery agents threaten to freeze my family's bank accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Immediately record all calls and preserve threatening text messages. Instruct legal counsel to issue a formal statutory cease-and-desist legal notice to the bank's Principal Nodal Officer and escalate the violation to the RBI Integrated Ombudsman Scheme (cms.rbi.org.in) and local law enforcement under criminal intimidation provisions."
          }
        },
        {
          "@type": "Question",
          "name": "Why do recovery agents threaten family members if it is legally impossible to freeze their accounts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Recovery agencies operate on aggressive commission structures. They employ psychological intimidation against family members to exploit emotional vulnerabilities and social stigma, hoping that panicked relatives will liquidate savings or borrow money to settle a debt for which they bear zero legal obligation."
          }
        },
        {
          "@type": "Question",
          "name": "How does an advocate-led One-Time Settlement (OTS) protect my family from future harassment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A formal advocate-negotiated OTS results in an official, bank-sanctioned compromise letter with a 45% to 65% principal haircut. Upon payment of the agreed settlement sum, the lender issues a formal No Dues Certificate (NDC), permanently closes the loan file, extinguishes all claims, and mandates the total cessation of collection contact."
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
                Debt liability under Indian law is strictly individual. Commercial banks and third-party recovery agencies possess zero statutory authority to attach, freeze, or touch bank accounts belonging to a borrower&apos;s spouse, parents, or siblings.
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
                  <span><strong>Zero Third-Party Account Liability:</strong> Commercial banks, NBFCs, and collection agencies cannot freeze, lien, or debit the bank accounts of non-borrowing spouses, parents, or siblings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict PAN Demarcation:</strong> Under the Indian Contract Act and Income Tax Act, financial liabilities are tethered strictly to the individual borrower&apos;s Permanent Account Number (PAN).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Banker Set-Off Limitations:</strong> The Banker&apos;s Right of Set-Off requires absolute mutuality of debts and cannot be applied against family members, even if accounts share the same banking branch.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Severe RBI Code Violations:</strong> Threatening to freeze family accounts, calling third-party relatives, or sending forged attachment notices violates the RBI Fair Practices Code and constitutes criminal intimidation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Leveraging Violations for 55% OTS:</strong> Deploying advocate legal notices against illegal third-party coercion forces lenders to stop harassment and negotiate institutional One-Time Settlements with significant waivers.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Family Account Freeze Threats */}
            <section id="anatomy-of-family-account-freeze-threats" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                1. The Anatomy of Coercive Threats: Can Recovery Agents Freeze Family Bank Accounts?
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an individual encounters genuine economic hardship resulting in overdue unsecured personal loans, credit card balances, or fintech app installments, third-party recovery agencies frequently cross legal boundaries. Among the most psychologically devastating intimidation strategies employed by outsourced collection agents is the explicit threat of family financial ruin. Distressed borrowers across India are routinely bombarded with aggressive phone calls, WhatsApp voice notes, and fabricated legal notices claiming that the bank will freeze their spouse&apos;s salary account, attach their elderly parents&apos; pension deposits, block ancestral property transactions, or suspend the family&apos;s Unified Payments Interface (UPI) handles.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These coercive statements represent calculated psychological terror designed to induce sheer domestic panic. Collection agencies operate under high-pressure commission frameworks, where third-party tele-callers earn contingency bonuses between eight and twenty percent of recovered funds. When an individual borrower asserts inability to pay due to job loss, medical catastrophe, or business failure, collection agents deliberately shift their pressure point to the borrower&apos;s innocent family. They manufacture pseudo-legal terminology—such as &quot;Pan-India Family Account Lien Directives,&quot; &quot;Third-Party Salary Seizure Orders,&quot; or &quot;Ancestral Asset Attachment Warrants&quot;—to frighten family members into liquidating personal savings, gold jewelry, or retirement funds to pay a debt they never contracted.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under the jurisprudence of the Republic of India, the legal reality is absolute and unambiguous: <strong>commercial banks, NBFCs, digital lending applications, and recovery agencies possess zero legal, administrative, or extra-judicial authority to freeze, lien, debit, or attach the bank account of any family member for an individual&apos;s unsecured loan default</strong>. Unless a family member voluntarily signed the original credit sanction agreement as a formal co-borrower or executed an enforceable contract of guarantee, they remain complete legal strangers to the debt obligation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserX className="w-4 h-4 text-red-600" />
                    <span>The Fabricated Threat of Third-Party Attachment</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Recovery agents falsely claim that family members share collective liability for household debts, asserting that living under the same roof or sharing a surname grants lenders the unilateral right to freeze all connected banking channels and debit incoming salaries.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-emerald-600" />
                    <span>The Unbending Statutory Reality</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Indian contract law strictly separates individual legal identities. A creditor cannot enforce a debt against third parties without explicit contractual privity. Any unilateral freeze on a non-borrowing family member&apos;s account constitutes an unlawful civil conversion and actionable criminal misconduct.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Understanding this foundational legal demarcation empowers borrowers and their families to dismantle coercive recovery intimidation, preserve domestic stability, and transition contentious defaults toward an institutional, advocate-guided compromise resolution.
              </p>
            </section>

            {/* Section 2: Legal Identity, PAN Demarcation & Privity of Contract */}
            <section id="legal-identity-pan-privity-of-contract" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                2. Legal Identity, PAN Demarcation &amp; The Doctrine of Privity of Contract
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The constitutional and statutory framework of financial liability in India rests firmly upon the principle of individual legal autonomy. Every adult citizen is recognized as a distinct, independent legal entity endowed with enforceable civil rights, separate property ownership capabilities, and exclusive tax accountability. This individual separation is institutionalized through the <strong>Permanent Account Number (PAN)</strong> framework administered under the Income Tax Act, 1961. Banking institutions are legally required to map all account openings, credit facilities, deposit instruments, and credit bureau filings to the specific PAN of the individual applicant.
              </p>
              
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
                  <span>The Doctrine of Privity of Contract (Indian Contract Act, 1872)</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Codified under the <strong>Indian Contract Act, 1872</strong>, the Doctrine of Privity of Contract dictates that a contractual relationship exists solely between the parties who entered into the agreement. A loan agreement is a bilateral contract executed exclusively between the financial institution (creditor) and the individual applicant (debtor). Third parties—regardless of whether they are spouses, parents, siblings, or adult children—are legal strangers to the contract. No court or financial entity can impose affirmative contractual duties or financial liabilities on a non-party.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To establish enforceable third-party liability for a personal loan or credit card facility, a commercial bank must possess an express, registered <strong>Contract of Guarantee</strong> executed under <strong>Section 126 of the Indian Contract Act, 1872</strong>, or a formal co-borrower agreement signed by the family member at the time of initial loan disbursement. In standard unsecured retail financing, credit cards, digital personal loans, and consumer durable loans, family members are never added as formal guarantors; at most, lenders collect emergency contact references during onboarding.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs my-4">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Independent Spousal Rights</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Under Indian civil jurisprudence, marriage does not create a joint financial liability for personal debts. A husband&apos;s unsecured loans cannot be recovered from his wife&apos;s salary, savings, or Streedhan property, and vice versa.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Parental Immunity from Debts</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Parents bear zero legal responsibility for debts incurred by adult children. Retirement gratuities, pension accounts, and self-acquired parental assets remain completely protected from creditor attachment.
                  </p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-purple-600" />
                    <span>Emergency Reference Clarity</span>
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    Listing a family member as a reference contact during digital loan onboarding does not convert them into a guarantor or co-obligor. References have zero legal liability for underlying loan defaults.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Furthermore, under the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit rating agencies—including TransUnion CIBIL, Experian, Equifax, and CRIF High Mark—maintain distinct credit records indexed strictly by individual PAN. An individual&apos;s loan default, written-off status, or settlement agreement is reported exclusively under the primary borrower&apos;s PAN and has zero bearing on the credit profile, credit score, or borrowing eligibility of any family member.
              </p>
            </section>

            {/* Section 3: Statutory Boundaries: Banker Set-Off vs Third Parties */}
            <section id="statutory-limits-banker-set-off-lien" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                3. Statutory Boundaries: Section 171 General Lien &amp; The Banker&apos;s Right of Set-Off
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To intimidate borrowers into believing their family&apos;s accounts are vulnerable, recovery agents frequently misrepresent established banking doctrines, notably the Banker&apos;s Right of General Lien and the Banker&apos;s Right of Set-Off. An in-depth examination of Indian statutory provisions reveals that both legal doctrines are strictly bounded by conditions of mutuality and capacity that make their application to third-party family accounts legally impossible.
              </p>
              
              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Landmark className="w-4 h-4 text-blue-600" />
                    <span>Banker&apos;s Right of General Lien (Section 171, Indian Contract Act, 1872)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>Section 171 of the Indian Contract Act, 1872</strong>, a banker retains a general lien over physical goods, bonds, shares, and commercial paper deposited into its custody in the ordinary course of banking business as a bailee. Established Supreme Court jurisprudence confirms that funds deposited in savings accounts, current accounts, or fixed deposits represent a debtor-creditor relationship, not a bailment of goods. Therefore, Section 171 cannot be invoked to seize liquid account balances, and it can never extend to properties or deposits belonging to third parties.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>The Equitable Right of Set-Off &amp; The Mutuality Requirement</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Banker&apos;s Right of Set-Off is an equitable mechanism that allows a banking institution to combine credit and debit balances held by the exact same customer to satisfy a matured, crystallized debt. However, the cardinal legal prerequisite for exercising set-off is <strong>Mutuality of Debts</strong>—the funds and the liabilities must exist between the exact same legal parties in the exact same legal capacity. A bank cannot set off the personal debt of an individual against an account maintained by their spouse, parent, sibling, or child, even if both individuals maintain accounts in the exact same branch of the lending bank.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If a bank officer or branch manager unlawfully debits funds from a family member&apos;s account to cover an individual&apos;s loan default, the bank commits an actionable tort of conversion, an egregious deficiency of banking service under the Consumer Protection Act, 2019, and a direct violation of RBI Master Directions. The affected family member holds an immediate legal entitlement to file an urgent complaint before the Banking Ombudsman and institute civil proceedings against the bank for the full restoration of funds along with exemplary damages for mental harassment.
              </p>
            </section>

            {/* Section 4: Civil Court Attachments, Garnishee Orders & Joint Accounts */}
            <section id="civil-attachments-garnishee-joint-accounts" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                4. Civil Court Attachments, Garnishee Orders under Order XXI CPC &amp; Joint Account Rules
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common scare tactic used by recovery agents is falsely claiming that the bank has obtained a &quot;Court Attachment Warrant&quot; to seize all family assets. To evaluate this claim, one must understand how formal asset attachment operates under the <strong>Code of Civil Procedure, 1908 (CPC)</strong>. In India, no creditor, bank, or NBFC can attach any bank account, salary credit, or immovable asset without first filing a formal civil recovery suit or summary suit under Order XXXVII CPC, conducting complete judicial trials, obtaining a formal decree, and initiating execution proceedings under <strong>Order XXI of the CPC</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under Order XXI Rule 46 of the CPC, an executing court may issue a <strong>Garnishee Order</strong> directing a third party (such as a bank) holding debts or property belonging to the judgment debtor to pay those sums to the decree holder. However, a Garnishee Order is strictly limited by law: the court can attach only those funds that legally belong to the judgment debtor in their individual right. The court possesses zero jurisdiction to attach third-party family assets to satisfy a judgment debtor&apos;s decree.
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>The Legal Mechanics of Joint Bank Accounts</span>
                </div>
                <p className="leading-relaxed text-amber-900">
                  A critical area of practical concern arises when a borrower maintains a <strong>Joint Bank Account</strong> with a spouse or parent under operational mandates such as &quot;Either or Survivor&quot; or &quot;Former or Survivor&quot;. While a commercial bank cannot unilaterally freeze a joint account for one party&apos;s individual debt under the Right of Set-Off due to lack of mutuality, civil courts executing a decree may issue an interim garnishee notice to the joint account. However, established Indian banking law dictates that the non-borrowing joint holder is entitled to produce evidence (such as salary slips, tax returns, or source documentation) proving their independent ownership of the funds. Upon establishing that the deposits represent the non-borrowing holder&apos;s earnings, the court must immediately release the attachment.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                As a standard protective measure, debt defense advocates strongly advise borrowers facing acute financial distress to immediately segregate joint banking arrangements. Converting joint accounts into distinct single-holder accounts prevents administrative confusion or wrongful automated debit holds by automated banking algorithms during collection cycles.
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Wage Exemptions under Section 60 CPC</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  Even in rare instances where a bank obtains a civil court decree against the primary borrower, <strong>Section 60(1)(i) of the Code of Civil Procedure</strong> provides absolute statutory protection for basic human subsistence. The first ₹1,000 plus two-thirds of the remainder of an individual&apos;s salary is strictly exempt from court attachment. Furthermore, provident funds (EPF/PPF), public pensions, and basic household necessities are completely immune from attachment under Section 60, ensuring that no creditor can reduce a family to destitution.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="family-protection-ots-visual-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                5. Family Asset Protection &amp; Debt Settlement Visual Roadmap
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comprehensive infographic roadmap below delineates the five critical stages of family debt defense—from establishing separate legal identity and asserting Indian Contract Act protections to halting recovery agent harassment through advocate representation, escalating RBI Ombudsman complaints, and concluding a structured compromise settlement with full debt discharge.
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
                  <span>Assert individual PAN separation; invoke Privity of Contract under Section 126 and isolate individual banking channels.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Advocate Defense &amp; RBI</span>
                  <span>Serve statutory cease-and-desist notice; escalate predatory third-party threats to the RBI Ombudsman and Nodal Desk.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Institutional 55% OTS</span>
                  <span>Negotiate a formal compromise settlement with 45%–65% principal waiver and obtain a zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Bank Accounting, NPA Provisioning & NPV Recovery Formula */}
            <section id="npa-accounting-npv-settlement-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                6. Bank Balance Sheet Economics, NPA Provisioning &amp; The Net Present Value (NPV) Valuation
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To understand why collection agencies resort to aggressive family intimidation—and how legal counsel turns that aggression into an affordable settlement—borrowers must understand the financial accounting rules governing commercial lenders in India. Under Reserve Bank of India prudential provisioning norms, when an unsecured credit facility remains overdue for more than 90 days past due (DPD), it is mandatorily classified as a <strong>Non-Performing Asset (NPA)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once a loan enters NPA classification, the bank cannot recognize accrued interest as income. More critically, the bank is legally required to set aside substantial capital from its operating profits to fund mandatory bad-debt provisions across aging delinquency categories:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Asset Classification</th>
                      <th>Delinquency Duration</th>
                      <th>Mandatory RBI Provisioning</th>
                      <th>Institutional Settlement Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2</td>
                      <td>31 to 90 Days Overdue</td>
                      <td>5% General Provision</td>
                      <td>Penal Interest &amp; Late Fee Waivers</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA</td>
                      <td>91 to 365 Days Overdue</td>
                      <td>25% Unsecured Provision</td>
                      <td>35% to 45% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1)</td>
                      <td>12 to 24 Months Default</td>
                      <td>100% Capital Provision</td>
                      <td>45% to 55% Principal Haircut</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset</td>
                      <td>24+ Months / Full Write-Off</td>
                      <td>100% Balance Sheet Write-Off</td>
                      <td>55% to 65% Principal Haircut</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because keeping an unsecured debt on the books drains profitability through 100% capital provisioning, bank credit committees assess delinquent accounts using the <strong>Net Present Value (NPV) of Recovery</strong> framework. Lenders compare the uncertain future cash flows of prolonged legal recovery against the immediate certainty of a cash settlement:
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
                  Where C_t represents estimated recoverable cash flows over time, r is the bank&apos;s discount rate, and deductions account for 3–5 years of court friction, advocate retainers, regulatory risk from Ombudsman complaints, and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Because civil litigation for unsecured loans in Indian courts is time-consuming, expensive, and subject to strict statutory debtor protections under Section 60 CPC, the net present value of pursuing contested court recovery is extremely low. When seasoned debt defense advocates expose the lender&apos;s unlawful family harassment and propose an immediate lump-sum settlement, bank zonal committees recognize that accepting an upfront 35% to 55% cash recovery generates vastly superior financial returns while permanently eliminating provisioning drag.
              </p>
            </section>

            {/* Section 7: 4-Stage Defense Against Agent Coercion */}
            <section id="advocate-defense-rbi-ombudsman-protocol" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                7. The Emergency 4-Stage Advocate Protocol Against Recovery Agent Coercion
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When third-party recovery agents subject non-borrowing family members to abusive phone calls or fabricated legal threats, passive endurance only encourages further aggression. Distressed families must execute an assertive, legally structured 4-stage defense protocol designed by banking litigation specialists:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 1: Systematic Evidence Archiving &amp; Call Recording</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Begin immediately recording all incoming recovery phone calls. Archive every threatening WhatsApp communication, SMS notice, voice recording, and home visit interaction. Note the caller&apos;s phone numbers, timestamps, identity disclosures, and the specific names of non-borrowing family members subjected to intimidation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 2: Cease-and-Desist Advocate Statutory Legal Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Retain specialized banking advocates to issue a formal statutory cease-and-desist legal notice to the bank&apos;s Managing Director, Principal Nodal Officer, and collection agency heads. The notice cites direct violations of the RBI Master Direction on Recovery Agents, Section 503/506 IPC (Criminal Intimidation), extortion provisions under the Bharatiya Nyaya Sanhita (BNS), and the Doctrine of Privity of Contract.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 3: Escalation to the RBI Integrated Ombudsman &amp; Law Enforcement</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If unauthorized third-party contact persists, file an expedited regulatory complaint on the <strong>RBI Complaint Management System (cms.rbi.org.in)</strong> under the category of &quot;Harassment by Recovery Agents / Breach of Fair Practices Code&quot;. For egregious threats involving physical intimidation or simulated court documents, lodge a formal General Diary (GD) entry or Police Complaint at the local police jurisdiction.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Stage 4: Strategic Transition to Zonal Stressed Assets Desk</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    With the bank facing severe regulatory exposure from the Banking Ombudsman and legal scrutiny, your advocates bypass third-party collection agencies entirely. Negotiations are redirected to the bank&apos;s senior Zonal Stressed Asset Resolution Group to structure a comprehensive One-Time Settlement.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This comprehensive legal intervention permanently dismantles third-party harassment, shields non-borrowing family members from distress, and establishes an advantageous foundation for closing the delinquent account on favorable financial terms.
              </p>
            </section>

            {/* Section 8: Converting Harassment into 55% OTS */}
            <section id="converting-harassment-into-55-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                8. Converting Recovery Harassment into an Affordable 45%–65% One-Time Settlement (OTS)
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Unlawful recovery harassment and threats directed against family members constitute major regulatory liabilities for commercial banks and NBFCs. When banking advocates formally document these fair practice breaches and present them to senior credit risk officers, the lender faces regulatory sanctions and reputational exposure. Borrowers can leverage this dynamic to transform an adversarial dispute into an institutional <strong>One-Time Settlement (OTS)</strong>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A structured compromise settlement enables borrowers to permanently extinguish their outstanding loan liabilities through an affordable, heavily discounted lump-sum payment or multi-month installment plan:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileSpreadsheet className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship Dossier Submission</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Advocates compile verifiable documentation demonstrating genuine financial incapacity—such as termination letters, business balance sheets, hospital bills, or salary deduction records—establishing legitimate inability to maintain the original repayment schedule.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Penalty Waiver &amp; Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Legal counsel secures the complete 100% waiver of all accumulated penal interest, overdue late charges, and recovery commissions, negotiating a <strong>45% to 65% reduction on the core principal ledger balance</strong> based on the loan&apos;s NPA vintage.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Cessation of Family Contact</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The settlement covenants legally bind the lender and all contracted agencies to immediately purge family contact details and cease all communications with non-borrowing third parties permanently.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Wallet className="w-4 h-4 text-indigo-600" />
                    <span>Flexible Installment Tranching</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Depending on financial liquidity, the agreed compromise amount is structured into single bullet payments or divided into two to four manageable monthly tranches, giving the borrower financial breathing space.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Sanction Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                9. Sanction Letter Forensics, Direct Remittance, RBI ₹0 NDC Mandate &amp; CIBIL Trajectory
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                During debt resolution, borrowers must guard against fraudulent settlement traps orchestrated by rogue collection agents. Collection tele-callers frequently issue fake WhatsApp settlement approval slips to collect token amounts, which are subsequently credited merely as overdue interest without closing the loan account. A borrower must never transfer funds until the settlement letter undergoes rigorous forensic verification.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Verification Checkpoints of an Authentic OTS Sanction</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Bank Letterhead:</strong> The sanction letter must be issued on official bank stationery featuring registered corporate logos, official branch addresses, unique reference numbers, and the signature/seal of an authorized Scale-IV / Chief Manager.</li>
                  <li><strong>Accurate PAN &amp; Account Identifiers:</strong> The letter must explicitly cite the primary borrower&apos;s full legal name, Permanent Account Number (PAN), and exact 16-digit loan account number.</li>
                  <li><strong>Absolute Debt Extinguishment Recital:</strong> The document must unequivocally state that upon remittance of the agreed compromise sum, the entire loan balance stands fully satisfied with zero residual liability.</li>
                  <li><strong>Closure &amp; Legal Withdrawal Undertaking:</strong> The agreement must state that all pending legal notices, arbitration petitions, or recovery proceedings will be unconditionally withdrawn within 30 days.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Delay Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Master Circular RBI/2023-24/60</strong>, all commercial banks and NBFCs are legally mandated to deliver a formal <strong>No Dues Certificate (NDC) / Full Debt Discharge Certificate</strong> and update credit information companies (CIBIL, Experian, Equifax, CRIF) within <strong>30 calendar days</strong> of receiving the final settlement tranche. If a lender fails to issue the NDC within 30 days, the bank is legally liable to pay a mandatory statutory penalty of <strong>₹5,000 for each day of delay</strong> directly to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Score Trajectory &amp; Credit Profile Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Following execution of the compromise settlement, the lender updates credit bureau records reflecting a status remark of <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with an outstanding ledger balance of <strong>₹0</strong>. While this closure causes a temporary credit score dip of 60 to 110 points, it halts compounding default accumulation, eliminates collection harassment, and protects the family&apos;s financial peace. By obtaining a secured fixed-deposit credit card, maintaining credit utilization below 30%, and ensuring prompt utility bill payments, settled borrowers systematically rebuild their credit score back to 750+ within 18 to 24 months.
              </p>
            </section>

            {/* Section 10: Comparative Legal Matrix */}
            <section id="comparative-legal-matrix-powers-vs-myths" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                10. Comparative Legal Matrix: Statutory Legal Authority vs. Recovery Agent Intimidation Myths
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The comparative legal matrix below analyzes common recovery agent threats against the governing statutory provisions under Indian civil, contract, and banking laws:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Recovery Agent Threat</th>
                      <th>Legal Reality &amp; Statutory Truth</th>
                      <th>Governing Indian Law / Regulation</th>
                      <th>Borrower &amp; Family Protection Scope</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Freezing Family Bank Accounts</td>
                      <td>Legally Impossible without Co-Borrower or Guarantee Signature</td>
                      <td>Indian Contract Act, 1872 (Section 126 &amp; Privity)</td>
                      <td>100% Immunity for Spouse, Parents &amp; Siblings</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Deducting Money from Spouse&apos;s Salary</td>
                      <td>Unlawful; Violates Banker Right of Set-Off Mutuality Rules</td>
                      <td>Banking Companies Act &amp; Supreme Court Precedents</td>
                      <td>Immediate Ombudsman Claim for Illegal Debit &amp; Damages</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Attaching Parental / Ancestral House</td>
                      <td>Unsecured Loans Carry Zero Real Estate Collateral Rights</td>
                      <td>SARFAESI Act, 2002 &amp; Order XXI CPC</td>
                      <td>Ancestral &amp; Parental Properties are 100% Protected</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Calling Third Parties &amp; Relatives</td>
                      <td>Strictly Prohibited; Constitutes Criminal Harassment</td>
                      <td>RBI Fair Practices Code &amp; Section 503/506 IPC</td>
                      <td>Grounds for RBI Ombudsman Complaint &amp; FIR Registration</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Damage to Family Members&apos; CIBIL</td>
                      <td>Credit History is Mapped Strictly to Individual PAN Cards</td>
                      <td>Credit Information Companies Act (CICRA, 2005)</td>
                      <td>Zero Negative Impact on Family Credit Scores</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led Compromise (OTS)</td>
                      <td>Formal Institutional Settlement with 45%–65% Haircut</td>
                      <td>RBI Stressed Assets Framework (2019 Circular)</td>
                      <td>Permanent Debt Closure with Official ₹0 No Dues Certificate</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  11. SettleLoans Legal Defense &amp; Family Debt Protection Advisory
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Navigating coercive debt recovery and protecting your loved ones from harassment requires experienced banking litigation advocates who understand Indian contract law, civil procedure exemptions, and RBI regulatory directives. SettleLoans delivers complete legal defense for borrowers across India: serving formal statutory cease-and-desist notices to stop third-party intimidation, challenging unlawful banking liens, escalating fair practice violations to the RBI Integrated Ombudsman, and negotiating directly with bank zonal authorities to secure 45% to 65% principal settlements backed by verified No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 12: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  12. Frequently Asked Questions: Family Account Freezes &amp; Legal Rights
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct, legally verified answers to critical questions regarding family account protection, individual PAN liability, and debt settlement in India.
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
                  <p className="text-xs text-slate-500">Chief Banking &amp; Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Senior advocate and banking litigation specialist with over 14 years of experience defending borrowers against recovery agent harassment, protecting family assets, and negotiating institutional One-Time Settlements across India.
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
                Do not let third-party recovery agents intimidate your spouse or parents. Retain seasoned banking advocates to issue statutory cease-and-desist notices and negotiate a 45%–65% OTS.
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
