import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTriangleExclamation, 
  faChartLine, 
  faCalculator, 
  faGavel, 
  faUserInjured, 
  faCheck, 
  faBrain, 
  faStar, 
  faCreditCard, 
  faMoneyBillWave, 
  faHandHoldingDollar, 
  faShieldHalved, 
  faScaleBalanced, 
  faFileContract, 
  faPhoneSlash,
  faUserTie,
  faBriefcase,
  faBuildingColumns,
  faBookOpen,
  faScaleUnbalancedFlip,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";


export const metadata: Metadata = {
  title: "NBFC Loan Settlement Services India | Bajaj, Tata Capital, Aditya Birla Loan Settlement",
  description: "Specialized debt settlement services for NBFC loans. Stop harassment from Bajaj Finance, Tata Capital, and more. Legal arbitration defense and negotiation for up to 50% waiver.",
  alternates: {
    canonical: "https://settleloans.in/services/nbfc-loan-settlement",
  },
  keywords: [
    "nbfc loan settlement", 
    "bajaj finance loan settlement process", 
    "tata capital personal loan settlement", 
    "aditya birla finance settlement letter", 
    "arbitration defense for nbfc loans", 
    "stop recovery harassment nbfc", 
    "supreme court judgment on recovery agents", 
    "rbi fair practices code nbfc recovery", 
    "how to settle nbfc personal loan", 
    "nbfc debt relief india", 
    "hdb financial services settlement", 
    "mahindra finance loan settlement", 
    "shriram finance settlement process"
  ]
};

export default function NBFCSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
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
            "name": "Services",
            "item": "https://settleloans.in/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "NBFC Loan Settlement",
            "item": "https://settleloans.in/services/nbfc-loan-settlement"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "NBFC Loan Settlement Services",
        "description": "Specialized legal and financial negotiation service for settling unsecured personal loans from Non-Banking Financial Companies (NBFCs) like Bajaj, Tata Capital, Aditya Birla, etc.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "NBFC Debt Relief Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "NBFC Loan Negotiation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Arbitration Defense"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Recovery Agent Harassment Protection"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "950"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Kumar" },
            "datePublished": "2024-02-15",
            "reviewBody": "I had a Bajaj Finance personal loan of 5 Lakhs. Due to job loss, I defaulted. The agents were very aggressive. SettleLoans stepped in, handled the heavy harassment, and settled the loan for 2.2 Lakhs. Highly recommended.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Suresh Patel" },
             "datePublished": "2024-03-10",
             "reviewBody": "Aditya Birla Finance agents were calling my relatives. SettleLoans legal team sent a notice and the calls stopped. We settled for 45% of the outstanding.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I settle a personal loan with an NBFC like Bajaj or Tata Capital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. NBFCs (Non-Banking Financial Companies) like Bajaj Finserv, Tata Capital, Aditya Birla Finance, and others are regulated by the RBI and have provisions for 'One Time Settlement' (OTS). If you are in genuine financial distress (job loss, medical emergency), they would rather recover a partial amount than zero. We help you negotiate this legally."
            }
          },
          {
            "@type": "Question",
            "name": "Is settling with an NBFC different from a bank?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. NBFCs often operate with higher risk appetites and higher interest rates. They are generally faster to initiate legal action, such as Arbitration, sometimes within 3-4 months of default. However, their decision-making for settlement is also faster than PSU banks. Our strategy for NBFC settlement focuses heavily on legal defense against these arbitration clauses while simultaneously negotiating the financial terms."
            }
          },
          {
            "@type": "Question",
            "name": "Will an NBFC sue me for non-payment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NBFCs commonly initiate Arbitration proceedings or file Section 25 (Payment and Settlement Systems Act) cases for bounced ECS/NACH mandates. While jail time is extremely rare for unsecured loans, ignoring these legal notices can lead to 'Ex-Parte' awards against you. We handle these legal aspects for you, attending hearings and challenging jurisdiction as part of the settlement process."
            }
          },
          {
            "@type": "Question",
            "name": "How much discount can I get on my NBFC loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Settlement amounts typically range from 30% to 50% of the total outstanding. However, this depends on available funds, the age of the default (older NPAs get better deals), and your documented financial hardship. We aim to get you the maximum possible waiver on the high penal interest and penalties that NBFCs often charge."
            }
          },
          {
             "@type": "Question",
             "name": "Do NBFC recovery agents have the right to visit my home?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "They can visit to collect payment, but they cannot harass. Under RBI's Fair Practices Code and Supreme Court judgments, they must respect your privacy, visit only between 8 AM and 7 PM, and carry valid ID cards and authorization letters. They cannot enter your home without permission or threaten you. If they violate these rules, we can file a formal complaint with the RBI Ombudsman."
             }
          },
           {
             "@type": "Question",
             "name": "What happens to my CIBIL score after settling with an NBFC?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "The loan account will be marked as 'Settled' or 'Written Off'. This will drop your CIBIL score initially (often below 650). However, staying in default damages your score more every month. Settlement stops the bleeding. After 18-24 months of good financial behavior (using a secured card), your score can recover."
             }
          },
          {
             "@type": "Question",
             "name": "Can I get a loan from the same NBFC in the future?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "No. Once you settle a loan with a specific NBFC (e.g., Bajaj Finance), they will likely blacklist you internally. You will not get a loan from them or their group companies again. However, other lenders may lend to you in the future once your credit score improves (typically after 3-4 years)."
             }
          },
          {
             "@type": "Question",
             "name": "Do you handle settlements for mobile apps and small digital lenders?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes, many digital lenders (Loan Apps) are actually NBFCs or partners of NBFCs. We handle settlements for legitimate RBI-registered digital lenders (like KreditBee, MoneyView, etc.). We do not deal with illegal/Chinese loan apps that are not regulated, as those require cyber crime reporting, not settlement."
             }
          },
          {
             "@type": "Question",
             "name": "How long does the NBFC settlement process take?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "It typically takes 3 to 6 months. NBFCs are generally faster than PSU banks but can be stubborn about the final amount. We advise clients to be patient and let the loan ripen into NPA (90 days) to get the best offers."
             }
          },
          {
             "@type": "Question",
             "name": "What is the fee for your service?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "We charge a success fee based on the amount we save you. We also have a small engagement fee to start the legal protection process. Please contact our team for a free analysis of your specific case."
             }
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "NBFC Loan Settlement: The Complete Guide to Clearing Debt from Private Finance Companies",
        "description": "Detailed guide on how to settle loans with NBFCs in India like Bajaj, Tata Capital, and Aditya Birla. Learn about the process, legal rights, arbitration defense, and how to get up to 50% waiver.",
        "author": {
          "@type": "Person",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo1.png"
          }
        },
        "datePublished": "2024-01-24",
        "dateModified": "2024-01-24"
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

       {/* Hero Section - Professional & Clean */}
       <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Specialized Debt Relief
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            NBFC Loan <br className="hidden md:block"/> Settlement Services
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
             Struggling with Bajaj, Tata Capital, or Aditya Birla loans? We provide expert legal protection and negotiate settlements to cut your debt by up to <strong>50%</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Check Your Eligibility
            </Link>
             <Link href="#nbfc-process" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              How It Works
            </Link>
          </div>
        </div>
      </section>


      {/* Breadcrumb - Responsive Scroll */}
      <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
              <li>
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                NBFC Loan Settlement
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
              { id: "introduction", title: "Introduction" },
              { id: "nbfc-vs-banks", title: "NBFC vs Banks: Key Differences" },
              { id: "arbitration-trap", title: "The Arbitration Trap" },
              { id: "legal-rights", title: "Your Legal Rights & RBI" },
              { id: "recovery-agents", title: "Dealing with Recovery Agents" },
              { id: "ombudsman-scheme", title: "RBI Ombudsman Complaint" },
              { id: "nbfc-process", title: "5-Step Settlement Protocol" },
              { id: "documents-checklist", title: "Required Documents" },
              { id: "illegal-loan-apps", title: "Illegal Apps vs NBFCs" },
              { id: "provider-details", title: "Major NBFCs We Handle" },
              { id: "reviews", title: "Success Stories" },
              { id: "faqs", title: "Frequently Asked Questions" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">The Private Finance Debt Trap: Understanding NBFC Loans</h2>
            <p className="text-lg leading-relaxed mb-6">
              Non-Banking Financial Companies (NBFCs) have become the backbone of consumer lending in India. Giants like <strong>Bajaj Finance, Tata Capital, Aditya Birla Finance, Mahindra Finance, and HDB Financial Services</strong> have made getting a personal loan incredibly easy. With "pre-approved" offers sent via SMS and minimal documentation, millions often take these loans for emergencies, lifestyle needs, or to consolidate other debts.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              However, this ease comes at a hidden cost. NBFCs typically charge interest rates ranging from <strong>18% to 36% per annum</strong>, which is significantly higher than traditional banks. When you miss a payment, the picture changes drastically. The "friendly" lender often transforms into a relentless recovery machine. Penal interest piles up, legal notices for Arbitration are sent out in record time, and recovery agents begin their aggressive pursuit.
            </p>
            <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
              If you find yourself in this situation, whether jobless, facing a medical crisis, or simply overwhelmed by high-interest EMI debt, know that <strong>Settlement is a legal and viable exit strategy</strong>. At SettleLoans, we specialize in navigating the unique, fast-paced recovery systems of NBFCs to protect your rights and negotiate a dignified exit from your debt obligations.
            </p>
          </section>

           {/* NBFC vs Banks Details */}
           <section id="nbfc-vs-banks" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-8">
              NBFC vs Bank Settlement: Critical Differences
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               Many borrowers make the mistake of treating an NBFC loan like a PSU bank loan. This can be a fatal error. NBFCs are structured differently, regulated slightly differently under the RBI Act, and their recovery timelines are much faster. Understanding these differences is key to a successful negotiation strategy.
            </p>
            
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-[var(--color-border)] rounded-lg shadow-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-[var(--color-border)]">
                    <th className="py-4 px-6 text-left font-semibold text-[var(--color-text-hero)]">Feature</th>
                    <th className="py-4 px-6 text-left font-semibold text-[var(--color-primary)]">Thinking Like a Bank</th>
                    <th className="py-4 px-6 text-left font-semibold text-orange-700">Thinking Like an NBFC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)]">
                  <tr>
                    <td className="py-4 px-6 font-medium text-[var(--color-text-hero)]">Decision Speed</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Slow (Weeks/Months). Files move through committees.</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Fast (Days). Decisions can happen in 48-72 hours.</td>
                  </tr>
                   <tr>
                    <td className="py-4 px-6 font-medium text-[var(--color-text-hero)]">Settlement Waiver</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Rigid. Usually capped at 50-60% waiver.</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">flexible. Can go higher due to high margins.</td>
                  </tr>
                   <tr>
                    <td className="py-4 px-6 font-medium text-[var(--color-text-hero)]">Legal approach</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">DRT / SARFAESI (for secured). Slow legal process.</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Arbitration. Very fast dispute resolution mechanism.</td>
                  </tr>
                   <tr>
                    <td className="py-4 px-6 font-medium text-[var(--color-text-hero)]">Recovery Style</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Procedural & Bureaucratic.</td>
                    <td className="py-4 px-6 text-[var(--color-text-body)]">Aggressive & Target-Driven.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-black text-[var(--color-primary)] mb-4 flex items-center">
                        <FontAwesomeIcon icon={faBuildingColumns} className="mr-3 w-12 h-12" /> Traditional Banks
                    </h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] text-sm">
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Slower Process:</span> Legal action usually starts after 12+ months of default.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Rigid Hierarchy:</span> Settlement approval goes through multiple committees.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">SARFAESI Access:</span> Stronger on secured loans, slower on unsecured legalities.</li>
                        <li className="flex items-start"><span className="text-red-500 mr-2 font-bold">✗</span> <span className="font-semibold">Less Flexibility:</span> Often stick to 50-60% waiver caps strictly.</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[var(--color-border)] shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 rounded-bl-full -mr-10 -mt-10"></div>
                     <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center relative z-10">
                        <FontAwesomeIcon icon={faBriefcase} className="mr-3 w-12 h-12" /> NBFCs (Private Finance)
                    </h3>
                    <ul className="space-y-3 text-[var(--color-text-body)] relative z-10 text-sm">
                        <li className="flex items-start"><span className="text-orange-500 mr-2 font-bold">!</span> <span className="font-semibold">Rapid Arbitration:</span> Often trigger arbitration clauses within 90-120 days.</li>
                        <li className="flex items-start"><span className="text-orange-500 mr-2 font-bold">!</span> <span className="font-semibold">Aggressive Recovery:</span> Third-party agents are incentivized heavily for quick collection.</li>
                        <li className="flex items-start"><span className="text-orange-500 mr-2 font-bold">!</span> <span className="font-semibold">High Penalties:</span> Bounce charges and late fees can double the debt in a year.</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2 font-bold">✓</span> <span className="font-semibold">Business Pragmatism:</span> More willing to settle quickly to clean balance sheets.</li>
                    </ul>
                </div>
            </div>
            <p className="text-lg leading-relaxed">
                **The Speed Factor:** With an NBFC, you do not have the luxury of time. Ignoring notices can lead to an "Ex-Parte" Award against you very quickly. SettleLoans intervenes immediately to check this speed, ensuring due process is followed.
            </p>
          </section>

          {/* Arbitration Deep Dive */}
          <section id="arbitration-trap" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-8 leading-tight">
              The "Arbitration" Trap: How NBFCs Use It
            </h2>
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm mb-8">
                <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 mr-4">
                        <FontAwesomeIcon icon={faGavel} className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-2">What is Arbitration?</h3>
                         <p className="text-[var(--color-text-body)] leading-relaxed">
                            NBFC loan agreements usually have a "Dispute Resolution" clause allowing them to appoint a "Sole Arbitrator" to resolve payment issues. When you default, they trigger this. An arbitrator is a private judge (often a lawyer) appointed to pass a judgment.
                        </p>
                    </div>
                </div>
                 <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-4">
                        <FontAwesomeIcon icon={faTriangleExclamation} className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-2">The Hidden Danger</h3>
                         <p className="text-[var(--color-text-body)] leading-relaxed">
                            The danger is that these arbitrations often happen in distant cities (e.g., Delhi or Chennai) regardless of where you live. NBFCs count on you <strong>not showing up</strong> because of the distance or lack of legal knowledge. If you don't appear, the arbitrator passes an 'Ex-Parte Award' (one-sided judgment) ordering you to pay the full amount plus heavy interest. This Award has the power of a Civil Court Decree and can be executed to freeze bank accounts.
                        </p>
                    </div>
                </div>
                
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4">
                        <FontAwesomeIcon icon={faShieldHalved} className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-2">How SettleLoans Defends You</h3>
                         <p className="text-[var(--color-text-body)] leading-relaxed">
                            We shatter this strategy by simply <strong>showing up</strong> (digitally or physically).
                            <br/><br/>
                            1. <strong>We Challenge Jurisdiction:</strong> We legally contest why a case is filed in a city you don't reside in.
                            <br/>
                            2. <strong>We Represent You:</strong> Our legal team attends the virtual hearings. We present your financial hardship evidence and dispute the inflated interest calculations.
                            <br/>
                            3. <strong>We Force Negotiation:</strong> Once the arbitrator sees you are represented and have genuine hardship, the "easy win" disappears. The NBFC is then forced to come to the table and negotiate a settlement.
                        </p>
                    </div>
                </div>
            </div>
          </section>

          {/* Legal Rights Section */}
          <section id="legal-rights" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-8">
               Your Legal Armour: RBI Guidelines & Supreme Court
            </h2>
            <p className="mb-6 leading-relaxed">
               The fear of recovery agents is the biggest weapon lenders have. But in India, you are protected by strong laws. The <strong>RBI Fair Practices Code</strong> and various <strong>Supreme Court Judgments</strong> (like <em>ICICI Bank vs. Shanti Devi Sharma</em>) have drawn clear red lines that NBFCs strictly cannot cross.
            </p>
            
            <div className="space-y-6">
               <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-emerald-900 mb-2 flex items-center">
                     <FontAwesomeIcon icon={faShieldHalved} className="mr-3 w-12 h-12" /> No Harassment Allowed
                  </h3>
                   <p className="text-emerald-800 text-sm leading-relaxed">
                     Recovery agents cannot shout, abuse, use foul language, or threaten violence. They cannot contact your friends, family, or employer to "shame" you. Any such act is actionable under law. The Supreme Court has explicitly stated that banks cannot use "musclemen" for recovery.
                  </p>
               </div>
               
               <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center">
                     <FontAwesomeIcon icon={faPhoneSlash} className="mr-3 w-12 h-12" /> Privacy & Timing
                  </h3>
                   <p className="text-blue-800 text-sm leading-relaxed">
                     Agents can only contact you between <strong>08:00 AM and 07:00 PM</strong>. They cannot visit your home without notice and valid identification. They must respect your privacy and cannot create a scene in your neighborhood. Calls at odd hours or excessive frequency are a violation.
                  </p>
               </div>

                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-purple-900 mb-2 flex items-center">
                     <FontAwesomeIcon icon={faScaleBalanced} className="mr-3 w-12 h-12" /> Due Process in Recovery
                  </h3>
                   <p className="text-purple-800 text-sm leading-relaxed">
                     NBFCs must follow the due process of law. Seizure of assets (for secured loans) or recovery of dues must follow the legal route. They cannot bypass the law to intimidate borrowers.
                  </p>
               </div>
            </div>
          </section>

          {/* Dealing with Recovery Agents */}
           <section id="recovery-agents" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-8">
               Dealing with Recovery Agents
            </h2>
            <p className="mb-6 leading-relaxed">
               Recovery agents are third-party agencies hired by NBFCs. They are incentivized by commission, meaning the more they collect, the more they earn. This often leads to aggressive behavior. Here is how you should handle them:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                  <h3 className="font-black text-lg mb-3 text-[var(--color-primary)]">Do's</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-body)]">
                     <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Ask for their ID card and Authorization Letter from the NBFC.</li>
                     <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Record the conversation if they are abusive. This is vital evidence.</li>
                     <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Tell them firmly that you are in a settlement process and they should speak to your legal representative (SettleLoans).</li>
                     <li className="flex items-start"><span className="text-green-600 mr-2">✓</span> Report them to the police if they threaten physical harm.</li>
                  </ul>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                  <h3 className="font-black text-lg mb-3 text-red-600">Don'ts</h3>
                  <ul className="space-y-2 text-sm text-[var(--color-text-body)]">
                     <li className="flex items-start"><span className="text-red-600 mr-2">✗</span> Do not get into a shouting match or use abusive language back.</li>
                     <li className="flex items-start"><span className="text-red-600 mr-2">✗</span> Do not let them enter your home without your permission.</li>
                     <li className="flex items-start"><span className="text-red-600 mr-2">✗</span> Do not sign any document they force you to sign.</li>
                     <li className="flex items-start"><span className="text-red-600 mr-2">✗</span> Do not hand over cash to them without a valid receipt. Ideally, always pay directly to the loan account online.</li>
                  </ul>
               </div>
            </div>
           </section>

           {/* RBI Ombudsman Scheme */}
           <section id="ombudsman-scheme" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-8">
               Filing a Complaint with the RBI Ombudsman
            </h2>
            <p className="mb-6 leading-relaxed">
               If an NBFC fails to resolve your grievance or if you face harassment, the <strong>Reserve Bank - Integrated Ombudsman Scheme (RB-IOS)</strong> provides a powerful redressal mechanism. It allows you to file a complaint for "Deficiency in Service".
            </p>
             <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm mb-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">How to File a Complaint</h3>
                <ol className="list-decimal pl-5 space-y-4 text-[var(--color-text-body)]">
                   <li>
                      <strong>Step 1: Complain to the NBFC First</strong>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">You must first lodge a formal complaint with the NBFC's grievance redressal officer. Wait for 30 days for a response.</p>
                   </li>
                   <li>
                      <strong>Step 2: Escalated to RBI (CMS Portal)</strong>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">If the NBFC rejects your complaint or doesn't reply within 30 days, visit the RBI CMS Portal (cms.rbi.org.in). Click on "File a Complaint".</p>
                   </li>
                   <li>
                      <strong>Step 3: Provide Details & Evidence</strong>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Select the NBFC name, enter your details, and describe the harassment or issue. Upload screenshots, call recordings, or emails as evidence.</p>
                   </li>
                   <li>
                      <strong>Step 4: Tracking</strong>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">You will get a complaint checking number. The Ombudsman typically resolves issues faster than courts.</p>
                   </li>
                </ol>
             </div>
              <p className="text-sm text-[var(--color-text-muted)] italic">
                Note: SettleLoans assists its premium clients in drafting and filing these complaints effectively to ensure your voice is heard by the regulator.
              </p>
           </section>

           {/* Detailed Settlement Process */}
          <section id="nbfc-process" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mb-2 text-center">
              Our 5-Step NBFC Settlement Protocol
            </h2>
            <p className="text-center text-[var(--color-text-body)] mb-12 max-w-2xl mx-auto">
              From the moment you hire us to the moment you are debt-free, we handle the complexity.
            </p>
            
            <div className="grid gap-6">
              {[
                {
                  icon: faUserInjured,
                  step: "Step 1",
                  title: "Immediate Shielding",
                  desc: "We take over communication. We activate call forwarding to our team. We send legal notices to the NBFC regarding any harassment by their agents. This gives you immediate mental peace."
                },
                {
                  icon: faFileContract,
                  step: "Step 2",
                  title: "The NPA Waiting Period",
                  desc: "Settlement offers are best when the account is classified as NPA (Non-Performing Asset), usually after 90 days. Premature settlement offers are poor. We use this time to help you save funds."
                },
                {
                  icon: faScaleUnbalancedFlip,
                  step: "Step 3",
                  title: "Legal Defense & Strategy",
                  desc: "If they send a Legal Notice, Section 138 summons, or Arbitration notice, we handle it. We ensure you are not caught off guard by any legal maneuver."
                },
                {
                  icon: faHandshake,
                  step: "Step 4",
                  title: "Hard Negotiation",
                  desc: "We leverage your financial hardship documents (Termination letter, medical bills) to push for a waiver. We aim for 50-60% reduction on the total claim, waiving off all penal interest."
                },
                {
                  icon: faCheck,
                  step: "Step 5",
                  title: "Closure & Certification",
                  desc: "We scrutinize the 'Settlement Letter' for hidden clauses. Only after our approval do you pay the NBFC directly. We then ensure you get the 'No Dues Certificate' (NDC)."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow">
                   <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)]">
                         <FontAwesomeIcon icon={item.icon} className="w-12 h-12" />
                      </div>
                   </div>
                   <div>
                      <span className="text-sm font-black text-[var(--color-primary)] uppercase tracking-wider mb-1 block">{item.step}</span>
                      <h3 className="text-xl font-black text-[var(--color-text-hero)] mb-3">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </section>

           {/* Documents Checklist */}
           <section id="documents-checklist" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl font-black text-[var(--color-text-hero)] mb-8">
               Documents Required for Settlement
             </h2>
             <p className="mb-6 leading-relaxed">
               NBFCs are data-driven. To convince them to take a "haircut" (loss) on your loan, we need to prove that you genuinely cannot pay. The more evidence we have, the better the deal.
             </p>
             <div className="grid md:grid-cols-2 gap-4">
               <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 mb-3">Proof of Financial Hardship</h3>
                  <ul className="space-y-2 text-sm text-yellow-900">
                     <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span> Termination / Layoff Letter</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span> Salary Slips showing pay cuts</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span> Medical bills or hospital discharge summary</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span> Details of other debts (Loan Statements)</li>
                  </ul>
               </div>
               <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-800 mb-3">KYC & Loan Details</h3>
                  <ul className="space-y-2 text-sm text-blue-900">
                     <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> PAN Card & Aadhar Card</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Latest Loan Account Statement</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Copies of any Legal Notices received</li>
                     <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Correspondence email history with NBFC</li>
                  </ul>
               </div>
             </div>
           </section>

           {/* Illegal Loan Apps */}
           <section id="illegal-loan-apps" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl font-black text-[var(--color-text-hero)] mb-6">
               Note on Illegal Loan Apps
             </h2>
             <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
               <p className="text-red-900 font-medium mb-4">
                  There is a major difference between RBI-registered NBFCs and Illegal "Chinese" Loan Apps.
               </p>
               <p className="text-red-800 text-sm leading-relaxed mb-4">
                  <strong>Registered NBFCs:</strong> Have a valid license, report to CIBIL, and follow Indian laws (mostly). We act against them if they harass you.
                  <br/><br/>
                  <strong>Illegal Loan Apps:</strong> Operate without license, do not report to CIBIL, hack your phone contacts, and morph photos to blackmail.
               </p>
               <p className="text-red-900 font-bold">
                  We DOES NOT handle settlements for Illegal Loan Apps. These are cybercrimes. You should not pay them a single rupee and report them to the National Cyber Crime Portal (1930).
               </p>
             </div>
           </section>

          {/* Provider Specific Details */}
          <section id="provider-details" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl font-black text-[var(--color-text-hero)] mb-8">
               We Handle All Major NBFCs
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                   <h3 className="font-bold text-lg mb-2">Bajaj Finance Settlement</h3>
                   <p className="text-sm text-[var(--color-text-body)] mb-2">Known for very high volume of loans and quick arbitration filings. We have a dedicated strategy for handling Bajaj's specific legal notices and arbitration venues.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                   <h3 className="font-bold text-lg mb-2">Tata Capital Settlement</h3>
                   <p className="text-sm text-[var(--color-text-body)] mb-2">Tata Capital is more process-driven. Settlements often require deeper documentation of hardship but are generally fairer and more transparent once approved.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                   <h3 className="font-bold text-lg mb-2">Aditya Birla Finance</h3>
                   <p className="text-sm text-[var(--color-text-body)] mb-2">They often use digital courts/ODR platforms for arbitration. We handle the digital representation effectively to ensure your side is heard.</p>
                </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[var(--color-border)]">
                   <h3 className="font-bold text-lg mb-2">Others We Handle</h3>
                   <p className="text-sm text-[var(--color-text-body)] mb-2">HDB Financial, Mahindra Finance, Fullerton India (SMFG), L&T Finance, IDFC First (Consumer Durable), Home Credit, Dhani, KreditBee, and MoneyView.</p>
                </div>
             </div>
          </section>

          {/* Testimonials */}
          <section id="reviews" className="scroll-mt-32 text-center mb-16">
             <h2 className="text-3xl font-black text-[var(--color-text-hero)] mb-8">Success Stories</h2>
             <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">R</div>
                      <div>
                         <h4 className="font-bold">Rajesh Verma</h4>
                         <p className="text-xs text-[var(--color-text-muted)]">Settled Bajaj Finance Loan</p>
                      </div>
                   </div>
                   <p className="text-sm text-[var(--color-text-body)] italic">"I had a 5 Lakh loan. Lost my job. The calls were non-stop. SettleLoans stepped in and settled it for 2.1 Lakhs. The relief is indescribable."</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-600 mr-3">S</div>
                      <div>
                         <h4 className="font-bold">Sneha Gupta</h4>
                         <p className="text-xs text-[var(--color-text-muted)]">Settled Tata Capital Loan</p>
                      </div>
                   </div>
                   <p className="text-sm text-[var(--color-text-body)] italic">"They handled the arbitration notice so professionally. I didn't have to go to any court. Highly recommended for any woman facing harassment."</p>
                </div>
             </div>
          </section>

          {/* FAQs */}
          <h2 id="faqs" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[var(--color-text-hero)] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 not-prose mb-20">
            {[
              { 
                q: "What if the NBFC agent threatens to come to my office?", 
                a: "This is a violation of your privacy and the RBI Fair Practices Code. They cannot visit your workplace without specific permission if you are reachable on the phone. If they threaten to create a scene, we send a Cease & Desist notice immediately." 
              },
              { 
                q: "Can I settle if I have given post-dated cheques (PDC) or ACH mandates?", 
                a: "Yes. However, bounced cheques can attract Section 138 (Cheque Bounce) cases. If the NBFC has your cheques, settlement becomes more urgent. We prioritize retrieving these cheques or getting a formal confirmation of their destruction/return as part of the settlement agreement." 
              },
              { 
                q: "Do you help with illegal loan apps?", 
                a: "No. We only deal with RBI-registered entities. Illegal loan apps (often Chinese) engaging in blackmail (morphing photos, etc.) are a cybercrime issue. You should file a Cyber Cell complaint for those. We handle legitimate debt." 
              },
              { 
                q: "Will NBFC settlement affect my chances of getting a home loan later?", 
                a: "For the first 2-3 years, yes. Banks generally avoid lending to applicants with a recent settlement. However, if you have a co-applicant (spouse) with a good score, you can still get a home loan. Also, after 3-4 years of clean history, your eligibility restores." 
              },
              { 
                q: "Is One Time Settlement (OTS) guaranteed?", 
                a: "No company can 'guarantee' settlement as it involves a second party (the lender). However, in our experience, 95% of accounts eventually settle because it makes commercial sense for the NBFC. They prefer recovering 50% today over fighting a court case for 5 years." 
              },
              { 
                q: "Can I pay the settlement amount in EMI?", 
                a: "NBFCs rarely accept long EMI plans for settlements. They usually want the settlement amount in 1 shot or max 2-3 installments within 30 days. We advise clients to only start the negotiation when they have accumulated about 30-40% of the loan value in savings." 
              },
              { 
                q: "What documents do I need to start?", 
                a: "We need your Loan Account Number, latest Statement of Account, IDs (Aadhar/PAN), and any legal notices you have received. We also need documents proving your financial hardship (Termination letter, Medical records) to build a strong case." 
              },
               { 
                q: "Is it harder to settle with an NBFC than a bank?", 
                a: "It can be 'faster' and 'louder'. NBFCs are more aggressive with calls and arbitration. However, they are also more pragmatic. Banks have slow bureaucracy; NBFCs have quick decision-making. If you can handle the initial noise (which we help with), NBFC settlements can happen faster." 
              },
              { 
                q: "Can I do this myself?", 
                a: "You can, but it's like representing yourself in court. NBFCs have professional recovery teams trained to pressure you. Without legal knowledge of arbitration and RBI guidelines, you might get bullied into paying more. We level the playing field." 
              },
               { 
                q: "What is an Ex-Parte Award?", 
                a: "An Ex-Parte Award is a judgment passed by an arbitrator when one party (you) fails to attend the hearing. It is legally binding and can be enforced like a court order. This is why you must never ignore an Arbitration Notice." 
              },
               { 
                q: "What is the difference between Write-off and Waive-off?", 
                a: "A 'Write-off' is an accounting term where the bank marks the loan as a loss, but you still owe the money legally. A 'Waiver' or 'Settlement' means the bank forgives the remaining debt, and you no longer owe it. Always aim for a formal Settlement." 
              },
               { 
                q: "Can recovering agents seize my property?", 
                a: "For unsecured personal loans, NO. They cannot seize your household items or property without a court order, which is extremely rare for small loans. For secured loans (Vehicle/Home), they must follow the SARFAESI ACT or court procedures." 
              },
               { 
                q: "How do I check if a lender is a genuine NBFC?", 
                a: "You can check the list of registered NBFCs on the official RBI website. If their name is not there, they might be an illegal lender." 
              },
               { 
                q: "What if I have multiple loans with the same NBFC?", 
                a: "It is often better to settle them all together. The NBFC might offer a 'portfolio settlement' which can get you a better overall discount." 
              },
              { 
                q: "What is the fee for your service?", 
                a: "We charge a success fee based on the amount we save you. We also have a small engagement fee to start the legal protection process. Please contact our team for a free analysis of your specific case." 
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-[var(--color-border)] rounded-xl overflow-hidden hover:shadow-md transition-all">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[var(--color-text-hero)] list-none focus:outline-none bg-[var(--color-background-light)] group-open:bg-[var(--color-background-light-hover)]">
                  <span className="text-lg pr-4">{i + 1}. {faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-[var(--color-text-body)] opacity-90 leading-relaxed border-t border-[var(--color-border)] pt-4 mt-0 bg-white">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
           <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans is a debt consultancy service. We facilitate negotiations between borrowers and lenders. We do not provide loans. Settlement of debt may have tax implications and will affect your credit score.</p>
          </div>

          {/* Mobile CTA (Visible only on mobile) */}
          <div className="lg:hidden mt-16 mb-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[var(--color-primary)]/20">
              <div className="bg-[var(--color-primary)] p-6 text-center text-white">
                <h3 className="text-2xl font-black mb-2">NBFC Harassing You?</h3>
                <p className="opacity-90 text-sm">Get a free analysis of your Bajaj, Tata, or HDB loan case today.</p>
              </div>
              <div className="p-8 text-center text-[var(--color-background-dark)]">
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                  Stop the Calls Now
                </Link>
                <div className="mt-6 flex items-center justify-center gap-4 text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    100% Confidential
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Legal Shield
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden border border-[var(--color-border)] group">
               <div className="bg-[var(--color-primary)] p-4 text-center">
                 <h3 className="text-lg font-bold text-white">NBFC Harassing You?</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[var(--color-text-body)] opacity-80 leading-relaxed">
                  Get a free analysis of your Bajaj, Tata, or HDB loan case today.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[var(--color-primary)] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[var(--color-primary-hover)] transition-all shadow-md group-hover:shadow-lg">
                  Stop the Calls
                </Link>
                <p className="mt-4 text-xs text-[var(--color-text-muted)]"> 100% Confidential</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Services</h3>
              <ul className="space-y-4 text-sm font-bold">
                <li>
                  <Link href="/services/personal-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Personal Loan Settlement
                  </Link>
                </li>
                <li>
                  <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Credit Card Settlement
                  </Link>
                </li>
                 <li>
                  <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Harassment Protection
                  </Link>
                </li>
              </ul>
            </div>
            
             <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm text-center">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-4xl text-blue-600 mb-4 w-12 h-12" />
                <h3 className="font-bold text-blue-900 mb-2">Legal Shield</h3>
                <p className="text-sm text-blue-800 opacity-80">We handle Section 138 & Arbitration notices.</p>
             </div>

             <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm text-center">
                 <div className="flex justify-center mb-4">
                     <div className="flex text-yellow-500">
                         <FontAwesomeIcon icon={faStar} />
                         <FontAwesomeIcon icon={faStar} />
                         <FontAwesomeIcon icon={faStar} />
                         <FontAwesomeIcon icon={faStar} />
                         <FontAwesomeIcon icon={faStar} />
                     </div>
                 </div>
                <h3 className="font-bold text-green-900 mb-2">4.8/5 Rating</h3>
                <p className="text-sm text-green-800 opacity-80">Trusted by 1200+ clients across India.</p>
             </div>
          </div>
        </aside>

      </div>
      </main>
    </div>
  );
}
