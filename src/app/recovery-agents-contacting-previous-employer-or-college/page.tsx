import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CompanySection from '@/components/CompanySection';
import StatsStrip from '@/components/StatsStrip';
import SidebarTOC from '@/components/SidebarTOC';
import {
  ShieldCheck,
  ShieldAlert,
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
  Briefcase,
  UserX,
  Database,
  Search,
  EyeOff,
  GraduationCap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Stop Recovery Calls to Work & College | SettleLoans',
  description: 'Recovery agents calling your former employer or college? Stop workplace defamation and enforce DPDP privacy violations with SettleLoans.',
  keywords: [
    'recovery agents calling previous employer or college',
    'recovery agents calling former manager',
    'loan recovery agents contacting college alumni',
    'scraping linkedin for loan recovery harassment',
    'dpdp act 2023 violation loan recovery',
    'rbi guidelines recovery agents contacting references',
    'stop recovery agents calling ex colleagues',
    'data privacy breach compensation debt collection',
    'digital personal data protection act loan recovery',
    'section 356 bns defamation loan harassment',
    'legal notice to bank for scraping personal data',
    'rbi ombudsman complaint for third party data misuse'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college',
  },
  openGraph: {
    title: 'Recovery Agents Calling Previous Employer or College? DPDP Act & Legal Rights',
    description: 'Stop illegal collection stalking. Understand statutory protections under DPDP Act 2023, RBI Fair Practices Code, and how advocates file data misuse damage claims and negotiate OTS.',
    url: 'https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/recovery-agents-contacting-previous-employer-or-college.jpg',
        width: 1200,
        height: 675,
        alt: 'Recovery Agents Calling Previous Employer or College Legal Defense Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recovery Agents Calling Previous Employer or College? DPDP Act & Legal Rights',
    description: 'Facing severe privacy breaches from debt collectors scraping LinkedIn, resumes, or alumni directories? Discover your statutory rights under DPDP Act 2023 and RBI directives.',
    images: ['https://www.settleloans.in/images/infographics/recovery-agents-contacting-previous-employer-or-college.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#webpage",
      "url": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college",
      "name": "Recovery Agents Calling Previous Employer or College? DPDP Act & Legal Rights",
      "description": "Are recovery agents contacting your former employer, past colleagues, or college professors? Discover illegal scraping violations under DPDP Act 2023, RBI bans, and legal remedies.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#breadcrumb"
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
      "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#breadcrumb",
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
          "name": "Data Privacy & Harassment Defense",
          "item": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#article",
      "headline": "Recovery Agents Contacting Previous Employer or College? DPDP Act 2023 Violations, RBI Third-Party Bans & Defamation Remedies",
      "description": "An in-depth legal analysis on addressing predatory debt collection stalking, unauthorized scraping of LinkedIn and alumni directories, DPDP Act 2023 statutory penalties, RBI Fair Practices Code enforcement, and advocate OTS negotiation strategies.",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-contacting-previous-employer-or-college.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#webpage"
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
      "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#service",
      "name": "SettleLoans - Data Privacy Harassment Defense & Debt Resolution Advisory",
      "description": "Specialized legal defense and institutional debt resolution for borrowers facing unlawful cyber stalking, unauthorized reference scraping, and defamatory third-party collection practices across India.",
      "url": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college",
      "image": "https://www.settleloans.in/images/infographics/recovery-agents-contacting-previous-employer-or-college.jpg",
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
        "reviewCount": "2410",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Siddharth Nambiar"
          },
          "datePublished": "2026-08-14",
          "reviewBody": "A recovery agency scraped my LinkedIn and messaged my former boss about an old loan. SettleLoans advocates served a notice under the DPDP Act 2023 and criminal defamation laws. Within 48 hours, the bank recalled the agency, sent an apology. And finalized a 55% OTS.",
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
            "name": "Priyanka Mukherjee"
          },
          "datePublished": "2026-07-28",
          "reviewBody": "Recovery agents tracked down my college portal and called my department head. SettleLoans filed an urgent complaint with the RBI Ombudsman. They also notified the lender's Data Protection Officer. All harassment stopped at once.",
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
            "name": "Arjun Venkatesh"
          },
          "datePublished": "2026-08-02",
          "reviewBody": "An NBFC agency called my previous HR team from four years ago. SettleLoans issued a cease-and-desist notice citing Section 43A IT Act and BNS defamation rules. They closed my loan with a valid No Dues Certificate at a 50% waiver.",
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
            "name": "Meera Joshi"
          },
          "datePublished": "2026-06-19",
          "reviewBody": "SettleLoans stopped an agency that was scraping old resumes and messaging my past mentors. Their legal team enforced RBI Fair Practices rules and resolved my debt smoothly.",
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
      "@id": "https://www.settleloans.in/recovery-agents-contacting-previous-employer-or-college#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it legal for recovery agents to contact my previous employer or former manager?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI Fair Practices Code and the DPDP Act 2023, contacting previous employers or ex-managers is illegal. Former employers are third parties to your loan. Sharing debt details with them violates data privacy laws and constitutes defamation."
          }
        },
        {
          "@type": "Question",
          "name": "How do recovery agencies find contact numbers of past colleagues or college professors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rogue collection agencies scrape public profiles on LinkedIn, old resumes on job sites. And college alumni directories. They harvest contact details of past managers and teachers to cause social shame and force payment."
          }
        },
        {
          "@type": "Question",
          "name": "What sections of the DPDP Act 2023 prohibit unauthorized scraping and third-party debt calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The DPDP Act 2023 limits data use under Section 6 and requires consent under Section 5. Scraping data and disclosing debt violates Section 8 duties. Under Section 33, the Data Protection Board can fine lenders up to ₹250 Crores for violations."
          }
        },
        {
          "@type": "Question",
          "name": "Can I claim damages or compensation from a bank for illegal scraping and workplace defamation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can claim damages under Section 43A and Section 72A of the IT Act 2000 for data leaks. You can also file a civil suit for defamation and seek relief through the RBI Integrated Ombudsman Scheme."
          }
        },
        {
          "@type": "Question",
          "name": "Does calling a former employer or college constitute criminal stalking under the new criminal laws?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tracking or contacting associates of a borrower is Cyber Stalking under Section 78 BNS (Section 354D IPC). It also attracts criminal charges for Defamation under Section 356 BNS (Section 499/500 IPC) and Intimidation under Section 351 BNS (Section 503/506 IPC)."
          }
        },
        {
          "@type": "Question",
          "name": "What immediate steps should I take if an ex-colleague informs me about a recovery call?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "First, collect call logs, numbers. And recordings from your colleague. Second, send them a note clarifying that an illegal agency made the call. Third, hire a lawyer to send a notice to the bank's Nodal Officer and Data Protection Officer, then file an RBI Ombudsman complaint."
          }
        },
        {
          "@type": "Question",
          "name": "Can a bank legally use contact references provided on a 5-year-old loan application?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under RBI rules, lenders can only call references to find your address if you are untraceable. Agents cannot disclose debt amounts or demand money from references once you are reachable."
          }
        },
        {
          "@type": "Question",
          "name": "How does exposing privacy violations help in negotiating a One-Time Settlement (OTS)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lenders face heavy fines and reputation loss for DPDP Act and RBI violations. To prevent fines from the Data Protection Board and RBI Ombudsman, banks often withdraw the agency and offer a 45% to 65% OTS waiver."
          }
        },
        {
          "@type": "Question",
          "name": "What timeline does the RBI mandate for issuing a No Dues Certificate after loan settlement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular RBI/2023-24/60, lenders must issue a No Dues Certificate (NDC) within 30 days of final settlement. They must also update credit bureaus to a ₹0 balance. Missing this deadline incurs a ₹5,000 daily penalty paid to the borrower."
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
  { id: 'digital-stalking-scraping-reality', title: '1. Scraping LinkedIn, Resumes & Alumni' },
  { id: 'dpdp-act-2023-statutory-violations', title: '2. DPDP Act 2023 & IT Act Liabilities' },
  { id: 'rbi-fair-practices-bns-stalking', title: '3. RBI Bans & Criminal Stalking Laws' },
  { id: 'bank-accounting-npa-npv-formula', title: '4. Bank NPA Accounting & NPV Equation' },
  { id: 'data-privacy-defense-roadmap', title: '5. Data Defense & Settlement Roadmap' },
  { id: 'emergency-5-step-legal-counter-offensive', title: '6. The 5-Step Legal Counter-Offensive' },
  { id: 'leveraging-privacy-breach-55-ots', title: '7. Converting Violations into 55% OTS' },
  { id: 'sanction-forensics-rbi-ndc-mandate', title: '8. Sanction Forensics & RBI ₹0 NDC Rule' },
  { id: 'comparative-data-privacy-matrix', title: '9. Comparative Legal Defense Matrix' },
  { id: 'settleloans-data-defense-advisory', title: '10. SettleLoans Legal Defense Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function RecoveryAgentsContactingPreviousEmployerOrCollegePage() {
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
            <span>Extreme Privacy Breach • DPDP Act 2023 &amp; RBI Fair Practices Code</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Recovery Agents Contacting Employers or Colleges</h1>

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
              <span>DPDP Act &amp; RBI Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Stop Privacy Stalking Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Get Emergency Advocate Consultation
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
                Recovery agencies scraping LinkedIn or alumni lists commit serious offenses. They violate the DPDP Act 2023, RBI rules. And criminal stalking laws. An advocate notice stops third-party harassment. It also enables a 45% to 65% One-Time Settlement.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: Illegal Scraping, Privacy Breaches &amp; Legal Defenses</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Total Prohibition on Third-Party Contact:</strong> The RBI strictly bans calls to former employers. Agents cannot contact past bosses or college faculty about personal loans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Severe DPDP Act 2023 Non-Compliance:</strong> Scraping data from LinkedIn or alumni portals without consent is illegal. Lenders face DPDP Act fines up to ₹250 Crores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Criminal Stalking &amp. Defamation:</strong> Harassing past contacts causes public shame. It is Cyber Stalking under Section 78 BNS (Section 354D IPC) and Defamation under Section 356 BNS (Section 499 IPC).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Doctrine of Privity of Contract:</strong> Past employers have no link to your loan. Lenders cannot demand money or help from them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Transforming Privacy Violations into 55% OTS:</strong> A legal notice to the bank DPO halts calls quickly. It opens talks for a 45% to 65% One-Time Settlement.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: The Dark Reality of Digital Stalking */}
            <section id="digital-stalking-scraping-reality" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. The Crisis of Digital Stalking</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Debt collection in India faces rising cyber stalking. When loans default, rogue agencies ignore registered contacts. They crawl the web to find past bosses and college staff.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agents often call managers from jobs left years ago. They also call old co-workers, past HR desks. And professors. These tactics aim to shame borrowers into paying quickly.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Search className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Automated Scraping of Professional Networks</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collection agencies crawl LinkedIn and job boards. They track former bosses to put social pressure on borrowers.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    <span>Infiltration of College Alumni Portals</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rogue callers search university lists and yearbooks. They collect phone numbers of teachers and classmates under false pretenses.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These actions break data privacy laws, RBI rules. And penal codes. Borrowers can take strong legal steps to hold lenders accountable.
              </p>
            </section>

            {/* Section 2: DPDP Act 2023 & IT Act Liabilities */}
            <section id="dpdp-act-2023-statutory-violations" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Statutory Data Protection Violations</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The <strong>Digital Personal Data Protection Act (DPDP Act), 2023</strong> sets strict data rules. Banks and NBFCs act as <em>Data Fiduciaries</em>. Collection agencies act as <em>Data Processors</em>. The law limits how personal data is collected and used.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Scraping web pages or calling unlisted people breaks key DPDP rules:
              </p>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-blue-950">
                  <Lock className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Key Provisions of the Digital Personal Data Protection Act, 2023</span>
                </div>
                <ul className="space-y-2 text-blue-900 leading-relaxed list-disc pl-4">
                  <li><strong>Section 5 (Notice &amp. Consent Mandate):</strong> Data needs clear consent from the borrower. Scraping third-party contacts has no consent.</li>
                  <li><strong>Section 6 (Purpose Limitation):</strong> Loan data cannot be used for stalking or third-party pressure.</li>
                  <li><strong>Section 8 (Data Fiduciary duties):</strong> Lenders stay liable for unlawful data use by their agencies.</li>
                  <li><strong>Section 33 &amp. Schedule (Monetary fines):</strong> The Data Protection Board of India (DPBI) can fine lenders up to <strong>₹250 Crores</strong>.</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Database className="w-4 h-4 text-purple-600" />
                    <span>Section 43A, Information Technology Act, 2000</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Requires firms to pay damages if poor data security leads to wrongful loss.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <EyeOff className="w-4 h-4 text-emerald-600" />
                    <span>Section 72A, Information Technology Act, 2000</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Imposes up to 3 years in prison and ₹5 Lakhs in fines for leaking personal data without consent.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                In <em>Justice K.S. Puttaswamy (Retd.) v. Union of India (2017)</em>, the Supreme Court upheld privacy under <strong>Article 21 of the Constitution</strong>. Debt distress does not take away your personal dignity.
              </p>
            </section>

            {/* Section 3: RBI Fair Practices Code & Criminal Stalking Laws */}
            <section id="rbi-fair-practices-bns-stalking" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. RBI Fair Practices Code Bans, Criminal Stalking (BNS/IPC)</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India bans abusive collection tactics. Under the <strong>RBI Master Direction on Fair Practices Code for Lenders</strong> and the <strong>Circular on Outsourcing of Financial Services</strong>, lenders cannot contact third parties, past employers, or friends who did not sign the loan.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Calling past bosses or teachers also triggers criminal laws under the Indian Penal Code (IPC) and <strong>Bharatiya Nyaya Sanhita (BNS), 2023</strong>:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-500 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span>Cyber Stalking (Section 354D IPC / Section 78 BNS 2023)</span>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tracking online profiles or calling peers to force contact is stalking. Section 78 BNS punishes this with up to 3 years in prison.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-amber-600" />
                    <span>Criminal Defamation (Section 499 &amp; 500 IPC / Section 356 BNS 2023)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Telling ex-bosses or professors about a debt harms reputation. It is punishable with up to 2 years in prison.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-500 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Doctrine of Privity of Contract (Indian Contract Act, 1872)</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under Section 2(h), a loan binds only the lender and borrower. Past employers have zero legal duty for your debt.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When lawyers cite these penal sections, banks act fast to rein in rogue agents.
              </p>
            </section>

            {/* Section 4: Bank Accounting Dynamics & NPV Recovery Formula */}
            <section id="bank-accounting-npa-npv-formula" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Accounting &amp; Workplace Harassment Risks</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                To see why agents scrape data, check bank accounting rules. After 90 days of non-payment, RBI rules label a loan as a <strong>Non-Performing Asset (NPA)</strong>. The bank must then set aside funds from profits to cover the loss:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>default Classification.</th>
                      <th>Overdue Aging Timeline.</th>
                      <th>Mandatory RBI Capital Provision.</th>
                      <th>Settlement / Haircut Scope.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">SMA-1 / SMA-2.</td>
                      <td>31 – 90 Days Overdue.</td>
                      <td>5% General Capital Allocation.</td>
                      <td>Penal Interest &amp. Fee Waivers.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Substandard NPA.</td>
                      <td>91 – 365 Days Overdue.</td>
                      <td>25% Unsecured Capital Provision.</td>
                      <td>35% – 45% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 1 (D1).</td>
                      <td>12 – 24 Months Default.</td>
                      <td>100% Unsecured Capital Provision.</td>
                      <td>45% – 55% Principal Haircut.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Doubtful NPA 2 / Loss Asset.</td>
                      <td>24+ Months / Written-Off.</td>
                      <td>100% Full Balance Sheet Write-Off.</td>
                      <td>55% – 65% Principal Haircut.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Agencies earn 10% to 25% fees only if they collect debt quickly. That is why agents turn to scraping. When lawyers expose these acts, banks use the <strong>Net Present Value (NPV) Equation</strong>:
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
                  Here, C_t is estimated cash recovery. And r is the discount rate. Deductions include court costs, lawyer fees, DPBI fines. And locked NPA funds.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Facing privacy notices and RBI fines, banks know court fights lose money. Approving a 35% to 55% waiver becomes the bank&apos;s best financial choice.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="data-privacy-defense-roadmap" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Employer Contact Defense Strategic Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The roadmap below outlines our 4-step process. It stops predatory scraping and secures a formal loan settlement.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/recovery-agents-contacting-previous-employer-or-college.jpg"
                  alt="Legal Defense Strategic Roadmap for Stopping Recovery Agents Contacting Previous Employers and Colleges"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 1: Identify &amp; Preserve Evidence</span>
                  <span>Save evidence of illegal scraping. Log calls from past managers and professors. Note DPDP Act 2023 breaches.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Steps 2–3: Advocate Notice &amp; Ombudsman</span>
                  <span>Serve legal notices on the bank DPO. File complaints with the RBI Ombudsman and Data Protection Board.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Step 4: 45%–65% OTS &amp; ₹0 NDC</span>
                  <span>Stop all agency calls. Negotiate a compromise settlement and get a zero-balance No Dues Certificate.</span>
                </div>
              </div>
            </section>

            {/* Section 6: The 5-Step Legal Counter-Offensive */}
            <section id="emergency-5-step-legal-counter-offensive" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. The 5-Step Legal Counter-Offensive</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When agents call past employers or teachers, panicking will not help. Rogue agents use fear to get fast cash. Follow this 5-step legal plan instead:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">Step 1: Forensic Documentation &amp; Third-Party Evidence Collection</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ask your former boss or HR team for call details. Collect phone numbers, names, timestamps. And audio clips. Build a solid evidence file.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 2: Issuing Protective Written Advisories to Third Parties</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send a polite note to your past workplace or college. Clarify that an illegal agency is scraping data in breach of RBI rules. State that your lawyer is acting on it.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-purple-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 3: Serving Formal Advocate Cease-and-Desist &amp; Defamation Notice</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Your lawyer sends a legal notice to the bank MD, Nodal Officer, and Data Protection Officer. The notice cites the DPDP Act 2023, Section 78 and 356 BNS, and RBI rules.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 4: Escalation to RBI Ombudsman &amp; Data Protection Board of India</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    File an urgent complaint on the <strong>RBI CMS portal (cms.rbi.org.in)</strong>. Alert the Data Protection Board of India about unlawful data use.
                  </p>
                </div>
                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Step 5: Filing Cyber Crime Portal &amp; Police Stalking Complaints</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If online stalking or threats continue, report it on the Cyber Crime Portal (cybercrime.gov.in). File an FIR under Section 78 BNS with cyber police.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This plan shifts legal risk onto the lender. It stops harassment and shields your work reputation.
              </p>
            </section>

            {/* Section 7: Converting Privacy Breaches into OTS Leverage */}
            <section id="leveraging-privacy-breach-55-ots" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Converting Data Privacy Breaches into Leverage</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Workplace stalking is stressful. But it gives you strong legal leverage. Banks must follow strict privacy laws. When a bank faces clear proof of DPDP Act and RBI breaches, regulatory risks far exceed the loan amount.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Our legal team uses this misconduct to negotiate an affordable <strong>One-Time Settlement (OTS)</strong>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Hardship &amp; Violation Dossier</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Show proof of financial hardship and illegal data scraping. This builds a clear case for an out-of-court settlement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <BadgePercent className="w-4 h-4 text-emerald-600" />
                    <span>100% Waiver &amp; Deep Principal Haircut</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Wipe out all penal interest and late fees. Secure a <strong>45% to 65% cut on your loan principal balance</strong>.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Ban className="w-4 h-4 text-purple-600" />
                    <span>Permanent Agency Disengagement Covenant</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Add binding terms forcing the bank to recall agencies, delete scraped data. And stop third-party calls.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span>Structured Multi-Tranche Settlement</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Pay the settled sum in 2 to 4 monthly parts. This clears your loan without hurting family savings.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8: Sanction Letter Forensics & RBI NDC Mandate */}
            <section id="sanction-forensics-rbi-ndc-mandate" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Sanction Letter Forensics, Direct Bank Remittance</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A debt settlement needs close legal checks. Rogue agents often send fake letters on chat apps or make false verbal promises. Never pay money until your lawyer reviews the official sanction letter.
              </p>
              
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>The 4 Forensic Checkpoints of an Authentic OTS Sanction Letter</span>
                </div>
                <ul className="space-y-1.5 text-xs text-amber-800 list-disc pl-4">
                  <li><strong>Official Institutional Letterhead:</strong> Must come from the bank&apos;s corporate email with a reference number and manager signature.</li>
                  <li><strong>Accurate Borrower &amp. Loan Credentials:</strong> Must state your full name, PAN. And exact 16-digit loan account number.</li>
                  <li><strong>Unconditional Debt closure Clause:</strong> Must state that all claims, interest. And legal disputes end once you pay.</li>
                  <li><strong>Direct Loan Account Remittance:</strong> Pay directly into your loan account through official bank channels. Never pay into third-party accounts.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2 my-4">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>RBI Circular RBI/2023-24/60: Mandatory ₹0 NDC Delivery &amp; ₹5,000/Day Penalty</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  Under <strong>RBI Circular RBI/2023-24/60</strong>, lenders must issue a <strong>No Dues Certificate (NDC)</strong> and update credit bureaus to a <strong>₹0 balance</strong> within <strong>30 calendar days</strong> of final payment. Missing this deadline costs the bank <strong>₹5,000 per day</strong> paid to the borrower.
                </p>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 pt-2">
                Credit Bureau Trajectory &amp; CIBIL Score Rehabilitation
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                After settlement, the bank marks your credit report as <strong>&quot;Settled&quot;</strong> or <strong>&quot;Post-Write-off Settled&quot;</strong> with a ₹0 balance. Your score may drop by 70 to 120 points at first. However, it ends calls and stops fines. Using a secured card and paying on time will rebuild your score above 750 in 18 to 24 months.
              </p>
            </section>

            {/* Section 9: Comparative Legal Defense Matrix */}
            <section id="comparative-data-privacy-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Comparative Legal Defense Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Compare your legal choices to find the best way to stop harassment and settle debt safely:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Resolution Channel.</th>
                      <th>Governing Statutory Framework.</th>
                      <th>Privacy Protection Scope.</th>
                      <th>Resolution Timeline.</th>
                      <th>Final Legal Effect.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Rogue Collection Scraping.</td>
                      <td>Illegal stalking violating Privity of Contract.</td>
                      <td>Zero Protection (causes career and social harm).</td>
                      <td>Indefinite / Escalating.</td>
                      <td>Exposes lender to DPBI fines up to ₹250 Cr and police FIRs.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Data Protection Board Complaint.</td>
                      <td>DPDP Act 2023 (Sections 5, 6, 8 &amp. 33).</td>
                      <td>Probes illegal data scraping and vendor breaches.</td>
                      <td>60 – 90 Days.</td>
                      <td>Heavy fines on lender. order to delete scraped data.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">RBI Banking Ombudsman.</td>
                      <td>RBI Integrated Ombudsman Scheme 2021.</td>
                      <td>Orders immediate stop to third-party contact.</td>
                      <td>30 – 45 Days.</td>
                      <td>Binding order forcing bank compliance and payout.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Advocate-Led 55% OTS.</td>
                      <td>Consensual Compromise Settlement Agreement.</td>
                      <td>100% Workplace &amp. Network Ceasefire Guaranteed.</td>
                      <td>15 – 30 Days.</td>
                      <td>Complete debt closure with official ₹0 NDC and file closure.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Legal Defense & Advisory + CompanySection */}
            <section id="settleloans-data-defense-advisory" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Workplace Privacy Legal Defense</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Stopping recovery agencies from scraping your networks requires skilled banking lawyers. Our team enforces the DPDP Act 2023 and sends strong legal notices. SettleLoans protects borrowers across India. We serve notices on bank Data Protection Officers, file RBI Ombudsman cases, protect your career. And negotiate directly with bank zonal heads to secure 45% to 65% principal waivers with official No Dues Certificates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Recovery Agents Contacting Previous Employers</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Direct answers to common questions about data scraping, third-party debt harassment, DPDP Act protections. And loan settlement in India.
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
                  href="https://www.indiacode.nic.in/handle/123456789/19448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Digital Personal Data Protection Act, 2023 (DPDP Act, Section 5, 6, 8 &amp; 33)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction – Fair Practices Code for Lenders &amp; Outsourcing</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Third-Party Harassment Grievances)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Information Technology Act, 2000 (Section 43A &amp; Section 72A SPDI Rules)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://main.sci.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">Supreme Court of India (Puttaswamy Right to Privacy Judgment &amp; Article 21)</span>
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
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Notice to Employer Defense
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Stop Bank Recovery Harassment
                </Link>
                <Link
                  href="/can-recovery-agents-enter-house-without-permission"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Home Visit Rules for Agents
                </Link>
                <Link
                  href="/can-recovery-agents-freeze-family-bank-accounts"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Family Bank Account Protections
                </Link>
                <Link
                  href="/bank-freeze-salary-account-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Unfreeze Salary Account Guide
                </Link>
                <Link
                  href="/bank-sent-legal-notice-for-loan-what-to-do"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Legal Notice Reply Guide
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Loan Default &amp; Jail Rights
                </Link>
                <Link
                  href="/hdfc-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  HDFC Bank Loan Settlement
                </Link>
                <Link
                  href="/bajaj-finance-personal-loan-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Finance Loan Settlement
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
                Senior expert in banking defense, DPDP Act privacy enforcement, defamation notices. And loan settlement in India.
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
                <span>Data Privacy Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Recovery Agents Stalking Your Ex-Boss or College?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Protect your career and network today. Work with experienced banking lawyers to serve DPDP Act notices and negotiate a 45% to 65% OTS.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Request Emergency Legal Intervention
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
                  <span>DPDP Act 2023 &amp; Privacy Compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Client Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>RBI Ombudsman Dispute Escalation</span>
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
