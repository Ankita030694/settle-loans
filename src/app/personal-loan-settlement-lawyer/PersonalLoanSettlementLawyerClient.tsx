'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const tableOfContents = [
  { id: 'why-need-lawyer', title: 'Why Do You Need a Personal Loan Settlement Lawyer?' },
  { id: 'stop-harassment', title: 'How Can an Advocate Stop Recovery Harassment?' },
  { id: 'fake-notices', title: 'Protection Against Fake Arbitration & Lok Adalat Notices' },
  { id: 'negotiation-process', title: 'The Process of Negotiating a Settlement' },
  { id: 'rbi-guidelines', title: 'Your Rights Under RBI Guidelines' },
  { id: 'legal-notice-response', title: 'Responding to a Legal Notice for Default' },
  { id: 'cost-benefit', title: 'Cost-Benefit: Lawyer vs. Direct Negotiation' },
  { id: 'choosing-lawyer', title: 'Choosing the Right Settlement Advocate' },
];

const faqs = [
  { question: "Is it legal to settle a personal loan in India?", answer: "Yes, it is entirely legal. Loan settlement is a mutual agreement between the borrower and the bank/NBFC where the lender agrees to accept a lesser amount than what is owed, usually due to the borrower's genuine financial hardship." },
  { question: "Will hiring a lawyer stop recovery agents from harassing me?", answer: "Yes. A lawyer can send a formal 'cease and desist' legal notice to the bank and its recovery agents. Under RBI guidelines, banks must communicate respectfully. If harassment continues, a lawyer can file a police complaint for criminal intimidation or approach the Banking Ombudsman." },
  { question: "How much can a lawyer reduce my personal loan amount?", answer: "While outcomes vary based on individual circumstances and the bank's policies, a skilled settlement lawyer can often negotiate a waiver of 30% to 70% on the outstanding principal, entirely waiving off the late payment penalties and penal interest." },
  { question: "What happens if I ignore a legal notice from the bank?", answer: "Ignoring a legal notice is highly inadvisable. It can lead to ex-parte orders where the court or arbitrator rules in favor of the bank without hearing your side. Always consult a lawyer to draft and send a proper reply within the stipulated time." },
  { question: "Can a bank file a criminal case for a personal loan default?", answer: "A simple failure to repay a loan is a civil breach of contract, not a criminal offense. However, if you issued a security cheque that bounced, the bank can file a criminal case under Section 138 of the Negotiable Instruments Act. A lawyer is crucial in defending such cases." },
  { question: "Does a loan settlement affect my CIBIL score?", answer: "Yes. When a loan is settled for less than the due amount, the bank reports it as 'Settled' rather than 'Closed' to credit bureaus, which negatively impacts your CIBIL score. A lawyer can sometimes negotiate to have it reported as 'Closed', though this is difficult." },
  { question: "What is a fake arbitration notice?", answer: "Recovery agencies often send documents formatted to look like official court summons or arbitration notices to scare borrowers. These are illegal. A lawyer can verify the authenticity of any notice and take action against the agency for forgery and coercion." },
  { question: "Can a lawyer represent me in a Lok Adalat?", answer: "Yes. Lok Adalats are alternative dispute resolution forums. If you receive a Lok Adalat notice, an advocate can represent you, present your hardship, and negotiate a favorable settlement without you having to face the bank's legal team alone." },
  { question: "How long does the loan settlement process take?", answer: "The process usually takes between 3 to 6 months. It involves halting the harassment, establishing communication, presenting financial hardship proofs, and multiple rounds of negotiation before reaching a final, documented settlement." },
  { question: "What is a No Objection Certificate (NOC) and why is it important?", answer: "An NOC or 'No Dues Certificate' is the official document from the bank confirming that your loan account is closed and they have no further claims against you. Your lawyer ensures you receive a valid NOC after the settlement amount is paid." }
];

export default function PersonalLoanSettlementLawyerClient() {
  const [activeSection, setActiveSection] = useState(tableOfContents[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full bg-white">
      {/* Dark Hero Section */}
      <section className="w-full bg-[#30333A] text-white pt-16 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-white mb-6 tracking-wide uppercase border border-white/20 shadow-sm">
            Legal Protection & Debt Settlement
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white">
            Hire a Personal Loan Settlement Lawyer to <span className="text-[#2D68FF] bg-clip-text">Stop Harassment</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-10 leading-relaxed font-medium">
            Are recovery agents crossing the line? Have you received a legal notice for defaulting on your personal loan? Protect your rights, stop the harassment instantly, and negotiate a favorable settlement with the help of specialized debt relief advocates in India.
          </p>
          <button className="bg-[#2D68FF] hover:bg-blue-600 transition-colors text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg shadow-blue-500/30">
            Consult a Lawyer Today
          </button>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="w-full border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 mb-1">100CR+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Amount Recovered</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 mb-1">10,000+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Cases Handled</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className="text-3xl font-black text-[#2D68FF]">4.7</span>
                <div className="flex bg-white rounded-full p-0.5 shadow-[0_0_2px_rgba(0,0,0,0.2)]">
                  <svg className="w-5 h-5 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
              </div>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Google Rating</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-black text-slate-900 mb-1">15,000+</span>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Customers Counselled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout Grid */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 pt-8 pb-16">
        
        {/* Breadcrumbs */}
        <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#2D68FF] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#2D68FF] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Personal Loan Settlement Lawyer</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_290px] gap-8 items-start">
          
          {/* Left Sidebar - Table of Contents */}
          <aside className="hidden lg:block sticky top-8">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Table of Contents</div>
              <nav className="flex flex-col space-y-3">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className={`text-left text-sm font-medium transition-colors leading-snug ${
                      activeSection === item.id 
                        ? 'text-[#2D68FF]' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Middle Column - Main Article */}
          <article className="min-w-0">
            {/* Author Byline */}
            <div className="flex items-center justify-between py-4 border-b border-slate-100 mb-8">
              <Link href="/authors/ashish-jhangra" className="flex items-center group">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden mr-4">
                  {/* Placeholder for author image */}
                  <div className="w-full h-full bg-[#2D68FF]/10 flex items-center justify-center text-[#2D68FF] font-bold text-xl">AJ</div>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors">Ashish Jhangra</p>
                  <p className="text-xs font-medium text-slate-500">Legal Debt Relief Expert &bull; Updated Recently</p>
                </div>
              </Link>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">SHARE:</span>
                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-lawyer&text=Hire+a+Personal+Loan+Settlement+Lawyer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-lawyer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-lawyer&title=Hire+a+Personal+Loan+Settlement+Lawyer" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>

            {/* Quick Answer Block */}
            <div className="bg-[#F8F9FA] rounded-r-xl border-l-[6px] border-[#2D68FF] p-6 mb-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg className="w-24 h-24 text-[#2D68FF]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5L3.8 6 12 2.3 20.2 6 12 9.5zM2 17l10 5 10-5v-5.5l-10 5-10-5V17z"/></svg>
              </div>
              <div className="text-xl font-bold text-slate-900 mb-3 flex items-center relative z-10">
                <svg className="w-6 h-6 text-[#2D68FF] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Quick Answer: Why Hire a Settlement Lawyer?
              </div>
              <p className="text-slate-700 font-medium leading-relaxed relative z-10 text-[15px]">
                If you are facing severe harassment from bank recovery agents or have received a legal notice (like an arbitration or Lok Adalat summons) for a personal loan default, a specialized loan settlement lawyer acts as your primary legal shield. They take over all communications with the bank, halt the illegal intimidation tactics using RBI guidelines, and negotiate a formal settlement to close your loan for a fraction of the original outstanding amount, completely protecting you from the psychological distress of debt recovery.
              </p>
            </div>

            <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose prose-a:text-[#2D68FF] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900">
              
              <h2 id="why-need-lawyer" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Why Do You Need a Personal Loan Settlement Lawyer in India?
              </h2>
              <p>
                Falling into the debt trap of an unsecured personal loan can be an overwhelming experience. Unlike secured loans (such as home or auto loans) where the bank has collateral to seize, an unsecured personal loan gives the bank no direct asset to recover its losses. As a result, banks and Non-Banking Financial Companies (NBFCs) often resort to high-pressure, aggressive, and sometimes illegal recovery tactics to force borrowers into submission. 
              </p>
              <p>
                The power dynamic is incredibly skewed. On one side, you have massive financial institutions with armies of legal advisors, call centers, and third-party recovery agencies. On the other side, you have an individual borrower who is already suffering from genuine financial hardship—perhaps due to a medical emergency, job loss, or business failure. This is exactly where a <strong>Personal Loan Settlement Lawyer</strong> steps in to level the playing field.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 my-8 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 mt-0">A dedicated advocate will immediately provide:</h3>
                <ul className="space-y-3 m-0 pl-0 list-none">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D68FF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-slate-700"><strong>A Legal Buffer:</strong> All communication from the bank goes through your legal counsel, shielding you from direct abuse.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D68FF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-slate-700"><strong>Protection of Rights:</strong> Ensuring that banks strictly adhere to the Fair Practices Code mandated by the Reserve Bank of India (RBI).</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-[#2D68FF] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <span className="text-slate-700"><strong>Negotiation Power:</strong> Leveraging legal knowledge to negotiate a One Time Settlement (OTS) that strips away exorbitant penal interest and late fees.</span>
                  </li>
                </ul>
              </div>

              {/* Full Width Infographic */}
              <div className="my-12 relative w-full">
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img 
                    src="/images/infographics/personal-loan-settlement-lawyer.jpg" 
                    alt="Infographic detailing the legal debt settlement process" 
                    className="w-full h-auto object-cover object-center m-0"
                  />
                </div>
              </div>

              <h2 id="stop-harassment" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                How Can an Advocate Stop Bank Recovery Harassment?
              </h2>
              <p>
                One of the most terrifying aspects of defaulting on a personal loan in India is dealing with third-party recovery agents. These agents are often incentivized based on the amount they collect, leading to severe behavioral breaches, including verbal abuse, calling at odd hours, visiting workplaces, and harassing family members.
              </p>
              <p>
                A qualified advocate utilizes several legal tools to bring an immediate halt to this harassment:
              </p>
              
              <div className="space-y-6 my-8">
                <div className="flex">
                  <div className="w-10 h-10 bg-[#2D68FF] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-4 shadow-md shadow-blue-500/20">1</div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">Sending a Formal Cease & Desist Notice</h3>
                    <p className="text-slate-600 m-0">The lawyer drafts a robust legal notice addressed to the bank's grievance redressal officer and the branch manager, officially documenting the harassment and demanding an immediate cessation of all illegal recovery activities, citing specific RBI regulations.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 bg-[#2D68FF] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-4 shadow-md shadow-blue-500/20">2</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">Filing a Police Complaint for Criminal Intimidation</h4>
                    <p className="text-slate-600 m-0">If recovery agents cross the line into physical threats, defamation, or severe mental harassment, the lawyer can help you file an FIR under Sections 503 (Criminal Intimidation) and 506 of the Indian Penal Code against the agents and the bank officials.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-10 h-10 bg-[#2D68FF] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mr-4 shadow-md shadow-blue-500/20">3</div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mt-1 mb-2">Approaching the Banking Ombudsman</h4>
                    <p className="text-slate-600 m-0">If the bank fails to respond to the legal notice within 30 days, your advocate will escalate the matter to the RBI Banking Ombudsman, providing evidence of the harassment. The RBI takes a very strict view of banks that violate their fair recovery guidelines.</p>
                  </div>
                </div>
              </div>

              <h2 id="fake-notices" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Legal Protection Against Fake Arbitration and Lok Adalat Notices
              </h2>
              <p>
                A very common, yet highly illegal, tactic used by rogue collection agencies is sending forged legal documents. Borrowers often receive documents titled <em>"Warrant of Arrest,"</em> <em>"Final Arbitration Summons,"</em> or <em>"Lok Adalat Notice"</em> formatted with fake seals and stamps that look like official court documents.
              </p>
              <p>
                When you hire a settlement lawyer, the first thing they do is verify the authenticity of any legal notice you receive. 
              </p>
              <ul>
                <li><strong>Arbitration Notices:</strong> Unless you have explicitly agreed to arbitration in your loan agreement, and the arbitrator is an independent third party, arbitration notices sent arbitrarily by recovery agencies hold no legal weight. A lawyer will draft a strong rebuttal challenging the jurisdiction of the biased arbitrator.</li>
                <li><strong>Lok Adalat Summons:</strong> Lok Adalats are meant for amicable, voluntary settlement. You cannot be forced or arrested for not attending a Lok Adalat. Your advocate can either represent you at the Lok Adalat to negotiate a fair deal or legally decline the summons if the terms are not favorable.</li>
              </ul>

              <h2 id="negotiation-process" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                The Process of Negotiating a Settlement Through a Lawyer
              </h2>
              <p>
                Negotiating a loan settlement is not about simply asking the bank for a discount. It requires establishing genuine financial hardship and presenting a compelling legal and financial argument as to why the bank should accept a lesser amount rather than pursue expensive and prolonged litigation.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 my-8">
                <h3 className="font-bold text-slate-900 text-lg mb-4 mt-0">The 4-Step Legal Settlement Workflow:</h3>
                <ol className="space-y-4 m-0 pl-4 text-slate-700">
                  <li><strong>Financial Evaluation & Hardship Profiling:</strong> The lawyer analyzes your outstanding statements, income loss proofs, medical bills, or business failure documents to build a solid "hardship profile".</li>
                  <li><strong>The Hardship Proposal Letter:</strong> A legally drafted letter is sent to the bank's recovery head, proposing a One Time Settlement (OTS). This letter highlights that pursuing legal action against you would yield nothing as you are practically insolvent, making a settlement the most pragmatic choice for the bank.</li>
                  <li><strong>Aggressive Back-and-Forth Negotiation:</strong> The bank will initially reject or counter-offer. Your lawyer handles these negotiations, ensuring that all late fees, penal interest, and processing charges are completely stripped from the final settlement figure.</li>
                  <li><strong>Securing the Settlement Letter & NOC:</strong> Crucially, no payment is made until the bank issues a formal, written settlement agreement on their letterhead. Once the agreed amount is paid, the lawyer ensures the bank issues a legally binding No Objection Certificate (NOC) and closes the loan account.</li>
                </ol>
              </div>

              <h2 id="rbi-guidelines" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Understanding Your Rights Under RBI Guidelines
              </h2>
              <p>
                The Reserve Bank of India (RBI) has laid down strict guidelines for banks and NBFCs regarding the recovery of dues. A knowledgeable lawyer uses these guidelines as the foundation of your defense:
              </p>
              <ul>
                <li><strong>Right to Privacy:</strong> Recovery agents cannot discuss your debt with your employer, neighbors, or extended family members. Doing so is a gross violation of your privacy and actionable in a court of law.</li>
                <li><strong>Right to Dignified Treatment:</strong> The use of abusive language, physical threats, or muscle-men (bouncers) is strictly prohibited.</li>
                <li><strong>Restricted Calling Hours:</strong> Calls for recovery can only be made between 08:00 AM and 07:00 PM.</li>
                <li><strong>The SARFAESI Act Does NOT Apply to Personal Loans:</strong> Often, agents threaten borrowers with the SARFAESI Act, claiming they will seize property. Your lawyer will remind you (and the bank) that the SARFAESI Act 2002 applies <em>only</em> to secured loans, not unsecured personal loans or credit cards.</li>
              </ul>

              <h2 id="legal-notice-response" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Steps to Take if You Receive a Legal Notice for Loan Default
              </h2>
              <p>
                If a bank serves you with a legitimate legal notice for defaulting on a personal loan, time is of the essence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border-2 border-red-100 rounded-xl p-5">
                  <h3 className="text-red-600 font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    What NOT to do
                  </h3>
                  <ul className="text-sm m-0 pl-4 space-y-2 text-slate-600">
                    <li>Do not ignore the notice hoping it goes away.</li>
                    <li>Do not panic and make partial payments without a written settlement agreement.</li>
                    <li>Do not avoid court summons if one is officially served.</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-green-100 rounded-xl p-5">
                  <h4 className="text-green-600 font-bold mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    What YOU SHOULD do
                  </h4>
                  <ul className="text-sm m-0 pl-4 space-y-2 text-slate-600">
                    <li>Contact a loan settlement lawyer immediately.</li>
                    <li>Gather all loan documents, statements, and evidence of financial hardship.</li>
                    <li>Ensure your lawyer drafts and dispatches a comprehensive reply within the stipulated time limit (usually 14 or 30 days).</li>
                  </ul>
                </div>
              </div>

              <h2 id="cost-benefit" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Cost-Benefit Analysis: Hiring a Lawyer vs. Dealing with Banks Directly
              </h2>
              <p>
                Many borrowers hesitate to hire legal counsel because they fear the fees. However, when dealing with a massive financial burden, navigating the system without a professional often proves vastly more expensive.
              </p>
              <p>
                When you deal directly with the bank, their primary objective is to extract the maximum possible amount from you. Conversely, a lawyer acts as a protective barrier. While there is a professional fee involved in hiring an advocate, this cost is almost always dramatically offset by the massive reduction in the settlement amount they negotiate for you.
              </p>
              
              <div className="overflow-x-auto my-10 border border-slate-200 rounded-xl not-prose">
                <table className="w-full text-sm text-left border-collapse m-0">
                  <thead className="bg-[#F8F9FA] text-slate-700 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-5 font-bold border-b border-slate-200">Comparison Factor</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">Hiring a Lawyer</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">Dealing Directly with Banks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Harassment Protection</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Immediate stop via Cease & Desist legal notice.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Continuous harassment from multiple recovery agencies.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Settlement Amount</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Negotiated reduction up to 50-70% based on legal leverage.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Banks push for full payment plus late fees.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Legal Protection</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Defense against fake notices and Section 138 cases.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Vulnerable to fake arbitration and intimidation tactics.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Overall Cost</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Legal fees are vastly offset by the principal amount saved.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Often results in paying full amount or accepting bad restructuring.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="choosing-lawyer" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                What to Look for When Choosing a Loan Settlement Advocate
              </h2>
              <p>
                Not all lawyers specialize in banking and debt resolution. When selecting an advocate to represent you in a personal loan dispute, look for the following criteria:
              </p>
              <ul>
                <li><strong>Specialization in Debt Relief:</strong> They should have a proven track record specifically in negotiating unsecured debt and dealing with Indian banks/NBFCs.</li>
                <li><strong>Knowledge of RBI Circulars:</strong> A deep understanding of RBI's Fair Practices Code and recent ombudsman rulings is essential.</li>
                <li><strong>Transparent Fee Structure:</strong> Ensure the lawyer operates on a clear fee structure, with no hidden costs. Avoid agencies that demand a large percentage of the "saved amount" without transparency.</li>
                <li><strong>Clear Communication:</strong> Your lawyer should be accessible and willing to explain the legal jargon to you, keeping you updated at every step of the negotiation process.</li>
              </ul>
              
              <p className="mt-8 font-semibold text-slate-900">
                Facing severe financial distress is not a crime. You have legal rights, and you deserve to be treated with dignity. If you are struggling to manage your personal loan debt and are facing harassment, seeking professional legal counsel is the smartest and safest step toward regaining control of your financial life.
              </p>

            </div>

            {/* FAQs Section */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                    >
                      <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-[#2D68FF] transform transition-transform duration-200 flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* References Section */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
                Legal References & Citations
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>1. Reserve Bank of India (RBI) - <a href="https://m.rbi.org.in/Scripts/FAQView.aspx?Id=86" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D68FF] hover:underline">Guidelines on Fair Practices Code for NBFCs</a></li>
                <li>2. RBI Circular on Recovery Agents - <a href="https://rbi.org.in/scripts/NotificationUser.aspx?Id=4124&Mode=0" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D68FF] hover:underline">Engagement of Recovery Agents by Banks</a></li>
                <li>3. The Negotiable Instruments Act, 1881 - <a href="https://legislative.gov.in/sites/default/files/A1881-26.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#2D68FF] hover:underline">Section 138 (Dishonour of cheque)</a></li>
                <li>4. Indian Penal Code, 1860 - Sections 503 & 506 (Criminal Intimidation)</li>
              </ul>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="sticky top-8 hidden xl:flex flex-col space-y-6">
            
            {/* Dark CTA Box */}
            <div className="bg-[#30333A] rounded-2xl p-6 shadow-xl border border-slate-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
              <div className="text-xl font-bold text-white mb-3">Stop Recovery Harassment Today</div>
              <p className="text-slate-300 text-sm mb-6 font-medium">
                Our expert lawyers will draft a legal notice and negotiate with the bank to settle your personal loan at a fraction of the cost.
              </p>
              <button className="w-full bg-[#2D68FF] hover:bg-blue-600 transition-colors text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center">
                Get Legal Help
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <div className="mt-4 flex items-center justify-center text-xs text-slate-400 font-medium">
                <svg className="w-4 h-4 mr-1.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                100% Confidential Consultation
              </div>
            </div>

            {/* Client Reviews Block */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="ml-2 font-bold text-slate-900">4.8/5</span>
              </div>
              <p className="text-sm text-slate-600 italic mb-4 leading-relaxed">
                "I was receiving 50 calls a day from recovery agents threatening me over a 4 lakh personal loan. The lawyer from SettleLoans stepped in, sent a legal notice, and the calls stopped entirely in 48 hours. They eventually settled my loan for just 1.5 lakhs. Life savers!"
              </p>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 mr-3 flex items-center justify-center text-slate-500 font-bold text-xs">RM</div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Rahul M.</p>
                  <p className="text-[10px] text-green-600 font-bold uppercase flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    Verified Client
                  </p>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Footer Area - More Guides & About Box */}
      <section className="w-full bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b-2 border-slate-200 pb-4">More Debt Relief Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <Link href="/credit-card-partial-payment" className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#2D68FF]/30 transition-all">
                <h3 className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors mb-2 text-lg">Credit Card Partial Payments</h3>
                <p className="text-sm text-slate-500 line-clamp-2">Understand the hidden traps of making partial payments on credit card debt and how it affects your overall liability.</p>
              </Link>
              
              <Link href="/bank-recovery-harassment-complaint" className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#2D68FF]/30 transition-all">
                <h3 className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors mb-2 text-lg">Bank Recovery Harassment Complaint</h3>
                <p className="text-sm text-slate-500 line-clamp-2">Step-by-step guide on how to file an official complaint against abusive loan recovery agents with the RBI and Police.</p>
              </Link>
              
              <Link href="/legal-notice-for-loan-recovery" className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#2D68FF]/30 transition-all">
                <h3 className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors mb-2 text-lg">Reply to Legal Notice</h3>
                <p className="text-sm text-slate-500 line-clamp-2">Received a legal notice from the bank? Learn how a lawyer drafts a strong legal rebuttal to protect your rights.</p>
              </Link>

            </div>
          </div>

          <div className="bg-[#30333A] rounded-[32px] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-xl">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl font-bold text-white mb-4">About SettleLoans</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                SettleLoans is India's premier debt relief and legal advisory platform. We connect distressed borrowers with top-tier financial advocates who specialize in negotiating loan settlements, stopping recovery harassment, and defending against unfair banking practices under RBI guidelines. Don't fight the banks alone; let our legal experts protect you.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link href="/legal-notice-for-loan-recovery" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
                  Legal Notices
                </Link>
                <Link href="/how-to-stop-loan-recovery-harassment" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
                  Stop Harassment
                </Link>
                <Link href="/personal-loan-settlement-services" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-colors">
                  Settlement Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <div className="w-32 h-32 bg-gradient-to-br from-[#2D68FF] to-blue-800 rounded-full flex items-center justify-center border-4 border-[#30333A] shadow-2xl relative">
                 <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
