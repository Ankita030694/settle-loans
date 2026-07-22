import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Can Bank Recovery Agents Call My References and Relatives for Loan Default?",
  description: "Addresses the massive social embarrassment caused when banks call the references provided during the loan application. Explains the strict RBI Fair Practices Code which prohibits banks from harassing third parties, relatives, or references.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default",
  },
};

export default function RecoveryAgentsHarassmentPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#webpage",
        "url": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default",
        "name": "Can Bank Recovery Agents Call My References and Relatives for Loan Default?",
        "description": "Stop bank recovery agents from harassing your references, relatives, and office colleagues. Learn your rights under the RBI Fair Practices Code.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#breadcrumb",
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
            "name": "Stop Harassment of References",
            "item": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#article",
        "headline": "Can Bank Recovery Agents Call My References and Relatives for Loan Default?",
        "description": "Addresses the massive social embarrassment caused when banks call the references provided during the loan application. Explains the strict RBI Fair Practices Code.",
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
        "datePublished": "2024-06-15",
        "dateModified": "2024-06-15",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#product",
        "name": "Anti-Harassment Legal Notices",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to send strict cease-and-desist notices to banks for harassing third parties and references.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1430",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-01-10",
            "reviewBody": "Recovery agents were calling my boss and office colleagues. One legal notice from SettleLoans and the calls completely stopped.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya K." },
            "datePublished": "2024-02-18",
            "reviewBody": "The social embarrassment was unbearable. They were abusing my elderly parents. Thank you for protecting my family.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rohan M." },
            "datePublished": "2024-03-25",
            "reviewBody": "Highly professional. I didn't know references are not legally liable. Their notice put the bank in its place.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya R." },
            "datePublished": "2024-04-12",
            "reviewBody": "Fast and effective. The agents tried to mentally harass me through my relatives, but the legal intervention saved me.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Saurabh T." },
             "datePublished": "2024-05-30",
             "reviewBody": "The constant calls to my brother were ruining our relationship. I am glad I opted for the cease-and-desist notice.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-recovery-agents-call-references-and-relatives-for-loan-default#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can bank recovery agents legally call my references?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. References are only provided for contact verification at the time of the loan application. They are not guarantors and have no legal liability to repay the loan." }
          },
          {
            "@type": "Question",
            "name": "Are my relatives liable if I default on my personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. Unless a relative has legally signed as a co-borrower or a guarantor on the loan agreement, they have zero legal liability for your default." }
          },
          {
            "@type": "Question",
            "name": "What does the RBI say about harassing third parties?",
            "acceptedAnswer": { "@type": "Answer", "text": "The RBI Fair Practices Code strictly prohibits banks and their recovery agents from resorting to intimidation or harassment of the borrower's family, relatives, or friends." }
          },
          {
            "@type": "Question",
            "name": "How do agents get numbers of people I didn't list as references?",
            "acceptedAnswer": { "@type": "Answer", "text": "Illegal loan apps and sometimes unethical agents use spyware to access your contact list or track your social media profiles to find relatives and colleagues." }
          },
          {
            "@type": "Question",
            "name": "Can I file a police complaint against recovery agents for calling relatives?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if they use abusive language or threats, you can file an FIR for criminal intimidation, extortion, and outraging modesty under various sections of the BNS/IPC." }
          },
          {
            "@type": "Question",
            "name": "How do I stop the bank from calling my family members?",
            "acceptedAnswer": { "@type": "Answer", "text": "You must send a formal legal cease-and-desist notice to the bank's nodal officer and the recovery agency, citing RBI guidelines and threatening legal action for harassment." }
          },
          {
            "@type": "Question",
            "name": "Is it a crime to default on a personal loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. A loan default is a civil dispute, not a criminal offense. The bank cannot arrest you or your relatives for non-payment." }
          },
          {
            "@type": "Question",
            "name": "What is the role of a guarantor versus a reference?",
            "acceptedAnswer": { "@type": "Answer", "text": "A guarantor legally agrees to pay the debt if the primary borrower defaults. A reference only verifies the borrower's identity and cannot be asked to pay." }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents visit my office and talk to my boss?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Visiting your workplace with the intent to publicly shame you or disclosing your loan details to third parties like your boss is a gross violation of your privacy and RBI norms." }
          },
          {
            "@type": "Question",
            "name": "What should my references do if they receive calls?",
            "acceptedAnswer": { "@type": "Answer", "text": "They should firmly state they are not liable, demand the agent's ID and agency details, record the call, and refuse further communication. They can also file a police complaint for harassment." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "social-nightmare", title: "The Social Embarrassment Nightmare" },
    { id: "reference-vs-guarantor", title: "Reference vs. Guarantor" },
    { id: "rbi-fair-practices-code", title: "RBI Fair Practices Code" },
    { id: "how-they-get-numbers", title: "How Agents Find Undisclosed Numbers" },
    { id: "legal-remedies", title: "Legal Steps to Stop Harassment" },
    { id: "sending-legal-notice", title: "The Power of a Legal Notice" },
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
        <section className="w-full bg-[#2E2E2E] pt-16 pb-10 md:pt-28 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Anti-Harassment Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can Bank Recovery Agents Call My <span className="text-[#1F5EFF]">References and Relatives</span>?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Addresses the massive social embarrassment caused when banks harass third parties. Stop recovery agents from calling family and colleagues for loan default.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Send a Cease & Desist Notice
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
                <li className="font-bold text-[#2E2E2E]">Stop Harassment of References</li>
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

            <section id="social-nightmare" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Social Embarrassment Nightmare
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When applying for a personal loan, borrowers are often asked to provide names and contact numbers of a couple of <strong>references</strong>. These are usually friends, colleagues, or relatives. The bank claims this is merely for "contact verification."
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  However, the moment a borrower defaults due to financial distress, recovery agents flip the script. They weaponize these reference contacts to unleash a campaign of massive social embarrassment. Agents call elderly parents, distant relatives, and even office HR departments, revealing private financial details and demanding money. 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  This tactic is designed to destroy your reputation and force you to pay out of sheer shame. But is it legal? Absolutely not. The Reserve Bank of India (RBI) explicitly forbids banks from harassing third parties for a loan they did not sign.
                </p>
              </div>
            </section>

            <section id="reference-vs-guarantor" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Reference vs. Guarantor: Knowing the Difference
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents often lie to your relatives, telling them they are legally bound to pay because their name is on the application. It is crucial to understand the legal distinction.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">A Loan Reference</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A reference is merely someone who can vouch for your identity and contact information. They did not sign the loan agreement. They have absolutely <strong>zero financial or legal liability</strong> for your default.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">A Co-Borrower or Guarantor</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A guarantor has formally signed the loan contract and submitted their KYC documents, legally binding themselves to repay the debt if the primary borrower fails to do so. Only guarantors can be legally asked to pay.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The Core Argument:</strong> If your relatives or friends merely acted as references and did not sign as guarantors, calling them to demand loan repayment or abuse them is illegal and constitutes harassment.
                </p>
              </div>
            </section>

            <section id="rbi-fair-practices-code" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The RBI Fair Practices Code Protection
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has issued strict guidelines for all banks and NBFCs regarding loan recovery. These guidelines exist specifically to prevent the humiliation of borrowers.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Prohibition of Harassment</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  The RBI clearly states that recovery agents must not resort to intimidation, either verbal or physical, against any person in their debt collection efforts.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Agents cannot call family members, relatives, or friends to harass them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">They cannot publicly humiliate the borrower or intrude on their privacy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Making threatening anonymous calls or sending false messages is strictly forbidden.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Violation of Privacy Laws</h4>
                <p className="text-red-900 leading-relaxed">
                  Disclosing a borrower's financial default to their employer, colleagues, or neighbors is a severe breach of confidentiality. Banks are legally bound to keep your account details private.
                </p>
              </div>
            </section>

            <section id="how-they-get-numbers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How Do Agents Find Undisclosed Numbers?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Borrowers are often shocked when agents call relatives they never listed as references. Here is how rogue agencies illegally obtain this data:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Illegal App Permissions</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Many digital lending apps ask for permission to access your Contacts, Gallery, and Location. When you default, they scrape your entire phonebook and start calling everyone from your parents to your boss.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Social Media Scraping</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Agents stalk your LinkedIn, Facebook, and Instagram profiles. They find out where you work, who your siblings are, and message them directly to cause maximum humiliation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Data Brokers</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Unregulated recovery agencies sometimes buy data from third-party brokers to trace alternative numbers linked to your address or family members.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="legal-remedies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Steps to Stop Harassment
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                You do not have to suffer in silence. The law provides powerful tools to stop recovery agents from calling your references and relatives.
              </p>
              
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">Actionable Steps for Borrowers</h4>
                <ul className="text-sm space-y-3 font-medium list-none text-gray-700">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>Record Evidence:</strong> Ask your relatives and references to record the harassing calls and save any abusive WhatsApp messages or SMS.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>File a Police Complaint:</strong> If agents use abusive language or issue threats, your relatives can file an FIR for criminal intimidation (Section 506), extortion, and intentional insult.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>Complain to the RBI Ombudsman:</strong> You can file a formal complaint on the RBI CMS portal against the bank for violating the Fair Practices Code.</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#1F5EFF] rounded-full mt-2"></span> <strong>Inform Your Employer:</strong> If they are calling your office, proactively inform your HR that you are facing illegal harassment from unauthorized recovery agents and that the matter is being legally addressed.</li>
                </ul>
              </div>
            </section>

            <section id="sending-legal-notice" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Power of a Legal Cease & Desist Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most effective and immediate way to stop the harassment of your relatives is to have an advocate send a strict <strong>Cease and Desist Legal Notice</strong> to the bank’s nodal officer and the recovery agency.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Establishes Official Record</h4>
                  <p className="text-gray-700 leading-relaxed">
                    A legal notice places on record that the bank is violating RBI guidelines. Banks hate paper trails of their illegal activities, as it hurts them in consumer courts and DRT proceedings.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Threat of Legal Repercussions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The notice warns the bank that you will file defamation and mental agony lawsuits against their executives if the calls to third parties do not stop immediately.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Immediate Escallation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Local agents act tough, but legal notices go straight to the bank's central legal department. The legal team usually instructs the local agency to back off to avoid regulatory fines.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Protects Your Network</h4>
                  <p className="text-gray-700 leading-relaxed">
                    It explicitly states that the people being called are mere references, stripping the agents of their false claim that the relatives are somehow legally liable for the debt.
                  </p>
                </div>
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
                      VS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Vikas S.</h4>
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
                    "Recovery agents were calling my boss and office colleagues. One legal notice from SettleLoans and the calls completely stopped."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Office Harassment</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Calls Stopped</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya K.</h4>
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
                    "The social embarrassment was unbearable. They were abusing my elderly parents. Thank you for protecting my family from these goons."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Issue: Family Abuse</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Bank Apologized</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(item => item["@type"] === "FAQPage")?.mainEntity.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Social Embarrassment</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Are recovery agents harassing your elderly parents, relatives, or office colleagues who were merely listed as references? We can send a strict cease-and-desist notice to the bank today.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Help Now
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
                <h4 className="text-xl font-black mb-4 relative z-10">Agents Calling Relatives?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Stop the harassment immediately. Send a strong legal notice to the bank's nodal officer today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Consult a Lawyer
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
