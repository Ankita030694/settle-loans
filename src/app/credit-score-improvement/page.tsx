import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowTrendUp, 
  faChartPie, 
  faFileContract, 
  faCreditCard, 
  faScaleBalanced, 
  faClock, 
  faTriangleExclamation, 
  faShieldHalved, 
  faCheck, 
  faBan, 
  faEnvelopeOpenText,
  faBuildingColumns,
  faUnlockKeyhole,
  faRotateRight,
  faHandshake
} from "@fortawesome/free-solid-svg-icons";


export const metadata: Metadata = {
  title: "Credit Score Improvement Services | Remove 'Settled' Status & Boost CIBIL",
  description: "Struggling with a low CIBIL score? Learn how to remove 'Settled' status, dispute errors, and use secured cards to rebuild your credit score above 750+. Expert legal guidance.",
  alternates: {
    canonical: "https://settleloans.in/credit-score-improvement",
  },
  keywords: [
    "improve cibil score india", 
    "remove settled status from cibil", 
    "credit repair services india", 
    "how to increase cibil score from 600 to 750", 
    "cibil dispute resolution process", 
    "secured credit card for cibil repair", 
    "idfc wow credit card benefits", 
    "sbi unnati secured card", 
    "fix cibil report errors", 
    "credit score builder loans"
  ]
};

export default function CreditScoreImprovementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/credit-score-improvement#webpage",
        "url": "https://settleloans.in/credit-score-improvement",
        "name": "Credit Score Improvement Services | Remove 'Settled' Status & Boost CIBIL",
        "description": "Struggling with a low CIBIL score? Learn how to remove 'Settled' status, dispute errors, and use secured cards to rebuild your credit score above 750+. Expert legal guidance.",
        "breadcrumb": { "@id": "https://settleloans.in/credit-score-improvement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/credit-score-improvement#breadcrumb",
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
            "name": "Credit Score Improvement",
            "item": "https://settleloans.in/credit-score-improvement"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/credit-score-improvement#service",
        "name": "Credit Score Repair Services",
        "description": "Comprehensive credit repair and score improvement services. We help removing 'Settled' tags, disputing wrong entries, and planning debt consolidation to boost CIBIL.",
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
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "CIBIL Repair Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Settled Status Removal"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CIBIL Dispute Filing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Credit Builder Planning"
              }
            }
          ]
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Deshmukh" },
            "datePublished": "2024-03-01",
            "reviewBody": "My CIBIL was stuck at 620 because of an old 'Settled' credit card. SettleLoans helped me negotiate with the bank to pay the difference and get an NOC. Within 3 months of submitting the NOC to CIBIL, my status changed to 'Closed' and score jumped to 740.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Sethi" },
            "datePublished": "2024-02-15",
            "reviewBody": "I had 3 wrong entries in my report belonging to someone else! I tried mailing CIBIL but got no response. SettleLoans filed a formal dispute and followed up. The entries were removed in 45 days.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/credit-score-improvement#article",
        "headline": "How to Improve CIBIL Score in India: The Ultimate Guide",
        "description": "A comprehensive 2024 guide on repairing your CIBIL score. Learn how to remove negative flags, manage credit utilization, and use credit builder tools effectively.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Credit Experts"
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/credit-score-improvement#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/credit-score-improvement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to improve CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Credit repair is not instant. It typically takes 6 to 12 months of consistent good behavior (timely payments, low utilization) to see a significant rise. However, correcting errors (disputes) can boost your score in 30-45 days."
            }
          },
          {
            "@type": "Question",
            "name": "Can I remove the 'Settled' status from my CIBIL?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A 'Settled' status means you paid less than the due amount. To remove it, you must approach the lender, pay the 'differental amount' (the amount that was originally waived), and obtain a 'No Dues Certificate'. Once this is submitted to CIBIL, the status changes to 'Closed', boosting your score."
            }
          },
          {
            "@type": "Question",
            "name": "What is the fastest way to build credit history from scratch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fastest way is to get a 'Secured Credit Card' against a Fixed Deposit (e.g., IDFC WOW, SBI Unnati, OneCard). Use it for small expenses and pay the FULL bill on time. This builds a positive history in 6 months."
            }
          },
          {
            "@type": "Question",
            "name": "Does checking my own CIBIL score lower it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. When you check your own score (via CIBIL website, GPay, or banking apps), it is a 'Soft Inquiry'. Soft inquiries do NOT affect your score. Only when a bank checks your score for a loan application ('Hard Inquiry'), it can drop by a few points."
            }
          },
          {
            "@type": "Question",
            "name": "I paid my dues but CIBIL still shows outstanding. What to do?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks verify data with CIBIL usually once every 30-45 days. If it has been longer, you need to file a 'Dispute' on the CIBIL website using the 'Control Number' from your report. You can also mail the NOC to CIBIL directly."
            }
          },
          {
            "@type": "Question",
            "name": "How much CIBIL score is needed for a Home Loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most banks require a score of 750+ for the best interest rates. If your score is 650-700, you might get a loan but at a higher interest rate. Below 650, rejection probability is high."
            }
          },
          {
            "@type": "Question",
            "name": "Can being an authorized user on a family member's card help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In India, the concept of 'Authorized User' affecting the user's CIBIL is less prevalent than in the US. The primary cardholder usually bears the credit responsibility. It is better to get your own secured card to build individual history."
            }
          },
          {
            "@type": "Question",
            "name": "Will closing old credit cards hurt my score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, it can. Closing an old card shortens your 'Credit Age' and reduces your 'Total Available Credit', spiking your utilization ratio. Unless the card has high annual fees, it is better to keep it open and use it occasionally."
            }
          },
          {
            "@type": "Question",
            "name": "What is a 'Good' Credit Utilization Ratio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The golden rule is 30%. If your limit is ₹1 Lakh, try not to spend more than ₹30,000. Consistently using >50% of your limit signals 'Credit Hungriness' to lenders and lowers your score."
            }
          },
          {
            "@type": "Question",
            "name": "Do you charge for removing 'Settled' status?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We charge a consultancy fee to guide you through the negotiation with the bank to convert 'Settled' to 'Closed'. You will have to pay the bank the outstanding dues directly. We ensure the bank gives you the correct paperwork (NOC) and updates CIBIL promptly."
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
       <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/10 text-green-500 text-sm font-bold mb-6 tracking-wider uppercase">
            Credit Wellness
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Improve Your <br className="hidden md:block"/> Credit Score (CIBIL)
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
             Is a "Settled" status or low score blocking your loan approval? We help you <strong>repair your credit history</strong>, dispute errors, and rebuild your financial reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Analyze My Report
            </Link>
             <Link href="#factors" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              Understanding CIBIL
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
                <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                Credit Score Improvement
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
              { id: "introduction", title: "Why Score Matters" },
              { id: "score-factors", title: "CIBIL Components" },
              { id: "score-ranges", title: "Score Ranges Decode" },
              { id: "read-report", title: "Read Your Report" },
              { id: "myths", title: "Common Myths" },
              { id: "remove-settled", title: "Remove 'Settled' Status" },
              { id: "mistakes-settlement", title: "Settlement Mistakes" },
              { id: "dispute-process", title: "Dispute Errors" },
              { id: "rejection-reasons", title: "Why Loans Reject" },
              { id: "golden-rules", title: "Golden Rules (800+)" },
              { id: "credit-building", title: "Building from Scratch" },
              { id: "secured-cards", title: "Secured Credit Cards" },
              { id: "commercial-cibil", title: "Business CIBIL" },
              { id: "dos-and-donts", title: "Dos and Don'ts" },
              { id: "templates", title: "Dispute Templates" },
              { id: "contact-bureaus", title: "Contact Bureaus" },
              { id: "reviews", title: "Success Stories" },
              { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">The Power of 750+: Unlocking Financial Freedom</h2>
            <p className="text-lg leading-relaxed mb-6">
              In India, your CIBIL score is your financial identity card. Ranging from 300 to 900, this three-digit number decides whether you get a home loan at 8.5% or a personal loan at 18%—or if you get a loan at all.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Many Indians suffer from a low score due to past mistakes: a forgotten credit card bill, a dispute with a bank that led to a "Written Off" status, or simply lack of history (NH/NA). The good news? <strong>Your credit score is not permanent.</strong> With the right strategy, legal interventions for errors, and disciplined repayment, you can bounce back to 750+ within 6-12 months.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-sm text-blue-900 font-medium">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 w-5 h-5"/> 
                    <strong>Note:</strong> We do not "fix" scores by magic or illegal means. We help you use the official provisions of the CIBIL Dispute Resolution mechanism and RBI guidelines to clean up your valid history.
                </p>
            </div>
          </section>

           {/* Score Factors */}
           <section id="score-factors" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faChartPie} className="mr-4 w-12 h-12" /> What Makes Up Your Score?
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               To hack the system, you must understand the algorithm. FICO and CIBIL generally follow this weightage breakdown:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
               <div className="space-y-6">
                   <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                       <h3 className="font-black text-lg text-[#2E2E2E] mb-2 flex justify-between">
                           <span>1. Payment History</span>
                           <span className="text-[#1F5EFF]">35%</span>
                       </h3>
                       <p className="text-sm text-gray-600">The most critical factor. A single 30-day late payment can drop your score by 50-80 points. Consistency is key.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                       <h3 className="font-black text-lg text-[#2E2E2E] mb-2 flex justify-between">
                           <span>2. Credit Utilization</span>
                           <span className="text-[#1F5EFF]">30%</span>
                       </h3>
                       <p className="text-sm text-gray-600">How much limit you use. If you have a 1 Lakh limit and spend 90k, you are a "high risk" borrower. Keep it under 30%.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                       <h3 className="font-black text-lg text-[#2E2E2E] mb-2 flex justify-between">
                           <span>3. Credit Age</span>
                           <span className="text-[#1F5EFF]">15%</span>
                       </h3>
                       <p className="text-sm text-gray-600">Older is better. A 5-year-old credit card with good history is gold. Never close your oldest card.</p>
                   </div>
               </div>
               <div className="space-y-6">
                   <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                       <h3 className="font-black text-lg text-[#2E2E2E] mb-2 flex justify-between">
                           <span>4. Credit Mix</span>
                           <span className="text-[#1F5EFF]">10%</span>
                       </h3>
                       <p className="text-sm text-gray-600">Lenders love balance. Having a mix of Secured (Home/Auto Loan) and Unsecured (Credit Card) loans is better than just credit cards.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                       <h3 className="font-black text-lg text-[#2E2E2E] mb-2 flex justify-between">
                           <span>5. Recent Enquiries</span>
                           <span className="text-[#1F5EFF]">10%</span>
                       </h3>
                       <p className="text-sm text-gray-600">Every time you apply for a loan, a "Hard Inquiry" is hit. Too many inquiries in a short time makes you look desperate.</p>
                   </div>
               </div>
            </div>
          </section>

           {/* NEW SECTION: Understanding Score Ranges */}
           <section id="score-ranges" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faScaleBalanced} className="mr-4 w-12 h-12" /> Decoding the Score: What do the Numbers Mean?
             </h2>
             <div className="overflow-x-auto">
               <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-[#DEDEDE] shadow-sm rounded-lg overflow-hidden">
                 <thead className="text-xs text-white uppercase bg-[#2E2E2E]">
                   <tr>
                     <th className="px-6 py-3">Score Range</th>
                     <th className="px-6 py-3">Rating</th>
                     <th className="px-6 py-3">Loan Probability</th>
                     <th className="px-6 py-3">Interest Rate Impact</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-200">
                   <tr className="bg-red-50">
                     <td className="px-6 py-4 font-bold">300 - 549</td>
                     <td className="px-6 py-4 text-red-700 font-bold">Poor</td>
                     <td className="px-6 py-4">Extremely Low. Reject.</td>
                   </tr>
                   <tr className="bg-orange-50">
                     <td className="px-6 py-4 font-bold">550 - 649</td>
                     <td className="px-6 py-4 text-orange-700 font-bold">Average</td>
                     <td className="px-6 py-4">Low. Possible with high collateral.</td>
                     <td className="px-6 py-4">Very High (18% - 24%)</td>
                   </tr>
                   <tr className="bg-yellow-50">
                     <td className="px-6 py-4 font-bold">650 - 749</td>
                     <td className="px-6 py-4 text-yellow-700 font-bold">Good</td>
                     <td className="px-6 py-4">Moderate. Verification required.</td>
                     <td className="px-6 py-4">Standard (11% - 16%)</td>
                   </tr>
                   <tr className="bg-green-50">
                     <td className="px-6 py-4 font-bold">750 - 900</td>
                     <td className="px-6 py-4 text-green-700 font-bold">Excellent</td>
                     <td className="px-6 py-4">Very High. Instant Approvals.</td>
                     <td className="px-6 py-4">Lowest (8.3% - 10.5%)</td>
                   </tr>
                 </tbody>
               </table>
             </div>
             <p className="mt-4 text-sm text-gray-500 italic">
               *Note: Valid for CIBIL TransUnion. Other bureaus (Experian, Crif) might have slightly different scales.
             </p>
           </section>

           {/* NEW SECTION: How to Read Report */}
           <section id="read-report" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faFileContract} className="mr-4 w-12 h-12" /> How to Read Your CIBIL Report
             </h2>
             <p className="mb-6 leading-relaxed">
               A CIBIL report is more than just a number. It is a dossier of your financial life. Here is how to decode the 3 most critical sections:
             </p>
             <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 pl-4">1. Accounts Information (The Meat)</h3>
                    <p className="text-gray-600 pl-4 mb-3">This contains details of all your loans and credit cards.</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 pl-4 space-y-1">
                        <li><strong>Date Opened:</strong> When you took the loan.</li>
                        <li><strong>Current Balance:</strong> What you currently owe.</li>
                        <li><strong>Status:</strong> Look for "STD" (Standard). If you see "SMA", "SUB", or "DBT", take action immediately.</li>
                        <li><strong>DPD (Days Past Due):</strong> Should be "000" or "*". If it shows "030", it means you were 30 days late.</li>
                    </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 pl-4">2. Enquiry Information (The Footprints)</h3>
                    <p className="text-gray-600 pl-4 mb-3">Lists who has checked your profile recently.</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 pl-4 space-y-1">
                        <li><strong>Enquiry Purpose:</strong> Personal Loan, Credit Card, Home Loan.</li>
                        <li><strong>Member Name:</strong> The bank that checked (e.g., HDFC BANK).</li>
                        <li><strong>Impact:</strong> Too many "Recent" enquiries (last 30 days) is a huge red flag.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2 pl-4">3. Consumer Information</h3>
                    <p className="text-gray-600 pl-4 mb-3">Your personal data.</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 pl-4 space-y-1">
                        <li><strong>Address/Phone:</strong> Check for errors here. Sometimes a wrong address links you to a defaulter with a similar address!</li>
                        <li><strong>PAN/Aadhar:</strong> Ensure these are YOURS. Mismatched PANs are the #1 cause of mixed files.</li>
                    </ul>
                </div>
             </div>
           </section>

           {/* NEW SECTION: Myths Busted */}
           <section id="myths" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faUnlockKeyhole} className="mr-4 w-12 h-12" /> CIBIL Myths: Stop Believing These!
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
                 {[
                     { myth: "Checking my score reduces it.", truth: "False. Checking yourself is a 'Soft Pull'. It has ZERO impact." },
                     { myth: "Closing old cards boosts score.", truth: "False. It reduces your credit age and increases utilization. Keep them open!" },
                     { myth: "Paying utility bills helps CIBIL.", truth: "False. Electricity/Phone bills are NOT reported to CIBIL in India (unlike the US)." },
                     { myth: "Income affects CIBIL score.", truth: "False. CIBIL only tracks DEBT. Your salary is irrelevant to the score (though relevant for loan approval)." },
                     { myth: "Debit card usage builds score.", truth: "False. Debit cards are your own money. They don't build credit history." },
                     { myth: "Guarantors are safe.", truth: "False. If the primary borrower defaults, YOU default. It hits your score equally." },
                     { myth: "Once settled, always ruined.", truth: "False. You can convert 'Settled' to 'Closed' by paying the difference." },
                     { myth: "Gold Loans don't show up.", truth: "False. Gold loans are secured loans and ARE reported to bureaus." }
                 ].map((item, i) => (
                     <div key={i} className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                         <p className="font-bold text-red-800 mb-1">Myth: "{item.myth}"</p>
                         <p className="text-sm text-gray-700"><strong>Fact:</strong> {item.truth}</p>
                     </div>
                 ))}
             </div>
           </section>

           {/* Remove Settled Status - KEY VALUE PROP */}
           <section id="remove-settled" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faRotateRight} className="mr-4 w-12 h-12" /> Removing the 'Settled' Tag
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
               <p className="font-bold text-yellow-900/80 mb-2">The 'Settled' Trap</p>
               <p className="text-yellow-800 text-sm">
                 You settled a 1 Lakh loan for 50k and thought it was over. But on your CIBIL, it is marked as <strong>"Settled"</strong>. To future lenders, this means <em>"He didn't pay the full amount."</em> This status acts like a red flag for 7 years.
               </p>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Rectification Process</h3>
            <p className="mb-6 text-gray-700">We help you upgrade this status from 'Settled' to 'Closed' (which is a positive status). Here is the workflow:</p>

            <div className="space-y-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mt-1">1</div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Approach the Lender</h4>
                        <p className="text-sm text-gray-600">We contact the original bank/NBFC. We offer to pay the "Principal Outstanding" or the "Waived Amount".</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mt-1">2</div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">Get the Deal in Writing</h4>
                        <p className="text-sm text-gray-600">The bank agrees to accept the payment and issues a letter stating they will update the status to "Closed" or "Post-Writeoff Settled" to "Closed".</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mt-1">3</div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">No Dues Certificate (NOC)</h4>
                        <p className="text-sm text-gray-600">Once you pay, we ensure you get the NDC. This is your proof of full repayment.</p>
                    </div>
                </div>
                 <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold mt-1">4</div>
                    <div className="ml-4">
                        <h4 className="font-bold text-gray-900">CIBIL Dispute</h4>
                        <p className="text-sm text-gray-600">We file a dispute with CIBIL attaching the NOC, forcing them to update the record. This typically bumps the score by 30-50 points instantly.</p>
                    </div>
                </div>
            </div>
          </section>

           {/* NEW SECTION: Mistakes During Settlement */}
           <section id="mistakes-settlement" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 flex items-center">
                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-4 w-12 h-12" /> Critical Settlement Mistakes to Avoid
             </h2>
             <p className="mb-6 leading-relaxed">
                Settlement is a double-edged sword. If done incorrectly, it can haunt you for years.
             </p>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">1. The "Verbal Promise" Trap</h4>
                    <p className="text-sm text-red-800">
                        Agents will say "Pay 20k now and we will close it". NEVER pay without an official settlement letter from the bank's official email ID. Verbal promises are worthless in court/CIBIL disputes.
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">2. Ignoring the "Write-Off"</h4>
                    <p className="text-sm text-red-800">
                        If your status says "Written Off", the bank has sold your debt to an ARC. You need to negotiate with the ARC, not the bank. Paying the bank now might not update the ARC's record.
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">3. Partial Payments</h4>
                    <p className="text-sm text-red-800">
                        Paying small random amounts (₹5000 here, ₹2000 there) resets the "Limitation Period" but doesn't close the loan. Either pay in full or settle in one shot.
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">4. Not Collecting NDC</h4>
                    <p className="text-sm text-red-800">
                        The No Dues Certificate (NDC) is the only proof you have. If you don't get it within 15 days of payment, fight for it immediately.
                    </p>
                </div>
             </div>
           </section>

           {/* Dispute Process */}
           <section id="dispute-process" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faBuildingColumns} className="mr-4 w-12 h-12" /> Filing CIBIL Disputes Correctly
            </h2>
            <p className="mb-6 leading-relaxed">
              Did you know 1 in 5 CIBIL reports contains errors? It could be a wrong name spelling, a loan that isn't yours (Identity Theft), or a payment marked "Late" when it was on time.
            </p>
            <div className="bg-white border p-6 rounded-xl shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4">Steps to Dispute (Online Method):</h4>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 text-sm">
                    <li>Log in to <strong>myscore.cibil.com</strong> (Consumer Login).</li>
                    <li>Go to the "Credit Report" section and verify your details.</li>
                    <li>Click on <strong>"Raise a Dispute"</strong>.</li>
                    <li>Select the specific account/section. (e.g., "Personal Loan - Account Number ending 1234").</li>
                    <li>Choose the reason: <em>"Account does not belong to me"</em> or <em>"Data reported is inaccurate"</em>.</li>
                    <li>Submit the dispute. CIBIL will generate a <strong>Dispute ID</strong>.</li>
                    <li>Wait for 30 Days. CIBIL will check with the bank. If the bank doesn't respond or confirms the error, the record is corrected.</li>
                </ol>
            </div>
          </section>



           {/* NEW SECTION: Why Loans Reject */}
           <section id="rejection-reasons" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                <FontAwesomeIcon icon={faBan} className="mr-4 w-12 h-12" /> "My Score is 750, Why Was I Rejected?"
             </h2>
             <p className="mb-6 leading-relaxed">
                 A good score is necessary but not sufficient. Banks use internal policy checks that go beyond CIBIL.
             </p>
             <div className="space-y-6">
                 <div className="flex items-start">
                     <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">1</div>
                     <div className="ml-6">
                         <h4 className="text-xl font-bold text-gray-900">FOIR (Fixed Obligation to Income Ratio)</h4>
                         <p className="text-gray-600 mt-1">
                             If your current EMIs consume more than 50% of your monthly salary, banks will reject you even with an 800 score. They fear you can't afford another EMI.
                         </p>
                     </div>
                 </div>
                 <div className="flex items-start">
                     <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">2</div>
                     <div className="ml-6">
                         <h4 className="text-xl font-bold text-gray-900">Employer Category</h4>
                         <p className="text-gray-600 mt-1">
                             Banks categorize companies into Cat A, B, C, and Unlisted. If you work for a small unknown startup (Unlisted), you might face rejection or higher rates compared to an Infosys/TCS employee.
                         </p>
                     </div>
                 </div>
                 <div className="flex items-start">
                     <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">3</div>
                     <div className="ml-6">
                         <h4 className="text-xl font-bold text-gray-900">Recent "Bounce" History</h4>
                         <p className="text-gray-600 mt-1">
                             CIBIL shows your repayment track. If you have "XXX" or frequent ECS bounces in the last 3 months, it signals cash flow issues.
                         </p>
                     </div>
                 </div>
                 <div className="flex items-start">
                     <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">4</div>
                     <div className="ml-6">
                         <h4 className="text-xl font-bold text-gray-900">Address Match / Negative Area</h4>
                         <p className="text-gray-600 mt-1">
                             Some pin codes deemed "Negative Areas" (high default prevalence) are blacklisted by banks. Also, if your current address doesn't match your Aadhaar, KYC fails.
                         </p>
                     </div>
                 </div>
             </div>
           </section>

           {/* NEW SECTION: Golden Rules */}
           <section id="golden-rules" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                <FontAwesomeIcon icon={faCheck} className="mr-4 w-12 h-12" /> The 3 Golden Rules for an 800+ Score
             </h2>
             <div className="bg-[#2E2E2E] text-[#DEDEDE] rounded-2xl p-8 shadow-lg">
                 <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/20">
                     <div className="text-center md:text-left pt-4 md:pt-0">
                         <h3 className="text-2xl font-bold mb-4 text-white">The 30% Rule</h3>
                         <p className="text-[#DEDEDE]">
                             Never use more than 30% of your credit limit. If your limit is ₹1L, stop at ₹30k. This is the single biggest "hack" for a fast score boost.
                         </p>
                     </div>
                     <div className="text-center md:text-left pt-8 md:pt-0 md:pl-8">
                         <h3 className="text-2xl font-bold mb-4 text-white">The 6-Month Gap</h3>
                         <p className="text-[#DEDEDE]">
                             Don't apply for loans back-to-back. Keep a gap of at least 6 months between major loan applications to show stability.
                         </p>
                     </div>
                     <div className="text-center md:text-left pt-8 md:pt-0 md:pl-8">
                         <h3 className="text-2xl font-bold mb-4 text-white">Don't Close Old Cards</h3>
                         <p className="text-[#DEDEDE]">
                             Keep your oldest credit card active (even if you don't use it). It anchors your "Credit Age". Buy a coffee once a year to keep it alive.
                         </p>
                     </div>
                 </div>
             </div>
           </section>

           {/* NEW SECTION: The 4 Bureaus */}
           <section id="bureaus" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faBuildingColumns} className="mr-4 w-12 h-12" /> Not Just CIBIL: The 4 Bureaus
               </h2>
               <p className="mb-6 leading-relaxed">
                   In India, "CIBIL" is often used as a synonym for credit score, but there are actually four RBI-licensed Credit Information Companies (CICs). Banks may report to one or all of them. A discrepancy in one can ruin your chances.
               </p>
               <div className="grid md:grid-cols-2 gap-6">
                   <div className="bg-white p-6 rounded-xl border border-gray-200">
                       <h4 className="font-bold text-lg text-gray-900 mb-2">1. TransUnion CIBIL</h4>
                       <p className="text-sm text-gray-600">The oldest and most widely used. Most banks (SBI, HDFC, ICICI) check this first. Score range: 300-900. A score of 750+ is ideal.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-200">
                       <h4 className="font-bold text-lg text-gray-900 mb-2">2. Experian India</h4>
                       <p className="text-sm text-gray-600">Known for more detailed reports on credit cards and personal loans. Often used by credit card issuers like Amex and Standard Chartered.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-200">
                       <h4 className="font-bold text-lg text-gray-900 mb-2">3. Equifax India</h4>
                       <p className="text-sm text-gray-600">Stronger focus on microfinance and personal loans. NBFCs frequently check Equifax data.</p>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-gray-200">
                       <h4 className="font-bold text-lg text-gray-900 mb-2">4. CRIF High Mark</h4>
                       <p className="text-sm text-gray-600">Extensive data on rural and micro-lending. If you have taken small business loans or MFI loans, this score matters.</p>
                   </div>
               </div>
               <p className="mt-4 text-sm text-gray-500 italic">
                   <strong>Pro Tip:</strong> You can have a 780 in CIBIL but a 650 in Experian if a bank reported a default to only one bureau. We check and fix reports across ALL four.
               </p>
           </section>

           {/* NEW SECTION: Impact Analysis */}
           <section id="impact-analysis" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faArrowTrendUp} className="mr-4 w-12 h-12" /> Life After "Settlement"
               </h2>
               <div className="overflow-x-auto">
                   <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-[#DEDEDE] shadow-sm rounded-lg overflow-hidden">
                       <thead className="text-xs text-[#2E2E2E] uppercase bg-gray-50 border-b border-[#DEDEDE]">
                           <tr>
                               <th className="px-6 py-3">Loan Type</th>
                               <th className="px-6 py-3">With "Settled" Status</th>
                               <th className="px-6 py-3">After "Closed" (Our Service)</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-200">
                           <tr className="bg-white">
                               <td className="px-6 py-4 font-bold text-gray-900">Home Loan</td>
                               <td className="px-6 py-4 text-red-600">Rejected by Top Banks. Only NBFCs might give at 10-12% interest.</td>
                               <td className="px-6 py-4 text-green-600">Eligible for SBI/HDFC at standard rates (8.3-8.5%).</td>
                           </tr>
                           <tr className="bg-gray-50">
                               <td className="px-6 py-4 font-bold text-gray-900">Personal Loan</td>
                               <td className="px-6 py-4 text-red-600">100% Rejection from major banks. Only App loans available.</td>
                               <td className="px-6 py-4 text-green-600">Eligible after 6 months of 'Closed' status.</td>
                           </tr>
                           <tr className="bg-white">
                               <td className="px-6 py-4 font-bold text-gray-900">Credit Card</td>
                               <td className="px-6 py-4 text-red-600">Only FD-backed cards available.</td>
                               <td className="px-6 py-4 text-green-600">Eligible for premium unsecured cards.</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </section>

           {/* NEW SECTION: Commercial Credit */}
           <section id="commercial-cibil" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faBuildingColumns} className="mr-4 w-12 h-12" /> Business Owner? Meet "CIBIL Rank"
               </h2>
               <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8">
                   <p className="text-indigo-900 mb-6 text-lg">
                       If you run a proprietorship or Pvt Ltd, your personal score is not enough. You have a <strong>Commercial CIBIL Rank (CMR)</strong> ranging from 1 to 10.
                   </p>
                   <div className="flex flex-wrap gap-4">
                       <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                           <span className="block text-xs uppercase tracking-wide text-gray-500">CMR 1-3</span>
                           <strong className="text-xl text-green-600">Super Prime</strong>
                           <p className="text-xs text-gray-600 mt-1">ROI: 8% - 10%</p>
                       </div>
                       <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                           <span className="block text-xs uppercase tracking-wide text-gray-500">CMR 4-6</span>
                           <strong className="text-xl text-yellow-600">Prime</strong>
                           <p className="text-xs text-gray-600 mt-1">ROI: 11% - 14%</p>
                       </div>
                       <div className="bg-white p-4 rounded-lg shadow-sm flex-1 min-w-[200px]">
                           <span className="block text-xs uppercase tracking-wide text-gray-500">CMR 7-10</span>
                           <strong className="text-xl text-red-600">Sub Prime</strong>
                           <p className="text-xs text-gray-600 mt-1">High rejection risk</p>
                       </div>
                   </div>
                   <p className="mt-6 text-sm text-indigo-800 italic">
                       *We assist in fixing Commercial CIBIL Rank by reconciling disputed business loans and MSME credit lines.
                   </p>
               </div>
           </section>

           {/* NEW SECTION: Scams Warning */}
           <section id="scams" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 flex items-center">
                   <FontAwesomeIcon icon={faBan} className="mr-4 w-12 h-12" /> BEWARE: Credit Repair Scams
               </h2>
               <p className="mb-6 leading-relaxed">
                   The market is full of agents promising "Instant CIBIL Fix". Do not fall for these traps:
               </p>
               <div className="space-y-4">
                   <div className="flex items-start bg-red-50 p-4 rounded-lg">
                       <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-6 h-6" />
                       <div>
                           <strong className="block text-red-900">1. "We Delete History"</strong>
                           <span className="text-red-800 text-sm">No one can delete correct data. It is illegal. We only dispute INACCURATE data.</span>
                       </div>
                   </div>
                   <div className="flex items-start bg-red-50 p-4 rounded-lg">
                       <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-6 h-6" />
                       <div>
                           <strong className="block text-red-900">2. "Become Authorized User" Hacks</strong>
                           <span className="text-red-800 text-sm">US credit repair tactics like "Piggybacking" don't work the same way in India. Don't pay for this.</span>
                       </div>
                   </div>
                   <div className="flex items-start bg-red-50 p-4 rounded-lg">
                       <FontAwesomeIcon icon={faTriangleExclamation} className="text-red-600 mt-1 mr-3 w-6 h-6" />
                       <div>
                           <strong className="block text-red-900">3. "CIBIL Score Generator"</strong>
                           <span className="text-red-800 text-sm">Sites asking for money to generate a "new" CIBIL ID are fraudulent. Your PAN is permanently linked to your history.</span>
                       </div>
                   </div>
               </div>
           </section>

           {/* NEW SECTION: Glossary */}
           <section id="glossary" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faFileContract} className="mr-4 w-12 h-12" /> Know Your Report: A Glossary
               </h2>
               <div className="grid md:grid-cols-3 gap-4">
                   {[
                       { term: "DPD", desc: "Days Past Due. 000 is good. Anything else (030, 060, 090) kills your score." },
                       { term: "STD", desc: "Standard Asset. Payments are on time. Doing good." },
                       { term: "SMA", desc: "Special Mention Account. Signs of stress (0-90 days late)." },
                       { term: "SUB", desc: "Sub-Standard. NPA for <= 12 months." },
                       { term: "DBT", desc: "Doubtful. NPA for > 12 months." },
                       { term: "LSS", desc: "Loss Asset. Uncollectible. The worst status." },
                       { term: "Written Off (WO)", desc: "Lender gave up on collecting. Very bad for CIBIL." },
                       { term: "Settled", desc: "Paid less than full amount. Negative flag." },
                       { term: "Suit Filed", desc: "Legal case filed by lender. Critical alert." }
                   ].map((item, i) => (
                       <div key={i} className="bg-white p-4 rounded-lg border border-[#DEDEDE]">
                           <h4 className="font-black text-[#1F5EFF] mb-1">{item.term}</h4>
                           <p className="text-xs text-gray-600">{item.desc}</p>
                       </div>
                   ))}
               </div>
           </section>

          {/* Secured Cards */}
          <section id="secured-cards" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faUnlockKeyhole} className="mr-4 w-12 h-12" /> The "Secret Weapon": Secured Credit Cards
            </h2>
            <p className="mb-6 leading-relaxed">
               If your score is &lt; 700, no bank will give you a normal credit card. This creates a Catch-22: 
               <em>"You need credit to build score, but you need score to get credit."</em>
               <br/><br/>
               The solution is a <strong>Fixed Deposit (FD) Backed Credit Card</strong>.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Top Secured Cards in India (2024)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
                 <div className="border border-gray-200 p-4 rounded-lg bg-white">
                     <h4 className="font-bold text-indigo-700">IDFC FIRST WOW!</h4>
                     <ul className="text-sm text-gray-600 mt-2 list-disc ml-4">
                         <li>Minimum FD: ₹2,000</li>
                         <li>No Credit Check required.</li>
                         <li>Reporting: fast reporting to all bureaus.</li>
                     </ul>
                 </div>
                 <div className="border border-gray-200 p-4 rounded-lg bg-white">
                     <h4 className="font-bold text-blue-700">SBI Unnati</h4>
                     <ul className="text-sm text-gray-600 mt-2 list-disc ml-4">
                         <li>Minimum FD: ₹25,000</li>
                         <li>Trust of SBI.</li>
                         <li>After 12 months, can be converted to Unsecured card.</li>
                     </ul>
                 </div>
                 <div className="border border-gray-200 p-4 rounded-lg bg-white">
                     <h4 className="font-bold text-red-700">Kotak 811 #DreamDifferent</h4>
                     <ul className="text-sm text-gray-600 mt-2 list-disc ml-4">
                         <li>Minimum FD: ₹10,000</li>
                         <li>Zero Annual Fee.</li>
                         <li>90% limit of FD amount.</li>
                     </ul>
                 </div>
                 <div className="border border-gray-200 p-4 rounded-lg bg-white">
                     <h4 className="font-bold text-gray-800">OneCard (Metal)</h4>
                     <ul className="text-sm text-gray-600 mt-2 list-disc ml-4">
                         <li>Minimum FD: ₹5,000</li>
                         <li>Great App UI.</li>
                         <li>Metal card for premium feel.</li>
                     </ul>
                 </div>
            </div>
            <p className="text-sm bg-green-50 p-3 rounded text-green-800">
                <strong>Strategy:</strong> Take one of these cards. Spend only ₹1000 per month. Pay it back on the 1st of the month. Do this for 6 months. Your score will increase by 50-100 points effortlessly.
            </p>
          </section>

          
           {/* Dispute Templates */}
           <section id="templates" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="mr-4 w-12 h-12" /> Dispute Letter Templates
            </h2>
            <p className="mb-6 leading-relaxed">
              If the online dispute fails, use these templates to send physical mail to the Nodal Officers.
            </p>
            
            <div className="space-y-8">
               <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-100 px-6 py-3 border-b border-gray-200 font-bold text-gray-700 flex justify-between items-center">
                    Template 1: Request to Update 'Settled' to 'Closed'
                    <button className="text-xs bg-white border border-gray-300 px-2 py-1 rounded hover:bg-gray-50">Copy</button>
                  </div>
                  <div className="p-6 bg-gray-50 font-mono text-sm text-gray-800 whitespace-pre-wrap">
To: The Nodal Officer, [Bank Name]<br/>
Subject: Request to Update Account Status from 'Settled' to 'Closed' - Loan A/c [Number]<br/><br/>

Dear Sir/Madam,<br/><br/>

This is regarding my loan account [Number] which was settled on [Date]. I understand that the 'Settled' status is negatively impacting my credit score.<br/><br/>

I am willing to pay the outstanding differential amount of ₹[Amount] (Principal + Interest components that were waived) in order to fully close this liability.<br/><br/>

Please confirm the exact amount to be paid and issue a confirmation that upon this payment, the account status will be reported as 'Closed' to all Credit Information Companies (CIBIL/Experian).<br/><br/>

Awaiting your positive response.<br/><br/>

Regards,<br/>
[Your Name]
                  </div>
               </div>
            </div>
          </section>
 
          {/* Testimonials */}
          <section id="reviews" className="scroll-mt-32 text-center mb-16">
             <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Success Stories</h2>
             <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">A</div>
                      <div>
                         <h4 className="font-bold">Amit Deshmukh</h4>
                         <p className="text-xs text-gray-500">IT Professional, Pune</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"My CIBIL was stuck at 620 because of an old 'Settled' credit card. SettleLoans helped me negotiate with the bank to pay the difference and get an NOC. Within 3 months, my status changed to 'Closed' and score jumped to 740. Got my home loan approved last week!"</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[var(--color-border)] shadow-sm">
                   <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600 mr-3">P</div>
                      <div>
                         <h4 className="font-bold">Priya Sethi</h4>
                         <p className="text-xs text-gray-500">Teacher, Mumbai</p>
                      </div>
                   </div>
                   <p className="text-sm text-gray-600 italic">"I had 3 wrong entries in my report belonging to someone else! I tried mailing CIBIL but got no response. SettleLoans filed a formal dispute and followed up. The entries were removed in 45 days. Very professional service."</p>
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
                q: "How long does it take to improve CIBIL score?", 
                a: "Credit repair is not instant. It typically takes 6 to 12 months of consistent good behavior (timely payments, low utilization) to see a significant rise. However, correcting errors (disputes) can boost your score fast, often within 30-45 days." 
              },
              { 
                q: "Can I remove the 'Settled' status from my CIBIL?", 
                a: "Yes. A 'Settled' status means you paid less than the due amount. To remove it, you must approach the lender, pay the 'differental amount' (the amount that was originally waived), and obtain a 'No Dues Certificate'. Once this is submitted to CIBIL, the status changes to 'Closed', boosting your score." 
              },
              { 
                 q: "What is the fastest way to build credit history from scratch?", 
                 a: "The fastest way is to get a 'Secured Credit Card' against a Fixed Deposit (e.g., IDFC WOW, SBI Unnati, OneCard). Use it for small expenses and pay the FULL bill on time. This builds a positive history in 6 months." 
              },
              { 
                 q: "Does checking my own CIBIL score lower it?", 
                 a: "No. When you check your own score (via CIBIL website, GPay, or banking apps), it is a 'Soft Inquiry'. Soft inquiries do NOT affect your score. Only when a bank checks your score for a loan application ('Hard Inquiry'), it can drop by a few points." 
              },
              { 
                 q: "I paid my dues but CIBIL still shows outstanding. What to do?", 
                 a: "Banks verify data with CIBIL usually once every 30-45 days. If it has been longer, you need to file a 'Dispute' on the CIBIL website using the 'Control Number' from your report. You can also mail the NOC to CIBIL directly or ask us to handle it." 
              },
               { 
                 q: "How much CIBIL score is needed for a Home Loan?", 
                 a: "Most banks require a score of 750+ for the best interest rates (e.g., 8.3%). If your score is 650-700, you might get a loan but at a higher interest rate (9-10%). Below 650, rejection probability is high." 
              },
               { 
                 q: "Can being an authorized user on a family member's card help?", 
                 a: "In India, the concept of 'Authorized User' affecting the user's CIBIL is less prevalent than in the US. The primary cardholder usually bears the credit responsibility. It is better to get your own secured card to build individual history." 
              },
               { 
                 q: "Will closing old credit cards hurt my score?", 
                 a: "Yes, it can. Closing an old card shortens your 'Credit Age' and reduces your 'Total Available Credit', spiking your utilization ratio. Unless the card has high annual fees, it is better to keep it open and use it occasionally." 
              },
               { 
                 q: "What is a 'Good' Credit Utilization Ratio?", 
                 a: "The golden rule is 30%. If your limit is ₹1 Lakh, try not to spend more than ₹30,000. Consistently using >50% of your limit signals 'Credit Hungriness' to lenders and lowers your score." 
              },
               { 
                 q: "Do you charge for removing 'Settled' status?", 
                 a: "We charge a professional consultancy fee to guide you through the negotiation with the bank/NBFC to convert 'Settled' to 'Closed'. You will have to pay the bank the outstanding dues directly. We ensure the bank gives you the correct paperwork (NOC) and updates CIBIL promptly." 
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
             <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: SettleLoans provides credit consultancy and score improvement planning. We are not a credit bureau. Results vary based on individual profiles and lender cooperation.</p>
          </div>

          {/* Mobile CTA (Visible only on mobile) */}
          <div className="lg:hidden mt-16 mb-8">
            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-green-500/20">
              <div className="bg-green-600 p-6 text-center text-white">
                <h3 className="text-2xl font-black mb-2">Score Below 700?</h3>
                <p className="opacity-90 text-sm">Get a free report analysis and fix your CIBIL legally.</p>
              </div>
              <div className="p-8 text-center text-[#DEDEDE]">
                <Link href="/contact" className="inline-block w-full bg-green-600 text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                  Fix My Score Now
                </Link>
                <div className="mt-6 flex items-center justify-center gap-4 text-xs font-bold opacity-60 uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Legal Process
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    Confidential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-green-600 p-4 text-center">
                 <h3 className="text-lg font-black text-white">Score Below 700?</h3>
               </div>
               <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Don't let a low score stop your dreams. Get a free report analysis.
                </p>
                <Link href="/contact" className="inline-block w-full bg-green-600 text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Fix My Score
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60"> Simple & Legal Process</p>
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
                  <Link href="/app-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    App Loan Settlement
                  </Link>
                </li>
              </ul>
            </div>
            
            
          </div>
        </aside>

      </div>
      </main>
    </div>
  );
}
