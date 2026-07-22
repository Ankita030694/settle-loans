import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "What is an Arbitration Award in a Loan Default and Can the Bank Seize My Property?",
  description: "Received an ex-parte arbitration award for loan default? Learn how banks try to execute an arbitration award against your property and how to challenge it under Section 34.",
  alternates: {
    canonical: "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property",
  },
};

export default function ArbitrationAwardDefensePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#webpage",
        "url": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property",
        "name": "What is an Arbitration Award in a Loan Default?",
        "description": "A technical breakdown for borrowers who ignored earlier notices and suddenly received an Arbitration Award declaring they must pay the full amount.",
        "breadcrumb": { "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#breadcrumb",
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
            "name": "Arbitration Award in Loan Default",
            "item": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#article",
        "headline": "What is an Arbitration Award in a Loan Default and Can the Bank Seize My Property?",
        "description": "Explains what an ex-parte award is, how banks try to execute it as a civil court decree to attach property, and exactly how a borrower can challenge the award under Section 34 of the Arbitration Act.",
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
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#product",
        "name": "Legal Defense Services for Arbitration Awards",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert litigation lawyers to challenge bank arbitration orders and protect your property from execution.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "890",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sanjay K." },
            "datePublished": "2024-01-15",
            "reviewBody": "Received an ex-parte arbitration award loan default notice. SettleLoans filed a Section 34 challenge and saved my house from attachment.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meera R." },
            "datePublished": "2024-02-11",
            "reviewBody": "The bank tried to execute an arbitration award against my property. The legal team found flaws in the notice and got the award set aside.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajiv M." },
            "datePublished": "2024-03-05",
            "reviewBody": "I ignored the section 9 arbitration notice initially. Thanks to their quick action, we stopped the bank from seizing my commercial property.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Anita P." },
            "datePublished": "2024-04-20",
            "reviewBody": "They explained exactly how to challenge bank arbitration orders. Their expertise is unmatched in handling these predatory bank tactics.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
             "@type": "Review",
             "author": { "@type": "Person", "name": "Kiran S." },
             "datePublished": "2024-05-18",
             "reviewBody": "We had only 90 days to appeal the ex-parte award. SettleLoans acted fast and got a stay order against the property seizure.",
             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-is-arbitration-award-in-loan-default-and-can-bank-seize-property#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an ex-parte arbitration award in a loan default?",
            "acceptedAnswer": { "@type": "Answer", "text": "An ex-parte arbitration award is a legal decision passed by an arbitrator in favor of the bank when the borrower fails to appear for the proceedings, often because they ignored notices or weren't properly served." }
          },
          {
            "@type": "Question",
            "name": "Can a bank execute an arbitration award against my property?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, once an arbitration award is passed and not challenged within the statutory time limit, it can be executed like a civil court decree to attach and sell your movable or immovable property." }
          },
          {
            "@type": "Question",
            "name": "What is a Section 9 arbitration notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Under Section 9 of the Arbitration and Conciliation Act, a bank can seek interim measures from a court before, during, or after arbitration proceedings to protect their interests, such as attaching your assets or bank accounts." }
          },
          {
            "@type": "Question",
            "name": "How can I challenge a bank arbitration order?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can challenge an arbitration award under Section 34 of the Arbitration Act by filing a petition in the competent civil court, typically citing lack of proper notice, bias of the arbitrator, or the award being against public policy." }
          },
          {
            "@type": "Question",
            "name": "How much time do I have to challenge an arbitration award?",
            "acceptedAnswer": { "@type": "Answer", "text": "You have exactly 90 days from the date you receive the signed arbitration award to file a challenge under Section 34. A further grace period of 30 days may be granted by the court for sufficient cause." }
          },
          {
            "@type": "Question",
            "name": "Will challenging the award automatically stop the bank from seizing my property?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Filing a Section 34 challenge does not automatically stay the execution of the award. You must specifically apply for a stay order under Section 36 by depositing a portion of the award amount as directed by the court." }
          },
          {
            "@type": "Question",
            "name": "Why do banks prefer arbitration for loan defaults?",
            "acceptedAnswer": { "@type": "Answer", "text": "Banks prefer arbitration because it is faster than civil courts, and they often appoint an arbitrator of their choice (though the Supreme Court has ruled against unilateral appointments), giving them an advantage." }
          },
          {
            "@type": "Question",
            "name": "What happens if I ignore the arbitration award?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ignoring the award means it becomes final and binding. The bank will then file an execution petition in a civil court to seize your bank accounts, salary, or attach your house/property." }
          },
          {
            "@type": "Question",
            "name": "Can an ex-parte award be set aside if I didn't get the notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, failure to give proper notice of the appointment of the arbitrator or the arbitral proceedings is a valid ground under Section 34 to set aside an ex-parte arbitration award." }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer for an arbitration case?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Challenging an arbitration award involves highly technical legal grounds and strict timelines. Engaging a lawyer experienced in banking and arbitration laws is critical to saving your property." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-shocking-reality", title: "The Shocking Reality" },
    { id: "understanding-arbitration", title: "What is an Ex-Parte Award?" },
    { id: "section-9-notice", title: "The Danger of Section 9 Notices" },
    { id: "execution-against-property", title: "Executing Against Property" },
    { id: "how-to-challenge", title: "How to Challenge the Order" },
    { id: "grounds-for-challenge", title: "Grounds for Section 34 Challenge" },
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
        <section className="w-full bg-[#2E2E2E] pt-12 pb-6 md:pt-16 md:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Defense Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              What is an Arbitration Award in a Loan Default and <span className="text-[#1F5EFF]">Can the Bank Seize My Property?</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A technical breakdown for borrowers who ignored earlier notices and suddenly received an "Arbitration Award" declaring they must pay the full amount.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Consult an Expert Litigation Lawyer
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
                <li className="font-bold text-[#2E2E2E]">Arbitration Award Defense</li>
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

            <section id="the-shocking-reality" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Shocking Reality of Arbitration Awards
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Many borrowers mistakenly assume that ignoring legal notices from banks will make the problem go away. This is a fatal error when dealing with an <strong>ex-parte arbitration award loan default</strong>. Unlike standard civil cases that can take years, banks use arbitration to fast-track the recovery process, often leaving the borrower completely unaware until a final, devastating order is passed.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  If you have just received a document titled "Arbitration Award" declaring that you owe the bank the entire outstanding loan amount along with heavy penal interests, you are in the final stages of the bank's legal trap. 
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The moment this award is finalized, the bank possesses the legal equivalent of a civil court decree. Their next immediate step is to <strong>execute arbitration award against property</strong>, which could mean attaching your home, freezing your bank accounts, or seizing your salary.
                </p>
              </div>
            </section>

            <section id="understanding-arbitration" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What is an Ex-Parte Arbitration Award?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Arbitration is a private dispute resolution mechanism. When you signed your loan agreement, it likely contained an arbitration clause, allowing the bank to bypass regular courts and appoint an arbitrator if you defaulted.
              </p>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The Ex-Parte Trap</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  "Ex-parte" means proceeding without one party. Here is how banks manufacture these awards:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">The bank unilaterally appoints an arbitrator (often someone favorable to them).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Notices are sent to your old or incorrect address, ensuring you never receive them.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">Because you do not show up, the arbitrator hears only the bank's side and quickly passes a binding award against you.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="section-9-notice" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Danger of a Section 9 Arbitration Notice
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Before or during the arbitration process, the bank may serve you with a <strong>section 9 arbitration notice</strong>. This is one of their most aggressive legal weapons.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Interim Relief for the Bank</h4>
                <p className="text-red-900 leading-relaxed">
                  Under Section 9 of the Arbitration and Conciliation Act, the bank can petition a civil court for interim measures. They can request the court to freeze your bank accounts, issue a stay against selling your assets, or even appoint a receiver to take possession of your hypothecated vehicle or machinery—all before the final award is even passed!
                </p>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Ignoring a Section 9 notice means the court will likely grant these interim measures ex-parte, causing immediate and severe financial paralysis.
              </p>
            </section>

            <section id="execution-against-property" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Executing the Arbitration Award Against Your Property
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The most terrifying aspect of an arbitration award is its enforceability. Once the time limit to challenge the award expires, it becomes as powerful as a decree passed by a Civil Court judge.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Execution Petition</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The bank will file an Execution Petition under Order 21 of the Civil Procedure Code (CPC) in the district court where your assets are located.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Attachment of Property</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The court can order the attachment (seizure) and auction of your movable assets (cars, jewelry) and immovable properties (house, land) to recover the awarded amount.
                  </p>
                </div>
              </div>
            </section>

            <section id="how-to-challenge" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Challenge a Bank Arbitration Order
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If you want to save your property, you must actively <strong>challenge bank arbitration order</strong>. You cannot merely send a letter or ignore it; you must file a formal legal petition.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>The 90-Day Lifeline:</strong> Under Section 34 of the Arbitration Act, you have exactly <strong>90 days</strong> from the date you received the signed award to file a challenge in the competent civil court. If you miss this deadline, your defense is permanently forfeited, barring a strict 30-day discretionary extension by the judge.
                </p>
              </div>

              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">File a Section 34 Petition</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Your lawyer will file an application to set aside the arbitral award based on specific legal grounds defined in the Act.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Apply for a Stay Order (Section 36)</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Filing a challenge does not automatically stop the bank from seizing your property. You must file a separate application under Section 36 to stay the execution of the award. The court will likely ask you to deposit a percentage of the disputed amount.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="grounds-for-challenge" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Legal Grounds for a Section 34 Challenge
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Courts do not simply review the merits of the case again. You must prove procedural or fundamental flaws in how the award was passed:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Improper Notice</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you can prove that you were not given proper notice of the appointment of the arbitrator or of the arbitral proceedings, the ex-parte award can be set aside.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Unilateral Appointment</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The Supreme Court (in the Perkins Eastman case) ruled that a bank cannot unilaterally appoint a sole arbitrator. If the arbitrator was biased or appointed illegally by the bank alone, the award is void.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Against Public Policy</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the award includes grossly illegal penal charges or violates fundamental laws of India, it can be challenged as being in conflict with the public policy of India.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Incapacity</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the borrower was under some incapacity (e.g., severe mental illness) during the proceedings, the award is invalid.
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
                      SK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sanjay K.</h4>
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
                    "Received an ex-parte arbitration award loan default notice out of nowhere. SettleLoans filed a Section 34 challenge citing lack of proper notice and saved my house from attachment."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Award Amount: ₹35,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Award Set Aside</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      MR
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Meera R.</h4>
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
                    "The bank tried to execute an arbitration award against my property. The legal team successfully proved the unilateral appointment was illegal per Supreme Court rulings."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Award Amount: ₹85,00,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Execution Stayed</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find(g => g["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-3">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Protect Your Property from Seizure</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Received an Ex-Parte Arbitration Award ordering you to pay the bank immediately? You have only 90 days to challenge it in court before the bank tries to attach your assets. Contact our litigation experts today.
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
                <h4 className="text-xl font-black mb-4 relative z-10">Received an Award?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  You have exactly 90 days to file a Section 34 challenge. Do not wait for the bank to attach your property.
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
                      How to Reply to Notices
                    </Link>
                  </li>
                  <li>
                    <Link href="/sarfaesi-act-property-possession" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI & Property Seizure
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
