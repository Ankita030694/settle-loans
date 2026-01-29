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
  faHouse, 
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
  faPassport,
  faLandmark,
  faFileSignature,
  faBalanceScale,
  faHandcuffs,
  faLightbulb,
  faListCheck,
  faUserShield
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Credit Card Settlement Services India | Expert Debt Relief - SettleLoans",
  description: "Stuck in the credit card Minimum Due trap? SettleLoans helps you legally settle credit card debt for 50% less. Expert protection from recovery agents and arbitration.",
  alternates: {
    canonical: "https://settleloans.in/services/credit-card-settlement",
  },
  keywords: ["credit card settlement", "settle credit card debt", "credit card debt relief india", "minimum due trap calculator", "credit card arbitration defense", "stop recovery harassment", "debt settlement process india", "credit card written off vs settled", "credit card defaulter rights rbi", "rbi guidelines for credit card recovery agents"]
};

export default function CreditCardSettlementPage() {
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
            "name": "Credit Card Settlement",
            "item": "https://settleloans.in/services/credit-card-settlement"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Credit Card Settlement Services",
        "description": "Comprehensive legal and financial service to settle unsecured credit card debt, aiming for 50-60% waiver on total outstanding. Services include anti-harassment protection, legal defense against arbitration/Section 138, and financial planning.",
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
          "name": "Debt Relief Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Credit Card Settlement Negotiation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Harassment Protection" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Legal Defense for Defaulters" } }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white pt-20" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="w-full bg-[#2E2E2E] py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Start Your Debt-Free Journey Today
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Credit Card Debt <br className="hidden md:block"/> Settlement Services
          </h1>
          <p className="text-lg md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
            Stop the endless cycle of paying Minimum Due. We help you legally negotiate and settle your credit card debt for up to <strong>50% less</strong> than what you owe. Protect yourself from harassment and regain your financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Check Your Eligibility Now
            </Link>
            <Link href="#step-by-step-guide" className="inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#747474]">
              <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li><Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link></li>
              <li><span className="text-gray-300">/</span></li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">Credit Card Settlement</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
              { id: "introduction", title: "The Silent Epidemic" },
              { id: "why-banks-settle", title: "Why Banks Settle" },
              { id: "the-math-of-debt", title: "The Minimum Due Trap" },
              { id: "rbi-guidelines", title: "RBI Guidelines" },
              { id: "step-by-step-guide", title: "10-Step Process" },
              { id: "documents-required", title: "Documents Required" },
              { id: "options-comparison", title: "Know Your Options" },
              { id: "legal-implications", title: "Legal Risks" },
              { id: "write-off-vs-waive-off", title: "Write-off vs Waive-off" },
              { id: "post-settlement", title: "Life After Settlement" },
              { id: "case-studies", title: "Success Stories" },
              { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)] space-y-16">
          
          {/* Introduction */}
          <section id="introduction">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">The Silent Epidemic of Credit Card Debt in India</h2>
            <p className="text-lg leading-relaxed mb-6">
              Credit cards are powerful financial tools, but for millions of Indians, they have become a source of immense stress and anxiety. With easy access to credit and the allure of "Minimum Amount Due" payments, it is perilously easy to fall into a debt trap that feels impossible to escape.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              If you are finding yourself borrowing from one card to pay off another, or taking personal loans just to keep your credit cards active, you are not alone. This is a systemic issue designed to keep you in debt for decades. The good news is that there is a legal, structured exit route: <strong>Credit Card Settlement</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              At SettleLoans, we specialize in helping individuals break free from this cycle. We don't just negotiate numbers; we provide a legal shield between you and the bank, ensuring your dignity is protected while we work towards a fair resolution.
            </p>
          </section>

          {/* Why Banks Agree to Settle (Expanded) */}
          <section id="why-banks-settle" className="scroll-mt-32">
            <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Why Do Banks Agree to Settle Credit Card Debt?
            </h2>
            <p className="mb-6 text-lg">
              It usually surprises our clients when we tell them that banks <em>want</em> to settle. It might seem counterintuitive for a financial institution to accept less money (often 50-60% less) than what is owed. However, purely from a business perspective, settlement is often the most logical step for a bank when dealing with unsecured bad debt.
            </p>
            
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm mb-8">
               <h3 className="text-xl font-bold text-gray-800 mb-4">The Economics of "Bad Debt"</h3>
               <p className="mb-4">
                 Banks work on probability. When a borrower stops paying for 90 days, the loan is classified as a <strong>Non-Performing Asset (NPA)</strong>. The bank is required by RBI regulations to set aside capital (Provisioning) to cover this loss, which hurts their profitability.
               </p>
               <p className="mb-4">
                 They have two choices:
               </p>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2">Option A: Legal Route</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-red-800">
                       <li>File a case in civil court (takes 3-5 years).</li>
                       <li>Pay lawyers fees for every hearing.</li>
                       <li>Zero guarantee of recovery since there is no collateral to sell.</li>
                       <li>Inflation reduces the value of money over time.</li>
                    </ul>
                 </div>
                 <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                    <h4 className="font-bold text-green-900 mb-2">Option B: Settlement (OTS)</h4>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-green-800">
                       <li>Get a lump sum payment immediately (e.g., 40-50% of outstanding).</li>
                       <li>Close the account and release the "Provisioned Capital".</li>
                       <li>Clean the balance sheet instantly.</li>
                       <li>Save on legal and administrative costs.</li>
                    </ul>
                 </div>
               </div>
               <p className="mt-6 text-gray-700">
                 Banks refer to this as the "Bird in hand" strategy. They prefer getting ₹40,000 today rather than fighting for ₹1,00,000 for 5 years and potentially getting nothing. At SettleLoans, we understand this banking psychology deeply and use it to leverage the best possible waiver for you.
               </p>
            </div>
          </section>

          {/* DEEP DIVE: The Trap (Slightly Expanded) */}
          <section id="the-math-of-debt" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
              The Mathematics of the Minimum Due Trap
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm relative overflow-hidden mb-8">
               <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                 Credit cards are the most expensive form of debt in India, carrying interest rates of <strong>36% to 48% per annum</strong>. The trap lies in the "Minimum Amount Due" (MAD). Banks typically ask you to pay only 5% of your outstanding balance. This seems affordable, but it triggers a financial catastrophe known as the <strong>Revolving Credit Trap</strong>.
              </p>
              
              <h3 className="text-xl font-bold text-[var(--color-text-hero)] mb-4">A Practical Calculation</h3>
              <p className="mb-4">Let's assume you have a credit card debt of <strong>₹1,00,000</strong> and the bank charges 3.5% interest per month (42% per year). You decide to pay only the 5% minimum due every month.</p>
              
              <div className="overflow-x-auto rounded-lg border border-gray-200 mb-6">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700 uppercase font-bold">
                    <tr>
                      <th className="px-6 py-3">Month</th>
                      <th className="px-6 py-3">Balance B/F</th>
                      <th className="px-6 py-3">Minimum Due (5%)</th>
                      <th className="px-6 py-3">Interest (3.5%)</th>
                      <th className="px-6 py-3">Principal Paid</th>
                      <th className="px-6 py-3">Balance C/F</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold">1</td>
                      <td className="px-6 py-4">₹1,00,000</td>
                      <td className="px-6 py-4 text-red-600 font-bold">₹5,000</td>
                      <td className="px-6 py-4">₹3,500</td>
                      <td className="px-6 py-4 text-green-600 font-bold">₹1,500</td>
                      <td className="px-6 py-4">₹98,500</td>
                    </tr>
                     <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold">2</td>
                      <td className="px-6 py-4">₹98,500</td>
                      <td className="px-6 py-4 text-red-600 font-bold">₹4,925</td>
                      <td className="px-6 py-4">₹3,447</td>
                      <td className="px-6 py-4 text-green-600 font-bold">₹1,478</td>
                      <td className="px-6 py-4">₹97,022</td>
                    </tr>
                    <tr className="bg-white border-b hover:bg-gray-50">
                      <td className="px-6 py-4 font-bold">...</td>
                      <td className="px-6 py-4">...</td>
                      <td className="px-6 py-4">...</td>
                      <td className="px-6 py-4">...</td>
                      <td className="px-6 py-4">...</td>
                      <td className="px-6 py-4">...</td>
                    </tr>
                    <tr className="bg-red-50 border-b hover:bg-red-100 font-bold">
                      <td className="px-6 py-4">Total</td>
                      <td className="px-6 py-4">After 10 Years</td>
                      <td className="px-6 py-4">You Paid: ₹2.8 Lakhs</td>
                      <td className="px-6 py-4">Interest Only</td>
                      <td className="px-6 py-4">Still Owing:</td>
                      <td className="px-6 py-4">~₹35,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-lg leading-relaxed text-[var(--color-text-body)]">
                <strong>The Result:</strong> If you continue paying only the minimum due, it will take you over <strong>14 years</strong> to clear this ₹1 Lakh debt, and you will end up paying nearly <strong>₹2.5 Lakhs in interest alone</strong>. This is why banks love minimum payers. At SettleLoans, we advise clients to stop this bleeding immediately.
              </p>
            </div>
          </section>

          {/* RBI & Legal Framework */}
          <section id="rbi-guidelines" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
              RBI Guidelines & Your Legal Rights
            </h2>
            <p className="mb-6 leading-relaxed">
              Many borrowers feel powerless against big banks. However, the Reserve Bank of India (RBI) and the Supreme Court have laid down strict guidelines to protect borrowers from unethical practices. Understanding these rights is the first step to freedom.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-t-4 border-green-500 shadow-sm p-6 rounded-lg">
                 <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <FontAwesomeIcon icon={faLandmark} className="mr-3 text-green-600 w-6 h-6" />
                    Board Approved Settlement
                 </h3>
                 <p className="text-gray-700 text-sm">
                   The RBI mandates that every bank must have a Board-approved policy for <strong>Compromise Settlements</strong> of NPAs. This means they are <em>legally authorized</em> to offer you a discount if you cannot pay.
                 </p>
              </div>

              <div className="bg-white border-t-4 border-blue-500 shadow-sm p-6 rounded-lg">
                 <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <FontAwesomeIcon icon={faShieldHalved} className="mr-3 text-blue-600 w-6 h-6" />
                    Fair Practices Code
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Under the RBI's "Fair Practices Code", recovery agents cannot call before 08:00 AM or after 07:00 PM, nor can they use abusive language or threaten physical harm.
                 </p>
              </div>
              
              <div className="bg-white border-t-4 border-purple-500 shadow-sm p-6 rounded-lg md:col-span-2">
                 <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                    <FontAwesomeIcon icon={faUserShield} className="mr-3 text-purple-600 w-6 h-6" />
                    Right to Privacy
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Your debt is a private contract. Agents cannot shame you publicly, contact your employer without permission (unless you are uncontactable), or threaten to "ruin your reputation" in your society. SettleLoans helps enforce this right strictly.
                 </p>
              </div>
            </div>
          </section>

          {/* 10 Step Process (Expanded) */}
          <section id="step-by-step-guide" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-2 text-center">
              The 10-Step Road to Debt Freedom
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Settlement is not magic; it is a structured financial and legal process. Here is how SettleLoans guides you through it.
            </p>
            
            <div className="relative border-l-4 border-[#1F5EFF]/20 ml-6 md:ml-12 space-y-12 my-12">
              {[
                { 
                  step: "01", 
                  title: "Financial Assessment & Onboarding", 
                  desc: "We analyze your total credit card debt, current income, and asset status. We conduct a thorough audit of your finances to decide if settlement is the right path for you. If you have the means to pay, we advise you to pay. Settlement is strictly for those in genuine distress who have no other option. Once agreed, you sign a legal agreement authorizing us to represent you in all future communications with the bank." 
                },
                { 
                  step: "02", 
                  title: "The 'Stop Payment' Strategy", 
                  desc: "To settle, the account must be delinquent. Banks do not settle 'Standard' accounts that are being paid regularly. We advise you to stop paying the Minimum Due immediately. This is difficult but necessary. Instead of paying the bank, you divert that cash flow into a personal 'Settlement Savings Fund'—money needed for the final lump sum payment later." 
                },
                { 
                  step: "03", 
                  title: "Handling the Noise (Days 1-60)", 
                  desc: "This is the hardest phase emotionally. Calls from the bank will spike. You will receive automated notices and SMS threats. We activate our 'Call Forwarding & Shield' protocol. You divert all agent calls to our legal team. We draft 'Cease & Desist' emails for any harassment and file grievances with the Banking Ombudsman if they cross the line." 
                },
                { 
                  step: "04", 
                  title: "NPA Classification (Day 90)", 
                  desc: "Around Day 90 of non-payment, your account becomes a Non-Performing Asset (NPA). This is a critical milestone. The bank's local collection team (who often work on commission and are aggressive) typically gives up here. The file moves to the central recovery or write-off team. This is exactly where we want to be to start serious negotiations." 
                },
                { 
                  step: "05", 
                  title: "Documentation of Hardship", 
                  desc: "We compile your 'Dossier of Distress'. We need to prove to the bank that your default is not willful but due to circumstances beyond your control. This includes termination letters, medical bills, salary cuts, or bank statements showing low balance. We must prove to the bank that you have 'Inability to Pay', not 'Intent to Deny'." 
                },
                { 
                  step: "06", 
                  title: "Negotiation Rounds Initiation", 
                  desc: "The bank will likely make a first offer—maybe a 10% or 20% discount on the total inflated amount. We reject it firmly. They may threaten legal action (Arbitration/Section 25). We hold firm because we know it's a pressure tactic. Our negotiators engage in multiple rounds of discussions to bring the number down." 
                },
                { 
                  step: "07", 
                  title: "Legal Defense (If Needed)", 
                  desc: "If you receive a Legal Notice, Section 138 summons (rare for credit cards), or Arbitration Notice, do not panic. Our lawyers draft the reply. We attend virtual arbitration hearings to contest the inflated interest claims, forcing them back to the negotiation table. We ensure that your rights are protected throughout the legal process." 
                },
                { 
                  step: "08", 
                  title: "The Real Offer (Month 4-6)", 
                  desc: "As the financial quarter or year-end approaches, banks are desperate to clean their books and reduce NPAs. This is when we strike. We counter-offer based on the Principal Amount (excluding interest/late fees). We aim for a waiver of 30-50% of the total claim, effectively removing all the interest and penalties accumulated." 
                },
                { 
                  step: "09", 
                  title: "Settlement Letter & Verification", 
                  desc: "The bank agrees to the final amount. They issue a 'Settlement Letter' or 'Amicable Settlement Letter'. Our experts scrutinize it carefully. It must explicitly state 'Full and Final Settlement', mention the exact amount, the due date, and that no further dues remain. Never pay a single rupee without this letter in hand." 
                },
                { 
                  step: "10", 
                  title: "Payment, NOC & Freedom", 
                  desc: "You pay the agreed amount directly to the bank (never to us or an agent). The loan is closed. Within 45 days, the bank issues a 'No Dues Certificate' (NDC). We help you check your CIBIL report to ensure the status is updated correctly. You are finally free from the debt trap." 
                }
              ].map((item, i) => (
                <div key={i} className="relative pl-8 md:pl-12 group">
                   <div className="absolute -left-[14px] md:-left-[18px] top-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-4 border-[#1F5EFF] flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-sm"></div>
                   <h3 className="text-xl font-black text-[#1F5EFF] mb-2 flex items-center">
                     <span className="opacity-50 text-3xl mr-4 -mt-2 font-mono">{item.step}</span> {item.title}
                   </h3>
                   <p className="text-[var(--color-text-body)] opacity-90 leading-relaxed max-w-3xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Documents Required (New) */}
          <section id="documents-required" className="scroll-mt-32">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              Documents Required for Settlement
            </h2>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
               <p className="mb-4 text-gray-700">To successfully negotiate, we need to build a case file that proves your financial hardship. The more evidence we have, the better our bargaining power.</p>
               <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                     <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />
                     <p className="text-sm text-gray-600"><strong>KYC Documents:</strong> Pan Card, Aadhar Card.</p>
                  </div>
                  <div className="flex items-start">
                     <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />
                     <p className="text-sm text-gray-600"><strong>Credit Card Statements:</strong> Last 3-6 months statements showing the outstanding amount.</p>
                  </div>
                   <div className="flex items-start">
                     <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />
                     <p className="text-sm text-gray-600"><strong>Income Proof:</strong> Last 3 months Salary Slips or Bank Statements showing credit/debit pattern.</p>
                  </div>
                  <div className="flex items-start">
                     <FontAwesomeIcon icon={faCheck} className="text-green-500 mt-1 mr-3 w-6 h-6" />
                     <p className="text-sm text-gray-600"><strong>Hardship Proof:</strong> Termination Letter, Medical Reports, or any legal notice received.</p>
                  </div>
               </div>
            </div>
          </section>
          
          {/* Comparison Table */}
          <section id="options-comparison" className="scroll-mt-32">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Knowing Your Options</h2>
             <p className="mb-6">Before choosing settlement, it is critical to compare it with other options like Balance Transfers or Consolidation Loans.</p>
             <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
               <table className="w-full text-left border-collapse min-w-[600px]">
                 <thead className="bg-[#1e293b] text-white">
                   <tr>
                     <th className="p-5 border-r border-slate-600 w-1/4">Option</th>
                     <th className="p-5 border-r border-slate-600 w-1/4">What is it?</th>
                     <th className="p-5 border-r border-slate-600 w-1/4">Pros</th>
                     <th className="p-5 w-1/4">Cons</th>
                   </tr>
                 </thead>
                 <tbody className="bg-white">
                   <tr className="border-b hover:bg-gray-50 transition-colors">
                     <td className="p-5 font-bold text-[#1F5EFF]">Minimum Due</td>
                     <td className="p-5 text-sm text-gray-600">Paying 5% monthly to avoid late fees.</td>
                     <td className="p-5 text-sm text-green-600 font-medium">Keeps card active. No harassment.</td>
                     <td className="p-5 text-sm text-red-600 font-medium">40% Interest forever. Infinite debt trap. You never pay off the principal.</td>
                   </tr>
                   <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                     <td className="p-5 font-bold text-[#1F5EFF]">Balance Transfer</td>
                     <td className="p-5 text-sm text-gray-600">Moving debt to a new card.</td>
                     <td className="p-5 text-sm text-green-600 font-medium">Lower interest (temporarily). Single EMI.</td>
                     <td className="p-5 text-sm text-red-600 font-medium">Requires high CIBIL score. Debt amount doesn't reduce. Processing fees apply.</td>
                   </tr>
                   <tr className="border-b hover:bg-gray-50 transition-colors">
                     <td className="p-5 font-bold text-[#1F5EFF]">Personal Loan</td>
                     <td className="p-5 text-sm text-gray-600">Taking a loan to pay off cards.</td>
                     <td className="p-5 text-sm text-green-600 font-medium">12-15% interest (much lower than cards).</td>
                     <td className="p-5 text-sm text-red-600 font-medium">Hard to get if you are already over-leveraged. If you default on this, legal action is faster.</td>
                   </tr>
                   <tr className="border-b bg-green-50/50 border-l-4 border-l-green-500 hover:bg-green-50 transition-colors">
                     <td className="p-5 font-bold text-green-800">Debt Settlement</td>
                     <td className="p-5 text-sm text-gray-700">Negotiating principal waiver.</td>
                     <td className="p-5 text-sm text-green-700 font-medium">Reduces debt by ~50%. Stops interest meter. Ends the cycle permanently.</td>
                     <td className="p-5 text-sm text-orange-600 font-medium">CIBIL score impact. Card block. Future unsecured loans difficult for 2 years.</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </section>

          {/* Legal Deep Dive (Expanded) */}
          <section id="legal-implications" className="scroll-mt-32">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
               Legal Risks Explained: Fact vs. Fear
             </h2>
             <p className="mb-8 text-lg">Banks and recovery agencies often use complex legal jargon to intimidate borrowers. It is crucial to separate the facts from the fear-mongering. Here is the reality of the three most common legal threats.</p>
            
             <div className="grid md:grid-cols-1 gap-8">
                {/* Arbitration */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                     <FontAwesomeIcon icon={faBalanceScale} className="mr-3 text-indigo-600 w-12 h-12" />
                     1. Arbitration Proceedings
                   </h3>
                   <div className="space-y-4 text-gray-700">
                     <p><strong>The Threat:</strong> "We have initiated arbitration proceedings against you and an award will be passed to seize your assets."</p>
                     <p><strong>The Reality:</strong> Most credit card agreements contain an arbitration clause. When you default, the bank appoints an Arbitrator (often a retired judge or lawyer on their payroll) to pass an "Award". This is a civil dispute resolution process, not a criminal court trial.</p>
                     <p><strong>Our Strategy:</strong> We do not ignore these notices. We represent you in the proceedings. We highlight that the unilateral appointment of an arbitrator is often bias and against recent Supreme Court observations. We challenge the exorbitant interest calculations. In 95% of cases, simply showing up to contest makes the bank realize it's cheaper to settle than to fight a prolonged legal battle.</p>
                   </div>
                </div>

                {/* Section 25 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                     <FontAwesomeIcon icon={faFileContract} className="mr-3 text-indigo-600 w-12 h-12" />
                     2. Payment & Settlement Systems Act (Section 25)
                   </h3>
                   <div className="space-y-4 text-gray-700">
                     <p><strong>The Threat:</strong> "We will file a criminal case under Section 25 for ECS bounce."</p>
                     <p><strong>The Reality:</strong> If you have an auto-debit (ECS/NACH) set up and it bounces due to insufficient funds, it is technically a criminal offense similar to a cheque bounce. This is the banks' favorite tool because the word "Criminal" scares people into paying.</p>
                     <p><strong>Our Strategy:</strong> It is a bailable offense. The courts are well aware that banks misuse this provision for civil recovery. We advise you to cancel your ECS mandates immediately upon engaging us to prevent further bounces. If a case is filed, we arrange for bail and represent you. Once a settlement is reached, the bank is legally required to withdraw this case.</p>
                   </div>
                </div>

                 {/* Section 138 */}
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                   <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                     <FontAwesomeIcon icon={faHandcuffs} className="mr-3 text-indigo-600 w-12 h-12" />
                     3. Section 138 (Cheque Bounce)
                   </h3>
                    <div className="space-y-4 text-gray-700">
                     <p><strong>The Threat:</strong> "We will issue a non-bailable warrant for cheque bounce."</p>
                     <p><strong>The Reality:</strong> This section ONLY applies if you have given a physical cheque that has bounced. Most credit cards are issued without cheques. If you haven't given a cheque, this law DOES NOT APPLY to you. Do not fall for empty threats where agents send fake "Draft Summons" on WhatsApp.</p>
                   </div>
                </div>
             </div>
          </section>

           {/* Psychological Toll (New) */}
           <section className="scroll-mt-32">
              <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
               The Hidden Cost: Mental Health
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl text-orange-900">
                 <p className="mb-4">
                   Debt is not just a financial number; it is a heavy emotional burden. Our clients often report:
                 </p>
                 <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Anxiety and panic attacks every time the phone rings.</li>
                    <li>Sleep squalor and insomnia.</li>
                    <li>Strained relationships with spouses and family.</li>
                    <li>Loss of focus at work leading to career issues.</li>
                 </ul>
                 <p>
                   <strong>This is why Settlement is valid.</strong> It allows you to prioritize your mental health and dignity over an impossible financial obligation. Ending the harassment is often the most valuable part of our service.
                 </p>
              </div>
           </section>

          {/* Write-off vs Waive-off */}
          <section id="write-off-vs-waive-off" className="scroll-mt-32">
             <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-6">
              "Written Off" vs "Waived Off" - Know the Difference
            </h2>
            <div className="flex flex-col gap-6">
               <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-red-800 mb-2">Write-off (Bad for you)</h3>
                  <p className="text-red-900/80 mb-2">
                    This is an internal accounting entry for the bank. They move the loan to the "Loss" bucket to save tax. However, strictly speaking, <strong>you still owe the money</strong>. The bank may sell this "Bad Debt" to a collection agency years later, who might restart the harassment.
                  </p>
               </div>
               <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <h3 className="text-lg font-bold text-emerald-800 mb-2">Settlement / Waiver (Good for you)</h3>
                  <p className="text-emerald-900/80 mb-2">
                    This means the lender agrees to accept a smaller amount and <strong>legally extinguishes</strong> the remaining debt. You get a "No Dues Certificate" or "Settlement Letter". You are no longer liable to pay anything. This is the gold standard we achieve for you.
                  </p>
               </div>
            </div>
          </section>

          {/* Life After Settlement (Expanded) */}
          <section id="post-settlement" className="scroll-mt-32 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 md:p-12 rounded-3xl border border-indigo-100">
            <h2 className="text-3xl font-bold text-indigo-900 mb-6 flex items-center">
              <FontAwesomeIcon icon={faHandHoldingDollar} className="mr-3 text-indigo-600 w-12 h-12" /> Life After Settlement
            </h2>
            <p className="mb-8 text-indigo-800 text-lg">
              Many clients fear that "Settlement" equals financial death. It does not. It is a comma, not a full stop. It is a strategic pause to rebuild your foundation.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-indigo-900 mb-3 text-lg">Immediate Aftermath (0-6 Months)</h4>
                <p className="text-gray-700 mb-2">Your credit score will drop (e.g., to 600-650). Unsecured loans will be rejected. But importantly, you have <strong>Zero EMI</strong> pressure. You can use your entire salary for your household needs and savings instead of interest payments.</p>
              </div>
              <div className="bg-white/60 p-6 rounded-xl backdrop-blur-sm">
                <h4 className="font-bold text-indigo-900 mb-3 text-lg">Rebuilding Phase (6-24 Months)</h4>
                <p className="text-gray-700 mb-2">You can get a <strong>Secured Credit Card</strong> (backed by a Fixed Deposit of ₹20k-50k). Use it for small payments (Grocery/Petrol) and pay back 100% on time. This positive payment history is the secret to rebuilding your score rapidly.</p>
              </div>
              <div className="bg-white/60 p-6 rounded-xl backdrop-blur-sm md:col-span-2">
                 <h4 className="font-bold text-indigo-900 mb-3 text-lg">The Future (2+ Years)</h4>
                 <p className="text-gray-700 mb-2">Once your score crosses 750 again, you become eligible for loans. Lenders care more about your <strong>recent behavior</strong> (last 24-36 months) than a past settlement. After 7 years, the 'Settlement' flag often disappears entirely from reports, leaving you with a clean slate.</p>
              </div>
            </div>
          </section>

          {/* Case Studies (Expanded) */}
          <section id="case-studies" className="scroll-mt-32">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Real Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-4">R</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Rahul S. (IT Professional, Pune)</h4>
                     <p className="text-sm text-gray-500">Total Debt: ₹8.4 Lakhs</p>
                   </div>
                 </div>
                 <p className="text-gray-600 italic mb-4">"I had 3 cards. I lost my job in 2023 and defaulted. The harassment was unbearable. SettleLoans took over, stopped the calls within a week. We settled all 3 cards for ₹3.1 Lakhs total. I am now debt-free."</p>
                 <div className="flex justify-between text-sm font-semibold text-green-700 bg-green-50 p-2 rounded">
                    <span>Savings: ₹5.3 Lakhs</span>
                    <span>Time: 5 Months</span>
                 </div>
              </div>

               <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-4">A</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Anita G. (Small Business Owner, Delhi)</h4>
                     <p className="text-sm text-gray-500">Total Debt: ₹12 Lakhs</p>
                   </div>
                 </div>
                 <p className="text-gray-600 italic mb-4">"My business took a hit. I was using my personal card for business expense. The interest made it double. SettleLoans handled the legal notices and negotiated a 60% waiver."</p>
                  <div className="flex justify-between text-sm font-semibold text-green-700 bg-green-50 p-2 rounded">
                    <span>Savings: ₹7.2 Lakhs</span>
                    <span>Time: 8 Months</span>
                 </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2">
                 <div className="flex items-center mb-4">
                   <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mr-4">S</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Suresh K. (Government Employee, Chennai)</h4>
                     <p className="text-sm text-gray-500">Total Debt: ₹5.6 Lakhs</p>
                   </div>
                 </div>
                 <p className="text-gray-600 italic mb-4">"I was scared of the social stigma. I thought I would lose my job if the bank complained. The team at SettleLoans assured me of the privacy laws. They handled everything without my office knowing. My debt was settled for ₹2.2 Lakhs."</p>
                  <div className="flex justify-between text-sm font-semibold text-green-700 bg-green-50 p-2 rounded">
                    <span>Savings: ₹3.4 Lakhs</span>
                    <span>Time: 6 Months</span>
                 </div>
              </div>
            </div>
             <p className="mt-4 text-center text-sm text-gray-500">* Names changed to protect client privacy.</p>
          </section>

          {/* FAQs - Expanded */}
          <h2 id="faqs" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 not-prose mb-20">
            {[
              { 
                q: "My bank says 'We do not have a settlement policy'. Is this true?", 
                a: "No. Every bank has a policy for 'Write-offs' and 'one-time settlements' (OTS). When agents say this, it is a negotiation tactic to make you panic. They want you to believe you have no choice but to pay. Once your case is escalated to the central team, the policy 'magically' appears." 
              },
              { 
                q: "Can I do a partial settlement and keep using the card?", 
                a: "No. Settlement means the termination of the credit facility. The card will be blocked permanently. You cannot eat the cake and have it too. Settlement is an exit strategy, not a management strategy." 
              },
              { 
                q: "What applies to 'Add-on' cards?", 
                a: "The liability lies 100% with the Primary Cardholder. If you settle the primary account, add-on cards given to family members will stop working immediately. Their credit score is usually not affected if they are just users, but yours is." 
              },
              { 
                q: "Will they debit money from my Savings Account in the same bank?", 
                a: "Yes, they can! This is called the 'Right to Set-Off'. If you have a Savings Account and a Credit Card with the SAME bank (e.g., HDFC Savings + HDFC Credit Card), they can auto-debit your funds to cover card dues without asking. We strongly advise moving your funds to a different bank before starting the settlement process." 
              },
              { 
                q: "What is the difference between 'Settled' and 'Closed' credit status?", 
                a: "'Closed' means you paid every single rupee due (Principal + Interest). 'Settled' means you paid a reduced amount. 'Settled' is a negative flag for future lenders, while 'Closed' is neutral/positive." 
              },
              { 
                q: "Can I travel abroad if I have pending credit card debt?", 
                a: "Yes. Credit card default is a civil matter. There is no travel ban unless a specific court order exists (which is incredibly rare for retail debt). Immigration officers do not check CIBIL scores or bank dues." 
              },
              { 
                q: "Do I need to visit the bank branch?", 
                a: "Rarely. 99% of settlements happen via email and official letters from the central office. In fact, we advise against visiting branches as branch managers often have no authority to approve settlements and will only shame you effectively." 
              },
              { 
                q: "How can I verify if the Settlement Letter is genuine?", 
                a: "A genuine letter will be on the bank's letterhead, sent from an official bank email domain (not Gmail/Yahoo), and will clearly state the Settlement Amount and the Account Number. It should not ask you to pay into a personal account." 
              },
               {
                 q: "Can the bank file a police complaint for credit card default?",
                 a: "No. Defaulting on credit card dues is a civil dispute, not a criminal offense. The police do not have jurisdiction over civil debt recovery. Banks cannot threaten you with arrest or police action. The only exception is if a cheque you issued bounces."
               },
              { 
                q: "Can I settle the debt myself without expert help?", 
                a: "You can, but it is difficult. Banks have professional negotiators who use emotional scripts. Without legal knowledge, you may get bullied into paying more, or worse, pay without a proper letter, leading to the debt not being cleared. Experts ensure you get the best deal and legal safety." 
              },
              {
                q: "Can I get a loan after settlement?",
                a: "Immediately? No. For about 12-24 months, it will be hard. However, after 2 years of good financial behavior (using a secured card, paying bills on time), your score will recover, and you can get loans again. Settlement is a temporary setback, not a permanent ban."
              },
              {
                q: "What if the bank files a case against me during negotiation?",
                a: "This is a pressure tactic. If they file a case, we accept the summons and represent you. Courts encourage settlements. Often, the judge will ask the bank, 'Why don't you settle this?' which actually helps our case."
              },
              {
                 q: "How long does the entire settlement process take?",
                 a: "Typically 3 to 6 months. It depends on how quickly the bank agrees to your offer. The first 3 months are usually spent waiting for the account to become an NPA so that valid settlement offers can be triggered."
              },
              {
                 q: "Can I settle just one credit card if I have multiple?",
                 a: "Yes. Each credit card account is independent. You can choose to settle one card while continuing to pay others. However, the 'Settled' status on one card will still impact your overall credit score."
              },
              {
                 q: "What if I get a new job during the settlement process?",
                 a: "It's great news! Usually, it doesn't affect the settlement terms unless the bank finds out you suddenly have a lot of money. We advise keeping your financial details private during negotiations."
              },
               {
                 q: "Are there tax implications for the waived amount?",
                 a: "Technically, the waived amount can be treated as income by tax authorities, but this is extremely rare for retail individual loans in India. It is mostly a concern for large corporate settlements."
              },
              {
                 q: "Does SettleLoans charge upfront fees?",
                 a: "We charge a small retainer fee to start your file and handle harassment calls. The success fee is charged ONLY when you get the settlement letter in your hand. We are performance-based."
              },
              {
                 q: "Will my family know about my debt?",
                 a: "Not from us. We maintain 100% confidentiality. However, if you ignore bank calls for too long, agents might try to call landlines or visit homes. That's why hiring a professional shield early is important."
              },
               {
                 q: "What if I miss the settlement payment date?",
                 a: "The settlement becomes null and void. The bank will cancel the deal and add back all the waived interest. You must pay on or before the due date mentioned in the letter."
              },
              {
                 q: "Is credit card settlement legal in India?",
                 a: "Yes, absolutely. It is a legal contract under the Indian Contract Act. The RBI has specific guidelines (Prudential Norms on IRAC) that allow banks to settle bad loans to recover capital."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none focus:outline-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                  <span className="text-lg pr-4">{i+1}. {faq.q}</span>
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
          
           <div className="mt-16 pt-8 border-t border-[#DEDEDE] text-center">
             <p className="text-[#747474] text-sm italic">Disclaimer: We provide debt settlement services. We are not a law firm, though we employ legal experts and work with lawyers. Results vary based on bank policies and individual profiles. Settlement does impact credit scores.</p>
          </div>

        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#DEDEDE] group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Free Debt Analysis</h3>
               </div>
               <div className="p-6 text-center">
                 <p className="mb-6 text-sm text-[#2E2E2E] opacity-80 leading-relaxed font-medium">
                   Stop paying 42% interest. Find out if you qualify for a waiver.
                 </p>
                 <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                   Calculate Savings
                 </Link>
                 <p className="mt-4 text-xs text-[#747474]"> 100% Confidential</p>
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
                  <Link href="/services/anti-harassment" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Stop Harassment
                  </Link>
                </li>
                 <li>
                  <Link href="/services/business-debt-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Business Debt Settlement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
      </main>
      <Footer />
    </div>
  );
}
