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
  Ban,
  Receipt,
  CreditCard,
  AlertOctagon,
  Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Should You Pay Cash to Recovery Agents? | SettleLoans',
  description: 'Should you pay cash to loan recovery agents? Understand RBI cash collection bans, fraud risks, and safe settlement protocols with SettleLoans.',
  keywords: [
    'can you pay cash to loan recovery agents',
    'paying cash to bank recovery agents',
    'can recovery agent collect cash',
    'rbi guidelines on cash payment to recovery agent',
    'recovery agent asking for cash settlement',
    'fake receipt by recovery agent',
    'how to pay loan settlement safely',
    'bank recovery agent cash receipt validity',
    'direct loan payment vs recovery agent cash',
    'safe payment methods for loan settlement'
  ],
  alternates: {
    canonical: 'https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent',
  },
  openGraph: {
    title: 'Can You Pay Cash to Loan Recovery Agents? RBI Rules, Fraud Risks & Safe Settlement Protocols',
    description: 'Never hand cash to a third-party recovery agent. Learn RBI regulations on debt collection, how fake manual receipts misappropriate your money, and how to execute safe bank settlements.',
    url: 'https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/should-i-pay-cash-to-bank-recovery-agent.jpg',
        width: 1200,
        height: 675,
        alt: 'Can You Pay Cash to Bank Loan Recovery Agents Infographic Guide',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Can You Pay Cash to Loan Recovery Agents? RBI Rules & Safe Payment Protocols',
    description: 'Explore why paying cash to field debt collectors leads to financial fraud. Understand RBI guidelines, digital verification steps, and safe loan settlement protocols.',
    images: ['https://www.settleloans.in/images/infographics/should-i-pay-cash-to-bank-recovery-agent.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#webpage",
      "url": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent",
      "name": "Can You Pay Cash to Loan Recovery Agents? RBI Rules & Fraud Risks (2026)",
      "description": "Comprehensive legal and financial advisory guide explaining why borrowers must never pay cash to bank recovery agents, citing RBI Master Directions, criminal breach of trust risks, and verified settlement procedures.",
      "breadcrumb": {
        "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#breadcrumb"
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
      "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#breadcrumb",
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
          "name": "Should I Pay Cash to Bank Recovery Agent",
          "item": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent"
        }
      ]
    },
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#article",
      "headline": "Can You Pay Cash to Loan Recovery Agents? RBI Rules, Fraud Risks & Safe Settlement Protocols",
      "description": "An exhaustive analysis of the legal, procedural, and financial perils of paying cash to field debt collectors in India. Covers RBI Master Directions on recovery conduct, fake manual receipt scams, ledger reconciliation failures, and safe digital payment protocols.",
      "image": "https://www.settleloans.in/images/infographics/should-i-pay-cash-to-bank-recovery-agent.jpg",
      "datePublished": "2026-08-31T10:00:00+05:30",
      "dateModified": "2026-08-31T10:00:00+05:30",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#webpage"
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
      "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#service",
      "name": "SettleLoans - Debt Settlement & Anti-Fraud Advisory",
      "description": "Specialized legal representation, recovery agent anti-harassment defense, financial fraud prevention, and structured loan settlement advisory for borrowers across Indian banking institutions.",
      "url": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent",
      "image": "https://www.settleloans.in/images/infographics/should-i-pay-cash-to-bank-recovery-agent.jpg",
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
        "reviewCount": "2140",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Vikram Sethi"
          },
          "datePublished": "2026-05-12",
          "reviewBody": "A field collection agent visited my home. He claimed he could close my ₹4.5 Lakh personal loan for ₹75,000 cash. He offered a handwritten paper receipt. I felt suspicious and consulted SettleLoans. Their advocates audited my file. They found the agent was an unverified third party running a scam. SettleLoans stopped all home visits immediately. They arranged a genuine bank-sanctioned OTS. I paid directly into the bank loan account via RTGS.",
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
          "datePublished": "2026-06-20",
          "reviewBody": "I previously handed ₹40,000 cash to a recovery agent for a credit card overdue. However, the bank continued calling me. They also reported a default on CIBIL. The cash was never credited to my account. SettleLoans legal counsel stepped in quickly. They filed a formal complaint with the bank nodal officer under RBI rules. The bank forced the agency to reconcile the payment. SettleLoans then completed a formal settlement with an official No Dues Certificate.",
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
            "name": "Rameshwar Patel"
          },
          "datePublished": "2026-07-09",
          "reviewBody": "Recovery agents threatened me with police action if I did not pay ₹1 Lakh cash on the spot. SettleLoans legal team stepped in right away. They served a legal notice against the agency for extortion and RBI Fair Practice Code violations. They stopped all harassment. SettleLoans then negotiated a structured 55% waiver. I paid it directly at the bank branch through a CMS challan.",
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
            "name": "Sunita Deshmukh"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "SettleLoans saved me from losing ₹1.2 Lakhs to a fraudulent recovery agent. The agent produced a forged settlement letter with fake bank stamps. SettleLoans advocates verified the letter directly with the bank zonal office. The bank confirmed the letter was fake. SettleLoans then negotiated an authentic OTS on official letterhead.",
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
      "@id": "https://www.settleloans.in/should-i-pay-cash-to-bank-recovery-agent#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can you legally pay cash to loan recovery agents in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. You should never pay cash. Under RBI Master Directions and Fair Practices Code, banks and NBFCs cannot let field agents collect untracked cash. If an agency collects cash in rare cases, they must give an instant digital receipt. The bank must send instant SMS and email alerts. Never hand over loose cash or take handwritten paper slips."
          }
        },
        {
          "@type": "Question",
          "name": "Why does cash paid to a recovery agent never credit the loan account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Collection agencies work on third-party commissions. When you pay cash to a field agent, the money sits in the agency private hands. It does not enter the Core Banking System (CBS). Rogue agents often pocket the cash or delay deposits for months. Because no money enters your loan account, the bank treats you as a defaulter. Penal interest and late fees keep rising."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if a recovery agent refuses digital payment and insists on cash?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If an agent demands cash and refuses digital modes like NEFT, RTGS, or CMS challans, suspect fraud immediately. Refuse to pay. Demand their Bank Authorization Letter and IIBF DRA Certificate. Record their demands on audio or video. Report the agent to the bank Principal Nodal Officer and file a police complaint for extortion."
          }
        },
        {
          "@type": "Question",
          "name": "Are handwritten paper receipts issued by recovery agents legally valid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Handwritten slips carry zero legal weight in bank audits or court trials. Even slips with rubber stamps or logos are invalid. Banks routinely reject handwritten receipts from third-party vendor agents. Only electronic receipts with a bank UTR number and server timestamp prove debt discharge."
          }
        },
        {
          "@type": "Question",
          "name": "How can I safely pay for a loan settlement without risking fraud?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Follow three clear steps to settle safely. First, get an official One-Time Settlement (OTS) sanction letter on bank letterhead with a verified reference number. Second, pay only through direct bank channels like RTGS, NEFT, net banking, or a branch CMS challan. Third, collect an official No Dues Certificate (NDC) directly from the bank."
          }
        },
        {
          "@type": "Question",
          "name": "What are the RBI guidelines regarding recovery agent conduct and cash handling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under RBI Circular DOR.ORG.REC.65/21.04.158/2022-23, banks and NBFCs are fully liable for agent actions. Agents cannot intimidate borrowers. They can only contact you between 8:00 AM and 7:00 PM. They cannot make false promises or collect cash without instant digital receipts. Violations can lead to heavy fines and cancelled agency licenses."
          }
        },
        {
          "@type": "Question",
          "name": "What should I do if I already paid cash to an agent and the bank claims non-receipt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you paid cash and the bank still shows a default, act fast. Send a written complaint to the bank Principal Nodal Officer. Attach your manual slips, chats. And agent details. If the bank does not resolve it in 30 days, escalate to the RBI Integrated Ombudsman. You can also file a police complaint under Section 406 and Section 420 IPC / BNS for cheating."
          }
        },
        {
          "@type": "Question",
          "name": "How does safe digital settlement protect my CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You pay directly to the bank under an authorized OTS letter. The bank credit team then updates all four bureaus: TransUnion CIBIL, Experian, Equifax, and CRIF High Mark. Under RBI rules, they must mark the status as 'Settled' with a ₹0 balance within 30 days. This stops default flags and lets you rebuild your credit score."
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
  { id: 'anatomy-field-cash-collection-demands', title: '1. Anatomy of Field Collection: Why Recovery Agents Demand Cash' },
  { id: 'rbi-master-directions-cash-collection-rules', title: '2. RBI Master Directions & Regulatory Framework on Cash Collections' },
  { id: 'mechanics-of-cash-misappropriation', title: '3. Why Cash Payments Never Credit Your Bank Loan Account' },
  { id: 'bank-accounting-npv-recovery-dynamics', title: '4. Bank Balance Sheet Economics & The Stressed Asset NPV Recovery Equation' },
  { id: 'field-cash-vs-verified-settlement-visual-guide', title: '5. Visual Roadmap: Field Cash Demand vs. Verified Institutional Settlement' },
  { id: 'sanction-letter-receipt-forensics', title: '6. Forensic Verification: Detecting Forged Letters & Fake Manual Receipts' },
  { id: 'safe-institutional-payment-protocols', title: '7. Safe Institutional Payment Protocols: CMS Challan, RTGS & Official Portals' },
  { id: 'post-settlement-ndc-cibil-rectification', title: '8. Post-Payment Closure: Enforcing 30-Day RBI No Dues Certificate & CIBIL ₹0 Update' },
  { id: 'direct-cash-vs-advocate-settlement-matrix', title: '9. Comparative Matrix: Direct Cash Handover vs. Advocate Settlement' },
  { id: 'company-resolution-section', title: '10. SettleLoans Anti-Harassment & Safe Debt Settlement Advisory' },
  { id: 'faqs', title: '11. Frequently Asked Questions' },
];

export default function ShouldIPayCashToBankRecoveryAgentPage() {
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
          <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-black mb-4 tracking-wider uppercase">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Financial Fraud Prevention • RBI Fair Practices Code &amp; Recovery Agent Protocols</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-black leading-tight tracking-tight text-white mb-5">Should You Pay Cash to Bank Recovery Agents?</h1>

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
              <span>RBI Master Direction (DOR.ORG.REC.65/21.04.158/2022-23) Compliant</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Verify Settlement &amp; Stop Harassment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all duration-200"
            >
              Consult Debt Settlement Advocate
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Strip Component */}
      <StatsStrip />

      {/* 3. 3-Column Grid Container */}
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_280px] xl:grid-cols-[260px_minmax(0,1fr)_300px] 2xl:grid-cols-[280px_minmax(0,1fr)_320px] gap-5 xl:gap-6 items-start">
          
          {/* Left Column: Sticky Table of Contents + Executive Crux */}
          <aside className="w-full lg:sticky lg:top-24 space-y-4">
            <SidebarTOC items={tocItems} />

            {/* Quick Executive Case Crux Box */}
            <div className="bg-red-50/70 border border-red-200/80 rounded-2xl p-4 text-xs text-red-950 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-red-900">
                <Ban className="w-4 h-4 text-red-600" />
                <span>Executive Anti-Fraud Crux</span>
              </div>
              <p className="text-[11px] leading-relaxed text-red-900">
                Never hand physical cash to any loan recovery agent. RBI rules strictly ban unverified cash collections. Cash paid to field collectors is often stolen. It leaves zero digital trace in the bank Core Banking System (CBS). Your loan stays overdue and fines keep piling up. Always demand an official bank OTS letter. Pay only through verified bank channels.
              </p>
            </div>
          </aside>

          {/* Middle Column: Editorial Content Body */}
          <main className="blog-content w-full bg-white space-y-10 min-w-0">
            
            {/* Top Key Takeaways Box */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-blue-950 font-black text-sm uppercase tracking-wider mb-3">
                <Award className="w-5 h-5 text-[#1F5EFF]" />
                <span>Key Takeaways: RBI Cash Collection Rules &amp; Anti-Fraud Safeguards</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Direct Cash Authorization:</strong> RBI Master Directions ban field agents from taking cash without instant, server-validated digital receipts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>High Misappropriation Risk:</strong> Cash handed to field agents goes to third-party firms, not the bank Core Banking System (CBS). The loan stays unpaid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Manual Paper Receipts Are Void:</strong> Banks reject carbon-copy paper slips and rubber stamps during internal audits and court trials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Use Direct Bank Channels Only:</strong> Pay settlement amounts only through RTGS, NEFT, net banking, or bank branch CMS challans.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Mandatory 30-Day No Dues Certificate:</strong> Under RBI Circular RBI/2023-24/60, banks must issue an NDC and set your bureau balance to ₹0 within 30 days.</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Anatomy of Field Cash Collection Demands */}
            <section id="anatomy-field-cash-collection-demands" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. Anatomy of Field Collection</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Commercial banks and NBFCs often assign overdue loans to third-party recovery agencies. These include SBI, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, and Bajaj Finance. Field agents visit homes and demand immediate cash. They claim cash is the only way to avoid police action or court warrants. They also promise instant settlement discounts.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Why do field agents push so hard for cash? Collection agencies earn commissions between 8% and 25% on recovered amounts. When an agent takes cash, the money goes into the agency float. It does not enter the regulated Core Banking System (CBS) of the bank.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This cash float leads to serious fraud. Rogue agents promise fake spot discounts. They say a small cash payment will close the loan forever. The agent gives a fake handwritten slip, pockets the cash. And never deposits it. Weeks later, the bank sends legal notices for the full balance. The borrower loses money and the debt remains unpaid.
              </p>
            </section>

            {/* Section 2: RBI Master Directions & Regulatory Framework */}
            <section id="rbi-master-directions-cash-collection-rules" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. RBI Master Directions on Cash Collections</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Reserve Bank of India sets strict rules to protect borrowers from coercion and fraud. Under the <strong>RBI Master Direction on Fair Practices Code for Lenders (DOR.ORG.REC.65/21.04.158/2022-23)</strong> and circulars on Outsourcing of Financial Services, the central bank limits how recovery agents can collect money.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Key statutory rules from the Reserve Bank of India include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Receipt className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Mandatory Real-Time Digital Receipts</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every recovery transaction must create an instant digital receipt. The bank must also send an automated SMS and email alert from its core server to your phone.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                    <span>Mandatory Agent Identity &amp; DRA Accreditation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Every visiting agent must carry a bank identity card. They must hold an official Bank Authorization Letter and valid IIBF DRA certification.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Scale className="w-4 h-4 text-purple-600" />
                    <span>Prohibition of Intimidation &amp; False Claims</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agents can only visit between 8:00 AM and 7:00 PM. They cannot threaten arrest, seize property, or make fake verbal settlement promises.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-amber-600" />
                    <span>Vicarious Liability of Commercial Lenders</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The Supreme Court of India and RBI hold banks fully liable for illegal acts, fraud. And threats by their recovery agents.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-blue-900 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-blue-950">
                  <ShieldAlert className="w-4 h-4 text-[#1F5EFF]" />
                  <span>Statutory Protection: Direct Electronic Payments Are Always Your Legal Right</span>
                </div>
                <p className="leading-relaxed text-blue-800">
                  No bank or agency can force you to pay in cash. Borrowers have a legal right to pay all dues, EMIs. And settlements through traceable bank channels. Funds must go directly to the bank loan account.
                </p>
              </div>
            </section>

            {/* Section 3: The Mechanics of Cash Misappropriation */}
            <section id="mechanics-of-cash-misappropriation" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. The Mechanics of Cash Misappropriation</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paying cash to a field agent is risky. Third-party agencies are not linked directly to the bank database. Banks run on Core Banking Solutions like Finacle, BaNCS, or Flexcube. Accounts update only when funds arrive via NEFT, RTGS, NACH, IMPS, or branch CMS counters.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When you pay cash to a field agent, major problems occur:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    1. Outright Theft &amp; Agent Absconding (Section 406 &amp; 420 IPC / BNS)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Collection agencies face high staff turnover. Rogue agents collect cash across an area, issue fake slips. And quit. The bank never gets the money. And the borrower remains in default.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    2. Agency Float Retention &amp; Delayed Ledger Credit
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Agencies often hold collected cash in private accounts for weeks. They do this to earn interest or hit monthly targets. Meanwhile, the bank adds penal interest and late fees to your loan.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-blue-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    3. Misallocation Toward Penalties Instead of Principal Debt
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Without a formal OTS letter, the bank system credits cash against overdue fines and legal charges first. The principal balance stays unpaid, leaving your debt alive.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Manual slips do not update credit bureaus. Rating agencies continue to show default flags like 90+ DPD or Substandard Asset. This severely damages your CIBIL score.
              </p>
            </section>

            {/* Section 4: Bank Accounting & NPV Recovery Dynamics */}
            <section id="bank-accounting-npv-recovery-dynamics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Bank Balance Sheet Economics, Recovery Quotas</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Borrowers should know how banks handle overdue debt. Under Reserve Bank of India (RBI) Prudential Norms on Income Recognition, Asset Classification and Provisioning (IRACP), loans unpaid for 90 days become Non-Performing Assets (NPAs).
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Banks must set aside 15% to 100% of the loan amount in capital reserves. Court cases, arbitration, and Section 138 cheque bounce trials take years and cost money. Thus, bank Stressed Asset Committees approve One-Time Settlements to recover funds quickly.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Delinquent Facility Type.</th>
                      <th>Gross Outstanding Balance.</th>
                      <th>Typical Field Agency Commission.</th>
                      <th>Institutional OTS Settlement Range.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Unsecured Personal Loan.</td>
                      <td>₹3.0 Lakhs – ₹12.0 Lakhs.</td>
                      <td>12% – 20% on collected cash.</td>
                      <td>₹1.2 Lakhs – ₹4.8 Lakhs (50%–65% Haircut).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Card Unpaid Balance.</td>
                      <td>₹1.5 Lakhs – ₹6.0 Lakhs.</td>
                      <td>15% – 25% on collected cash.</td>
                      <td>₹50,000 – ₹2.1 Lakhs (60%–70% Haircut).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Business Loan / SME Credit.</td>
                      <td>₹15.0 Lakhs – ₹75.0 Lakhs.</td>
                      <td>8% – 15% on collected cash.</td>
                      <td>₹6.0 Lakhs – ₹30.0 Lakhs (50%–60% Haircut).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Fintech Instant Digital Loan.</td>
                      <td>₹25,000 – ₹2.0 Lakhs.</td>
                      <td>18% – 25% on collected cash.</td>
                      <td>₹10,000 – ₹80,000 (50%–65% Haircut).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                When an advocate starts debt settlement talks for a borrower, the bank credit committee uses the <strong>Net Present Value (NPV) Recovery Valuation Benchmark</strong>:
              </p>

              {/* JSX Formula Box */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 my-6 shadow-md border border-slate-800">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Institutional Stressed Asset NPV Valuation Benchmark</span>
                </div>
                <div className="text-center py-3 my-2 bg-slate-800/80 rounded-xl font-mono text-sm sm:text-base text-blue-200 border border-slate-700">
                  NPV_Settlement = Direct_Electronic_Remittance - [ Legal_Prosecution_Cost + Capital_Provisioning_Drag + Agency_Commission_Friction ]
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  In this equation, Direct_Electronic_Remittance means guaranteed cash paid straight to the bank treasury. Deductions include court costs, legal retainers, frozen capital reserves. And agency leakage over 3 to 5 years.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                This math shows why banks prefer direct digital settlements over agency cash collections. By skipping third-party middlemen, borrowers can get 40% to 70% waivers directly from bank officers.
              </p>
            </section>

            {/* Section 5: Infographic Banner */}
            <section id="field-cash-vs-verified-settlement-visual-guide" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. Safe Payment &amp; Resolution Process Roadmap</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The guide below shows two paths. One is the risky route of paying cash to field agents. The other is the safe, legal path of an advocate-led bank settlement under RBI rules.
              </p>
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 my-6 bg-slate-950 aspect-[16/9]">
                <Image
                  src="/images/infographics/should-i-pay-cash-to-bank-recovery-agent.jpg"
                  alt="Why You Must Never Pay Cash to Bank Recovery Agents Infographic Diagram"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1200px) 100vw, 900px"
                  priority
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 mt-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 1–2: Cash Demands &amp; RBI Rules</span>
                  <span>Field agents demand cash with manual slips. RBI rules strictly ban cash collections without instant digital receipts.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stages 3–4: Fraud Risk &amp; Digital Channels</span>
                  <span>Cash is often stolen with zero bank credit. Borrowers must pay only via RTGS, NEFT, or branch CMS slips.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">Stage 5: Sanction Letter &amp; No Dues Certificate</span>
                  <span>Every settlement needs an authentic bank OTS letter. The bank must deliver a ₹0 No Dues Certificate within 30 days.</span>
                </div>
              </div>
            </section>

            {/* Section 6: Forensic Sanction Letter & Receipt Verification */}
            <section id="sanction-letter-receipt-forensics" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Forensic Verification</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                A common loan scam involves fake settlement letters. Rogue agencies make fake bank letters on forged stationery to pocket cash. Always verify settlement papers before paying any money.
              </p>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Check these clear warning signs to spot fake settlement documents:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border-l-4 border-red-600 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Warning Sign 1: Handwritten Slips, Generic Receipts or Third-Party Agency Branding
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the slip or letter shows an agency name (like &quot;Apex Recovery&quot;) instead of the bank (like &quot;HDFC Bank Ltd.&quot;), it is invalid. Genuine settlements use the lending bank name only.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-amber-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Warning Sign 2: Absence of Verifiable Bank Dispatch Reference Numbers
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Genuine OTS letters carry a unique system reference number (such as `HDFC/RECOVERY/OTS/2026/XXXXX`). Any branch manager can verify it on the bank intranet. Fake letters use generic dates.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-indigo-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Warning Sign 3: Payment Directed to Individual UPI IDs or Third-Party Accounts
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Scam agents often ask you to scan personal QR codes on Google Pay, PhonePe, or Paytm. Genuine payments go only to your loan account number or bank collection account.
                  </p>
                </div>

                <div className="p-4 rounded-xl border-l-4 border-emerald-600 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Warning Sign 4: Omission of Explicit Criminal Complaint Withdrawal Terms
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If the bank filed Section 138 NI Act or Section 25 PSSA cases, the OTS letter must state that the bank will withdraw all court complaints upon payment.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-amber-950">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Golden Rule of Debt Settlement: Zero Payment Without Direct Bank Authentication</span>
                </span>
                <p className="leading-relaxed">
                  Never pay money or hand over cash until an advocate verifies the OTS letter directly with the bank Zonal Legal Manager or Stressed Asset Branch.
                </p>
              </div>
            </section>

            {/* Section 7: Safe Institutional Payment Protocols */}
            <section id="safe-institutional-payment-protocols" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Safe Institutional Payment Protocols</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Once you receive an approved OTS letter, pay through secure bank channels. This ensures full legal debt discharge. Use these three approved methods:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-emerald-600" />
                    <span>Protocol 1: Bank Branch CMS Challan</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visit a bank branch in person. Ask for a CMS deposit slip. Fill in your 16-digit loan account number and the OTS code from your letter. The teller will give a stamped slip with a Machine Validation Number.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <CreditCard className="w-4 h-4 text-[#1F5EFF]" />
                    <span>Protocol 2: Direct RTGS / NEFT via Virtual Account</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Send an RTGS or NEFT from your bank account to the lender virtual collection account. Put your loan account number as the beneficiary. You get a unique UTR number as legal proof.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs sm:text-sm">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span>Protocol 3: Official Net Banking Loan Settlement Gateway</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Log in to the official bank website or app. Go to the loan repayment section. Check that the settlement amount matches your letter, then pay through net banking.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                These three methods create a clear digital audit trail on RBI payment rails. They protect you from fraud and prove your payment beyond doubt.
              </p>
            </section>

            {/* Section 8: Post-Settlement NDC & CIBIL Rectification */}
            <section id="post-settlement-ndc-cibil-rectification" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Post-Payment Closure</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Paying the settlement amount settles the financial debt. However, you must complete two vital legal steps to protect your credit record:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                    1. Enforcing Delivery of the Official No Dues Certificate (NDC) Within 30 Days
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>RBI Master Circular RBI/2023-24/60 (Responsible Lending Conduct)</strong>, all commercial banks and NBFCs must issue an official <strong>No Dues Certificate (NDC) / Loan Closure Certificate</strong>. They must also return all original cheques and property deeds within <strong>30 calendar days</strong> of receiving settlement funds. If the bank fails to deliver the NDC within 30 days, they must pay statutory payout of <strong>₹5,000 per day of delay</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    2. Credit Bureau Rectification to ₹0 Outstanding Balance Across CIBIL, Experian, CRIF
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under the Credit Information Companies (Regulation) Act, 2005, the bank is legally required to update all four credit bureaus (TransUnion CIBIL, Experian, Equifax, CRIF High Mark) within 30 days. The loan account status must be modified from &quot;Default / Active Suit Filed / Written Off&quot. to <strong>&quot;Settled&quot;</strong>, with the outstanding ledger balance reduced to strictly <strong>₹0</strong>.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Strategic Credit Recovery: Rebuilding CIBIL to 750+ Post-Settlement</span>
                </div>
                <p className="leading-relaxed text-emerald-900">
                  A &quot;Settled&quot. status shows the loan closed for a lower amount. It stops negative monthly DPD marks and halts debt recovery calls. You can get a secured credit card against a fixed deposit (FD), keep usage below 20%. And pay on time. This rebuilds your CIBIL score to 750+ within 18 to 24 months.
                </p>
              </div>
            </section>

            {/* Section 9: Comparative Matrix */}
            <section id="direct-cash-vs-advocate-settlement-matrix" className="space-y-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">9. Cash Payment vs Direct Bank Remittance Matrix</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Comparing cash payments against advocate-led bank settlements shows why you should never hand over cash:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full text-xs sm:text-sm">
                  <thead>
                    <tr>
                      <th>Operational Parameter.</th>
                      <th>Paying Cash to Field Recovery Agent.</th>
                      <th>Advocate-Supervised Institutional Settlement.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">Regulatory Legitimacy.</td>
                      <td>Banned under RBI Master Directions.</td>
                      <td>100% Compliant with RBI Fair Practices Code.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Payment Verification.</td>
                      <td>Handwritten paper slip (Legally Void).</td>
                      <td>Bank UTR Number or CBS Teller Slip.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Misappropriation Risk.</td>
                      <td>High (Agent theft and delayed deposits).</td>
                      <td>Zero (Funds go directly to bank treasury).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Settlement Authorization.</td>
                      <td>Verbal promises or fake agency slips.</td>
                      <td>Official Bank-Stamped OTS Sanction Letter.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Legal Case Quashing.</td>
                      <td>Court cases and warrants stay active.</td>
                      <td>Full withdrawal of Section 138 &amp. Section 25 cases.</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Closure records.</td>
                      <td>No official bank closure document.</td>
                      <td>Official RBI-Mandated No Dues Certificate (NDC).</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">Credit Bureau Impact.</td>
                      <td>Persistent default flags. CIBIL damage.</td>
                      <td>Updated to &quot;Settled&quot. with ₹0 Balance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 10: SettleLoans Advisory + CompanySection */}
            <section id="company-resolution-section" className="space-y-6">
              <div className="border-t border-slate-200 pt-8 space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">10. SettleLoans Anti-Harassment</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  If recovery agents demand cash, issue threats, or visit your home, you do not have to fight alone. SettleLoans gives you full legal defense. We send legal notices to stop rogue agencies, report extortion to bank nodal officers, audit settlement letters. And negotiate 40% to 70% One-Time Settlements. We also secure your official No Dues Certificate and ensure ₹0 CIBIL updates.
                </p>
              </div>

              {/* CompanySection Component */}
              <CompanySection />
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section id="faqs" className="space-y-4 border-t border-slate-200 pt-8">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-[#1F5EFF]" />
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 tracking-tight">11. FAQs: Paying Recovery Agents &amp; Safe Debt Settlement</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Clear, legally verified answers to essential questions regarding recovery agent cash demands, RBI guidelines, fake settlement receipts. And safe digital payment protocols in India.
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
                  href="https://www.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Master Direction on Fair Practices Code for Lenders (Recovery Conduct)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Indian Penal Code / BNS (Section 406 &amp; 420 Criminal Breach of Trust &amp; Fraud)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://cms.rbi.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">RBI Integrated Ombudsman Scheme (Complaints Against Recovery Agency Misconduct)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.indiacode.nic.in/handle/123456789/2042"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm"
                >
                  <span className="font-semibold text-slate-800">Credit Information Companies (Regulation) Act, 2005 (Mandatory ₹0 Bureau Update)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12535&Mode=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:text-[#1F5EFF] transition-all flex items-center justify-between shadow-sm sm:col-span-2"
                >
                  <span className="font-semibold text-slate-800">RBI Master Circular (Release of Documents &amp; ₹5,000/Day Delay Penalty Mandate)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </section>

            {/* 10 Related Guide Badges */}
            <section className="border-t border-slate-200 pt-8 mb-8">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                Related Legal Defense &amp; Debt Settlement Guides
              </h3>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/bank-recovery-agent-threatening-me"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bank Recovery Agent Threatening Me
                </Link>
                <Link
                  href="/bank-recovery-harassment-complaint"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  File Harassment Complaint
                </Link>
                <Link
                  href="/bank-sending-legal-notice-to-employer-illegal-recovery"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Recovery Notice to Employer
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
                  href="/can-bank-seize-property-for-personal-loan"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can Bank Seize Property?
                </Link>
                <Link
                  href="/can-i-go-to-jail-for-loan-default"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Can You Go to Jail for Loan Default?
                </Link>
                <Link
                  href="/case-study-bajaj-finance-harassment-stopped"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Bajaj Harassment Stopped Case Study
                </Link>
                <Link
                  href="/case-study-cibil-status-settled-to-closed"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  CIBIL Settled to Closed Recovery
                </Link>
                <Link
                  href="/full-and-final-settlement-vs-compromise-settlement"
                  className="py-1.5 px-3 bg-slate-100 hover:bg-blue-50 hover:text-[#1F5EFF] text-slate-700 text-xs font-semibold rounded-lg border border-slate-200 transition-all"
                >
                  Full &amp; Final vs Compromise Settlement
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
                  <Link href="/authors/ashish-jhangra" className="hover:text-[#1F5EFF] transition-colors">
                    <div className="font-bold text-slate-900 text-sm">Ashish Jhangra</div>
                  </Link>
                  <p className="text-xs text-slate-500">Chief Banking &amp. Debt Resolution Expert</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Expert in RBI compliance, recovery agent anti-harassment defense, financial fraud prevention. And structured bank debt settlements across India.
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <Link href="/authors/ashish-jhangra" className="text-xs text-[#1F5EFF] hover:underline flex items-center gap-1 font-semibold">
                  <span>View Profile</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Verified Author</span>
                </div>
              </div>
            </div>

            {/* Emergency Advocate CTA Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 shadow-md border border-slate-700">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider mb-2">
                <PhoneCall className="w-4 h-4" />
                <span>Urgent Anti-Harassment Defense</span>
              </div>
              <div className="font-bold text-base text-white mb-2">Recovery Agent Demanding Cash or Threatening You?</div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Do not pay cash or sign unverified papers. Our banking advocates stop illegal field visits, report rogue agencies. And structure verified direct settlements.
              </p>
              <Link
                href="/contact"
                className="w-full bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs text-center transition-all block shadow-md"
              >
                Get Emergency Legal Protection
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
                  <span>RBI Fair Practice Code Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>100% Confidential Legal Privilege</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                  <span>Direct Core Banking Digital Proof</span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>Official Bank-Issued OTS Sanctions</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}
