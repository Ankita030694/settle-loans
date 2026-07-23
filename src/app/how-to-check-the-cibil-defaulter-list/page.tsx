import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "How to Check the CIBIL Defaulter List | RBI Guidelines",
  description: "Has a recovery agent threatened to put your name on the 'CIBIL Defaulter List'? Discover what this list actually is, how to check it online, and stop recovery agent threats.",
  alternates: {
    canonical: "https://settleloans.in/how-to-check-the-cibil-defaulter-list",
  },
};

export default function CibilDefaulterListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#webpage",
        "url": "https://settleloans.in/how-to-check-the-cibil-defaulter-list",
        "name": "How to Check the CIBIL Defaulter List | RBI Guidelines",
        "description": "Has a recovery agent threatened to put your name on the 'CIBIL Defaulter List'? Discover what this list actually is and how to check it.",
        "breadcrumb": { "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#breadcrumb",
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
            "name": "CIBIL Defaulter List Guide",
            "item": "https://settleloans.in/how-to-check-the-cibil-defaulter-list"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#article",
        "headline": "How to Check the CIBIL Defaulter List",
        "description": "A comprehensive guide on checking the CIBIL defaulter list, the RBI wilful defaulter database, and how to deal with recovery agent threats.",
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
        "datePublished": "2024-08-15",
        "dateModified": "2024-08-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#product",
        "name": "Anti-Harassment Legal Intervention",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to stop recovery agent harassment and resolve CIBIL default threats.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1045",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh T." },
            "datePublished": "2024-03-12",
            "reviewBody": "Recovery agents kept threatening to put me on the 'CIBIL Defaulter List' and ban me from banking. SettleLoans sent them a legal notice and stopped the harassment immediately.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya K." },
            "datePublished": "2024-04-05",
            "reviewBody": "I was terrified when I got a fake 'Defaulter List' notice on WhatsApp. The legal team helped me file a cyber police complaint against the recovery agency.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "datePublished": "2024-05-20",
            "reviewBody": "I thought my financial life was over. The team clarified what a wilful defaulter actually means and negotiated a settlement for my personal loan.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya M." },
            "datePublished": "2024-06-18",
            "reviewBody": "Very professional service. They exposed the fake default threats and helped me settle my credit card debt legally without any CIBIL defaulter drama.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Deepak R." },
             "datePublished": "2024-07-10",
             "reviewBody": "The agents were calling my office claiming I was on a national defaulter list. A single strong legal intervention shut down the illegal recovery tactics completely.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-to-check-the-cibil-defaulter-list#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there a public CIBIL defaulter list that anyone can check?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, there is no public 'CIBIL Defaulter List' for regular retail borrowers. Your CIBIL report is highly confidential, and only you or authorized lenders can access it." }
          },
          {
            "@type": "Question",
            "name": "How can I check if my name is on a defaulter list?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can check your credit status by downloading your free CIBIL score report from the official TransUnion CIBIL website. It will show if your accounts are listed as 'Written Off' or 'Settled'." }
          },
          {
            "@type": "Question",
            "name": "What is the RBI Wilful Defaulter Database?",
            "acceptedAnswer": { "@type": "Answer", "text": "The RBI maintains a list of 'Wilful Defaulters' for large corporate loans and individuals who deliberately default despite having the capacity to pay, or who divert funds. This list is published by CIBIL and other bureaus for accounts of ₹25 Lakhs and above." }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent put my name on the defaulter list?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Recovery agents have zero authority over your CIBIL score or any 'defaulter list'. Only the lending bank or NBFC reports your payment history to credit bureaus automatically." }
          },
          {
            "@type": "Question",
            "name": "Is the WhatsApp notice saying I am a 'declared defaulter' real?",
            "acceptedAnswer": { "@type": "Answer", "text": "If a recovery agent sends a PDF on WhatsApp claiming you are on a 'National Defaulter List', it is 100% fake and a scare tactic. You can file a police complaint against this extortion attempt." }
          },
          {
            "@type": "Question",
            "name": "Will defaulting on a personal loan send me to jail?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Defaulting on a personal loan, credit card, or any unsecured debt is a civil dispute, not a criminal offense in India. You cannot be jailed merely for failing to repay a loan." }
          },
          {
            "@type": "Question",
            "name": "How long does a default stay on my CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "Late payments, defaults, and settlements typically remain on your CIBIL report for up to 7 years. However, its impact on your score decreases over time if you build positive credit." }
          },
          {
            "@type": "Question",
            "name": "What happens if my loan is marked as 'Written Off'?",
            "acceptedAnswer": { "@type": "Answer", "text": "A 'Written Off' status means the bank has given up on collecting the debt and absorbed the loss. This severely damages your credit score and makes it difficult to get new loans, but you are not on a public blacklist." }
          },
          {
            "@type": "Question",
            "name": "Can I remove a default status from my CIBIL report?",
            "acceptedAnswer": { "@type": "Answer", "text": "You cannot remove an accurate default status. The only way to improve it is to pay the outstanding dues, after which the status changes from 'Default' to 'Closed' or 'Settled'." }
          },
          {
            "@type": "Question",
            "name": "What should I do if agents threaten my family with a defaulter list?",
            "acceptedAnswer": { "@type": "Answer", "text": "Immediately record the calls, save the messages, and send a legal notice to the bank's grievance officer. You can also file a complaint on the RBI Ombudsman portal for harassment." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-defaulter-list-myth", title: "The 'CIBIL Defaulter List' Myth" },
    { id: "what-is-cibil-report", title: "Understanding Your CIBIL Report" },
    { id: "rbi-wilful-defaulter", title: "The RBI Wilful Defaulter Database" },
    { id: "fake-agent-threats", title: "Spotting Fake Agent Threats" },
    { id: "how-to-check", title: "How to Actually Check Your Status" },
    { id: "legal-action", title: "Taking Legal Action Against Harassment" },
    { id: "success-stories", title: "Success Stories" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

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
              Borrower Rights Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How to Check the <span className="text-[#1F5EFF]">CIBIL Defaulter List</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Has a recovery agent threatened to put your name on the 'CIBIL Defaulter List'? Discover what this list actually is, how to check it online, and how to stop illegal recovery tactics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Agent Harassment Now
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
                <li className="font-bold text-[#2E2E2E]">CIBIL Defaulter List Check</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="the-defaulter-list-myth" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The "CIBIL Defaulter List" Myth
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  If you have missed a few EMIs on a personal loan or credit card, you have likely received a threatening WhatsApp message or call from a recovery agent claiming your name will be published in the <strong>"National CIBIL Defaulter List"</strong>. They might even claim this list will be sent to your employer or local police station.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Here is the absolute legal truth: <strong>There is no public CIBIL defaulter list for retail borrowers.</strong>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Credit bureaus like CIBIL, Experian, and Equifax are strictly regulated by the RBI. They are data repositories that track your credit history. They do not publish public "blacklists" or "defaulter lists" to shame regular citizens who have fallen into financial hardship. This entire concept is a psychological scare tactic manufactured by third-party recovery agencies to extort payments.
                </p>
              </div>
            </section>

            <section id="what-is-cibil-report" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding Your CIBIL Report (Not a List)
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Instead of a public list, what actually exists is your individual <strong>Credit Information Report (CIR)</strong>. This report is highly confidential. Only you and authorized financial institutions (when you apply for a loan) can access it legally.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">DPD (Days Past Due)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you miss a payment, the bank updates your CIBIL report with the number of days you are late (e.g., 30, 60, 90). If it crosses 90 days, the account is classified as a Non-Performing Asset (NPA).
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Account Status</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Instead of putting you on a "list", the specific loan account in your report is tagged with statuses like <strong>'Written Off'</strong> (bank gave up on collection) or <strong>'Settled'</strong> (you paid a negotiated amount).
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Real Consequence:</strong> Having defaults on your CIBIL report will severely drop your credit score, making it very difficult to get new loans or credit cards in the future. However, it does not mean your name is published on a website or newspaper.
                </p>
              </div>
            </section>

            <section id="rbi-wilful-defaulter" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Actual RBI Wilful Defaulter Database
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                There <em>is</em> one type of defaulter list in India, but it almost certainly does not apply to regular retail loan or credit card borrowers. It is the <strong>RBI Wilful Defaulters List</strong>.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Who goes on this database?</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  This list is maintained by credit information companies (CICs) as per RBI guidelines, specifically for large corporate fraud and deliberate defaults. You can only be placed on this list if:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Your outstanding loan amount is <strong>₹25 Lakhs or more</strong>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">You have the financial capacity to pay but intentionally refuse to do so.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">You have diverted or siphoned the loan funds for purposes other than what the loan was granted for.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">You have disposed of or removed the property pledged as collateral without the bank's knowledge.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="fake-agent-threats" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Spotting Fake Recovery Agent Threats
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Because most borrowers do not know the banking laws, recovery agencies exploit this fear. If you receive any of the following, they are illegal extortion attempts:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">WhatsApp "Defaulter Notices"</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Fake PDF documents with RBI or Supreme Court logos claiming a "Non-Bailable Warrant" has been issued and your name is being added to a national blacklist.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Threats to Contact Employer</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Agents claiming they will send your "Defaulter Status" to your HR department to get you fired. This is a severe violation of RBI fair practice codes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Claims of Jail Time</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Defaulting on a personal loan or credit card is a civil dispute. No one can be sent to jail simply for not having the money to repay an unsecured loan in India.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="how-to-check" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Actually Check Your CIBIL Status
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you want to know exactly what banks are seeing regarding your default, you need to pull your official credit report. Do not trust third-party apps offering free scores in exchange for your data. Go to the source.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Step-by-Step CIBIL Check online</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>1. Visit the Official Website:</strong> Go to cibil.com. By RBI mandate, you are entitled to one free detailed credit report per year.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>2. Create an Account:</strong> You will need to provide your PAN card details, email, and phone number for authentication.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>3. Check Account Information:</strong> Scroll past your score to the "Account Information" section. Look for the loan in question.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>4. Check the Status:</strong> If it says "Standard", you are fine. If it says "Sub-Standard", "Doubtful", "Written-Off", or shows high DPD (Days Past Due), that is the extent of your "default" record.</li>
                </ul>
              </div>
            </section>
            
            <section id="legal-action" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Taking Legal Action Against Agent Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If recovery agents are illegally threatening you with fake defaulter lists, you have strong legal remedies available under Indian law.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">How to Stop the Abuse</h4>
                <p className="text-red-900 leading-relaxed mb-4">
                  Banks are strictly responsible for the actions of their recovery agents. You do not have to endure threats.
                </p>
                <ul className="text-sm space-y-2 text-red-900 list-disc ml-5">
                  <li><strong>Record Everything:</strong> Install an auto-call recorder. Take screenshots of all WhatsApp threats and fake notices.</li>
                  <li><strong>Send a Legal Notice:</strong> Have an advocate draft a strong legal notice to the Nodal Officer of the bank, citing RBI guidelines on fair practice codes and harassment.</li>
                  <li><strong>RBI Ombudsman:</strong> If the bank doesn't stop the agents, escalate the complaint with the evidence to the RBI CMS portal.</li>
                </ul>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Client Success Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RT
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rajesh T.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "Recovery agents kept threatening to put me on the 'CIBIL Defaulter List' and ban me from banking. SettleLoans sent them a legal notice and stopped the harassment immediately."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Agent Threats</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Harassment Stopped</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "Very professional service. They exposed the fake default threats and helped me settle my credit card debt legally without any CIBIL defaulter drama."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Defaulter Extortion</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Legal Settlement</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Defaulter Threats</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Are recovery agents threatening to ruin your reputation by placing you on a fake CIBIL Defaulter List? Send a legal notice today and force them to operate within RBI boundaries.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Talk to a Legal Expert
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Facing Harassment?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  You have the legal right to report abusive agents to the police and RBI Ombudsman.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Send Legal Notice
                </Link>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Legal Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/rbi-guidelines-on-loan-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines on Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-complaint-against-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing Police Complaints
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-civil-and-criminal-liability-in-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Civil vs Criminal Liability
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
