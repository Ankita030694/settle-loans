import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Don't Have Job & Can't Pay EMI? Loan Settlement Options & Rights",
  description: "Struggling with EMI payments after losing your job? Learn about loan settlement, RBI guidelines for jobless borrowers, and your rights against harassment. Professional debt relief help.",
  alternates: {
    canonical: "https://settleloans.in/dont-have-job-cant-pay-emi",
  },
};

export default function JobLossLoanPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#webpage",
        "url": "https://settleloans.in/dont-have-job-cant-pay-emi",
        "name": "Don't Have Job & Can't Pay EMI? Loan Settlement Options & Rights",
        "description": "Comprehensive guide for Indian borrowers facing job loss and unable to pay EMIs.",
        "breadcrumb": { "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#breadcrumb",
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
            "name": "Don't Have Job Can't Pay EMI",
            "item": "https://settleloans.in/dont-have-job-cant-pay-emi"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#service",
        "name": "Job Loss Debt Relief & Settlement",
        "description": "Professional legal and financial assistance for settling loans after job loss.",
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
          "reviewCount": "1840"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul Sharma" },
            "datePublished": "2024-05-12",
            "reviewBody": "After losing my IT job, I was drowning in credit card debt. SettleLoans helped me settle for 35% and stopped the constant harassment from agents.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Varma" },
            "datePublished": "2024-08-20",
            "reviewBody": "Very professional. They understood my financial crisis and communicated with the bank on my behalf. Highly recommended for anyone in distress.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#article",
        "headline": "What to Do if You Don't Have a Job and Can't Pay EMI in India?",
        "description": "A survival guide for borrowers facing job loss, covering legal rights, RBI guidelines, and loan settlement options.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Content Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2025-02-05",
        "dateModified": "2025-02-05",
        "mainEntityOfPage": { "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/dont-have-job-cant-pay-emi#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I be arrested for not paying EMI due to job loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, loan default is a civil matter in India. You cannot be arrested just for being unable to pay your personal loan or credit card EMI. However, ignoring court summons in cheque bounce or ECS bounce cases can lead to legal issues."
            }
          },
          {
            "@type": "Question",
            "name": "How do I inform the bank about my job loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Write a formal email or letter to the bank manager. Attach your termination letter or salary slips showing the pay cut. Request a meeting or a temporary moratorium to explain your genuine hardship."
            }
          },
          {
            "@type": "Question",
            "name": "Does loan settlement clear my debt forever?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, once you pay the agreed settlement amount and receive the 'No Dues Certificate' (NDC), you are legally free from that specific debt. The bank cannot pursue you for the remaining balance."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of RBI guidelines for jobless borrowers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI guidelines protect borrowers from harassment. Agents cannot call at odd hours, use abusive language, or visit your home without notice. Banks are also encouraged to provide restructuring options for genuine cases."
            }
          },
          {
            "@type": "Question",
            "name": "How much impact will settlement have on my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Settlement will drop your score by about 75 to 100 points. The account will be marked as 'Settled', which warns future lenders. However, it is a temporary dip that can be rebuilt over 18 to 24 months."
            }
          },
          {
            "@type": "Question",
            "name": "Is it better to ignore calls if I have no money?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Never ignore calls. It makes you look like a 'willful defaulter'. Answer the calls, state your hardship clearly, and inform them that you are looking for solutions. Silence often leads to faster legal escalation."
            }
          },
          {
            "@type": "Question",
            "name": "What documents do I need for a successful settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You need your termination letter, medical bills (if applicable), last 6 months' bank statements, and any other proof showing you have no source of income or assets."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle my loan myself or do I need help?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can try, but banks often use high-pressure tactics. Professional settlement firms have legal expertise and negotiation experience to get you a much better deal, often saving 50% or more."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 90-day NPA rule?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "After 90 days of non-payment, a loan is classified as a Non-Performing Asset (NPA). This is usually the stage where banks become open to negotiation for a one-time settlement (OTS)."
            }
          },
          {
            "@type": "Question",
            "name": "What is a 'Moratorium' and can I get one after job loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A moratorium is a temporary pause in EMI payments. You can request the bank for a 3 to 6 month holiday. While interest still accrues, it gives you time to find a new job without your account defaulting."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section - No Grid Design */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Financial Survival & Debt Relief
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Don't Have Job? <br className="hidden md:block"/> Can't Pay Your EMI?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              You are not a criminal for losing your job. Understand your legal rights, learn how to handle recovery agents, and find the path to legal loan settlement.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-[12px] hover:scale-105 transition-all duration-300 text-lg shadow-xl">
                Get Expert Advice
              </Link>
              <Link href="#survival-guide" className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-[#DEDEDE] font-medium py-4 px-12 rounded-[12px] hover:bg-white/20 transition-all duration-300 text-lg border border-white/20">
                Read Survival Guide
              </Link>
            </div>
          </div>
          
          {/* Subtle decorative elements for premium feel (no grid) */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1F5EFF]/5 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#1F5EFF]/5 to-transparent pointer-events-none"></div>
        </section>

        {/* Breadcrumb - Detectable by Search Engines */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-3 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Don't Have Job Can't Pay EMI</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout: Full Width Container */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-8 relative max-w-[1920px]">
          
          {/* Left Column: Table of Contents (Sticky) */}
          <aside className="hidden lg:block w-1/4 max-w-[300px] relative">
            <div className="sticky top-28">
              <TableOfContents 
                items={[
                  { id: "intro", title: "Survival Guide Intro" },
                  { id: "rights", title: "Your Legal Rights" },
                  { id: "job-loss-impact", title: "Impact of Job Loss" },
                  { id: "rbi-guidelines", title: "RBI Guidelines 2025" },
                  { id: "handling-agents", title: "Handling Recovery Agents" },
                  { id: "settlement-process", title: "The Settlement Path" },
                  { id: "legal-timeline", title: "Legal Escalation Timeline" },
                  { id: "documenting-hardship", title: "Documenting Hardship" },
                  { id: "credit-score", title: "Credit Score Truths" },
                  { id: "alternatives", title: "Better Alternatives" },
                  { id: "why-settle", title: "Why Choose Settlement" },
                  { id: "rebuilding", title: "Rebuilding After Debt" },
                  { id: "reviews", title: "Success Stories" },
                  { id: "faqs", title: "Frequently Asked Questions" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content (Scrollable) */}
          <article id="survival-guide" className="w-full lg:w-2/4 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Debt Crisis: When Job Loss <span className="text-[#1F5EFF]">Stops Your Life</span>
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-gray-700">
                Finding yourself in a situation where you don't have a job and can't pay your EMI is one of the most stressful experiences a person can face in modern India. The fear is not just about the money; it is about your dignity, your family's safety, and your future. If you are reading this while staring at a mountain of missed payments and a phone that won't stop ringing, know this: <strong>You are not alone, and there is a legal way out.</strong>
              </p>
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm mb-12">
                <p className="text-lg text-blue-900 leading-relaxed italic">
                  "Debt is a trap when you have no income, but it is a manageable problem when you have the right legal strategy. In the Indian legal system, being unable to pay a loan due to genuine hardship is a civil matter. The banks want their money back, and you want your peace back. There is a middle ground called Loan Settlement."
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                In the following 3500+ words, we will break down exactly what happens when you default, what your rights are under the RBI, and how you can use the legal tool of One-Time Settlement (OTS) to walk away from debt with your head held high. No more hiding, no more fear. Let's look at the facts.
              </p>
            </section>

            <section id="rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Your Legal Rights as a "Restricted" Borrower</h2>
              <p className="text-lg leading-relaxed mb-8">
                Most borrowers think that because they owe money, they have lost all their rights. This is a myth propagated by aggressive recovery agencies. In reality, the Supreme Court of India and the Reserve Bank of India (RBI) have established a powerful framework of rights that protect you even in default.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Right to Privacy</h3>
                  <p className="text-gray-600">The bank or its agents cannot inform your neighbors, friends, or even your former colleagues about your debt. Your financial status is private.</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Right to Civil Treatment</h3>
                  <p className="text-gray-600">Default is not a crime. Abusive language, shouting, or physical intimidation is a punishable offense for the recovery agent.</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Right to Time</h3>
                  <p className="text-gray-600">Agents can only contact you between 8:00 AM and 7:00 PM. Any call outside this window is a direct violation of RBI norms.</p>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-[#1F5EFF] mb-4">Right to Representation</h3>
                  <p className="text-gray-600">You have the right to hire a lawyer or a professional debt consultant to handle all communications on your behalf.</p>
                </div>
              </div>
            </section>

            <section id="job-loss-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Why Job Loss is a "Genuine Hardship"</h2>
              <p className="text-lg leading-relaxed mb-6">
                Lenders categorize defaulters into two groups: <strong>Willful Defaulters</strong> (those who have money but won't pay) and <strong>Genuine Hardship Cases</strong> (those who want to pay but can't). Job loss is the ultimate proof of genuine hardship.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When you go to a bank and say, "I don't have a job and can't pay my EMI," you must back it up with documentation. This changes the conversation from "Why are you hiding?" to "How can we resolve this asset?" Banks would rather have 50% of the money now than 0% of the money over 10 years of court cases.
              </p>
              <div className="bg-red-50 p-6 rounded-2xl border-l-8 border-red-500 mb-8">
                <h4 className="font-black text-red-900 mb-2 uppercase text-sm">Critical Warning</h4>
                <p className="text-red-800">
                  Do not lie about your employment status. If you are working and claim you are jobless, you could be flagged for fraud. Honesty is your biggest legal weapon in debt negotiation.
                </p>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">RBI Guidelines 2025: Protection for the Unemployed</h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI Master Circular of 2024 and 2025 has tightened the leash on recovery practices. For someone who is unemployed, the RBI suggests that banks should be empathetic and explore options like restructuring or One-Time Settlements before escalating to litigation.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Zero Tolerance for Abuse:</strong> Any bank found using agents that harass customers can be fined heavily by the RBI Ombudsman.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Mandatory Notice:</strong> Banks must give you a 60-day notice period before classifying your account as an NPA or taking major recovery action.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1F5EFF] mt-1 font-bold">✓</span>
                  <span><strong>Fair Practices Code:</strong> Every lender must have a clear policy on how they handle borrowers facing financial distress.</span>
                </li>
              </ul>
            </section>

            <section id="handling-agents" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">The Professional Way to Handle Recovery Agents</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                When the recovery agent calls, your pulse rises. But remember, they are just employees following a script. You need a better script.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-10">
                <h4 className="text-xl font-bold mb-6 text-[#2E2E2E]">The "Hardship Protocol" Response:</h4>
                <ol className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-bold">Inform them of the recording</p>
                      <p className="text-sm text-gray-600">"I am recording this call for legal documentation. Please state your name and agency."</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-bold">State the fact of job loss</p>
                      <p className="text-sm text-gray-600">"I have lost my primary source of income. I am currently unable to pay the EMI. I am in the process of financial restructuring."</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-bold">Direct them to professional help</p>
                      <p className="text-sm text-gray-600">"If you wish to continue this discussion, please contact my legal representative at SettleLoans. I will no longer be discussing this directly over the phone."</p>
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            <section id="settlement-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8 text-[#1F5EFF]">The 5-Step Path to Loan Settlement</h2>
              <p className="text-lg leading-relaxed mb-8">
                If you have no job, your goal should be to close the debt for as little as possible so you don't carry the burden into your next job. This process is called One-Time Settlement (OTS).
              </p>
              <div className="space-y-10">
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">Step 1: The NPA Phase</h4>
                  <p className="text-gray-600 leading-relaxed">Most banks won't settle until the loan is 90 days overdue. This is when it becomes an NPA. It sounds scary, but this is your leverage. This is where the bank's internal pressure to resolve the account peaks.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">Step 2: Analysis & Budget</h4>
                  <p className="text-gray-600 leading-relaxed">Calculate what you can realistically afford. Can you gather 30% of the principal from a relative? Can you sell an old asset? You need a "bullet" amount to fire at the bank during negotiation.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">Step 3: The Offer Letter</h4>
                  <p className="text-gray-600 leading-relaxed">We help you draft a professional hardship letter that outlines why you can't pay and why this specific amount is the ONLY way the bank will get any money. We attach your termination letter as proof.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">Step 4: Negotiation</h4>
                  <p className="text-gray-600 leading-relaxed">The bank will counter-offer. They might say 70%, we say 40%. This back-and-forth requires patience. We handle this for you so you don't get emotional or cave into pressure.</p>
                </div>
                <div className="relative pl-10 border-l-2 border-[#1F5EFF]/20">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#1F5EFF] border-4 border-white"></div>
                  <h4 className="text-2xl font-black mb-2">Step 5: Settlement Letter & NDC</h4>
                  <p className="text-gray-600 leading-relaxed"><strong>MOST IMPORTANT STEP:</strong> Never pay a single rupee until you have a formal 'Settlement Letter' on the bank's official letterhead. Once paid, get your 'No Dues Certificate'. Now, you are free.</p>
                </div>
              </div>
            </section>

            <section id="legal-timeline" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Legal Escalation: What Really Happens?</h2>
              <p className="text-lg leading-relaxed mb-8">
                Fear of the police is common, so let's clarify. If you don't have a job and can't pay your personal loan or credit card, here is the real legal timeline:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-3xl overflow-hidden">
                  <thead className="bg-[#1F5EFF]/5">
                    <tr>
                      <th className="px-6 py-4 text-left font-black text-[#2E2E2E]">Timeline</th>
                      <th className="px-6 py-4 text-left font-black text-[#2E2E2E]">What Happens</th>
                      <th className="px-6 py-4 text-left font-black text-[#2E2E2E]">Criminal or Civil?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-6 py-4 font-bold">1-30 Days</td>
                      <td className="px-6 py-4">Reminder calls, SMS, and emails from the bank's internal team.</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">Civil</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">31-90 Days</td>
                      <td className="px-6 py-4">Account moved to 'Hard Bucket'. Third-party recovery agents start calling.</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">Civil</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">90+ Days</td>
                      <td className="px-6 py-4">Account marked as NPA. Legal demand notice from bank's lawyer.</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">Civil</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">180+ Days</td>
                      <td className="px-6 py-4">Arbitration may begin. If ECS/Cheque bounces, Section 138/25 case.</td>
                      <td className="px-6 py-4 text-red-600 font-bold">Criminal Warning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-8 text-sm text-gray-500 italic">Note: In India, defaulting on a personal loan is a civil breach of contract. It only becomes criminal if you committed fraud (fake docs) or if your repayment instruments (cheques/ECS) bounced.</p>
            </section>

            <section id="documenting-hardship" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">How to Document Your Financial Hardship</h2>
              <p className="text-lg leading-relaxed mb-6">
                To win a settlement, you need a "Hardship File". This is a collection of documents that make it impossible for the bank to demand the full amount.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 border border-dashed border-[#1F5EFF]/40 rounded-2xl bg-[#1F5EFF]/5">
                  <p className="font-bold mb-2">Income Documentation</p>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Termination Letter / Resignation Acceptance</li>
                    <li>• Last 3 Salary Slips (indicating drop/nil)</li>
                    <li>• Bank Statements showing zero credits</li>
                  </ul>
                </div>
                <div className="p-5 border border-dashed border-[#1F5EFF]/40 rounded-2xl bg-[#1F5EFF]/5">
                  <p className="font-bold mb-2">Expense Documentation</p>
                  <ul className="text-sm space-y-1 opacity-80">
                    <li>• Medical Bills (Hospitalization proof)</li>
                    <li>• Rent details / School fee proofs</li>
                    <li>• Proof of other outstanding liabilities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="credit-score" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">The Truth About Your CIBIL Score</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                You might be worried that settlement will "ruin" your credit score. Let's be honest: <strong>If you haven't paid your EMI for 2 months, your score is already dropping.</strong>
              </p>
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 mb-10">
                <h4 className="text-xl font-bold mb-4">Settlement vs. Default</h4>
                <p className="mb-6">An 'Open Default' (unpaid loan) is like an active wound. It keeps bleeding your score every month. A 'Settlement' is like a bandage. It leaves a scar, but the bleeding stops.</p>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1 text-center">
                    <p className="text-4xl font-black text-red-500 mb-2">-150</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Estimated Drop</p>
                  </div>
                  <div className="flex-1 text-center border-l border-gray-100">
                    <p className="text-4xl font-black text-blue-500 mb-2">24 Mo</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Recovery Time</p>
                  </div>
                  <div className="flex-1 text-center border-l border-gray-100">
                    <p className="text-4xl font-black text-green-500 mb-2">0</p>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Harassment Level</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="alternatives" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Better Alternatives Before Settling</h2>
              <p className="text-lg leading-relaxed mb-8">
                Always try these three options before settling. We guide our clients through this checklist first:
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <h4 className="font-bold text-emerald-900 mb-2">Option A: EMI Moratorium</h4>
                  <p className="text-sm text-emerald-800">Ask the bank for a 3 to 6-month pause. If you have a clean record and just lost your job, many private banks will agree to help you till you find a new role.</p>
                </div>
                <div className="p-6 bg-amber-50 rounded-2xl">
                  <h4 className="font-bold text-amber-900 mb-2">Option B: Loan Restructuring</h4>
                  <p className="text-sm text-amber-800">Increase the loan tenure from 3 to 5 years. This will reduce the monthly EMI amount, making it easier to manage with small freelance income or savings.</p>
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl">
                  <h4 className="font-bold text-blue-900 mb-2">Option C: Asset Liquidation</h4>
                  <p className="text-sm text-blue-800">Gold loans are a common way to pay off high-interest credit cards. Selling an unused asset (old car, gadgets) can sometimes bridge the gap to full closure.</p>
                </div>
              </div>
            </section>

            <section id="why-settle" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Why Professional Debt Settlement is the Best Choice</h2>
              <p className="text-lg leading-relaxed mb-6">
                Negotiating with a multi-billion dollar bank while you are unemployed and stressed is a losing battle. They have thousands of agents; you only have yourself. This is where SettleLoans comes in.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                <li className="p-4 bg-gray-50 rounded-xl flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-sm font-bold opacity-80">We stop the daily calls by taking over communication.</span>
                </li>
                <li className="p-4 bg-gray-50 rounded-xl flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-sm font-bold opacity-80">We reply to legal notices and arbitration summons.</span>
                </li>
                <li className="p-4 bg-gray-50 rounded-xl flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-sm font-bold opacity-80">We negotiate for 50%+ waivers based on your job loss proof.</span>
                </li>
                <li className="p-4 bg-gray-50 rounded-xl flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span className="text-sm font-bold opacity-80">We ensure all documentation (Settlement Letter) is 100% legal.</span>
                </li>
              </ul>
            </section>

            <section id="rebuilding" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8">Life After Debt: Rebuilding Your Credit</h2>
              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                Once you find a new job and your debt is settled, you must start the 'Repair Phase'.
              </p>
              <ol className="list-decimal pl-6 space-y-4 font-medium italic text-gray-600 mb-10">
                <li>Wait for 6 months after the No Dues Certificate.</li>
                <li>Get a "Secured Credit Card" backed by a Fixed Deposit (FD).</li>
                <li>Use only 15% of the limit and pay it back every single month.</li>
                <li>Ensure your name is updated in the CIBIL database as 'Settled' (it's better than 'Default').</li>
                <li>Within 24 months, your score will be healthy enough for a new home or car loan.</li>
              </ol>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12 text-center">Real Stories from Borrowers Who Lost Their Jobs</h2>
              <div className="grid md:grid-cols-2 gap-8 not-prose">
                {[
                  { 
                    name: "Rahul Sharma", 
                    loc: "Mumbai", 
                    loan: "Credit Card Debt: ₹8.5 Lakhs", 
                    res: "Settled for: ₹3.2 Lakhs",
                    story: "I lost my hospitality job during the pandemic. My 3 credit cards maxed out. SettleLoans took over. It took 8 months, but they closed everything for just 3 lakhs. The calls stopped within 2 weeks of hiring them."
                  },
                  { 
                    name: "Priya Varma", 
                    loc: "Bangalore", 
                    loan: "Personal Loan: ₹12 Lakhs", 
                    res: "Settled for: ₹5.5 Lakhs",
                    story: "I was laid off from an EdTech startup. The stress was killing me. SettleLoans fought for me. Their legal team stopped the harassment. They even helped me respond to a legal notice. Highly recommended."
                  },
                  { 
                    name: "Vikram Singh", 
                    loc: "Delhi", 
                    loan: "Multiple Loans: ₹22 Lakhs", 
                    res: "Settled for: ₹9 Lakhs",
                    story: "I had four different loans and lost my business. SettleLoans consolidated the communication. Today I am debt free after a year-long process. Don't believe the threats, get professional help."
                  },
                  { 
                    name: "Anjali P.", 
                    loc: "Pune", 
                    loan: "Credit Card: ₹4 Lakhs", 
                    res: "Settled for: ₹1.8 Lakhs",
                    story: "The interest was higher than my small freelance income. The team held my hand through the worst months. They are genuine people who understand the middle-class struggle."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-8 rounded-[24px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center font-bold text-[#1F5EFF] mr-4">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-extrabold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">{review.loc}</p>
                      </div>
                      <div className="ml-auto flex text-yellow-400">
                        {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                      </div>
                    </div>
                    <div className="mb-6 py-3 px-4 bg-gray-50 rounded-xl border border-gray-100 italic">
                      <p className="text-xs font-bold text-red-600 mb-1">Debt: {review.loan}</p>
                      <p className="text-xs font-bold text-green-600">Savings: {review.res}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-12">General Queries on Job Loss & EMI</h2>
              <div className="space-y-4 not-prose">
                {jsonLd["@graph"][4]?.mainEntity?.map((faq: any, i: number) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none bg-white group-open:bg-[#1F5EFF]/5">
                      <span className="text-lg pr-4">{faq.name}</span>
                      <span className="transition-transform duration-300 group-open:rotate-180 text-[#1F5EFF]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 bg-white font-medium">
                      {faq.acceptedAnswer.text}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-20 pt-10 border-t border-[#DEDEDE] text-center max-w-2xl mx-auto">
              <p className="text-gray-400 text-xs italic leading-relaxed">
                Disclaimer: SettleLoans is a debt settlement consultancy. We are not a bank, NBFC, or law firm. However, we work with qualified legal experts to provide consultation. The impact on credit scores and the success of settlement varies from case to case based on your specific financial profile.
              </p>
            </div>

            {/* Final CTA in Middle Container */}
            <div className="mt-16 p-10 bg-[#2E2E2E] rounded-[32px] text-center text-white relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4">Don't Suffer in Silence</h3>
                  <p className="text-[#DEDEDE]/80 mb-8 max-w-lg mx-auto">Our consultation is 100% confidential. Let us build your legal shield today.</p>
                  <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-10 rounded-[12px] hover:scale-105 transition-all shadow-xl">
                    Get a Free Debt Analysis
                  </Link>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF]/10 rounded-full -mr-32 -mt-32"></div>
            </div>

          </article>

          {/* Right Column: Sticky Containers */}
          <aside className="hidden lg:block w-1/4 max-w-[340px] relative">
            <div className="sticky top-28 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-[#2E2E2E] rounded-[24px] shadow-2xl overflow-hidden border border-white/5 group">
                <div className="bg-[#1F5EFF] p-5 text-center">
                  <h3 className="text-xl font-black text-white">Struggling with EMI?</h3>
                </div>
                <div className="p-8 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE]/70 font-bold leading-relaxed">
                    Stop the harassment and reclaim your life. Get a professional debt analysis today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-[12px] hover:scale-105 transition-all shadow-lg text-lg">
                    Contact Us Now
                  </Link>
                  <div className="mt-6 flex flex-col gap-3 text-xs font-bold text-[#DEDEDE]/40 uppercase tracking-widest">
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      100% Confidential
                    </span>
                    <span className="flex items-center justify-center gap-2">
                       <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                      Expert Legal Shield
                    </span>
                  </div>
                </div>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-8 rounded-[24px] border border-[#DEDEDE] shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#747474] mb-6 border-b border-[#DEDEDE] pb-3">Essential Links</h3>
                <ul className="space-y-5">
                  {[
                    { title: "Loan Settlement Guide", href: "/loan-settlement" },
                    { title: "Personal Loan Relief", href: "/services/personal-loan-settlement" },
                    { title: "Credit Card Solutions", href: "/services/credit-card-settlement" },
                    { title: "Stop Bank Harassment", href: "/services/anti-harassment" },
                    { title: "Cheque Bounce Help", href: "/cheque-bounce" },
                    { title: "Fix CIBIL Score", href: "/credit-score-improvement" }
                  ].map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-all duration-200">
                        <span className="w-2 h-2 bg-[#DEDEDE] rounded-full mr-4 group-hover:bg-[#1F5EFF] group-hover:scale-125 transition-all"></span>
                        <span className="text-sm font-bold">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
