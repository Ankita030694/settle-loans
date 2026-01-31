import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Best Loan Settlement Services in Chennai | Legal Debt Relief Specialists - SettleLoans",
  description: "Struggling with debt in Chennai or Tamil Nadu? Get professional legal help for loan settlement. Expert negotiation at Anna Salai banks & George Town courts. Zero harassment.",
  alternates: {
    canonical: "https://settleloans.in/loan-settlement/chennai",
  },
};

export default function ChennaiLoanSettlementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/loan-settlement/chennai#webpage",
        "url": "https://settleloans.in/loan-settlement/chennai",
        "name": "Expert Loan Settlement & Legal Debt Relief in Chennai",
        "description": "Comprehensive guide to settling credit cards and personal loans in Chennai. Legal protection at Egmore courts and BKC style negotiation at Anna Salai.",
        "breadcrumb": { "@id": "https://settleloans.in/loan-settlement/chennai#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/loan-settlement/chennai#breadcrumb",
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
            "name": "Loan Settlement",
            "item": "https://settleloans.in/loan-settlement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Chennai",
            "item": "https://settleloans.in/loan-settlement/chennai"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://settleloans.in/loan-settlement/chennai#service",
        "name": "Chennai Loan Settlement & Anti-Harassment Services",
        "description": "Specialized legal representation for Chennai residents facing debt crises, offering negotiation at Anna Salai and protection at Lok Adalats.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": [
          { "@type": "City", "name": "Chennai" },
          { "@type": "City", "name": "Tambaram" },
          { "@type": "City", "name": "Avadi" },
          { "@type": "City", "name": "Ambattur" },
          { "@type": "City", "name": "Chengalpattu" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1050"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Karthik Subramanian" },
            "datePublished": "2024-01-10",
            "reviewBody": "SettleLoans helped me close my mounting credit card debt of 15 Lakhs in Chennai. Their negotiation with the bank at Anna Salai was top-notch. Secured a 60% waiver.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "publisher": { "@type": "Organization", "name": "SettleLoans" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Meenakshi Sundaram" },
            "datePublished": "2024-02-05",
            "reviewBody": "Excellent legal support for personal loan settlement. They stopped the harassment from agents in OMR within 24 hours. Highly professional team.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "publisher": { "@type": "Organization", "name": "SettleLoans" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vignesh Raj" },
            "datePublished": "2024-02-20",
            "reviewBody": "They handled my Section 138 case in Egmore court with great expertise. The debt was settled for 40% of the principal and the case was withdrawn.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "publisher": { "@type": "Organization", "name": "SettleLoans" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Aparna Venkat" },
            "datePublished": "2024-03-05",
            "reviewBody": "The peace of mind they gave me is priceless. No more visits to my home in Tambaram. The settlement letter from the zonal office was verified and authentic.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "publisher": { "@type": "Organization", "name": "SettleLoans" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "M. Sivan" },
            "datePublished": "2024-03-22",
            "reviewBody": "Helped my small business in T. Nagar recover from high-interest loans. Their negotiation at Nungambakkam regional office was very effective.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "publisher": { "@type": "Organization", "name": "SettleLoans" }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/loan-settlement/chennai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the 2026 Lok Adalat dates in Chennai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The National Lok Adalats for 2026 in Chennai and across Tamil Nadu are scheduled for: March 14, May 9, September 12, and December 12. These sessions are organized by TNSLSA for settling bank disputes."
            }
          },
          {
            "@type": "Question",
            "name": "Is free legal aid available in Tamil Nadu for loan issues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. If your annual income is below ₹3,00,000, you are eligible for free legal aid from the Tamil Nadu State Legal Services Authority (TNSLSA) to defend your rights against lenders."
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

        {/* Hero Section - Chennai Gateway */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              The Gateway to South India's Premier Debt Defense
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Chennai's Specialized Guide to <br className="hidden md:block"/> Loan Settlement & Relief
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-4xl mx-auto leading-[1.2] font-normal">
              From the IT corridors of OMR to the commercial hubs of Anna Salai and T. Nagar, we provide Chennai residents with elite legal negotiation and a total shield against recovery harassment.
            </p>
            <div className="flex justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-[12px] hover:scale-105 transition-all duration-300 text-xl shadow-2xl">
                Start Your Debt Reset
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Section */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474] font-medium">
                <li><Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li><Link href="/loan-settlement" className="hover:text-[#1F5EFF] transition-colors">Loan Settlement</Link></li>
                <li><span className="text-gray-300">/</span></li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">Chennai MMR</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Content Layout */}
        <div className="w-full flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-[20%] border-r border-[#DEDEDE] bg-gray-50/10">
            <div className="sticky top-24 p-6">
              <TableOfContents 
                items={[
                  { id: "chennai-debt-drivers", title: "Chennai's Debt Landscape" },
                  { id: "omr-it-debt-crisis", title: "OMR: IT Sector Impact" },
                  { id: "retail-business-debt", title: "Retail & SME Hubs" },
                  { id: "manufacturing-debt-oragadam", title: "Manufacturing Workforce" },
                  { id: "lok-adalat-chennai-2026", title: "2026 Lok Adalat Dates" },
                  { id: "tnslsa-legal-aid", title: "Tamil Nadu Legal Aid" },
                  { id: "anna-salai-banking", title: "Anna Salai: Negotiation Hub" },
                  { id: "client-testimonials", title: "Client Reviews" },
                  { id: "court-defense-egmore", title: "Egmore & George Town Courts" },
                  { id: "harassment-legal-shield", title: "Shield Against Harassment" },
                  { id: "settlement-mechanics", title: "How Settlement Works" },
                  { id: "chennai-success-stories", title: "Chennai Case Studies" },
                  { id: "chennai-faqs", title: "Chennai Debt FAQs" },
                  { id: "get-started", title: "Get Started Now" }
                ]}
              />
            </div>
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-[60%] px-4 md:px-12 py-12 prose prose-lg max-w-none text-[#2E2E2E] leading-relaxed bg-white">
            
            <section id="chennai-debt-drivers" className="scroll-mt-32 mb-16">
              <h2 className="text-4xl font-black mb-10 text-black leading-tight tracking-tighter uppercase">Navigating Chennai's Complex Debt Landscape</h2>
              <p className="mb-8">Chennai, the "Detroit of Asia" and a major IT hub, presents a unique economic profile that directly impacts personal financial health. Debt in Chennai isn't just about spending; it's often a reflection of the city's shifting industrial and technological tides. From the manufacturing workforce in Oragadam and Sriperumbudur facing cyclical downturns to the IT professionals in Sholinganallur dealing with global project shifts, the sources of financial stress are varied and deeply rooted in the city's commercial structure.</p>
              <p className="mb-8 font-bold text-lg leading-relaxed italic border-l-4 border-[#1F5EFF] pl-6 bg-blue-50/30 py-4 italic">"Enakku nalla theriyum, idhu romba kashtamana neram. We are here to help." <br/><span className="text-xs font-black uppercase tracking-widest text-[#1F5EFF] not-italic">— Chennai Support Desk</span></p>
              <p className="mb-0 leading-relaxed">The high concentration of educational institutions and the historical emphasis on higher studies in Chennai also lead to a specific type of debt: the "Educational Bridge Debt." Many families take personal loans or use high-interest credit cards to bridge the gap between education loans and the actual cost of international studies or professional courses. At SettleLoans, we understand these local nuances.</p>
              <p>When life takes an unexpected turn - a job loss in the tech sector, a medical emergency, or a business slowdown in the retail hubs of T. Nagar or George Town - the interest compounding on existing loans can become mathematically impossible to pay back. Professional debt settlement offers a structured, lawful, and dignified exit from this cycle of permanent debt.</p>
            </section>

            <section id="retail-business-debt" className="scroll-mt-32 mb-20 bg-gray-50/50 p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-black mb-8 text-black uppercase tracking-tighter">T. Nagar & George Town: The SME Debt Trap</h2>
              <p className="mb-8">T. Nagar, the retail heart of Chennai, and George Town, its oldest commercial hub, operate on a high-velocity cash flow system. However, seasonal dips, GST complexities, and the rise of e-commerce have pushed many traditional business owners into a "Floating Debt" trap. We see a significant pattern of retailers in Pondy Bazaar or wholesalers in Sowcarpet using personal credit cards and 'business' loans with daily repayments (often from predatory private lenders) to manage inventory.</p>
              <p className="mb-8">When the inventory doesn't move as fast as the high-interest EMIs, the business owner is forced to take "Loan 2" to pay "Loan 1." By 'Loan 4,' the debt is no longer a business liability; it's a existential threat to the family. Our Chennai George Town desk specializes in <strong>Commercial Debt Restructuring</strong>. We help small business owners move away from these predatory cycles by negotiating with the larger banks and NBFCs, allowing for a structured settlement that saves the shop and the reputation in the community.</p>
              <p className="mb-0">We understand the "Merchant Heart" of Chennai. We know that for a T. Nagar businessman, pride is as important as profit. We ensure that your settlement is handled with absolute discretion, ensuring that your suppliers and competitors never find out about your financial restructuring, while giving you the breathing room to pivot your business.</p>
            </section>

            <section id="harassment-legal-shield" className="scroll-mt-32 mb-20 bg-red-50/20 p-10 rounded-3xl border border-red-100">
              <h2 className="text-3xl font-black mb-8 text-red-600 uppercase tracking-tighter">Tamil Nadu Police & Your Shield Against Harassment</h2>
              <p className="mb-8">Chennai's recovery agents often use local social structures to intimidate borrowers. They might visit your "Agraharam" home, your office in a Taramani tech park, or even approach your parents in a suburban neighborhood. This is not just 'collections'; this is harassment. The Chennai City Police and the Tamil Nadu state police have strict guidelines against such behavior. Under Section 506 of the IPC (Criminal Intimidation), any agent who uses threats or abusive language can be reported.</p>
              <div className="grid gap-6 md:grid-cols-2 mb-10">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100">
                  <h4 className="font-black text-red-600 mb-2 font-mono tracking-tighter text-xs uppercase">Violations of Conduct</h4>
                  <ul className="text-xs space-y-2 opacity-80 list-disc pl-4">
                    <li>Calls from masked or private numbers at odd hours.</li>
                    <li>Visits to your workplace or relatives' homes.</li>
                    <li>Shaming you in front of your residential society.</li>
                    <li>Threatening immediate arrest without a court order.</li>
                    <li>Sending fake "Legal Notices" on WhatsApp.</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                  <h4 className="font-black text-blue-600 mb-2 font-mono tracking-tighter text-xs uppercase">The SettleLoans Shield</h4>
                  <ul className="text-xs space-y-2 opacity-80 list-disc pl-4">
                    <li>We issue an immediate "Notice of Representation."</li>
                    <li>We document all illegal calls and physical visits.</li>
                    <li>We file formal complaints with the Bank's Nodal Officer.</li>
                    <li>We assist in filing NC/FIR at local Chennai police stations.</li>
                  </ul>
                </div>
              </div>
              <p className="mb-8 font-medium">In Chennai, the "Consumer Protection Act" and the "RBI Fair Practices Code" are your greatest allies. Banks are legally liable for the actions of their outsourced agents. Our legal team doesn't just block collectors; we build a dossier of evidence that we then use as leverage during settlement. When a bank realization that their agents have violated the law on Tamil Nadu soil, they are much more likely to offer a generous settlement to avoid legal escalation and police intervention.</p>
              <p className="mb-0 italic text-gray-500 text-sm">Advice: If an agent visits your home in Chennai, do not invite them inside. Record the conversation on your phone and ask for their identity card and the bank's authorization letter. If they fail to provide these, call the 100 helpline immediately.</p>
            </section>

            <section id="settlement-mechanics" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-8 text-black leading-tight tracking-tighter uppercase">The Mechanics of a Successful Chennai Loan Settlement</h2>
              <p className="mb-8">A loan settlement in Chennai isn't just about paying "less." It's about a strategic exit that clears your name and stops future litigation. Many borrowers try to settle themselves and end up paying "Settlement Installments" that aren't reflected in the system, or they receive fake "No Dues Certificates" from rogue agents. A professional settlement through SettleLoans involves a high-level 5-Step Process:</p>
              <ol className="space-y-6 mb-10 list-decimal pl-6 font-medium">
                <li><strong className="text-black">Pre-Audit & Verification:</strong> We analyze your total dues. Banks often add "Bounce Charges" and "Penal Interest" exponentially. We strip these away to calculate the actual principal owed - this is our starting point for negotiation.</li>
                <li><strong className="text-black">The Legal Buffer:</strong> We take over all communications. The moment we are appointed, the bank and its agents must speak to our Chennai legal desk, not you. This stops the panic and restores your peace of mind.</li>
                <li><strong className="text-black">Regional Headquarters Escalation:</strong> We don't negotiate with tele-callers. We escalate your file to the Regional Managers at Anna Salai or Nungambakkam headquarters. We use your financial hardship (job loss, medical bills, business loss) as a valid legal ground for a waiver.</li>
                <li><strong className="text-black">Drafting the Consent Terms:</strong> Once a figure is agreed (typically 30-50% of the total dues), we review the bank's official "Settlement Letter." We ensure it explicitly mentions that the settlement is a "One-Time Payment" and that the bank will withdraw all pending legal cases.</li>
                <li><strong className="text-black">The NDC Audit:</strong> After you make the payment, we track the issuance of the "No Dues Certificate" (NDC). We ensure that your status is updated as 'Settled' in the CIBIL database, preventing future harassment for the same debt.</li>
              </ol>
              <p className="mb-0">This rigorous process is why Chennai residents trust us. We don't just 'talk' to banks; we 'process' them. We use the RBI's "Prudential Framework for Resolution of Stressed Assets" as our guide, ensuring that your settlement is 100% legal and irreversible.</p>
            </section>

            <section id="rbi-ots-chennai" className="scroll-mt-32 mb-20 bg-blue-900/5 p-10 rounded-3xl border border-blue-900/10">
              <h2 className="text-3xl font-black mb-8 text-blue-900 uppercase tracking-tighter">The RBI OTS Framework: Your Legal Right in Chennai</h2>
              <p className="mb-8">Many banks in Chennai try to keep the One-Time Settlement (OTS) options hidden from the general public. However, the Reserve Bank of India (RBI) has issued several circulars, including the landmark "Prudential Framework for Resolution of Stressed Assets," which provides a clear path for "Compromise Settlements." For a Chennai borrower, this means that if you can prove genuine financial hardship (like a medical crisis in a Greames Road hospital or a job loss in an OMR tech park), the bank has the regulatory backing to offer you a massive discount on your dues.</p>
              <p className="mb-8">We leverage the RBI's <strong>Master Circular on Recovery and Settlement</strong> to protect our Chennai clients. We argue that for the bank, a 40% recovery today is better than a 0% recovery after 5 years of litigation in a crowded Chennai court. We use the bank's own internal "NPAs Policy" (which they are required to have by the RBI) to push for the absolute floor price of your debt. In Chennai's competitive banking environment, banks are often eager to clean up their balance sheets before the end of a financial quarter. We use this timing to your advantage, often securing settlements during the March or September banking cycles that would be impossible at other times of the year.</p>
              <p className="mb-0 font-bold">Key RBI Protections we enforce for you:</p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-4 text-sm">
                  <span className="font-black text-blue-900 mt-1">✓</span>
                  <span><strong>Right to Settlement Information:</strong> Banks must disclose their settlement policies if requested by a defaulting borrower during a resolution process.</span>
                </li>
                <li className="flex items-start gap-4 text-sm">
                  <span className="font-black text-blue-900 mt-1">✓</span>
                  <span><strong>Protection from Coercion:</strong> The RBI strictly prohibits the use of muscle power or harassment at a borrower's Anna Salai office or Chennai home.</span>
                </li>
                <li className="flex items-start gap-4 text-sm">
                  <span className="font-black text-blue-900 mt-1">✓</span>
                  <span><strong>Account Update Post-Settlement:</strong> Banks are mandated to update the CIBIL status of a settled account within 30 days of the NDC issuance.</span>
                </li>
              </ul>
            </section>

            <section id="omr-it-debt-crisis" className="scroll-mt-32 mb-20 bg-blue-50/20 p-10 rounded-3xl border border-blue-100">
              <h2 className="text-3xl font-black mb-8 text-[#1F5EFF] uppercase tracking-tighter">The OMR & GST Road Crisis: IT Professionals Under Pressure</h2>
              <p className="mb-8">Old Mahabalipuram Road (OMR) and Grand Southern Trunk (GST) Road are the lifelines of modern Chennai, housing thousands of tech companies and millions of dreams. However, the last few years have seen a surge in "lifestyle debt" among young IT professionals in these corridors. Lured by "easy credit" offered by app-based lenders and pre-approved cards, many find themselves in a cycle where 70% of their salary goes toward EMIs before they even pay for their rent in areas like Perungudi or Thoraipakkam.</p>
              <p className="mb-8 font-bold">The IT Sector Debt Patterns we see in Chennai:</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>The Variable Component Gap:</strong> Many loans are taken based on "Gross CTC," but when project bonuses or variable pays are cut, the "In-hand" salary is insufficient to cover the fixed EMI burdens.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Relocation & Setup Debt:</strong> Young professionals moving to Chennai's tech hubs often exhaust their initial savings and resort to high-interest personal loans for furniture, electronics, and vehicle down payments.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-[#1F5EFF] rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>App-Based Lending Spirals:</strong> The proximity to digital payment ecosystems makes IT workers prime targets for 'instant' app loans which carry interest rates as high as 40-50% annually when rolled over.</span>
                </li>
              </ul>
              <p className="mb-0">Our Chennai office handles hundreds of cases from the OMR belt. We provide a "Financial Firewall" for IT workers, shielding them from recovery calls while they are at work in Siruseri or Taramani. We understand that in the tech world, your reputation and your clearance are everything. We ensure that your debt settlement process is quiet, professional, and legally secure, allowing you to focus on your next sprint without the shadow of a collection agent looming over your cubicle.</p>
            </section>

            <section id="manufacturing-debt-oragadam" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-8 text-black border-l-8 border-orange-500 pl-6 uppercase tracking-tighter">Oragadam & Sriperumbudur: Protecting the Manufacturing Workforce</h2>
              <p className="mb-8">Chennai's industrial backbone - stretching from Oragadam to Sriperumbudur and down to the GST road - is populated by a massive workforce that is highly vulnerable to "Over-leveraging." With salaries often dependent on overtime (OT) and shifting production schedules, many manufacturing employees find themselves unable to meet EMIs when the "OT" hours are slashed or a project is temporarily halted. This leads to a desperate scramble for app-based loans, which quickly spiral into unmanageable debts.</p>
              <p className="mb-8">We represent dozens of workers from Chennai's automotive and electronics giants. These employees often face unique harassment: recovery agents calling the HR department or waiting at the factory gates. SettleLoans provides a "Steel Shield" for the manufacturing workforce. We intervene legally, informing the banks about the fluctuating income of the industrial sector and negotiating settlements that match the borrower's actual repayment capacity, not their former 'full-OT' CTC.</p>
              <p className="mb-0 italic text-sm">Industrial Alert: If you work in an Oragadam factory and are being harassed at your workplace, remember that factory premises are private and controlled. You have the right to request your security to bar the entry of unauthorized recovery personnel. Contact SettleLoans for a formal notice to your HR to preempt any negative reports on your professional record.</p>
            </section>

            <section id="tnslsa-legal-aid" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-8 text-black border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter">Tamil Nadu Legal Aid: Justice for Every Income Bracket</h2>
              <p className="mb-6">A common misconception in Chennai is that "only the rich can afford legal defense against banks." The Tamil Nadu State Legal Services Authority (TNSLSA) shattered this myth decades ago. Under the Legal Services Authorities Act, 1987, any resident of Tamil Nadu whose <span className="text-[#1F5EFF] font-black">annual income is below ₹3,00,000</span> is entitled to free legal services. This includes free legal advice, representation by an advocate in any court, and payment of court fees.</p>
              <p className="mb-6">The TNSLSA operates out of the High Court premises in Chennai and has cells in every district court like George Town and Egmore. If you are struggling with a personal loan default, you don't have to face the bank's massive legal team alone. You can apply for legal aid, and a panel lawyer will be appointed to defend your case. At SettleLoans, we act as a bridge for those who might not qualify for government aid but still need affordable, expert representation. We leverage the same principles of "Equal Justice" to ensure that no bank can bully a Chennai borrower into an unfair repayment schedule.</p>
              <p className="mb-10 text-gray-600 italic">"The essence of the TNSLSA is to ensure that opportunities for securing justice are not denied to any citizen by reason of economic or other disabilities. Whether you use SettleLoans or the TNSLSA, silence is your worst enemy - speak up and seek legal help."</p>
            </section>

            <section id="anna-salai-banking" className="scroll-mt-32 mb-20 bg-emerald-50/20 p-10 rounded-3xl border border-emerald-100">
              <h2 className="text-3xl font-black mb-8 text-emerald-800 uppercase tracking-tighter">Anna Salai & Nungambakkam: The Hubs of Power Negotiation</h2>
              <p className="mb-8">In Chennai, your local branch manager might say "I don't have the power to settle." They are technically right. The real settlement authority (the "Waiver Power") for most banks in South India resides in their Zonal or Regional Offices, primarily located in the Anna Salai (Mount Road) and Nungambakkam corridors. From the Indian Overseas Bank (IOB) Central Office to the SBI Local Head Office and the regional headquarters of private giants like AXIS and ICICI, this 5-kilometer radius is where your debt's fate is decided.</p>
              <p className="mb-8">Negotiating at this level requires a different language. It's not about making a "payment request"; it's about presenting a "Resolution Portfolio under RBI Prudential Guidelines." Banks in Chennai's corporate hubs are managed by experienced Zonal Managers who understand the cost of litigation and the burden of NPAs (Non-Performing Assets). When SettleLoans approaches these offices in Anna Salai, we bring the cumulative leverage of hundreds of cases. We speak the language of 'recovery cost vs. time value of money,' which often moves the needle from a 20% waiver to a massive 60% or 70% settlement.</p>
              <p className="mb-8">Our Chennai team physically visits these regional hubs to ensure your file is moving through the correct channels. We bypass the aggressive third-party collection agencies and speak directly to the Zonal Nodal Officers. This "Top-Down" negotiation is the secret to the deep waivers we secure for our Chennai clients. Proximity to power is leverage - and in Chennai, we are at the center of it.</p>
            </section>

            <section id="client-testimonials" className="scroll-mt-32 mb-20 bg-[#f8faff] p-10 rounded-[40px] border border-blue-50">
              <h2 className="text-3xl font-black mb-12 text-center text-[#1F5EFF] uppercase tracking-tighter">Chennai Reclaimed: Reviews from Your Neighbors</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  { name: "Karthik Subramanian", location: "Anna Nagar", stars: 5, text: "SettleLoans helped me close my mounting credit card debt of 15 Lakhs in Chennai. Their negotiation with the bank at Anna Salai was top-notch. I secured a 60% waiver and the harassment stopped instantly." },
                  { name: "Meenakshi Sundaram", location: "Thiruvanmiyur", stars: 5, text: "Excellent legal support for personal loan settlement. They stopped the harassment from agents in OMR within 24 hours. Highly recommended for families dealing with high-interest app loans." },
                  { name: "Vignesh Raj", location: "Mylapore", stars: 5, text: "Professional and transparent. They handled my Section 138 case in Egmore court and settled the matter for 40% of the principal. Saved my credit future." },
                  { name: "Aparna Venkat", location: "Tambaram", stars: 5, text: "The peace of mind they gave me is priceless. No more visits to my home. The settlement process was smooth, legal, and very well-documented. Grateful for their help in Chennai." },
                  { name: "M. Sivan", location: "T. Nagar", stars: 5, text: "Facing high-interest debt in a city like Chennai is brutal for a small business. SettleLoans gave me a structured path out. Excellent team at Nungambakkam regional office." },
                  { name: "Deepak Chawla", location: "Kilpauk", stars: 5, text: "Settling ₹12 Lakhs for ₹5 Lakhs total wasn't something I thought possible. SettleLoans made it happen through the June Lok Adalat. Best decision for my family's financial freedom." }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-md transition-all">
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(testimonial.stars)].map((_, s) => (
                        <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 text-sm">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#1F5EFF] font-black text-xs">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-black text-xs text-black">{testimonial.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="court-defense-egmore" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-8 text-black border-l-8 border-[#1F5EFF] pl-6 uppercase tracking-tighter">George Town & Egmore: Defending Section 138 & Arbitration</h2>
              <p className="mb-8">If you have received a summons from the George Town Magistrate Court or the Egmore Court, do not panic. These are the primary venues where banks file Section 138 (Cheque Bounce) cases in Chennai. Increasingly, banks also use Section 25 of the Payment and Settlement Systems Act (ECS/NACH bounce). These are technical proceedings used as a pressure tactic to force a settlement. In Chennai's congested judicial system, these cases can drag on for years, adding immense stress to the borrower's life.</p>
              <p className="mb-8">Our legal defense strategy in Chennai courts is focused on "Procedural Leverage." We meticulously examine the statutory notice period, the authorization of the bank representative, and the specific nature of the debt. Often, the amount claimed by the bank includes illegal "compound interest over penalties" which we challenge successfully. Our goal in the Chennai Magistrate courts is to steer the matter toward a <strong>Compromise Decree</strong>. By proving the borrower's genuine financial hardship and the bank's own procedural lapses, we often force the lender to settle for just the principal amount, ending the criminal proceedings permanently.</p>
              <p className="mb-8">We also specialize in challenging <strong>Arbitration Awards</strong>. Many Chennail-based NBFCs (Non-Banking Financial Companies) conduct 'Ex-Parte' arbitration in small rooms, passing awards that are heavily biased. We help you challenge these under Section 34 of the Arbitration and Conciliation Act in the High Court or the City Civil Court, ensuring that the bank doesn't get to be the judge, jury, and executioner in your case.</p>
            </section>

            <section id="lok-adalat-chennai-2026" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-8 text-black uppercase tracking-tight">Chennai Lok Adalat 2026: Your Roadmap to Closure</h2>
              <p className="mb-8">The National Lok Adalat, organized by the Tamil Nadu State Legal Services Authority (TNSLSA), is the most effective forum for Chennai residents to settle bank disputes. In 2026, the schedule is set to provide four major opportunities for debt resolution. These sessions are perfect for cases pending in George Town, Egmore, or the City Civil Courts.</p>
              <div className="bg-white border-2 border-[#DEDEDE] rounded-2xl overflow-hidden mb-10 shadow-md">
                <div className="bg-[#2E2E2E] text-white p-5 font-black text-center text-xl tracking-widest">2026 CHENNAI NATIONAL LOK ADALAT CALENDAR</div>
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 border-t border-[#DEDEDE]">
                  <div className="p-8 text-center bg-gray-50/50">
                    <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Spring Session</p>
                    <p className="text-2xl font-black text-[#1F5EFF]">Mar 14</p>
                  </div>
                  <div className="p-8 text-center">
                    <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Summer Session</p>
                    <p className="text-2xl font-black text-[#1F5EFF]">May 09</p>
                  </div>
                  <div className="p-8 text-center bg-gray-50/50">
                    <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Monsoon Session</p>
                    <p className="text-2xl font-black text-[#1F5EFF]">Sep 12</p>
                  </div>
                  <div className="p-8 text-center">
                    <p className="text-[10px] font-black text-gray-400 mb-2 uppercase tracking-widest">Winter Session</p>
                    <p className="text-2xl font-black text-[#1F5EFF]">Dec 12</p>
                  </div>
                </div>
              </div>
              <p className="mb-8">At SettleLoans, we don't just wait for the Lok Adalat to arrive. We start the "Pre-Adalat Negotiation" three months in advance. By the time the session starts on Mount Road or high court premises, we already have a written technical agreement with the bank's Nodal Officer. The Lok Adalat then serves as the final legal seal on that agreement, making the settlement permanent, binding, and non-appealable. This proactive strategy ensures that our Chennai clients get the maximum possible waiver (often up to 70% of the total dues) with the full backing of the judiciary.</p>
            </section>

            <section id="chennai-success-stories" className="scroll-mt-32 mb-20 bg-gray-50 p-12 rounded-[40px] border border-[#DEDEDE]">
              <h2 className="text-4xl font-black mb-12 text-center text-[#1F5EFF] uppercase tracking-tighter">Chennai Success Stories: Real People, Real Freedom</h2>
              <div className="space-y-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DEDEDE]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-black text-black">IT Lead, Siruseri IT Park</h4>
                      <p className="text-sm text-gray-500 italic">Situation: Project layoff & health crisis in family</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-black font-mono tracking-tighter">Debt: ₹18.5 Lakhs</div>
                  </div>
                  <p className="text-sm mb-6 opacity-85 leading-relaxed">"Between a health emergency in my family and a sudden layoff in my project, my 5 credit cards became an unmanageable monster. SettleLoans stepped in, stopped the constant calling at 7 PM, and negotiated with the headquarters at Anna Salai. I settled the entire 18.5 Lakhs for just ₹6.5 Lakhs. I can finally sleep at night."</p>
                  <div className="bg-green-50 text-green-700 p-3 rounded-lg text-xs font-black text-center uppercase tracking-widest leading-none">Result: 65% Principal Waiver Secured In Lok Adalat</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DEDEDE]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-black text-black">SME Owner, Chennai George Town</h4>
                      <p className="text-sm text-gray-500 italic">Industry: Textile Wholesale (GST Impact)</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-black font-mono tracking-tighter">Debt: ₹34 Lakhs</div>
                  </div>
                  <p className="text-sm mb-6 opacity-85 leading-relaxed">"My business in George Town took a massive hit during the supply chain disruptions. I had multiple personal loans taken for stock. SettleLoans legal team replied to the bank's arbitration notices and moved the case to the Chennai Zonal office. We settled for ₹14.5 Lakhs in 3 easy installments. They saved my family business from closure."</p>
                  <div className="bg-green-50 text-green-700 p-3 rounded-lg text-xs font-black text-center uppercase tracking-widest leading-none">Result: ₹19.5 Lakhs Total Savings via Settlement</div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#DEDEDE]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="text-xl font-black text-black">Manufacturing Lead, Oragadam</h4>
                      <p className="text-sm text-gray-500 italic">Situation: Reduced OT & Overleveraged with App Loans</p>
                    </div>
                    <div className="bg-red-50 text-red-600 px-4 py-1 rounded-full text-xs font-black font-mono tracking-tighter">Debt: ₹9.2 Lakhs</div>
                  </div>
                  <p className="text-sm mb-6 opacity-85 leading-relaxed">"I was trapped in a cycle of'instant' app loans. The agents were calling my factory floor. SettleLoans issued a legal notice that stopped the calls within 12 hours. They negotiated the principal-only settlement for ₹3.8 Lakhs. For a working person like me, this was a life-saving intervention."</p>
                  <div className="bg-green-50 text-green-700 p-3 rounded-lg text-xs font-black text-center uppercase tracking-widest leading-none">Result: Repayment limited to Principal Only (58% Waiver)</div>
                </div>
              </div>
            </section>

            <section id="chennai-faqs" className="scroll-mt-32 mb-20">
              <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Chennai Debt Relief: Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  { q: "Is a loan settlement legal under RBI rules in Tamil Nadu?", a: "Absolutely. The RBI's 'Prudential Framework for Resolution of Stressed Assets' explicitly allows banks and NBFCs to enter into compromise settlements with borrowers to maximize recovery. It is a standard, legal financial process." },
                  { q: "Can agents come to my office in Sholinganallur or Taramani?", a: "No. Recovery agents are legally prohibited from contacting you at your workplace if you have already provided your home address. If they do, it's a violation of the RBI Fair Practices Code. We help you report this immediately." },
                  { q: "What is the role of TNSLSA in loan settlement?", a: "The Tamil Nadu State Legal Services Authority (TNSLSA) organizes Lok Adalats and provides free legal aid to those earning below ₹3 Lakhs, helping them resolve disputes with banks and other financial institutions amicably." },
                  { q: "How long does the entire settlement process take in Chennai?", a: "A professional settlement usually takes 4 to 9 months. This includes the legal shield phase, the negotiation phase at regional headquarters, and the final verification of the NDC." },
                  { q: "Will a settlement affect my job in the IT sector in Chennai?", a: "No. Settling an unsecured personal loan or credit card is a civil financial matter. It does not disqualify you from employment in private companies or the IT sector. In fact, being debt-free reduces workplace stress." },
                  { q: "What happens to my CIBIL score after a settlement in Chennai?", a: "Your score will temporarily decrease and the account will be marked as 'Settled.' However, we provide you with a Post-Settlement Credit Rebuilding roadmap to help you return to a 750+ score within 18-24 months." },
                  { q: "Do I need to visit the Madras High Court for my settlement?", a: "No. Most settlements are negotiated out-of-court or through Lok Adalats organized in district centers. Our legal team handles all the physical representation, so you don't have to miss work." },
                  { q: "Can SettleLoans handle cooperative bank loans in Tamil Nadu?", a: "Yes, we handle settlements for nationalized banks, private banks, and local cooperative banks across Chennai and the rest of Tamil Nadu." },
                  { q: "What is a 'Settlement Letter' and how do I know it's real?", a: "A settlement letter is the official document from the bank's Zonal Office stating the compromise amount. We verify every letter for authenticity using the bank's internal tracking numbers before you make any payment." },
                  { q: "Can I settle my business loan in T. Nagar or George Town?", a: "Yes, we have a specialized wing for MSME and local business loan settlements. We understand the specific financial structures of Chennai's traditional business hubs." },
                  { q: "Is debt default a criminal offense in the Egmore Court?", a: "Debt default is civil. However, if a cheque bounces (Section 138), a criminal case can be filed. We specialize in defending these 138 cases and resolving them through settlement." },
                  { q: "Why should I use SettleLoans instead of settling directly?", a: "Professional negotiators have better access to senior bank officials and know the 'floor price' that banks are willing to accept. We also provide a guaranteed legal buffer that stops harassment immediately." },
                  { q: "Can I settle my student loan taken from a Chennai bank?", a: "Education loans follow different guidelines (usually more empathetic). While harder to settle, we can help with 'Debt Restructuring' or 'Principal Settlements' for aged education loan defaults." },
                  { q: "What if the bank files a case in the George Town magistrate court?", a: "We provide experienced advocates to represent you in court, file for bail if necessary, and move the case toward a compromise settlement at the earliest possibility." },
                  { q: "Is there a maximum waiver amount guaranteed?", a: "No legal firm can guarantee a specific waiver, as it depends on the bank's policy and your hardship. However, our Chennai clients typically see waivers ranging from 40% to 75% of the total dues." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-[#2E2E2E] list-none group-open:bg-[#1F5EFF] group-open:text-white transition-colors uppercase tracking-tighter text-sm">
                      <span className="pr-4">{faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="p-8 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] bg-white text-base">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section id="get-started" className="scroll-mt-32 mt-24">
              <div className="bg-[#2E2E2E] rounded-[48px] p-12 text-center relative overflow-hidden shadow-2xl border border-white/10">
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1F5EFF]/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">A New Financial Chapter in Chennai Awaits</h2>
                 <p className="text-white/70 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">Join 12,000+ Chennai residents who have reclaimed their peace of mind. Stop the harassment and start your journey toward a debt-free life today.</p>
                 <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link href="/contact" className="bg-[#1F5EFF] text-white font-black py-5 px-14 rounded-2xl hover:scale-110 transition-all text-xl shadow-xl uppercase tracking-widest leading-none">
                       Free Legal Audit
                    </Link>
                    <Link href="/services" className="bg-transparent text-white font-bold py-5 px-14 rounded-2xl border-2 border-white/20 hover:bg-white/5 transition-all text-xl uppercase tracking-widest leading-none">
                       Our Services
                    </Link>
                 </div>
                 <p className="mt-10 text-white/40 text-xs font-medium uppercase tracking-[0.3em]">Confidential • Ethical • Legal • Chennai Experts</p>
              </div>
            </section>

            <div className="mt-20 pt-10 border-t border-gray-100 text-center text-gray-400 text-[10px] italic uppercase tracking-widest leading-relaxed">
               <p>Disclaimer: SettleLoans (AMA Legal Solutions) is a specialized debt consultancy service in Chennai. We provide legal negotiation and financial advisory; however, the final settlement percentage is at the lender's discretion. Impact on credit scores is inherent to the settlement process. We do not guarantee a specific waiver percentage but strive for the best possible outcome for our clients under Tamil Nadu and Indian law.</p>
            </div>
          </article>

          {/* Right Column: CTA & Trust (Sticky) */}
          <aside className="hidden lg:block w-[20%] border-l border-[#DEDEDE] bg-gray-50/10">
            <div className="sticky top-24 p-6 space-y-8">
              
              {/* Specialized Chennai CTA */}
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 flex flex-col">
                <div className="bg-[#1F5EFF] p-4 text-center">
                  <h3 className="text-lg font-black text-white px-2 leading-tight uppercase tracking-tighter">Chennai Legal Desk</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                    Facing aggressive recovery agents in Chennai? Get <span className="text-[#1F5EFF] underline">Immediate Shield</span>.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md">
                    Talk to a Lawyer
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60 italic font-medium">Free Anna Salai Verification</p>
                </div>
              </div>

              {/* Trust Section */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                 <h3 className="text-[10px] font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Why Chennai Trusts Us</h3>
                 <div className="space-y-4">
                    <div className="flex gap-3">
                       <span className="text-[#1F5EFF] text-xs">✓</span>
                       <span className="text-xs font-bold leading-tight">Anna Salai Zonal Link</span>
                    </div>
                    <div className="flex gap-3">
                       <span className="text-[#1F5EFF] text-xs">✓</span>
                       <span className="text-xs font-bold leading-tight">₹34Cr Waivers Secured</span>
                    </div>
                    <div className="flex gap-3">
                       <span className="text-[#1F5EFF] text-xs">✓</span>
                       <span className="text-xs font-bold leading-tight">1.2k+ Chennai Successes</span>
                    </div>
                 </div>
              </div>

              {/* Related Services */}
              <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
                <h3 className="text-[10px] font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Chennai Services</h3>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link href="/services/personal-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      <span className="text-xs font-black uppercase">Personal Loan</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      <span className="text-xs font-black uppercase">Credit Card Help</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/business-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      <span className="text-xs font-black uppercase">Business Debt</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cheque-bounce" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                      <span className="text-xs font-black uppercase">Cheque Bounce</span>
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
