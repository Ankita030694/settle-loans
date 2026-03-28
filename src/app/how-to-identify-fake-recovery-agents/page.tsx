import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "How to Identify Fake Recovery Agents in India | RBI Guidelines & Safety Tips",
  description: "Learn how to differentiate between genuine and fake recovery agents in India. Stay protected with RBI guidelines, identification tips, and legal rights for borrowers.",
  alternates: {
    canonical: "https://settleloans.in/how-to-identify-fake-recovery-agents",
  },
};

export default function FakeRecoveryAgentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#webpage",
        "url": "https://settleloans.in/how-to-identify-fake-recovery-agents",
        "name": "How to Identify Fake Recovery Agents in India | RBI Guidelines & Safety Tips",
        "description": "Comprehensive guide to identifying fraudulent debt recovery agents and understanding your rights under RBI norms.",
        "breadcrumb": { "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#breadcrumb",
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
            "name": "How to Identify Fake Recovery Agents",
            "item": "https://settleloans.in/how-to-identify-fake-recovery-agents"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#article",
        "headline": "How to Identify Fake Recovery Agents: Protect Yourself from Harassment",
        "description": "Explaining the signs of fraudulent recovery practices, RBI regulations, and the legal steps to protect yourself from debt collection scams.",
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
        "datePublished": "2024-03-28",
        "dateModified": "2024-03-28",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#product",
        "name": "Debt Recovery Protection Guidance",
        "description": "Expert advice and legal support for dealing with aggressive or fake recovery agents.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Aman G." },
            "datePublished": "2024-02-15",
            "reviewBody": "SettleLoans helped me identify a fake agent who was calling from a random mobile number. They saved me from losing my hard earned money.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera K." },
            "datePublished": "2024-03-05",
            "reviewBody": "I was terrified when they called my boss. SettleLoans showed me the RBI rules and stopped the harassment within 24 hours.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-to-identify-fake-recovery-agents#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I know if a recovery agent is genuine?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A genuine agent will always have an ID card from the bank or agency and a formal authorization letter from the lender. They will never ask for payment into a personal account or UPI ID."
            }
          },
          {
            "@type": "Question",
            "name": "What are the allowed calling hours for recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "According to RBI guidelines, recovery agents can only call or visit between 8:00 AM and 7:00 PM. Any calls outside this window are a violation of the Fair Practice Code."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent contact my friends or family?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. RBI rules strictly prohibit agents from contacting your relatives, friends, or colleagues to shame you. They can only contact the borrower and the co-borrower or guarantor."
            }
          },
          {
            "@type": "Question",
            "name": "Should I pay an agent in cash?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Never pay in cash unless you are at a physical bank branch and receive an official printed receipt immediately. It is always safer to pay through the official bank portal or app."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a fake agent threatens me with violence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Record the call, take down their details, and immediately file a police complaint (FIR). You should also report the incident to the bank they claim to represent and the National Cybercrime Helpline (1930)."
            }
          },
          {
            "@type": "Question",
            "name": "Is it legal for agents to use WhatsApp to send notices?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While banks may send reminders via WhatsApp, a formal legal notice must be sent via registered post or official email. Agents sending 'court orders' or 'FIR copies' on WhatsApp are usually scammers."
            }
          },
          {
            "@type": "Question",
            "name": "How can I verify if my loan is with a specific agency?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contact your bank's official customer care number found on their website. Ask them if they have assigned your case to an external agency and request the agency's name."
            }
          },
          {
            "@type": "Question",
            "name": "What is digital shaming in debt recovery?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digital shaming involves threatening to share your photos or loan details with your contacts or on social media. This is strictly illegal and the RBI has taken severe action against apps doing this."
            }
          },
          {
            "@type": "Question",
            "name": "Can I complain to the RBI about recovery harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. First, file a complaint with the bank's grievance officer. If you don't get a satisfactory response within 30 days, you can escalate it to the RBI Ombudsman online."
            }
          },
          {
            "@type": "Question",
            "name": "Can a recovery agent have me arrested?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Recovery agents have no power to arrest anyone. Arrests for financial defaults can only happen through a valid court warrant and police action in cases of criminal intent or fraud."
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
              Consumer Safety & Protection
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight text-balance">
              How to Identify Fake <br className="hidden md:block" /> Recovery Agents in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Stop harassment and avoid scams. Learn your legal rights, understand RBI guidelines, and find out how to verify identity before you pay a single rupee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Legal Support Today
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
                  How to Identify Fake Recovery Agents
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
                { id: "reality-of-recovery", title: "The Reality of Recovery" },
                { id: "defining-agents", title: "Who are Recovery Agents?" },
                { id: "rbi-guidelines", title: "Mandatory RBI Guidelines" },
                { id: "identify-genuine", title: "Spotting a Genuine Agent" },
                { id: "fake-agent-flags", title: "Red Flags of Fake Agents" },
                { id: "common-scams", title: "Common Recovery Scams" },
                { id: "what-to-do-when-called", title: "What to Do When Called" },
                { id: "digital-shaming", title: "Illegal Digital Shaming" },
                { id: "legal-shield", title: "Your Legal Protections" },
                { id: "verify-credentials", title: "How to Verify Credentials" },
                { id: "complaint-guide", title: "How to File a Complaint" },
                { id: "rbi-ombudsman", title: "Role of RBI Ombudsman" },
                { id: "protecting-family", title: "Protecting Your Family" },
                { id: "loan-settlement-safety", title: "Settlement vs Avoiding" },
                { id: "settleloans-role", title: "How We Protect You" },
                { id: "case-studies", title: "Real Life Case Studies" },
                { id: "future-of-recovery", title: "The Future of Safety" },
                { id: "faqs", title: "Common Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="reality-of-recovery" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Reality of Debt Recovery: <span className="text-black">Staying Safe in a Complex World</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6 font-medium">
                  Financial stress is one of the most difficult experiences a person can go through. When you are struggling to pay your EMIs, the last thing you need is a aggressive voice on the phone making threats. In India, the debt recovery industry has seen a massive surge in both legitimate activity and, unfortunately, illegal scams.
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 mb-6">
                  Understanding how to identify a fake recovery agent is not just about protecting your money; it is about protecting your peace of mind and your family's dignity. Many people, out of fear, end up paying scammers who have no connection to their actual bank. We want to empower you with the knowledge that makes you immune to these predatory tactics. 
                </p>
                <p className="text-lg leading-relaxed text-[var(--color-text-body)] relative z-10 font-bold text-[#1F5EFF]">
                  Remember, having a debt is not a crime. You have rights, and no one is allowed to take them away from you. This guide will walk you through every detail you need to stay safe.
                </p>
              </div>
            </section>

            <section id="defining-agents" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Who Are Recovery Agents? The Legal Definition
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A recovery agent, also known as a collection agent, is an individual or an agency appointed by a bank or a Non-Banking Financial Company (NBFC) to assist in the recovery of dues from borrowers who have defaulted on their loan or credit card payments. These agents act as representatives of the financial institution.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In India, the Reserve Bank of India (RBI) has provided a very clear framework for how these agents should be recruited and trained. They are supposed to undergo mandatory training and certification from the Indian Institute of Banking and Finance (IIBF). This training includes modules on ethical behavior, legal compliance, and customer interaction. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                However, the reality on the ground is often different. Many small lending apps and unregulated entities hire 'tele-callers' who have no formal training and use aggressive scripts to intimidate borrowers. It is critical to understand that a genuine recovery agent is a professional who must follow a code of conduct. If they are not acting professionally, they are either a fake agent or a genuine agent violating the law.
              </p>
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-8">
                <h3 className="text-xl font-bold mb-6 italic">Key Responsibilities of a Legal Agent:</h3>
                <ul className="grid md:grid-cols-1 gap-4 text-sm font-medium">
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white shrink-0 text-xs">1</span>
                    To remind the borrower about their outstanding dues in a respectful manner.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white shrink-0 text-xs">2</span>
                    To help the borrower understand the consequences of non-payment.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white shrink-0 text-xs">3</span>
                    To facilitate the payment process through official bank channels.
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-6 h-6 bg-[#1F5EFF] rounded-full flex items-center justify-center text-white shrink-0 text-xs">4</span>
                    To act as a bridge for communication between the bank and the borrower for settlement or restructuring.
                  </li>
                </ul>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Mandatory RBI Guidelines: The Golden Rules for 2024-2025
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India has updated its "Master Circular on Outsource of Financial Services" to include very strict rules for recovery agents. These rules are designed to prevent the harassment and humiliation of borrowers. If an agent is breaking these rules, you can immediately conclude that they are either fraudulent or acting illegally.
              </p>
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Rule 1: Permissible Calling Hours</h4>
                  <p className="text-sm text-blue-800">
                    Agents are strictly allowed to call or visit only between 8:00 AM and 7:00 PM. Calls at midnight, early morning, or late at night are a serious violation of the RBI Fair Practice Code.
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Rule 2: No Harassment or Intimidation</h4>
                  <p className="text-sm text-blue-800">
                    Agents are prohibited from using foul or abusive language, making threats of violence, or engaging in any form of physical harm. They cannot use persistent calling that amounts to harassment.
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Rule 3: Privacy and Third Party Contact</h4>
                  <p className="text-sm text-blue-800">
                    The RBI has made it clear that lenders cannot contact your colleagues, neighbors, or workplace to shaming you. Your financial distress is a private matter. They are not permitted to disclose your loan details to anyone other than the borrower and co-borrower.
                  </p>
                </div>
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">Rule 4: Mandatory Notice of Assignment</h4>
                  <p className="text-sm text-blue-800">
                    Before a recovery agent is allowed to contact you, the bank must send you a formal notice (via letter, SMS, or email) informing you that your case has been assigned to a specific recovery agency.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If the person calling you claims to be from a bank but cannot confirm that a notice was sent, or if they are calling you at 10 PM, they are violating the fundamental laws of the land. In such cases, you should stop the conversation immediately and report the number.
              </p>
            </section>

            <section id="identify-genuine" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                How to Identify a Genuine Recovery Agent
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When an agent visits your home or calls you, there are specific pieces of information they are legally required to provide. A genuine agent will never hesitate to show these documents, as they are part of their official duty.
              </p>
              <div className="grid md:grid-cols-2 gap-6 my-10">
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Official ID Card</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A real agent must carry an identity card issued by the agency and authorized by the bank. This ID card should have their photo, name, employee code, and the name of the agency they represent.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Authorization Letter</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    This is a formal letter from the bank addressed to the recovery agency, authorizing them to collect dues for your specific loan account. Without this letter, they have no legal right to talk to you.
                  </p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Always ask the agent to share a photo of their ID card and authorization letter on WhatsApp or show it to you in person before you discuss any financial details. If they claim they "forgot it in the office" or that "the system is down," do not believe them. A professional agent is never allowed to be on the field without these documents.
              </p>
            </section>

            <section id="fake-agent-flags" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Red Flags: Spotting a Fake Agent Instantly
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Scammers are becoming increasingly clever, but they always leave clues. If you notice any of these red flags, stop all communication and block the number immediately.
              </p>
              <div className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">🚩</span>
                    <div>
                      <strong>Demanding Payment to Personal Accounts:</strong> This is the biggest red flag. A real agent will only ask you to pay via the bank's portal, app, or a link that leads to the bank's own website. Never transfer money to a personal UPI ID or a bank account in an individual's name.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">🚩</span>
                    <div>
                      <strong>Threatening Immediate Arrest:</strong> Arrests in civil loan default cases are rare and can only happen through a complex court process. If someone says "the police are outside your door" or "we have an arrest warrant," they are almost certainly lying.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">🚩</span>
                    <div>
                      <strong>Using Unofficial Mobile Numbers:</strong> Most bank communications happen through official SMS headers or verified WhatsApp accounts. If you get a call from a random 10 digit mobile number and the person is rude, be very suspicious.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">🚩</span>
                    <div>
                      <strong>Asking for OTP or Login Credentials:</strong> No bank or recovery agent will ever ask for your OTP, internet banking password, or card PIN. If they do, they are scammers trying to empty your account.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-600 font-bold">🚩</span>
                    <div>
                      <strong>Sending Fake Court Notices on WhatsApp:</strong> Scammers often use low quality, poorly drafted 'notices' with fake government seals. A real legal notice is always served as a physical copy via courier or registered post.
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section id="common-scams" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Common Recovery Scams in India
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                In recent years, several specific scams have emerged that target vulnerable borrowers. Being aware of these can save you from a major financial loss.
              </p>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">The "Discount" Scam</h3>
                  <p className="mb-4">
                    The scammer calls you and claims that your bank has offered a "one time settlement" at a massive discount, say 90% off. They ask you to pay a "processing fee" or the first installment into a "temporary collection account" to secure the deal. Once you pay, they disappear, and your actual bank has no record of any such offer.
                  </p>
                  <p className="text-sm text-gray-500 italic">Protect yourself: Always verify any settlement offer by visiting the bank branch or checking your official mobile app.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">The Fake Lawyer Prank</h3>
                  <p className="mb-4">
                    Someone calls claiming to be a "Senior Advocate" from the High Court. They use complex legal jargon and threaten you with "property attachment" if you don't pay immediately. In reality, lawyers do not call people to collect money; they send written legal notices.
                  </p>
                  <p className="text-sm text-gray-500 italic">Protect yourself: Ask for their Bar Council ID number and their law firm's address. Most scammers will hang up at this point.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1F5EFF] mb-4">The Loan App Extortion</h3>
                  <p className="mb-4">
                    Illegal Chinese-backed loan apps are famous for this. They access your contact list and threaten to send "morphed" photos to your family if you don't pay exorbitant interest. This is a criminal offense.
                  </p>
                  <p className="text-sm text-gray-500 italic">Protect yourself: Never give apps access to your contacts or gallery. If you are a victim, report it to the National Cybercrime portal immediately.</p>
                </div>
              </div>
            </section>

            <section id="what-to-do-when-called" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                What to Do When a Recovery Agent Calls You
              </h2>
              <p className="text-lg leading-relaxed mb-6 font-bold text-center p-4 bg-blue-100 rounded-lg">
                Follow this simple 4-step protocol to stay in control of the situation.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">1</div>
                  <h4 className="font-bold text-[#2E2E2E] mb-2">Stay Calm</h4>
                  <p className="text-xs text-gray-500">Do not panic or get aggressive. Keep your voice steady.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">2</div>
                  <h4 className="font-bold text-[#2E2E2E] mb-2">Record</h4>
                  <p className="text-xs text-gray-500">Turn on your call recorder. This is your best evidence.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">3</div>
                  <h4 className="font-bold text-[#2E2E2E] mb-2">Identify</h4>
                  <p className="text-xs text-gray-500">Ask for their name, employee ID, and agency details.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-[#DEDEDE] shadow-sm text-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-blue-600">4</div>
                  <h4 className="font-bold text-[#2E2E2E] mb-2">Verify</h4>
                  <p className="text-xs text-gray-500">Call the bank to confirm if the agent is authorized.</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                If the agent is rude or threatens you, state firmly: "I am recording this call. You are violating RBI guidelines on recovery behavior. I will be filing a complaint with the bank's grievance cell and the RBI Ombudsman." Typically, this statement alone is enough to make a rogue agent back off, as they know their agency could lose its bank contract if a formal complaint is investigated.
              </p>
            </section>

            <section id="digital-shaming" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Illegal Digital Shaming: The New Threat</h2>
              <p className="mb-6">
                The rise of instant loan apps has brought a dark practice known as "digital shaming." This involves agents creating WhatsApp groups with your contacts, including your parents, spouse, or boss, and posting details of your debt along with your photo. Some even threaten to use "morphed" or inappropriate photos to embarrass you.
              </p>
              <div className="bg-[#2E2E2E] text-white p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Crucial Fact: This is a Criminal Offense</h3>
                <p className="opacity-90 leading-relaxed mb-4">
                  Using your personal data to shame you is a violation of the Information Technology Act and the Indian Penal Code (IPC). The RBI has explicitly banned any form of social shaming. If this happens to you:
                </p>
                <ol className="space-y-3 list-decimal list-inside opacity-90">
                  <li>Take screenshots of the groups and the messages.</li>
                  <li>Do not delete the group; keep it as evidence.</li>
                  <li>Go to your local police station or reporting to cybercrime.gov.in.</li>
                  <li>Inform your contacts that your data has been compromised by a scam app.</li>
                </ol>
              </div>
              <p className="mb-6">
                Many victims feel so ashamed that they consider extreme steps. Please understand that the shame lies with the criminal who is shaming you, not with you for having a financial problem. The Indian police and the RBI are taking very strict action against these apps. You are a victim of a crime, not a criminal.
              </p>
            </section>

            <section id="legal-shield" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Your Legal Shield: Rights Every Borrower Has</h2>
              <p className="mb-6 text-lg">
                Even if you have defaulted on multiple payments, you have fundamental human and legal rights that are protected under Indian law. Understanding these rights is your best defense against harassment.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h3 className="text-xl font-bold mb-4">Right to Privacy</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The bank cannot disclose your debt status to your neighbors, employers, or friends. They can only communicate with you or your legal representative.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h3 className="text-xl font-bold mb-4">Right to Dignity</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    No recovery agent can use physical force or verbal abuse. You have the right to be treated with respect, regardless of your financial situation.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h3 className="text-xl font-bold mb-4">Right to Proper Notice</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A lender must provide you with a 60-day notice for secured loans and a reasonable notice period for unsecured loans before they can start the recovery process.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:border-[#1F5EFF] transition-colors">
                  <h3 className="text-xl font-bold mb-4">Right to Complain</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You have an absolute right to file a formal grievance against any unfair practice. The bank is legally mandated to address your complaint within a set timeframe.
                  </p>
                </div>
              </div>
            </section>

            <section id="verify-credentials" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to Verify Recovery Agent Credentials</h2>
              <p className="mb-6">
                If you are unsure whether the agent is genuine, follow this verification checklist before you engage in any further discussion.
              </p>
              <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 mb-8">
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">Verification Checklist</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <span className="font-bold">1. Check the SMS Header</span>
                    <span className="text-sm text-gray-500 italic">Look for official bank codes like AX-HDFCBK.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <span className="font-bold">2. Search the Agency Name</span>
                    <span className="text-sm text-gray-500 italic">Is it listed on the bank's official website?</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <span className="font-bold">3. Use Truecaller Carefully</span>
                    <span className="text-sm text-gray-500 italic">Check for "Scam" or "Harassment" tags from other users.</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-between">
                    <span className="font-bold">4. Confirm via Official App</span>
                    <span className="text-sm text-gray-500 italic">Check your loan status and any assigned agent details.</span>
                  </div>
                </div>
              </div>
              <p className="mb-6">
                Most major Indian banks like HDFC, ICICI, and SBI have a dedicated section on their website where they list the names of all authorized recovery agencies. If the person calling you is from an agency not on that list, hang up immediately. It is highly likely they are trying to scam you.
              </p>
            </section>

            <section id="complaint-guide" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How to File a Complaint Against Misconduct</h2>
              <p className="mb-6">
                If you have been a victim of harassment or a fake agent, don't just stay silent. Taking action helps you and protects other innocent borrowers.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <strong>Bank Grievance Redressal:</strong> Every bank has a Principal Nodal Officer (PNO). Send a detailed email with recordings and screenshots to their official address.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <strong>Chakshu Portal:</strong> Report the fraudulent mobile number on the Sanchar Saathi (Chakshu) portal. This helps the government block the scammer's SIM card and device worldwide.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <strong>Police Complaint:</strong> If there is a threat of physical violence or extortion, go to the nearest police station and file an FIR. If the harassment is online, use the national cybercrime portal (cybercrime.gov.in).
                  </div>
                </li>
              </ul>
            </section>

            <section id="rbi-ombudsman" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Role of the RBI Ombudsman</h2>
              <p className="mb-6 text-lg">
                The RBI Ombudsman is an independent person appointed by the Reserve Bank of India to resolve complaints against banks and NBFCs. This is a very powerful tool for the common citizen.
              </p>
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 mb-8">
                <h3 className="text-xl font-bold text-emerald-800 mb-4 italic">When can you go to the Ombudsman?</h3>
                <p className="mb-4 text-emerald-900/80">
                  You can approach the Ombudsman if you have filed a complaint with the bank and:
                </p>
                <ul className="list-disc list-inside space-y-2 text-emerald-900/80">
                  <li>The bank has not replied within 30 days.</li>
                  <li>The bank's reply is not satisfactory.</li>
                  <li>The bank has rejected your complaint without a valid reason.</li>
                </ul>
                <p className="mt-4 text-emerald-900/80 font-bold">
                  The process is free and can be done entirely online via the CMS (Complaint Management System) portal of the RBI.
                </p>
              </div>
            </section>

            <section id="protecting-family" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Protecting Your Family and Workplace</h2>
              <p className="mb-6">
                The biggest fear most borrowers have is that the agent will show up at their office or talk to their elderly parents. This fear is exactly what scammers use as leverage.
              </p>
              <p className="mb-6">
                <strong>At Home:</strong> Tell your family members not to engage with anyone claiming to be an agent. Ask them to simply say: "The borrower is not available. Please send all official communication to our home address via post." Do not let them into your house if they don't have an ID and authorization letter.
              </p>
              <p className="mb-6">
                <strong>At the Workplace:</strong> If an agent calls your office or visits your workplace, it is a serious breach of privacy. You can inform your HR department that you are being harassed by a predatory lending practice and that you are taking legal action. Most HR departments are supportive if you are honest with them about the situation before the agents cause a scene.
              </p>
            </section>

            <section id="loan-settlement-safety" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Loan Settlement: A Safer Path Than Avoiding Debt</h2>
              <p className="mb-6">
                Many people find themselves hounded by recovery agents because they have stopped communicating with the bank. While it feels easier to ignore the calls, it actually makes the situation worse. The bank assumes you have no intention of paying and hands over the file to aggressive agencies.
              </p>
              <p className="mb-6">
                The safer and more responsible path is <strong>Loan Settlement</strong>. This is a legal agreement where you pay the bank a reduced amount (often 30% to 50% of the total dues) and the bank closes the loan forever. This stops all recovery calls immediately and gives you a legal document (NOC) that proves you are no longer in debt.
              </p>
              <div className="bg-[#1F5EFF] text-white p-8 rounded-2xl mb-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4 italic">Why Settlement Stops Harassment:</h3>
                <ul className="space-y-3 opacity-90">
                  <li>✔ Once a settlement is agreed upon, the recovery mandate is withdrawn from the agency.</li>
                  <li>✔ You get a formal letter from the bank, which you can show to any agent who calls later by mistake.</li>
                  <li>✔ It transitions the situation from a "conflict" to a "resolution."</li>
                  <li>✔ It protects your family from future visits, as the account is no longer in the "default" list.</li>
                </ul>
              </div>
            </section>

            <section id="settleloans-role" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">How SettleLoans Protects You</h2>
              <p className="mb-6">
                Dealing with banks and recovery agents is exhausting. Our mission at SettleLoans is to take that burden off your shoulders. We act as your legal shield and professional negotiator.
              </p>
              <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-[#2E2E2E]">What We Do for Our Clients:</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">✔</div>
                    <p className="text-gray-700 font-medium">We stop harassment immediately by sending formal representation letters to the banks and agencies.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">✔</div>
                    <p className="text-gray-700 font-medium">We verify every agent call you receive to ensure they are genuine and following the law.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">✔</div>
                    <p className="text-gray-700 font-medium">We handle all the tough negotiations with the bank to get you the lowest possible settlement amount.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">✔</div>
                    <p className="text-gray-700 font-medium">We ensure that you get a valid NOC and that your settlement is legally recorded, preventing any future scams.</p>
                  </div>
                </div>
              </div>
              <p className="mt-8 font-bold text-[#1F5EFF] text-xl text-center">
                Contact us today for a free evaluation of your debt situation. You don't have to face this alone.
              </p>
            </section>

            <section id="case-studies" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories: Beating the Scammers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Rajiv S.",
                    loc: "Noida",
                    story: "I got a call from someone claiming to be a CBI officer about a loan I took 5 years ago. They told me to pay 25,000 via GPay. I called SettleLoans, they immediately told me it was a scam. My actual bank had already written off that loan."
                  },
                  {
                    name: "Pooja V.",
                    loc: "Pune",
                    story: "An agent was calling my brother and telling him I am a criminal. I used the script given by SettleLoans and told them I am recording the call for the Ombudsman. They stopped calling the same day."
                  },
                  {
                    name: "Vikram M.",
                    loc: "Chennai",
                    story: "A fake agency sent me a WhatsApp photo of a police station and said they were coming for me. SettleLoans checked the notice and it was full of spelling mistakes and a fake stamp. They helped me file a cyber complaint."
                  },
                  {
                    name: "Rahul T.",
                    loc: "Mumbai",
                    story: "The recovery agents were sitting outside my house. SettleLoans team spoke to them directly on the phone and asked for their IIBF certificate. They didn't have it and left within 10 minutes."
                  }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{testimonial.name}</h5>
                        <p className="text-xs text-gray-400">{testimonial.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{testimonial.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="future-of-recovery" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">The Future of Safety in Debt Recovery</h2>
              <p className="mb-6">
                The landscape of debt is changing. With AI and better digital tracking, the RBI is making it easier for citizens to report bad actors. The 'Chakshu' portal and the unified ombudsman scheme are huge steps toward a safer financial India.
              </p>
              <p className="mb-6">
                Our advice to every borrower is this: Use technology to your advantage. Keep digital records of everything. Use apps like SettleLoans to manage your negotiations professionally. Never let anyone use your fear against you. Knowledge is the most powerful tool you have.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Is it a crime to default on a loan in India?", a: "No. Defaulting on a loan is a civil matter, not a criminal one. However, if you have submitted fake documents or have a clear intent to defraud the bank (wilful default), it can become a criminal case. Regular default due to financial hardship is not a crime." },
                  { q: "Can a recovery agent come to my house without warning?", a: "Legally, the bank must provide you with a notice that they are assigning your case to a recovery agency. While agents can visit for a field investigation, they must always behave professionally and carry valid identification." },
                  { q: "What is the 1930 number for?", a: "1930 is the National Cybercrime Helpline. If you have been scammed into paying a fake recovery agent or are being shamed online with morphed photos, call this number immediately to report the crime." },
                  { q: "Can an agent take away my furniture or car?", a: "No. A recovery agent cannot force their way into your house or seize your assets. Only a court-appointed receiver or a bank officer following the SARFAESI Act (for secured loans) can seize property after a long legal process." },
                  { q: "Is there any law against recovery harassment?", a: "Yes. The RBI guidelines are the primary law. Additionally, harassment can be reported under Section 506 (Criminal Intimidation) and Section 499 (Defamation) of the Indian Penal Code." },
                  { q: "How do I block collection calls on my phone?", a: "You can use apps like Truecaller to identify and block spam numbers. You should also register your number on the National Do Not Call (NDNC) registry, though debt related calls from your own bank are still permitted." },
                  { q: "Can I record a recovery agent without their permission?", a: "Yes. In India, recording a conversation you are a part of for the purpose of evidence in a harassment case is generally permissible and highly recommended for your safety." },
                  { q: "Will my CIBIL score be affected by a fake agent?", a: "No. A fake agent has no connection to the credit bureaus. They are just trying to steal your money. However, your actual unpaid loan will affect your CIBIL score regardless of any fake agent." },
                  { q: "What is an authorization letter in recovery?", a: "It is a document signed by a bank official that identifies the recovery agency and authorizes them to collect dues for a specific period. It should always mention the bank's contact details for verification." },
                  { q: "Can SettleLoans stop court cases?", a: "We help you settle the debt, which is the fastest way to get the bank to withdraw any pending court cases. We provide the legal guidance needed to handle the situation professionally." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180 text-[#1F5EFF]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional debt consultancy. All information provided is for educational purposes. We recommend consulting with a legal professional for specific personal cases. We do not provide financial aid directly but assist in legal debt resolution.</p>
            </div>

            {/* Mobile CTA */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2 italic">Had Enough of the Calls?</h3>
                  <p className="opacity-90 text-sm">Join thousands of Indians who have reclaimed their peace with SettleLoans.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Speak to an Expert for FREE
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: CTA & Related */}
          <aside className="hidden lg:block w-1/5 shrink-0">
             <div className="sticky top-24 space-y-8">
               {/* Fixed CTA Card */}
               <div className="bg-[#2E2E2E] rounded-3xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                 <h3 className="text-2xl font-black text-white mb-6 leading-tight relative z-10">
                   Get Your <br /> <span className="text-[#1F5EFF]">Credit Profile</span> Analyzed
                 </h3>
                 <p className="text-gray-400 text-sm mb-8 leading-relaxed relative z-10">
                   Stop the harassment and start your journey towards a debt free life with our expert legal team.
                 </p>
                 <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(31,94,255,0.3)]">
                   Schedule Call
                 </Link>
               </div>

               {/* Related Pages */}
               <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
                 <h4 className="text-lg font-black text-[#2E2E2E] mb-6 flex items-center gap-2">
                   <span className="w-1.5 h-6 bg-[#1F5EFF] rounded-full"></span>
                   Related Guides
                 </h4>
                 <div className="space-y-4">
                   {[
                     { title: "RBI Personal Loan Rules", href: "/rbi-rules-for-recovery-agents" },
                     { title: "How to Stop Harassment", href: "/bank-recovery-harassment-complaint" },
                     { title: "Personal Loan Settlement", href: "/what-is-personal-loan-settlement" },
                     { title: "Cheque Bounce Defense", href: "/cheque-bounce" },
                     { title: "Legal Notice Guide", href: "/legal-notice-for-loan-recovery" }
                   ].map((link, i) => (
                     <Link key={i} href={link.href} className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                       <span className="text-sm font-bold text-gray-700 group-hover:text-[#1F5EFF] transition-colors">{link.title}</span>
                       <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                     </Link>
                   ))}
                 </div>
               </div>
             </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
