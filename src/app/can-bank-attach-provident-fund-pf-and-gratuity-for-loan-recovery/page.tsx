import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Can Banks Attach Provident Fund (EPF) and Gratuity for Loan Recovery?",
  description: "Is the bank threatening to seize your EPF or Gratuity funds for loan default? Learn about Section 60 CPC and EPF Act protections against attachment.",
  alternates: {
    canonical: "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery",
  },
};

export default function EPFAndGratuityProtectionPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#webpage",
        "url": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery",
        "name": "Can Banks Attach Provident Fund (EPF) and Gratuity for Loan Recovery?",
        "description": "A reassuring guide detailing the statutory protections around retirement funds in India. Explains Section 60 of the Civil Procedure Code and the EPF Act.",
        "breadcrumb": { "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#breadcrumb",
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
            "name": "EPF & Gratuity Attachment Protection",
            "item": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#article",
        "headline": "Can Banks Attach Provident Fund (EPF), PF, and Gratuity for Loan Recovery?",
        "description": "Explains Section 60 of the Civil Procedure Code and the EPF Act, which strictly mandate that a borrower's Provident Fund (PF) and Gratuity cannot be attached or seized by any court, bank, or DRT.",
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
        "datePublished": "2024-05-10",
        "dateModified": "2024-05-10",
        "mainEntityOfPage": { "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#webpage" }
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#product",
        "name": "Legal Protection for Retirement Funds (EPF & Gratuity)",
        "brand": {
          "@type": "Brand",
          "name": "SettleLoans"
        },
        "image": "https://settleloans.in/logo/logo.svg",
        "description": "Expert legal services to unfreeze bank accounts and stop illegal attachment of EPF and Gratuity by banks and recovery agents.",
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
            "author": { "@type": "Person", "name": "Manoj V." },
            "datePublished": "2024-02-15",
            "reviewBody": "The bank froze my account immediately after my PF was credited. SettleLoans lawyers used Section 60 CPC to unfreeze my retirement funds within days.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya S." },
            "datePublished": "2024-03-22",
            "reviewBody": "Recovery agents threatened to seize my father's gratuity. This team completely shut them down citing the EPF Act. We are finally at peace.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul G." },
            "datePublished": "2024-04-05",
            "reviewBody": "I didn't know banks can't touch PF money. The legal notice drafted by SettleLoans forced the bank to reverse the auto-debit from my PF settlement.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sunita K." },
            "datePublished": "2024-05-01",
            "reviewBody": "Excellent legal support. The DRT was attempting to attach my pension and gratuity, but the lawyers proved it was entirely illegal.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/can-bank-attach-provident-fund-pf-and-gratuity-for-loan-recovery#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a bank attach my EPF or PF money for a personal loan default?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. Under Section 10 of the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, and Section 60 of the Civil Procedure Code, your PF cannot be attached by any decree or order of any court for debt recovery." }
          },
          {
            "@type": "Question",
            "name": "Is my Gratuity protected from loan recovery agents?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Gratuity is protected under Section 60(1)(g) of the Civil Procedure Code (CPC) and cannot be seized or attached by lenders." }
          },
          {
            "@type": "Question",
            "name": "What if the bank freezes my salary account where my PF was credited?",
            "acceptedAnswer": { "@type": "Answer", "text": "If a bank freezes an account containing PF or gratuity funds, it is an illegal attachment. You must immediately send a legal notice citing Section 60 CPC and demand unfreezing of the protected amount." }
          },
          {
            "@type": "Question",
            "name": "Can the DRT order attachment of my retirement funds?",
            "acceptedAnswer": { "@type": "Answer", "text": "No. The Debt Recovery Tribunal (DRT) is bound by the Civil Procedure Code. They cannot issue an order to attach funds that are expressly exempt from attachment under Section 60 CPC." }
          },
          {
            "@type": "Question",
            "name": "Can a bank auto-debit my loan EMI from my PF settlement?",
            "acceptedAnswer": { "@type": "Answer", "text": "If you gave a mandate (NACH/ECS) on the account where PF was credited, the bank might auto-debit. However, they cannot forcefully lien or attach the specific PF amount. You should change the mandate or legally challenge unauthorized deductions." }
          },
          {
            "@type": "Question",
            "name": "Are there any exceptions where PF can be attached?",
            "acceptedAnswer": { "@type": "Answer", "text": "There are virtually no exceptions for commercial loan recoveries (personal loans, credit cards, etc.). PF is strictly protected to ensure social security post-retirement." }
          },
          {
            "@type": "Question",
            "name": "What should I do if a recovery agent threatens my pension?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pensions are also protected under Section 60 CPC. Threatening to seize them is illegal harassment. You should record the threat and file a complaint with the RBI Ombudsman or local police." }
          },
          {
            "@type": "Question",
            "name": "Does Section 60 CPC apply to NBFCs as well as banks?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, the exemption from attachment under Section 60 CPC applies universally, regardless of whether the lender is a public sector bank, private bank, or NBFC." }
          },
          {
            "@type": "Question",
            "name": "How do I prove the money in my account is from EPF?",
            "acceptedAnswer": { "@type": "Answer", "text": "You can prove this by providing the bank statement showing the specific NEFT/RTGS transaction from the EPFO or your employer, clearly marking the source of funds." }
          },
          {
            "@type": "Question",
            "name": "Do I need a lawyer if the bank illegally attaches my PF?",
            "acceptedAnswer": { "@type": "Answer", "text": "While you can complain to the bank manager, sending a formal legal notice drafted by an expert lawyer is usually the fastest way to compel the bank's legal department to release the funds." }
          }
        ]
      }
    ]
  };

  const tocItems = [
    { id: "introduction", title: "Are Your Retirement Funds Safe?" },
    { id: "section-60-cpc", title: "The Law: Section 60 CPC" },
    { id: "epf-act-protection", title: "EPF Act Protections" },
    { id: "drt-and-courts", title: "Can DRT Attach Retirement Funds?" },
    { id: "bank-account-freeze", title: "What If the Bank Freezes Your Account?" },
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
        <section className="w-full bg-[#2E2E2E] pt-16 pb-8 md:pt-24 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Borrower Protection Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Can Banks Attach <span className="text-[#1F5EFF]">Provident Fund (EPF)</span> & Gratuity for Loan Recovery?
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              A reassuring legal guide on why your retirement savings are absolutely untouchable. Understand the statutory protections that stop banks from seizing your PF and Gratuity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Your Retirement Funds Now
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
                <li className="font-bold text-[#2E2E2E]">EPF & Gratuity Attachment</li>
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

            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Are Your Retirement Funds Safe?
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  When facing severe financial distress and loan defaults, borrowers often live in constant fear that the bank will wipe out their life's savings. Recovery agents routinely use scare tactics, claiming they will secure court orders to freeze and seize your Provident Fund (EPF), Gratuity, and Pension.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Let us provide you with immediate reassurance: <strong>They cannot touch your retirement funds.</strong>
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  The Indian legal system places a massive protective shield over a citizen's social security and retirement benefits. Whether it's a personal loan, credit card default, or a business loan, the law strictly prohibits lenders, courts, and debt recovery tribunals from attaching your PF and Gratuity. Understanding these laws is your ultimate defense against illegal recovery threats.
                </p>
              </div>
            </section>

            <section id="section-60-cpc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Law: Section 60 of the Civil Procedure Code
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                The Civil Procedure Code (CPC), 1908, dictates how civil courts execute decrees and recover debts. Section 60 specifically lists the properties that are liable to attachment, but more importantly, it explicitly lists properties that are <strong>exempt from attachment</strong>.
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Exemptions Under Section 60 CPC</h4>
                <p className="text-blue-900 text-lg leading-relaxed mb-4">
                  The law provides absolute immunity to specific categories of funds to ensure a basic dignified livelihood for the debtor and their family:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Section 60(1)(g):</strong> Stipends and gratuities allowed to pensioners of the Government, or payable out of any service family pension fund.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Section 60(1)(k):</strong> All compulsory deposits and other sums in or derived from any fund to which the Provident Funds Act applies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">No civil court in the country has the jurisdiction to override these statutory exemptions.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="epf-act-protection" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Protections Under the EPF Act
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Beyond the CPC, the Employees' Provident Funds and Miscellaneous Provisions Act, 1952, offers an ironclad guarantee against the attachment of PF money.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-gray-800 text-lg leading-relaxed">
                  <strong>Section 10 of the EPF Act: Protection against attachment.</strong><br/>
                  The amount standing to the credit of any member in the Fund shall not in any way be capable of being assigned or charged and shall not be liable to attachment under any decree or order of any court in respect of any debt or liability incurred by the member.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Absolute Immunity</h4>
                  <p className="text-gray-700 leading-relaxed">
                    The protection is absolute. Even if a lender obtains a favorable judgment or arbitration award against you, they cannot request the court to seize your EPF balance to satisfy the debt.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Post-Retirement Shield</h4>
                  <p className="text-gray-700 leading-relaxed">
                    This protection remains active even after the amount is disbursed, provided you can trace and prove that the funds sitting in your account originated strictly from your EPF or Gratuity settlement.
                  </p>
                </div>
              </div>
            </section>

            <section id="drt-and-courts" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Can DRT or Courts Attach It?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Recovery agents often use heavy legal jargon, threatening to bring "DRT attachment orders." Here is how the process actually works and why their threats are baseless:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">DRT is Bound by CPC</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      The Debt Recovery Tribunal (DRT) functions within the framework of civil laws. The Presiding Officer of the DRT is strictly bound by the exemptions listed under Section 60 of the CPC. They legally cannot issue a recovery certificate against your PF or Gratuity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Null and Void Orders</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Even if, hypothetically, a lower court makes an error and orders the attachment of your PF due to the bank's misrepresentation, that order is legally null and void. High Courts and the Supreme Court have routinely struck down such erroneous orders.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-2">Actionable Harassment</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If an agent threatens to seize your PF, they are attempting extortion based on a legal impossibility. You can file a formal complaint with the RBI and the police against the bank for criminal intimidation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="bank-account-freeze" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What to do if the Bank Freezes Your Account?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                While banks cannot legally attach PF, they sometimes employ a dirty trick: they freeze your entire savings account as soon as the PF or Gratuity amount is credited, exercising a "banker's lien."
              </p>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-3">Banker's Lien vs. PF Immunity</h4>
                <p className="text-red-900 leading-relaxed">
                  A bank has a general right of lien (right to hold funds) against defaults. However, courts have repeatedly clarified that the Banker's Lien does NOT extend to funds that are statutorily exempt from attachment, like EPF and Gratuity. Freezing these specific funds is an illegal act by the bank.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Step 1: Gather Proof</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Download your bank statement and EPFO settlement receipt. You must definitively prove that the frozen amount is derived directly from your retirement settlement and not other sources.
                  </p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h4 className="font-black text-[#1F5EFF] text-lg mb-3">Step 2: Legal Notice</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Have a lawyer send an urgent legal notice to the bank's nodal officer and branch manager, citing Section 60 CPC and demanding the immediate unfreezing of the protected amount.
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
                      MV
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Manoj V.</h4>
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
                    "The bank froze my account immediately after my PF was credited. SettleLoans lawyers used Section 60 CPC to unfreeze my retirement funds within days."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Frozen Amount: ₹12,50,000</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Unfrozen</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      PS
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Priya S.</h4>
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
                    "Recovery agents threatened to seize my father's gratuity. This team completely shut them down citing the EPF Act. We are finally at peace."
                  </p>
                  <div className="flex gap-2 text-xs font-bold">
                    <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full border border-red-100">Threat: Gratuity Attachment</span>
                    <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full border border-green-100">Status: Protected</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {jsonLd["@graph"].find((item: any) => item["@type"] === "FAQPage")?.mainEntity.map((faq: any, index: number) => (
                  <div key={index} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <h3 className="text-3xl font-black mb-6 relative z-10">Stop the Illegal Harassment Today</h3>
              <p className="text-xl opacity-90 mb-8 relative z-10 max-w-2xl mx-auto">
                Is the bank threatening to seize your EPF or Gratuity funds to settle an old loan? This is a complete violation of the law. Let our legal team protect your retirement savings.
              </p>
              <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform shadow-xl relative z-10">
                Talk to a DRT Lawyer Now
              </Link>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The legal information provided is for educational purposes and should not be construed as formal legal advice. Always consult with a practicing advocate regarding specific facts of your loan case. Section 60 CPC applicability depends on individual circumstances.
              </p>
            </div>

          </article>

          {/* Right Column: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h4 className="text-xl font-black mb-4 relative z-10">Account Frozen?</h4>
                <p className="text-sm opacity-90 mb-6 relative z-10">
                  If the bank has frozen your PF or Gratuity, immediate legal action is required to unfreeze it.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] w-full py-3 rounded-lg font-bold text-sm hover:bg-blue-600 transition-colors relative z-10">
                  Get Legal Help
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
                      Dealing with Bank Notices
                    </Link>
                  </li>
                  <li>
                    <Link href="/difference-between-civil-and-criminal-liability-in-loans" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Civil vs Criminal Liability
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-to-do-when-recovery-agents-harass-you" className="text-sm text-gray-600 hover:text-[#1F5EFF] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Stop Recovery Agent Harassment
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
