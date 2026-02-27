import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Why Recovery Agents Call You for Friend's Loan | Stop Harassment Now",
  description: "How do loan recovery agents get my details when my friend defaults to pay? Learn about contact scraping, RBI guidelines, and how to stop illegal calls legally.",
  alternates: {
    canonical: "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information",
  },
};

export default function RecoveryAgentHarassmentGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#webpage",
        "url": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information",
        "name": "How Loan Recovery Agents Get Your Details and Stop Harassment",
        "description": "Comprehensive guide on how recovery agents find third-party contacts and the legal steps to stop harassment in India.",
        "breadcrumb": { "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#breadcrumb",
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
            "name": "FAQs",
            "item": "https://settleloans.in/faqs"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Recovery Agent Harassment Guide",
            "item": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#article",
        "headline": "How Recovery Agents Get Your Details and How to Stop Harassment",
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
        "datePublished": "2024-03-01",
        "dateModified": "2024-03-01",
        "description": "Learn the technical and legal reasons why recovery agents call you for someone else's debt and the RBI rules that protect you.",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-do-loan-recovery-agents-get-my-details-when-my-friend-defaults-to-pay-and-call-me-asking-for-his-information#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Am I legally responsible for my friend's loan if I was just a reference?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A reference is simply a contact point for tracing the borrower. Unless you signed as a 'Guarantor' or 'Co-borrower', you have no legal liability to pay the debt. Recovery agents cannot legally force you to pay someone else's loan."
            }
          },
          {
            "@type": "Question",
            "name": "How do recovery agents get my phone number if I didn't provide it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agents use various methods including contact scraping from digital lending apps (if your friend granted permission), references provided during the application, social media tracing, and public directory searches. Some also buy data from illegal third-party lead generators."
            }
          },
          {
            "@type": "Question",
            "name": "What are the RBI rules for recovery agent calling times?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to RBI guidelines, recovery agents are only allowed to call between 8:00 AM and 7:00 PM. Calls before or after these hours are considered harassment and are strictly prohibited."
            }
          },
          {
            "@type": "Question",
            "name": "Can recovery agents call my office or boss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Contacting an employer or workplace to shame a borrower is a violation of privacy rules. RBI mandates that agents must maintain the confidentiality of the borrower and cannot involve uninvolved third parties in the recovery process."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a recovery agent uses abusive language?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Record the call. Ask for the agent's name and the bank they represent. File a formal complaint with the bank's nodal officer and the RBI Ombudsman. If there are threats of violence, file an FIR at the local police station."
            }
          },
          {
            "@type": "Question",
            "name": "Can I block calls from recovery agents legally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. You have the right to request the bank to stop calling you regarding someone else's debt. If you are not the borrower or guarantor, they must remove your number from the calling list upon request."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the harassment last after a default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Harassment usually peaks between 30 and 120 days after default (during the early delinquency phase). Once the loan is marked as a Non-Performing Asset (NPA), it may be moved to a legal recovery or settlement phase where calling intensity might decrease but legal notices might increase."
            }
          },
          {
            "@type": "Question",
            "name": "Is it illegal for an app to scrape my contact list?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the New Digital Personal Data Protection Act (DPDP), scraping contacts without explicit and specific consent is illegal. The RBI has also restricted digital lending apps from accessing the borrower's contact list for the purpose of harassing their contacts."
            }
          },
          {
            "@type": "Question",
            "name": "What is the penalty for banks that violate recovery guidelines?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The RBI has the power to impose heavy fines on banks (often in crores) and can even ban the bank from using recovery agents for a specific period if systemic violations of harassment guidelines are found."
            }
          },
          {
            "@type": "Question",
            "name": "Can SettleLoans help me stop calls for a friend's loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our legal team can help you draft formal cease and desist notices and file complaints with the banking ombudsman to ensure your number is removed from their harassment list."
            }
          },
          {
            "@type": "Question",
            "name": "What is the role of a 'Guarantor' vs a 'Reference'?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Guarantor is legally bound to pay the loan if the borrower defaults. They sign the loan agreement. A Reference is just a contact person with no financial liability. If you are a reference, you don't owe a rupee."
            }
          },
          {
            "@type": "Question",
            "name": "How do I verify if a recovery agent is legitimate?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legitimate agents must carry an ID card, a copy of the bank's authorization letter (DRP), and must identify the bank they are calling for immediately. They will never ask for payment into a personal account."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a police complaint against the bank for agent harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Banks are responsible for the actions of their agents. You can name the bank as a party in the police complaint for criminal intimidation and violation of privacy."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if my photos are being circulated on WhatsApp?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is a serious criminal offense under the IT Act. Take screenshots immediately. Report the number to WhatsApp and file a complaint at your nearest Cyber Crime police station or online at cybercrime.gov.in."
            }
          },
          {
            "@type": "Question",
            "name": "How can I check if my privacy was violated by a lending app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Check the app's permissions in your phone settings. If you see 'Contacts' or 'Files' access, and the app is not a banking app, it likely scraped your data. You can report such apps to the RBI Sachet portal."
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
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Consumer Rights & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Why Recovery Agents Call You <br className="hidden md:block"/> for a Friend's Loan
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Are you being harassed for someone else's debt? Learn the secrets of how agents find you and the legal steps to stop the calls forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Stop Harassment Now
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
                <li>
                  <Link href="/faqs" className="hover:text-[#1F5EFF] transition-colors">FAQs</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                   Recovery Agent Guide
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3 Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24">
              <TableOfContents 
                items={[
                  { id: "intro", title: "The Sudden Ring: A Shocking Reality" },
                  { id: "how-they-find-you", title: "How They Get Your Number" },
                  { id: "scraping-permission", title: "The Shadow of Contact Scraping" },
                  { id: "psychology", title: "The Psychology of Harassment" },
                  { id: "legal-status", title: "Are You Legally Liable?" },
                  { id: "helping-friend", title: "Helping Your Friend Ethically" },
                  { id: "rbi-guidelines", title: "RBI Guidelines (2024-25)" },
                  { id: "dark-tactics", title: "Dark Recovery Tactics" },
                  { id: "dpdp-act", title: "The DPDP Act 2023 Shield" },
                  { id: "how-to-stop", title: "Step-by-Step Stop Guide" },
                  { id: "digital-sanitization", title: "Digital Privacy Sanitization" },
                  { id: "future-recovery", title: "Future of Recovery: 2026 Rules" },
                  { id: "filing-complaints", title: "Filing Legal Complaints" },
                  { id: "professional-help", title: "When to Seek Professional Help" },
                  { id: "evolution-of-law", title: "Evolution of Recovery Law" },
                  { id: "rbi-2026-deep-dive", title: "RBI 2026: The New Shield" },
                  { id: "legal-remedies", title: "Legal Remedies & Injunctions" },
                  { id: "fir-guide", title: "The FIR Guide: Police Action" },
                  { id: "success-stories", title: "Success Stories" },
                  { id: "faqs", title: "FAQs" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="intro" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Sudden Ring: <span className="text-black">Why Are They Calling You?</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  Imagine sitting at a family dinner or a crucial business meeting when your phone vibrates. You see an unknown number and answer, thinking it might be a client or a long-lost friend. Instead, a harsh, aggressive voice on the other end starts shouting about a loan you never took. They mention a friend, a former colleague, or even a distant relative who has defaulted on their EMI. They demand that you pay the debt or provide information about the borrower's whereabouts.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
                  This experience is not just annoying; it is deeply violating. It leaves you wondering: <strong>How did they get my number?</strong> Why am I being dragged into someone else's financial mess? In this comprehensive guide, we will pull back the curtain on the world of Indian debt recovery and empower you with the legal tools to stop the harassment once and for all.
                </p>
              </div>
            </section>

            <section id="how-they-find-you" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Recovery Agents Get Your Details</h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents in India use a combination of digital footprints and traditional tracing methods to find anyone connected to a defaulting borrower. While the methods vary, the goal is always the same: social pressure.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-[#1F5EFF]">1. Provided as a Reference</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The most common way is that the borrower provided your name and number as a personal reference during the loan application. Banks usually require 2 or 3 references for personal loans and credit cards. Agents use these names as the first point of contact when the borrower stops answering calls.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-[#1F5EFF]">2. Digital Footprinting and Social Media</h3>
                  <p className="text-gray-700 leading-relaxed">
                    In the age of Instagram, Facebook, and LinkedIn, tracing connections is trivial. Agents often search for the borrower's profile and see who they interact with most. If you have commented on their photos or are listed as a family member, you become a target.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-3 text-[#1F5EFF]">3. Public and Professional Directories</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Apps like Truecaller or professional portals like Naukri and Monster provide a wealth of data. Agents often look for mutual connections or people working in the same organization as the borrower.
                  </p>
                </div>
              </div>
            </section>

            <section id="scraping-permission" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">The Shadow of Contact Scraping</h2>
              <p className="text-lg leading-relaxed mb-6">
                This is perhaps the most invasive method. Many digital lending apps, especially unregulated ones, require the borrower to grant 'Contact List' permissions before the loan is disbursed.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-500 mb-8">
                <h4 className="font-black text-red-900 mb-4 text-xl flex items-center">
                   <span className="mr-2">🚨</span> The Tech Behind the Harassment
                </h4>
                <p className="text-red-800 leading-relaxed mb-4">
                  When a borrower clicks 'Allow' on a contact permission prompt, the app uploads their entire phonebook to a central server. The algorithm then identifies the most frequently called or messaged contacts. These people are tagged as 'High-Intensity References.'
                </p>
                <p className="text-red-800 leading-relaxed">
                  When a default occurs, the recovery software automatically starts sending WhatsApp messages or making automated voice calls to every single person in that uploaded list. This is why you might receive a call even if you haven't spoken to that friend in five years.
                </p>
              </div>
            </section>

            <section id="psychology" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Psychology of Harassment: Why They Target You</h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents are not just looking for money; they are weaponizing your relationships. The psychological core of their strategy is 'Social Shaming.' They know that if they call your boss or your mother-in-law, you will be so embarrassed that you will borrow money from somewhere else just to make the calls stop.
              </p>
              <div className="bg-gray-900 text-white p-10 rounded-3xl mb-8">
                <h4 className="text-2xl font-black mb-6 text-[#1F5EFF]">The 'Third-Party Pressure' Cycle</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#1F5EFF] pl-6">
                    <p className="font-bold mb-2">Phase 1: The Soft Trace</p>
                    <p className="text-sm opacity-70 italic text-white">The agent calls and pretends to be a friend asking for the borrower's new number.</p>
                  </div>
                  <div className="border-l-2 border-[#1F5EFF] pl-6">
                    <p className="font-bold mb-2">Phase 2: The Subtle Threat</p>
                    <p className="text-sm opacity-70 italic text-white">They mention that the borrower has committed a 'fraud' and that you might be called as a witness in a police case.</p>
                  </div>
                  <div className="border-l-2 border-[#1F5EFF] pl-6">
                    <p className="font-bold mb-2">Phase 3: Full Aggression</p>
                    <p className="text-sm opacity-70 italic text-white">Abusive calls to your HR, neighbors, or social media tagging to break your spirit.</p>
                  </div>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Understanding this cycle removes its power. When you realize that the agent is simply following a script designed to trigger your shame, you can respond with logic and legal facts rather than fear.
              </p>
            </section>

            <section id="legal-status" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Are You Legally Liable?</h2>
              <div className="flex flex-col gap-6">
                <div className="bg-white border-2 border-[#1F5EFF] p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-black text-[#1F5EFF] mb-4">The Short Answer: NO.</h3>
                  <p className="text-lg leading-relaxed text-gray-800">
                    Unless you have specifically signed a document as a <strong>Guarantor</strong> or a <strong>Co-Borrower</strong>, you have zero legal liability for the loan. Being a "Reference" is not a legal commitment to pay. You are essentially a stranger to the contract between the bank and the borrower.
                  </p>
                </div>
                <p className="text-gray-600 italic px-4">
                  Note: Even if you are a relative, the debt of one person cannot be legally shifted to another without a written contract. Do not let agents trick you into thinking your relation makes you responsible.
                </p>
              </div>
            </section>

            <section id="helping-friend" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Helping Your Friend Ethically: A Guide for You</h2>
              <p className="text-lg leading-relaxed mb-6">
                Oftentimes, you want to help your friend but don't want to get pulled into the fire yourself. If your friend has defaulted, they are likely in a state of high stress. Here is how you can support them without becoming a victim of harassment:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 italic font-medium">
                  "Don't provide your number as a guarantor for their next loan. Helping with advice is better than helping with your credit score."
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold mb-2">The 'Settle' Advice</h4>
                  <p className="text-sm">Tell your friend about SettleLoans. Instead of running from calls, they can close the loan legally for a fraction of the cost.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If the borrower is hiding, encourage them to face the bank. Most banks are willing to give a settlement or a moratorium if the borrower proves genuine hardship. By avoiding the bank, they are only making the situation worse for themselves and for everyone in their contact list.
              </p>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">RBI Guidelines (2024-2025): Your Shield</h2>
              <p className="mb-8 text-lg">
                The Reserve Bank of India (RBI) has issued strict Master Circulars to curb the menace of recovery harassment. Understanding these rules is the first step to fighting back.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "No Calling Times", desc: "Agents can ONLY call between 8:00 AM and 7:00 PM. Any call outside this window is a direct violation." },
                  { title: "No Third Party Involvement", desc: "Banks cannot discuss the details of the debt with neighbors, relatives, or friends of the borrower." },
                  { title: "No Harassment", desc: "Abusive language, physical threats, and intimidation are strictly prohibited. Agents must remain civil." },
                  { title: "Privacy Protection", desc: "Agents cannot post messages on social media or public walls about the borrower's default." },
                  { title: "Right to Disconnect", desc: "If you inform the agent that you are not the borrower and do not want to be contacted, they MUST stop calling you." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-blue-50/30 rounded-xl border border-blue-100">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="dark-tactics" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Dark Recovery Tactics: Identifying the Abuse</h2>
              <p className="mb-6">Agents often use psychological triggers to force you to pressure your friend. Recognize these common (and often illegal) tactics:</p>
              <ul className="space-y-4">
                <li className="p-5 bg-white border border-red-100 rounded-xl">
                  <strong>The Fake Legal Notice:</strong> Sending a document over WhatsApp that looks like a court summons or an FIR copy. These are almost always fake. Always check for a 'CNR Number' or a valid court seal.
                </li>
                <li className="p-5 bg-white border border-red-100 rounded-xl">
                  <strong>The 'Friend in Hospital' Scam:</strong> Calling and saying the borrower is in a medical emergency to lure you into revealing their location. They might even pose as a hospital administrator.
                </li>
                <li className="p-5 bg-white border border-red-100 rounded-xl">
                  <strong>The Social Shaming:</strong> Adding you to a WhatsApp group titled 'Loan Defaulter Support' along with other contacts of the borrower. This is a massive violation of privacy.
                </li>
              </ul>
              <div className="mt-8 bg-[#FFF9E5] p-10 rounded-[40px] border border-[#F5C71A]/30">
                <h4 className="text-2xl font-black mb-6 flex items-center">
                  <span className="mr-3 text-3xl">💡</span> Pro Tip: Identifying Spoofing
                </h4>
                <p className="leading-relaxed mb-4 text-gray-800">
                  Many illegal apps use 'VoIP Spoofing' to make it look like they are calling from a local landline or even a police station. If you suspect a call is spoofed, ask the caller to wait and call the number back from a different phone. Usually, it will show as 'invalid' or connect to a completely different person.
                </p>
                <p className="leading-relaxed text-gray-800">
                  Legitimate bank recovery calls will always originate from a registered 140-series number or a verified business account on WhatsApp. If you see a random 10-digit mobile number, exercise extreme caution.
                </p>
              </div>
            </section>

            <section id="dpdp-act" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The DPDP Act 2023 Shield: A New Era for Privacy</h2>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                The Digital Personal Data Protection (DPDP) Act of 2023 has fundamentally changed how banks handle your data. Here is why it matters to you:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8 text-white">
                <div className="bg-[#2E2E2E] p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">Explicit Consent</h4>
                  <p className="text-sm opacity-80 leading-relaxed">Lenders must have specific, informed, and unambiguous consent to use <strong>your</strong> number. If your friend gave your number, the bank still needs <strong>your</strong> permission to call you for recovery.</p>
                </div>
                <div className="bg-[#2E2E2E] p-8 rounded-3xl">
                  <h4 className="text-xl font-bold mb-4 text-[#1F5EFF]">Right to Erasure</h4>
                  <p className="text-sm opacity-80 leading-relaxed">You have the legal right to ask the bank to delete your personal data (number) from their recovery servers if you are not a party to the loan contract.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Any violation of the DPDP Act can lead to penalties up to ₹250 crore for the data fiduciary (the bank). Mentioning this Act during a call usually makes the senior managers at the collection agency very nervous.
              </p>
            </section>

             <section id="how-to-stop" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The 5-Step Guide to Stop the Harassment</h2>
              <div className="relative pl-8 border-l-4 border-[#1F5EFF] space-y-12">
                <div className="relative">
                  <span className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl border-4 border-white shadow-md">1</span>
                  <h4 className="font-black text-2xl mb-2">Record Everything</h4>
                  <p className="text-gray-600">Start recording every incoming call. Use a call recorder app or another phone. If the agent uses abusive language, tell them directly: 'This call is being recorded for legal evidence.'</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl border-4 border-white shadow-md">2</span>
                  <h4 className="font-black text-2xl mb-2">Demand ID & Authorization</h4>
                  <p className="text-gray-600">Ask for the agent's full name, their employee ID, and the name of the recovery agency. Ask for the formal authorization letter from the bank. Legit agents will provide this; harassers will hang up.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl border-4 border-white shadow-md">3</span>
                  <h4 className="font-black text-2xl mb-2">The 'Reference Only' Statement</h4>
                  <p className="text-gray-600">Clearly state: 'I am not the borrower or guarantor. I do not authorize you to call me. Remove my number from your list immediately as per RBI privacy guidelines.'</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl border-4 border-white shadow-md">4</span>
                  <h4 className="font-black text-2xl mb-2">Block and Report</h4>
                  <p className="text-gray-600">After the first warning, block the number. Use Truecaller's 'Report Spam' feature. If they call from a new number, repeat the process. The goal is to build a digital trail of harassment.</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[28px] top-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl border-4 border-white shadow-md">5</span>
                  <h4 className="font-black text-2xl mb-2">Legal Warning</h4>
                  <p className="text-gray-600">Mention that you are consulting with SettleLoans and will be filing a complaint with the Banking Ombudsman. Usually, the fear of RBI penalties is enough to stop them.</p>
                </div>
              </div>
            </section>

            <section id="digital-sanitization" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Digital Privacy Sanitization Guideline</h2>
              <p className="text-lg leading-relaxed mb-6">
                Stopping the calls is phase one. Securing your digital identity is phase two. Follow this checklist:
              </p>
              <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="p-6 font-black text-gray-900">Platform</th>
                      <th className="p-6 font-black text-gray-900">Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-6 font-bold">Facebook/Instagram</td>
                      <td className="p-6 text-sm text-gray-600">Lock your profile. Hide your friend list. Remove public contact info.</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold">LinkedIn</td>
                      <td className="p-6 text-sm text-gray-600">Change message settings to 'Connections Only.' Blur your current company name for unknown viewers.</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold">Truecaller</td>
                      <td className="p-6 text-sm text-gray-600">Request 'Unlisting' of your number from their public directory if possible.</td>
                    </tr>
                    <tr>
                      <td className="p-6 font-bold">WhatsApp</td>
                      <td className="p-6 text-sm text-gray-600">Set 'About' and 'Profile Photo' to 'My Contacts.' Turn off 'Read Receipts.'</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="future-recovery" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Future of Recovery: The 2026 RBI Rules</h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI has proposed even stricter rules starting July 1, 2026. These include:
              </p>
              <div className="space-y-4">
                <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50 flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#1F5EFF] mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800"><strong>Mandatory Certification:</strong> Every recovery agent must be certified by the Indian Institute of Banking and Finance (IIBF).</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50 flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#1F5EFF] mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800"><strong>No Calling on Holidays:</strong> A complete ban on recovery calls during festivals, national holidays, and family emergencies like deaths.</p>
                </div>
                <div className="p-6 border border-gray-100 rounded-3xl bg-gray-50 flex items-center">
                  <div className="w-4 h-4 rounded-full bg-[#1F5EFF] mr-4 flex-shrink-0"></div>
                  <p className="text-gray-800"><strong>Board-Approved Policies:</strong> Banks must have a board-approved policy strictly monitoring the behavior of third-party agencies.</p>
                </div>
              </div>
              <p className="mt-8 text-lg font-medium italic text-[#1F5EFF]">
                The tide is turning in favor of the consumer. You no longer have to live in fear.
              </p>
            </section>

            <section id="filing-complaints" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Filing Legal Complaints: The Heavy Artillery</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-8 bg-black text-white rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Level 1: The Bank's Nodal Officer</h3>
                  <p className="text-sm opacity-80 leading-relaxed">Every bank has a Principal Nodal Officer. Send an email with call recordings and screenshots. State that their agents are violating RBI circular RBI/2022-23/108.</p>
                </div>
                <div className="p-8 bg-black text-white rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Level 2: RBI Ombudsman</h3>
                  <p className="text-sm opacity-80 leading-relaxed">If the bank doesn't resolve it in 30 days, file a complaint on the RBI CMS portal. This is a powerful move that gets the bank's attention immediately.</p>
                </div>
                <div className="p-8 bg-black text-white rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Level 3: Cyber Cell</h3>
                  <p className="text-sm opacity-80 leading-relaxed">If they have morphed your photos or made abusive WhatsApp groups, file a complaint at cybercrime.gov.in. This is a criminal offense.</p>
                </div>
                <div className="p-8 bg-black text-white rounded-3xl">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">Level 4: Police FIR</h3>
                  <p className="text-sm opacity-80 leading-relaxed">For threats of violence or trespass, go to the local police station and file an FIR under IPC Section 506 (Criminal Intimidation).</p>
                </div>
              </div>
            </section>

             <section id="professional-help" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">When to Seek Professional Help</h2>
              <p className="text-lg leading-relaxed mb-6">
                While you can handle a few calls yourself, professional intervention is needed when the harassment becomes systematic or when you want to help your friend close the loan.
              </p>
              <div className="bg-[#E3EDFF] p-8 rounded-3xl border border-[#1F5EFF]/20">
                <h3 className="text-2xl font-black text-[#1F5EFF] mb-4">How SettleLoans Protects You</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#1F5EFF] mr-3 font-bold text-xl">🛡</span>
                    <span><strong>Legal Shield:</strong> We draft formal cease-and-desist notices to the bank's legal department on your behalf.</span>
                  </li>
                   <li className="flex items-start">
                    <span className="text-[#1F5EFF] mr-3 font-bold text-xl">🛡</span>
                    <span><strong>Call Routing:</strong> We can assist in routing all future calls through our grievance handling system.</span>
                  </li>
                   <li className="flex items-start">
                    <span className="text-[#1F5EFF] mr-3 font-bold text-xl">🛡</span>
                    <span><strong>Settlement Negotiation:</strong> If your friend wants to pay, we negotiate a 40-70% waiver to close the case legally and stop the calling machine.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="evolution-of-law" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The Evolution of Debt Recovery Law in India (1993-2025)</h2>
              <p className="text-lg leading-relaxed mb-6">
                To truly understand your rights, you must understand the history of how India has fought against predatory recovery practices. The legal landscape has shifted from the 'Wild West' of the 90s to a highly regulated environment today.
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-3">1. The RDDBFI Act, 1993</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Recovery of Debts Due to Banks and Financial Institutions Act was the first major step. It established Debt Recovery Tribunals (DRTs). However, these were designed for large corporate defaults, leaving individual consumers vulnerable to local goons hired by banks.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">2. The SARFAESI Act, 2002</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This gave banks the power to seize assets without court intervention for secured loans (like homes or cars). While it improved bank balance sheets, it also led to an increase in aggressive recovery tactics as banks felt emboldened to act quickly.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">3. The 2008 Landmark Supreme Court Judgment</h4>
                  <p className="text-gray-700 leading-relaxed">
                    In the case of <em>ICICI Bank vs. Shanti Devi Sharma</em>, the Supreme Court of India took a very dim view of recovery agents. The court stated that 'banks cannot use musclemen' to recover loans. This judgment forms the bedrock of every harassment complaint today. If an agent threatens you, they are essentially violating the orders of the highest court in the land.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">4. The RBI Fair Practices Code (2015)</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The RBI introduced the Fair Practices Code, which for the first time explicitly mentioned 'harassment' of third parties. It mandated that the customer's privacy must be respected.
                  </p>
                </div>
              </div>
              <p className="mt-8 text-lg leading-relaxed">
                Today, with the rise of FinTech and digital lending, we are in the fifth generation of debt recovery law. The emphasis has shifted from 'recovering at all costs' to 'recovering with dignity.' The law recognizes that a loan default is a civil matter, not a criminal one. You cannot be treated like a criminal for a financial failure, especially one that isn't even yours.
              </p>
            </section>

            <section id="rbi-2026-deep-dive" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The 2026 RBI Master Circular: A Deep Dive</h2>
              <p className="text-lg leading-relaxed mb-6 font-medium">
                The upcoming Reserve Bank of India (RBI) Master Circular, set to be fully implemented by early 2026, is the most radical shift in consumer protection since the inception of the Banking Ombudsman scheme.
              </p>
              <div className="bg-amber-50 rounded-[40px] p-12 border border-amber-200">
                <h3 className="text-2xl font-black mb-6">Key Directives of the 2026 Circular</h3>
                <div className="space-y-6">
                  <div className="flex gap-6">
                    <span className="text-3xl mt-1">📌</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-900">Zero-Tolerance for Third-Party Calls</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">The 2026 rules declare any call made to a non-guarantor third party (friends, relatives, colleagues) without their prior written consent as a <strong>systemic breach</strong>. This means the bank could lose its license to conduct recovery activities through agents if caught multiple times.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-3xl mt-1">📌</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-900">Mandatory Digital Call Logging</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">Every single call made by a recovery agent must be logged on a centralized digital portal accessible by the RBI. This includes the duration of the call, the location of the agent, and the tone of the conversation analyzed via AI for 'harassment markers.'</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="text-3xl mt-1">📌</span>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-gray-900">Strict Professional Hours (8 AM - 7 PM)</h4>
                      <p className="text-gray-700 leading-relaxed text-sm">While these hours exist in theoretical guidelines today, the 2026 rules mandate that any automated calling software (dialers) must be hard-coded to shut down outside these hours. Transgressions will be automatically flagged by the RBI's IT supervisors.</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-lg leading-relaxed">
                By understanding these upcoming regulations, you can challenge recovery agents today. Mentioning that you are aware of the "RBI 2026 Digital Compliance Mandates" often signals to the recovery agency that you are a well-informed individual who is likely to escalate the matter to the regulator.
              </p>
            </section>

            <section id="legal-remedies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Legal Remedies Against NBFC Harassment</h2>
              <p className="text-lg leading-relaxed mb-6">
                Most harassment today comes from unregulated or aggressive Non-Banking Financial Companies (NBFCs) and Digital Lending Apps (DLAs). These entities often believe they are outside the jurisdiction of traditional banking rules. They are wrong.
              </p>
              <div className="grid md:grid-cols-2 gap-8 my-10">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center mr-3 text-xs">A</span>
                    Civil Injunction
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">You can file for a permanent injunction in a civil court against the bank/NBFC. This is a court order that stops them from calling you or visiting your premises. Violating this is considered Contempt of Court.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-[#1F5EFF] flex items-center justify-center mr-3 text-xs">B</span>
                    Consumer Forum Complaint
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">If the harassment has caused you mental agony or loss of reputation, you can sue for damages in the District Consumer Disputes Redressal Forum. Many Indians have successfully won compensation of ₹50,000 to ₹5,00,000 in such cases.</p>
                </div>
              </div>
              <div className="bg-[#EFFFFA] p-10 rounded-[40px] border border-[#10B981]/20">
                <h4 className="font-bold text-xl mb-4 text-[#065F46]">The Power of the 'Cease and Desist' Notice</h4>
                <p className="leading-relaxed text-gray-800 italic">
                  "A formally drafted Cease and Desist notice from a specialized legal firm like SettleLoans carries immense weight. It shows the bank that the harassment is no longer a private annoyance but a documented legal dispute. 95% of our clients see an immediate stop to harassment within 24 hours of serving this notice."
                </p>
              </div>
            </section>

            <section id="fir-guide" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">The FIR Guide: Taking Criminal Action</h2>
              <p className="text-lg leading-relaxed mb-6">
                When harassment crosses the line into threats of physical violence, trespassing at your home or office, or character assassination (morphing photos), it is no longer a civil matter. It is a crime under the Indian Penal Code (IPC).
              </p>
              <div className="bg-red-900 text-white rounded-[40px] p-12 shadow-2xl">
                <h3 className="text-2xl font-black mb-6 text-red-500 flex items-center">
                  <span className="mr-3">🚔</span> Step-by-Step Police Action
                </h3>
                <div className="grid gap-8">
                  <div className="border-b border-white/10 pb-6">
                    <h4 className="font-bold text-lg mb-2 underline decoration-red-500">Step 1: The Formal Complaint</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Write a formal letter to the Senior Inspector of your local Police Station. Detail the phone numbers, the names used by agents, and the specific threats made. Attach call recordings on a pen drive or CD.</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <h4 className="font-bold text-lg mb-2 underline decoration-red-500">Step 2: Relevant IPC Sections</h4>
                    <p className="text-sm opacity-80 leading-relaxed">Ensure your complaint mentions <strong>Section 503/506</strong> (Criminal Intimidation), <strong>Section 509</strong> (Outraging Modesty, if applicable), and <strong>Section 354C/66E IT Act</strong> (Voyeurism/Privacy violation).</p>
                  </div>
                  <div className="border-b border-white/10 pb-6">
                    <h4 className="font-bold text-lg mb-2 underline decoration-red-500">Step 3: Demand a CSR or FIR</h4>
                    <p className="text-sm opacity-80 leading-relaxed">If the police are hesitant, ask for a 'Complaint Summary Report' (CSR). If the threat is serious, insist on a First Information Report (FIR). An FIR forces the bank to officially respond to the police investigation.</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-lg leading-relaxed italic text-gray-500 text-center">
                "Police intervention is the ultimate deterrent. Most recovery agencies have a 'Blacklist' of individuals who have filed police cases. Once you are on that list, the calls will never return."
              </p>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 text-center">Reviews & Testimonials</h2>
              <div className="grid gap-8">
                {[
                  { 
                    name: "Rahul Verma", 
                    role: "Software Engineer", 
                    text: "An agent was calling me 50 times a day for a cousin's loan. They even threatened to call my HR. SettleLoans helped me file an RBI Ombudsman complaint, and within 48 hours, I got an apology email from the bank's Nodal Officer.",
                    rating: 5
                  },
                  { 
                    name: "Deepa Nair", 
                    role: "Homemaker", 
                    text: "They added me to a WhatsApp group with relatives I hadn't seen in years. It was so embarrassing. SettleLoans' legal team sent a notice to the collection agency, and the calls stopped immediately.",
                    rating: 5
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-black text-xl mr-4">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-black text-xl text-gray-900">{testimonial.name}</h5>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex text-yellow-400">
                        {Array(testimonial.rating).fill(0).map((_, i) => <span key={i}>★</span>)}
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {jsonLd["@graph"]?.map((item: any, idx: number) => {
                  if (item["@type"] === "FAQPage" && item.mainEntity) {
                    return item.mainEntity.map((faq: any, faqIdx: number) => (
                      <details key={`${idx}-${faqIdx}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-all">
                        <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-gray-900 list-none bg-gray-50 group-open:bg-[#1F5EFF] group-open:text-white transition-colors">
                          <span className="text-lg">{faqIdx + 1}. {faq.name}</span>
                          <span className="transition-transform group-open:rotate-180">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                          </span>
                        </summary>
                        <div className="p-6 text-gray-700 leading-relaxed border-t border-gray-100 bg-white">
                          {faq.acceptedAnswer.text}
                        </div>
                      </details>
                    ));
                  }
                  return null;
                })}
              </div>
            </section>

            <div className="mt-20 p-10 bg-black rounded-3xl text-center">
               <h3 className="text-3xl font-black text-white mb-6">End the Harassment Today</h3>
               <p className="text-[#DEDEDE] mb-8 max-w-xl mx-auto opacity-80">Join 50,000+ Indians who have reclaimed their peace of mind with SettleLoans. No more calls, no more threats. Just legal freedom.</p>
               <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-black py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-xl text-xl">
                 Get a Free Consultation
               </Link>
            </div>

          </article>

          {/* Right Column: CTA & Related Pages */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              
              <div className="bg-[#2E2E2E] rounded-3xl shadow-2xl overflow-hidden border border-[#1F5EFF]/20 group">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Need a Shield?</h3>
                  <p className="opacity-90 text-sm">Join our legal protection program today.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-2xl hover:scale-105 transition-all shadow-lg text-lg">
                    Speak to a Lawyer
                  </Link>
                  <p className="mt-6 text-xs font-bold opacity-60 uppercase tracking-widest">
                    Available 24/7/365
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-50 pb-4">Essential Reading</h3>
                <ul className="space-y-6 text-sm font-black">
                  <li>
                    <Link href="/ignoring-calls-of-recovery-agent" className="group flex items-center text-gray-800 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Ignoring Agent Calls?
                    </Link>
                  </li>
                  <li>
                    <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="group flex items-center text-gray-800 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Legal Consequences
                    </Link>
                  </li>
                  <li>
                    <Link href="/loan-settlement-lawyers" className="group flex items-center text-gray-800 hover:text-[#1F5EFF] transition-colors">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      Find a Debt Lawyer
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
