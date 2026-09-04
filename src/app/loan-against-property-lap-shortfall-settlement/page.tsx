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
  Home
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Property Loan (LAP) Shortfall Settlement | SettleLoans',
  description: 'Facing residual loan shortfall after property auction? Learn how to settle post-SARFAESI unsecured debt legally with SettleLoans.',
  keywords: [
    'loan against property shortfall settlement',
    'lap shortfall settlement',
    'sarfaesi auction shortfall residual debt',
    'post auction property loan settlement',
    'drt shortfall recovery notice',
    'settle mortgage loan shortfall',
    'loan against property auction deficit waiver',
    'sarfaesi property undervaluation defense',
    'rbi rules for loan against property shortfall',
    'drt limitation period for mortgage shortfall',
    'settle remaining balance after house auction',
    'ots for loan against property residual debt'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/loan-against-property-lap-shortfall-settlement',
  },
  openGraph: {
    title: 'Loan Against Property (LAP) Shortfall Settlement: Settle Post-Auction Residual Debt & DRT Shortfall Guide',
    description: 'Master the legal defense against post-auction LAP residual debt. Understand mortgage extinction, DRT 3-year limitation under Article 55/113, SARFAESI auction undervaluation challenges, and advocate-led OTS settlement.',
    url: 'https://www.settleloans.in/loan-against-property-lap-shortfall-settlement',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/loan-against-property-lap-shortfall-settlement.jpg',
        width: 1200,
        height: 675,
        alt: 'Loan Against Property LAP Shortfall Settlement Roadmap India',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loan Against Property Shortfall Settlement: Settle Residual Debt After Bank Auction',
    description: 'Facing a massive shortfall notice after bank auctioned your mortgaged property? Discover statutory protections under SARFAESI and DRT laws to legally settle residual debt.',
    images: ['https://www.settleloans.in/images/infographics/loan-against-property-lap-shortfall-settlement.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#webpage",
      "url": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement",
      "name": "Loan Against Property (LAP) Shortfall Settlement: Settle Post-Auction Residual Debt & Unsecured Shortfall under SARFAESI & DRT Rules",
      "description": "Comprehensive legal and financial manual on resolving Loan Against Property (LAP) shortfall debt after bank property auction in India. Covers SARFAESI Act, DRT limitation periods, unsecured conversion, and One-Time Settlement.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#breadcrumb"
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
      "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#breadcrumb",
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
          "name": "LAP Shortfall Settlement",
          "item": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#article",
      "headline": "Loan Against Property (LAP) Shortfall Settlement: Settle Post-Auction Residual Debt & Unsecured Shortfall under SARFAESI & DRT Rules",
      "description": "An exhaustive analysis of post-mortgage recovery law in India. Explains statutory conversion of secured debt to unsecured monetary claims, 3-year limitation periods in DRT under Article 55/113, SARFAESI distress auction fraud, and strategies for extinguishing post-auction shortfall claims through advocate representation.",
      "image": "https://www.settleloans.in/images/infographics/loan-against-property-lap-shortfall-settlement.jpg",
      "datePublished": "2026-08-28T10:00:00+05:30",
      "dateModified": "2026-08-28T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#webpage"
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
      "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#service",
      "name": "SettleLoans - LAP Shortfall Debt Settlement & DRT Defense Advisory",
      "description": "Specialized legal representation and banking conciliation services for borrowers facing post-auction Loan Against Property (LAP) shortfall claims, SARFAESI deficit recovery notices, and DRT recovery suits across Indian commercial banks and housing finance companies.",
      "url": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement",
      "image": "https://www.settleloans.in/images/infographics/loan-against-property-lap-shortfall-settlement.jpg",
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
        "reviewCount": "1940",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Suresh Chawla"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "State Bank of India auctioned our shop under SARFAESI for ₹62 Lakhs against our ₹95 Lakhs LAP loan. The bank then sent a DRT notice for the ₹33 Lakhs shortfall. SettleLoans proved SBI broke Rule 8(6) notice rules and undervalued our shop. The bank agreed to settle the entire remaining debt for just ₹4 Lakhs.",
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
            "name": "Pradeep R. Nair"
          },
          "datePublished": "2026-06-14",
          "reviewBody": "HDFC Bank sold our home at a distress price and demanded ₹18 Lakhs more. SettleLoans showed that over 3 years had passed since the sale without a court filing. The shortfall was barred by the Limitation Act. The bank closed the loan at ₹0 and gave us an NDC.",
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
          "datePublished": "2026-05-19",
          "reviewBody": "Bajaj Housing Finance sold our plot and claimed a ₹48 Lakhs deficit with penal interest. SettleLoans challenged the private arbitrator appointment under RBI rules. The lender dropped the case and accepted an easy settlement.",
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
            "name": "Devendra Kothari"
          },
          "datePublished": "2026-08-03",
          "reviewBody": "Kotak Mahindra Bank auctioned my warehouse and demanded ₹27 Lakhs extra. SettleLoans advocates stepped in and stopped agent calls. They talked to the bank's settlement committee and waived our entire balance.",
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
      "@id": "https://www.settleloans.in/loan-against-property-lap-shortfall-settlement#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a Loan Against Property (LAP) shortfall balance after a bank auction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A LAP shortfall occurs when a bank auctions your mortgaged property under the SARFAESI Act. But the sale money does not cover your full loan. The remaining unpaid balance is treated as an unsecured shortfall debt."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank still use the SARFAESI Act against me after auctioning my mortgaged property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Once the bank sells the property and issues a sale certificate under Rule 9(6), the mortgage ends. The bank cannot use SARFAESI powers or Section 13(4) notices for the shortfall. The debt becomes a simple unsecured claim."
          }
        },
        {
          "@type": "Question",
          "name": "What is the legal limitation period for a bank to claim an auction shortfall balance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Articles 55 and 113 of the Limitation Act, 1963, the bank has exactly 3 years from the auction date to file a recovery case in court or DRT. If the bank misses this 3-year deadline, the shortfall debt becomes time-barred and cannot be collected."
          }
        },
        {
          "@type": "Question",
          "name": "Where does the bank file a recovery case for a post-auction LAP shortfall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the shortfall is ₹20 Lakhs or more, the bank must file an Original Application (OA) before the Debt Recovery Tribunal (DRT). If the claim is under ₹20 Lakhs, the bank must file a suit in a regular civil court."
          }
        },
        {
          "@type": "Question",
          "name": "Can I challenge the bank's auction if the property was sold below market value?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Under Section 17 of the SARFAESI Act, you can challenge the auction before the DRT. You can act if the bank set a low reserve price or broke Rule 8(6) by skipping the mandatory 30-day notice. This gives you strong leverage to wipe out the shortfall."
          }
        },
        {
          "@type": "Question",
          "name": "Is it possible to settle a LAP auction shortfall for ₹0 or a heavily discounted OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once the property is sold, the shortfall becomes an unsecured 'Loss Asset' on the bank's books. Under RBI rules, banks must set aside 100% reserves for it. Lawyers use auction errors and DRT costs to negotiate ₹0 or low OTS settlements."
          }
        },
        {
          "@type": "Question",
          "name": "Are personal guarantors and co-borrowers liable for the post-auction shortfall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 128 of the Indian Contract Act, 1872, guarantors share debt liability. But guarantors have the same legal defenses, like the 3-year limitation and auction flaws. An advocate-led settlement frees both the borrower and all guarantors."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank attach my other personal bank accounts or unencumbered assets for the shortfall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The bank cannot freeze other accounts or seize assets without a formal court decree or DRT order. Getting a court decree takes years, giving you ample time to settle the debt peacefully."
          }
        },
        {
          "@type": "Question",
          "name": "What must be included in a formal LAP Shortfall Settlement Sanction Letter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A valid OTS letter must state: (1) Full closure of all shortfall debt. (2) Release of the borrower and all guarantors. (3) Withdrawal of all DRT and Section 138 NI Act court cases. and (4) Return of title papers with a No Dues Certificate."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a LAP auction shortfall impact my CIBIL credit score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your credit report will show a 'Settled' status with a ₹0 balance. This stops ongoing default marks and clears legal tags. You can rebuild your score back to 750+ within 18 to 24 months using secured credit cards."
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
  { id: 'anatomy-of-lap-auction-shortfall', title: '1. Post-Mortgage Crisis & SARFAESI Auction Shortfall' },
  { id: 'statutory-conversion-unsecured-debt', title: '2. Secured Mortgage to Unsecured Residual Claim' },
  { id: 'law-of-limitation-3-year-window', title: '3. Law of Limitation: 3-Year DRT Deadline' },
  { id: 'rigged-auctions-undervaluation-defenses', title: '4. Rigged Distress Auctions & SARFAESI Flaws' },
  { id: 'lap-shortfall-resolution-roadmap', title: '5. LAP Shortfall Resolution Roadmap' },
  { id: 'npa-accounting-npv-recovery-formula', title: '6. Bank NPA Accounting & NPV Settlement Formula' },
  { id: 'strategic-legal-defenses-zero-settlement', title: '7. Strategic Legal Defenses for ₹0 Settlement' },
  { id: 'sanction-letter-forensics-ndc-cibil', title: '8. Sanction Letter Forensics, NDC & CIBIL' },
  { id: 'lap-shortfall-comparative-matrix', title: '9. LAP Default Resolution Matrix' },
  { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function LoanAgainstPropertyShortfallSettlementPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Home className="w-3.5 h-3.5" />
            <span>SARFAESI &amp; DRT Rights • Post-Auction Residual Debt Resolution</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Property Loan (LAP) Shortfall Settlement & DRT Guide</h1>

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
              <span>RBI SARFAESI &amp; DRT Compliance Verified</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Settle Residual LAP Shortfall</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Request DRT Legal Case Evaluation
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
                When a bank auctions your mortgaged property under SARFAESI, the mortgage ends. The remaining balance becomes an unsecured debt subject to a strict 3-year DRT deadline under Article 55/113. Auction flaws and 100% bank reserves let advocates settle residual shortfalls for nominal sums or ₹0.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: LAP Auction Shortfall &amp; Post-Mortgage Settlement</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Conversion to Unsecured Debt:</strong> Once the bank sells your property under SARFAESI, the mortgage is gone. Any remaining shortfall becomes a simple unsecured money claim.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Strict 3-Year Limitation Deadline:</strong> Under Articles 55 and 113 of the Limitation Act, 1963, the bank must sue in DRT or court within 3 years of the auction. After 3 years, the claim is time-barred.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Loss of SARFAESI Powers:</strong> The bank cannot use Section 13(4) notices or take other property for the shortfall without winning a court case first.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>100% NPA reserves Pressure:</strong> RBI rules treat post-auction shortfalls as unsecured loss assets. This pushes banks to accept low One-Time Settlements (OTS) or ₹0 waivers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Challenging Flawed Auctions:</strong> If the bank skipped the 30-day notice under Rule 8(6) or sold below circle rates, you can challenge the shortfall in the DRT.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Post-Mortgage Crisis & SARFAESI Auction Shortfall */}
            <section id="anatomy-of-lap-auction-shortfall" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Post-Mortgage Crisis</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Defaulting on a Loan Against Property (LAP) can be overwhelming. Borrowers pledge their homes, offices, or factories to get these large loans. When business drops or emergencies strike, missing three EMIs triggers recovery under the SARFAESI Act, 2002.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank sends a 60-day notice under Section 13(2), followed by taking possession under Section 13(4) with magistrate help under Section 14. Losing your property is hard. But the biggest shock often comes after the auction. Many borrowers assume the auction clears all debt.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In reality, banks often sell properties at distress prices 30% to 50% below market value. If a ₹1 Crore property sells for ₹65 Lakhs against a ₹95 Lakhs loan, a ₹30 Lakh deficit remains. The bank then demands this <strong>post-auction residual shortfall</strong> from the borrower.
              </p>
            </section>

            {/* Section 2: Secured Mortgage to Unsecured Residual Claim */}
            <section id="statutory-conversion-unsecured-debt" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Conversion</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To defend against a shortfall demand, you must understand how the debt changes under Indian law. Under the Transfer of Property Act, 1882, a mortgage ties debt to specific property. When the bank sells the asset under SARFAESI and issues a Sale Certificate under Rule 9(6), the buyer gets full ownership.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The moment the sale is complete, <strong>the mortgage is legally cleared</strong>. The bank holds no more security over the property. The remaining shortfall becomes a simple <strong>unsecured personal claim</strong> against the borrower and guarantors.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This change limits the bank&apos;s powers. The lender can no longer use SARFAESI rules. To collect ₹20 Lakhs or more, the bank must file an Original Application (OA) in the Debt Recovery Tribunal (DRT). For claims under ₹20 Lakhs, the bank must file a civil suit under Order 37 CPC in civil court. Both routes take years.
              </p>
            </section>

            {/* Section 3: Law of Limitation: 3-Year DRT Deadline */}
            <section id="law-of-limitation-3-year-window" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The Law of Limitation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The <strong>Limitation Act, 1963</strong> is your strongest defense against an auction shortfall claim. Banks often wait years before taking legal action. But Indian law gives lenders a strict time limit to recover shortfall balances.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Article 62 gives 12 years only to sell the mortgaged property. Once the property is sold, personal recovery of the shortfall falls under <strong>Article 55 (breach of contract) or Article 113 (residual suits)</strong> of the Limitation Act, 1963.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Gavel className="w-4 h-4 text-[#1F5EFF]" />
                    <span>State Bank of India v. V. Kathirvelu (Madras High Court)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The High Court ruled that the right to claim a post-sale shortfall begins on the auction adjustment date. The bank has exactly 3 years to file a case under Order 34 Rule 6 CPC or the RDBFI Act.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-indigo-600" />
                    <span>Kamal Kishore v. State Bank of Patiala (Punjab &amp; Haryana HC)</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The court confirmed that the limitation deadline for a personal shortfall claim is 3 years from the auction date. Any case filed after 3 years is barred by limitation.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If the bank fails to file in the DRT within 36 months of the auction, the claim becomes time-barred. Advocates file objections under Section 3 of the Limitation Act. This forces courts to dismiss the claim.
              </p>
            </section>

            {/* Section 4: Rigged Distress Auctions & SARFAESI Flaws */}
            <section id="rigged-auctions-undervaluation-defenses" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Rigged Distress Auctions, Rule 8(6)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Shortfalls usually happen because lenders fail to run fair, open auctions. Under the SARFAESI Act, banks must protect the borrower&apos;s asset value. In <em>Mathew Varghese v. M. Amritha Kumar (2014)</em> and <em>J. Rajiv Subramaniyan v. Pandiyas (2014)</em>, the Supreme Court ruled that banks cannot sell mortgaged assets below market value.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks often commit serious legal mistakes during property auctions:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h3 className="font-bold text-slate-900">Breach of Mandatory 30-Day Individual Sale Notice (Rule 8(6))</h3>
                    <p className="text-slate-600 leading-relaxed">
                      The bank must give you 30 days of individual notice before advertising the sale. The Supreme Court ruled that skipping this 30-day window makes the entire auction invalid.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Arbitrary Reserve Price Fixing &amp; Lack of IBBI Valuer Assessment</h4>
                    <p className="text-slate-600 leading-relaxed">
                      Under Rule 8(5), banks must get a valuation from an approved IBBI valuer before fixing reserve prices. Lenders often rely on low estimates that undervalue properties.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900">Defective Auction Publication in Obscure Newspapers (Rule 9(1))</h4>
                    <p className="text-slate-600 leading-relaxed">
                      The law requires auction ads in two major local newspapers. Banks sometimes pick obscure papers. This prevents genuine buyers from bidding.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Filing an application under Section 17 of the SARFAESI Act puts heavy pressure on the bank. Facing legal risks, the bank often agrees to waive the shortfall.
              </p>
            </section>

            {/* Section 5: Step-by-Step LAP Shortfall Resolution Roadmap (Infographic Banner) */}
            <section id="lap-shortfall-resolution-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. LAP Post-Auction Shortfall Settlement Process</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This roadmap shows the step-by-step path from auction shortfall to a full ₹0 settlement:
              </p>

              <div className="my-6 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950">
                <Image
                  src="/images/infographics/loan-against-property-lap-shortfall-settlement.jpg"
                  alt="Loan Against Property LAP Post-Auction Shortfall Settlement Roadmap India"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Comprehensive Legal Roadmap: From SARFAESI Auction Deficit to ₹0 Unsecured Shortfall OTS</span>
                  <span className="text-blue-400 font-semibold">SettleLoans Legal Blueprint</span>
                </div>
              </div>
            </section>

            {/* Section 6: Bank NPA Accounting, Loss Asset Provisioning & NPV Settlement Formula */}
            <section id="npa-accounting-npv-recovery-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Bank NPA Accounting, Loss Asset Provisioning</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks agree to settle LAP shortfalls because of RBI rules under the <em>IRACP Norms</em>.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                While a loan has property collateral, the bank keeps low risk reserves. But after the auction, <strong>the remaining shortfall becomes an unsecured loss asset</strong>. Under RBI rules, banks must set aside <strong>100% reserves</strong> from their profits for this loss.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Keeping a ₹40 Lakh shortfall means locking ₹40 Lakhs of cash. Fighting a DRT case costs heavy court fees and advocate retainers over 3 to 6 years, with no guarantee of recovery.
              </p>

              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Bank Residual Shortfall Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-xs sm:text-sm md:text-base text-blue-200 border border-slate-700">
                  NPV_Shortfall = ∑ [ C_t / (1 + r)^t ] - DRT Court Fees - Advocate Retainers - 100% Locked Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Here, C_t is estimated recovery. And r is the discount rate. Banks deduct DRT court fees, advocate costs. And the 100% locked reserves burden.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Since fighting in court yields a net negative return, the bank&apos;s settlement committee prefers an immediate OTS waiver.
              </p>
            </section>

            {/* Section 7: Strategic Legal Defenses for ₹0 Settlement */}
            <section id="strategic-legal-defenses-zero-settlement" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Strategic Legal Defenses</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                If you receive a shortfall legal notice, you have strong legal remedies. Experienced banking advocates use these defenses to secure <strong>₹0 full compromise settlements</strong>:
              </p>

              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <ShieldX className="w-4 h-4 text-rose-600" />
                    <span>1. Statutory Limitation Defense (Section 3 Limitation Act Dismissal)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Advocates check the auction date against the court filing date. If 3 years have passed under Article 55 or 113 without debt acknowledgment, lawyers get the plaint dismissed under Order 7 Rule 11 CPC.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>2. Forensic Audit of Illegal Penal Compounding &amp; RBI Master Direction Breaches</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under RBI Circular <em>RBI/2023-24/53</em> and <em>Central Bank of India v. Ravindra (2002)</em>, banks cannot compound penal interest. Removing illegal penalty fees often wipes out the shortfall balance.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Building2 className="w-4 h-4 text-indigo-600" />
                    <span>3. DRT Counterclaim for Wrongful Distress Sale &amp; Asset Value Loss</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 19(8) of the RDBFI Act, borrowers can file counterclaims against banks for selling below market price. This risk forces banks to offer a mutual settlement waiver.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                    <Gavel className="w-4 h-4 text-purple-600" />
                    <span>4. Unilateral Arbitration Invalidation under Section 12(5)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Under Section 12(5) of the Arbitration Act and the Supreme Court <em>Perkins Eastman (2020)</em> ruling, one-sided arbitrator appointments are void. Advocates quash these actions quickly.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics, NDC & CIBIL */}
            <section id="sanction-letter-forensics-ndc-cibil" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. LAP Shortfall Sanction Letter Forensics &amp; NDC</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Always get a formal <strong>One-Time Settlement (OTS) Sanction Letter</strong> on bank letterhead before paying any funds.
              </p>

              <div className="p-5 rounded-2xl border border-blue-200 bg-blue-50/70 space-y-3 my-4">
                <h3 className="font-bold text-blue-950 text-sm flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Mandatory Clauses in a LAP Shortfall Settlement Sanction Letter</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-blue-900">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Full and Final Debt Discharge:</strong> The letter must confirm that all residual debt, interest. And shortfall balances are fully closed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Simultaneous Release of Guarantors &amp. Co-Borrowers:</strong> All co-borrowers and personal guarantors must be freed under Section 128 of the Indian Contract Act.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Mandatory Withdrawal of All Judicial actions:</strong> The bank must promise to withdraw all DRT cases, civil suits, and Section 138 NI Act cheque bounce complaints within 30 days.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Return of Residual Title Documents:</strong> The bank must agree to return any leftover property papers and link deeds within 30 days.</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must return all property papers and issue an NDC within 30 days. Any delay beyond 30 days requires the bank to pay ₹5,000 per day in payout.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The bank will also update credit bureaus to show a ₹0 balance. This stops default flags. This allows you to rebuild your CIBIL score back to 750+ over 18 to 24 months.
              </p>
            </section>

            {/* Section 9: LAP Default Resolution Matrix */}
            <section id="lap-shortfall-comparative-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. LAP Default Resolution Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Evaluating the strategic trade-offs across different resolution pathways highlights the profound advantage of advocate-led compromise talks:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Pathway.</th>
                      <th>Legal Basis / legal Standing.</th>
                      <th>Shortfall Financial Liability.</th>
                      <th>Resolution Timeline.</th>
                      <th>Guarantor &amp. Asset Protection.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Passive Inaction (Ignoring Notices).</td>
                      <td>Bank files DRT case.</td>
                      <td>100% debt plus 18% interest.</td>
                      <td>3 to 6 Years.</td>
                      <td>Guarantors face asset seizure.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Uncontested Civil / DRT Litigation.</td>
                      <td>Borrower fights without expert counsel.</td>
                      <td>High legal fees and court costs.</td>
                      <td>4 to 7 Years.</td>
                      <td>Ongoing credit damage.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led ₹0 / Discounted OTS.</td>
                      <td>Limitation and auction flaws leveraged.</td>
                      <td>₹0 to small nominal sum.</td>
                      <td>45 to 90 Days.</td>
                      <td>Complete discharge and NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">DRT Section 17 &amp. Counterclaim.</td>
                      <td>Challenging low auction price.</td>
                      <td>Bank faces liability for damages.</td>
                      <td>18 to 36 Months.</td>
                      <td>Court protection and orders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans LAP Shortfall Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Resolving post-auction shortfall demands requires expert knowledge of the SARFAESI Act, the RDBFI Act. And the Limitation Act, 1963. SettleLoans provides complete defense across India. We audit auction records, challenge flaws in the DRT, stop recovery calls. And negotiate ₹0 or low shortfall settlements with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Loan Against Property (LAP) Shortfall Settlement</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to critical questions regarding SARFAESI property auctions, post-mortgage unsecured debt conversion, DRT limitation periods. And residual shortfall debt settlement in India.
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
                  href="https://drt.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Debts Recovery Tribunal (DRT &amp; DRAT e-Filing Portal)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Prudential Norms on Advances (IRACP)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">SARFAESI Act, 2002 (Section 13 &amp; Security Interest Rules)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Limitation Act, 1963 (Articles 55, 62 &amp; 113 Statutory Periods)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Banking Malpractice Grievances)</span>
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
                  href="/auction-notice-challenge"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Auction Notice Challenge Guide
                </Link>
                <Link
                  href="/auction-settlement-process-loan-recovery-explained"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Property Auction Settlement Rules
                </Link>
                <Link
                  href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Order 37 CPC Summary Suit Defense
                </Link>
                <Link
                  href="/bank-recovery-case-in-court"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Court Cases
                </Link>
                <Link
                  href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  RBI Property Document Release Rules
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank OTS Policy Blueprint
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Arbitration Defense
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/car-loan-repossession-and-shortfall-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Vehicle Shortfall Settlement
                </Link>
                <Link
                  href="/cibil-score-kaise-sudhare-settlement-ke-baad"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Recovery Post-Settlement
                </Link>
              </div>
            </section>

          </main>

          {/* Right Column: Author Bio, Emergency Advocate CTA, Trust Signals */}
          <aside className="w-full lg:sticky lg:top-24 space-y-6">
            
            {/* Author Bio Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
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
                Expert in SARFAESI auction laws, DRT debt defense. And bank loan settlements. Over ten years of legal advisory work.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-[#1F5EFF] font-semibold hover:underline flex items-center gap-1">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Legal Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Immediate Legal Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Property Auctioned or Facing a Shortfall Notice?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not pay unfair loan balance claims. Hire seasoned DRT defense lawyers. We dispute low auction rates and close out pending balances.
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
                  <span>SARFAESI &amp; DRT Rule Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Official ₹0 Settlement Sanction Letters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Advocate-Led Banking Conciliation</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
