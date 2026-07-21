import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Absconding from Banks: The Legal Consequences of Changing Your Number and Address",
  description: "Learn why changing your SIM card to avoid loan recovery agents can turn a civil default into a criminal fraud case (Section 420 IPC) and how skip tracing works in India.",
  alternates: {
    canonical: "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents"
  }
};

const tocItems = [
  { id: 'introduction', title: 'The Risky Tactic of Changing Your Number' },
  { id: 'psychological-toll', title: 'The Psychological Toll of Living in Hiding' },
  { id: 'skip-tracing', title: 'How Recovery Agents Find You: Skip Tracing' },
  { id: 'impact-on-co-borrowers', title: 'What Happens to Guarantors and Co-Borrowers?' },
  { id: 'legal-consequences', title: 'Civil Default vs. Criminal Case: Section 420 IPC' },
  { id: 'police-involvement', title: 'Can the Police Actually Arrest You for a Loan?' },
  { id: 'statute-of-limitations', title: 'Is There a Time Limit for Loan Recovery in India?' },
  { id: 'what-to-do', title: 'What to Do Instead of Absconding' },
  { id: 'success-stories', title: 'Success Stories: Settling Loans Legally' },
  { id: 'faq', title: 'Frequently Asked Questions' }
];

export default function LegalConsequencesChangingNumberPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#webpage",
        "url": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents",
        "name": "Absconding from Banks: The Legal Consequences of Changing Your Number and Address",
        "description": "Learn why changing your SIM card to avoid loan recovery agents can turn a civil default into a criminal fraud case (Section 420 IPC) and how skip tracing works in India.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.settleloan.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Absconding from Banks: Legal Consequences",
            "item": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#article",
        "headline": "Absconding from Banks: The Legal Consequences of Changing Your Number and Address",
        "description": "Running away from bank loan default by changing numbers? Understand skip tracing recovery agents India use, and the absconding from personal loan punishment.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoan",
          "url": "https://www.settleloan.in"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoan",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.settleloan.in/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#webpage"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I change my SIM card to avoid loan recovery agents?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Changing your SIM card is a common tactic, but recovery agencies use digital skip tracing to track you down via your PAN card, PF data, and social media. It only delays the inevitable and escalates the issue."
            }
          },
          {
            "@type": "Question",
            "name": "Can I be arrested for running away from bank loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While a loan default is a civil matter, deliberately absconding or hiding to avoid repayment can lead banks to file a criminal complaint for cheating and fraud under Section 420 of the IPC, which can result in an arrest warrant."
            }
          },
          {
            "@type": "Question",
            "name": "How do skip tracing recovery agents in India find absconding borrowers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They use advanced tracking methods including CIBIL checks for new addresses, EPFO portal tracking, social media activity, updated bank accounts, and mobile network triangulation to find your current location."
            }
          },
          {
            "@type": "Question",
            "name": "Is a personal loan default a civil or criminal case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Initially, a personal loan default is a civil issue. However, if the bank suspects malicious intent, such as absconding or submitting fake documents, they can convert it into a criminal case."
            }
          },
          {
            "@type": "Question",
            "name": "What is the punishment for absconding from a personal loan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If charged under Section 420 IPC for cheating, the punishment can include imprisonment for up to 7 years and a fine. Your passport might also be flagged or impounded."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks track my new phone number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, if your new number is linked to your Aadhaar or PAN card, or if you update it in any financial institution, CIBIL will get updated, and recovery agents will receive the new contact details."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do instead of changing my number?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Instead of absconding, you should communicate with your bank. You can request loan restructuring, a moratorium, or negotiate a one-time loan settlement with the help of legal experts."
            }
          },
          {
            "@type": "Question",
            "name": "Will the bank send agents to my new address?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, once they locate your new address through skip tracing, they will send field recovery agents to your new residence or workplace to recover the outstanding dues."
            }
          },
          {
            "@type": "Question",
            "name": "How long will recovery agents try to find me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Banks do not easily write off loans. Recovery agents are incentivized to find you, and they can track you for years. Legal proceedings like Lok Adalat summons or court warrants have no expiry date."
            }
          },
          {
            "@type": "Question",
            "name": "How can I legally stop recovery agent harassment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can file a complaint with the RBI or local police if agents violate fair practices. Hiring a loan settlement company can also help route all communications through their legal team, stopping direct harassment."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://www.settleloan.in/legal-consequences-of-changing-phone-number-and-address-to-avoid-loan-recovery-agents/#product",
        "name": "Loan Settlement & Legal Protection Service",
        "description": "Expert legal assistance to stop recovery agent harassment, negotiate settlements, and prevent civil cases from turning into criminal charges.",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "845"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul S." },
            "datePublished": "2024-03-12",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I changed my SIM out of fear, but agents still tracked me down. SettleLoan stepped in, stopped the harassment, and helped me settle my loan legally."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram M." },
            "datePublished": "2024-02-20",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "The bank was threatening a Section 420 case because I couldn't pay. The legal team at SettleLoan protected me and negotiated a 45% settlement."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya D." },
            "datePublished": "2024-01-15",
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "I thought absconding was my only option. Glad I reached out to SettleLoan instead. They handled the recovery agents professionally."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karan V." },
            "datePublished": "2023-12-05",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Saved me from immense mental stress. The agents were tracking my new job. SettleLoan helped me close the loan peacefully."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Guidance
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              The Legal Consequences of <span className="text-[#1F5EFF]">Absconding</span> from Banks
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Thinking of changing your number to avoid recovery agents? Discover how skip tracing works and why running away can turn a civil default into a criminal fraud case.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Legal Protection Today
            </Link>
          </div>
          
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-[#1F5EFF]/5 blur-[100px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-[#1F5EFF]/5 blur-[100px]"></div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Legal Consequences of Changing Number</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1440px]">
          
          {/* Left Column (Table of Contents) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column (Main Content) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Risky Tactic of Changing Your Number</h2>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  When the phone starts ringing incessantly with demands for repayment, panic often sets in. A very common reaction among borrowers struggling with debt is <strong className="text-[#2E2E2E]">changing their SIM card to avoid loan recovery agents</strong>. It feels like a quick escape hatch from the mounting pressure and harassment.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  However, throwing away your SIM card or relocating without informing the bank is a critical mistake. It does not erase your debt. Instead, <strong className="text-[#2E2E2E]">running away from a bank loan default</strong> triggers advanced tracing mechanisms and severely escalates your legal liabilities, putting you at risk of criminal charges.
                </p>
                <p className="text-lg leading-relaxed mb-0 text-[#2E2E2E]/80">
                  Many individuals believe that if they simply vanish for a few years, the bank will eventually write off the loan and forget about them. Unfortunately, the Indian banking system, backed by strict RBI guidelines and advanced technological frameworks, does not operate this way. Avoiding the issue only compounds the interest, adds penal charges, and morphs a manageable financial hurdle into a terrifying legal labyrinth.
                </p>
              </div>
            </section>

            {/* Section 2: Psychological Toll */}
            <section id="psychological-toll" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Psychological Toll of Living in Hiding</h2>
              <p className="text-lg leading-relaxed mb-6">
                Before delving into the technicalities of skip tracing and criminal law, it is essential to address the sheer mental exhaustion of living as a fugitive from your own finances. When you change your address and phone number to escape debt, you are forcing yourself into a state of perpetual paranoia.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">A Life Looked Over Your Shoulder</h3>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80 mb-6">
                  Every knock on the door, every unfamiliar number on your new phone, and every letter in the mail becomes a source of extreme anxiety. The fear of being "found out" in front of new colleagues or neighbors can lead to severe depression and relationship strain. 
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80 mb-0">
                  Furthermore, this anxiety often spills over to your family members. Because you have cut off direct contact, recovery agents may resort to calling your emergency contacts, your spouse, or your parents, passing the harassment onto the people you care about most. This creates a deeply toxic environment that is far worse than confronting the bank to find a settlement solution.
                </p>
              </div>
            </section>

            {/* Section 3: Skip Tracing */}
            <section id="skip-tracing" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How Recovery Agents Find You: Skip Tracing Explained</h2>
              <p className="text-lg leading-relaxed mb-6">
                You might think a new phone number makes you invisible, but modern recovery agencies employ specialized investigators known as skip tracers. <strong className="text-[#2E2E2E]">Skip tracing recovery agents in India</strong> use a sophisticated web of digital data to track down absconding borrowers.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Gone are the days when a bank only relied on the address you provided in your application form. Today, the entire financial ecosystem is interlinked. A change in one node alerts the rest of the network. Skip tracers are legally permitted to use public and financial databases to locate defaulting borrowers who have gone off the grid.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">CIBIL & Credit Bureaus</h4>
                  <p className="text-base text-[#747474]">Any time you open a new bank account, apply for a fresh loan, or get a credit card, your new contact details are updated on your CIBIL report, instantly alerting the old lenders to your new location.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">EPFO & Salary Data</h4>
                  <p className="text-base text-[#747474]">If you switch jobs, your new employer will update your PF account via your UAN. Recovery agencies track EPFO portals to find your current employer and new work address without needing your phone number.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Social Media Footprint</h4>
                  <p className="text-base text-[#747474]">Skip tracers actively monitor LinkedIn, Facebook, and Instagram. A simple job update, a tagged location in a photo, or a check-in at a local restaurant can reveal exactly where you are residing.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">PAN & Aadhaar Trails</h4>
                  <p className="text-base text-[#747474]">Your PAN and Aadhaar are central to all your financial activities, including renting a new apartment, buying a vehicle, or getting a new post-paid connection. Updating KYC anywhere creates a permanent digital footprint.</p>
                </div>
              </div>
            </section>

            {/* Section 4: Impact on Co-borrowers */}
            <section id="impact-on-co-borrowers" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What Happens to Guarantors and Co-Borrowers?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A crucial detail that absconding borrowers often overlook is the collateral damage inflicted upon guarantors and co-borrowers. When you take out a substantial personal loan or business loan, the bank frequently requires a guarantor.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">The Burden Shifts Completely</h4>
                <p className="text-lg text-red-900 leading-relaxed mb-0">
                  If you change your number and run away, the bank will immediately shift its crosshairs to your guarantor. Legally, a guarantor is equally liable for the outstanding debt. The bank can initiate asset attachment, file civil suits, and send recovery agents directly to the guarantor's house. 
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                By absconding, you are not erasing the debt; you are merely transferring the harassment and legal consequences to a friend, colleague, or family member who trusted you. This can result in ruined relationships and even secondary lawsuits filed by the guarantor against you once you are eventually located.
              </p>
            </section>

            {/* Section 5: Legal Consequences */}
            <section id="legal-consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Civil Default vs. Criminal Case: Section 420 IPC</h2>
              <p className="text-lg leading-relaxed mb-6">
                The most dangerous consequence of changing your number and absconding is the shift in legal perspective. In India, a standard failure to repay a loan is a civil offense. You cannot be jailed merely for being unable to pay due to job loss or medical emergencies.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Breaking Point: Intent to Defraud</h4>
                <p className="text-lg text-[#2E2E2E] leading-relaxed mb-0">
                  When you deliberately cut off communication, change your address without notice, and evade the bank, you demonstrate "malicious intent" (mens rea). The bank can argue that you took the loan with the pre-planned intention of never repaying it, effectively turning a civil matter into criminal fraud.
                </p>
              </div>

              <div className="space-y-12 my-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Filing of an FIR</h3>
                    <p className="text-[#747474] text-lg leading-relaxed">
                      Banks can file a First Information Report (FIR) with the local police, escalating a simple financial default into an active police investigation based on suspected fraud.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Charges under Section 420 IPC</h3>
                    <p className="text-[#747474] text-lg leading-relaxed">
                      You could be formally charged with "cheating and dishonestly inducing delivery of property" under Section 420 of the Indian Penal Code. This shifts the jurisdiction to criminal courts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Severe Absconding Punishment</h3>
                    <p className="text-[#747474] text-lg leading-relaxed">
                      A conviction under Section 420 IPC carries severe penalties, including imprisonment for up to 7 years and substantial fines. Furthermore, your passport might be impounded, preventing any overseas travel.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Police Involvement */}
            <section id="police-involvement" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can the Police Actually Arrest You for a Loan?</h2>
              <p className="text-lg leading-relaxed mb-6">
                A common threat used by aggressive recovery agents is that the police will arrest you immediately if you don't pay. It is critical to separate fact from intimidation tactics. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Under normal circumstances, where you are simply unable to pay but maintain communication, the police have absolutely no jurisdiction to arrest you. A loan agreement is a civil contract. However, the scenario flips entirely if you abscond. If the bank successfully files an FIR under Section 420 IPC (Cheating) because you vanished, the police are then legally obligated to investigate.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                If the investigation concludes that you intentionally fled to defraud the bank, the police can secure a non-bailable arrest warrant from a magistrate. Additionally, if the bank filed a cheque bounce case (Section 138 of the Negotiable Instruments Act) and you ignored the court summons because you moved without updating your address, the court will issue a non-bailable warrant (NBW) for your arrest. In this case, the police will execute the warrant, locate you via skip tracing, and bring you before the judge.
              </p>
            </section>

            {/* Section 7: Statute of Limitations */}
            <section id="statute-of-limitations" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Is There a Time Limit for Loan Recovery in India?</h2>
              <p className="text-lg leading-relaxed mb-6">
                Many borrowers run away hoping that after a few years, the loan will simply "expire." This is a massive misconception. While the Limitation Act sets a 3-year limit for filing a civil recovery suit from the date of default, banks have numerous legal tools to refresh this limitation period indefinitely.
              </p>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#2E2E2E] mb-4">How Banks Keep Debt Alive</h3>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80 mb-6">
                  Every time you make a partial payment, acknowledge the debt via email, or even reply to a legal notice, the 3-year clock resets. Furthermore, if you completely vanish, the bank can obtain a decree ex-parte (in your absence). An execution of a decree has a limitation period of 12 years.
                </p>
                <p className="text-lg leading-relaxed text-[#2E2E2E]/80 mb-0">
                  Therefore, waiting it out is never a viable strategy. You could resurface five years later to buy a home, only to find your bank accounts frozen, your CIBIL score obliterated, and an active court decree waiting to attach your new assets.
                </p>
              </div>
            </section>

            {/* Section 8: What to Do */}
            <section id="what-to-do" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">What to Do Instead of Absconding</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you are overwhelmed by debt and harassment, hiding is the worst strategy. There are completely legal and effective ways to handle recovery agents and settle your debt with dignity.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Legal Solutions to Debt Stress</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Communicate Proactively:</strong> Send a formal letter to your bank explaining your financial hardship and requesting temporary relief or a moratorium.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Demand Fair Practices:</strong> Recovery agents cannot harass you. If they use abusive language or call at odd hours, you have the right to file an RBI complaint and alert the local police.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Negotiate a Settlement:</strong> You can legally negotiate with the bank to settle the loan for a reduced amount (often 40-50% less) through a one-time settlement (OTS) if you demonstrate genuine hardship.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0 mr-3"></div>
                    <span className="text-lg text-[#2E2E2E]"><strong>Hire Legal Experts:</strong> Engage a loan settlement company to handle the bank and recovery agents on your behalf, shielding you from direct harassment while they negotiate terms.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 9: Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories: Settling Loans Legally</h2>
              <p className="text-lg leading-relaxed mb-8">
                Borrowers who chose to seek legal help instead of absconding found permanent relief. Here is how professional intervention helped them navigate out of deep financial trouble.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors duration-300">
                      R
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Rahul S.</h4>
                      <div className="flex text-[#FFD700]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#747474] italic mb-6">"I changed my SIM out of fear, but agents still tracked me down via my PF. SettleLoan stepped in, stopped the harassment legally, and helped me close the loan."</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹8.5L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹3.8L</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors duration-300">
                      V
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2E2E2E]">Vikram M.</h4>
                      <div className="flex text-[#FFD700]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#747474] italic mb-6">"The bank was threatening a Section 420 fraud case because I vanished for 4 months. SettleLoan took over communication and negotiated a fair settlement."</p>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Loan: ₹12L</span>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">Settled: ₹5.5L</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: FAQs */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can I be arrested for running away from bank loan default?", a: "While default itself is a civil matter, running away can lead the bank to file a criminal complaint for cheating and fraud under Section 420 IPC, which can result in an arrest." },
                  { q: "How do skip tracing agents find absconding borrowers?", a: "They use CIBIL reports, EPFO portals, social media tracking, bank account KYC updates, and mobile triangulation to locate you." },
                  { q: "Will the bank send agents to my new address?", a: "Yes, once located through skip tracing, the bank will dispatch field agents to your new residence or workplace." },
                  { q: "Is a personal loan default a civil or criminal case?", a: "It starts as a civil case. But evasion, fake documents, or absconding can force the bank to pursue criminal charges for fraud." },
                  { q: "What should I do instead of changing my number?", a: "Communicate with the bank or hire a legal debt settlement agency to handle negotiations and stop harassment legally." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-[#747474] mb-0">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6">Stop Running, Start Settling</h3>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Thinking of throwing away your SIM card to escape recovery agents? Don't turn a civil issue into a criminal case. Contact us to legally stop the harassment today.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg text-lg">
                  Get Expert Legal Help
                </Link>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational purposes only and does not constitute formal legal advice. Please consult with our legal experts regarding your specific situation.
              </p>
            </div>

          </article>

          {/* Right Column (Sidebar Context Cards) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Facing Harassment?</h4>
                  <p className="text-white/80 text-sm mb-6">
                    Don't let recovery agents bully you into hiding. Our legal team can stop them today.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors">
                    Get Help Now
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Related Resources
                </h4>
                <ul className="space-y-4">
                  {[
                    { text: "RBI Guidelines on Recovery", link: "/rbi-guidelines-for-loan-recovery-agents-in-india" },
                    { text: "How Loan Settlement Works", link: "/what-is-personal-loan-settlement" },
                    { text: "Dealing with Fake Notices", link: "/legal-notice-for-personal-loan-default" }
                  ].map((item, i) => (
                    <li key={i}>
                      <Link href={item.link} className="group flex items-center text-sm text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {item.text}
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
