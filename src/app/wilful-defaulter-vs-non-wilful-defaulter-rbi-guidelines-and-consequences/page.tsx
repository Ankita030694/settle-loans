import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Wilful Defaulter vs Non-Wilful Defaulter: RBI Guidelines",
  description: "Learn who is a wilful defaulter as per RBI, the difference between intentional and genuine default, consequences of the tag, and how to remove it.",
  alternates: {
    canonical: "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences",
  },
};

export default function WilfulDefaulterDefensePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#webpage",
        "url": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences",
        "name": "Wilful Defaulter vs. Non-Wilful Defaulter: RBI Guidelines and Consequences",
        "description": "Understand the specific RBI criteria that upgrades a standard NPA to a Wilful Defaulter, the consequences, and how genuine business failures can defend themselves.",
        "breadcrumb": { "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#breadcrumb",
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
            "name": "Wilful Defaulter Guide",
            "item": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#article",
        "headline": "Wilful Defaulter vs. Non-Wilful Defaulter: RBI Guidelines and Consequences",
        "description": "Breaks down the specific RBI criteria that upgrades a standard NPA to a Wilful Defaulter.",
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
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20",
        "mainEntityOfPage": { "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#product",
        "name": "Wilful Defaulter Tag Removal & Defense Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal assistance to challenge and remove illegal wilful defaulter tags.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "850",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit K." },
            "datePublished": "2023-11-14",
            "reviewBody": "My business failed due to COVID, but the bank labeled me a wilful defaulter. SettleLoans lawyers proved it was a genuine loss.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ravi S." },
            "datePublished": "2024-01-20",
            "reviewBody": "The wilful defaulter tag consequences were ruining my career. I couldn't be a director anymore. These lawyers helped remove the tag.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sunita M." },
            "datePublished": "2024-02-15",
            "reviewBody": "They explained the exact difference between intentional and genuine default and fought my case flawlessly.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas P." },
            "datePublished": "2024-03-02",
            "reviewBody": "I didn't know how to remove wilful defaulter tag until I consulted them. Highly recommended for complex banking disputes.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/wilful-defaulter-vs-non-wilful-defaulter-rbi-guidelines-and-consequences#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who is a wilful defaulter according to RBI?",
            "acceptedAnswer": { "@type": "Answer", "text": "A wilful defaulter is someone who has the capacity to pay but refuses, or who has diverted or siphoned off loan funds for purposes other than what they were sanctioned for." }
          },
          {
            "@type": "Question",
            "name": "What is the difference between intentional and genuine default?",
            "acceptedAnswer": { "@type": "Answer", "text": "An intentional (wilful) default involves deliberate non-payment despite having funds, or fraud. A genuine default happens due to uncontrollable business losses or economic downturns without any fund diversion." }
          },
          {
            "@type": "Question",
            "name": "What are the wilful defaulter tag consequences?",
            "acceptedAnswer": { "@type": "Answer", "text": "Consequences include a total ban on new bank loans, inability to float new ventures, removal from company directorships, and potential criminal prosecution." }
          },
          {
            "@type": "Question",
            "name": "How to remove wilful defaulter tag?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can challenge the tag by proving genuine business loss to the Review Committee of the bank or filing a writ petition in the High Court highlighting procedural lapses." }
          },
          {
            "@type": "Question",
            "name": "Can a genuine business failure be declared a wilful default?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, RBI explicitly states that genuine business failures should not be classified as wilful defaults. Banks often misclassify them to pressure borrowers." }
          },
          {
            "@type": "Question",
            "name": "Is there a threshold amount for a wilful defaulter tag?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, typically the wilful defaulter guidelines apply to outstanding dues of ₹25 Lakhs and above." }
          },
          {
            "@type": "Question",
            "name": "Can criminal action be taken against a wilful defaulter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, banks can initiate criminal proceedings, including filing FIRs for cheating and fraud, against declared wilful defaulters." }
          },
          {
            "@type": "Question",
            "name": "Do banks have to give notice before declaring someone a wilful defaulter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the bank must issue a show-cause notice and give the borrower a fair chance to present their defense before a committee." }
          },
          {
            "@type": "Question",
            "name": "Can the guarantor also be declared a wilful defaulter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, if the guarantor refuses to pay despite having the means when the principal debtor defaults, they can also be tagged." }
          },
          {
            "@type": "Question",
            "name": "Can I travel abroad if I am a wilful defaulter?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks can request authorities to issue a Look Out Circular (LOC), which can restrict your ability to travel internationally." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "understanding-the-tag", title: "Understanding the Tag" },
    { id: "who-is-wilful-defaulter", title: "Who is a Wilful Defaulter?" },
    { id: "intentional-vs-genuine", title: "Intentional vs. Genuine Default" },
    { id: "consequences", title: "Consequences of the Tag" },
    { id: "how-to-remove-tag", title: "How to Remove the Tag" },
    { id: "rbi-guidelines", title: "Strict RBI Guidelines" },
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
              Legal Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Wilful Defaulter vs. Non-Wilful Defaulter: <span className="text-[#1F5EFF]">RBI Guidelines</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Understand the specific RBI criteria that upgrades a standard NPA to a Wilful Defaulter. Learn the catastrophic consequences and how to legally remove an illegal tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Consult an Expert Banking Lawyer
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
                <li className="font-bold text-[#2E2E2E]">Wilful Defaulter Guidelines</li>
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

            <section id="understanding-the-tag" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Devastating Reality of the Tag
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Defaulting on a bank loan is a stressful event, but being classified as a "Wilful Defaulter" elevates a standard civil dispute into a severe financial and legal crisis. Banks often use this classification aggressively to force settlements.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  When your loan account turns into a Non-Performing Asset (NPA), it simply means payments have stopped. However, an NPA alone doesn't make you a criminal. It is the misclassification of a genuine business failure as an intentional default that leads to catastrophic consequences.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Knowing exactly <strong>who is a wilful defaulter RBI</strong> identifies, and understanding your legal rights, is the only way to protect your business, career, and freedom from unjust banking practices.
                </p>
              </div>
            </section>

            <section id="who-is-wilful-defaulter" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Who is a Wilful Defaulter According to RBI?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI Master Circular lays out strict criteria for tagging a borrower. It is not automatic upon default. A borrower is classified as a wilful defaulter only if they meet specific conditions:
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Key Criteria for Wilful Default</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Capacity to Pay:</strong> The borrower has defaulted on payment obligations despite having the capacity to honor them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Diversion of Funds:</strong> The loan funds were not utilized for the specific purpose they were availed for, and were diverted to other ventures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Siphoning of Funds:</strong> Funds were moved out of the company without creating any corresponding assets, indicating fraudulent intent.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Disposal of Collateral:</strong> The borrower disposed of or removed the movable fixed assets or immovable property given as security without the bank's knowledge.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="intentional-vs-genuine" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Difference Between Intentional and Genuine Default
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most critical defense against this tag lies in establishing the <strong>difference between intentional and genuine default</strong>. The law recognizes that businesses can fail for reasons beyond an entrepreneur's control.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Intentional (Wilful) Default</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This involves malafide intent. The borrower intentionally stops paying the bank while secretly holding funds, or they fraudulently divert the loan money to personal accounts, real estate, or other unrelated businesses.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Genuine Business Failure</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This happens when a business collapses due to market shifts, economic recessions (like COVID-19), loss of major clients, or raw material shortages. All funds were used for the business, but the revenue simply isn't there to repay the loan.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The RBI Mandate:</strong> The RBI explicitly states that the penal provisions should only apply to intentional defaults. Banks cannot unilaterally label a genuine business failure as a wilful default just to increase recovery pressure.
                </p>
              </div>
            </section>

            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Wilful Defaulter Tag Consequences
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank successfully classifies you, the <strong>wilful defaulter tag consequences</strong> are catastrophic and immediate. It essentially blocks you out of the formal financial system.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Total Financial Boycott</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      No additional facilities will be granted by any bank or financial institution. You are barred from securing any new loans or credit lines to revive your business or start a new one.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Corporate Disqualification</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Promoters and directors of companies identified as wilful defaulters are legally barred from being on the board of any other company. You will be forced to resign from your directorships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Criminal Prosecution</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Banks have the full authority to initiate criminal proceedings against wilful defaulters, including filing FIRs for cheating, breach of trust, and fraud, leading to potential imprisonment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-to-remove-tag" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Remove Wilful Defaulter Tag
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Many banks flagrantly violate procedural norms when declaring a wilful default. Knowing <strong>how to remove wilful defaulter tag</strong> requires challenging these procedural lapses and presenting evidence of genuine loss.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Steps to Challenge the Tag</h4>
                <ol className="space-y-4 list-decimal list-inside text-blue-900 text-lg leading-relaxed">
                  <li><strong>Demand the Show-Cause Notice:</strong> Banks cannot declare you a wilful defaulter secretly. They must serve a notice outlining the exact reasons and evidence for the classification.</li>
                  <li><strong>Submit a Detailed Representation:</strong> You must reply with a comprehensive defense, including audit reports and financial statements, proving the default was a genuine business failure without fund diversion.</li>
                  <li><strong>Demand a Personal Hearing:</strong> You have the right to present your case before the bank's Identification Committee. Expert lawyers should represent you to counter the bank's allegations technically.</li>
                  <li><strong>Writ Petition in High Court:</strong> If the bank's Review Committee acts arbitrarily and confirms the tag without considering your evidence, your lawyer can file a writ petition in the High Court to quash the illegal order.</li>
                </ol>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Warning: Do Not Ignore the Notice</h4>
                <p className="text-red-900 leading-relaxed">
                  If you receive a show-cause notice for wilful default and fail to respond within the stipulated time, the bank's committee will pass an ex-parte order against you, cementing the catastrophic consequences permanently.
                </p>
              </div>
            </section>

            <section id="rbi-guidelines" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Strict RBI Guidelines on Procedure
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The RBI ensures that the power to classify someone as a wilful defaulter is not misused. The procedure must be strictly followed:
              </p>
              <div className="bg-white p-8 border border-[#DEDEDE] rounded-2xl shadow-sm mb-8">
                <h4 className="text-xl font-bold mb-4 text-[#2E2E2E] underline">The Two-Tier Committee System</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The RBI mandates a two-tier structure to prevent biased decisions. An <strong>Identification Committee</strong> first issues the show-cause notice and reviews your representation. If they classify you as a wilful defaulter, this decision must be confirmed by a completely separate <strong>Review Committee</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If the bank bypassed this two-tier system, denied you a personal hearing, or failed to provide the documents relied upon for their decision, the High Court will immediately strike down the wilful defaulter tag as illegal and unconstitutional.
                </p>
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
                      AK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Amit K.</h4>
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
                    "My business failed due to COVID, but the bank labeled me a wilful defaulter. SettleLoans lawyers proved it was a genuine loss in the High Court."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹3.5 Cr</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Tag Removed</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ravi S.</h4>
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
                    "The wilful defaulter tag consequences were ruining my career. I couldn't be a director anymore. These lawyers highlighted procedural lapses and removed the tag."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Loan Amount: ₹1.8 Cr</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Quashed</span>
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
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Challenge the Illegal Wilful Defaulter Tag</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Has the bank unjustly labeled you a 'Wilful Defaulter' despite a genuine business loss? Challenge this illegal tag with our specialized banking lawyers before it destroys your career.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Get Legal Help Now
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your case. Results depend on individual case facts.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Received a Show-Cause Notice?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Do not ignore the bank's committee hearing. Immediate legal representation is required.
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
                    <Link href="/how-to-reply-to-section-138-notice" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Respond to Bank Notices
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-civil-and-criminal-liability-in-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Civil vs Criminal Liability
                    </Link>
                  </li>
                  <li>
                    <Link href="/sarfaesi-act-defense" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Defense
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
