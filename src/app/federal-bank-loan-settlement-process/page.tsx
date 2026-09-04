import { Metadata } from 'next';
import Link from 'next/link';
import StatsStrip from '@/components/StatsStrip';
import CompanySection from '@/components/CompanySection';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  PhoneCall,
  ExternalLink,
  Building2,
  Landmark,
  Check,
  BookOpen,
  ShieldAlert,
  Scale,
  HelpCircle,
  Calculator,
  Layers,
  Gavel,
  FileCheck,
  UserCheck,
  AlertCircle,
  Banknote,
  Award,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Federal Bank Personal Loan Settlement | SettleLoans',
  description: 'Learn how to settle Federal Bank personal loans and cards legally. Stop legal notices and negotiate structured OTS waivers with SettleLoans.',
  keywords: [
    'federal bank loan settlement',
    'federal bank personal loan settlement process',
    'federal bank one time settlement ots policy',
    'federal bank samd stressed assets management',
    'federal bank gold loan auction shortfall settlement',
    'how to stop federal bank nach bounce charges',
    'federal bank recovery agent harassment complaint',
    'federal bank section 138 cheque bounce legal notice',
    'federal bank section 25 pssa legal notice',
    'federal bank loan settlement percentage',
    'federal bank no dues certificate ndc after settlement',
    'federal bank lok adalat settlement',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/federal-bank-loan-settlement-process',
  },
  openGraph: {
    title: 'Federal Bank Loan Settlement: OTS Rules, Legal Defense & Haircut (2026)',
    description: 'Learn how to settle a Federal Bank personal loan, business facility, or gold loan shortfall. Understand SAMD recovery desks, NPA provisioning haircuts, legal notice defense, and step-by-step compromise procedures.',
    url: 'https://www.settleloans.in/federal-bank-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/federal-bank-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Federal Bank Loan Settlement Process, SAMD Escalation and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Federal Bank Loan Settlement: OTS Rules, Legal Defense & Haircut',
    description: 'Technical and legal framework for negotiating One-Time Settlements (OTS) with The Federal Bank Limited under RBI Compromise Settlement frameworks.',
    images: ['https://www.settleloans.in/images/infographics/federal-bank-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/federal-bank-loan-settlement-process",
      "name": "Federal Bank Loan Settlement: OTS Rules, Legal Defense & Haircut (2026)",
      "description": "Comprehensive guide to Federal Bank loan settlement. Learn how to settle personal, business, and gold loan deficits, halt recovery harassment, defend Section 138 NI Act & Section 25 PSSA summons, navigate SAMD escalation, and negotiate up to 60% OTS haircut under RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#breadcrumb",
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
          "name": "Federal Bank Loan Settlement Process",
          "item": "https://www.settleloans.in/federal-bank-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#article",
      "headline": "Federal Bank Loan Settlement: OTS Rules, Legal Defense & Haircut Guide",
      "description": "An exhaustive strategic guide on negotiating One-Time Settlements (OTS) with Federal Bank, navigating SAMD Stressed Assets desks, halting NACH bounce fees, defending Section 138/25 notices, and resolving gold loan shortfall claims.",
      "image": "https://www.settleloans.in/images/infographics/federal-bank-loan-settlement-process.jpg",
      "datePublished": "2026-08-29T10:00:00+05:30",
      "dateModified": "2026-08-29T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#service",
      "name": "SettleLoans - Federal Bank Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Federal Bank personal loans, business credit facilities, and gold loan shortfalls under RBI compromise settlement frameworks.",
      "url": "https://www.settleloans.in/federal-bank-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/federal-bank-loan-settlement-process.jpg",
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
        "reviewCount": "1540",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "K. R. Venugopal"
          },
          "datePublished": "2026-07-19",
          "reviewBody": "I had a Federal Bank loan of ₹11.8 Lakhs. My Kochi export business hit a major slump. SettleLoans stopped recovery calls to my home. They took my case to the SAMD desk. I got a 54% OTS waiver with an authentic ₹0 NDC.",
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
            "name": "Sunil Mehta"
          },
          "datePublished": "2026-06-25",
          "reviewBody": "Federal Bank auctioned my gold jewelry after crop loss. Then they claimed a ₹2.4 Lakh shortfall. SettleLoans audited the auction accounts. They settled the full debt for ₹75,000. All court threats stopped completely.",
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
            "name": "Radhika Nair"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "I lost my IT job in Bengaluru. My ₹8.5 Lakhs loan got hit with ₹1.2 Lakhs in late fees. SettleLoans sent a hardship letter to the Aluva Head Office. They got all late penalties waived. I settled at 48% of the core principal.",
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
            "name": "Jignesh Patel"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "I received a Section 138 notice from Federal Bank lawyers. SettleLoans filed our financial distress reply. They represented us in Lok Adalat. We settled for ₹4.8 Lakhs on a ₹10.2 Lakhs claim. The case was withdrawn.",
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
      "@id": "https://www.settleloans.in/federal-bank-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Federal Bank loan settlement process and how does an OTS compromise work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal Bank loan settlement resolves unpaid debt under RBI rules. If a loan is unpaid for 90 days, it turns into an NPA. The file moves from the branch to the SAMD desk. Borrowers submit a hardship file. SAMD reviews it and issues an OTS letter with a 40% to 60% debt waiver."
          }
        },
        {
          "@type": "Question",
          "name": "How does Federal Bank's Stressed Assets Management Department (SAMD) handle defaulted loans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal Bank handles bad loans via SAMD desks in Aluva and zonal hubs. When an account turns into an NPA, SAMD officers take charge. They have the power to approve debt waivers and issue OTS letters."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you realistically negotiate with Federal Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federal Bank approves debt waivers between 40% and 60% on personal and business loans. For older NPA accounts, waivers can reach 50% to 60%. The bank also waives 100% of penal interest and bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "Can Federal Bank recover shortfalls after auctioning pledged gold ornaments in a gold loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a gold auction does not cover total loan dues, the bank claims the shortfall. But this unpaid balance is an unsecured civil debt. The bank cannot seize assets without a court order. You can settle the shortfall for 25% to 40% via OTS."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers stop Federal Bank NACH bounce charges and repeated debit attempts?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can stop repeat debit fees easily. First, cancel the NACH mandate through your bank. Second, send a hardship letter to Federal Bank to pause debits. Third, demand a 100% waiver on all bounce charges during OTS talks."
          }
        },
        {
          "@type": "Question",
          "name": "What legal protections exist against aggressive Federal Bank recovery agents and third-party callers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, recovery agents face strict limits. They can call only between 8:00 AM and 7:00 PM. They cannot call friends, family, or employers. Abusive language and office visits are banned. A legal notice to the Nodal Officer stops bad agent behavior."
          }
        },
        {
          "@type": "Question",
          "name": "How should a borrower handle a Section 138 NI Act or Section 25 PSSA notice from Federal Bank?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Section 138 or Section 25 notice needs an advocate reply within 15 days. The reply explains your financial distress and challenges late fees. It offers an OTS compromise. The matter is then settled before a Magistrate Court or Lok Adalat bench."
          }
        },
        {
          "@type": "Question",
          "name": "Can Federal Bank freeze your savings account in another bank for a personal loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Federal Bank can only hold funds in its own accounts under Section 171 of the Indian Contract Act. They have no power to freeze accounts in other banks without a court order."
          }
        },
        {
          "@type": "Question",
          "name": "How does settling a Federal Bank loan impact your CIBIL score and how can you rebuild it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Settling a loan marks your CIBIL file as Settled with a ₹0 balance. Your score drops initially by 75 to 150 points. But it stops default tags and court threats. You can rebuild your score back to 750+ within 18 months using a secured card."
          }
        },
        {
          "@type": "Question",
          "name": "What is the mandatory timeline for Federal Bank to deliver the No Dues Certificate (NDC) post-settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI rules, Federal Bank must issue your No Dues Certificate within 30 days of payment. They must also return all pledged papers. If the bank delays past 30 days, they must pay ₹5,000 per day to you."
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

export default function FederalBankLoanSettlementPage() {
  const tocItems = [
    { id: 'federal-bank-recovery-architecture', title: '1. SAMD Institutional Architecture' },
    { id: 'delinquency-timeline-npa-stages', title: '2. Delinquency Timeline & NPA Stages' },
    { id: 'stopping-nach-bounce-penalties', title: '3. Halting NACH Charges & Penal Fees' },
    { id: 'ots-haircut-npv-valuation', title: '4. OTS Haircuts & Provisioning Calculus' },
    { id: 'infographic-settlement-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'rbi-anti-harassment-recovery-rules', title: '6. Recovery Practices & Anti-Harassment' },
    { id: 'step-by-step-settlement-roadmap', title: '7. Step-by-Step Bank Settlement Roadmap' },
    { id: 'legal-notice-defense-138-gold-loan', title: '8. Section 138, PSSA & Gold Loan Deficit' },
    { id: 'sanction-letter-audit-ndc-guarantee', title: '9. Sanction Letter Audit & ₹0 NDC Mandate' },
    { id: 'cibil-score-trajectory-rehabilitation', title: '10. CIBIL Score Recovery & 18-Month Plan' },
    { id: 'settleloans-legal-defense', title: '11. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Federal Bank loan settlement process and how does an OTS compromise work?",
      answer: "Federal Bank loan settlement resolves unpaid debt under RBI rules. If a loan is unpaid for 90 days, it turns into an NPA. The file moves from the branch to the SAMD desk. Borrowers submit a hardship file. SAMD reviews it and issues an OTS letter with a 40% to 60% debt waiver."
    },
    {
      question: "How does Federal Bank's Stressed Assets Management Department (SAMD) handle defaulted loans?",
      answer: "Federal Bank handles bad loans via SAMD desks in Aluva and zonal hubs. When an account turns into an NPA, SAMD officers take charge. They have the power to approve debt waivers and issue OTS letters."
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate with Federal Bank?",
      answer: "Federal Bank approves debt waivers between 40% and 60% on personal and business loans. For older NPA accounts, waivers can reach 50% to 60%. The bank also waives 100% of penal interest and bounce fees."
    },
    {
      question: "Can Federal Bank recover shortfalls after auctioning pledged gold ornaments in a gold loan default?",
      answer: "If a gold auction does not cover total loan dues, the bank claims the shortfall. But this unpaid balance is an unsecured civil debt. The bank cannot seize assets without a court order. You can settle the shortfall for 25% to 40% via OTS."
    },
    {
      question: "How can borrowers stop Federal Bank NACH bounce charges and repeated debit attempts?",
      answer: "You can stop repeat debit fees easily. First, cancel the NACH mandate through your bank. Second, send a hardship letter to Federal Bank to pause debits. Third, demand a 100% waiver on all bounce charges during OTS talks."
    },
    {
      question: "What legal protections exist against aggressive Federal Bank recovery agents and third-party callers?",
      answer: "Under RBI rules, recovery agents face strict limits. They can call only between 8:00 AM and 7:00 PM. They cannot call friends, family, or employers. Abusive language and office visits are banned. A legal notice to the Nodal Officer stops bad agent behavior."
    },
    {
      question: "How should a borrower handle a Section 138 NI Act or Section 25 PSSA notice from Federal Bank?",
      answer: "A Section 138 or Section 25 notice needs an advocate reply within 15 days. The reply explains your financial distress and challenges late fees. It offers an OTS compromise. The matter is then settled before a Magistrate Court or Lok Adalat bench."
    },
    {
      question: "Can Federal Bank freeze your savings account in another bank for a personal loan default?",
      answer: "No. Federal Bank can only hold funds in its own accounts under Section 171 of the Indian Contract Act. They have no power to freeze accounts in other banks without a court order."
    },
    {
      question: "How does settling a Federal Bank loan impact your CIBIL score and how can you rebuild it?",
      answer: "Settling a loan marks your CIBIL file as Settled with a ₹0 balance. Your score drops initially by 75 to 150 points. But it stops default tags and court threats. You can rebuild your score back to 750+ within 18 months using a secured card."
    },
    {
      question: "What is the mandatory timeline for Federal Bank to deliver the No Dues Certificate (NDC) post-settlement?",
      answer: "Under RBI rules, Federal Bank must issue your No Dues Certificate within 30 days of payment. They must also return all pledged papers. If the bank delays past 30 days, they must pay ₹5,000 per day to you."
    }
  ];

  return (
    <div
      className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#1F5EFF] selection:text-white"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, -apple-system, BlinkMacSystemFont, sans-serif' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />

      {/* 1. Charcoal Navy Hero Section */}
      <section
        className="w-full border-b border-slate-700/80 pt-8 pb-7 md:pt-12 md:pb-9 px-4 md:px-8 lg:px-16 relative overflow-hidden text-white"
        style={{ backgroundColor: '#2d313d' }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-[#1F5EFF] rounded-full blur-[140px]" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-blue-600 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-black mb-3 tracking-wider uppercase">
            <Landmark className="w-3.5 h-3.5" />
            <span>Scheduled Commercial Bank Dispute Resolution • Federal Bank</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Federal Bank Personal Loan Settlement: OTS Guide</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <UserCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>
                Written by{' '}
                <Link
                  href="/authors/ashish-jhangra"
                  className="font-bold underline hover:text-white transition-colors"
                >
                  Ashish Jhangra.
                </Link>
              </span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-blue-400" />
              <span>Updated: August 2026.</span>
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>RBI Compromise Settlement Framework Compliant.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Federal Bank Settlement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Free Case Evaluation
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column (Sticky Table of Contents + Executive Crux) */}
          <aside className="w-full sticky top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-blue-50/60 border border-blue-200/70 rounded-2xl p-4 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-blue-950">
                <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                <span>Federal Bank Quick Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Unpaid Federal Bank loans move to SAMD at Aluva. This occurs past 90 days. Dealing directly with SAMD avoids recovery agents. It unlocks 40% to 60% debt waivers under RBI rules.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Federal Bank Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Compromise Protections.</strong> Loan default is a civil matter. Borrowers have legal rights under RBI rules. They can seek an OTS settlement.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Direct SAMD Desk Escalation.</strong> Local branch managers hold low discount power. Real settlements are cleared by SAMD in Aluva. Zonal hubs also approve terms.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Stopping Electronic Mandate Fees.</strong> Cancelling e-NACH mandates stops repeat bounce fees. You save ₹500 to ₹1,000 each. Legal action waives 100% of penal interest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Gold Loan Deficit Defense.</strong> If gold auctions leave an unpaid debt, the bank cannot seize assets. A court order is needed. You can settle shortfalls for a small fraction via OTS.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Getting Your ₹0 NDC.</strong> Under RBI rules, Federal Bank must issue your NDC. Delivery must happen within 30 days. Delays carry a ₹5,000 daily fine.</span>
                </li>
              </ul>
            </div>
            
            {/* Section 1: Institutional Recovery Architecture & SAMD Operations */}
            <section id="federal-bank-recovery-architecture" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Institutional Architecture &amp; SAMD Recovery Infrastructure</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding Federal Bank&apos;s Stressed Assets Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank is based in Aluva, Kochi. It is a leading private bank in India. Its recovery setup follows a strict framework.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When loans default, authority leaves retail branches. Cases move to the central <strong>Stressed Assets Management Department (SAMD)</strong>. Operating from Aluva and zonal hubs, SAMD handles bad debts. They follow RBI rules.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Distressed borrowers often face recovery calls. But default is a civil matter under the Indian Contract Act, 1872. It is not a crime. Borrowers can stop bad agent tactics. They have the legal right to seek an OTS.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Legal Rule.</strong> Under RBI Master Directions on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24), banks must run compromise policies. Distressed borrowers can propose settlement terms without harassment.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Delinquency Timeline & NPA Stages */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Progression &amp; NPA Stages</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Federal Bank Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank tracks overdue loans under RBI IRACP norms. These stages guide your settlement strategy:
              </p>
              
              <div className="space-y-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-base">SMA-0 (DPD 1–30)</span>
                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">Early Default</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    When an EMI is missed, automated SMS alerts start. Branch teams call for payment. Bounce fees and penal interest are added.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-base">SMA-1 (DPD 31–60)</span>
                    <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">Tele-Calling Phase</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    In the second month, the account moves to calling agencies. Borrowers face frequent phone calls and loan recall notices.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-base">SMA-2 (DPD 61–90)</span>
                    <span className="text-xs font-bold bg-orange-100 text-orange-800 px-2.5 py-1 rounded-full">Pre-NPA Notice</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Risk escalates quickly. The bank issues legal notices under Section 138 NI Act. Notices also invoke Section 25 PSSA. Field visits may occur.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-base">NPA (DPD 90+) &amp; SAMD Handover</span>
                    <span className="text-xs font-bold bg-red-100 text-red-800 px-2.5 py-1 rounded-full">OTS Window Opens</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    After 90 days, the loan becomes an NPA under RBI rules. Interest stops building up. Recovery moves to SAMD. This opens the OTS settlement window.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Stopping NACH Bounce Charges & Penal Fees */}
            <section id="stopping-nach-bounce-penalties" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Banknote className="w-4 h-4" />
                <span>3. Halting NACH Charges &amp; Compounding Penal Fees</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Stopping Repeat NACH Bounce Penalties</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Loan distress grows with repeated bounce fees. Federal Bank tries multiple debit runs each month. They charge ₹500 to ₹1,000 plus GST. Your savings bank charges another ₹350 to ₹590.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                These fees inflate total dues. You can stop this drain quickly:
              </p>
              <ul className="space-y-3 my-4 text-slate-700 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Mandate Stop Under NPCI Rules.</strong> Under NPCI rules, you can cancel NACH mandates. This stops all automated debits.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Invoking RBI Penal Charges Circular (RBI/2023-24/53).</strong> Under RBI rules, banks cannot compound penal interest. Penal fees cannot be added to the principal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span><strong>Demanding 100% Penalty Reversal During OTS.</strong> Advocates demand a 100% waiver during SAMD talks. All bounce fees and penal interest are dropped.</span>
                </li>
              </ul>
            </section>

            {/* Section 4: OTS Haircut Policies & Valuation Framework */}
            <section id="ots-haircut-npv-valuation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Provisioning Valuation Calculus</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">How Federal Bank Calculates Settlement Haircuts</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank evaluates settlements using RBI provisioning rules. Banks must set aside capital reserves against bad debts:
              </p>

              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Loan Stage</th>
                      <th>Delinquency Duration</th>
                      <th>Required RBI Provision</th>
                      <th>Typical OTS Haircut Potential</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Standard / SMA-2.</td>
                      <td>1 to 90 Days.</td>
                      <td>0.40% to 5.0% Provision.</td>
                      <td>0% to 15% (Restructure).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sub-Standard Asset.</td>
                      <td>91 to 365 Days (NPA).</td>
                      <td>15% to 25% Provision.</td>
                      <td>35% to 45% Debt Cut.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful Asset (D1 &amp; D2).</td>
                      <td>1 to 3 Years in NPA.</td>
                      <td>25% to 40% Provision.</td>
                      <td>45% to 55% Debt Cut.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful 3 &amp; Loss Asset.</td>
                      <td>3+ Years / Written Off.</td>
                      <td>100% Provision.</td>
                      <td>55% to 65% Debt Cut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For Sub-Standard loans, the bank takes heavy loss provisions. DRT court cases take 3 to 7 years. SAMD teams prefer quick cash via OTS. Long court trials take years.
              </p>

              {/* Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Federal Bank Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Court Fees - Provision Cost
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  C_t is future recovery. r is the discount rate. Deductions cover court fees and capital provisions.
                </p>
              </div>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="infographic-settlement-blueprint" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>5. Visual Resolution Blueprint</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Federal Bank Loan Settlement Process Roadmap</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                This visual guide maps each step of a Federal Bank settlement. It tracks default past 90 days. It covers SAMD escalation. It explains notice defense, OTS talks, and NDC delivery.
              </p>
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md my-6 bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/infographics/federal-bank-loan-settlement-process.jpg"
                  alt="Federal Bank Loan Settlement Process Infographic Blueprint"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Section 6: Recovery Practices & Anti-Harassment Rules */}
            <section id="rbi-anti-harassment-recovery-rules" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>6. Recovery Practices &amp; RBI Anti-Harassment Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Enforcing RBI Directives Against Unlawful Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank is a regulated scheduled commercial bank. But third-party recovery agents often use harsh tactics. The RBI sets strict rules on recovery conduct. It limits outsourcing practices.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank borrowers enjoy key statutory protections:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Strict Calling Hours (08:00 AM – 07:00 PM)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents may call only between 8:00 AM and 7:00 PM. Calls before 8 AM or after 7 PM are illegal. Repeat auto-dialing is also banned.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                    <span>No Contact With Third Parties</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot call employers, friends, or neighbors. Sharing loan details violates DPDP laws and RBI rules.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#1F5EFF]" />
                    <span>No Office Visits</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Office visits meant to shame borrowers are illegal. Field agents must show bank ID cards. They must respect your privacy.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-[#1F5EFF]" />
                    <span>No False Criminal Threats or Fake Notices</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents cannot threaten police arrest or jail. Fake court notices sent on WhatsApp are illegal. Legal notices must come through registered advocates.
                  </p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If agents harass you, counsel serves a notice to the Nodal Officer at Aluva. Ongoing abuse is reported to the RBI Ombudsman.
              </p>
            </section>

            {/* Section 7: Step-by-Step Federal Bank Settlement Roadmap */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step Bank Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Federal Bank Compromise Settlement Guide</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank loan settlement follows five clear legal steps:
              </p>

              <div className="space-y-6 my-6">
                <div className="border-l-4 border-[#1F5EFF] pl-5 py-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Stage 1: Financial Hardship Dossier Preparation</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You gather proof of financial distress. This includes job loss letters, medical bills, or salary cuts.
                  </p>
                </div>

                <div className="border-l-4 border-[#1F5EFF] pl-5 py-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Stage 2: Mandate Revocation &amp; Loan Account Audit</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Advocates cancel your NACH mandate to stop bounce fees. They review your loan statement. They remove unfair penalties to find the pure principal.
                  </p>
                </div>

                <div className="border-l-4 border-[#1F5EFF] pl-5 py-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Stage 3: Direct Appeal to SAMD Recovery Desks</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A formal OTS file is sent to SAMD in Aluva. It can also go to the Zonal SAMD Manager. The file seeks a 40% to 60% debt waiver under RBI rules.
                  </p>
                </div>

                <div className="border-l-4 border-[#1F5EFF] pl-5 py-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Stage 4: Settlement Letter Verification &amp; Check</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    When approved, Federal Bank issues an official OTS letter. Advocates verify the payment amount and dates. They check waiver and ₹0 NDC terms.
                  </p>
                </div>

                <div className="border-l-4 border-[#1F5EFF] pl-5 py-1">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Stage 5: Settlement Payment &amp; ₹0 NDC Delivery</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You pay the agreed sum into the bank loan account. Federal Bank closes the account. They return pledged papers. They deliver the No Dues Certificate within 30 days.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Legal Notices & Court Defense */}
            <section id="legal-notice-defense-138-gold-loan" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>8. Legal Defense: Section 138, PSSA &amp; Gold Loan Deficit</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Sec 138, Sec 25 &amp; Gold Loan Shortfall Claims</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank often starts legal steps for overdue debts. A strong legal reply stops pressure. It opens the door to an amicable OTS.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">1. Section 138 Negotiable Instruments Act &amp; Section 25 PSSA Notices</h3>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When a cheque bounces, the bank sends a 15-day notice. It invokes Section 138 NI Act or Section 25 PSSA. These cases are 100% compoundable. An advocate reply shows true distress and offers an OTS. The matter is settled in Magistrate Court or Lok Adalat.
              </p>

              <h3 className="text-lg font-bold text-slate-900 mt-6 mb-3">2. Gold Loan Auction Shortfall &amp; Deficit Resolution</h3>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Federal Bank has a large gold loan base. If default happens, the bank auctions gold after a 14-day notice.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                If the auction does not cover dues, the bank claims a shortfall. But this deficit is an unsecured civil debt. Federal Bank cannot seize assets without a court decree. Borrowers can dispute high auction fees. You can settle the shortfall for 25% to 40% via OTS.
              </p>

              {/* Comparative Resolution Table */}
              <div className="overflow-x-auto my-6">
                <table>
                  <thead>
                    <tr>
                      <th>Resolution Channel</th>
                      <th>Governing Legal Framework</th>
                      <th>Expected Haircut Range</th>
                      <th>Resolution Timeline</th>
                      <th>Legal Finality</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Direct SAMD OTS.</td>
                      <td>RBI Master Directions.</td>
                      <td>40% to 60% Haircut.</td>
                      <td>15 to 30 Days.</td>
                      <td>Binding contract with ₹0 NDC.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">National Lok Adalat.</td>
                      <td>Legal Services Act, 1987.</td>
                      <td>45% to 60% Haircut.</td>
                      <td>Single-day hearing.</td>
                      <td>Final court decree.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sec. 138 / 25 Defense.</td>
                      <td>Magistrate Court Case.</td>
                      <td>35% to 50% Haircut.</td>
                      <td>1 to 3 Months.</td>
                      <td>Full case withdrawal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Gold Shortfall OTS.</td>
                      <td>Contract Act Pledge Rules.</td>
                      <td>60% to 75% Waiver.</td>
                      <td>15 to 45 Days.</td>
                      <td>Full release of debt.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 9: Sanction Letter Audit & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc-guarantee" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Audit &amp; ₹0 NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Checking Federal Bank Settlement Letters</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Never pay on verbal promises or unverified letters. Unofficial payments are treated as regular partial dues. Penal interest keeps building up.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Every genuine OTS letter must meet strict legal checks:
              </p>
              <ul className="space-y-2.5 my-4 text-slate-700 text-base md:text-lg">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Official Corporate Letterhead.</strong> The letter must come on The Federal Bank Limited letterhead. It must show the CIN and Aluva office address.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Official Bank Seal.</strong> The letter must show the name, code, and seal. It is signed by the SAMD Manager.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Full and Final Waiver Clause.</strong> The terms must confirm full debt waiver upon payment. No future claims can be made.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day NDC Delivery.</strong> Under RBI rules, Federal Bank must issue the No Dues Certificate. Delivery must take under 30 days. Delays carry a ₹5,000 daily fine.</span>
                </li>
              </ul>
            </section>

            {/* Section 10: Post-Settlement CIBIL Score Trajectory */}
            <section id="cibil-score-trajectory-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. CIBIL Score Recovery &amp; 18-Month Plan</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Federal Bank Post-Settlement CIBIL Recovery</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                After settlement, Federal Bank updates CIBIL and other bureaus. The status becomes Settled with a ₹0 balance.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                A Settled tag causes a score drop of 75 to 150 points. But it stops negative marks and court threats. A closed loan with zero dues beats an active default.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                You can rebuild your score back to 750+ within 18 months. First, get a secured credit card with a ₹25,000 limit. Second, use less than 25% of your card limit. Third, pay all bills on time every month.
              </p>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation */}
            <section id="settleloans-legal-defense" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Defense &amp; Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Federal Bank Borrowers Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Settling a Federal Bank loan requires expert legal handling. SettleLoans stops recovery harassment with legal notices. We defend Section 138 and Section 25 court cases. We audit statements to waive illegal fees. Our team talks directly with Federal Bank SAMD desks. We negotiate at Aluva and zonal hubs. We secure top debt cuts and your ₹0 No Dues Certificate.
              </p>

              {/* Placement of Reusable CompanySection */}
              <div className="my-8">
                <CompanySection />
              </div>
            </section>

            {/* Section 12: Frequently Asked Questions (FAQ Accordion) */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>12. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Federal Bank Loan Settlement</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-200 hover:border-slate-300 open:border-[#1F5EFF]/30 open:shadow-md"
                  >
                    <summary className="w-full p-5 md:p-6 flex justify-between items-center text-left cursor-pointer list-none focus:outline-none gap-4">
                      <span className="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5EFF] group-open:rotate-180 group-open:bg-[#1F5EFF] group-open:text-white transition-all duration-300">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </summary>
                    <div className="px-5 pb-6 md:px-6 md:pb-6 text-slate-600 text-base leading-relaxed border-t border-slate-100 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Regulatory References & Official Sources Strip */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-[#1F5EFF]" />
                Official Regulatory References &amp; Statutory Circulars
              </h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank of India (RBI).</strong> Master Direction on Compromise Settlements (DOR.STR.REC.20/21.04.048/2023-24).
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>RBI Circular.</strong> Fair Lending Practice - Penal Charges in Loan Accounts (RBI/2023-24/53).
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://www.federalbank.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>The Federal Bank Limited.</strong> Customer Grievance Redressal Policy and Nodal Officers Matrix.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://cms.rbi.org.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021.</strong> Online Portal for Banking Grievances.
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://nalsa.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>National Legal Services Authority (NALSA).</strong> Lok Adalat Settlement Guidelines.
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Guides & Resources Strip (10 Topic Badges) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#1F5EFF]" />
                Explore Related Banking &amp; Debt Resolution Guides
              </h3>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy.
                </Link>
                <Link
                  href="/personal-loan-settlement-letter-format"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Letter Format.
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage.
                </Link>
                <Link
                  href="/gold-loan-shortfall-auction-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Gold Loan Shortfall &amp; Auction Settlement.
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement.
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan.
                </Link>
                <Link
                  href="/personal-loan-legal-notice"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Legal Notice Defense.
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact.
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense.
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide.
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity">
                    AJ
                  </div>
                </Link>
                <div>
                  <div className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led 1,200+ loan settlements. He handles Federal Bank and top NBFCs. He specializes in SAMD talks, Sec 138 defense, and RBI rights.
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                <Link
                  href="/authors/ashish-jhangra"
                  className="text-[#1F5EFF] hover:underline"
                >
                  View Profile &rarr;
                </Link>
                <a
                  href="https://www.linkedin.com/company/settleloans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-[#1F5EFF]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Card 2: Emergency Advocate Assistance CTA */}
            <div className="bg-gradient-to-br from-[#1F5EFF] to-blue-700 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Federal Bank Dispute Resolution</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Federal Bank Loan Default?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop agent calls and repeat NACH bounce fees today. Our banking advocates audit your loan stage. We defend court notices and draft your OTS file. We secure a stamped settlement letter from Federal Bank.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to a Settlement Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct SAMD Desk Representation.</strong> We bypass recovery agents. We negotiate directly with Federal Bank Zonal SAMD desks.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection.</strong> We issue legal notices to stop illegal calls. We halt agent visits under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification.</strong> Every settlement letter is verified on Federal Bank letterhead before payment.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery.</strong> We track your case until NDC delivery. We also ensure CIBIL records are updated.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
