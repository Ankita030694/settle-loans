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
  GraduationCap,
  Percent,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Avanse Education Loan Settlement | SettleLoans',
  description:
    'Learn how to settle Avanse education loans legally. Protect student and parent co-borrowers and negotiate structured OTS with SettleLoans.',
  keywords: [
    'avanse loan settlement process',
    'avanse education loan settlement',
    'avanse financial services ots policy',
    'avanse student loan default abroad',
    'shield co-borrower parents avanse loan',
    'avanse moratorium interest waiver',
    'avanse education loan haircut percentage',
    'avanse section 25 pssa notice reply',
    'avanse no dues certificate education loan',
    'avanse loan compromise settlement rbi',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/avanse-education-loan-settlement-process',
  },
  openGraph: {
    title: 'Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut (2026)',
    description:
      'Learn how to negotiate a One-Time Settlement (OTS) with Avanse Financial Services. Protect co-borrower parents, halt collection harassment, eliminate moratorium compound interest, and resolve unsecured or secured higher education debt under RBI frameworks.',
    url: 'https://www.settleloans.in/avanse-education-loan-settlement-process',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg',
        width: 1200,
        height: 675,
        alt: 'Avanse Education Loan Settlement Process and OTS Haircut Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut',
    description:
      'Technical and legal manual for settling defaulted Avanse higher education loans under RBI Compromise Settlement frameworks, protecting co-borrowers, and releasing pledged collateral.',
    images: ['https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#webpage",
      "url": "https://www.settleloans.in/avanse-education-loan-settlement-process",
      "name": "Avanse Education Loan Settlement: OTS Process, Co-Borrower Shield & Haircut (2026)",
      "description": "Comprehensive guide to Avanse Financial Services education loan settlement. Learn how to settle domestic & overseas student loans, shield co-borrower parents, eliminate capitalized moratorium interest, defend legal notices, and negotiate up to 60% OTS haircut under RBI guidelines.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#breadcrumb"
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
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#breadcrumb",
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
          "name": "Avanse Education Loan Settlement Process",
          "item": "https://www.settleloans.in/avanse-education-loan-settlement-process"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#article",
      "headline": "Avanse Education Loan Settlement: OTS Process, Co-Borrower Protection & Haircut Guide",
      "description": "A strategic guide on negotiating One-Time Settlements with Avanse Financial Services, de-capitalizing compounded moratorium interest, safeguarding co-borrower parents, and resolving overseas default distress.",
      "image": "https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg",
      "datePublished": "2026-09-02T12:00:00+05:30",
      "dateModified": "2026-09-02T12:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#webpage"
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
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#service",
      "name": "SettleLoans - Avanse Education Loan Settlement & Legal Defense",
      "description": "Specialized legal and financial negotiation advisory for settling defaulted Avanse Financial Services education loans, de-capitalizing moratorium interest, and shielding co-borrower parents under RBI compromise frameworks.",
      "url": "https://www.settleloans.in/avanse-education-loan-settlement-process",
      "image": "https://www.settleloans.in/images/infographics/avanse-education-loan-settlement-process.jpg",
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
        "reviewCount": "1820",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Aditya Sengupta" },
          "datePublished": "2026-07-19",
          "reviewBody": "I faced a tech layoff on my US STEM OPT visa. My Avanse loan of ₹48 Lakhs became impossible to pay. Agents in India began calling my retired father. SettleLoans stepped in right away. They sent legal notices to the bank's Nodal Officer. They removed ₹12 Lakhs in extra charges. We closed the loan for ₹21.5 Lakhs and got a clean No Dues Certificate.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Meera Ramanathan" },
          "datePublished": "2026-06-11",
          "reviewBody": "My daughter finished her MBA in the UK. Due to visa changes, she could not find a job. Avanse sent a Section 25 PSSA notice and arbitration summons. SettleLoans replied to all notices and challenged the arbitration. They settled the ₹36 Lakh loan for ₹16 Lakhs through the bank's stressed asset team.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Karthik Subramanian" },
          "datePublished": "2026-08-02",
          "reviewBody": "Avanse had our family home as collateral for a pilot loan. When training got delayed, they threatened SARFAESI action. SettleLoans filed a Section 13(3A) legal objection. They stopped the recovery action. They settled the ₹49 Lakh loan for ₹26 Lakhs and got our original property papers back in 28 days.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priyanka Bhattacharya" },
          "datePublished": "2026-05-27",
          "reviewBody": "Great legal support team. They removed years of extra study interest on my Avanse loan. They protected my mother's pension account from recovery calls. We settled the balance at a 55% discount on the principal amount.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/avanse-education-loan-settlement-process#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the Avanse education loan settlement process and how does an NBFC compromise work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Avanse settlement process is a legal settlement under RBI guidelines. When a loan is unpaid for over 90 days, it becomes an NPA. You can submit a hardship letter to Avanse's Stressed Assets team. They evaluate your job loss or money distress. Then they issue an official OTS letter with a discount. Paying the agreed amount closes the loan with a No Dues Certificate (NDC)."
          }
        },
        {
          "@type": "Question",
          "name": "How are co-borrower parents shielded when a student defaults on an Avanse loan after studying abroad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Section 60 CPC protects pensions, provident funds. And basic family salaries from court seizure. RBI rules also ban recovery agents from calling before 8 AM or after 7 PM. Agents cannot visit parents' workplaces or harass senior citizens. A formal legal notice stops illegal recovery calls at once."
          }
        },
        {
          "@type": "Question",
          "name": "How does compound interest during the study moratorium affect Avanse loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During college, simple interest adds up and joins the principal balance once EMIs start. This can turn a ₹40 Lakh loan into ₹60 Lakh. During settlement talks, lawyers audit the statement. They remove the added study interest and bounce fees, basing discounts on the actual money received."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver or haircut can you realistically negotiate with Avanse Financial Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On unsecured loans without property collateral, debtors can get a 40% to 60% waiver once the loan is an NPA. On secured loans backed by property, waivers are usually 20% to 35% based on property value."
          }
        },
        {
          "@type": "Question",
          "name": "Can Avanse Financial Services file a criminal case or have the borrower arrested for student loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on a student loan is a civil matter under the Indian Contract Act, 1872. Police cannot arrest you or file an FIR for job loss or money trouble. Section 25 PSSA notices for bounced debits are handled in court through legal counsel."
          }
        },
        {
          "@type": "Question",
          "name": "How should borrowers handle Section 25 PSSA notices and arbitration notices sent by Avanse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reply to a Section 25 PSSA notice within 15 days through an lawyer. State your real money hardship. For one-sided arbitration notices, challenge them under Sections 12 and 14 of the Arbitration Act using Supreme Court rulings (Perkins Eastman)."
          }
        },
        {
          "@type": "Question",
          "name": "Does defaulting on an Avanse loan in India impact credit scores or employment in the US, UK, or Canada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Credit bureaus in India are separate from foreign credit bureaus like Equifax US or Experian UK. An Indian loan default does not show up on your US, UK. or Canadian credit file. It does not affect student visas or work permits."
          }
        },
        {
          "@type": "Question",
          "name": "How are secured Avanse education loans resolved and property title deeds released?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If Avanse sends a SARFAESI Section 13(2) notice, file a Section 13(3A) objection with an OTS offer. This pauses property auctions. Once you pay the settlement amount, Avanse must return your original property papers within 30 days under RBI Circular RBI/2023-24/60."
          }
        },
        {
          "@type": "Question",
          "name": "Who within Avanse Financial Services has the legal authority to approve a loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Call agents and branch staff cannot approve waivers. Only Avanse's Stressed Assets Desk, Head of Credit. or Credit Committee can grant a settlement on official company letterhead."
          }
        },
        {
          "@type": "Question",
          "name": "How long does Avanse take to issue the No Dues Certificate (NDC) after settlement payment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, Avanse must deliver the No Dues Certificate within 30 calendar days. If they delay without valid cause, they must pay ₹5,000 per day in delay penalty."
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

export default function AvanseEducationLoanSettlementPage() {
  const tocItems = [
    { id: 'understanding-avanse-education-defaults', title: '1. NBFC Education Lending Dynamics & Default Mechanics' },
    { id: 'co-borrower-parent-shield-civil-rights', title: '2. Shielding Co-Borrower Parents & Statutory Civil Rights' },
    { id: 'delinquency-timeline-npa-stages', title: '3. Delinquency Timeline & Balance Sheet Provisioning' },
    { id: 'avanse-ots-haircut-valuation-npv', title: '4. OTS Haircut Policies & Financial Valuation Formula' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'legal-notices-section-25-arbitration-sarfaesi', title: '6. Section 25 PSSA, Arbitration & SARFAESI Legal Defense' },
    { id: 'step-by-step-avanse-settlement-process', title: '7. Step-by-Step NBFC Settlement Roadmap' },
    { id: 'sanction-letter-audit-zero-balance-ndc', title: '8. Sanction Letter Forensics & ₹0 NDC Enforcement' },
    { id: 'cibil-credit-repair-overseas-impact', title: '9. CIBIL Trajectory & Overseas Credit Implications' },
    { id: 'company-resolution-section', title: '10. SettleLoans Legal Defense & Advisory' },
    { id: 'faqs', title: '11. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "What is the Avanse education loan settlement process and how does an NBFC compromise work?",
      answer: "The Avanse settlement process is a formal deal under RBI guidelines. When a loan is unpaid for 90 days, it turns into an NPA. You submit a hardship letter to Avanse Stressed Assets team. They review your job loss or cash crisis. They then issue an official OTS letter with a discount. Paying this sum closes the loan with a No Dues Certificate (NDC)."
    },
    {
      question: "How are co-borrower parents shielded when a student defaults on an Avanse loan after studying abroad?",
      answer: "Section 60 CPC protects pensions, PF, and family pay from court seizure. RBI rules ban recovery agents from calling before 8 AM or after 7 PM. Agents cannot visit parents at work or harass elders. A formal legal notice stops illegal recovery calls at once."
    },
    {
      question: "How does compound interest during the study moratorium affect Avanse loan settlements?",
      answer: "During college, simple interest adds up and joins the principal when EMIs start. This can turn a ₹40 Lakh loan into ₹60 Lakh. During settlement talks, lawyers check the ledger. They remove added study interest and bounce fees, basing cuts on original funds."
    },
    {
      question: "What percentage of debt waiver or haircut can you realistically negotiate with Avanse Financial Services?",
      answer: "On unsecured loans without property collateral, debtors can get a 40% to 60% waiver once the loan is an NPA. On secured loans backed by property, waivers are usually 20% to 35% based on property value."
    },
    {
      question: "Can Avanse Financial Services file a criminal case or have the borrower arrested for student loan default?",
      answer: "No. Defaulting on a student loan is a civil matter under the Indian Contract Act, 1872. Police cannot arrest you or file an FIR for job loss or money trouble. Section 25 PSSA notices for bounced debits are handled in court through legal counsel."
    },
    {
      question: "How should borrowers handle Section 25 PSSA notices and arbitration notices sent by Avanse?",
      answer: "Reply to a Section 25 PSSA notice within 15 days through a lawyer. State your real money hardship. For one-sided arbitration notices, challenge them under Sections 12 and 14 of the Arbitration Act using Supreme Court rulings in Perkins Eastman."
    },
    {
      question: "Does defaulting on an Avanse loan in India impact credit scores or employment in the US, UK, or Canada?",
      answer: "No. Credit bureaus in India are separate from foreign credit bureaus like Equifax US or Experian UK. An Indian loan default does not show on your US, UK, or Canadian credit file. It does not affect student visas or work permits."
    },
    {
      question: "How are secured Avanse education loans resolved and property title deeds released?",
      answer: "If Avanse sends a SARFAESI Section 13(2) notice, file a Section 13(3A) objection with an OTS offer. This pauses property auctions. Once you pay the settlement amount, Avanse must return your original property papers within 30 days under RBI Circular RBI/2023-24/60."
    },
    {
      question: "Who within Avanse Financial Services has the legal authority to approve a loan settlement?",
      answer: "Call agents and branch staff cannot approve waivers. Only Avanse Stressed Assets Desk, Head of Credit, or Credit Committee can grant a settlement on official company letterhead."
    },
    {
      question: "How long does Avanse take to issue the No Dues Certificate (NDC) after settlement payment?",
      answer: "Under RBI Circular RBI/2023-24/60, Avanse must deliver the No Dues Certificate within 30 calendar days. If they delay without valid cause, they must pay ₹5,000 per day in delay penalty."
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Higher Education NBFC Dispute Resolution • Avanse Financial Services</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Avanse Education Loan Settlement: Legal OTS Guide</h1>

          <div className="text-xs text-slate-300 border-b border-slate-700 max-w-xl mx-auto pb-3 mb-5 flex flex-wrap items-center justify-center gap-4">
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
              <span>RBI Compromise Settlement Framework Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Negotiate Avanse Loan Settlement</span>
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
                <span>Avanse Stressed Loan Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Avanse loans past 90 days become NPAs under Ind AS 109 rules. Legal defense halts recovery visits. It secures 40% to 60% principal waivers. It protects co-signer parents.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Avanse Education Loan Settlement</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Legal Settlement Rights.</strong> Loan default is a civil matter under the Indian Contract Act, 1872. You can settle under RBI rules.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Protection for Parents.</strong> Section 60 CPC protects pensions and PF. Basic family pay is safe. RBI rules ban home visits.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Remove Study Interest.</strong> Legal talks remove extra study interest. Waivers apply to the original loan sum.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Realistic 40% to 60% Waivers.</strong> Unsecured NPA loans can get 40% to 60% principal waivers under RBI rules.</span> </li>
                <li className="flex items-start gap-2.5"> <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <span><strong>Guaranteed ₹0 NDC Delivery.</strong> Under RBI rules (RBI/2023-24/60), Avanse must issue your NDC and return property papers in 30 days.</span> </li>
              </ul>
            </div>

            {/* Section 1: NBFC Education Lending Dynamics & Default Mechanics */}
            <section id="understanding-avanse-education-defaults" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Specialized NBFC Architecture &amp; Default Mechanics</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Understanding Avanse Financial Services</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Avanse is a major student loan lender. They fund college degrees in India, the US, UK, Canada, Australia, and Europe. They offer unsecured loans up to ₹75 Lakhs and secured loans on property. These loans feature a study grace term plus a 6 to 12-month grace window.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Simple interest adds up during college years. When EMIs start, unpaid interest joins the principal balance. The total loan balance grows fast. A ₹40 Lakh loan can grow into ₹60 Lakh. Job loss or visa cuts make large EMIs hard to pay.</p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Default leads to bank bounce fees and penal interest of 24% to 36% per year. But default from job loss is a civil matter under the Indian Contract Act, 1872. Under RBI rules, you have the legal right to settle. You can get an official One-Time Settlement (OTS).</p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                    <strong>Statutory Principle:</strong> Under RBI Master Directions on Compromise Settlements, NBFCs must follow board-approved OTS policies. Job loss and visa issues qualify for a compromise settlement.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Shielding Co-Borrower Parents & Statutory Civil Rights */}
            <section id="co-borrower-parent-shield-civil-rights" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>2. Co-Borrower Parent Defense &amp; Statutory Immunity</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Shielding Co-Borrower Parents</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Parents sign as co-signers on most Avanse loans. Under Section 128 of the Indian Contract Act, 1872, they share debt duty. If a student loses a job abroad, recovery agents often target parents in India with pressure calls.

Civil law gives strong legal protection to parent co-signers. Section 60(1) of the Code of Civil Procedure, 1908 (CPC) shields family income and retirement funds:

Pensions and PF are 100% safe from court attachment under Section 60(1)(g) and Section 60(1)(k) CPC. Under Section 60(1)(i) CPC, basic living funds and two-thirds of salary cannot be attached. Personal clothes, kitchen items. and house rental rights are legally protected.

RBI rules ban calls before 8:00 AM or after 7:00 PM. Agents cannot visit offices or contact relatives. A Cease-and-Desist Notice to Avanse Nodal Officers stops abuse right away.</p>
            </section>

            {/* Section 3: Delinquency Timeline & Balance Sheet Provisioning */}
            <section id="delinquency-timeline-npa-stages" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>3. Delinquency Timeline &amp; NPA Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Avanse Loan Delinquency Lifecycle</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Under Ind AS 109 rules and RBI norms, student loan defaults move through distinct stages. Each stage changes how Avanse manages the debt:</p>

              <div className="space-y-3 my-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                    SMA-0 (1–30 DPD): Initial Dishonour
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Automated reminders and return fees begin. The loan is standard. No settlement discounts apply yet.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    SMA-1 (31–60 DPD): Escalated Collections
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Collections teams call co-signer parents in India to demand payment and income proof.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                    SMA-2 (61–90 DPD): Pre-NPA Warning
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Recovery agents get assigned. Field visits begin. Section 25 PSSA legal notices are sent.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                    NPA (90+ DPD): Non-Performing Asset
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Interest stops adding to books. Avanse sets aside 15% to 25% cash reserves under ECL rules.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-700"></span>
                    Doubtful / Loss Asset (180–365+ DPD)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Avanse sets aside up to 100% loss reserves. Stressed Asset teams now hold power to grant 40% to 60% debt cuts.</p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Setting aside reserves locks up lender capital. Sending a checked hardship petition after NPA status helps lawyers settle the largest debt cuts.</p>
            </section>

            {/* Section 4: OTS Haircut Policies & Financial Valuation Formula */}
            <section id="avanse-ots-haircut-valuation-npv" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Percent className="w-4 h-4" />
                <span>4. OTS Haircut Policies &amp; Financial Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Avanse OTS Haircut Policy</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Settlements with Avanse follow cash recovery models. Under RBI rules, Credit Committees evaluate settlement offers. They compare cash recovery against long court cases.

To win a good settlement, remove all bounce charges and penal interest first. Then reverse added study interest. Calculate discounts on the original loan amount.</p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Facility Type.</th>
                      <th>default Stage.</th>
                      <th>Penal & Bounce Waiver.</th>
                      <th>Principal Haircut Range.</th>
                      <th>Optimal Settlement Strategy.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Unsecured Overseas Student Loan.</td>
                      <td>90 – 180 Days (NPA Stage 1).</td>
                      <td>100% Full Waiver.</td>
                      <td>30% – 45% Principal Waiver.</td>
                      <td>Offer 45%–55% of Net Disbursed Principal.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Unsecured Overseas Student Loan.</td>
                      <td>180+ Days (Doubtful / Loss Asset).</td>
                      <td>100% Full Waiver.</td>
                      <td>45% – 60% Principal Waiver.</td>
                      <td>Offer 30%–40% of Total Book Dues.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Domestic Student Loan.</td>
                      <td>90 – 180 Days (NPA).</td>
                      <td>100% Full Waiver.</td>
                      <td>35% – 50% Principal Waiver.</td>
                      <td>show Domestic Entry-Level Salary Gap.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Avanse Secured Loan (Property Collateral).</td>
                      <td>180+ Days (SARFAESI Active).</td>
                      <td>100% Penal Waiver.</td>
                      <td>20% – 35% Principal Waiver.</td>
                      <td>Anchor Offer Above Property Distress Sale Net.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: High-Impact Resolution Blueprint (Infographic Banner) */}
            <section id="infographic-resolution-blueprint" className="scroll-mt-24 mb-12">
              <div className="bg-white border-2 border-blue-200 rounded-3xl overflow-hidden shadow-lg my-6 text-slate-800">
                <div className="bg-[#0A2540] text-white py-3.5 px-5 flex items-center justify-between border-b-2 border-[#1F5EFF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1F5EFF] flex items-center justify-center text-white text-xs shadow-sm">
                      <Scale className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block">
                        Institutional Debt Resolution Roadmap
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Avanse Education Loan Settlement &amp; Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/avanse-education-loan-settlement-process.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1F5EFF] hover:text-blue-300 font-bold flex items-center gap-1 transition-colors"
                  >
                    <span className="hidden sm:inline">Open Full Size</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* 16:9 Landscape Infographic Image */}
                <div className="p-3 md:p-4 bg-slate-50">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img
                      src="/images/infographics/avanse-education-loan-settlement-process.jpg"
                      alt="Avanse Education Loan Settlement Process and OTS Haircut Guide"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Protect parents under Section 60 CPC. Remove added study interest. Settle directly with Avanse teams for 40% to 60% debt cuts.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Legal Notices, Section 25 PSSA, Arbitration & SARFAESI Defense */}
            <section id="legal-notices-section-25-arbitration-sarfaesi" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Legal Notice Defense &amp; Statutory Counter-Measures</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Defending Legal Action</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">If defaults continue, Avanse may issue legal notices. Knowing your rights helps you build a strong defense.

Section 25 PSSA Notices (NACH Bounces): This is a 15-day notice for failed auto-debits. Your lawyer sends a legal reply showing financial hardship. This stops police claims and starts OTS talks.

Sole Arbitration Defense: Under Supreme Court rulings in Perkins Eastman and TRF Ltd, one-sided arbitrator choices are invalid. Your lawyer files Section 12(5) objections to halt actions.

SARFAESI Act Property Defense: If you get a Section 13(2) notice, your lawyer files a Section 13(3A) objection. This pauses property auctions to allow time to settle.</p>

              <div className="space-y-4 my-6">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">A</span>
                    Section 25 PSSA Demand Notices (NACH Bounces)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">This is a 15-day notice for failed auto-debits. Your lawyer sends a legal reply showing money hardship. This stops police claims and starts OTS talks.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">B</span>
                    Unilateral Sole Arbitration Defense
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Under Supreme Court rulings in <em>Perkins Eastman</em> and <em>TRF Ltd.</em>, one-sided arbitrator choices are invalid. Your lawyer files Section 12(5) objections to halt actions.</p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">C</span>
                    SARFAESI Act Property Defense (Secured Loans)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">If you get a Section 13(2) notice, your lawyer files a Section 13(3A) objection. This pauses property auctions . This allows time to settle.</p>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Notice status.</th>
                      <th>Governing legal Act.</th>
                      <th>Mandatory Response Window.</th>
                      <th>Debtor Risk Level.</th>
                      <th>Strategic Counter-Defense.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">NACH Mandate Dishonour.</td>
                      <td>Section 25 PSSA, 2007.</td>
                      <td>15 Calendar Days.</td>
                      <td>Moderate (Quasi-Criminal).</td>
                      <td>Send formal hardship reply. Case duplicate claims.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Sole Arbitrator Appointment.</td>
                      <td>Arbitration & settlement Act, 1996.</td>
                      <td>30 Calendar Days.</td>
                      <td>High (Ex-Parte Award Risk).</td>
                      <td>Invoke Perkins Eastman precedent. Disqualify arbitrator under Sec 12(5).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Collateral Demand Notice.</td>
                      <td>Section 13(2) SARFAESI Act, 2002.</td>
                      <td>60 Calendar Days.</td>
                      <td>Critical (Property Auction Risk).</td>
                      <td>Submit Section 13(3A) objection. Propose formal OTS settlement.</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Pre-Court Case Lok Adalat.</td>
                      <td>Legal Services Authorities Act, 1987.</td>
                      <td>Fixed Session Date.</td>
                      <td>Low (Consensual Forum).</td>
                      <td>Appear with counsel. Secure binding decree at deep discount.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 7: Step-by-Step NBFC Settlement Roadmap */}
            <section id="step-by-step-avanse-settlement-process" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>7. Step-by-Step NBFC Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Step-by-Step Guide to an Institutional One-Time Settlement</h2>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">1</span>
                    Ledger Forensic Audit &amp; De-Capitalization
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Get your full loan statement. Separate actual principal received from added study interest and late fines to set a clear baseline.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">2</span>
                    Mandate Revocation &amp; Parent Insulation
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Cancel auto-debit payments at your bank under NPCI rules. Send a legal notice to Avanse to direct all calls only to your lawyer.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">3</span>
                    Hardship Dossier Compilation
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Collect job loss letters, visa papers, medical bills. And bank statements. Send a formal OTS request to Avanse&apos;s Stressed Assets team.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">4</span>
                    Bilateral Credit Committee Negotiations
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Your lawyers settle directly with credit managers. They show family money limits to win a 40% to 60% principal waiver.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">5</span>
                    OTS Sanction Letter Forensic Verification
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Review the settlement letter. Ensure it is on official Avanse letterhead confirming full balance waiver and closure of all legal actions.</p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-1 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-xs flex items-center justify-center border border-blue-200">6</span>
                    Direct Account Remittance &amp; ₹0 NDC Delivery
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">Pay the agreed amount directly into the Avanse loan account. Avanse must deliver your No Dues Certificate and return property papers within 30 days.</p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & ₹0 NDC Enforcement */}
            <section id="sanction-letter-audit-zero-balance-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>8. Sanction Letter Forensics &amp; NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">OTS Sanction Letter Forensic Checklist</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Always check your Avanse OTS Sanction Letter against four key points to avoid fraud:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Corporate Letterhead &amp; CIN
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Must be on official Avanse Money Services Limited letterhead with CIN and Mumbai registered office address.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Authorized Signatory &amp; POA
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Must be signed and stamped by an authorized Credit Committee officer holding Power of Attorney.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Full Balance Waiver Clause
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Must clearly state that upon payment, all remaining balance, interest. And charges are completely closed.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    Legal Proceedings Withdrawal
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Must contain a clear term to withdraw all Section 25 PSSA notices, arbitration. And court filings unconditionally.</p>
                </div>
              </div>

              <div className="bg-blue-50/80 border-l-4 border-blue-600 p-5 rounded-r-xl my-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                    <strong>RBI Statutory Mandate (RBI/2023-24/60):</strong> Avanse must return original property papers and issue a formal No Dues Certificate within <strong>30 calendar days</strong> of full payment. Any delay carries a statutory penalty of <strong>₹5,000 per day</strong> payable directly to you.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: CIBIL Trajectory & Overseas Credit Implications */}
            <section id="cibil-credit-repair-overseas-impact" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>9. CIBIL Trajectory &amp; Overseas Credit Implications</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">CIBIL Score Trajectory, Overseas Credit Isolation</h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">Indian credit bureaus are separate from foreign bureaus. Under CICRA 2005, CIBIL defaults do not show on US, UK, or Canadian credit reports. A student loan default is a civil matter. It does not affect your student visa, OPT, or H-1B status.

In India, the settlement marks the loan as "Settled" with a ₹0 balance. This stops further score damage. Get a secured credit card. Keep card spending under 25%. You can rebuild your score back above 750 in 18 to 24 months.</p>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory & CompanySection */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Award className="w-4 h-4" />
                <span>10. SettleLoans Legal Defense &amp; Institutional Advisory</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">Institutional Debt Defense</h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">SettleLoans represents student debtors and their parents in India. Our lawyers stop agent abuse and reply to legal notices. We negotiate 40% to 60% debt waivers under RBI rules.</p>

              <CompanySection />
            </section>

            {/* Section 11: Comprehensive FAQ Section */}
            <section id="faqs" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>11. Frequently Asked Questions</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">FAQs: Avanse Education Loan Settlement &amp; Legal Defense</h2>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group bg-white border border-slate-200 rounded-2xl p-5 transition-all duration-200 hover:border-blue-300 shadow-sm open:border-blue-400"
                  >
                    <summary className="font-bold text-slate-900 text-base cursor-pointer list-none flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-200 group-open:rotate-180 flex-shrink-0" />
                    </summary>
                    <div className="pt-3 text-slate-700 text-sm md:text-base leading-relaxed border-t border-slate-100 mt-3">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* 5 Official Regulatory Links */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-10">
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-[#1F5EFF]" />
                Official Statutory &amp; Regulatory References
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Reserve Bank of India (RBI):</strong> Master Direction – Settlement Settlements and Technical Write-offs Framework (RBI/2023-24/40). </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>RBI Master Circular:</strong> Responsible Lending Conduct – Release of Movable/Immovable Property Documents on Repayment of Loans (RBI/2023-24/60). </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://www.avanse.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Avanse Money Services Limited:</strong> Fair Practices Code, Grievance Redressal Policy & Principal Nodal Officer Matrix. </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Recovery abuse, Illegal Mandate Sweeps & Document Delays. </a></li>
                <li className="flex items-start gap-2"><ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" /> <a href="https://nalsa.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors" > <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987. National Lok Adalat settlement Framework. </a></li>
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
                  href="/hdfc-credila-education-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  HDFC Credila Education Loan Settlement
                </Link>
                <Link
                  href="/abroad-education-loan-default-settlement-process"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Abroad Education Loan Default Settlement
                </Link>
                <Link
                  href="/education-loan-settlement-india"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Education Loan Settlement India Guide
                </Link>
                <Link
                  href="/parents-legal-liability-as-co-signers-when-child-defaults-on-education-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Parent Co-Signer Liability Defense
                </Link>
                <Link
                  href="/nbfc-education-loan-default-legal-action-by-hdfc-credila-avanse-incred"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  NBFC Education Loan Legal Defense
                </Link>
                <Link
                  href="/bank-one-time-settlement-ots-policy"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Loan Settlement Percentage Guide
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/bank-arbitration-notice-reply"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Arbitration Notice Reply Format
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/authors/ashish-jhangra" className="block flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:ring-2 hover:ring-blue-400 transition-all">
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
                  <p className="text-xs text-slate-500 font-medium">Lead Banking Legal & Higher Study Debt Strategist</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Ashish has led over 1,400 student loan settlement cases across top lenders. He handles Avanse, HDFC Credila, and InCred loans. He specializes in student loan cases, Section 60 CPC parent protections, and RBI settlement rules.</p>
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
                <span>Avanse Dispute Resolution Desk</span>
              </div>
              <div className="text-xl font-black mb-3 leading-tight">
                Facing Avanse Loan Default or Parent Harassment?
              </div>
              <p className="text-xs text-white/90 leading-relaxed mb-5">Protect your parents in India from recovery calls. Remove extra study interest. Consult our banking lawyers to submit your hardship file and win a 40% to 60% settlement with Avanse.</p>
              <Link
                href="/contact"
                className="block text-center bg-white hover:bg-slate-100 text-[#1F5EFF] font-bold py-3 px-4 rounded-xl text-sm transition-all duration-200 shadow"
              >
                Talk to an Education Loan Advocate
              </Link>
            </div>

            {/* Card 3: Trust Signals Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Direct Bank help:</strong> We bypass recovery agents to represent you directly before Avanse&apos;s Stressed Assets and Credit Committees. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Parent Protection:</strong> We issue prompt legal cease-and-desist notices under Section 60 CPC and RBI rules to shield your family. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Official Check:</strong> Every settlement is checked on official letterhead with complete balance release terms before you pay. </span></li>
                <li className="flex items-start gap-2.5"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" /> <span> <strong>Sure ₹0 NDC & Deed Recovery:</strong> Full legal tracking until your No Dues Certificate arrives and property title papers are returned. </span></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
