import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Handling Loan Default & Recovery Harassment During Maternity Leave",
  description: "Comprehensive legal guide targeting women who face drastic income drops during unpaid maternity leave or pregnancy complications. Learn to file for a moratorium.",
  alternates: {
    canonical: "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy",
  },
};

export default function HandlingLoanDefaultMaternityPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#webpage",
        "url": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy",
        "name": "Handling Loan Default & Recovery Harassment During Maternity Leave",
        "description": "Legal guide on dealing with loan default during maternity leave, unpaid leave EMI default, and stopping recovery agents harassing pregnant women.",
        "breadcrumb": { "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#breadcrumb",
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
            "name": "Maternity Leave Default Guide",
            "item": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#article",
        "headline": "Handling Loan Default and Recovery Harassment During Maternity Leave or Pregnancy",
        "description": "Learn how to handle loan defaults caused by unpaid maternity leave and how to legally stop recovery agents from harassing pregnant women.",
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
        "datePublished": "2026-07-21",
        "dateModified": "2026-07-21",
        "mainEntityOfPage": { "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a bank initiate recovery actions while I am on unpaid maternity leave?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, banks can ask for repayment, but they cannot use harassing tactics. You can legally request a moratorium or restructuring based on your temporary medical and financial condition."
            }
          },
          {
            "@type": "Question",
            "name": "What can I do if recovery agents are harassing me during my pregnancy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can file a formal complaint with the bank's grievance redressal officer and the RBI Ombudsman. RBI strictly prohibits abusive language, threats, and calling outside of 8 AM to 7 PM."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get an EMI holiday for medical emergencies during pregnancy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not automatically guaranteed, banks may grant a temporary forbearance, EMI holiday, or restructuring if you submit medical certificates and a formal application explaining the financial hardship."
            }
          },
          {
            "@type": "Question",
            "name": "Is it legal for recovery agents to contact my family or employer regarding my EMI default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under RBI guidelines, recovery agents are strictly prohibited from discussing your debt with third parties, including relatives, neighbors, or employers."
            }
          },
          {
            "@type": "Question",
            "name": "Will an unpaid leave EMI default ruin my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, missing EMIs will lower your CIBIL score. However, formally restructuring the loan or taking an approved moratorium can mitigate the long-term damage compared to a complete default."
            }
          },
          {
            "@type": "Question",
            "name": "How do I officially request a temporary moratorium?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Draft a formal letter to your branch manager detailing your pregnancy complications, loss of income, and attach medical documents. Request a temporary halt on EMIs for a specific duration."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle my loan if I lose my job due to pregnancy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if you face prolonged unemployment and cannot repay the loan, you can negotiate a one-time settlement (OTS) with the bank to close the account, though it will reflect in your credit report."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if recovery agents visit my home unannounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ask for their ID and authorization letter. If they misbehave, call the police. You have the right to dictate the time and place of their visit under fair practice codes."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank deduct money directly from my maternity benefit account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you have given an auto-debit (NACH) mandate on the same account where benefits are credited, the bank will auto-deduct. You should revoke the mandate or switch accounts if you need the funds for survival."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer to deal with a medical emergency loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While not strictly required, a legal advocate can file an official moratorium request, send a cease-and-desist notice for harassment, and negotiate a settlement without you having to deal with the stress directly."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Maternity & Medical Emergency Loan Settlement Legal Services",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "84"
        },
        "review": [
          {
            "@type": "Review",
            "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#review1",
            "author": { "@type": "Person", "name": "Priyanka S." },
            "reviewBody": "I was facing severe complications and unpaid leave. The agents wouldn't stop calling. SettleLoans stepped in and got me a 6-month moratorium.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-03-12"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#review2",
            "author": { "@type": "Person", "name": "Megha R." },
            "reviewBody": "Recovery agents were threatening me during my 8th month. SettleLoans sent a legal notice, and the harassment stopped immediately. Highly recommend their compassionate team.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-04-05"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#review3",
            "author": { "@type": "Person", "name": "Anjali K." },
            "reviewBody": "Lost my job due to pregnancy complications. I couldn't pay my personal loan EMI. The advocates here helped me settle the loan at 40% of the principal.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-05-18"
          },
          {
            "@type": "Review",
            "@id": "https://settleloans.in/handling-loan-default-and-recovery-harassment-during-maternity-leave-or-pregnancy#review4",
            "author": { "@type": "Person", "name": "Roshni M." },
            "reviewBody": "I was overwhelmed by debt during my maternity leave. SettleLoans provided excellent legal cover against the bank's recovery tactics.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "datePublished": "2026-06-22"
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
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Maternity Leave Legal Guide
          </span>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Handling Loan Default & <br className="hidden md:block"/> Recovery Harassment
          </h1>
          <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
            A compassionate legal guide for women facing drastic income drops during unpaid maternity leave. Protect yourself from harassment and request an official moratorium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Legal Help
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
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
                Handling Loan Default During Maternity
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Layout with 3 Columns */}
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: Table of Contents */}
        <aside className="hidden lg:block w-1/5 min-w-[240px]">
          <div className="sticky top-24">
            <TableOfContents 
              items={[
                 { id: "intro", title: "Introduction" },
                 { id: "the-crisis", title: "The Unpaid Leave Crisis" },
                 { id: "psychological-impact", title: "The Mental Health Toll" },
                 { id: "rbi-guidelines", title: "RBI Protection Guidelines" },
                 { id: "prohibited-tactics", title: "Prohibited Harassment" },
                 { id: "moratorium-steps", title: "Requesting a Moratorium" },
                 { id: "documenting-hardship", title: "Documenting Hardships" },
                 { id: "bank-policies", title: "Lender Specific Policies" },
                 { id: "legal-recourse", title: "Legal Recourse Options" },
                 { id: "cibil-impact", title: "Impact on CIBIL Score" },
                 { id: "guarantors-impact", title: "Effect on Co-borrowers" },
                 { id: "rebuilding-credit", title: "Rebuilding Financial Health" },
                 { id: "alternatives", title: "Alternatives to Settle" },
                 { id: "reviews", title: "Client Success Stories" },
                 { id: "faqs", title: "Common FAQs" }
              ]}
            />
          </div>
        </aside>

        {/* Middle Column: Main Content */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          <section id="intro" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-8 leading-tight">
              Maternity Loan Defaults: <span className="text-[#1F5EFF]">Protecting Your Health & Finances</span>
            </h2>
            <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
               <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                Pregnancy should be a time of joy and preparation, but for many working women, it can become a period of immense financial stress. When medical complications arise or unpaid maternity leave stretches longer than expected, making timely EMI payments on personal loans or home loans can become impossible.
              </p>
              <p className="text-xl leading-relaxed text-[#2E2E2E] mb-6">
                Unfortunately, banks and NBFCs rarely pause their aggressive recovery tactics simply because a borrower is pregnant. Recovery agents harassing pregnant women is a severe violation of consumer rights, yet it happens frequently.
              </p>
              <p className="text-xl leading-relaxed text-[#2E2E2E]">
                This guide is designed to provide you with the comprehensive knowledge needed to understand your legal rights, RBI protections, and the exact steps to request an official moratorium based on medical grounds.
              </p>
            </div>
          </section>

          <section id="the-crisis" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Crisis of Unpaid Leave EMI Default</h2>
            <p className="text-lg leading-relaxed mb-6">
              A sudden loss of income due to an unpaid leave EMI default often triggers automated penalties, late fees, and immediate calls from recovery agencies. Unlike willful defaults, defaults during maternity leave are strictly situational and usually temporary.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Most middle-class families plan for the arrival of a baby with some savings, but extended bed rest or complicated deliveries can wipe out those funds rapidly. In such scenarios, deciding whether to pay the hospital bill or the personal loan EMI becomes a harrowing choice.
            </p>
          </section>

          <section id="psychological-impact" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Mental Health Toll</h2>
             <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
               <h4 className="font-black text-[#2E2E2E] mb-4">The Psychological Impact</h4>
               <p className="mb-4 text-gray-700 leading-relaxed">The psychological impact of aggressive recovery calls during a high-risk pregnancy can be devastating. The constant ringing of the phone can create a state of perpetual flight or fight, affecting both maternal health and fetal well-being.</p>
               <h4 className="font-black text-[#2E2E2E] mb-4 mt-8">Separating Liability from Harassment</h4>
               <p className="text-gray-700 leading-relaxed">It is crucial to separate the financial liability from the emotional harassment. You still owe the bank, but the bank owes you a legally compliant and respectful recovery process. By hiring a professional firm like SettleLoans, you can redirect these stressors to our legal desk.</p>
             </div>
          </section>

          <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">RBI Guidelines: Protection Against Harassment</h2>
            <p className="text-lg leading-relaxed mb-6">
              The Reserve Bank of India (RBI) has laid down strict Fair Practices Codes that all banks and third-party recovery agents must follow. Vulnerable borrowers, especially pregnant women or those dealing with medical emergencies, have specific protections against harassment.
            </p>
            <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
              <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Your Fundamental Rights Under RBI Code:</h4>
              <ul className="space-y-4 text-blue-900 font-medium">
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>No Inappropriate Timings:</strong> Calls and visits are strictly prohibited outside the hours of 8:00 AM to 7:00 PM. Calls at midnight are a violation of law.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>Privacy:</strong> Lenders cannot discuss your debt with your neighbors, relatives, or office colleagues. They cannot "shame" you into paying.</span>
                </li>
                <li className="flex items-start gap-3">
                   <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                   <span><strong>Communication:</strong> Abusive language, threats, and intimidation are strictly prohibited and can lead to heavy fines and license cancellation for recovery agencies.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="prohibited-tactics" className="scroll-mt-32 mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Prohibited Harassment Tactics</h3>
            <p className="text-lg leading-relaxed mb-6">
              Knowing what agents are legally not allowed to do is your strongest shield. Here are common practices that cross the legal line:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Workplace Harassment</h4>
                <p className="text-sm leading-relaxed text-gray-700">Calling your HR department or managers to shame you regarding your loan default during maternity leave.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Social Media Shaming</h4>
                <p className="text-sm leading-relaxed text-gray-700">Sending messages to your contacts or posting defamatory content on your social media profiles.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Fake Legal Notices</h4>
                <p className="text-sm leading-relaxed text-gray-700">Sending WhatsApp messages disguised as police warrants or court orders without official stamps.</p>
              </div>
              <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                <h4 className="font-black text-[#1F5EFF] mb-3 text-lg">Unannounced Visits</h4>
                <p className="text-sm leading-relaxed text-gray-700">Showing up at your residence unannounced, refusing to show ID, or refusing to leave when asked.</p>
              </div>
            </div>
          </section>

          <section id="moratorium-steps" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">How to Request a Moratorium</h2>
            <p className="text-lg leading-relaxed mb-8">
              If you are facing a medical emergency loan settlement scenario or need a temporary pause on your EMIs, you must communicate with the bank formally. Silence is often treated as willful default. Here is the step by step process:
            </p>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Draft a Formal Representation</h3>
                  <p className="text-gray-600 leading-relaxed">Write a detailed letter addressed to the Branch Manager and the Nodal Officer of your bank. Explain your pregnancy complications, the exact duration of your unpaid leave, and how it has severely impacted your cash flow.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Attach Medical & Income Proof</h3>
                  <p className="text-gray-600 leading-relaxed">Provide verifiable evidence. Attach doctor's certificates detailing your medical condition, hospital admission records (if any), and an official letter from your HR department confirming your unpaid leave status.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                <div>
                  <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Propose a Realistic Solution</h3>
                  <p className="text-gray-600 leading-relaxed">Do not simply ask them to stop calling. Legally request a specific solution: a 3 to 6 month EMI holiday (moratorium), restructuring of the loan to lower the EMI, or waiving off penal interest during your recovery period.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="documenting-hardship" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Documenting Medical Hardships</h2>
             <p className="text-lg leading-relaxed mb-6">
               Banks operate on paperwork, not empathy. To secure a moratorium or favorable settlement, you must document every aspect of your hardship. Keep copies of admission summaries, HR letters regarding unpaid leave, and pharmacy bills. A well-documented file makes it much easier for a bank manager to approve a restructuring request instead of classifying the account as a hard default.
             </p>
          </section>

          <section id="bank-policies" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Lender Specific Policies</h2>
            <p className="text-lg leading-relaxed mb-6">
              Not all banks respond to maternity leave defaults the same way. Private banks may be rigid, while fintech apps rely heavily on digital harassment. Understanding the type of lender you are dealing with sets the right expectations.
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left border-collapse border border-[#DEDEDE]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 border border-[#DEDEDE] font-black">Lender Type</th>
                    <th className="p-4 border border-[#DEDEDE] font-black">Typical Response to Default</th>
                    <th className="p-4 border border-[#DEDEDE] font-black">Moratorium Chance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">Top Private Banks</td>
                    <td className="p-4 border border-[#DEDEDE]">Will demand extensive proof, require multiple branch visits.</td>
                    <td className="p-4 border border-[#DEDEDE]">Moderate to High</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">PSU Banks</td>
                    <td className="p-4 border border-[#DEDEDE]">Slow to respond, but generally more empathetic to medical cases.</td>
                    <td className="p-4 border border-[#DEDEDE]">High</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-[#DEDEDE] font-bold">Fintech App Loans</td>
                    <td className="p-4 border border-[#DEDEDE]">Aggressive automated calling, very rarely pause EMIs legally.</td>
                    <td className="p-4 border border-[#DEDEDE]">Low</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="legal-recourse" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Legal Recourse Against Harassing Agents</h2>
            <p className="text-lg leading-relaxed mb-6">
              If your formal requests are ignored and recovery agents continue harassing a pregnant woman, you have the right to take aggressive legal action to protect your health and privacy.
            </p>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
               <h4 className="text-lg font-bold text-red-700 mb-3">Immediate Actions Against Harassment:</h4>
               <p className="text-sm text-red-900 leading-relaxed italic mb-4">
                 "Do not panic. You have legal rights. Agents operate on a script of fear. Once they realize you know the RBI guidelines, their behavior often changes."
               </p>
               <ul className="list-disc pl-6 space-y-2 text-red-900">
                  <li><strong>Record All Calls:</strong> Keep audio recordings and screenshots of all abusive messages.</li>
                  <li><strong>Send a Legal Notice:</strong> Have a lawyer send a formal Cease and Desist notice citing RBI guidelines and mental harassment.</li>
                  <li><strong>File an RBI Ombudsman Complaint:</strong> Escalate the issue through the official CMS portal of the RBI with attached proof.</li>
                  <li><strong>Police Complaint:</strong> In cases of extreme threat at your doorstep, dial 112 and file an FIR for criminal intimidation.</li>
               </ul>
            </div>
          </section>

          <section id="cibil-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Impact on CIBIL Score</h2>
            <p className="text-lg leading-relaxed mb-6">
              When you miss an EMI due to unpaid maternity leave, the system treats it like any other default. Your CIBIL score will drop by 30 to 50 points per missed EMI. Even if you get an official moratorium, the months where payments were paused might be reported neutrally. 
            </p>
            <p className="text-lg leading-relaxed mb-6">
              If you eventually settle the loan for a lesser amount instead of paying the full dues, the "Settled" tag will stay on your report for seven years. However, preserving your cash for your child's well-being is often more important than preserving a 750+ credit score during a crisis.
            </p>
          </section>

          <section id="guarantors-impact" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Effect on Co-borrowers</h2>
            <p className="text-lg leading-relaxed mb-6">
              If your spouse or a family member is a co-applicant on the personal loan, the default will equally damage their credit profile. Recovery agents will quickly shift their focus to the co-borrower when they cannot reach you. It is crucial to legally represent both parties when filing a cease and desist notice to stop the harassment universally.
            </p>
          </section>

          <section id="rebuilding-credit" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Rebuilding Financial Health</h2>
            <p className="text-lg leading-relaxed mb-6">
              Once you return to work and stabilize your income, rebuilding your credit score is highly predictable. Don't let a temporary drop define your financial future forever.
            </p>
            <ol className="space-y-6">
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">01</span>
                  <span><strong>Secured Credit Cards:</strong> Take a small FD-backed card and use it for basic baby expenses like diapers. Pay it in full monthly. This rapidly adds positive payment history.</span>
               </li>
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">02</span>
                  <span><strong>Consistent Savings:</strong> Even putting away a small amount every month builds the habit back and creates an emergency buffer for future health needs.</span>
               </li>
               <li className="flex gap-4">
                  <span className="font-black text-[#1F5EFF] text-2xl">03</span>
                  <span><strong>Review Your Report:</strong> After six months of returning to work, check your CIBIL report to ensure no fraudulent late marks were added during your approved moratorium period.</span>
               </li>
            </ol>
          </section>

          <section id="alternatives" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Alternatives to Settle</h2>
            <p className="text-lg leading-relaxed mb-6">
              Before taking the hit of a "Settled" status on your credit report, consider restructuring the loan tenure. Some banks will allow you to extend the loan from 3 years to 5 years, drastically reducing the EMI to an amount you might be able to pay even on a reduced income. You could also consolidate the debt using a lower-interest secured loan if you have collateral like gold available.
            </p>
          </section>

          <section id="reviews" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 text-center">
              Stories of <span className="text-[#1F5EFF]">Hope & Relief</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: "Priyanka S.", 
                  loc: "Bangalore", 
                  loan: "Personal Loan: ₹8.5 Lakhs", 
                  res: "Outcome: 6-Month Pause",
                  story: "I was facing severe complications and unpaid leave. The agents wouldn't stop calling. SettleLoans stepped in and got me a 6-month moratorium legally."
                },
                { 
                  name: "Megha R.", 
                  loc: "Delhi", 
                  loan: "App Loans: ₹4 Lakhs", 
                  res: "Outcome: Harassment Stopped",
                  story: "Recovery agents were threatening me during my 8th month. SettleLoans sent a legal notice, and the harassment stopped immediately. Highly recommend their compassionate team."
                },
                { 
                  name: "Anjali K.", 
                  loc: "Pune", 
                  loan: "Unsecured Loan: ₹12 Lakhs", 
                  res: "Settled for: ₹4.8 Lakhs",
                  story: "Lost my job due to pregnancy complications. I couldn't pay my personal loan EMI. The advocates here helped me settle the loan completely at 40%."
                },
                { 
                  name: "Roshni M.", 
                  loc: "Mumbai", 
                  loan: "Credit Card Debt: ₹6 Lakhs", 
                  res: "Outcome: Waived Penalties",
                  story: "I was overwhelmed by debt during my maternity leave. SettleLoans provided excellent legal cover against the bank's recovery tactics so I could focus on my newborn."
                }
              ].map((review, i) => (
                <div key={i} className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 flex items-center justify-center font-black text-[#1F5EFF] text-xl mr-4 group-hover:bg-[#1F5EFF] group-hover:text-white transition-colors">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-black text-[#2E2E2E]">{review.name}</h5>
                      <p className="text-xs text-[#747474] font-bold uppercase tracking-wider">{review.loc}</p>
                    </div>
                    <div className="ml-auto flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6 flex flex-col gap-2">
                    <div className="px-4 py-2 bg-red-50 text-red-700 rounded-lg text-xs font-black border border-red-100 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                       {review.loan}
                    </div>
                    <div className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-black border border-green-100 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                       {review.res}
                    </div>
                  </div>
                  <p className="text-[#2E2E2E] italic leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">"{review.story}"</p>
                </div>
              ))}
            </div>
          </section>

          <section id="faqs" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can a bank initiate recovery actions while I am on unpaid maternity leave?", a: "Yes, banks can ask for repayment, but they cannot use harassing tactics. You can legally request a moratorium or restructuring based on your temporary medical and financial condition." },
                { q: "What can I do if recovery agents are harassing me during my pregnancy?", a: "You can file a formal complaint with the bank's grievance redressal officer and the RBI Ombudsman. RBI strictly prohibits abusive language, threats, and calling outside of 8 AM to 7 PM." },
                { q: "Can I get an EMI holiday for medical emergencies during pregnancy?", a: "While not automatically guaranteed, banks may grant a temporary forbearance, EMI holiday, or restructuring if you submit medical certificates and a formal application explaining the financial hardship." },
                { q: "Is it legal for recovery agents to contact my family or employer regarding my EMI default?", a: "No. Under RBI guidelines, recovery agents are strictly prohibited from discussing your debt with third parties, including relatives, neighbors, or employers." },
                { q: "Will an unpaid leave EMI default ruin my CIBIL score?", a: "Yes, missing EMIs will lower your CIBIL score. However, formally restructuring the loan or taking an approved moratorium can mitigate the long-term damage compared to a complete default." },
                { q: "How do I officially request a temporary moratorium?", a: "Draft a formal letter to your branch manager detailing your pregnancy complications, loss of income, and attach medical documents. Request a temporary halt on EMIs for a specific duration." },
                { q: "Can I settle my loan if I lose my job due to pregnancy?", a: "Yes, if you face prolonged unemployment and cannot repay the loan, you can negotiate a one-time settlement (OTS) with the bank to close the account, though it will reflect in your credit report." },
                { q: "What should I do if recovery agents visit my home unannounced?", a: "Ask for their ID and authorization letter. If they misbehave, call the police. You have the right to dictate the time and place of their visit under fair practice codes." },
                { q: "Can the bank deduct money directly from my maternity benefit account?", a: "If you have given an auto-debit (NACH) mandate on the same account where benefits are credited, the bank will auto-deduct. You should revoke the mandate or switch accounts if you need the funds for survival." },
                { q: "Do I need a lawyer to deal with a medical emergency loan settlement?", a: "While not strictly required, a legal advocate can file an official moratorium request, send a cease-and-desist notice for harassment, and negotiate a settlement without you having to deal with the stress directly." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h4 className="font-black text-[#2E2E2E] text-lg mb-3">{i+1}. {faq.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
             <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
             <h3 className="text-3xl md:text-5xl font-black mb-6">Stop the Harassment Now.</h3>
             <p className="text-xl opacity-80 mb-10 max-w-2xl mx-auto">
               Facing income loss during pregnancy and being harassed by loan recovery agents? Let our advocates file for an official moratorium so you can focus on your health in peace.
             </p>
             <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all text-xl shadow-2xl">
               Speak to a Legal Expert Today
             </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
             <p className="text-gray-400 text-sm italic">*Our legal services ensure full compliance with RBI guidelines to protect vulnerable borrowers from illegal recovery tactics. All consultations are strictly confidential.</p>
          </div>

        </article>

        {/* Right Column: CTA & Context */}
        <aside className="hidden lg:block w-1/5 min-w-[240px]">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Emergency Help?</h3>
                <p className="text-white/70 text-sm mb-6 relative z-10">If agents are at your door or threatening you, contact us immediately for a legal intervention.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-black py-4 rounded-xl hover:bg-[#1F5EFF]/90 transition-colors shadow-lg">Request Callback</Link>
             </div>

             <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6 border-b pb-4">Related Guides</h3>
                <ul className="space-y-5">
                   <li>
                      <Link href="/bank-recovery-harassment-complaint" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        File Formal Complaint
                      </Link>
                   </li>
                    <li>
                      <Link href="/loan-settlement-during-medical-emergency" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Medical Crises Settlements
                      </Link>
                   </li>
                    <li>
                      <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        Updated RBI Rules
                      </Link>
                   </li>
                    <li>
                      <Link href="/loan-settlement-during-job-loss" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] font-bold transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3"></span>
                        EMI Default During Job Loss
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
