import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMobileScreen, 
  faShieldHalved, 
  faUserSecret, 
  faHandcuffs, 
  faGavel, 
  faCheck, 
  faTriangleExclamation, 
  faBan, 
  faFileContract, 
  faLock,
  faPhoneSlash,
  faStar,
  faBolt,
  faCommentsDollar,
  faScaleBalanced,
  faBrain,
  faEnvelopeOpenText,
  faListCheck,
  faMoneyBillTransfer
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Loan App Settlement | Settlement for KreditBee, MoneyView, Navi & More",
  description: "Trapped by instant loan apps? We settle loans for legal apps (KreditBee, MoneyView, CASHe) and help you handle harassment from illegal Chinese loan apps. Expert legal protection.",
  alternates: {
    canonical: "https://settleloans.in/app-loan-settlement",
  },
  keywords: [
    "loan app settlement", 
    "kreditbee loan settlement", 
    "moneyview settlement process", 
    "navi loan foreclosure", 
    "kissht loan settlement", 
    "cashe loan default", 
    "illegal loan app harassment complaint", 
    "cyber crime complaint for loan apps", 
    "mpokket loan settlement", 
    "smartcoin loan settlement", 
    "chinese loan app harassment solution"
  ]
};

export default function AppLoanSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/app-loan-settlement#webpage",
        "url": "https://settleloans.in/app-loan-settlement",
        "name": "Loan App Settlement | Settlement for KreditBee, MoneyView, Navi & More",
        "description": "Trapped by instant loan apps? We settle loans for legal apps (KreditBee, MoneyView, CASHe) and help you handle harassment from illegal Chinese loan apps. Expert legal protection.",
        "breadcrumb": { "@id": "https://settleloans.in/app-loan-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/app-loan-settlement#breadcrumb",
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
            "name": "Loan App Settlement",
            "item": "https://settleloans.in/app-loan-settlement"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/app-loan-settlement#service",
        "name": "Loan App Settlement Services",
        "description": "Expert legal negotiation and settlement services for instant personal loan apps like KreditBee, MoneyView, Navi, and protection against illegal loan app harassment.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1560",
          "itemReviewed": {
            "@id": "https://settleloans.in/app-loan-settlement#service"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Digital Lending Debt Relief",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Legal App Settlement (OTS)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cyber Crime Complaint Assistance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Anti-Harassment Protection"
              }
            }
          ]
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Singh" },
            "datePublished": "2024-03-15",
            "reviewBody": "KreditBee agents were harassing my parents. SettleLoans legal team stepped in and stopped the calls in 48 hours. Settled my 50k loan for 22k.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "itemReviewed": {
              "@id": "https://settleloans.in/app-loan-settlement#service"
            }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Aditi Sharma" },
            "datePublished": "2024-02-20",
            "reviewBody": "I was trapped in a fake Chinese loan app cycle. They morphed my photos. SettleLoans helped me file a cyber crime complaint and handle the threats. They saved my reputation.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "itemReviewed": {
              "@id": "https://settleloans.in/app-loan-settlement#service"
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/app-loan-settlement#article",
        "headline": "How to Settle Debt with Instant Loan Apps in India",
        "description": "Comprehensive guide on dealing with instant loan apps. Learn the difference between legal vs illegal apps, how to stop harassment, and the settlement process for major players like KreditBee and Navi.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-01-24",
        "dateModified": "2024-01-30",
        "mainEntityOfPage": { "@id": "https://settleloans.in/app-loan-settlement#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/app-loan-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I settle a loan from apps like KreditBee or MoneyView?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Most popular loan apps like KreditBee, MoneyView, Navi, and CASHe are backed by RBI-registered NBFCs. They have legal provisions for 'One Time Settlement' (OTS) if you are facing genuine financial hardship. We negotiate with them directly to reduce your debt burden, typically achieving waivers of 40-50% on the outstanding amount."
            }
          },
          {
            "@type": "Question",
            "name": "How do I handle harassment from illegal/Chinese loan apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Illegal apps engaging in blackmail (morphed photos, calling contacts) are committing cybercrimes. You should NOT pay them out of fear. The solution is filing a Cyber Crime Complaint immediately. We assist you in drafting and filing these complaints to stop the harassment. Paying them only leads to further extortion."
            }
          },
          {
            "@type": "Question",
            "name": "Will loan apps send agents to my home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legal RBI-registered apps can send agents, but they must follow strict limitations: visits only between 7 AM - 7 PM, valid ID cards required, and no misbehavior. Illegal apps usually do not have physical agents; they operate virtually through threats. If anyone threatens violence, it is a police matter."
            }
          },
          {
            "@type": "Question",
            "name": "Does settling a loan app debt affect my CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If the app is RBI-registered (e.g., Navi, Kissht), yes, settlement will be reported to CIBIL as 'Settled' or 'Written Off', and your score will drop. However, illegal apps often do not report to CIBIL at all. We help you identify which is which before you decide to pay."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get a refund of processing fees if I close the loan early?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, processing fees are usually non-refundable as they cover the cost of loan origination. However, if you are settling, we negotiate on the 'Principal Outstanding' amount, effectively waiving off interest and penalty charges, which often exceeds the processing fee amount."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the settlement process take for apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For legal apps like MoneyView, it typically takes 30-45 days. The first step is stopping harassment, which happens within 48-72 hours of us taking over. The negotiation for the final amount takes longer as we wait for the loan to age and for the lender to offer the best discount."
            }
          },
          {
            "@type": "Question",
            "name": "What if the app threatens to block my PAN/Aadhaar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan apps DO NOT have the authority to block your PAN or Aadhaar. Only government authorities can do that. This is a common scare tactic used by recovery agents. Ignore such threats. We can file a complaint against them for spreading misinformation."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to share my settlement letter with you?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. We need to verify the settlement letter before you make any payment. Many fraudulent agents issue fake settlement letters to steal money. We verify the authenticity of the letter with the lender's central team to ensure your payment actually closes the loan."
            }
          },
          {
            "@type": "Question",
            "name": "Does KreditBee initiate legal action for small amounts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For small amounts (e.g., < ₹10,000), legal action is rare due to the cost involved. However, they may still send legal notices to pressure you. For larger amounts, they can initiate arbitration. We handle all such legal correspondence for you."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle multiple loans at once?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If you have 5-6 app loans, we recommend a consolidated settlement strategy. We prioritize the most aggressive lenders and those with the highest interest rates. We can help you plan a monthly budget to settle them one by one."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

       {/* Hero Section */}
       <section className="w-full bg-[#2E2E2E] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Digital Debt Relief
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Loan App <br className="hidden md:block"/> Settlement Services
          </h1>
          <p className="text-lg md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
             Harassed by recovery calls? We help you settle with legal apps like <strong>KreditBee & MoneyView</strong> and fight back against <strong>illegal loan apps</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Stop the Calls
            </Link>
             <Link href="#legal-vs-illegal" className="inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              Identify Your App
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#747474]">
              <li>
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                App Loan Settlement
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
              { id: "introduction", title: "The Instant Loan Trap" },
              { id: "legal-vs-illegal", title: "Step 1: Know Your Enemy" },
              { id: "check-list", title: "App Verification Checklist" },
              { id: "rbi-guidelines", title: "RBI Guidelines 2024" },
              { id: "data-privacy", title: "Data Privacy & Rights" },
              { id: "psychology", title: "Recovery Agent Tactics" },
              { id: "legal-settlement", title: "Settlement Process" },
              { id: "specific-apps", title: "KreditBee & MoneyView Guide" },
              { id: "harassment-protection", title: "Stopping Harassment" },
              { id: "life-after-settlement", title: "Rebuilding Credit Score" },
              { id: "email-templates", title: "Email Templates" },
              { id: "app-list", title: "Apps We Handle" },
              { id: "reviews", title: "Success Stories" },
              { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">The Double-Edged Sword of Instant Loans</h2>
            <p className="text-lg leading-relaxed mb-6">
              In the age of smartphones, getting a loan takes just 5 minutes. Apps like <strong>KreditBee, MoneyView, Navi, and Kissht</strong> have processed millions of loans with minimal documentation. While this is convenient, it has also led to a massive debt crisis. According to a 2023 RBI report, the digital lending market has grown exponentially, but so have consumer complaints regarding harassment and unfair practices.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              The real problem isn't the loan itself; it's the <strong>hidden costs and aggressive recovery</strong>. Many users fall into a cycle: borrowing from App A to pay App B. Before they know it, they have 5-10 active loan apps, paying exorbitant processing fees and interest rates ranging from 24% to 300% APR.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
              Even worse is the rise of <strong>Illegal (Chinese) Loan Apps</strong> that operate without RBI licenses. These apps use criminal tactics like morphing photos and blackmailing contacts. At SettleLoans, we distinguish between these two threats and provide tailored legal solutions for each variety of digital debt.
            </p>
          </section>

           {/* Legal vs Illegal Apps - CRITICAL SECTION */}
           <section id="legal-vs-illegal" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">
              Step 1: Know Your Enemy (Legal vs. Illegal Apps)
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               Your strategy depends entirely on who you have borrowed from. A legal app requires negotiation. An illegal app requires police action. Determining the category of your loan app is the first step towards freedom.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-black text-[#1F5EFF] mb-4 flex items-center">
                        <FontAwesomeIcon icon={faShieldHalved} className="mr-3 w-12 h-12" /> Legal / RBI Registered
                    </h3>
                    <div className="mb-4 text-sm font-semibold bg-gray-50 p-2 rounded text-gray-700">
                        Examples: KreditBee, MoneyView, Navi, Kissht, CASHe, Bajaj Finserv, mPokket, SmartCoin
                    </div>
                    <ul className="space-y-3 text-gray-700 text-sm">
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Status:</span> Backed by RBI-registered NBFCs (e.g., Krazybee, Whizdm Finance).</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">CIBIL:</span> They report all repayment behavior to CIBIL/Experian.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Recovery:</span> They use call centers and field agents. While annoying, they usually fear the Banking Ombudsman.</li>
                        <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">➜</span> <span className="font-semibold">Action:</span> Settlement (OTS) is the correct path.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                     <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center relative z-10">
                        <FontAwesomeIcon icon={faUserSecret} className="mr-3 w-12 h-12" /> Illegal / Fake Apps
                    </h3>
                    <div className="mb-4 text-sm font-semibold bg-red-50 p-2 rounded text-red-700">
                        Examples: CashBus, RupeeReady, AsanLoan, CrazyCash, and hundreds of random names on PlayStore.
                    </div>
                    <ul className="space-y-3 text-gray-700 relative z-10 text-sm">
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">!</span> <span className="font-semibold">Status:</span> No RBI License. Office addresses are usually fake or non-existent.</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">!</span> <span className="font-semibold">Tactics:</span> They hack your phone to access contacts/gallery. They send morphed nude photos to family/friends.</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">!</span> <span className="font-semibold">Tenure:</span> They give 7-day loans, which is ILLEGAL in India.</li>
                        <li className="flex items-start"><span className="text-blue-600 mr-2 font-bold">➜</span> <span className="font-semibold">Action:</span> Cyber Crime Complaint. DO NOT PAY.</li>
                    </ul>
                </div>
            </div>
          </section>

          {/* New Section: Checklist */}
          <section id="check-list" className="scroll-mt-32 mb-16">
             <div className="bg-gray-50 border-l-4 border-gray-800 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FontAwesomeIcon icon={faListCheck} className="mr-3 w-6 h-6" /> How to Verify if an App is Legal?
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li><strong>Check the Play Store Description:</strong> Legal apps list their NBFC partner (e.g., 'In partnership with Krazybee Services Pvt Ltd'). Illegal apps often list random Gmail addresses.</li>
                  <li><strong>Check Tenure:</strong> If the loan is for 7 days or 15 days, it is 100% ILLEGAL. RBI mandates a minimum 90-day tenure option for digital loans.</li>
                  <li><strong>Check Permissions:</strong> If an app asks for Gallery or File Manager access, delete it immediately. RBI bans access to media files.</li>
                  <li><strong>Check RBI Sachet Portal:</strong> You can search for the NBFC name on the RBI website to confirm its registration status.</li>
                </ol>
             </div>
          </section>

           {/* RBI Guidelines 2024 */}
           <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faGavel} className="mr-4 w-10 h-10" /> RBI Digital Lending Guidelines
            </h2>
            <p className="mb-6 leading-relaxed">
              In September 2022, the RBI issued comprehensive guidelines to regulate digital lending. 90% of borrowers are unaware of these rights, which recovery agents exploit. SettleLoans uses these exact guidelines to force lenders to the negotiating table.
            </p>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-6">
              <div className="grid divide-y md:divide-y-0 md:divide-x divide-gray-200 md:grid-cols-2">
                <div className="p-6">
                   <h4 className="font-bold text-lg text-gray-900 mb-2">1. The "Cooling-Off" Period</h4>
                   <p className="text-sm text-gray-600">Borrowers must be given a "look-up period" (typically 3 days for loans &gt;7 days) where they can exit the loan by paying the principal + proportionate APR without any penalty. If you tried to exit and they refused, the loan contract is voidable.</p>
                </div>
                <div className="p-6">
                   <h4 className="font-bold text-lg text-gray-900 mb-2">2. Data Privacy (Need to Know)</h4>
                   <p className="text-sm text-gray-600">DLAs (Digital Lending Apps) cannot access your mobile phone resources like file and media, contact list, call logs, etc. They can only take one-time access to camera/mic for KYC. If they have your contact list, they have <strong>violated the guidelines</strong>.</p>
                </div>
                <div className="p-6">
                   <h4 className="font-bold text-lg text-gray-900 mb-2">3. KFS (Key Fact Statement)</h4>
                   <p className="text-sm text-gray-600">The lender must provide a KFS before the loan contract is signed. This document must summarize the APR, recovery mechanisms, and grievance officer details. If you didn't receive a KFS, the loan disbursement is irregular.</p>
                </div>
                <div className="p-6">
                   <h4 className="font-bold text-lg text-gray-900 mb-2">4. Direct Bank Transfer</h4>
                   <p className="text-sm text-gray-600">All loan disbursals and repayments are required to be executed only between the bank accounts of the borrower and the Regulated Entity (RE). No "pass-through" or "pool" accounts of third parties are allowed.</p>
                </div>
              </div>
            </div>
            
             <p className="mt-4 text-sm text-gray-500 bg-yellow-50 p-4 rounded-lg">
              <strong>Why This Matters:</strong> If a lending app has violated any of these rules (e.g., disbursed money from a third-party account), the loan contract itself can be challenged in consumer court. This gives you massive leverage during settlement negotiations.
            </p>
          </section>

          {/* Data Privacy & Rights (Expanded) */}
          <section id="data-privacy" className="scroll-mt-32 mb-16">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6 flex items-center">
                <FontAwesomeIcon icon={faLock} className="mr-4 w-8 h-8" /> Your Data Privacy Rights
             </h2>
             <p className="mb-6 leading-relaxed">
               One of the biggest fears borrowers have is the misuse of their personal data. It is important to know that <strong>harassment via data misuse is a criminal offense</strong> under the Information Technology Act, 2000.
             </p>
             <ul className="space-y-4">
                <li className="flex items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mr-3">!</div>
                   <div>
                      <strong className="block text-gray-900">Section 66E (Violation of Privacy)</strong>
                      <span className="text-sm text-gray-600">Intentionally capturing, publishing, or transmitting the image of a private area of any person without their consent is punishable with imprisonment up to 3 years. This applies to apps that access your gallery.</span>
                   </div>
                </li>
                 <li className="flex items-start">
                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold mr-3">!</div>
                   <div>
                      <strong className="block text-gray-900">Section 67 (Publishing Obscene Material)</strong>
                      <span className="text-sm text-gray-600">If recovery agents send abusive messages or morphed photos electronically, they can be jailed for up to 3 years.</span>
                   </div>
                </li>
             </ul>
          </section>

           {/* Psychological Tactics */}
           <section id="psychology" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faBrain} className="mr-4 w-10 h-10" /> How They Break You (And How to Resist)
            </h2>
            <p className="mb-6 leading-relaxed">
              Loan apps don't just lend money; they engineer anxiety. Their recovery scripts are designed by psychologists to exploit human fear and shame. Recognizing these tactics is the first step to becoming immune to them.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <h4 className="font-bold text-orange-900 mb-2">1. The "Frequency" Attack</h4>
                  <p className="text-sm text-orange-800">
                    <strong>Tactic:</strong> Calling you 50-100 times a day using auto-dialers.
                    <br/><br/>
                    <strong>Goal:</strong> To make you physically unable to use your phone for work or emergency, forcing you to pay just to stop the noise.
                    <br/><br/>
                    <strong>Counter:</strong> Activate "Do Not Disturb" for unknown numbers. Use TrueCaller Premium or similar apps to block spam series.
                  </p>
               </div>
               <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-red-900 mb-2">2. The "Social Shame" Bomb</h4>
                  <p className="text-sm text-red-800">
                    <strong>Tactic:</strong> creating a WhatsApp group with your profile pic and adding your random contacts, titling it "Defaulter" or "Thief".
                    <br/><br/>
                    <strong>Goal:</strong> To trigger intense social embarrassment.
                    <br/><br/>
                    <strong>Counter:</strong> Send a pre-emptive broadcast message to your contacts saying your phone was hacked. We provide the exact template for this.
                  </p>
               </div>
               <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">3. The "Fake Legal" Threat</h4>
                  <p className="text-sm text-blue-800">
                    <strong>Tactic:</strong> Sending PDF notices on WhatsApp with "Supreme Court" or "CBI" logos, or "Arrest Warrants".
                    <br/><br/>
                    <strong>Goal:</strong> To induce panic.
                    <br/><br/>
                    <strong>Counter:</strong> Real legal notices come via Speed Post, not WhatsApp. Courts do not issue arrest warrants for civil defaults. These are fake.
                  </p>
               </div>
            </div>
          </section>

          {/* Legal Settlement Process (Expanded) */}
          <section id="legal-settlement" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
               Settling with Legal Apps: The Process
            </h2>
            <p className="mb-6 leading-relaxed">
               Legal apps function like digital NBFCs. They have boards, auditors, and legal teams. You cannot just "run away" from them without destroying your financial future. Settlement is the middle ground.
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">1</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Stop the EMI Spiral</h4>
                        <p className="text-gray-600 text-sm">The first step is to stop borrowing to pay. Accepting that you have defaulted is better than taking a new loan at 36% interest to pay an old one. This "debt trap" only benefits the lenders. We help you freeze your liability.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">2</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Official Communication</h4>
                        <p className="text-gray-600 text-sm">We take over specific communication channels. For apps like Navi and KreditBee, we email their 'Grievance Officers' directly (e.g., grievance@kreditbee.in), bypassing the lower-level call center agents who have no authority to negotiate. This elevates your case to a decision-maker.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">3</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Negotiate Waivers</h4>
                        <p className="text-gray-600 text-sm">Tech-lenders have high margins. They are often willing to settle for <strong>40-50% of the principal + interest</strong> if the case is pushed correctly. We target a full waiver of all "Late Fees", "Overdue Charges", and "Legal Notice Charges".</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">4</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Verify Settlement Letter</h4>
                        <p className="text-gray-600 text-sm">Before making payment, you must receive a formal letter on the lender's letterhead. It must state the exact settlement amount and confirm that the account will be closed. <strong>Never pay based on a WhatsApp message or a verbal promise.</strong></p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">5</div>
                    <div>
                        <h4 className="text-lg font-bold text-gray-900">Closure & NDC</h4>
                        <p className="text-gray-600 text-sm">Once the settlement amount is paid, we ensure you receive a "No Dues Certificate" (NDC) or a "Closure Letter" within 45 days. This is crucial proof that the loan is closed and no further claim can be made against you.</p>
                    </div>
                </div>
            </div>
          </section>

          {/* Specific Apps Guide */}
           <section id="specific-apps" className="scroll-mt-32 mb-16">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6 flex items-center">
               <FontAwesomeIcon icon={faMobileScreen} className="mr-4 w-8 h-8" /> Guide for Major Apps
            </h2>
            <div className="grid gap-6">
               <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">KreditBee Settlement</h3>
                  <p className="text-sm text-gray-600 mb-2">KreditBee uses multiple NBFC partners (Krazybee, Poonawalla, etc.). You might receive legal notices for "Arbitration" or "Section 25" (NACH bounce). They are aggressive but legal. Settlements usually happen after 90 days of non-payment. <strong>Target Waiver: 40-60%</strong>.</p>
               </div>
               <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">MoneyView Settlement</h3>
                  <p className="text-sm text-gray-600 mb-2">MoneyView (Whizdm Finance) relies heavily on digital tracking. They may track your swiggy/zomato location if permissions were given. They are open to OTS proposals if you can prove job loss. <strong>Target Waiver: 30-50%</strong>.</p>
               </div>
               <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Navi / Kissht / Ring</h3>
                  <p className="text-sm text-gray-600 mb-2">These are technologically advanced. They report defaults to CIBIL very quickly. Ring and Kissht often have very small tenures (15 days) which borders on grey areas. Keep a screenshot of the app interface as evidence of high interest rates. <strong>Target Waiver: 40-50%</strong>.</p>
               </div>
            </div>
          </section>

           {/* Harassment Protection (Detailed) */}
          <section id="harassment-protection" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 flex items-center">
               <FontAwesomeIcon icon={faBan} className="mr-4 w-12 h-12" /> 
               Dealing with Illegal Apps: A Survival Guide
            </h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
               <p className="font-bold text-red-900/80 mb-2">GOLDEN RULE: Never Pay to Stop Harassment</p>
               <p className="text-red-800 text-sm">
                 If an illegal app threatens to send morphed photos to your contacts, paying them will NOT stop it. In fact, it marks you as a "paying victim". They will demand double the amount 2 days later. They are criminals, not lenders.
               </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Our 'Cyber-Shield' Protocol</h3>
            <p className="mb-6 text-gray-600">
                When you sign up with us for illegal app protection, we initiate a 3-pronged defense strategy to secure your digital life and stop the mental torture.
            </p>
            <ul className="space-y-4">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <FontAwesomeIcon icon={faMobileScreen} className="text-red-500 mt-1 mr-3 w-12 h-12" />
                    <div>
                        <strong className="block text-gray-900">1. Data Lockdown:</strong>
                        <span className="text-gray-600 text-sm">We guide you on how to revoke app permissions, factory reset your phone to remove spyware, secure your social media (Facebook/Instagram/LinkedIn) to prevent scraping, and lock your primary bank accounts against unauthorized auto-debits.</span>
                    </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <FontAwesomeIcon icon={faHandcuffs} className="text-red-500 mt-1 mr-3 w-12 h-12" />
                    <div>
                        <strong className="block text-gray-900">2. Cyber Crime Reporting:</strong>
                        <span className="text-gray-600 text-sm">We assist you in drafting a formal complaint on <a href="https://cybercrime.gov.in" target="_blank" className="text-blue-600 hover:underline">cybercrime.gov.in</a>. We ensure the complaint highlights the IT Act violations (Section 66E for privacy, 67 for obscenity). Having an official acknowledgment number is often enough to silence these scammers when shared with them.</span>
                    </div>
                </li>
                 <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <FontAwesomeIcon icon={faUserSecret} className="text-red-500 mt-1 mr-3 w-12 h-12" />
                    <div>
                        <strong className="block text-gray-900">3. Reputation Management:</strong>
                        <span className="text-gray-600 text-sm">We provide you with professionally drafted "Alert Messages" to send to your contact list (friends/family/boss). These messages explain that your phone data was hacked and they might receive fake/spam messages from scammers. This preemptive strike neutralizes the "shame" tactic effectively.</span>
                    </div>
                </li>
            </ul>
          </section>

          {/* Life After Settlement */}
           <section id="life-after-settlement" className="scroll-mt-32 mb-16">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6 flex items-center">
                <FontAwesomeIcon icon={faStar} className="mr-4 w-8 h-8" /> Rebuilding Your Life
             </h2>
             <p className="mb-6 leading-relaxed">
               Settlement is not the end; it is a new beginning. While your credit score will dip temporarily (usually by 50-75 points), it is better than a permanent default.
             </p>
             <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h4 className="font-bold text-green-900 mb-4">How to fix your CIBIL after settlement:</h4>
                <ul className="list-disc pl-5 space-y-2 text-green-800 text-sm">
                   <li><strong>Month 1-6:</strong> Do not apply for any new loans. Let the dust settle.</li>
                   <li><strong>Month 7:</strong> Apply for a <strong>Secured Credit Card</strong> (like OneCard or IDFC First WOW) against a small Fixed Deposit of ₹5,000-₹10,000.</li>
                   <li><strong>Month 8-12:</strong> Use only 30% of the limit and pay the full bill on the due date. This positive behavior will start overriding the negative history.</li>
                   <li><strong>Year 2:</strong> You will see your score climbing back to 750+.</li>
                </ul>
             </div>
          </section>
          
           {/* Email Templates */}
           <section id="email-templates" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-4 w-10 h-10" /> Copy-Paste Email Templates
            </h2>
            <p className="mb-6 leading-relaxed">
              Don't know what to write to the bank? Use these legally drafted templates. Replace the bracketed text with your details.
            </p>
            
            <div className="space-y-8">
               <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 font-bold text-gray-700 flex justify-between items-center">
                    Template 1: Reporting Harassment to Grievance Officer
                    <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50">Copy</button>
                  </div>
                  <div className="p-6 bg-gray-50 font-mono text-sm text-gray-800 whitespace-pre-wrap">
To: [Grievance Officer Email ID]<br/>
Subject: Complaint regarding Harassment & RBI Guideline Violations - Loan A/c [Number]<br/><br/>

Dear Sir/Madam,<br/><br/>

I am writing regarding my loan account [Number] with your company. Due to severe financial hardship [Reason: Job Loss/Medical], I have defaulted on my payments.<br/><br/>

However, your recovery agents are violating RBI's "Guidelines on Recovery Agents" dated Aug 12, 2022. Specifically:<br/>
1. Calling me more than [Number] times a day.<br/>
2. Using abusive language (Recordings attached).<br/>
3. Threatening to contact my references.<br/><br/>

This behavior serves as "Harassment" under the Code of Conduct. I request you to immediately stop these actions. I am willing to settle the loan, but only if this harassment ceases immediately. All future communication should be via email.<br/><br/>

Regards,<br/>
[Your Name]<br/>
[mobile Number]
                  </div>
               </div>

               <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 font-bold text-gray-700 flex justify-between items-center">
                    Template 2: Requesting One-Time Settlement (OTS)
                    <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50">Copy</button>
                  </div>
                  <div className="p-6 bg-gray-50 font-mono text-sm text-gray-800 whitespace-pre-wrap">
To: [Settlement Team Email]<br/>
Subject: Proposal for One-Time Settlement (OTS) - Loan A/c [Number]<br/><br/>

Dear Team,<br/><br/>

I acknowledge the outstanding dues on my personal loan account [Number]. As communicated earlier, I am currently insolvent due to [Reason]. I have attached my [Bank Statement/Termination Letter] as proof of my inability to pay the full amount.<br/><br/>

I am proposing to close this loan account permanently with a One-Time Settlement payment of ₹[Your Offer Amount]. This funds will be arranged from a relative.<br/><br/>

Please consider this request and issue a formal Settlement Letter if approved. I can make the payment within 7 days of receiving the letter.<br/><br/>

Regards,<br/>
[Your Name]
                  </div>
               </div>
            </div>
          </section>

           {/* App List */}
          <section id="app-list" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center">
              Major Apps We Settle
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We have successfully negotiated settlements for thousands of clients with these RBI-registered digital lenders.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["KreditBee", "MoneyView", "Navi", "Kissht", "CASHe", "mPokket", "SmartCoin (Olyv)", "Nira", "PaySense", "Fibe (EarlySalary)", "LazyPay", "Simple", "Home Credit", "Stashfin", "Cred", "Slice"].map((app, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm font-semibold text-gray-700 hover:border-[var(--color-primary)] transition-colors">
                   {app}
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section id="reviews" className="scroll-mt-32 text-center mb-16">
             <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Client Success Stories</h2>
             <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">V</div>
                      <div>
                         <h4 className="font-bold">Vikram Singh</h4>
                         <p className="text-xs text-gray-500">Settled Bajaj Finance & KreditBee</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"I had 4 loan apps and my salary was gone in EMIs. KreditBee agents were calling my parents. SettleLoans legal team stepped in and stopped the calls in 48 hours. They combined my loans and settled my 50k loan for 22k. Highly recommended."</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600 mr-3">A</div>
                      <div>
                         <h4 className="font-bold">Aditi Sharma</h4>
                         <p className="text-xs text-gray-500">Victim of Chinese Loan App</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"I was trapped in a fake Chinese loan app cycle. They morphed my photos and threatened to send them to my boss. I was suicidal. SettleLoans helped me file a cyber crime complaint and handle the threats. They saved my reputation and my life."</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600 mr-3">R</div>
                      <div>
                         <h4 className="font-bold">Rahul Verma</h4>
                         <p className="text-xs text-gray-500">Settled MoneyView Loan</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"MoneyView was sending legal notices to my old home address. I was very scared. The team explained that it was just an arbitration notice. They replied to the notice legally and negotiated a 40% waiver. Professional service."</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-600 mr-3">S</div>
                      <div>
                         <h4 className="font-bold">Sneha Gupta</h4>
                         <p className="text-xs text-gray-500">Settled Kissht Loan</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"I lost my job and couldn't pay Kissht EMI. The late fees were double the principal! SettleLoans removed all the late fees and I paid only the principal amount to close the loan. Thank you!"</p>
                </div>
             </div>
          </section>

          {/* FAQs */}
          <h2 id="faqs" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 not-prose mb-20">
            {[
              { 
                q: "Can KreditBee take legal action against me?", 
                a: "Yes, KreditBee partners with NBFCs like Krazybee Services. If the amount is significant (usually >₹20,000), they can file for Arbitration or Section 25 (Payment and Settlement Act) cases for NACH bounce. However, for smaller amounts, they mostly rely on aggressive calls. Settlement is the best way to close this legally before it escalates to court." 
              },
              { 
                q: "How to stop MoneyView recovery calls?", 
                a: "You cannot legally 'stop' them from calling to collect dues, but you can stop 'harassment'. If they call 50 times a day or call your relatives, it violates RBI guidelines. Hiring a settlement firm like SettleLoans allows us to redirect calls to our legal team and send a Cease & Desist notice for harassment, giving you immediate relief." 
              },
              { 
                q: "I took a loan from a 7-day loan app. What should I do?", 
                a: "STOP PAYING immediately. 7-day apps are illegal in India. Even if you pay, they will not close the loan; they will demand more money. Uninstall the app, factory reset your phone, file a Cyber Crime complaint, and warn your contacts using our templates. Do not engage with them or pay them a single rupee." 
              },
              { 
                q: "Does Navi offer loan settlement?", 
                a: "Navi is generally stricter than other apps because they are technologically very integrated and have their own NBFC license. However, they do offer settlements for NPAs (Non-Performing Assets) post 90-120 days of default. You need strong proof of financial hardship (medical bills, termination letter) to get a waiver approved by them." 
              },
              { 
                q: "Can I settle multiple loan apps at once?", 
                a: "Yes, this is actually our recommended strategy. We pool all your app loans together, calculate a total settlement budget, and then negotiate with them one by one, prioritizing the most aggressive ones first. This is called 'Debt Consolidation via Settlement'. It helps you clear debts systematically." 
              },
              { 
                q: "Will the police arrest me for not paying loan apps?", 
                a: "No. Defaulting on a personal loan is a civil matter, not a criminal one. The police will not arrest you for non-payment. However, illegal apps may threaten you with fake FIR copies or fake police calls. These are scams. Genuine police will never call you to recover money for a private company." 
              },
              { 
                q: "Do I need a lawyer to settle loan apps?", 
                a: "While you can negotiate yourself, having a legal team (like SettleLoans) is advantageous. Apps take legal notices from lawyers more seriously than requests from borrowers. We also protect you from the legal traps in settlement letters and ensure the NDC is valid." 
              },
              { 
                q: "What is the fee for your service?", 
                a: "We charge a success-based fee on the amount we save you, plus a small nominal retainer to start the legal protection process. This ensures our interests are aligned—the more we save you, the better it is for us. Contact us for a free case evaluation." 
              },
              { 
                q: "How does settlement affect my CIBIL score?", 
                a: "For legal apps, the loan will be marked as 'Settled', dropping your score by 50-100 points. However, this stops the monthly 'Late Payment' reporting which damages your score even more. A settled status is temporary; a continuous default is permanent damage." 
              },
              { 
                q: "Can I get a loan again after settlement?", 
                a: "Not immediately from the same app. You will likely be blacklisted by that specific lender. However, after 2-3 years, as your credit score rebuilds through good financial behavior (like using a secured credit card), you will be eligible for loans from other lenders." 
              },
              {
                q: "Is it legal for agents to call my friends/family?",
                a: "No. The RBI Guidelines on Recovery Agents explicitly PROHIBIT contacting a borrower's family, friends, or employer for recovery purposes. This is a violation of privacy. You can file a complaint with the RBI if this happens."
              },
              {
                q: "What if the app is not on the Play Store anymore?",
                a: "If the app has been removed from the Play Store by Google or the Government, it is highly likely to be illegal. In such cases, checking for an RBI license is crucial. If there is no license, you may not be legally liable to pay high interest, but you should consult a legal expert before stopping payments to avoid complications."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none focus:outline-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                  <span className="text-lg pr-4">{i + 1}. {faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                    <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
           <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans assists with settlement of loans from RBI-registered entities. We do not facilitate payments to illegal/banned apps and advise strict legal action against them.</p>
          </div>

        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Trapped by Apps?</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Whether it's KreditBee or a Chinese app, we know how to handle them.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Get Help Now
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60"> Confidential & Secure</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Services</h3>
              <ul className="space-y-4 text-sm font-bold">
                 <li>
                  <Link href="/services/nbfc-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    NBFC Settlement
                  </Link>
                </li>
                <li>
                  <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Credit Card Debt
                  </Link>
                </li>
                 <li>
                  <Link href="/services/anti-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Stop Harassment
                  </Link>
                </li>
              </ul>
            </div>
            
             <div className="bg-red-50 p-6 rounded-2xl border border-red-100 shadow-sm text-center">
                <FontAwesomeIcon icon={faShieldHalved} className="text-4xl text-red-600 mb-4 w-12 h-12" />
                <h3 className="font-bold text-red-900 mb-2">Cyber Crime Help</h3>
                <p className="text-sm text-red-800 opacity-80">Guidance on filing reporting illegal loan apps.</p>
             </div>
          </div>
        </aside>

      </div>
      </main>
    </div>
  );
}
