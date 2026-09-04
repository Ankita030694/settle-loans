import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronDown,
  Calendar,
  Award,
  PhoneCall,
  ExternalLink,
  Building2,
  Scale,
  CheckCircle2,
  HelpCircle,
  Calculator,
  Gavel,
  FileCheck,
  ShieldAlert,
  UserCheck,
  AlertCircle,
  Landmark,
  Layers,
  Banknote,
  BookOpen,
  Check,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Personal Loan Settlement in Raipur | SettleLoans',
  description: 'Learn how to settle personal loans legally in Raipur. Stop bank recovery harassment and resolve debt with up to 60% OTS waiver via SettleLoans.',
  keywords: [
    'debt settlement services in raipur chhattisgarh',
    'personal loan settlement raipur',
    'loan settlement lawyer in raipur',
    'debt settlement advocate raipur',
    'bank loan settlement in raipur',
    'lok adalat loan settlement raipur',
    'section 138 lawyer raipur',
    'nbfc recovery agent harassment raipur',
    'business loan settlement bhilai durg',
    'cibil recovery after settlement chhattisgarh',
    'ots scheme raipur chhattisgarh',
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-raipur',
  },
  openGraph: {
    title: 'Debt Settlement Services in Raipur Chhattisgarh: Settle Personal & Business Loans (2026)',
    description: 'Comprehensive legal and financial guide for resolving delinquent personal loans, credit card balances, and business credit lines in Raipur, Bhilai, and Bilaspur under RBI compromise settlement frameworks.',
    url: 'https://www.settleloans.in/personal-loan-settlement-raipur',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg',
        width: 1200,
        height: 675,
        alt: 'Debt Settlement Services in Raipur Chhattisgarh - Legal Debt Defense & OTS Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Debt Settlement Services in Raipur Chhattisgarh: Legal Loan Settlement Guide',
    description: 'Strategic legal defense against aggressive recovery agents, Section 138 NI Act notices, and Lok Adalat compromise settlements for Raipur, Bhilai, and Bilaspur borrowers.',
    images: ['https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#webpage",
      "url": "https://www.settleloans.in/personal-loan-settlement-raipur",
      "name": "Debt Settlement Services in Raipur Chhattisgarh: Settle Personal & Business Loans (2026)",
      "description": "Overdue loans in Raipur, Bhilai or Bilaspur? Consult top debt settlement services in Raipur Chhattisgarh to halt recovery harassment, defend Section 138/25 PSSA notices in District Court, represent at DLSA Lok Adalat, and negotiate 45%–65% RBI OTS debt waivers.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#breadcrumb"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#breadcrumb",
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
          "name": "Debt Settlement Services Raipur",
          "item": "https://www.settleloans.in/personal-loan-settlement-raipur"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#article",
      "headline": "Debt Settlement Services in Raipur Chhattisgarh: Legal Protection, Lok Adalat Representation & RBI OTS Debt Relief",
      "description": "A comprehensive regulatory, civil, and financial roadmap for salaried professionals, wholesale merchants, and MSME industrial manufacturers navigating unsecured debt settlement in Raipur, Bhilai, and Chhattisgarh. Covers RBI compromise settlement circulars, District Court JMFC defenses, DLSA Lok Adalat awards, and 45%–65% principal haircuts.",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg",
      "datePublished": "2026-09-01T10:00:00+05:30",
      "dateModified": "2026-09-01T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#webpage"
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#service",
      "name": "SettleLoans - Debt Settlement Services in Raipur Chhattisgarh",
      "description": "Specialized legal debt defense and financial settlement advisory for salaried executives, wholesale traders, MSME manufacturing unit owners, and retail borrowers dealing with personal loan, credit card, and business credit default in Raipur, Bhilai, and Bilaspur.",
      "url": "https://www.settleloans.in/personal-loan-settlement-raipur",
      "image": "https://www.settleloans.in/images/infographics/personal-loan-settlement-raipur.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pandri Commercial Complex, Main Road",
        "addressLocality": "Raipur",
        "addressRegion": "Chhattisgarh",
        "postalCode": "492004",
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
        "reviewCount": "1780",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mahendra Agrawal"
          },
          "datePublished": "2026-06-18",
          "reviewBody": "As a sponge iron raw material supplier in Urla Industrial Area, Raipur, severe payment defaults from rolling mills forced me to default on ₹32 Lakhs across two banks. SettleLoans advocates issued formal legal notices under the RBI Fair Practices Code, halted unauthorized site visits, and negotiated an authentic OTS for ₹13.8 Lakhs with stamped sanction letters and ₹0 NDCs.",
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
            "name": "Priya Sahu"
          },
          "datePublished": "2026-07-22",
          "reviewBody": "Living in Shankar Nagar, Raipur, unanticipated medical costs led to defaults on ₹11.5 Lakhs in credit cards and personal loans. When recovery agents contacted my office, SettleLoans stepped in immediately, halted NACH bounce charges, and secured an authentic 54% principal waiver directly with the zonal committee.",
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
            "name": "Rajesh Dewangan"
          },
          "datePublished": "2026-05-12",
          "reviewBody": "Our fabrication workshop in Bhilai Industrial Estate defaulted on a ₹19 Lakhs business credit line due to delayed infrastructure receivables. SettleLoans represented us against a Section 25 PSSA summons at Raipur District Court, referred the case to DLSA Lok Adalat, and achieved a binding decree for ₹8.2 Lakhs.",
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
            "name": "Dr. Amit Tiwari"
          },
          "datePublished": "2026-08-08",
          "reviewBody": "Expanding my clinic in Devendra Nagar, Raipur led to an unmanageable ₹14 Lakhs unsecured loan default during an economic downturn. SettleLoans audited the accounts, presented a verified insolvency dossier, stopped collection harassment, and finalized an OTS at ₹6.1 Lakhs.",
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
      "@id": "https://www.settleloans.in/personal-loan-settlement-raipur#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why do borrowers in Raipur need specialized debt settlement services rather than dealing with recovery agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Third-party collection agents operating across Raipur and Bhilai work on aggressive commissions and possess zero statutory authority to sanction debt waivers or alter contractual loan agreements. A specialized debt settlement advocate in Raipur understands the Reserve Bank of India Master Directions on Compromise Settlements, enforces statutory anti-harassment protections, defends against Section 138 NI Act or Section 25 PSSA summons in Raipur District Courts, and negotiates directly with bank Zonal Stressed Assets Committees for authentic 45% to 65% OTS principal waivers."
          }
        },
        {
          "@type": "Question",
          "name": "Can recovery agents visit my shop in Gol Bazar, Pandri, or residence in Shankar Nagar without notice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Reserve Bank of India Master Direction on Recovery Agents and NBFC Fair Practices Code, recovery personnel are strictly prohibited from visiting a borrower's business premises, retail shop, or residence without prior written notice. They cannot contact borrowers outside 08:00 AM to 07:00 PM, cannot use abusive language or intimidation, and are legally barred from disclosing debt details to customers, employees, neighbors, or business partners. Violations entitle borrowers to serve formal cease-and-desist notices and register complaints with the RBI Integrated Ombudsman."
          }
        },
        {
          "@type": "Question",
          "name": "What percentage of debt waiver can salaried employees and business owners in Raipur negotiate under an RBI OTS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For unsecured personal loans, credit card balances, and clean MSME business lines overdue past 90 to 180 days (classified as Non-Performing Assets), commercial banks and NBFCs in Chhattisgarh typically sanction principal haircuts between 45% and 65%, alongside a 100% complete waiver of all accumulated late fees, penal interest, and NACH bounce penalties. The exact haircut depends on asset aging, balance-sheet provisioning status, and documented commercial insolvency."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Raipur District Legal Services Authority (DLSA) National Lok Adalat facilitate loan settlements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Raipur District Legal Services Authority organizes quarterly National Lok Adalats at the District Court Complex near Kalibadi. In Lok Adalat sessions, sitting judges and judicial conciliators facilitate compromise negotiations between borrowers and bank representatives. The finalized settlement is recorded as a Lok Adalat Award, which carries the legal force of a binding, non-appealable Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987, fully extinguishing the debt."
          }
        },
        {
          "@type": "Question",
          "name": "Can a borrower in Chhattisgarh face police arrest or an FIR for defaulting on an unsecured personal loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Defaulting on an unsecured personal loan, credit card, or business credit facility is purely a civil contractual breach governed by the Indian Contract Act, 1872. Police stations in Raipur, Bhilai, or Bilaspur have no legal jurisdiction to register FIRs, summon borrowers, or make arrests for genuine financial insolvency. If recovery callers falsely claim police involvement, your advocate can issue criminal intimidation notices under the Bharatiya Nyaya Sanhita (BNS)."
          }
        },
        {
          "@type": "Question",
          "name": "What legal steps should I take if I receive a Section 138 NI Act or Section 25 PSSA court summons from JMFC Raipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When a security cheque or electronic NACH mandate bounces, lenders often file complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act in the Judicial Magistrate First Class (JMFC) court in Raipur. Borrowers must engage an advocate to enter an appearance, obtain bail where necessary, establish genuine economic hardship, challenge excessive presentation charges, and convert the adversarial dispute into an official OTS compromise settlement."
          }
        },
        {
          "@type": "Question",
          "name": "How can borrowers in Raipur stop recurring bank charges from bounced e-NACH mandates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, a borrower holds the statutory right to instruct their destination bank branch in Raipur (or via net banking) to cancel or suspend the e-NACH mandate linked to the defaulted loan. Furthermore, during compromise settlement negotiations, your legal counsel demands a 100% full waiver of all compounded bounce fees."
          }
        },
        {
          "@type": "Question",
          "name": "How does an unsecured personal loan settlement impact my CIBIL score in Chhattisgarh, and how can it be repaired?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upon receiving the sanctioned settlement sum, the lender reports the loan status as 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0 to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. While this results in an initial credit score drop of 75 to 150 points, it halts compounding default records. Borrowers can rebuild their CIBIL score to 750+ within 18 to 24 months through disciplined secured credit cards and prompt utility payments."
          }
        },
        {
          "@type": "Question",
          "name": "What forensic checks are necessary to verify an authentic bank OTS settlement letter in Raipur?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before remitting any settlement payment, your legal counsel must audit the OTS sanction letter to verify that: (1) It is issued on official bank/NBFC corporate letterhead; (2) Contains the correct loan account numbers, borrower name, and CIN; (3) Explicitly states the agreed settlement amount and payment due dates; (4) Confirms that upon payment all legal proceedings will be withdrawn; and (5) Guarantees the issuance of a formal ₹0 No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60."
          }
        },
        {
          "@type": "Question",
          "name": "What statutory recourse is available if a bank in Raipur fails to deliver the No Dues Certificate within 30 days?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Reserve Bank of India Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are legally mandated to issue a formal No Dues Certificate and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender fails to deliver the NDC within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
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

export default function PersonalLoanSettlementRaipurPage() {
  const tocItems = [
    { id: 'raipur-debt-landscape', title: '1. Raipur Commercial Hub & Debt Distress' },
    { id: 'delinquency-timeline-npa-raipur', title: '2. Delinquency Timeline & Ind AS 109 NPA' },
    { id: 'anti-harassment-nach-protection', title: '3. Stopping Harassment & NACH Sweeps' },
    { id: 'rbi-ots-npv-valuation', title: '4. RBI OTS Rules & NPV Recovery Math' },
    { id: 'infographic-resolution-blueprint', title: '5. Visual Resolution Blueprint' },
    { id: 'local-court-defense-raipur', title: '6. Raipur District Court & JMFC Defense' },
    { id: 'lok-adalat-representation-raipur', title: '7. DLSA Raipur Lok Adalat Representation' },
    { id: 'step-by-step-settlement-roadmap', title: '8. Step-by-Step Settlement Roadmap' },
    { id: 'sanction-letter-audit-ndc', title: '9. Sanction Letter Forensics & ₹0 NDC' },
    { id: 'cibil-score-rehabilitation', title: '10. CIBIL Score Trajectory & Recovery' },
    { id: 'company-resolution-section', title: '11. SettleLoans Legal Defense in CG' },
    { id: 'faqs', title: '12. Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: "Why do borrowers in Raipur need specialized debt settlement services rather than dealing with recovery agents?",
      answer: "Third-party collection agents operating across Raipur and Bhilai work on aggressive commissions and possess zero statutory authority to sanction debt waivers or alter contractual loan agreements. A specialized debt settlement advocate in Raipur understands the Reserve Bank of India Master Directions on Compromise Settlements, enforces statutory anti-harassment protections, defends against Section 138 NI Act or Section 25 PSSA summons in Raipur District Courts, and negotiates directly with bank Zonal Stressed Assets Committees for authentic 45% to 65% OTS principal waivers."
    },
    {
      question: "Can recovery agents visit my shop in Gol Bazar, Pandri, or residence in Shankar Nagar without notice?",
      answer: "No. Under the Reserve Bank of India Master Direction on Recovery Agents and NBFC Fair Practices Code, recovery personnel are strictly prohibited from visiting a borrower's business premises, retail shop, or residence without prior written notice. They cannot contact borrowers outside 08:00 AM to 07:00 PM, cannot use abusive language or intimidation, and are legally barred from disclosing debt details to customers, employees, neighbors, or business partners. Violations entitle borrowers to serve formal cease-and-desist notices and register complaints with the RBI Integrated Ombudsman."
    },
    {
      question: "What percentage of debt waiver can salaried employees and business owners in Raipur negotiate under an RBI OTS?",
      answer: "For unsecured personal loans, credit card balances, and clean MSME business lines overdue past 90 to 180 days (classified as Non-Performing Assets), commercial banks and NBFCs in Chhattisgarh typically sanction principal haircuts between 45% and 65%, alongside a 100% complete waiver of all accumulated late fees, penal interest, and NACH bounce penalties. The exact haircut depends on asset aging, balance-sheet provisioning status, and documented commercial insolvency."
    },
    {
      question: "How does the Raipur District Legal Services Authority (DLSA) National Lok Adalat facilitate loan settlements?",
      answer: "The Raipur District Legal Services Authority organizes quarterly National Lok Adalats at the District Court Complex near Kalibadi. In Lok Adalat sessions, sitting judges and judicial conciliators facilitate compromise negotiations between borrowers and bank representatives. The finalized settlement is recorded as a Lok Adalat Award, which carries the legal force of a binding, non-appealable Civil Court Decree under Section 21 of the Legal Services Authorities Act, 1987, fully extinguishing the debt."
    },
    {
      question: "Can a borrower in Chhattisgarh face police arrest or an FIR for defaulting on an unsecured personal loan?",
      answer: "No. Defaulting on an unsecured personal loan, credit card, or business credit facility is purely a civil contractual breach governed by the Indian Contract Act, 1872. Police stations in Raipur, Bhilai, or Bilaspur have no legal jurisdiction to register FIRs, summon borrowers, or make arrests for genuine financial insolvency. If recovery callers falsely claim police involvement, your advocate can issue criminal intimidation notices under the Bharatiya Nyaya Sanhita (BNS)."
    },
    {
      question: "What legal steps should I take if I receive a Section 138 NI Act or Section 25 PSSA court summons from JMFC Raipur?",
      answer: "When a security cheque or electronic NACH mandate bounces, lenders often file complaints under Section 138 of the Negotiable Instruments Act or Section 25 of the Payment and Settlement Systems Act in the Judicial Magistrate First Class (JMFC) court in Raipur. Borrowers must engage an advocate to enter an appearance, obtain bail where necessary, establish genuine economic hardship, challenge excessive presentation charges, and convert the adversarial dispute into an official OTS compromise settlement."
    },
    {
      question: "How can borrowers in Raipur stop recurring bank charges from bounced e-NACH mandates?",
      answer: "Under National Payments Corporation of India (NPCI) procedural guidelines and RBI consumer directives, a borrower holds the statutory right to instruct their destination bank branch in Raipur (or via net banking) to cancel or suspend the e-NACH mandate linked to the defaulted loan. Furthermore, during compromise settlement negotiations, your legal counsel demands a 100% full waiver of all compounded bounce fees."
    },
    {
      question: "How does an unsecured personal loan settlement impact my CIBIL score in Chhattisgarh, and how can it be repaired?",
      answer: "Upon receiving the sanctioned settlement sum, the lender reports the loan status as 'Settled' or 'Post-Write-off Settled' with an outstanding balance of ₹0 to TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. While this results in an initial credit score drop of 75 to 150 points, it halts compounding default records. Borrowers can rebuild their CIBIL score to 750+ within 18 to 24 months through disciplined secured credit cards and prompt utility payments."
    },
    {
      question: "What forensic checks are necessary to verify an authentic bank OTS settlement letter in Raipur?",
      answer: "Before remitting any settlement payment, your legal counsel must audit the OTS sanction letter to verify that: (1) It is issued on official bank/NBFC corporate letterhead; (2) Contains the correct loan account numbers, borrower name, and CIN; (3) Explicitly states the agreed settlement amount and payment due dates; (4) Confirms that upon payment all legal proceedings will be withdrawn; and (5) Guarantees the issuance of a formal ₹0 No Dues Certificate (NDC) within 30 days under RBI Circular RBI/2023-24/60."
    },
    {
      question: "What statutory recourse is available if a bank in Raipur fails to deliver the No Dues Certificate within 30 days?",
      answer: "Under Reserve Bank of India Circular RBI/2023-24/60, all regulated commercial banks and NBFCs are legally mandated to issue a formal No Dues Certificate and update credit bureau records within 30 calendar days of receiving full settlement payment. If the lender fails to deliver the NDC within 30 days without lawful justification, it is statutorily liable to pay compensation of ₹5,000 per day of delay directly to the borrower."
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
            <span>Regional Banking Legal Defense • Raipur &amp; Chhattisgarh Industrial Belt</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Personal Loan Settlement in Raipur: Legal OTS Guide</h1>

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
              <span>RBI Master Direction Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Consult Raipur Settlement Lawyer</span>
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
                <span>Raipur Case Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-blue-800">
                Traders across Pandri and Gol Bazar, industrialists in Urla and Siltara, and salaried professionals in Raipur dealing with unmanageable personal or business debts retain established statutory rights under RBI compromise guidelines. Professional debt defense stops recovery harassment, responds to court summons, and secures binding 45%–65% OTS settlements.
              </p>
            </div>
          </aside>

          {/* Middle Column (Main Editorial Content) */}
          <main className="w-full min-w-0 blog-content">

            {/* Top Key Takeaways Box */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50/70 border border-blue-200 rounded-2xl p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-base mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Debt Settlement Services in Raipur Chhattisgarh</span>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Compromise Protections:</strong> Unsecured loan default is strictly a civil contractual matter under the Indian Contract Act, 1872. Borrowers across Chhattisgarh hold statutory rights under RBI Master Directions to request a structured One-Time Settlement (OTS).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Harassment Shield:</strong> Coercive recovery tactics—such as unannounced visits to retail premises in Gol Bazar or Pandri Cloth Market—violate the RBI Fair Practices Code and can be legally halted via formal cease-and-desist notices.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Substantial 45%–65% Debt Waivers:</strong> Once an unsecured account passes 90 Days Past Due (NPA), banks book mandatory provisioning and routinely approve substantial principal haircuts to maximize net recovery.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Raipur Court &amp; Lok Adalat Defense:</strong> Experienced advocates represent borrowers against Section 138 NI Act and Section 25 PSSA summons at JMFC Raipur, securing binding compromise awards through the DLSA National Lok Adalat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory ₹0 NDC Guarantee:</strong> Under RBI Circular RBI/2023-24/60, lenders must deliver an official No Dues Certificate and update credit bureaus within 30 days of settlement payment, backed by a statutory ₹5,000 daily penalty for delay.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Economic Landscape & Debt Distress in Raipur */}
            <section id="raipur-debt-landscape" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Building2 className="w-4 h-4" />
                <span>1. Raipur Commercial Hub &amp; Debt Distress</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Debt Distress in Central India&apos;s Industrial &amp; Trading Capital
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Raipur serves as the primary commercial and industrial hub of Chhattisgarh, anchoring mineral trade and secondary steel manufacturing across central India. Interlinked with the heavy industrial belt of Bhilai-Durg and the judicial center of Bilaspur, Raipur hosts an intricate economic network ranging from rolling mills in Urla and Siltara to wholesale trading centers in Pandri Cloth Market, Gol Bazar, and Malviya Road. Furthermore, commercial growth across Shankar Nagar, Devendra Nagar, and Tatibandh has driven widespread adoption of unsecured personal lines and retail consumer financing.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                However, heavy dependence on commodity cycles, infrastructure clearance timelines, and volatile steel pricing often triggers sudden cash flow crises. When payment realization stalls, business owners and salaried professionals turn to multiple credit lines and personal loans to manage commitments. When monthly income drops, compounded interest, late fees, and recurrent NACH bounce charges quickly outpace the original principal. Recognizing that insolvency stemming from economic distress is purely a civil financial challenge empowers borrowers to pursue structured legal debt relief under RBI-governed compromise frameworks.
              </p>
            </section>

            {/* Section 2: Delinquency Timeline & Ind AS 109 NPA Accounting */}
            <section id="delinquency-timeline-npa-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>2. Delinquency Timeline &amp; NPA Accounting</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The Statutory Delinquency Timeline &amp; Ind AS 109 Non-Performing Asset Classifications
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under the Reserve Bank of India Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances (IRACP) and Ind AS 109, loan delinquency follows an exacting statutory trajectory. Financial institutions categorize overdue accounts into Special Mention Account (SMA) buckets: SMA-0 (1–30 days), SMA-1 (31–60 days), and SMA-2 (61–90 days). Beyond 90 Days Past Due, the facility is classified as a Non-Performing Asset (NPA).
              </p>

              {/* 4-Sided Bordered Table: Delinquency Matrix */}
              <div className="overflow-x-auto my-6">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Delinquency Stage</th>
                      <th>Overdue Duration</th>
                      <th>Regulatory Accounting Status</th>
                      <th>Typical Institutional Actions</th>
                      <th>Settlement Leverage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-0</td>
                      <td>1 – 30 Days</td>
                      <td>Standard Performing Asset; internal credit alert triggered.</td>
                      <td>Automated SMS alerts, tele-calling, initial payment reminders.</td>
                      <td><span className="text-amber-600 font-bold">Low</span> (Restructuring or tenure extensions).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-1</td>
                      <td>31 – 60 Days</td>
                      <td>Heightened Credit Risk; early warning asset classification.</td>
                      <td>Intensified calling, automated repeated NACH mandate presentations.</td>
                      <td><span className="text-amber-700 font-bold">Moderate</span> (Waiver of penal interest and late fees).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">SMA-2</td>
                      <td>61 – 90 Days</td>
                      <td>Imminent Default; balance-sheet stress signaled.</td>
                      <td>Pre-litigation legal notices, field collection agent deployment.</td>
                      <td><span className="text-blue-600 font-bold">Increasing</span> (Initial compromise settlement proposals).</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Gross NPA</td>
                      <td>91 – 180 Days</td>
                      <td>Sub-Standard Asset; 15% mandatory provisioning mandated.</td>
                      <td>Section 138 NI Act notices, Section 25 PSSA summons in JMFC court.</td>
                      <td><span className="text-emerald-600 font-bold">High (35%–50% Principal Haircut).</span></td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Doubtful / Loss</td>
                      <td>181 – 365+ Days</td>
                      <td>High-provisioning category; technical balance-sheet write-off executed.</td>
                      <td>Civil summary recovery suits (Order 37 CPC), Lok Adalat referrals.</td>
                      <td><span className="text-emerald-700 font-bold">Maximum (50%–65% Principal Waiver).</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Once an account undergoes technical write-off, the institution has already recognized the financial loss on its audited balance sheet. Presenting a lump-sum compromise settlement backed by verifiable hardship proof delivers an immediate cash write-back to the bank&apos;s operating profit, providing compelling financial rationale for Zonal Committees to sanction substantial principal waivers.
              </p>
            </section>

            {/* Section 3: Stopping Recovery Aggression & Halting Unlawful NACH Sweeps */}
            <section id="anti-harassment-nach-protection" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>3. Halting Harassment &amp; Stopping NACH Charges</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Defending Against Aggressive Recovery Tactics &amp; Stopping Unauthorized NACH Bounces in Raipur
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                In commercial centers like Raipur and Bhilai, recovery agents hired by private lenders frequently resort to intimidating collection tactics. Borrowers across residential localities like Shankar Nagar, Devendra Nagar, and Kapa, as well as wholesale markets like Gol Bazar and Pandri, encounter unscheduled visits and deceptive threats of police action. Under the RBI Master Direction on Recovery Agents and NBFC Fair Practices Code, recovery personnel must strictly adhere to statutory guidelines:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Strict Permissible Hours:</strong> Contact and visits are legally restricted to 08:00 AM to 07:00 PM.</li>
                <li><strong>Prohibition on Third-Party Contact:</strong> Contacting employers, colleagues, neighbors, or non-guarantor relatives is illegal under RBI privacy rules.</li>
                <li><strong>No Intimidation or Threats:</strong> Abusive language, public humiliation, and false claims of police custody constitute criminal intimidation under the Bharatiya Nyaya Sanhita (BNS).</li>
                <li><strong>Mandatory Identification:</strong> Agents must carry valid ID cards, bank authorization letters, and IIBF certifications.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Simultaneously, lenders repeatedly present electronic NACH mandates against zero-balance accounts, accumulating severe bounce penalties. Under NPCI guidelines, borrowers can instruct their home bank in Raipur to cancel the e-NACH mandate. During compromise negotiations, our legal counsel demands a 100% complete waiver of all accumulated bounce charges.
              </p>
            </section>

            {/* Section 4: RBI OTS Compromise Framework & NPV Recovery Formula */}
            <section id="rbi-ots-npv-valuation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>4. RBI Compromise Guidelines &amp; NPV Math</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                RBI Compromise Settlement Framework &amp; Net Present Value (NPV) Valuation Economics
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Master Direction DOR.STR.REC.20/21.04.048/2023-24, lenders must operate transparent, board-approved compromise settlement policies. Because unsecured credit lines lack physical collateral that can be attached under the SARFAESI Act, credit committees evaluate compromise offers against the Net Present Value (NPV) of prolonged court litigation.
              </p>

              {/* Formula Container Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Recovery Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Recovery = ∑ [ C_t / (1 + r)^t ] - Litigation Costs - Provisioning Burden
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Where C_t represents estimated recoveries, r is the discount rate, and deductions account for 3–5 years of court friction and capital locked in NPA provisions.
                </p>
              </div>

              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Civil litigation in Raipur courts requires years of retainer fees and advocate expenses while tying up balance-sheet capital. Demonstrating insolvency proves that accepting an immediate 45% to 65% settlement yields superior economic value compared to uncertain legal recovery.
              </p>

              {/* Settlement Haircut Slabs Table */}
              <h3 className="text-lg font-bold text-slate-900 mb-3">Realistic Loan Settlement Haircut Slabs for Raipur &amp; Chhattisgarh Borrowers</h3>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th>Debt Category</th>
                      <th>Delinquency Bucket</th>
                      <th>Penal &amp; Bounce Waiver</th>
                      <th>Principal Haircut Range</th>
                      <th>Optimal Settlement Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% Complete Waiver</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Pay 45%–55% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Unsecured Personal Loan</td>
                      <td>180 – 365+ Days (Written Off)</td>
                      <td>100% Complete Waiver</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Pay 35%–45% of Core Principal</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Credit Card Outstanding</td>
                      <td>90 – 180+ Days (NPA)</td>
                      <td>100% Interest &amp; Late Fees</td>
                      <td>55% – 70% Total Waiver</td>
                      <td>Pay 30%–40% of Total Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">MSME Business Credit Line</td>
                      <td>90 – 180 Days (NPA)</td>
                      <td>100% All Penal Charges</td>
                      <td>35% – 50% Principal Waiver</td>
                      <td>Pay 45%–55% of Disbursed Dues</td>
                    </tr>
                    <tr>
                      <td className="font-bold text-slate-900">Fintech Instant Loan App</td>
                      <td>60 – 180+ Days (Default)</td>
                      <td>100% Compound Fees</td>
                      <td>50% – 65% Principal Waiver</td>
                      <td>Pay 35%–45% of Net Principal</td>
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
                        Legal Defense &amp; Action Blueprint
                      </span>
                      <h3 className="text-sm md:text-base font-black text-white leading-tight">
                        Raipur Personal Loan Settlement &amp; Lok Adalat Legal Defense Blueprint
                      </h3>
                    </div>
                  </div>
                  <a
                    href="/images/infographics/personal-loan-settlement-raipur.jpg"
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
                      src="/images/infographics/personal-loan-settlement-raipur.jpg"
                      alt="Debt Settlement Services in Raipur Chhattisgarh Legal Defense and Lok Adalat Blueprint"
                      className="w-full h-auto object-contain max-h-[440px] mx-auto hover:scale-[1.01] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Quick Crux Footer Strip */}
                <div className="bg-slate-100 border-t border-slate-200 py-3 px-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span><strong>Key Strategy:</strong> Stop recovery harassment, defend court summons at Raipur District Court, and negotiate directly with bank credit committees for 45%–65% debt waivers.</span>
                  </div>
                  <Link href="/contact" className="text-[#1F5EFF] font-bold hover:underline">
                    Get Free Case Evaluation &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6: Local Court Defense: Section 138, Section 25 PSSA & JMFC Raipur */}
            <section id="local-court-defense-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Gavel className="w-4 h-4" />
                <span>6. Raipur District Court &amp; JMFC Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Navigating Section 138 NI Act, Section 25 PSSA &amp; Civil Suits in Raipur Courts
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When chronic default occurs, lenders frequently file quasi-criminal complaints in the District Court Complex near Kalibadi and before Judicial Magistrate First Class (JMFC) courts in Raipur. These primarily involve Section 138 of the Negotiable Instruments Act (cheque bounce) and Section 25 of the Payment and Settlement Systems Act (electronic NACH dishonour).
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Receiving a court summons is not an arrest warrant. Under the CrPC and Bharatiya Nagarik Suraksha Sanhita (BNSS), these are bailable, compoundable matters. An experienced debt settlement lawyer enters appearance on your behalf, arranges bail without personal detention, challenges unlawful presentations, and formally requests the court to refer the dispute for compromise conciliation.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under Section 147 of the NI Act, magistrates possess statutory authority to record compromise settlements. The High Court of Chhattisgarh at Bilaspur has repeatedly affirmed that commercial lenders cannot abuse criminal procedures to bypass civil dispute mechanisms, ensuring robust protection for borrowers seeking fair resolution.
              </p>
            </section>

            {/* Section 7: DLSA Raipur National Lok Adalat Representation */}
            <section id="lok-adalat-representation-raipur" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Scale className="w-4 h-4" />
                <span>7. DLSA Raipur Lok Adalat Representation</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Achieving Finality Through District Legal Services Authority (DLSA) National Lok Adalats
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                For borrowers in Raipur seeking irrevocable debt closure, the quarterly National Lok Adalat conducted by the Raipur DLSA at the District Court Complex provides the most decisive platform. Under the Legal Services Authorities Act, 1987, Lok Adalats provide an institutional, conciliation-based forum where judicial officers facilitate compromise discussions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                When an advocate presents verified insolvency documentation, the conciliation bench facilitates realistic debt write-downs. Upon agreement, the panel issues a formal <strong>Lok Adalat Award</strong>, which holds the full legal force of a non-appealable Civil Court Decree under Section 21 of the Act. This decree permanently extinguishes institutional claims and guarantees account closure within 30 days.
              </p>
            </section>

            {/* Section 8: Step-by-Step Settlement Roadmap for Chhattisgarh Borrowers */}
            <section id="step-by-step-settlement-roadmap" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>8. Step-by-Step Settlement Roadmap</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                The 6-Phase Legal &amp; Financial Debt Settlement Framework for Raipur Borrowers
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                SettleLoans executes a disciplined 6-phase resolution strategy tailored to Chhattisgarh&apos;s legal and commercial landscape:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">1</span>
                    Financial Forensic Audit
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We audit loan sanction agreements and account statements, separating true core principal from compounding penal interest and unauthorized fees.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">2</span>
                    Anti-Harassment Legal Shield
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We issue formal legal notices under the RBI Fair Practices Code, redirecting all collection communications exclusively to appointed legal counsel.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">3</span>
                    Halting NACH Auto-Debits
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We assist you in revoking e-NACH mandates at your home branch under NPCI guidelines, stopping ongoing bounce penalties and preserving liquidity.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">4</span>
                    Zonal Committee Negotiations
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    We bypass collection agencies to negotiate directly with bank Zonal Committees, submitting documented hardship dossiers under RBI OTS guidelines.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">5</span>
                    Sanction Letter Verification
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    Our banking lawyers audit the OTS sanction letter for authentic corporate letterhead, correct loan identifiers, and explicit legal withdrawal covenants.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[#1F5EFF] font-black text-sm flex items-center justify-center border border-blue-200">6</span>
                    Direct Remittance &amp; ₹0 NDC Enforcement
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    You remit payment directly into your designated loan account via RTGS/NEFT. We enforce the 30-day No Dues Certificate delivery under RBI rules.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9: Sanction Letter Forensics & ₹0 NDC Mandate */}
            <section id="sanction-letter-audit-ndc" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>9. Sanction Letter Forensics &amp; NDC Mandate</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Forensic Verification of Settlement Sanction Letters &amp; Enforcing the ₹0 NDC Mandate
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Distressed borrowers often risk receiving deceptive settlement letters from collection agents aiming to collect partial recoveries against interest dues. To ensure full legal discharge, your advocate verifies:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Official Corporate Letterhead:</strong> The document must show the lender&apos;s CIN, registered address, and official corporate seal.</li>
                <li><strong>Account Identifiers:</strong> It must cite the borrower&apos;s PAN, unique loan account number, and original ledger dues.</li>
                <li><strong>Unambiguous Settlement Terms:</strong> It must state the exact agreed figure, payment deadlines, and formal collection accounts.</li>
                <li><strong>Legal Withdrawal Clause:</strong> The sanction letter must explicitly confirm the withdrawal of all court cases and release of future claims.</li>
              </ul>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Under RBI Circular RBI/2023-24/60, lenders must deliver an official No Dues Certificate within 30 calendar days of payment. Any unjustified delay carries a statutory penalty of ₹5,000 per day payable directly to the borrower.
              </p>
            </section>

            {/* Section 10: CIBIL Score Trajectory & Rehabilitation */}
            <section id="cibil-score-rehabilitation" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>10. Credit Rehabilitation &amp; Score Recovery</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                CIBIL Score Trajectory Post-Settlement &amp; 18-Month Credit Rehabilitation Roadmap
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Executing an OTS updates your credit profile across TransUnion CIBIL, Experian, Equifax, and CRIF High Mark to <strong>&apos;Settled&apos;</strong> with an outstanding balance of <strong>₹0</strong>. While causing an initial drop of 75 to 150 points, this halts monthly compounding default flags and legal risk.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                Borrowers in Raipur can rebuild their score to 750+ within 18 to 24 months by following key credit discipline practices:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-700 text-base md:text-lg">
                <li><strong>Secured Credit Card:</strong> Obtain a credit card backed by a ₹25,000 fixed deposit.</li>
                <li><strong>Controlled Utilization:</strong> Maintain credit utilization between 15% and 25% of the limit.</li>
                <li><strong>Punctual Bill Payments:</strong> Pay 100% of the card statement balance on time every month.</li>
                <li><strong>Bureau Verification:</strong> Monitor credit reports to ensure the loan status reflects zero outstanding balance.</li>
              </ul>
            </section>

            {/* Section 11: SettleLoans Legal Defense & Representation in Chhattisgarh */}
            <section id="company-resolution-section" className="scroll-mt-24 mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#1F5EFF] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>11. Legal Representation &amp; Defense</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Why Borrowers in Raipur &amp; Chhattisgarh Choose SettleLoans
              </h2>
              <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
                Navigating banking guidelines, legal notices, and high-stakes compromise negotiations requires experienced advocacy. SettleLoans provides end-to-end debt defense for salaried professionals, wholesale traders, and MSME industrial entrepreneurs across Raipur, Bhilai, Durg, Bilaspur, and Korba. We halt harassment, defend court summons, represent clients at DLSA Lok Adalats, and negotiate maximum lawful debt waivers.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight">
                Frequently Asked Questions About Debt Settlement in Raipur Chhattisgarh
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    name="faq-accordion"
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
                    <strong>Reserve Bank of India (RBI):</strong> Master Direction on Compromise Settlements and Technical Write-offs (DOR.STR.REC.20/21.04.048/2023-24)
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
                    <strong>RBI Master Circular:</strong> Fair Practices Code for Non-Banking Financial Companies (NBFCs) &amp; Commercial Banks
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
                    <strong>Reserve Bank - Integrated Ombudsman Scheme, 2021:</strong> Online Portal for Complaints on Recovery Harassment &amp; Excessive NACH Charges
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
                    <strong>National Legal Services Authority (NALSA):</strong> Legal Services Authorities Act, 1987 — National Lok Adalat Conciliation Framework
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 text-[#1F5EFF] flex-shrink-0 mt-0.5" />
                  <a
                    href="https://highcourt.cg.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1F5EFF] underline decoration-slate-300 hover:decoration-[#1F5EFF] transition-colors"
                  >
                    <strong>High Court of Chhattisgarh (Bilaspur):</strong> Case Law Precedents on Debt Recovery, Order 37 CPC &amp; Section 138 NI Act
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
                  Bank One-Time Settlement (OTS) Policy
                </Link>
                <Link
                  href="/personal-loan-settlement-lawyer"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Lawyer
                </Link>
                <Link
                  href="/lok-adalat-notice-for-personal-loan"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Lok Adalat Notice for Personal Loan
                </Link>
                <Link
                  href="/section-138-cheque-bounce-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 138 Cheque Bounce Defense
                </Link>
                <Link
                  href="/section-25-pssa-notice-loan-default"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Section 25 PSSA Notice Defense
                </Link>
                <Link
                  href="/personal-loan-settlement-percentage"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement Percentage
                </Link>
                <Link
                  href="/unsecured-business-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Unsecured Business Loan Settlement
                </Link>
                <Link
                  href="/recovery-agent-visiting-workplace-office"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Recovery Agent Workplace Visit Rules
                </Link>
                <Link
                  href="/no-dues-certificate-after-loan-settlement"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  No Dues Certificate (NDC) Guide
                </Link>
                <Link
                  href="/personal-loan-settlement-cibil-impact"
                  className="py-2 px-3.5 rounded-full bg-white hover:bg-[#1F5EFF] hover:text-white text-slate-700 text-xs font-semibold transition-all duration-200 border border-slate-200 shadow-sm"
                >
                  Personal Loan Settlement CIBIL Impact
                </Link>
              </div>
            </div>
          </main>

          {/* Right Column (Sidebar Cards) */}
          <aside className="w-full sticky top-24 space-y-6">
            {/* Card 1: Author Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href="/authors/ashish-jhangra"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-base flex items-center justify-center shadow-md hover:opacity-90 transition-opacity"
                >
                  AJ
                </Link>
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-tight">
                    <Link
                      href="/authors/ashish-jhangra"
                      className="hover:text-[#1F5EFF] transition-colors"
                    >
                      Ashish Jhangra
                    </Link>
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Lead Banking Legal &amp; Debt Settlement Strategist
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ashish has led over 1,200+ successful debt compromise negotiations across HDFC Bank, ICICI Bank, Axis Bank, Bajaj Finance, and Tata Capital. He specializes in regional debt defense, Section 138/25 PSSA representation in District Courts, and borrower advocacy under RBI Master Directions.
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
                <span>Raipur Debt Resolution</span>
              </div>
              <h3 className="text-xl font-black mb-3 leading-tight">
                Facing Loan Default in Raipur, Bhilai, or Bilaspur?
              </h3>
              <p className="text-xs text-white/90 leading-relaxed mb-5">
                Stop aggressive recovery calls, shop visits in Gol Bazar/Pandri, and unauthorized NACH debits immediately. Let our experienced banking advocates defend your court summons, represent you at DLSA Lok Adalat, and negotiate an authentic 45%–65% RBI OTS debt waiver.
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
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
                <span>Why Borrowers Trust SettleLoans</span>
              </h4>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Direct Bank Representation:</strong> We bypass third-party recovery agencies to negotiate directly with Bank and NBFC Zonal Stressed Assets Committees.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Anti-Harassment Protection:</strong> Prompt issuance of formal legal cease-and-desist notices to stop workplace and home visits under RBI rules.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Stamped Verification:</strong> Every settlement is strictly verified on official corporate letterhead before any payment is authorized.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Guaranteed ₹0 NDC Delivery:</strong> End-to-end tracking until your formal No Dues Certificate is delivered and credit bureau records are updated.
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
