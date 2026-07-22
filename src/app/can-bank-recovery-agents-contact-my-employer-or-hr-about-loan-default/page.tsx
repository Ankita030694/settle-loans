import type { Metadata } from "next";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Can Bank Recovery Agents Contact My Employer or HR About My Personal Loan Default?",
  description: "Learn the strict RBI rules that prohibit recovery agents from contacting your workplace, HR, or manager regarding your personal loan default. Discover how to stop harassment.",
  alternates: {
    canonical: "https://www.settleloan.in/can-bank-recovery-agents-contact-my-employer-or-hr-about-loan-default",
  },
};

export default function WorkplaceHarassmentPage() {
  const tocItems = [
    { id: "intro", title: "The Nightmare of Workplace Harassment" },
    { id: "rbi-rules", title: "RBI Rules on Recovery Agents Calling Your Office" },
    { id: "privacy-laws", title: "Your Right to Privacy and Defamation Risks" },
    { id: "job-security", title: "Can You Legally Lose Your Job Over a Default?" },
    { id: "actionable-steps", title: "How to Stop Them: 4 Actionable Steps" },
    { id: "cease-and-desist", title: "Sending a Legal Cease-and-Desist Notice" },
    { id: "success-stories", title: "Success Stories: Stopping the Calls" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const faqs = [
    { q: "Can a bank legally call my employer about my loan?", a: "No. Disclosing your loan details or default status to your employer is a violation of RBI guidelines and your right to privacy. The relationship between you and the bank is strictly confidential." },
    { q: "What should I do if an agent calls my HR?", a: "Immediately file a formal complaint with the bank's grievance officer, document the call details, and send a legal cease-and-desist notice for defamation and harassment. You can also escalate this to the RBI Ombudsman." },
    { q: "Can I get fired for a personal loan default?", a: "Your employer cannot legally fire you simply for defaulting on a personal loan, as it is a civil matter and does not affect your professional competence. However, the embarrassment of recovery agents calling the office can create a hostile work environment." },
    { q: "Do recovery agents really have the power to ruin my career?", a: "They use this threat as a scare tactic. They have no actual legal or authoritative power over your career, and acting on such threats opens them up to severe legal consequences including criminal defamation." },
    { q: "How fast does a cease-and-desist notice work?", a: "A well-drafted legal notice usually stops illegal harassment tactics immediately, often within 24 to 48 hours, as the bank's legal team will force the agency to comply to avoid a lawsuit and regulatory fines." },
    { q: "Will the RBI help me if agents call my workplace?", a: "Yes, you can file a complaint with the RBI Ombudsman against the bank for using coercive recovery tactics at your workplace. The RBI takes strict action against banks that violate the Fair Practices Code." },
    { q: "Should I block the recovery agent's number?", a: "Instead of just blocking (they will call from new numbers anyway), record their threats of calling your office and use that evidence to file a complaint or send a legal notice." },
    { q: "Can they visit my office physically?", a: "RBI guidelines state agents should only visit the place specified by the borrower (usually the residence). Visiting the office unannounced to cause embarrassment is strictly prohibited and constitutes harassment." },
    { q: "Can they contact my colleagues on LinkedIn or social media?", a: "No. Reaching out to third parties, including colleagues on social media or professional networks like LinkedIn, to disclose your debt is illegal and constitutes a severe breach of privacy and harassment." },
    { q: "What is the penalty for banks violating these rules?", a: "Banks can face severe fines and regulatory restrictions from the RBI. Furthermore, you can claim significant monetary compensation for mental agony and defamation through consumer courts or civil lawsuits." },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Can Bank Recovery Agents Contact My Employer or HR About My Personal Loan Default?",
      "url": "https://www.settleloan.in/can-bank-recovery-agents-contact-my-employer-or-hr-about-loan-default",
      "description": "A comprehensive guide on RBI guidelines and legal steps to stop recovery agents from contacting your employer, HR, or colleagues about your personal loan default."
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in/" },
        { "@type": "ListItem", "position": 2, "name": "Legal Rights", "item": "https://www.settleloan.in/legal-rights" },
        { "@type": "ListItem", "position": 3, "name": "Can Bank Recovery Agents Contact My Employer?", "item": "https://www.settleloan.in/can-bank-recovery-agents-contact-my-employer-or-hr-about-loan-default" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Can Bank Recovery Agents Contact My Employer or HR About My Personal Loan Default?",
      "author": { "@type": "Organization", "name": "SettleLoan" },
      "publisher": { "@type": "Organization", "name": "SettleLoan" },
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Legal Protection from Workplace Harassment by Recovery Agents",
      "description": "Professional legal services to draft and send a strict cease-and-desist notice to banks and recovery agencies to stop them from contacting your employer or HR.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoan"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mohit S." },
          "datePublished": "2024-04-12",
          "reviewBody": "Recovery agents threatened to call my HR regarding my personal loan. SettleLoan sent a legal notice within 24 hours, and the threats stopped instantly. Saved my job.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul V." },
          "datePublished": "2024-03-28",
          "reviewBody": "I was terrified they would reach out to my manager on LinkedIn. The legal team handled the bank directly, and I haven't received a harassing call since.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kavita R." },
          "datePublished": "2024-02-15",
          "reviewBody": "Excellent service. The cease and desist notice was very strongly worded and forced the collection agency to back down. Highly recommend for professionals facing this issue.",
          "reviewRating": { "@type": "Rating", "ratingValue": "4.5" }
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ananya K." },
          "datePublished": "2024-01-05",
          "reviewBody": "They not only stopped the office calls but also helped me negotiate a settlement later. Very professional and fast.",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" }
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section - Height Reduced via padding adjustments */}
        <section className="w-full bg-[#2E2E2E] pt-20 pb-10 md:pt-28 md:pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Rights & Workplace Privacy
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-[#DEDEDE] mb-6 leading-[1.1] tracking-tight">
              Can Bank Recovery Agents Contact My <span className="text-[#1F5EFF]">Employer or HR</span> About My Personal Loan Default?
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/80 mb-8 max-w-3xl mx-auto leading-[1.3] font-normal">
              Understand the strict RBI guidelines protecting your workplace privacy. Stop recovery agents calling your workplace and threatening your job with a legal cease-and-desist notice.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Stop Workplace Harassment Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-xs md:text-sm text-[#747474]">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/legal-rights" className="hover:text-[#1F5EFF] transition-colors">Legal Rights</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Recovery Agents Contacting Employer</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">The Nightmare of Workplace Harassment</h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  One of the most terrifying thoughts for a white-collar professional navigating financial hardship is the prospect of a recovery agent calling their workplace. The fear of managers, colleagues, or human resources personnel finding out about a personal loan default can lead to immense stress, reputational damage, and an overarching fear of job loss. For many borrowers, the workplace is their safe haven and the sole source of income that might eventually pull them out of debt. When recovery agents threaten to breach this boundary, it is designed to cause maximum psychological distress.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Collection agencies understand this vulnerability perfectly. They know that a professional's reputation is meticulously built over years and can be shattered in seconds by a single malicious phone call to the office reception. They leverage this fear, turning your workplace into a weapon of extortion. The threat alone is often enough to push borrowers into making desperate, financially ruinous decisions, like borrowing from loan sharks or liquidating essential retirement savings just to make the phone calls stop.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  But here is the critical truth that collection agencies do not want you to know: <strong>Can a bank call my boss for a loan default? Absolutely not.</strong> Recovery agents are legally bound by strict guidelines imposed by the Reserve Bank of India (RBI) and sweeping privacy laws that categorically prohibit them from discussing your debt with third parties, including your employer or colleagues. Attempting to do so is a severe legal violation.
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="rbi-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">RBI Rules on Recovery Agents Calling Your Office</h2>
              <p className="text-lg leading-relaxed mb-6">
                The Reserve Bank of India (RBI) has laid out explicit and stringent guidelines regarding the code of conduct for recovery agents. Harassment at the workplace is a direct violation of these rules, and importantly, banks are held vicariously liable for their agents' actions. This means a bank cannot simply wipe its hands clean and blame a third-party collection agency; the bank itself is legally accountable for the harassment you face.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Under the RBI's Fair Practices Code and its repeated circulars regarding the outsourcing of financial services, the central bank has mandated that borrowers must be treated with dignity and respect. The guidelines are designed to prevent the exact scenarios where borrowers are humiliated in their social or professional circles. Collection agents must adhere to a strict protocol regarding how, when, and where they communicate with a defaulting borrower.
              </p>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Key RBI Directives Protecting Your Employment</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>No Third-Party Disclosure:</strong> Agents cannot disclose your loan details, default status, or outstanding amount to your colleagues, HR, or manager under any circumstances. Sharing your financial data with an unauthorized third party is a massive breach of banking confidentiality.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Restricted Calling Place:</strong> Calls should primarily be made to your registered phone number or residential address. Calling your office landline or professional contacts is strictly regulated and is generally only permissible if you cannot be reached elsewhere—and even then, they cannot reveal the purpose of the call to anyone who picks up.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900"><strong>Zero Intimidation:</strong> Threatening to "get you fired," "expose you to HR," or "ruin your reputation at work" constitutes illegal extortion and severe harassment. The RBI strictly prohibits the use of any verbal or physical intimidation.</span>
                  </li>
                </ul>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Furthermore, the RBI has clearly stated that recovery agents must observe strict timing windows—they are generally not allowed to call outside the hours of 8:00 AM to 7:00 PM. Calling your office line repeatedly to jam the reception desk or speaking rudely to your company’s receptionist is a tactic known as "call bombing," which is heavily penalized by regulatory authorities when reported.
              </p>
            </section>

            {/* Gray Insight Box & 4-Grid */}
            <section id="privacy-laws" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Your Right to Privacy and Defamation Risks</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed text-gray-700">
                  Beyond the regulatory guidelines set by the RBI, India's constitutional framework and strict civil laws protect you. The relationship between a borrower and a lender is fundamentally a private contract. When recovery agents call your workplace and intentionally spread information about your default, it is a deliberate attempt to defame you and coerce you into paying. This opens the door for significant civil and criminal action against both the agency and the bank itself.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                The landmark <em>Justice K.S. Puttaswamy (Retd.) vs Union of India</em> verdict by the Supreme Court affirmed that the Right to Privacy is a fundamental right guaranteed under Article 21 of the Indian Constitution. Your financial standing, loan agreements, and default status are highly sensitive personal data. Banks have a fiduciary duty to maintain the secrecy of your accounts. By outsourcing recovery to rogue agencies that leak this information to your employer, the bank actively violates your fundamental rights. 
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Defamation Claims (IPC 499/500)</h3>
                  <p className="text-gray-600 text-sm">Disclosing your financial status to your employer to intentionally lower your moral or professional standing qualifies as criminal defamation under IPC Section 499/500. It is a calculated attempt to harm your reputation.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Right to Privacy (Article 21)</h3>
                  <p className="text-gray-600 text-sm">Your financial dealings with a bank are a private contract. The Supreme Court of India upholds privacy as a fundamental, constitutionally protected right that cannot be breached by collection agencies.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Consumer Protection Act, 2019</h3>
                  <p className="text-gray-600 text-sm">Harassment, coercive tactics, and public shaming fall under unfair trade practices. This allows you to file complaints in consumer courts to seek substantial financial compensation for mental agony.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Banking Ombudsman Scheme</h3>
                  <p className="text-gray-600 text-sm">The RBI Ombudsman explicitly accepts, investigates, and penalizes banks for complaints regarding recovery agent misbehavior, ordering banks to cease harassment and compensate the victim.</p>
                </div>
              </div>
            </section>

            {/* NEW SECTION: Can You Legally Lose Your Job Over a Default? */}
            <section id="job-security" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Can You Legally Lose Your Job Over a Default?</h2>
              <p className="text-lg leading-relaxed mb-6">
                One of the most common threats employed by rogue recovery agents is: <em>"We are going to tell your HR department, and they will fire you because you are a defaulter."</em> It is crucial to dissect this threat logically and legally to eliminate the fear it causes.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In India, a personal loan default is a purely civil breach of contract. It is not a criminal offense. Unless you have committed outright fraud (like submitting fake salary slips to obtain the loan), you cannot be jailed for failing to pay an EMI, nor does it make you a criminal. Consequently, your employer has very limited legal grounds to terminate your employment simply because you owe money to a bank. Your competence as an employee is entirely detached from your personal financial liabilities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Most standard employment contracts and corporate codes of conduct do not contain clauses that allow for termination based on personal civil disputes. Terminating an employee solely because a bank called the office regarding a loan default could easily invite a lawsuit for wrongful termination under various labor laws. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                However, while the legal grounds for firing you are virtually non-existent, the practical reality is that continuous harassment of your HR department by recovery agents can create a massive nuisance for your employer. If agents continuously flood the company switchboard, use abusive language with the receptionist, or send harassing emails to company directors, it disrupts the workplace. This nuisance factor is what puts your job at risk—not the default itself. This is exactly why you must act swiftly to place a legal barrier between the recovery agents and your workplace.
              </p>
            </section>

            {/* Numbered Steps */}
            <section id="actionable-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Stop Them: 4 Actionable Steps</h2>
              <p className="text-lg leading-relaxed mb-8">
                If you are facing the threat of recovery agents calling your workplace, you must act swiftly and decisively to shut them down and protect your career. Taking a passive approach will only embolden them. Here is a comprehensive step-by-step framework to handle workplace threats.
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Record Every Threat and Gather Evidence</h3>
                    <p className="text-lg text-gray-600 mb-3">Evidence is your most powerful weapon. If an agent says they will call your boss, HR, or visit your office, record the phone call immediately. Most modern smartphones have call recording capabilities, or you can use a secondary device.</p>
                    <p className="text-lg text-gray-600">Do not engage in shouting matches. Simply state clearly: <em>"Are you threatening to call my employer and disclose my private financial details?"</em> Let them confirm it on tape. Save all WhatsApp messages, emails, Truecaller screenshots, and SMS as concrete hard evidence of their intent to violate RBI norms and defame you.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Inform HR Preemptively (If Necessary)</h3>
                    <p className="text-lg text-gray-600 mb-3">If you have a reasonable belief that the agents possess your HR's direct line or your company's board number, it may be strategic to preempt the strike. You do not need to confess your financial situation.</p>
                    <p className="text-lg text-gray-600">Consider informally warning your HR or reception that you are dealing with fraudulent scam callers, identity theft issues, or a highly contested legal dispute. Request them firmly not to entertain, transfer, or disclose any of your information to suspicious callers asking about your personal matters. Controlling the narrative protects your reputation.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">File an Official Complaint with the Nodal Officer</h3>
                    <p className="text-lg text-gray-600 mb-3">Do not complain to the customer care team—they are often powerless or simply ignore such requests. You must email the Grievance Redressal Officer (GRO) or Principal Nodal Officer of the bank immediately.</p>
                    <p className="text-lg text-gray-600">State clearly that their authorized recovery agents are violating RBI guidelines by threatening your employment and committing criminal intimidation under IPC Section 503. Demand immediate intervention and state that you will hold the bank legally liable for any damages to your career.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-black text-[#2E2E2E] mb-3">Send a Legal Cease-and-Desist Notice</h3>
                    <p className="text-lg text-gray-600">This is the absolute most powerful and effective tool available to a borrower. A formal legal notice drafted by a qualified lawyer instantly elevates the issue from a petty collection dispute to a serious legal liability for the bank. It forces the bank's legal and compliance departments to intervene and recall their rogue agents to avoid a costly, highly publicized lawsuit.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Warning Box */}
            <section id="cease-and-desist" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Sending a Legal Cease-and-Desist Notice</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4">Warning: Do Not Ignore Workplace Threats</h4>
                <p className="text-lg text-red-900">
                  Ignoring threats of workplace harassment often encourages aggressive agents to follow through. A single phone call to your HR department can jeopardize a career you've spent years building. You must draw a strict legal boundary immediately. Silence is treated as weakness by recovery agencies.
                </p>
              </div>

              <p className="text-lg leading-relaxed mb-6">
                A legal cease-and-desist notice is a formal document sent by an advocate on your behalf. It explicitly warns the bank, the NBFC, and the third-party recovery agency that any unauthorized contact with your employer, colleagues, or HR department will be treated as severe defamation, harassment, and a breach of privacy. 
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The notice outlines the specific RBI circulars, Supreme Court judgements, and Indian Penal Code sections they are violating. Most importantly, it threatens a civil lawsuit claiming massive financial damages for reputational harm and potential loss of employment if they proceed with their illegal tactics. It places the burden of compliance entirely on the bank's shoulders.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Banks and financial institutions take legal notices very seriously because they create a formal, undeniable paper trail of their non-compliance. This paper trail can later be presented to the RBI Ombudsman, Consumer Courts, or High Courts. Because the cost of defending a defamation lawsuit and the risk of regulatory fines far outweigh the value of the EMI they are trying to collect, banks will almost universally instruct the collection agency to stop the harassment tactics instantly to limit their legal exposure. It shifts the power dynamic back in your favor, allowing you peace of mind to negotiate a loan settlement on your own terms later.
              </p>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories: Stopping the Calls</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      M
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"Agents started calling my office reception asking for my manager, claiming I was absconding. It was deeply humiliating and I couldn't focus on work. I contacted SettleLoan, and their lawyers sent a strong legal notice within 24 hours. The office calls completely stopped the very next day. It was like magic."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Loan Amount: ₹12 Lakhs</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Harassment Stopped</span>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-black text-xl transition-colors">
                      R
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z"/></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"They threatened to email my CEO and HR head, attaching my loan details. I was terrified of losing my job and was ready to take another high-interest loan to pay them. The cease and desist notice forced the bank to back off immediately. We later negotiated a peaceful settlement at a fraction of the cost."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-700 rounded-full">Loan Amount: ₹8 Lakhs</span>
                    <span className="text-xs font-bold px-3 py-1 bg-green-100 text-green-700 rounded-full">Settled Amount: 35%</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-[#2E2E2E] mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Stop Workplace Harassment Instantly</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Are recovery agents calling your office and threatening your job? This is illegal extortion. Let our expert lawyers send a strict cease-and-desist notice to stop the workplace harassment immediately and permanently.
                </p>
                <Link href="/contact" className="inline-block bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-transform text-lg shadow-lg">
                  Protect Your Job Today
                </Link>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The information provided on this page is for educational and informational purposes only and does not constitute formal legal advice. Please consult with a qualified legal professional regarding your specific situation and harassment complaints.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Agents Calling Your Boss?</h3>
                <p className="text-gray-300 text-sm mb-6 relative z-10">Stop the harassment legally and protect your employment reputation.</p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors relative z-10">
                  Send Legal Notice
                </Link>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Legal Resources</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/rbi-guidelines-for-loan-recovery-agents" className="flex items-center text-sm text-gray-600 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-deal-with-loan-recovery-agents" className="flex items-center text-sm text-gray-600 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Dealing with Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/personal-loan-settlement-process" className="flex items-center text-sm text-gray-600 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Settle Your Loan Legally
                    </Link>
                  </li>
                  <li>
                    <Link href="/defamation-by-recovery-agents" className="flex items-center text-sm text-gray-600 hover:text-[#1F5EFF] group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing Defamation Cases
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
