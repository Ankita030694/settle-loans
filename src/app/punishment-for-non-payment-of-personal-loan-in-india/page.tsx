import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Punishment for Non-Payment of Personal Loan in India | Legal Rights & Solutions",
  description: "Understand the legal consequences, punishment, and RBI guidelines for non-payment of personal loans in India. Learn your rights against harassment and how to settle loans legally.",
  alternates: {
    canonical: "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india",
  },
};

export default function PunishmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#webpage",
        "url": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india",
        "name": "Punishment for Non-Payment of Personal Loan in India | Legal Rights & Solutions",
        "description": "Comprehensive guide on legal consequences, punishment, and RBI guidelines for personal loan defaults in India.",
        "breadcrumb": { "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#breadcrumb",
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
            "name": "Punishment for Non-Payment of Personal Loan",
            "item": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#article",
        "headline": "Punishment for Non-Payment of Personal Loan in India: A Deep Dive",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Research Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-02-26",
        "dateModified": "2024-02-26",
        "description": "Explore the civil and criminal consequences of defaulting on a personal loan in India, RBI guidelines, and how to find a legal solution."
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#product",
        "name": "Personal Loan Debt Relief Consultation",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "2150"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Khanna" },
            "datePublished": "2024-01-15",
            "reviewBody": "I was terrified of the legal notices I was receiving. SettleLoans explained my rights and helped me settle my personal loan of ₹10 lakhs for a manageable amount. Their empathetic approach really helped my mental health.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Simran Kaur" },
            "datePublished": "2024-02-02",
            "reviewBody": "Professional and compassionate. They handled the recovery agents who were harassing my family. I am finally debt-free thanks to their negotiation team.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/punishment-for-non-payment-of-personal-loan-in-india#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I be jailed for non-payment of a personal loan in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, no. Defaulting on a loan is a civil offense. However, you can face criminal charges if you had fraudulent intent or if your repayment cheques bounce under Section 138 of the Negotiable Instruments Act."
            }
          },
          {
            "@type": "Question",
            "name": "What is the legal punishment for personal loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The punishment is primarily financial and civil: a drop in CIBIL score, heavy penalties, and civil lawsuits. If it is a cheque bounce case, it can involve imprisonment of up to 2 years or a fine of up to twice the cheque amount."
            }
          },
          {
            "@type": "Question",
            "name": "What are the RBI guidelines for recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "RBI guidelines prohibit harassment. Agents can only call between 8 AM and 7 PM, cannot use abusive language, and must respect your privacy. Harassment can lead to heavy penalties for the bank."
            }
          },
          {
            "@type": "Question",
            "name": "Can a bank take my property for an unsecured personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For unsecured loans, banks cannot seize property without a court order. They must first file a civil suit and get a judgment. They cannot use the SARFAESI Act directly as they would for a home or car loan."
            }
          },
          {
            "@type": "Question",
            "name": "How does personal loan default affect my future?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It severely damages your CIBIL score, making it nearly impossible to get new loans or credit cards for several years. It can also lead to mental stress due to recovery calls and legal notices."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between a civil and criminal loan case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A civil case is for the recovery of money. A criminal case involves elements like cheating (IPC 420) or a bounced cheque (Sec 138), which can lead to arrest or jail time."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle my loan after receiving a legal notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, you can settle at any stage. Even after a legal notice, banks are usually open to negotiation to recover at least a portion of the debt without a long court battle."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if recovery agents are harassing me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Complain to the bank's nodal officer, then to the RBI Ombudsman. You can also seek legal help from firms like SettleLoans to stop the harassment and manage your debt."
            }
          },
          {
            "@type": "Question",
            "name": "Does non-payment of a loan impact my job?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Directly, it might not. However, if a court orders wage garnishment or if recovery agents call your workplace, it could affect your reputation. Some sectors like banking may check credit history."
          }
          },
          {
            "@type": "Question",
            "name": "How long does a default stay on a credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A default or a 'settled' status stays on your credit report for about 7 years, impacting your creditworthiness throughout that period."
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

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Comprehensive Debt Protection Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Punishment for Non-Payment of <br className="hidden md:block"/> Personal Loan in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.2] font-normal">
              If you are feeling cornered by debt, do not worry. We are here to guide you through the legal maze. Understand the actual legal consequences and discover how you can find a way back to financial freedom. We are in this together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Seek Legal Help Now
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
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
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Punishment for Non-Payment of Personal Loan
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents 
              items={[
                { id: "introduction", title: "A Message of Hope" },
                { id: "consequences-overview", title: "Consequences Overview" },
                { id: "civil-vs-criminal", title: "Civil vs Criminal Liability" },
                { id: "section-138", title: "Section 138: Cheque Bounce" },
                { id: "legal-fraud", title: "The Fraud Angle (IPC 420)" },
                { id: "rbi-guidelines", title: "RBI Recovery Guidelines" },
                { id: "harassment-rights", title: "Your Rights Against Harassment" },
                { id: "recovery-process", title: "The Standard Recovery Journey" },
                { id: "impact-life", title: "Impact on Your Life & Score" },
                { id: "debt-settlement", title: "The Solution: Debt Settlement" },
                { id: "reviews", title: "Expert Reviews & Success" },
                { id: "faqs", title: "Frequently Asked Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E] leading-relaxed">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 relative z-10">
                  Fear is the First Penalty: <span className="text-emerald-700">We Understand Your Pain</span>
                </h2>
                <p className="text-lg mb-6 relative z-10 leading-relaxed">
                  If you are reading this, chances are you are going through one of the most stressful periods of your life. The weight of an unpaid personal loan can feel like an anchor pulling you down into a deep ocean. Every phone call from an unknown number makes your heart race. Every letter in the mail brings a wave of anxiety that ruins your entire day. You might feel like you have failed your family, or like you are a criminal for not being able to meet your financial obligations.
                </p>
                <p className="text-lg mb-6 relative z-10 leading-relaxed">
                  First, take a deep breath. Please do not worry. You are not a criminal because you cannot pay your debts. Life is unpredictable: medical emergencies happen, jobs are lost, businesses fail, and global economies shift. At SettleLoans, we want you to know that we are in this together. We have seen thousands of people in your exact position, and we have seen them walk out into the light of financial freedom. Contact us, and we will get you to a solution. There is always a way out, and you do not have to walk this path alone.
                </p>
                <p className="text-lg font-semibold text-emerald-800 relative z-10">
                  We are here to console you, to shield you, and to fight for you. Your peace of mind is worth more than any number on a bank statement.
                </p>
              </div>
            </section>

            <section id="consequences-overview" className="scroll-mt-32 mb-12 text-lg">
              <h2 className="text-3xl font-black mb-8 border-b-4 border-[#1F5EFF] pb-2 inline-block">The Reality of Default Consequences</h2>
              <p className="mb-6">
                When a borrower defaults on a personal loan in India, the consequences are multifaceted. They are not limited to just financial penalties. They extend to your legal standing, your social reputation, and your future access to credit. However, it is essential to distinguish between a "genuine default" and "wilful default." A genuine default happens when you want to pay but simply do not have the resources. A wilful default is when you have the money but choose to hide it from the bank.
              </p>
              <p className="mb-6 text-[#2E2E2E] opacity-90">
                Lenders typically classify your account based on the duration of non-payment. This classification determines the level of "punishment" or pressure you will face. From the first 30 days of delay to the critical 90-day mark where your account becomes a Non-Performing Asset (NPA), each stage has a specific set of actions that the bank will take against you.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] mb-3">Financial Penalties</h3>
                  <p className="text-sm">Banks will charge late payment fees and penal interest that can significantly inflate your debt over a few months. Sometimes, these penalties can even exceed the principal amount if left unchecked for years.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] mb-3">CIBIL Score Crash</h3>
                  <p className="text-sm">Your credit score will drop rapidly. A single default can reduce your score by 100 points, effectively banning you from future credit. This score is your financial character certificate in the modern world.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] mb-3">Civil Litigation</h3>
                  <p className="text-sm">Lenders have the right to file a civil suit for recovery under Order 37 of the CPC (Code of Civil Procedure). This involves a court process where the bank asks for a decree to recover the money from your assets.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="font-black text-[#1F5EFF] mb-3">Reputation Impact</h3>
                  <p className="text-sm">Recovery efforts, unfortunately, can sometimes spill into your social and professional circles. Agents might call references you provided, or in rare unethical cases, reach out to your workplace.</p>
                </div>
              </div>
            </section>

            <section id="civil-vs-criminal" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6">Is It a Civil or Criminal Offense? A Detailed Legal Breakdown</h2>
              <p className="mb-6">
                One of the biggest myths used by recovery agents to scare borrowers is the threat of immediate arrest. They might say, "The police are coming to your house tomorrow," or "We have filed an FIR against you." In the Indian legal system, defaulting on a personal loan is primarily a **civil matter**. A personal loan is a contract. When you cannot pay, you have breached that contract.
              </p>
              <p className="mb-6">
                To understand why you are not a criminal, we must look at the Indian Penal Code (IPC) and various judicial precedents. The law recognizes that a person's financial situation can change. If you were a criminal for every missed payment, millions of honest citizens would be behind bars. The police generally do not get involved in loan defaults unless there is a specific criminal element like fraud or physical violence.
              </p>
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900">The Civil Nature of Debt</h3>
                <p className="text-blue-800 mb-4">
                  The Supreme Court of India and various High Courts have repeatedly held that the inability to pay a debt due to financial distress does not make a person a criminal. You cannot be jailed simply because you are poor or facing a crisis. The constitution protects your personal liberty.
                </p>
                <p className="text-blue-800 italic">
                  In the landmark case of Jolly George Varghese v. Bank of Cochin, the Supreme Court held that "to cast a person in prison because of his poverty and consequent inability to meet his contractual liability is a violation of Article 21 of the Constitution."
                </p>
              </div>
              <p className="mb-6">
                However, there are two major areas where your situation can transform from a civil dispute into a criminal one: **Cheque Bouncing (Section 138)** and **Cheating (Section 420)**. It is vital to understand these so you can protect yourself. If you have not committed fraud and have not had a cheque bounce, you are almost 100% safe from any "police" action.
              </p>
            </section>

            <section id="section-138" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6">Section 138 of the Negotiable Instruments Act</h2>
              <p className="mb-4">
                This is the most critical legal weapon in a lender's arsenal. When you take a loan, you often sign a mandate for NACH (National Automated Clearing House) or provide post-dated cheques (PDCs). If your EMI payment fails because of "Insufficient Funds," it can be treated as a cheque bounce.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-8 border-red-500 mb-8">
                <h3 className="text-2xl font-black text-red-900 mb-4">The Danger of Sec 138</h3>
                <ul className="space-y-4 text-red-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Punishment:</strong> Imprisonment for a term which may extend to two years, or with fine which may extend to twice the amount of the cheque, or with both.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Legal Notice:</strong> The bank must send you a formal notice within 30 days of the bounce. You have 15 days to pay after receiving that notice.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">•</span>
                    <span><strong>Filing:</strong> If you don't pay within those 15 days, the bank can file a criminal complaint in court within the next 30 days.</span>
                  </li>
                </ul>
              </div>
              <p className="mb-6">
                But do not panic. Most banks use this as a pressure tactic. Even if a case is filed, it is a compoundable offense. This means you can settle the matter at any point by paying the agreed amount, and the case will be withdrawn.
              </p>
            </section>

            <section id="legal-fraud" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6">The Fraud Angle: IPC Section 420</h2>
              <p className="mb-6">
                Lenders may sometimes try to file a complaint under Section 420 (Cheating) or Section 415 of the Indian Penal Code. This only happens if they can prove you had a "dishonest intent" when you took the loan. 
              </p>
              <p className="mb-6">
                If you gave fake salary slips, forged documents, or showed a fake business to get the loan, then you are in serious trouble. That is a criminal act. However, if you took the loan with every intention to pay, but later lost your job or faced a crisis, **IPC 420 does not apply**.
              </p>
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 italic">
                "Honest borrowers who fail due to market conditions or personal tragedies are shielded by the law. Criminal intent is the key."
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6">RBI Guidelines: Use Them as Your Shield</h2>
              <p className="mb-6">
                The Reserve Bank of India (RBI) has very strict rules regarding how banks and NBFCs collect their money. They cannot behave like local thugs. If they do, they can face heavy fines and even loss of their license.
              </p>
              <div className="space-y-6">
                <div className="p-6 border border-[#DEDEDE] rounded-xl">
                  <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Rule #1: The Time Lock</h4>
                  <p>Recovery agents can only call you or visit you between 8:00 AM and 7:00 PM. Calls at midnight are a violation of RBI protocol.</p>
                </div>
                <div className="p-6 border border-[#DEDEDE] rounded-xl">
                  <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Rule #2: Privacy Protocol</h4>
                  <p>Agents cannot call your neighbors, distant relatives, or your HR department to shame you. Your debt is a private matter between you and the bank.</p>
                </div>
                <div className="p-6 border border-[#DEDEDE] rounded-xl">
                  <h4 className="font-black text-[#1F5EFF] mb-2 uppercase text-xs tracking-widest">Rule #3: No Abusive Language</h4>
                  <p>Shouting, using foul language, or making threats is strictly prohibited. You have the right to record these calls and use them as evidence.</p>
                </div>
              </div>
            </section>

            <section id="harassment-rights" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6 mt-16">Your Fundamental Rights as a Borrower: The Legal Shield</h2>
              <p className="mb-6">
                Under the Indian Constitution, specifically Article 21, every citizen has the "Right to Life and Personal Liberty." The courts have clarified that this includes the right to live with dignity. Mental harassment by lenders can be a violation of this fundamental right. You are a citizen with rights, not a target for abuse.
              </p>
              <p className="mb-6">
                Many borrowers suffer in silence because they feel guilty. This guilt is what recovery agents exploit. They want you to feel like you have no rights. But the truth is very different. Even if you owe money, you have the right to be treated with respect.
              </p>
              <div className="bg-white p-8 rounded-2xl border-2 border-[#1F5EFF] shadow-lg mb-8">
                <h3 className="text-2xl font-black mb-4">The Universal Bill of Rights for Borrowers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-black">1.</span>
                    <div>
                      <span className="font-bold">The Right to Privacy:</span>
                      <p className="text-sm opacity-80">The bank cannot discuss your debt with your neighbors, your landlord, or your distant cousins. This is a gross violation of privacy laws.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-black">2.</span>
                    <div>
                      <span className="font-bold">The Right to Civil Interaction:</span>
                      <p className="text-sm opacity-80">Threats of physical harm, abusive language, or shouting at your doorstep are criminal acts. You can file an FIR for criminal intimidation.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-black">3.</span>
                    <div>
                      <span className="font-bold">The Right to Notice:</span>
                      <p className="text-sm opacity-80">You must be given sufficient notice before any legal action is taken. Surprise visits or "surprise" court cases are generally not the norm.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <h3 className="text-2xl font-black mb-4">How to Stop Harassment Step-by-Step</h3>
              <ol className="list-decimal pl-6 space-y-4">
                <li><strong>Record Everything:</strong> Keep a log of all calls, record conversations, and save every SMS. Digital evidence is king in modern law.</li>
                <li><strong>The 'Call Blocking' Strategy:</strong> While you should not ignore the bank entirely, you have the right to block numbers that call you 50 times a day. Limit your communication to official channels.</li>
                <li><strong>Lodge a Complaint:</strong> Write a formal email to the Bank's Principal Nodal Officer first. State clearly that you are facing harassment. Give them 30 days to respond.</li>
                <li><strong>Escalate to RBI:</strong> If the bank doesn't help, file a complaint on the RBI CMS (Complaint Management System) portal. Lenders fear the RBI Ombudsman because they can lose their license for repeated violations.</li>
                <li><strong>Police Complaint:</strong> If there is physical intimidation, such as an agent not leaving your house or threatening your family, do not hesitate to call 100 or file an FIR at your local police station.</li>
              </ol>
            </section>

            <section id="recovery-process" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6 mt-16">The Standard Recovery Journey: What Happens Month by Month</h2>
              <p className="mb-6">Understanding the timeline of a default can help you prepare and negotiate better. Most banks follow a standard sequence that is designed to maximize pressure on the borrower as time goes by.</p>
              <div className="relative pl-8 border-l-2 border-[#1F5EFF]/20 space-y-12 my-12">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[#1F5EFF]">1</div>
                  <h4 className="font-black text-xl mb-2">Month 1: The Soft Phase</h4>
                  <p className="text-sm opacity-80">You will receive polite reminders. They assume you might have missed the date or have a technical issue. This is the best time to speak to the bank if you have a one-month cash flow problem.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-bold text-yellow-600">2</div>
                  <h4 className="font-black text-xl mb-2">Month 2: The Persistence Phase</h4>
                  <p className="text-sm opacity-80">Calls become more frequent and firm. You are now in SMA-1 category. The bank starts worrying about your ability to pay. They might offer you a 'restructuring' plan, but beware of high interest in these plans.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center font-bold text-orange-600">3</div>
                  <h4 className="font-black text-xl mb-2">Month 3: The Critical Phase</h4>
                  <p className="text-sm opacity-80">This is the 'Bucket 3' or SMA-2 stage. The pressure is at its peak. This is often the stage where the bank decides whether to keep trying to collect or to prepare for legal action. It is the perfect time to engage a professional settlement firm.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center font-bold text-red-600">4</div>
                  <h4 className="font-black text-xl mb-2">Month 4+: The Legal/NPA Phase</h4>
                  <p className="text-sm opacity-80">Your account is now an NPA (Non-Performing Asset). The bank might 'sell' your debt to a collection agency or send your file to their legal department. You will likely start receiving formal legal notices from lawyers.</p>
                </div>
              </div>
            </section>

            <section className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6 mt-16">What to do if you receive a Court Summons?</h2>
              <p className="mb-6">
                Receiving a paper from a court can be terrifying. But a summons is not a warrant for your arrest. It is an invitation to tell your side of the story. If you ignore it, the court will pass an "Ex-Parte" order, which means they will rule in favor of the bank because you weren't there to defend yourself.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold mb-4">Your Legal To-Do List:</h4>
                <ul className="space-y-3 text-sm">
                  <li><strong>1. Verify the Summons:</strong> Check if it's from a real court or a fake notice from an agency. Real summons have a case number (CNR number) that you can check on the e-Courts app.</li>
                  <li><strong>2. Hire a Lawyer:</strong> If it's a real case, you need professional help. Firms like SettleLoans have specialized lawyers who deal with bank recovery cases daily.</li>
                  <li><strong>3. Attend the Hearing:</strong> You don't always have to go yourself if you have a lawyer. But the case must be represented.</li>
                  <li><strong>4. Use Lok Adalat:</strong> Ask your lawyer about moving the case to Lok Adalat. This is a forum where judges help you and the bank reach a compromise (Settlement) quickly and cheaply.</li>
                </ul>
              </div>
            </section>

            <section id="impact-life" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6">The Real Impact on Your Life: Beyond Just Numbers</h2>
              <p className="mb-6">The punishment for a personal loan default is not just about the money you owe today. It is about the "Financial Exile" it creates. However, unlike a real prison, you can escape this financial exile with time and correct steps. </p>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-black mb-2 text-red-600 uppercase text-xs">The Psychological Toll</h4>
                  <p className="text-sm">Many borrowers face severe depression and anxiety. Relentless calling and the fear of social shaming can lead to catastrophic thoughts. At SettleLoans, we provide a buffer between you and the bank so you can breathe again. Your mental health is more important than your credit score.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-black mb-2 text-red-600 uppercase text-xs">The Economic Hardship</h4>
                  <p className="text-sm">Missing EMIs often leads to a cycle of debt where you take one loan to pay another. This 'Debt Trap' is the real punishment. Breaking this cycle requires a firm decision to stop borrowing and start settling.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="font-black mb-2 text-red-600 uppercase text-xs">The Professional Risk</h4>
                  <p className="text-sm">While uncommon, some high-sensitivity jobs check your credit report. A major default might hinder your chances in the banking or fintech sectors. Settling the loan is the fastest way to start the ticker for rebuilding that reputation.</p>
                </div>
              </div>
            </section>

            <section id="debt-settlement" className="scroll-mt-32 mb-16">
              <div className="bg-[#2E2E2E] rounded-[30px] p-10 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F5EFF] opacity-10 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110"></div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 leading-tight">
                  There is a Way Out: <br/><span className="text-[#1F5EFF]">Legal Debt Settlement</span>
                </h2>
                <p className="text-lg mb-8 opacity-90 relative z-10">
                  You do not have to live in fear. Loan settlement is a legitimate, legal process where you negotiate with the bank to pay a portion of what you owe and close the account forever. It is a "One-Time Settlement" (OTS) that banks use to recover money from difficult accounts.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/20">
                  <h4 className="text-xl font-bold mb-4">How SettleLoans Helps You:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                      <span><strong>Shield from Harassment:</strong> We route all recovery calls to our legal team.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                      <span><strong>Legal Defense:</strong> We reply to all legal notices and advocate for your rights.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                      <span><strong>Maximum Savings:</strong> We negotiate to get you waivers of up to 50% or more on your principal.</span>
                    </li>
                  </ul>
                </div>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-4 px-10 rounded-xl hover:scale-105 transition-all text-xl shadow-xl relative z-10">
                   Get Your Free Analysis
                </Link>
              </div>
            </section>

            <section id="reviews" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black mt-16 mb-12 text-center">What People Say About SettleLoans</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { 
                    name: "Amit Sharma", 
                    role: "Software Engineer", 
                    text: "I was drowning in ₹15 Lakhs of personal loan debt after a health crisis. SettleLoans stepped in, handled the agents, and settled the whole thing for ₹6 Lakhs. They saved my life.",
                    rating: 5
                  },
                  { 
                    name: "Priya V.", 
                    role: "Small Business Owner", 
                    text: "The recovery agents were calling my parents. I was desperate. SettleLoans stopped it in 24 hours. Their empathy and legal knowledge are unmatched.",
                    rating: 5
                  },
                  { 
                    name: "Mohit Gupta", 
                    role: "Corporate Employee", 
                    text: "Professional, transparent, and humane. They don't just settle loans: they provide mental peace. Highly recommended for anyone in debt trap.",
                    rating: 5
                  },
                  { 
                    name: "Anjali S.", 
                    role: "Teacher", 
                    text: "I didn't know I had rights against banks. SettleLoans educated me and fought my case. I am now debt-free and rebuilding my score.",
                    rating: 5
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <p className="text-sm italic mb-4">"{review.text}"</p>
                    </div>
                    <div className="flex items-center gap-3 border-t pt-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-sm">{review.name}</h5>
                        <p className="text-xs opacity-60 uppercase tracking-tighter">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-24">
              <h2 className="text-3xl md:text-4xl font-black mt-16 mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is it possible to go to jail for a personal loan?", a: "Directly, no. It is a civil matter. However, indirect criminal consequences can arise from Section 138 (cheque bounce) or if you committed fraud during the loan application. Genuine financial hardship is never a crime." },
                  { q: "What should I do if I get a legal notice from the bank?", a: "Do not ignore it. A legal notice has a deadline. Read it carefully, consult a legal debt expert like SettleLoans, and respond within the timeframe. Ignoring it can lead to an ex-parte judgment by the court." },
                  { q: "Can my employer fire me for loan default?", a: "Usually, a company cannot fire you just for a loan default as it is a personal matter. However, if recovery agents create a scene at your office or if you work in a sensitive financial role, it might impact your reputation." },
                  { q: "How long can a bank wait before filing a case?", a: "Under the Limitation Act, a bank has 3 years from the date of default to file a civil suit for recovery. However, Section 138 cases have much shorter timelines (usually within 3-4 months of the bounce)." },
                  { q: "Can a bank take money from my other bank accounts?", a: "If you have other accounts with the same bank, they may exercise their 'Right of Set-off' to recover dues. They cannot automatically take money from accounts in other banks without a court order." },
                  { q: "What is an Lok Adalat for loans?", a: "Lok Adalats are 'People's Courts' where disputes are settled through mediation. It is a great place to settle your loan at a discount without formal court battles. It is 100% legal and binding." },
                  { q: "Can I travel abroad if I have a loan default?", a: "Yes, you can. A loan default does not stop you from traveling. Only if the court has specifically issued a Lookout Circular (rare for personal loans) or if you are declared a wilful defaulter in a massive fraud case would travel be restricted." },
                  { q: "Can banks call my parents or relatives?", a: "No. This is a clear violation of RBI guidelines. They can only contact the borrower and the co-applicant/guarantor. Calling others is harassment and can be reported." },
                  { q: "Can I settle my loan if it is in the court?", a: "Absolutely. In fact, most judges encourage settlement. You can inform the court that you are in talks for an OTS (One-Time Settlement), and they usually grant time for that." },
                  { q: "How much discount can I get in a settlement?", a: "Depending on the bank, the age of the debt, and your situation, you can get a waiver of 30% to 70% on the total outstanding amount. Professional negotiators can help you get the best deal." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border-b border-gray-200 pb-6 group">
                    <h4 className="text-xl font-black mb-3 group-hover:text-[#1F5EFF] transition-colors">{i+1}. {faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6 mt-16">Can You Travel Abroad with a Loan Default?</h2>
              <p className="mb-6">
                This is a common question prompted by fear-mongering. Many borrowers worry that they will be stopped at the airport because of an unpaid credit card or personal loan. In India, a loan default is a civil matter and does not automatically result in a travel ban.
              </p>
              <p className="mb-6">
                You can travel, get a visa, and work abroad even if you have a pending loan. The only exceptions are:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Lookout Circulars (LOC):</strong> These are usually issued for massive financial frauds (hundreds of crores) or if you are a "Wilful Defaulter" escaping a criminal trial. They are almost never issued for personal loans of a few lakhs.</li>
                <li><strong>Sec 138 Warrants:</strong> If a court has issued a non-bailable warrant against you because you ignored multiple summons in a cheque bounce case, you could be detained at the airport.</li>
              </ul>
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm">
                <p className="text-emerald-900 font-bold mb-0">Tip: Always settle your loans before planning a long-term move abroad to avoid any theoretical legal complications in the future.</p>
              </div>
            </section>

            <section className="scroll-mt-32 mb-12">
              <h2 className="text-3xl font-black mb-6 mt-16">Does Loan Default Affect Government Job Eligibility?</h2>
              <p className="mb-6">
                Many young aspirants worry that a default will ruin their dream of a government job. For most civil services, a loan default is not a disqualification as long as you have not been convicted of a criminal offense like fraud or cheating.
              </p>
              <p className="mb-6">
                However, for sensitive positions in the Banking sector (IBPS, SBI), Insurance, or some Defense roles, they might perform a background credit check. A "Settled" or "Defaulted" remark can affect your selection in these specific financial sectors. For a general government job, it usually has no impact.
              </p>
            </section>

            <div className="mt-16 pt-8 border-t border-[#DEDEDE] text-center">
              <p className="text-gray-400 text-sm italic italic">Disclaimer: SettleLoans is a consultancy and research platform. The information provided is for educational purposes and should not be considered as formal legal advice. Please consult with our legal experts for specific case details. Punishment for loan default is subject to court jurisdiction and individual bank policies.</p>
            </div>

          </article>

          {/* Right Column: Sticky Widgets */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              
              {/* CTA Widget */}
              <div className="bg-[#2E2E2E] rounded-3xl shadow-2xl p-8 text-center border border-white/10 group">
                <div className="w-16 h-16 bg-[#1F5EFF] rounded-2xl mx-auto mb-6 flex items-center justify-center rotate-3 group-hover:rotate-6 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <h3 className="text-xl font-black text-white mb-4">Dont Suffer in Silence</h3>
                <p className="text-gray-400 text-sm mb-8 font-medium">Over 5000+ borrowers helped this year alone. Let us be your shield.</p>
                <Link href="/contact" className="block w-full bg-white text-[#2E2E2E] font-black py-4 rounded-xl hover:bg-[#1F5EFF] hover:text-white transition-all shadow-lg text-sm uppercase tracking-widest">
                  Contact Us
                </Link>
              </div>

              {/* Emergency Hotline Widget */}
              <div className="bg-red-50 rounded-3xl p-8 border border-red-200 shadow-sm">
                <h4 className="text-red-600 font-black uppercase text-xs tracking-widest mb-4">Harassment Help</h4>
                <p className="text-red-900 text-sm font-bold leading-tight mb-6">Receiving abusive calls? Threatening visits? We can stop this TODAY.</p>
                <div className="flex flex-col gap-2">
                   <div className="flex items-center gap-2 text-xs font-black text-red-600">
                     <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                     <span>Legal Protection Active</span>
                   </div>
                </div>
              </div>

              {/* Related Links */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-6">Next Steps</h4>
                 <ul className="space-y-4">
                   <li>
                     <Link href="/services/loan-settlement" className="group flex items-center gap-3 text-sm font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                       <span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full group-hover:scale-150 transition-transform"></span>
                       Loan Settlement
                     </Link>
                   </li>
                   <li>
                     <Link href="/cheque-bounce" className="group flex items-center gap-3 text-sm font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                       <span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full group-hover:scale-150 transition-transform"></span>
                       Cheque Bounce Help
                     </Link>
                   </li>
                   <li>
                     <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center gap-3 text-sm font-black text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                       <span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full group-hover:scale-150 transition-transform"></span>
                       Stop Agent Calls
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
