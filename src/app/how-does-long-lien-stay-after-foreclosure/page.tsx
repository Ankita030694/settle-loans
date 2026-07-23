import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "How Long Does a Lien Stay on Property After Foreclosure or Closure?",
  description: "Closed your loan but the bank's 'Lien' is still marked on your property or car? Discover the exact process to remove a bank lien after loan closure or foreclosure.",
  alternates: {
    canonical: "https://settleloans.in/how-does-long-lien-stay-after-foreclosure",
  },
};

export default function LienRemovalPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#webpage",
        "url": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure",
        "name": "How Long Does a Lien Stay on Property After Foreclosure or Closure?",
        "description": "Learn the exact process for RTO lien removal and how to remove a bank lien after loan closure or foreclosure on your property.",
        "breadcrumb": { "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#breadcrumb",
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
            "name": "Lien Removal Guide",
            "item": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#article",
        "headline": "How Long Does a Lien Stay After Foreclosure? The Removal Guide",
        "description": "Closed your loan but the bank's 'Lien' is still marked on your property or car? Here is the exact process to remove it.",
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
        "datePublished": "2024-07-23",
        "dateModified": "2024-07-23",
        "mainEntityOfPage": { "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#product",
        "name": "Lien Removal Legal Services",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to help you remove a bank lien after loan closure or foreclosure on your property or car.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "645",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas S." },
            "datePublished": "2024-01-12",
            "reviewBody": "I paid off my car loan but the RTO still showed the bank's lien. SettleLoans sent a legal notice and helped me with RTO lien removal in just two weeks.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ramesh G." },
            "datePublished": "2024-02-05",
            "reviewBody": "The bank refused to remove the lien mark on property after foreclosure settlement. With legal help, the bank was forced to issue the NOC and clear the title.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Preeti M." },
            "datePublished": "2024-03-21",
            "reviewBody": "Excellent service. My house had a lien from a loan closed 3 years ago. The bank was unresponsive until SettleLoans stepped in to clear the lien.",
            "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karan V." },
            "datePublished": "2024-04-10",
            "reviewBody": "If you are struggling to remove a bank lien after loan closure, this is the right place. Fast and reliable legal action.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Ananya R." },
            "datePublished": "2024-05-18",
            "reviewBody": "They helped me remove the hypothecation from my car registration easily. RTO lien removal was a nightmare before they helped.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/how-does-long-lien-stay-after-foreclosure#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does a lien stay on a property after foreclosure or loan closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "A lien should be removed immediately upon the closure or settlement of a loan. However, practically, it remains on your property or car until the bank issues an NOC (No Objection Certificate) and it is officially removed from the registry or RTO records." }
          },
          {
            "@type": "Question",
            "name": "How do I remove a bank lien after loan closure?",
            "acceptedAnswer": { "@type": "Answer", "text": "To remove a bank lien after loan closure, you must obtain a No Dues Certificate (NDC) or NOC from the bank, submit it to the sub-registrar (for property) or RTO (for vehicles), and apply for the removal of the lien." }
          },
          {
            "@type": "Question",
            "name": "What is the process for RTO lien removal for my car?",
            "acceptedAnswer": { "@type": "Answer", "text": "For RTO lien removal, you need Form 35 signed by your bank along with the NOC. Submit these to your local RTO along with the original RC, insurance, and emission certificate to cancel the hypothecation." }
          },
          {
            "@type": "Question",
            "name": "Why is the lien mark on property after foreclosure still visible?",
            "acceptedAnswer": { "@type": "Answer", "text": "A lien mark on property after foreclosure often stays visible because the bank failed to notify the registrar, or the borrower did not file the bank's NOC with the local sub-registrar office to officially remove the charge." }
          },
          {
            "@type": "Question",
            "name": "Can a bank refuse to remove a lien after I settle my loan?",
            "acceptedAnswer": { "@type": "Answer", "text": "No, once you have paid the agreed settlement amount and the loan is closed, the bank cannot legally refuse to remove the lien. If they delay, you can send a legal notice." }
          },
          {
            "@type": "Question",
            "name": "Is there a penalty if the bank delays the NOC and lien removal?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, as per RBI rules, banks must release all property documents and clear the charge within 30 days of loan closure. A delay can attract a penalty of ₹5,000 per day payable to the borrower." }
          },
          {
            "@type": "Question",
            "name": "Does a property lien affect my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "The lien itself does not directly affect your CIBIL score, but the status of the associated loan (Default, Settled, or Closed) strongly impacts your credit profile." }
          },
          {
            "@type": "Question",
            "name": "Can I sell a property that still has a lien mark?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. You cannot legally sell, transfer, or re-mortgage a property if there is an active lien mark on it. The title must be cleared first." }
          },
          {
            "@type": "Question",
            "name": "What if the bank lost my property documents while holding the lien?",
            "acceptedAnswer": { "@type": "Answer", "text": "If the bank loses your documents, they must bear all costs to recreate them, assist in obtaining certified copies, and pay compensation for the delay." }
          },
          {
            "@type": "Question",
            "name": "How can legal help expedite the lien removal process?",
            "acceptedAnswer": { "@type": "Answer", "text": "A lawyer can send a strong legal notice citing RBI guidelines, escalate the matter to the nodal officer, and file complaints with the RBI Ombudsman, forcing the bank to act quickly." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "the-lien-removal-nightmare", title: "The Lien Removal Nightmare" },
    { id: "property-lien-removal", title: "Property Lien Removal Process" },
    { id: "rto-lien-removal", title: "RTO Lien Removal for Vehicles" },
    { id: "bank-delay-tactics", title: "Common Bank Delay Tactics" },
    { id: "actionable-steps", title: "Steps to Remove Bank Lien" },
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
              Property & Asset Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              How Long Does a Lien Stay After Foreclosure? <span className="text-[#1F5EFF]">The Removal Guide</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Closed your loan but the bank's 'Lien' is still marked on your property or car? Here is the exact process to remove it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Send Legal Notice for Lien Removal
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
                <li className="font-bold text-[#2E2E2E]">Lien Removal Guide</li>
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

            <section id="the-lien-removal-nightmare" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Lien Removal Nightmare
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  You’ve done the hard part—you successfully negotiated a foreclosure or settlement and paid off your loan in full. You received your No Dues Certificate (NDC), breathed a sigh of relief, and assumed your property or vehicle was finally yours, free and clear.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  But weeks or even months later, you discover a nasty surprise: the bank's lien is still active. Whether it is a <strong>lien mark on property after foreclosure</strong> or a hypothecation on your car’s RC book, this "invisible chain" means you still don’t have full legal control over your asset.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  A lingering lien prevents you from selling your property, transferring ownership, or securing a new loan. Banks are notoriously slow at releasing these charges, often requiring legal pressure to <strong>remove a bank lien after loan closure</strong>.
                </p>
              </div>
            </section>

            <section id="property-lien-removal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Process to Clear a Lien Mark on Property
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you take a home loan or Loan Against Property (LAP), the bank registers a "charge" or lien with the local sub-registrar's office and CERSAI (Central Registry of Securitisation Asset Reconstruction and Security Interest of India). Paying the loan is only step one; clearing the registry is step two.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Obtain the NOC</h4>
                  <p className="text-gray-700 leading-relaxed">
                    First, you must collect the original No Objection Certificate (NOC) and your original Title Deeds from the bank. The NOC explicitly states the bank has no further financial interest in the property.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Update CERSAI</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The bank is legally obligated to update the CERSAI portal to remove the registered charge. Ensure you ask for proof of this CERSAI satisfaction receipt.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Registrar Office Visit:</strong> Even after the bank issues the NOC, you (or your lawyer) must often take the NOC and a specific release deed to the local sub-registrar office to officially strike off the lien mark on the property's encumbrance certificate (EC).
                </p>
              </div>
            </section>

            <section id="rto-lien-removal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                RTO Lien Removal for Vehicles
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                For car and two-wheeler loans, the bank registers a "hypothecation" with the Regional Transport Office (RTO). Even if your loan account shows zero balance, you cannot sell the car until the RTO removes this hypothecation from your Registration Certificate (RC).
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">The RTO Hypothecation Cancellation Process</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  To execute an <strong>RTO lien removal</strong>, you must follow these specific steps:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Collect Form 35:</strong> Obtain two copies of Form 35, duly signed and stamped by the bank, along with the NOC.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Submit to RTO:</strong> Submit Form 35, the NOC, original RC, valid insurance, and PUC certificate to your local RTO.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Pay the Fees:</strong> Pay the required hypothecation cancellation fees. A new RC will be issued without the bank's name.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="bank-delay-tactics" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Common Bank Delay Tactics
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Unfortunately, banks often drag their feet when it comes to releasing a lien. They have their money, so your administrative closure becomes their lowest priority.
              </p>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Beware of the "Cross-Collateralization" Excuse</h4>
                <p className="text-red-900 leading-relaxed">
                  A common tactic is the bank refusing to remove a lien on your house or car because you have a separate, unpaid credit card or personal loan with them. They claim a "Right of General Lien." Unless your property was explicitly pledged against that specific credit card, this retention is entirely illegal and violates RBI rules.
                </p>
              </div>
            </section>

            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Steps to Force Bank Lien Removal
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                If the bank is delaying your NOC, failing to update CERSAI, or withholding Form 35, you must take strong, documented legal action to <strong>remove bank lien after loan closure</strong>.
              </p>

              <div className="space-y-12 mt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Issue a Formal Legal Notice</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      A verbal complaint won't work. Have an advocate send a strict legal notice to the bank's nodal officer, citing RBI directives which mandate the release of all documents and charges within 30 days of closure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Demand the RBI Penalty</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Remind the bank that under RBI guidelines, a delay in releasing property documents and clearing the lien beyond 30 days makes them liable to pay a penalty of ₹5,000 for every single day of delay.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Escalate to RBI Ombudsman</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the bank ignores the legal notice, immediately escalate the case to the RBI Banking Ombudsman with proof of the settlement and the legal notice. This usually forces compliance within days.
                    </p>
                  </div>
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
                    "I paid off my car loan but the RTO still showed the bank's lien. SettleLoans sent a legal notice and helped me with RTO lien removal in just two weeks."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Asset: Car</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: RTO Hypothecation Cancelled</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RG
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Ramesh G.</h4>
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
                    "The bank refused to remove the lien mark on property after foreclosure settlement. With legal help, the bank was forced to issue the NOC and clear the title in 10 days."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Asset: Property</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Result: Clear Title Received</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find((item: any) => item["@type"] === "FAQPage")?.mainEntity?.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h4>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Don't Let the Bank Control Your Property</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Closed your loan but the bank's 'Lien' is still marked on your property or car? Let our legal experts force the bank to issue your NOC and clear the lien immediately.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Send Legal Notice for Lien Removal
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
                <h4 className="text-xl font-black mb-4 relative z-10">Lien Still Active?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  Delaying lien removal restricts your rights to sell or transfer your property. Force the bank to act now.
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
                    <Link href="/bank-delaying-original-property-documents-after-home-loan-settlement-rbi-rules" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI 30-Day Rule for Documents
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-file-complaint-against-recovery-agents" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing Ombudsman Complaints
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
