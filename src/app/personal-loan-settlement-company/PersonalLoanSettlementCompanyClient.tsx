"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PersonalLoanSettlementCompanyClient() {
  const [activeSection, setActiveSection] = useState("understanding-settlement");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "understanding-settlement",
        "how-they-operate",
        "identifying-legitimate-companies",
        "fee-structures-explained",
        "step-by-step-selection",
        "legal-and-credit-impact",
        "alternatives-to-settlement",
        "diy-vs-professional",
        "faqs"
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 font-sans text-slate-800">

      {/* Dark Hero Section - Matching the Reference Theme */}
      <section className="bg-[#30333A] text-white pt-32 pb-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center">
          <div className="rounded-full px-5 py-1.5 mb-8 text-[11px] font-bold tracking-[0.15em] text-[#4F85F6] uppercase bg-[#253556]/80">
            DEBT RESOLUTION & FINANCIAL FREEDOM
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-7 text-[#F8FAFC] leading-[1.1]">
            Finding the Best Personal <br/>
            Loan Settlement Company
          </h1>
          <p className="text-[17px] md:text-[19px] text-slate-300/90 mb-10 max-w-[850px] leading-relaxed font-normal">
            An exhaustive, expertly-researched guide to navigating the debt relief industry. Learn how to identify trustworthy partners, understand complex fee structures, recognize red flags, and safely eliminate your unsecured personal loan debt in India.
          </p>
          <button className="bg-[#2D68FF] hover:bg-blue-600 text-white font-semibold py-3.5 px-10 rounded-lg transition-colors text-[15px] shadow-sm">
            Get Your Free Debt Analysis
          </button>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-slate-100">
            <div className="px-4">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">100CR+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">AMOUNT RECOVERED</p>
            </div>
            <div className="px-4">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">10,000+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">CASES HANDLED</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-1.5">
                <p className="text-2xl md:text-3xl font-bold text-slate-900">4.7</p>
                <div className="flex bg-white rounded-full p-0.5 shadow-[0_0_2px_rgba(0,0,0,0.2)]">
                  <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                </div>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">GOOGLE RATING</p>
            </div>
            <div className="px-4">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">15,000+</p>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">CUSTOMERS COUNSELLED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 pt-8">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link> <span className="mx-2 text-slate-300">/</span>
          <Link href="/personal-loan-settlement-services" className="hover:text-slate-900 transition-colors">Debt Settlement Services</Link> <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Best Settlement Company Guide</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_290px] gap-8 items-start">
          
          {/* Left Column (Sticky TOC) */}
          <aside className="hidden lg:block sticky top-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-6">TABLE OF CONTENTS</div>
              <ul className="space-y-5 text-[13px] font-bold text-slate-400">
                <li>
                  <a href="#understanding-settlement" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'understanding-settlement' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    1. Understanding the Industry
                  </a>
                </li>
                <li>
                  <a href="#how-they-operate" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'how-they-operate' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    2. How Top Companies Operate
                  </a>
                </li>
                <li>
                  <a href="#identifying-legitimate-companies" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'identifying-legitimate-companies' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    3. Identifying Legitimacy & Red Flags
                  </a>
                </li>
                <li>
                  <a href="#fee-structures-explained" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'fee-structures-explained' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    4. Demystifying Fee Structures
                  </a>
                </li>
                <li>
                  <a href="#step-by-step-selection" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'step-by-step-selection' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    5. Step-by-Step Selection Guide
                  </a>
                </li>
                <li>
                  <a href="#legal-and-credit-impact" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'legal-and-credit-impact' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    6. Legal Ramifications & CIBIL Impact
                  </a>
                </li>
                <li>
                  <a href="#alternatives-to-settlement" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'alternatives-to-settlement' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    7. Alternatives to Settlement
                  </a>
                </li>
                <li>
                  <a href="#diy-vs-professional" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'diy-vs-professional' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    8. DIY vs Professional Agencies
                  </a>
                </li>
                <li>
                  <a href="#faqs" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'faqs' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    9. Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Middle Column (Main Content) */}
          <main className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10 shadow-sm">
            
            {/* Author Byline & Social Share */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 text-sm border-b border-slate-100 pb-6">
              <div className="text-slate-500 font-medium leading-relaxed">
                Written by <Link href="/authors/ashish-jhangra" className="text-[#2D68FF] font-bold hover:underline">Ashish Jhangra</Link> <span className="mx-2 font-normal">•</span><br className="sm:hidden" />
                Reviewed by <span className="text-slate-700 font-bold">Team SettleLoans</span> <span className="mx-2 font-normal">•</span> Last updated: August 17, 2026
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[11px] font-extrabold text-slate-400 tracking-widest uppercase">SHARE:</span>
                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-company&text=Best+Personal+Loan+Settlement+Company" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-company" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-company&title=Best+Personal+Loan+Settlement+Company" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>

            {/* Quick Answer Block */}
            <div id="quick-answer" className="bg-[#F8F9FA] rounded-xl p-8 mb-12 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2D68FF]"></div>
              <div className="text-xs font-extrabold text-slate-800 tracking-widest uppercase mb-4 pl-1">QUICK ANSWER</div>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium pl-1">
                The best personal loan settlement company in India is one that strictly avoids charging illegal upfront costs, features legal representation by Bar Council registered advocates, and maintains complete transparency regarding CIBIL score impacts. A legitimate agency will step in as your legal representative, halt recovery agent harassment by citing RBI guidelines, establish an escrow mechanism, and secure a settlement that can waive up to 50% or more of your outstanding balance with an official No Objection Certificate (NOC).
              </p>
            </div>

            <article className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose">
              
              <h2 id="understanding-settlement" className="scroll-mt-32 mt-0 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                1. Understanding the Debt Settlement Industry
              </h2>
              <p>
                Defaulting on unsecured debt, such as personal loans and credit cards, often plunges borrowers into a terrifying cycle of compounding interest and aggressive recovery tactics. Banks and NBFCs deploy relentless collection departments designed to pressure you into paying. In these scenarios, debt settlement emerges as a practical alternative: negotiating a single lump-sum payment that is significantly less than the total outstanding balance, allowing you to close the account forever. However, the Indian debt relief industry includes both genuine legal advocates and fraudulent operators, making the choice of the right settlement firm a critical decision.
              </p>
              <p>
                The core principle of debt settlement relies on leverage. When a loan becomes a Non-Performing Asset (NPA), the bank recognizes the high risk of a total loss or the exorbitant cost of civil litigation. A professional settlement firm, backed by legal expertise, leverages this reality to negotiate waivers on penalties, interest, and even a large portion of the principal.
              </p>

              <h2 id="how-they-operate" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                2. How Top Companies Operate
              </h2>
              <p>
                A top-tier settlement agency acts as your legal shield. When you sign a Power of Attorney (POA) or authorization letter with a reputable firm, a highly structured process begins to isolate you from harassment and build the capital required to secure your settlement.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 not-prose">
                <ul className="space-y-6 text-[15px] text-slate-700 m-0 p-0 list-none">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Legal Intervention & Shielding:</strong> Expert agencies immediately issue cease-and-desist notices to lenders, enforcing RBI’s Fair Practices Code and stopping illegal recovery agent harassment.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">The Escrow Mechanism:</strong> Instead of paying the bank directly, you deposit a manageable monthly amount into a secure, RBI-compliant escrow or trust account that you control to build your settlement fund.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Strategic Defaulting:</strong> While it sounds risky, prolonged non-payment forces the loan into NPA status, which is exactly when banks become open to heavy settlement negotiations.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Aggressive Negotiation:</strong> Once sufficient funds accumulate in your escrow, the agency formally approaches the creditor’s settlement department to strike a heavily discounted deal.</p>
                  </li>
                </ul>
              </div>

              {/* Full Width Infographic */}
              <div className="my-12 relative w-[calc(100%+4rem)] -ml-8 px-4 sm:w-[calc(100%+5rem)] sm:-ml-10 sm:px-0">
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img 
                    src="/images/infographics/best-personal-loan-settlement-company.jpg" 
                    alt="Infographic detailing how to choose the best personal loan settlement company" 
                    className="w-full h-auto object-cover object-center m-0"
                  />
                </div>
              </div>

              <h2 id="identifying-legitimate-companies" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                3. Identifying Legitimacy & Red Flags
              </h2>
              <p>
                The Reserve Bank of India (RBI) and the Banking Ombudsman continuously warn consumers about fraudulent debt relief schemes. Identifying a legitimate agency requires evaluating their legal grounding and fee transparency.
              </p>
              <p>
                <strong>The Ultimate Red Flag: Illegal Upfront Fees.</strong> According to prevailing consumer protection standards and fair practice laws, it is highly unethical for a debt settlement firm to demand a massive upfront fee before rendering any concrete negotiation service. While small legal drafting fees (for sending notices) are acceptable, any company demanding lakhs of rupees before reaching a settlement with the bank is likely a scam.
              </p>
              
              <div className="overflow-x-auto my-10 border border-slate-200 rounded-xl not-prose">
                <table className="w-full text-sm text-left border-collapse m-0">
                  <thead className="bg-[#F8F9FA] text-slate-700 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-5 font-bold border-b border-slate-200">Indicator</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">Legitimate Companies</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">Predatory Scams</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Fee Structure</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Performance-based success fee upon closure.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Demands large upfront fees or monthly retainers.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Guarantees</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">No guarantees. Explains the risk of litigation realistically.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Promises a specific settlement percentage unconditionally.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Credit Impact</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Clearly discloses severe negative impact on CIBIL.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Claims the process won't hurt your CIBIL or will "repair" it.</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Communication</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Sends formal legal notices to banks to handle communications.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Tells you to simply change your SIM card and hide.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="fee-structures-explained" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                4. Demystifying Fee Structures
              </h2>
              <p>
                When you hire a settlement company, their compensation must be completely transparent in the Service Agreement. The standard model operates on a contingency or success fee basis. This is typically calculated in one of two ways:
              </p>
              <ol className="ml-0 pl-0">
                <li><strong>Percentage of Enrolled Debt:</strong> The agency charges a flat percentage (usually between 10% to 15%) of the total outstanding loan amount at the time of enrollment.</li>
                <li><strong>Percentage of Debt Saved:</strong> The agency charges a higher percentage (often around 20% to 30%) but strictly calculated on the amount they save you. For instance, if a ₹5,00,000 debt is settled for ₹2,00,000, the fee applies to the ₹3,00,000 they saved you.</li>
              </ol>
              <p>
                While these fees are significant, they are vastly outweighed by the savings achieved by waiving off compounding interest, bounce charges, and penal interest that accumulate daily on a defaulted loan.
              </p>

              <h2 id="step-by-step-selection" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                5. Step-by-Step Selection Guide
              </h2>
              <p>
                Partnering with the right firm ensures that you get out of debt faster, with your legal rights fully protected.
              </p>

              <div className="space-y-8 my-10 not-prose">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">1</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Verify Legal Representation</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Ensure the company utilizes advocates registered with the Bar Council of India (BCI) who can legally draft and serve notices on your behalf.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">2</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Scrutinize Online Reviews Thoroughly</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Look beyond Google ratings. Search consumer forums for unbiased accounts to see how the company responds to complicated litigation or aggressive banks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">3</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Assess the Escrow Setup</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">The funds you save monthly must be stored in a dedicated, RBI-regulated nodal account or trust that the settlement firm cannot access without your signature.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">4</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Demand a Thorough Contract Review</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Read the fine print. Ensure that the agreement clearly states that fees are only owed upon the successful generation of a No Objection Certificate (NOC) from the bank.</p>
                  </div>
                </div>
              </div>

              <h2 id="legal-and-credit-impact" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                6. Legal Ramifications & CIBIL Impact
              </h2>
              <p>
                You must enter the settlement process fully aware of the consequences. Settling a loan implies that you did not fulfill the original terms of the contract. Once a settlement is executed and the NOC is issued, the lender will report the account to credit bureaus (like CIBIL, Experian, Equifax) as "Settled" or "Post Write-off Settled." 
              </p>
              <p>
                This status severely drops your credit score and will act as a major red flag for future lenders for up to seven years. However, a "Settled" status is vastly preferable to an open, unpaid "NPA" or "Written-off" status, which permanently locks you out of the financial system and carries the constant threat of civil lawsuits or Section 138 cheque bounce cases.
              </p>

              <h2 id="alternatives-to-settlement" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                7. Alternatives to Settlement
              </h2>
              <p>
                Debt settlement is a drastic step designed for severe financial hardship. Consider these alternatives first:
              </p>
              <ul>
                <li><strong>Loan Restructuring:</strong> Approaching the bank directly to ask for an extended tenure or a lower interest rate. This keeps your CIBIL intact but rarely reduces the principal balance.</li>
                <li><strong>Debt Consolidation Loans:</strong> Taking a single, lower-interest loan to pay off multiple high-interest credit cards and personal loans, streamlining your EMIs into one payment.</li>
                <li><strong>Insolvency & Bankruptcy:</strong> Under the Insolvency and Bankruptcy Code (IBC) in India, individuals with zero capacity to pay can file for insolvency, legally wiping out unsecured debts, though it completely destroys creditworthiness for years.</li>
              </ul>

              <h2 id="diy-vs-professional" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                8. DIY vs Professional Agencies
              </h2>
              <p>
                Many consumers consider negotiating with banks directly to save on agency fees. DIY settlement is entirely legal. If you possess excellent negotiation skills, understand banking terminology, and have the emotional resilience to endure abusive recovery agents, you can settle on your own.
              </p>
              <p>
                However, banks train their recovery managers to extract maximum money. A professional advocate possesses institutional leverage—they know exactly when a bank’s internal cost-benefit analysis favors a 50% write-off versus a drawn-out civil suit. Furthermore, hiring an agency immediately provides a legal buffer, forcing the bank to route all communications through your lawyer, instantly ending the harassment.
              </p>

              <h2 id="faqs" className="scroll-mt-32 mt-16 mb-8 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                9. Frequently Asked Questions
              </h2>
              <div className="space-y-3 not-prose">
                {/* FAQ 1 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(0)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Is debt settlement a legally recognized process in India?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 0 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 0 && (
                     <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Yes, debt settlement is entirely legal in India. It is considered an out-of-court compromise settlement. The RBI permits banks to formulate their own internal policies regarding one-time settlements (OTS) to recover non-performing assets (NPAs).
                    </div>
                  )}
                </div>
                {/* FAQ 2 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(1)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Will debt settlement affect my CIBIL score permanently?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      It severely impacts your CIBIL score for up to 7 years. The loan will be marked as "Settled" rather than "Closed," indicating you did not pay the full amount. However, this is far better than a "Written-off" or "Wilful Defaulter" status.
                    </div>
                  )}
                </div>
                {/* FAQ 3 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(2)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Can recovery agents still visit my house if I hire a settlement company?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Once a legal advocate sends a formal representation notice to the bank under RBI guidelines, all communication must legally route through the advocate. If agents still harass you, a formal Banking Ombudsman complaint can be filed immediately.
                    </div>
                  )}
                </div>
                {/* FAQ 4 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(3)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">How long does the entire loan settlement process take?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 3 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 3 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      The timeline depends heavily on the bank and how old the default is (NPA status). Typically, reaching an optimal settlement figure takes anywhere from 3 to 12 months from the date of the first missed EMI.
                    </div>
                  )}
                </div>
                {/* FAQ 5 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(4)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Can an agency guarantee a specific reduction amount?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 4 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 4 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      No. It is illegal and unethical to guarantee a specific waiver percentage (e.g., "We guarantee 60% off"). Settlement outcomes depend entirely on the specific lender's internal policies and your financial hardship documentation.
                    </div>
                  )}
                </div>
                {/* FAQ 6 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(5)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Will I owe income tax on the forgiven debt amount?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 5 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 5 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Under Section 41(1) of the Income Tax Act, 1961, if a debt was used for business purposes and is written off, the waived amount can be treated as taxable income. For purely personal loans, the tax implications are nuanced; always consult a CA.
                    </div>
                  )}
                </div>
                {/* FAQ 7 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(6)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">What is a No Objection Certificate (NOC) and why is it important?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 6 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 6 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      An NOC or Closure Letter is the final, legally binding document issued by the bank confirming that the loan is fully settled and no further dues remain. You must never make a final payment without receiving a conditional NOC first.
                    </div>
                  )}
                </div>
                {/* FAQ 8 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(7)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Do I need to be in default to qualify for debt settlement?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 7 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 7 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Yes. Banks rarely entertain settlement offers for accounts that are current and paying on time. Settlements are designed as a last resort for accounts that have slipped into Non-Performing Asset (NPA) status (usually 90+ days overdue).
                    </div>
                  )}
                </div>
                {/* FAQ 9 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(8)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Are my funds safe in the settlement escrow account?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 8 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 8 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      With a legitimate agency, yes. Funds are deposited into a secure, RBI-regulated nodal account. The settlement company cannot withdraw those funds to pay the bank or themselves without your explicit authorization for a specific settlement offer.
                    </div>
                  )}
                </div>
                {/* FAQ 10 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(9)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">What happens if the bank rejects the settlement offer?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 9 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 9 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Settlement is a negotiation, and initial offers are often rejected. The agency will counter-offer. If the bank flatly refuses to settle and pursues legal action, your appointed legal counsel will defend you against civil suits or Section 138 notices.
                    </div>
                  )}
                </div>
              </div>

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-100 text-[13px] text-slate-400 leading-relaxed font-medium not-prose">
                References: <a href="https://rbi.org.in/" target="_blank" rel="noopener noreferrer" className="text-[#2D68FF] hover:underline font-semibold">[1] Reserve Bank of India (RBI) Guidelines on Fair Practices Code for Lenders</a>. <a href="https://financialservices.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#2D68FF] hover:underline font-semibold">[2] The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</a>.
              </div>

            </article>
          </main>

          {/* Right Column (Sticky Sidebars) */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            
            {/* Dark CTA Box */}
            <div className="bg-[#30333A] rounded-2xl p-7 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2D68FF]"></div>
              <div className="text-[19px] font-bold mb-4 tracking-tight">Debt Assessment</div>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed font-medium">
                Find out exactly how much of your personal loan debt can be legally waived off. Our experts provide a free, confidential evaluation.
              </p>
              <button className="w-full bg-[#2D68FF] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg transition-colors text-[15px] shadow-lg shadow-blue-500/20">
                Start Free Evaluation
              </button>
            </div>

            {/* Client Reviews block */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <div className="text-[17px] font-extrabold text-slate-900 mb-5">Verified Success</div>
              <div className="flex items-center gap-3 mb-7">
                <div className="flex text-[#F59E0B]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div className="text-[13px] font-bold text-slate-900">4.8/5 <span className="font-medium text-slate-400 ml-1">(210 reviews)</span></div>
              </div>
              
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-extrabold text-slate-500 tracking-wider">RD</div>
                  <div className="text-sm font-extrabold text-slate-900">Rahul Desai</div>
                </div>
                <p className="text-slate-500 text-[13px] italic leading-relaxed font-medium">"I was skeptical about agencies due to all the scams online. Finding a legitimate company changed my life. They wiped out 55% of my unsecured loans and stopped the harassing calls within a week."</p>
              </div>
            </div>

          </aside>

        </div>
        
        {/* More Consumer Protection Guides */}
        <div className="mt-20 mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">More Debt Relief Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/credit-card-partial-payment" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">Credit Card Settlement</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Learn how to negotiate outstanding credit card dues, stop compounding interest, and settle your debt legally.</p>
            </Link>
            
            <Link href="/bank-recovery-harassment-complaint" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">Banking Ombudsman Filing</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Step-by-step guide to escalating your grievance against a bank's recovery harassment to the RBI Ombudsman.</p>
            </Link>
            
            <Link href="/legal-notice-for-loan-recovery" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">All Legal Notices</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Explore our full suite of legal notice templates and professional drafting services for various financial disputes.</p>
            </Link>
          </div>
          
          {/* SettleLoans About Box */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#2D68FF]"></div>
            <div className="flex items-center gap-4 mb-8">
              {/* SettleLoans Logo Equivalent */}
              <div className="flex items-center">
                <span className="text-4xl font-black tracking-tighter text-slate-900">Settle</span>
                <span className="text-4xl font-black tracking-tighter text-[#2D68FF]">Loans</span>
              </div>
              <div className="h-8 w-px bg-slate-200 mx-1"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] max-w-[120px] leading-tight">CLAIM WHAT'S RIGHTFULLY YOURS</span>
            </div>
            
            <p className="text-slate-600 font-medium leading-loose max-w-4xl mb-12 text-[15px]">
              SettleLoans is India's trusted debt relief and legal tech platform. Founded in 2022 and headquartered in New Delhi, SettleLoans has counselled 15,000+ people on severe debt traps, personal loan defaults, and recovery harassment. SettleLoans focuses on fast out-of-court settlements and connects you with top panel advocates.
            </p>
            
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Our Solutions:</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/legal-notice-for-loan-recovery" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
                  Send Legal Notice
                </Link>
                <Link href="/how-to-stop-loan-recovery-harassment" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
                  Stop Recovery Harassment
                </Link>
                <Link href="/personal-loan-settlement-services" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
                  Debt Settlement Services
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
