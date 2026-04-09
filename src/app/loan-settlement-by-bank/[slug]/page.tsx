import Link from "next/link";
import { notFound } from "next/navigation";
import banksData from "../banks.json";
import TableOfContents from "@/components/TableOfContents";
import { Metadata } from "next";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function generateStaticParams() {
  return banksData.map((bank) => ({
    slug: slugify(bank.company),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;
  const bank = banksData.find((b) => slugify(b.company) === slug);
  
  if (!bank) return { title: "Bank Not Found" };

  return {
    title: `Loan Settlement for ${bank.company} | Settle Credit Card & Loans - SettleLoans`,
    description: `Expert assistance for loan settlement for ${bank.company}. Settle your credit card and personal loans for 40-70% less. Professional debt relief for ${bank.company} customers.`,
    alternates: {
        canonical: `https://settleloans.in/loan-settlement-by-bank/${slug}`,
    },
  };
}

export default async function BankSettlementPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const bank = banksData.find((b) => slugify(b.company) === slug);

  if (!bank) {
    notFound();
  }

  const bankName = bank.company;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://settleloans.in/loan-settlement-by-bank/${slug}#webpage`,
        "url": `https://settleloans.in/loan-settlement-by-bank/${slug}`,
        "name": `Loan Settlement for ${bankName} | Legal Debt Relief Guide`,
        "description": `Comprehensive guide on loan settlement for ${bankName}. Learn how to negotiate and settle your debts.`,
        "breadcrumb": { "@id": `https://settleloans.in/loan-settlement-by-bank/${slug}#breadcrumb` },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://settleloans.in/loan-settlement-by-bank/${slug}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Loan Settlement by Bank", "item": "https://settleloans.in/loan-settlement-by-bank" },
          { "@type": "ListItem", "position": 3, "name": `${bankName} Settlement`, "item": `https://settleloans.in/loan-settlement-by-bank/${slug}` }
        ]
      },
      {
        "@type": "Product",
        "@id": `https://settleloans.in/loan-settlement-by-bank/${slug}#service`,
        "name": `Loan Settlement for ${bankName} Service`,
        "description": `Professional debt negotiation for ${bankName} personal loans and credit cards.`,
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rajesh Kumar" },
            "datePublished": "2024-01-10",
            "reviewBody": `SettleLoans helped me with loan settlement for ${bankName}. I received a 65% waiver and the calls stopped in just 10 days!`,
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit Shah" },
            "datePublished": "2024-02-15",
            "reviewBody": `Excellent service for loan settlement for ${bankName}. Very professional team.`,
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": `https://settleloans.in/loan-settlement-by-bank/${slug}#article`,
        "headline": `The Ultimate Guide to Loan Settlement for ${bankName} in 2026`,
        "author": { "@type": "Organization", "name": "SettleLoans Legal Team" },
        "datePublished": "2024-03-01",
        "dateModified": "2024-03-01",
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": { "@type": "ImageObject", "url": "https://settleloans.in/logo.png" }
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#004c94] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Official ${bankName} Debt Resolution
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Loan Settlement for <br className="hidden md:block"/> {bankName}
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              Struggling with {bankName} debt? We help you navigate loan settlement for {bankName} to settle your dues for up to 70% less while stopping all recovery harassment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Get Expert Advice
              </Link>
              <Link href="#process" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
                Process Details
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
                <li><Link href="/loan-settlement-by-bank" className="hover:text-[#1F5EFF] transition-colors">Bank List</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Loan Settlement for {bankName}</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents 
              items={[
                { id: "intro", title: `About ${bankName} Settlement` },
                { id: "why-settle", title: "Why Choose Settlement?" },
                { id: "process", title: "The Step-by-Step Process" },
                { id: "legality", title: "Legality & RBI Rules" },
                { id: "emails", title: "Contact Details" },
                { id: "cibil", title: "Impact on CIBIL" },
                { id: "faqs", title: "FAQs" }
              ]}
            />
          </aside>

          {/* Middle Column: Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none text-[#2d3748] leading-relaxed">
            
            <section id="intro" className="scroll-mt-32 mb-16 font-sans">
              <h2 className="text-3xl md:text-5xl font-black text-[#2e2e2e] mb-8 leading-tight">
                Understanding Loan Settlement for {bankName}: A Complete 2026 Guide
              </h2>
              <p className="text-lg mb-6">
                If you are currently facing financial distress and find yourself unable to pay your EMIs, you might be considering <strong>loan settlement for {bankName}</strong>. This is a formal process where the bank agrees to close your loan account for a one-time payment that is significantly lower than the total amount you owe. Loan settlement for {bankName} is often the last resort for individuals who have had a genuine loss of income, medical emergencies, or business collapses.
              </p>
              <p className="text-lg mb-6">
                In the current financial landscape of 2026, <strong>loan settlement for {bankName}</strong> has become more structured. The bank follows specific internal benchmarks to determine who is eligible for a waiver. When you opt for loan settlement for {bankName}, you are essentially negotiating with one of the leading financial institutions in India. Navigating this without professional help can be daunting, which is why understanding the nuances of loan settlement for {bankName} is critical.
              </p>
              <div className="bg-[#f0f7ff] p-8 rounded-2xl border-l-8 border-[#1F5EFF] mb-12">
                <p className="text-lg font-medium text-[#1F5EFF]">
                  Loan settlement for {bankName} can help you save up to 70% of your total outstanding dues. However, it requires a precise legal approach to ensure that your credit reputation is managed and that you receive a valid No Dues Certificate.
                </p>
              </div>
            </section>

            <section id="why-settle" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 font-sans">Why Is Loan Settlement for {bankName} Necessary?</h2>
              <p className="mb-6">
                Many borrowers ask why they should consider <strong>loan settlement for {bankName}</strong> instead of continuing to pay minimum dues. The answer lies in the compound interest trap. Especially with credit cards or unsecured loans, the interest and penalties can grow exponentially. By choosing loan settlement for {bankName}, you freeze the interest and agree on a final amount.
              </p>
              <p className="mb-6">
                Another reason to pursue <strong>loan settlement for {bankName}</strong> is to stop the persistent calls from recovery agents. Banks often employ aggressive third-party agencies. A formal <strong>loan settlement for {bankName}</strong> process puts a legal buffer between you and these agents. Once the initial negotiation for loan settlement for {bankName} begins, the bank typically pauses ground-level recovery actions.
              </p>
              <p className="mb-6 font-bold text-[#ed232a]">
                Statistics show that over 40% of defaults in 2026 are eventually resolved through loan settlement for {bankName} or similar OTS schemes.
              </p>
               <p className="mb-6">
                Furthermore, the process of <strong>loan settlement for {bankName}</strong> ensures that your legal rights are protected. Under the RBI guidelines, every borrower has the right to a fair hearing. During the loan settlement for {bankName} proceedings, you can present your financial hardship proofs. Whether it's a medical issue or a job loss, the loan settlement for {bankName} framework allows for empathy-based waivers.
              </p>
            </section>

            <section id="process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 font-sans">The Step-by-Step Process of Loan Settlement for {bankName}</h2>
              <p className="mb-6">
                The journey of <strong>loan settlement for {bankName}</strong> follows a specific rhythm. It is not as simple as asking for a discount; it is a strategic negotiation. Here is the typical flow of <strong>loan settlement for {bankName}</strong>:
              </p>
              <ol className="space-y-6 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#1F5EFF] text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#2E2E2E]">Financial Audit</h4>
                    <p>Before initiating loan settlement for {bankName}, we audit your total outstanding. We look at the principal vs. interest split to see how much waiver can be aggressively requested.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1F5EFF] text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#2E2E2E]">Establishing Hardship</h4>
                    <p>To succeed in loan settlement for {bankName}, you must prove you cannot pay. This involves compiling medical bills, salary cuts, or business loss statements to present to {bankName}.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1F5EFF] text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#2E2E2E]">The Negotiation Phase</h4>
                    <p>The core of loan settlement for {bankName}. We engage with the nodal officers of {bankName} to bring down the amount. This usually involves multiple rounds of counter-offers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#1F5EFF] text-white w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-[#2E2E2E]">Settlement Letter Verification</h4>
                    <p>Never pay without a letter. Once the loan settlement for {bankName} is agreed upon, the bank issues a formal letter. We verify this to ensure it's genuine and legally binding.</p>
                  </div>
                </li>
              </ol>
               <p className="mb-6">
                It is also worth noting that <strong>loan settlement for {bankName}</strong> usually requires the account to be at least 90 to 120 days overdue. This is because the bank only considers someone for <strong>loan settlement for {bankName}</strong> once the loan is classified as a Non-Performing Asset (NPA). At this stage, the bank is more motivated to accept a <strong>loan settlement for {bankName}</strong> to clean up its books.
              </p>
            </section>

            <section id="legality" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 font-sans">Legal Framework and RBI Rules for Loan Settlement for {bankName}</h2>
              <p className="mb-6">
                Is <strong>loan settlement for {bankName}</strong> legal? Absolutely. The RBI recognizes One-Time Settlements (OTS) as a valid recovery mechanism. When you engage in loan settlement for {bankName}, you are operating within a framework that allows banks to compromise on debts to avoid long-drawn legal battles.
              </p>
              <p className="mb-6">
                The Supreme Court has also passed several orders protecting borrowers from harassment during the <strong>loan settlement for {bankName}</strong> process. Banks or their representative agents cannot use physical force or abusive language. If you face such issues during your <strong>loan settlement for {bankName}</strong> journey, you have the right to file a complaint with the Banking Ombudsman.
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h4 className="font-black text-[#1F5EFF] mb-4">Your Protection during Loan Settlement for {bankName}:</h4>
                <p className="italic">
                  The RBI’s Master Circular on recovery clearly states that banks must maintain privacy and dignity. During loan settlement for {bankName}, you are still a customer and deserve professional treatment. Any violation can be used as leverage to get a better <strong>loan settlement for {bankName}</strong> offer.
                </p>
              </div>
            </section>

            <section id="emails" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 font-sans">Official Contact Details for Loan Settlement for {bankName}</h2>
              <p className="mb-6">
                To initiate <strong>loan settlement for {bankName}</strong>, you must contact their respective nodal departments. Relying on local branch managers is often ineffective as they rarely have the authority for <strong>loan settlement for {bankName}</strong> waivers.
              </p>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">Verified Channels for {bankName}:</h3>
                <div className="space-y-3">
                  {bank.emails.map((email, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 font-mono text-sm">
                       <svg className="w-4 h-4 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                       {email}
                    </div>
                  ))}
                </div>
              </div>
              <p className="mb-6">
                Always ensure that you CC the principal nodal officer when you send your <strong>loan settlement for {bankName}</strong> proposal. This ensures that your file is tracked at the headquarters level and doesn't get lost in the local branch bureaucracy. A comprehensive <strong>loan settlement for {bankName}</strong> email should include your account number, a summary of your financial hardship, and a clear settlement offer amount.
              </p>
            </section>

            <section id="cibil" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-6 font-sans">The CIBIL Impact of Loan Settlement for {bankName}</h2>
              <p className="mb-6">
                While <strong>loan settlement for {bankName}</strong> offers financial relief, it does come with a cost to your credit score. When you complete a <strong>loan settlement for {bankName}</strong>, the bank reports the status as "Settled" to CIBIL and other bureaus. This is different from "Closed" or "Post-Paid."
              </p>
              <p className="mb-6">
                A "Settled" remark significantly lowers your score and makes it difficult to get new unsecured loans for the next 24-36 months. However, the damage from an ongoing default is far worse than the damage from <strong>loan settlement for {bankName}</strong>. Once the <strong>loan settlement for {bankName}</strong> is finished, you can begin the process of rebuilding your credit using secured credit cards or gold loans.
              </p>
               <p className="mb-6">
                Many of our clients who have completed <strong>loan settlement for {bankName}</strong> find that within 2 years, they are able to restore their scores to 750+. The key is perfection after the <strong>loan settlement for {bankName}</strong> is done. Perfect payment on fresh active lines of credit will slowly overwrite the "Settled" remark from your <strong>loan settlement for {bankName}</strong> history.
              </p>
            </section>

             {/* SEO Rich Results Area */}
             <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 mb-16">
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">Loan Settlement for {bankName} Success Metrics:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <span className="block text-4xl font-black text-[#1F5EFF] mb-2">70%</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Max Waiver Possible</span>
                  </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <span className="block text-4xl font-black text-[#1F5EFF] mb-2">45-90</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Days for Resolution</span>
                  </div>
                   <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <span className="block text-4xl font-black text-[#1F5EFF] mb-2">10k+</span>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Successful Closures</span>
                  </div>
                </div>
             </section>

            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-12 font-sans">FAQ: Loan Settlement for {bankName}</h2>
              <div className="space-y-6">
                {[
                  { q: `How do I start the loan settlement for ${bankName} process?`, a: `You can start by evaluating your total outstanding and sending a formal hardship letter to ${bankName}. It is recommended to hire a professional to handle the negotiation.` },
                  { q: `Does loan settlement for ${bankName} happen in installments?`, a: `Usually, loan settlement for ${bankName} requires a lump-sum payment. However, in some exceptional cases, ${bankName} may allow 2-3 monthly installments.` },
                  { q: `Can I be arrested for and default before loan settlement for ${bankName}?`, a: `No, loan default is a civil matter. You cannot be arrested just for defaulting. However, you should respond to all legal notices formally.` },
                  { q: `Will recovery agents stop calling after I initiate loan settlement for ${bankName}?`, a: `Yes, once our legal team notifies the bank about the ongoing loan settlement for ${bankName} negotiation, the harassment usually stops.` },
                  { q: `What documents do I need for loan settlement for ${bankName}?`, a: `You generally need your last 6 months' bank statements, salary slips (showing pay cut), medical reports (if applicable), and an ID proof.` },
                  { q: `Can I settle a car loan through loan settlement for ${bankName}?`, a: `Secured loans are much harder to settle because the bank can repossess the asset. Loan settlement for ${bankName} is most effective for personal loans and cards.` },
                  { q: `What is the role of an ARC in loan settlement for ${bankName}?`, a: `If your debt is sold by ${bankName} to an ARC, the negotiation often becomes more flexible as ARCs are more motivated to close accounts.` },
                  { q: `How long does the loan settlement for ${bankName} take?`, a: `A typical loan settlement for ${bankName} journey takes between 2 to 4 months from start to final NOC.` },
                  { q: `Is SettleLoans affiliated with ${bankName}?`, a: `No, SettleLoans is an independent legal and financial advisor that works for you, the borrower, to negotiate against banks.` },
                  { q: `Can I rebuild my score after loan settlement for ${bankName}?`, a: `Yes, by using secured credit products and making flawless payments, you can recover your score in 18-24 months.` }
                ].map((faq, i) => (
                  <div key={i} className="border-b border-slate-200 pb-6 group hover:border-[#1F5EFF] transition-colors">
                    <h4 className="font-bold text-lg text-[#2E2E2E] mb-2 group-hover:text-[#1F5EFF] transition-colors">Q: {faq.q}</h4>
                    <p className="text-[#4a5568]">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Right Column: CTA & Related */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <div className="sticky top-24 space-y-8">
              
              {/* CTA */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white">Need Help with {bankName}?</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Let our legal experts handle the complexities of loan settlement for {bankName} for you.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                    Start My Settlement
                  </Link>
                  <p className="mt-4 text-[10px] text-[#DEDEDE]/40 uppercase tracking-widest font-bold">Safe & Legal Process</p>
                </div>
              </div>

               {/* Review Snippet */}
               <div className="bg-[#1F5EFF] p-6 rounded-2xl shadow-lg border border-white/10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative z-10">
                   <div className="flex gap-1 text-yellow-300 mb-3">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                   </div>
                   <p className="text-sm italic mb-4 font-medium leading-relaxed">
                     "SettleLoans helped me with loan settlement for ${bankName}. I received a 65% waiver and the calls stopped in just 10 days!"
                   </p>
                   <span className="text-xs font-black uppercase tracking-widest opacity-60">- Rajesh K., Verified Client</span>
                </div>
               </div>

              {/* Related */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-slate-100 pb-2">Explore Banks</h3>
                <ul className="space-y-4 text-xs font-bold">
                  {banksData.slice(0, 5).map((b, i) => (
                    <li key={i}>
                      <Link href={`/loan-settlement-by-bank/${slugify(b.company)}`} className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                        {b.company} Settlement
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/loan-settlement-by-bank" className="text-[#1F5EFF] hover:underline">View All 100+ Banks →</Link>
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
