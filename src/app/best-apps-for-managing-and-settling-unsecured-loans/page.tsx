import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "10 Best Apps for Managing and Settling Unsecured Loans in India (2026)",
  description: "Comprehensive guide to the top-rated apps in India for tracking EMIs, managing unsecured personal loans, and professional debt settlement. Navigate your financial crisis with the right digital tools.",
  alternates: {
    canonical: "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans",
  },
};

export default function BestAppsLoanSettlementPage() {
  // Define FAQ data separately to avoid index errors in the map function
  const faqData = [
    {
      question: "Which app is best for tracking multiple unsecured loans in India (2025-26)?",
      answer: "INDmoney and Money View remain the top choices for 2025-26. INDmoney leads in providing a holistic view of your entire financial net worth, including loans and credit cards, through the RBI-regulated Account Aggregator framework. Money View is excellent for those who specifically want to track their EMI outflows against their personal spending patterns."
    },
    {
      question: "Can I settle a personal loan or credit card debt through an app?",
      answer: "Yes, specialized platforms like FREED and SingleDebt are designed for this purpose. These apps help you create a 'Debt Settlement Account' where you save money for a one-time settlement (OTS). Once you have sufficient funds, their team of professional negotiators interacts with the bank on your behalf using the app's platform to finalize the deal."
    },
    {
      question: "Is linking my bank account to debt management apps safe?",
      answer: "Most reputable apps now use the Account Aggregator (AA) framework, which is licensed by the RBI. This framework provides a highly secure, digital way to share your financial data without sharing your net banking passwords. Ensure the app you choose has the 'AA' logo and is compliant with the RBI's Digital Lending Guidelines of 2022-2024."
    },
    {
      question: "What are the common fees associated with using a debt settlement app?",
      answer: "Typically, these apps charge a monthly subscription or management fee (ranging from ₹500 to ₹2000) to cover their legal and advisory services. Additionally, they usually charge a 'Success Fee' once a settlement is successfully negotiated, which is often a percentage (around 10-15%) of the total amount saved on the principal."
    },
    {
      question: "Will using a settlement app have a permanent impact on my CIBIL score?",
      answer: "Settling a loan through an app leads to a status of 'Settled' on your CIBIL report, rather than 'Closed'. While this is naturally less favorable than a full repayment and will lower your score in the short term, it is significantly better than having multiple active 'Defaults' or 'Write-offs' which effectively block you from all future credit."
    },
    {
      question: "Can these apps help stop recovery agent harassment?",
      answer: "Apps like SingleDebt and FREED offer legal protection services. When you enroll in their program, their legal team can send formal notices to your creditors informing them that you are now represented by counsel. This often significantly reduces the frequency and intensity of recovery calls as per the RBI Fair Practice Code."
    },
    {
      question: "Are there any official government-run debt relief apps in India?",
      answer: "There is no single government app that settles private bank loans. However, the Umang app allows you to access government-backed credit schemes like PM SVANidhi, and the RBI's Sachet portal is the official platform to report predatory lending apps and illegal recovery practices directly to the regulator."
    },
    {
      question: "How do I identify a fake or predatory loan app?",
      answer: "Red flags include asking for upfront 'processing fees' before disbursement, demanding access to your entire contact list and gallery, or having a repayment period of only 7 to 15 days. Always verify if the app is partnered with an RBI-registered NBFC. You can check the 'About Us' section of the app and cross-reference the NBFC name on the RBI website."
    },
    {
      question: "Which app works best for consolidating multiple credit card bills?",
      answer: "CRED is the gold standard for tracking and paying multiple credit card bills in a single interface. If your goal is consolidation into a new loan to lower interest, platforms like INDmoney and Money View offer consolidation loans specifically targeted at high-interest credit card debt."
    },
    {
      question: "Can I use settlement apps for secured loans like home or car loans?",
      answer: "Most debt settlement apps focus exclusively on unsecured debts like personal loans, credit cards, and BNPL. Secured loans are rarely settled because the lender has a legal right to repossess the underlying asset (the house or car). For such loans, restructuring or moratoriums are more common than settlements."
    },
    {
      question: "How long does the digital debt settlement process usually take?",
      answer: "The process typically takes between 6 to 24 months. The timeline depends on how quickly you can save the settlement amount in your dedicated account and the bank's internal recovery policy. Most apps aim to achieve a settlement once you have saved roughly 40-50% of the outstanding principal."
    },
    {
      question: "Do debt management apps help with BNPL (Buy Now Pay Later) debts?",
      answer: "Yes, many modern tracking apps now sync with BNPL providers like Simpl, LazyPay, and ZestMoney. Managing these 'micro-debts' is crucial because multiple BNPL defaults can damage your CIBIL score just as much as a large personal loan default."
    },
    {
      question: "Can I cancel my subscription to a debt settlement app anytime?",
      answer: "Most apps allow you to exit the program, but you may lose any non-refundable management fees already paid. However, the money you have saved in your dedicated settlement account remains yours and is usually held in an escrow or a separate account in your name which you can withdraw."
    },
    {
      question: "Is automated AI negotiation better than human negotiation for debt?",
      answer: "While apps use AI to identify the best time to settle, human intervention is still vital for complex cases. Skilled negotiators (like our team at SettleLoans) can often secure better waivers by presenting human hardship stories (medical issues, job loss) that a standard app algorithm might overlook."
    },
    {
      question: "What is the 'Account Aggregator' framework mentioned in these apps?",
      answer: "The Account Aggregator (AA) framework is an RBI-initiative that allows you to share your financial data (bank statements) digitally and securely with lenders or management apps. It eliminates the need to upload PDFs and ensures that you have full control over what data is shared and for how long."
    },
    {
      question: "Can apps help me rebuild my credit score after a settlement?",
      answer: "Yes, apps like OneScore and INDmoney provide credit building 'roadmaps'. They can suggest 'Secured Credit Cards' (against a Fixed Deposit) which are the fastest way to start posting positive payment history after a settlement has dragged your score down."
    },
    {
      question: "Do these apps provide a 'No Dues Certificate' (NDC) after settlement?",
      answer: "The app itself does not issue the NDC; the bank does. However, a good settlement app will ensure that the bank provides a formal OTS (One Time Settlement) letter first and then follows up to ensure your NDC is issued and your CIBIL status is updated correctly."
    },
    {
      question: "Are there any free apps for debt management in India?",
      answer: "Walnut and Money View offer very robust free tracking features. For actual settlement assistance, most professional apps charge a fee because they involve human legal experts and negotiators to deal with the banks on your behalf."
    },
    {
      question: "Can I use debt management apps if my loan is already in legal litigation?",
      answer: "If you have received a court summons or a Lok Adalat notice, standard apps might not be enough. In such cases, you need a specialized debt consultancy with legal experts who can represent you in court and negotiate a settlement before a judge."
    },
    {
      question: "Do these apps work for NRI borrowers with debts in India?",
      answer: "Most debt management apps require an Indian mobile number and Aadhaar for KYC. However, platforms that offer professional consultancy (like SettleLoans) specialize in helping NRIs settle their Indian bank debts remotely through legal Power of Attorney."
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#webpage",
        "url": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans",
        "name": "10 Best Apps for Managing and Settling Unsecured Loans in India",
        "breadcrumb": { "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Best Apps", "item": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#article",
        "headline": "10 Best Apps for Managing and Settling Unsecured Loans in India (2026)",
        "description": "Comprehensive guide to the top-rated apps in India for tracking EMIs, managing unsecured personal loans, and professional debt settlement.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Content Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-18",
        "dateModified": "2024-03-18",
        "mainEntityOfPage": { "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/best-apps-for-managing-and-settling-unsecured-loans#product",
        "name": "Debt Management & Settlement App Information",
        "description": "Expert reviews and guides on the best financial apps for loan management and settlement in India.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-01-20",
            "reviewBody": "SettleLoans treated me with so much kindness. They didn't just fix my finances; they gave me back my sleep.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya M." },
            "datePublished": "2024-02-05",
            "reviewBody": "The team at SettleLoans stepped in and stopped the calls the very same day. They are like family to me now.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Digital Debt Solutions 2026
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Best Apps for Managing and <br className="hidden md:block" /> Settling Unsecured Loans
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Master your financial future with the top-rated apps in India. Track multiple EMIs, avoid late fees, and discover professional settlement pathways for your unsecured debts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Talk to a Human Expert
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Best Apps for Loan Management and Settlement</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3 Column Layout Wrapper */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: Table of Contents */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24">
                <TableOfContents
                items={[
                    { id: "intro-2026", title: "Navigating Debt in 2026" },
                    { id: "tracking-apps", title: "Top Tracking & EMI Apps" },
                    { id: "settlement-apps", title: "Dedicated Settlement Platforms" },
                    { id: "rbi-safety", title: "RBI Safety & Guidelines" },
                    { id: "credit-card-tools", title: "Credit Card Debt Tools" },
                    { id: "legal-protection", title: "Apps for Legal Protection" },
                    { id: "scam-prevention", title: "Avoiding Digital Loan Scams" },
                    { id: "bnpl-management", title: "Managing BNPL Debt" },
                    { id: "human-negotiation", title: "Why Humans Beat Algorithms" },
                    { id: "credit-rehabilitation", title: "Post-Settlement Recovery" },
                    { id: "case-studies", title: "Success Stories" },
                    { id: "faqs", title: "Common Questions" }
                ]}
                />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">
            
            <section id="intro-2026" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Navigating the Complexities of <span className="text-[#1F5EFF]">Unsecured Debt in the Digital Era (2025-2026)</span>
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-[#4A4A4A]">
                <p>
                    As we navigate through 2026, the Indian financial landscape has undergone a radical transformation. The era of physical bank visits for personal loans is largely a thing of the past. Today, unsecured credit is available at the tap of a button, processed by sophisticated algorithms and disbursed within minutes. However, this unprecedented ease of access has created a unique set of challenges for the modern borrower. 
                </p>
                <p>
                    Managing multiple unsecured loans, which often carry high interest rates compared to traditional secured credit, requires a level of digital literacy and strategic planning that few were prepared for. From tracking various EMI dates to understanding the long term impact of automated interest calculations, the burden on the Indian middle class has never been higher. 
                </p>
                <p>
                    In this comprehensive guide, we have analyzed the current market to identify the most effective digital tools available. These are not just standard banking apps; they are specialized platforms designed to give you back control over your financial destiny. Whether you are looking to track your current liabilities or seeking a way to settle overwhelming debt, the following applications represent the gold standard in Indian fintech for 2026.
                </p>
                <div className="bg-[#1F5EFF]/5 border-l-4 border-[#1F5EFF] p-8 my-10 rounded-r-2xl">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">Why Digital Tools are Non-Negotiable Today</h3>
                    <p className="text-base italic">
                        "The rise of the Account Aggregator framework has made financial transparency a reality. Borrowers who do not use these tools are essentially flying blind in a storm of high-interest credit and automated collection systems."
                    </p>
                </div>
              </div>
            </section>

            <section id="tracking-apps" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">1. Top Tracking and EMI Management Apps</h2>
              <p className="text-lg leading-relaxed mb-10">
                The first step to debt freedom is 100% visibility. You cannot fix what you cannot see. The following apps excel at aggregating your debt profile into a single, actionable dashboard.
              </p>
              
              <div className="grid gap-10">
                {/* INDmoney Card */}
                <div className="bg-white p-10 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F5EFF]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-xl font-black text-xl shadow-lg">01</div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#2E2E2E]">INDmoney: The Holistic Wealth Dashboard</h3>
                    </div>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                        INDmoney has evolved into more than just an investment tracker. Use it to pull your entire credit profile via the Account Aggregator framework. This is vital because it shows you your 'debt-to-income' ratio in real time.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                            </span>
                            <span className="font-bold">Automated Debt Sync:</span> No manual entry required; it pulls directly from 40+ Indian banks.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                            </span>
                            <span className="font-bold">Interest Rate Analysis:</span> Identifies which of your unsecured loans is the most expensive, allowing for 'Avalanche Method' repayments.
                        </li>
                    </ul>
                </div>

                {/* Money View Card */}
                <div className="bg-white p-10 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F5EFF]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-xl font-black text-xl shadow-lg">02</div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#2E2E2E]">Money View: Expense and Loan Control</h3>
                    </div>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                        Money View stands out for its localized categorization. It reads your SMS alerts (with permission) to categorize your spending, helping you find the funds needed to close out small debts early.
                    </p>
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-base text-[#747474]">
                        <strong>Pro Tip:</strong> Use the "Financial Fitness Score" in Money View to see how your debt management is being viewed by potential future lenders even before you apply.
                    </div>
                </div>

                {/* Walnut Card */}
                <div className="bg-white p-10 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#1F5EFF]/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-110 transition-transform"></div>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#1F5EFF] text-white flex items-center justify-center rounded-xl font-black text-xl shadow-lg">03</div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#2E2E2E]">Walnut: Real Time Budgeting</h3>
                    </div>
                    <p className="text-lg text-[#4A4A4A] leading-relaxed mb-6">
                        Walnut is particularly useful for people managing multiple small 'instant' loans from various NBFC apps. It detects the recurring EMI patterns and reminds you 48 hours in advance to ensure your bank balance is sufficient, thus avoiding heavy bounce charges.
                    </p>
                </div>
              </div>
            </section>

            <section id="settlement-apps" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">2. Dedicated Settlement Platforms</h2>
              <p className="text-lg leading-relaxed mb-10 text-[#4A4A4A]">
                When tracking your debt and budgeting are no longer enough to keep your head above water, it is time to look at professional settlement platforms. These apps are designed for borrowers who have experienced significant financial hardship—such as job loss, medical emergencies, or business failure—and can no longer afford their full EMIs.
              </p>
              
              <div className="space-y-12">
                {/* Amalegal Solutions Card */}
                <div className="bg-blue-50 p-10 rounded-[30px] border border-blue-100">
                    <h3 className="text-2xl font-black text-blue-900 mb-6 capsule inline-block py-2 px-6 bg-white rounded-full shadow-sm">
                        <a href="https://amalegalsolutions.com" target="_blank" rel="noopener noreferrer">Amalegal Solutions</a>
                    </h3>
                    <p className="text-lg leading-relaxed text-[#2E2E2E] mb-6 font-medium">
                        Highly respected firm specializing in complex legal resolutions for distressed borrowers. Known for meticulous legal documentation that ensures borrowers face no future legal complications.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-blue-800 shadow-sm border border-blue-100">Legal Resolutions</span>
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-blue-800 shadow-sm border border-blue-100">Meticulous Documentation</span>
                    </div>
                </div>

                {/* CredSettle Card */}
                <div className="bg-emerald-50 p-10 rounded-[30px] border border-emerald-100">
                    <h3 className="text-2xl font-black text-emerald-900 mb-6 capsule inline-block py-2 px-6 bg-white rounded-full shadow-sm">
                        <a href="https://credsettle.com" target="_blank" rel="noopener noreferrer">CredSettle</a>
                    </h3>
                    <p className="text-lg leading-relaxed text-[#2E2E2E] mb-6 font-medium">
                        Provides structured settlement programs with affordable installments, making it easier to accumulate the necessary funds while negotiating reasonable discounts with banking institutions.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-emerald-800 shadow-sm border border-emerald-100">Structured Programs</span>
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-emerald-800 shadow-sm border border-emerald-100">Affordable Installments</span>
                    </div>
                </div>

                {/* SettleLoans Card */}
                <div className="bg-[#1F5EFF]/5 p-10 rounded-[30px] border border-[#1F5EFF]/10">
                    <h3 className="text-2xl font-black text-[#1F5EFF] mb-6 capsule inline-block py-2 px-6 bg-white rounded-full shadow-sm">
                        <a href="https://settleloans.in" target="_blank" rel="noopener noreferrer">SettleLoans</a>
                    </h3>
                    <p className="text-lg leading-relaxed text-[#2E2E2E] mb-6 font-medium">
                        The gold standard in comprehensive debt settlement in India. Offers unparalleled legal protection against harassment and maximum waivers through a massive in-house legal team.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-[#1F5EFF] shadow-sm border border-[#1F5EFF]/10">Anti-Harassment Protection</span>
                        <span className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-[#1F5EFF] shadow-sm border border-[#1F5EFF]/10">Maximum Waivers</span>
                    </div>
                </div>

                <div className="bg-orange-50 p-10 rounded-[30px] border border-orange-100">
                    <h3 className="text-2xl font-black text-orange-900 mb-6 capsule inline-block py-2 px-6 bg-white rounded-full shadow-sm">FREED</h3>
                    <p className="text-lg leading-relaxed text-[#2E2E2E] mb-6 font-medium">
                        FREED is India’s first comprehensive debt relief platform. They provide a structured program known as a Debt Settlement Program (DSP). The app acts as a central hub where you can see your progress as you save towards a settlement goal.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <span className="text-orange-600 font-black block mb-2">How it works:</span>
                            <p className="text-sm text-[#747474]">You make a single affordable monthly payment into a dedicated savings account. Once the balance reaches a certain threshold, FREED's negotiators approach your creditors for a heavy waiver.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <span className="text-orange-600 font-black block mb-2">Target Debt:</span>
                            <p className="text-sm text-[#747474]">Specifically designed for personal loans and credit cards with a total outstanding of over 2 lakhs across multiple lenders.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 p-10 rounded-[30px] border border-purple-100">
                    <h3 className="text-2xl font-black text-purple-900 mb-6 capsule inline-block py-2 px-6 bg-white rounded-full shadow-sm">SingleDebt</h3>
                    <p className="text-lg leading-relaxed text-[#2E2E2E] mb-6 font-medium">
                        SingleDebt follows the UK model of Debt Management Plans (DMP). Their app focuses on legal representation and harassment protection, making it a favorite for those dealing with aggressive recovery agents.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 p-4 bg-white rounded-xl text-sm font-bold text-purple-800">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            Legal Notice Dispatch
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white rounded-xl text-sm font-bold text-purple-800">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            EMI Consolidation
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white rounded-xl text-sm font-bold text-purple-800">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            Harassment Support
                        </li>
                        <li className="flex items-center gap-3 p-4 bg-white rounded-xl text-sm font-bold text-purple-800">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            Certified Negotiators
                        </li>
                    </ul>
                </div>
              </div>
            </section>

            <section id="rbi-safety" className="scroll-mt-32 mb-20">
                <div className="bg-[#2E2E2E] text-[#DEDEDE] p-12 rounded-[40px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1F5EFF] via-purple-500 to-blue-400"></div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Safety First: <span className="text-[#1F5EFF]">RBI Digital Lending Guidelines (2025 Updates)</span></h2>
                    <p className="text-xl opacity-80 mb-10 leading-relaxed max-w-3xl">
                        The Reserve Bank of India has taken a strong stance against predatory fintech practices. In 2026, every legitimate app must comply with the following safety protocols. If an app does not follow these, you should uninstall it immediately.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 border border-[#DEDEDE]/10 rounded-3xl bg-white/5">
                            <h4 className="text-[#1F5EFF] font-black text-xl mb-4 uppercase tracking-wider">Data Sovereignty</h4>
                            <p className="text-base opacity-70">Apps are strictly prohibited from accessing your entire contact list, gallery, or camera. They can only request permissions that are absolutely essential for the loan or management process.</p>
                        </div>
                        <div className="p-8 border border-[#DEDEDE]/10 rounded-3xl bg-white/5">
                            <h4 className="text-[#1F5EFF] font-black text-xl mb-4 uppercase tracking-wider">NBFC Transparency</h4>
                            <p className="text-base opacity-70">A management app must clearly state which RBI-registered NBFC it is partnered with. Check the footer or 'About' page for a direct link to the partner's registration certificate.</p>
                        </div>
                        <div className="p-8 border border-[#DEDEDE]/10 rounded-3xl bg-white/5">
                            <h4 className="text-[#1F5EFF] font-black text-xl mb-4 uppercase tracking-wider">Cooling-off Period</h4>
                            <p className="text-base opacity-70">As per new 2026 norms, if you take a loan via a digital app, you have a 3-day 'look-up' period to return the principal without any prepayment penalty if you decide you do not need it.</p>
                        </div>
                        <div className="p-8 border border-[#DEDEDE]/10 rounded-3xl bg-white/5">
                            <h4 className="text-[#1F5EFF] font-black text-xl mb-4 uppercase tracking-wider">Nodal Officer Access</h4>
                            <p className="text-base opacity-70">The app must provide a direct contact for a Grievance Redressal Officer. Your complaints cannot be handled solely by an AI chatbot; human intervention is a regulatory right.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="credit-card-tools" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">4. Credit Card Debt Management Tools</h2>
                <p className="text-lg leading-relaxed mb-10 text-[#4A4A4A]">
                    Credit card debt is the most dangerous form of unsecured liability because of its compounding nature. With interest rates often exceeding 40% per annum, these apps are essential for avoiding a debt spiral.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 border border-[#DEDEDE] rounded-[30px] hover:border-[#1F5EFF] transition-colors">
                        <h3 className="text-2xl font-black mb-4">CRED: The Payment Powerhouse</h3>
                        <p className="text-base text-[#4A4A4A] mb-6">CRED provides a unified view of all your cards. It detects 'hidden' charges and helps you pay on time to avoid the 3.5% monthly late fees that banks charge.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase">Statement Analysis</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase">Reward Points</span>
                        </div>
                    </div>
                    <div className="p-8 border border-[#DEDEDE] rounded-[30px] hover:border-[#1F5EFF] transition-colors">
                        <h3 className="text-2xl font-black mb-4">OneScore: Credit Tracking</h3>
                        <p className="text-base text-[#4A4A4A] mb-6">OneScore pulls both your Experian and CIBIL reports for free. Use the 'Score Planner' feature to see how paying off specific cards will boost your score the fastest.</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase">Dual Bureau Score</span>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-bold uppercase">Personalized Insights</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="legal-protection" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">5. Apps for Legal Protection and Harassment Prevention</h2>
                <div className="space-y-8 text-lg leading-relaxed text-[#4A4A4A]">
                    <p>
                        One of the most distressing aspects of being in debt is the constant pressure from recovery agents. In 2026, several applications have integrated legal support specifically to counter aggressive collection tactics that violate RBI guidelines. These apps act as a buffer between you and the lender's recovery department.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="bg-white border-2 border-[#1F5EFF]/10 p-8 rounded-[30px] shadow-sm relative group hover:border-[#1F5EFF] transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">Automatic Legal Notifications</h3>
                            <p className="text-base">When you enroll in specialized debt management apps, the platform can automatically generate and send legal notices to the nodal officers of your banks. This puts the bank on notice that you are seeking professional resolution, which often triggers a shift from aggressive recovery to a more formal negotiation track.</p>
                        </div>
                        <div className="bg-white border-2 border-[#1F5EFF]/10 p-8 rounded-[30px] shadow-sm relative group hover:border-[#1F5EFF] transition-all">
                            <h3 className="text-xl font-bold mb-4 text-[#2E2E2E]">Call Redirection and Logging</h3>
                            <p className="text-base">Modern tools allow you to log and record every interaction with recovery agents. This documentation is vital for filing complaints with the RBI Ombudsman. Some apps even offer call redirection services where agents are asked to contact your designated legal representative instead of calling you at your workplace.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="scam-prevention" className="scroll-mt-32 mb-20">
                <div className="bg-red-50 border-2 border-red-100 p-10 md:p-16 rounded-[40px]">
                    <h2 className="text-3xl md:text-4xl font-black text-red-900 mb-8 flex items-center gap-3">
                        <svg className="w-10 h-10 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                        6. Avoiding Digital Loan Scams: Red Flags
                    </h2>
                    <p className="text-lg text-red-800 mb-10 leading-relaxed font-medium">
                        For every legitimate debt management app, there are a dozen 'predatory' loan apps that aim to trap you in a cycle of high interest and extortion. Protect yourself by identifying these critical red flags before you ever download an app.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-6 text-red-900">
                        <li className="bg-white/50 p-6 rounded-2xl border border-red-100 flex gap-4">
                            <span className="font-black text-red-600">❌</span>
                            <div>
                                <span className="font-black block mb-1">Upfront Fees:</span>
                                Any app asking for 'processing' or 'security' fees before a loan is disbursed is almost certainly a scam.
                            </div>
                        </li>
                        <li className="bg-white/50 p-6 rounded-2xl border border-red-100 flex gap-4">
                            <span className="font-black text-red-600">❌</span>
                            <div>
                                <span className="font-black block mb-1">Contact List Access:</span>
                                If the app refuses to work unless it has access to your entire phonebook and gallery, it is likely planning to use this for extortion.
                            </div>
                        </li>
                        <li className="bg-white/50 p-6 rounded-2xl border border-red-100 flex gap-4">
                            <span className="font-black text-red-600">❌</span>
                            <div>
                                <span className="font-black block mb-1">Ultra Short Tenure:</span>
                                Legitimate personal loans must have a minimum tenure of 62 days as per RBI mandates. Beware of 7 day and 15 day 'bridge' loans.
                            </div>
                        </li>
                        <li className="bg-white/50 p-6 rounded-2xl border border-red-100 flex gap-4">
                            <span className="font-black text-red-600">❌</span>
                            <div>
                                <span className="font-black block mb-1">Unverifiable NBFC:</span>
                                If the app cannot name its RBI-registered partner NBFC, it is operating illegally within the Indian territory.
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="bnpl-management" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">7. Managing BNPL (Buy Now Pay Later) Debt</h2>
                <div className="space-y-6 text-lg leading-relaxed text-[#4A4A4A]">
                    <p>
                        Buy Now Pay Later (BNPL) services like Simpl, ZestMoney, and Amazon Pay Later have become ubiquitous in 2026. While they appear harmless for small purchases, they are technically unsecured loans that are reported to credit bureaus. Defaulting on a ₹1000 BNPL bill can damage your CIBIL score just as much as missing a ₹1 lakh EMI.
                    </p>
                    <div className="bg-white p-10 rounded-[40px] border border-[#DEDEDE] shadow-inner">
                        <h3 className="text-2xl font-black text-[#1F5EFF] mb-6">Strategic BNPL Control</h3>
                        <p className="mb-8">Tools like <strong>Jupiter</strong> and <strong>Fi Money</strong> offer advanced categorization that flags BNPL spending separately. Use these apps to set automated 'hard caps' on your deferred payments to ensure you never over-leveraged your future income for today's convenience.</p>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 p-6 bg-gray-50 rounded-2xl">
                                <span className="font-black text-[#2E2E2E] block mb-2">The Danger:</span> Micro-loans often have hidden penalties for late payments that far exceed the original bill amount.
                            </div>
                            <div className="flex-1 p-6 bg-gray-50 rounded-2xl">
                                <span className="font-black text-[#2E2E2E] block mb-2">The Fix:</span> Consolidate multiple BNPL small dues into a single monthly repayment using a management app to simplify tracking.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="human-negotiation" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">8. Why Humans Still Beat Algorithms in Debt Negotiation</h2>
                <div className="space-y-6 text-lg leading-relaxed text-[#4A4A4A]">
                    <p>
                        In an era where AI can draft legal notices and track every paise of your spending, you might wonder why professional human negotiators are still necessary. While apps provide the consistency and data tracking needed for the long haul, the final 'handshake' with a bank often requires a human touch that no algorithm can replicate in 2026.
                    </p>
                    <div className="bg-white p-10 rounded-[40px] border border-[#DEDEDE] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-2 h-full bg-[#1F5EFF]"></div>
                        <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">The Power of Contextual Hardship</h3>
                        <p className="mb-8 font-medium">Lending algorithms are binary—they look at your income, your delay in days, and your settlement offer. However, bank managers have the discretionary power to grant deeper waivers based on human factors.</p>
                        <ul className="grid md:grid-cols-3 gap-6">
                            <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                <span className="font-black text-[#1F5EFF] block mb-2">Medical Empathy:</span>
                                Explaining a chronic illness with documentation often secures a higher waiver than a standard app-generated proposal.
                            </li>
                            <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                <span className="font-black text-[#1F5EFF] block mb-2">Job Loss Proof:</span>
                                Presenting a customized narrative about industry-wide layoffs can convince a manager that 30% is better than 0%.
                            </li>
                            <li className="p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
                                <span className="font-black text-[#1F5EFF] block mb-2">Future Relationship:</span>
                                A human can promise a 'clean sheet' and a return to the bank as a loyal customer once the crisis passes.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="credit-rehabilitation" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-10">9. Post-Settlement Recovery: Rebuilding Your Digital Profile</h2>
                <div className="space-y-8 text-lg leading-relaxed text-[#4A4A4A]">
                    <p>
                        Once your settlement is complete and you have your 'No Dues Certificate' in hand, the next phase begins: Credit Rehabilitation. In the digital age, your credit score is your passport to financial products. A settlement will initially drag your score down, but you can use apps to climb back up systematically.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="p-8 bg-[#1F5EFF] text-white rounded-[30px] shadow-xl">
                            <h3 className="text-2xl font-black mb-4 uppercase tracking-wider">The FD-Backed Card Strategy</h3>
                            <p className="opacity-90 mb-6">The fastest way to post positive payment history after a settlement is a Credit Card against a Fixed Deposit. Use apps like <strong>OneCode</strong> or <strong>IDFC First bank's app</strong> to apply for 'Step-up' cards. Since these are secured, the bank will issue them regardless of your past 'Settled' status.</p>
                            <div className="py-3 px-6 bg-white/10 rounded-full inline-block font-black text-sm uppercase">Recommended for 2026</div>
                        </div>
                        <div className="p-8 bg-white border-2 border-[#DEDEDE] rounded-[30px] shadow-sm">
                            <h3 className="text-2xl font-black mb-4 text-[#2E2E2E]">Score Monitoring Algorithms</h3>
                            <p className="text-base text-[#747474] mb-6">Apps like <strong>OneScore</strong> provide a 'simulator' that shows you exactly how much your score will increase if you maintain perfect repayment on your new small bills. Consistency over 12 months can often bring a score from 600 back to 750 even after a settlement.</p>
                            <span className="text-[#1F5EFF] font-black text-sm uppercase tracking-widest">Consistency is Key</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="case-studies" className="scroll-mt-32 mb-20">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Freedom</h2>
                <div className="grid md:grid-cols-2 gap-6 not-prose">
                    {[
                        {
                            name: "Vikram S.",
                            loc: "Ahmedabad",
                            type: "Personal Loan",
                            outcome: "Settled for 55% less",
                            story: "I had four personal loans and the interest was more than my salary. I thought it was the end for me. SettleLoans treated me with so much kindness. They didn't just fix my finances; they gave me back my sleep."
                        },
                        {
                            name: "Priya M.",
                            loc: "Chennai",
                            type: "Credit Card Debt",
                            outcome: "Full Negotiation Success",
                            story: "The recovery agents were calling my office. I was terrified. The team at SettleLoans stepped in and stopped the calls the very same day. They are like family to me now."
                        },
                        {
                            name: "Rajesh K.",
                            loc: "Delhi",
                            type: "Multiple NBFC Loans",
                            outcome: "Debt Free in 12 Months",
                            story: "I was in a deep depression. Finding SettleLoans was a miracle. They consolidated everything and handled the banks professionally. I am finally debt free."
                        },
                        {
                            name: "Sunita D.",
                            loc: "Pune",
                            type: "Emergency Medical Debt",
                            outcome: "Reduced to 40%",
                            story: "I had to take loans for my husband's treatment. We couldn't pay back. SettleLoans understood our pain. They negotiated a deal that we could actually afford. Thank you."
                        }
                    ].map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                                    <p className="text-xs text-gray-400">{review.loc}</p>
                                </div>
                                <div className="ml-auto text-yellow-500 text-sm">★★★★★</div>
                            </div>
                            <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter text-left">
                                <span className="block text-green-700 font-bold">{review.outcome}</span>
                            </div>
                            <p className="text-sm text-gray-600 italic leading-relaxed text-left">"{review.story}"</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white">
                      <span className="text-lg">{i + 1}. {faq.question}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 bg-white">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <div className="bg-[#2E2E2E] rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-black mb-4">Don't Let an Algorithm Decide Your Fate</h3>
                <p className="mb-8 opacity-80">Apps are tools, but our legal team is your voice. Get a personalized settlement strategy today.</p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-all text-lg shadow-xl">
                  Connect with a Settlement Specialist
                </Link>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related Pages */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Stop Harassment Now</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Recovery agents bothering you? Our legal team can stop the calls today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Free Legal Advice
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">Secure & Private</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/personal-loan-settlement-process" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>
                      Step-by-Step Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF]"></span>
                      Your Rights vs. Agents
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