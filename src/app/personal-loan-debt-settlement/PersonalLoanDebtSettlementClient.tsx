"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const TABLE_OF_CONTENTS = [
  { id: 'introduction', label: 'Introduction to Personal Loan Debt Relief' },
  { id: 'debt-settlement-vs-consolidation', label: 'Debt Settlement vs. Consolidation' },
  { id: 'cost-benefit-analysis', label: 'Cost-Benefit Analysis' },
  { id: 'legal-implications-india', label: 'Legal Implications in India (RBI Guidelines)' },
  { id: 'step-by-step-process', label: 'Step-by-Step Settlement Process' },
  { id: 'impact-on-cibil', label: 'Impact on Your CIBIL Score' },
];

const FAQS = [
  { question: "What is the minimum amount required for personal loan settlement?", answer: "Usually, lenders consider settlement when the outstanding amount is significant and the borrower has missed several EMIs (typically 90+ days past due). Every case is unique, but financial hardship must be proven." },
  { question: "Will personal loan settlement affect my CIBIL score?", answer: "Yes. The status of your loan will be marked as 'Settled' rather than 'Closed' in your CIBIL report, which drops your credit score and affects future borrowing capacity for a few years." },
  { question: "Can the bank refuse a debt settlement offer?", answer: "Yes, settlement is at the discretion of the lender. The RBI allows banks to have board-approved policies for one-time settlements, but they are not legally obligated to accept every proposal." },
  { question: "How does debt consolidation differ from settlement?", answer: "Debt consolidation involves taking a new loan to pay off existing smaller loans fully, preserving your credit score. Settlement means paying a negotiated lesser amount to close the loan, which harms your credit." },
  { question: "Is debt settlement legal in India?", answer: "Yes, debt settlement is a legally valid process in India. It acts as a mutual agreement between the borrower and lender under the Indian Contract Act, recognized by RBI guidelines for compromise settlements." },
  { question: "Can recovery agents harass me during settlement negotiation?", answer: "No. According to RBI guidelines, banks and their recovery agents must follow a strict code of conduct. Harassment, intimidation, or calling at odd hours is strictly prohibited." },
  { question: "Do I need a lawyer for personal loan debt settlement?", answer: "While you can negotiate directly, having legal representation or a professional service like SettleLoans ensures your rights are protected, especially if legal notices have been served." },
  { question: "What is a No Objection Certificate (NOC) in settlement?", answer: "An NOC (or No Dues Certificate) is a crucial document issued by the bank confirming that the loan account is fully settled and closed. You must secure this immediately after paying the settlement amount." },
  { question: "Are there tax implications on the forgiven debt amount?", answer: "In some cases, the waived off principal amount may be treated as income under the Income Tax Act, though this depends heavily on your specific financial and business circumstances." },
  { question: "How long does the personal loan settlement process take?", answer: "It typically takes anywhere from a few weeks to a few months. It involves verification of your hardship, negotiations, internal bank approvals, and final documentation." },
];

export default function PersonalLoanDebtSettlementClient() {
  const [activeId, setActiveId] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -40% 0px' }
    );

    TABLE_OF_CONTENTS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Dark Hero Section */}
      <section className="bg-[#30333A] text-white pt-24 pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="bg-[#2D68FF]/20 text-[#2D68FF] px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-[#2D68FF]/30">
            Comprehensive Debt Relief Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Personal Loan Debt Settlement: <span className="text-[#2D68FF]">A Complete Guide</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Struggling with mounting personal loan EMIs? Discover how debt settlement and consolidation can help you regain financial freedom, understand RBI guidelines, and protect yourself from recovery harassment.
          </p>
          <button className="bg-[#2D68FF] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-[#2D68FF]/25">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* Achievements Banner */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 mb-1">100CR+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Amount Recovered</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 mb-1">10,000+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Cases Handled</span>
            </div>
            <div className="flex flex-col items-center justify-center px-4">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center p-2.5">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-3xl font-extrabold text-slate-900">4.7</span>
              </div>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Google Rating</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl font-extrabold text-slate-900 mb-1">15,000+</span>
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Customers Counselled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Layout Structure */}
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10 pt-8 pb-16">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2D68FF] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#2D68FF] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">Personal Loan Debt Settlement</span>
        </nav>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_290px] gap-8 items-start">
          
          {/* Left Sidebar (TOC) */}
          <div className="hidden lg:block sticky top-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <div className="font-bold text-slate-900 mb-4 text-lg">Table of Contents</div>
              <nav className="flex flex-col gap-3 text-sm">
                {TABLE_OF_CONTENTS.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block leading-snug transition-colors ${
                      activeId === item.id
                        ? 'text-[#2D68FF] font-semibold border-l-2 border-[#2D68FF] pl-3 -ml-3'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Article Column */}
          <main className="min-w-0">
            {/* Author Byline & Share */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold">AJ</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">By <Link href="/authors/ashish-jhangra" className="hover:text-[#2D68FF] transition-colors">Ashish Jhangra</Link></div>
                  <div className="text-sm text-slate-500 mb-1">Legal Expert & Debt Strategist</div>
                  <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Reviewed by Team SettleLoans
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-500 uppercase">Share:</span>
                <a href="#" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Answer Block */}
            <div className="bg-[#F8F9FA] border-l-[6px] border-[#2D68FF] rounded-r-2xl p-6 mb-12 shadow-sm">
              <div className="font-bold text-slate-900 text-lg mb-2">The Quick Answer</div>
              <p className="text-slate-600 leading-relaxed">
                <strong>Personal Loan Debt Settlement</strong> is an agreement with your lender to pay a lump sum that is less than the total amount you owe to close the account. It drastically hurts your CIBIL score but offers an escape from unmanageable debt. <strong>Debt Consolidation</strong> involves taking a new, lower-interest loan to pay off existing debts, protecting your credit score but requiring you to pay the full principal. If you are already defaulting on EMIs, settlement is often the most viable legal route under RBI guidelines.
              </p>
            </div>

            {/* Content Wrapper */}
            <article className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose prose-a:text-[#2D68FF] prose-strong:text-slate-900">
              
              <h2 id="introduction" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Introduction to Personal Loan Debt Relief
              </h2>
              <p>
                Falling into a debt trap is an overwhelming experience for any individual. With rising living costs and unforeseen emergencies like medical crises or job loss, keeping up with personal loan EMIs can quickly become impossible. In India, unsecured personal loans form a massive chunk of consumer credit. When defaults happen, borrowers often face aggressive recovery tactics, mounting penal interest, and immense psychological stress.
              </p>
              <p>
                Fortunately, there are legal frameworks and recognized financial strategies to help you break free. The two most prominent strategies discussed by financial planners are <strong>Debt Settlement</strong> and <strong>Debt Consolidation</strong>. Understanding the nuances, legal implications, and long-term consequences of these paths is the first step toward reclaiming your financial stability. 
              </p>
              <p>
                At SettleLoans, we specialize in helping individuals navigate these turbulent waters. We provide a buffer against harassment from recovery agents and negotiate with banks to find a middle ground that adheres to the Reserve Bank of India (RBI) guidelines.
              </p>

              {/* Infographic */}
              <div className="my-12 relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src="/images/infographics/personal-loan-debt-settlement.jpg" 
                  alt="Personal Loan Debt Settlement vs Debt Consolidation Infographic" 
                  className="w-full h-auto object-cover object-center m-0" 
                />
              </div>

              <h2 id="debt-settlement-vs-consolidation" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Debt Settlement vs. Consolidation
              </h2>
              <p>
                Many borrowers confuse settlement with consolidation, but they are fundamentally different approaches designed for entirely different financial situations. Knowing which one applies to you can save you time, money, and further damage to your credit profile.
              </p>
              
              <div className="bg-slate-50 rounded-2xl p-6 my-8 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4 text-xl">Key Differences at a Glance</h3>
                <ul className="list-disc pl-5 space-y-3 text-slate-600 marker:text-[#2D68FF]">
                  <li><strong>Mechanism:</strong> Consolidation combines multiple loans into one. Settlement negotiates to pay only a fraction of the outstanding amount.</li>
                  <li><strong>Credit Score Impact:</strong> Consolidation protects or even improves your CIBIL score if paid on time. Settlement severely damages your CIBIL score, dropping it by 50-100 points, as the account is marked "Settled."</li>
                  <li><strong>Eligibility:</strong> Consolidation requires a decent credit score to secure a new loan. Settlement is typically for those who have already defaulted and have a poor credit score.</li>
                  <li><strong>Financial Obligation:</strong> In consolidation, you repay 100% of the principal plus interest. In settlement, a portion of your debt is legally forgiven by the lender.</li>
                </ul>
              </div>

              <p>
                If you have missed several EMIs and the bank is sending legal notices, consolidation is likely no longer an option because no new lender will approve a loan. At this stage, a well-negotiated debt settlement becomes the optimal strategy.
              </p>

              <h2 id="cost-benefit-analysis" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Cost-Benefit Analysis
              </h2>
              <p>
                To provide a clear picture of how these two strategies compare, we have outlined a comparative analysis below. This is highly useful when deciding the trajectory of your financial recovery.
              </p>

              {/* AI Crawlable Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-xl my-8">
                <table className="w-full text-left border-collapse min-w-[600px] m-0">
                  <thead className="bg-[#30333A] text-white">
                    <tr>
                      <th className="p-4 font-semibold w-1/3">Criteria</th>
                      <th className="p-4 font-semibold w-1/3 border-l border-slate-600">Debt Settlement</th>
                      <th className="p-4 font-semibold w-1/3 border-l border-slate-600">Debt Consolidation</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-600 divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Total Amount Paid</td>
                      <td className="p-4 border-l border-slate-200">Significantly less (often 40-60% of outstanding)</td>
                      <td className="p-4 border-l border-slate-200">100% of Principal + New Interest</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 font-medium text-slate-900">Impact on CIBIL</td>
                      <td className="p-4 border-l border-slate-200">Negative (Drops drastically, marked "Settled")</td>
                      <td className="p-4 border-l border-slate-200">Positive/Neutral (Maintains payment history)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Time to Debt-Free</td>
                      <td className="p-4 border-l border-slate-200">Faster (Lump sum payment ends it immediately)</td>
                      <td className="p-4 border-l border-slate-200">Longer (Requires paying off new tenure, 1-5 years)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 font-medium text-slate-900">Lender Harassment</td>
                      <td className="p-4 border-l border-slate-200">High (Until settlement is formalized)</td>
                      <td className="p-4 border-l border-slate-200">Low/None (Accounts remain in good standing)</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-900">Ideal Candidate</td>
                      <td className="p-4 border-l border-slate-200">Already defaulted, experiencing severe hardship</td>
                      <td className="p-4 border-l border-slate-200">Good credit, struggling with multiple EMI dates</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="legal-implications-india" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Legal Implications in India (RBI Guidelines)
              </h2>
              <p>
                In India, debt settlement is entirely legal. It is governed by the Indian Contract Act, 1872, where both parties agree to alter the terms of the original contract. Furthermore, the Reserve Bank of India (RBI) provides strict guidelines for banks regarding compromise settlements and the treatment of non-performing assets (NPAs).
              </p>
              <p>
                It is crucial to note that while the SARFAESI Act, 2002 allows banks to seize assets without court intervention, this applies <strong>only to secured loans</strong> (like home or auto loans). Personal loans are unsecured. If you default on a personal loan, the bank cannot seize your property directly. They must file a civil suit for recovery, which is a lengthy legal process. This leverage often encourages banks to agree to a one-time settlement (OTS).
              </p>
              <p>
                Additionally, RBI guidelines strictly prohibit the use of muscle power or harassment by recovery agents. Borrowers have the right to report abusive agents to the Banking Ombudsman or local police.
              </p>

              <h2 id="step-by-step-process" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Step-by-Step Settlement Process
              </h2>
              <p>
                Approaching your lender for a settlement requires preparation and a clear strategy. Here is the recommended step-by-step approach to achieving a successful personal loan settlement:
              </p>

              <div className="flex flex-col gap-6 my-8 not-prose">
                {[
                  { title: "Assess Your Financial Hardship", desc: "Compile documentation proving your inability to pay. This includes medical bills, termination letters, or bank statements showing depleted savings." },
                  { title: "Stop Paying the EMI", desc: "This is a harsh reality: banks will not negotiate a settlement if you are still managing to pay the EMI. The account must typically be 90+ days overdue (NPA status)." },
                  { title: "Initiate Communication", desc: "Send a formal letter or email to the bank manager or the recovery department explaining your situation and offering a realistic lump-sum amount." },
                  { title: "Negotiate Vigorously", desc: "The bank will initially refuse or offer a tiny discount. Stand firm. Professional services like SettleLoans can handle this negotiation to secure the best possible waiver." },
                  { title: "Get Everything in Writing", desc: "Never make a payment based on a verbal promise from a recovery agent. Always demand a formal settlement letter on the bank's letterhead detailing the exact terms." },
                  { title: "Pay and Obtain NOC", desc: "Make the payment via demand draft or online transfer. Immediately request the No Objection Certificate (NOC) and ensure your loan account shows a zero balance." }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#2D68FF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 id="impact-on-cibil" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                Impact on Your CIBIL Score
              </h2>
              <p>
                The most significant drawback of a debt settlement is its effect on your creditworthiness. When a bank writes off a portion of your debt, they report the account status to credit bureaus (like CIBIL, Experian, Equifax) as "Settled" rather than "Closed."
              </p>
              <p>
                A "Settled" remark is a massive red flag to future lenders. It indicates that you have historically failed to honor a financial commitment in full. Your score will drop significantly, and this remark stays on your report for up to 7 years. During the initial 2-3 years, obtaining a new loan, credit card, or even a mortgage will be extremely difficult.
              </p>
              <p>
                However, if the alternative is unending harassment, legal notices, and an ever-growing debt pile due to penal interest, taking the hit on your CIBIL score is a necessary sacrifice to regain your peace of mind and financial equilibrium. Once settled, you can slowly begin rebuilding your credit through secured credit cards or small gold loans.
              </p>

            </article>

            {/* FAQs Section */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
              <div className="flex flex-col gap-4">
                {FAQS.map((faq, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                    <button 
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left font-semibold text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <svg 
                        className={`w-5 h-5 text-[#2D68FF] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 pt-1 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* References Section */}
            <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-xl mb-4">Official References & Legal Citations</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li><a href="#" className="text-[#2D68FF] hover:underline">Reserve Bank of India (RBI) Guidelines on Fair Practices Code for Lenders</a></li>
                <li><a href="#" className="text-[#2D68FF] hover:underline">The Indian Contract Act, 1872 (Section 63 regarding waiver of claims)</a></li>
                <li><a href="#" className="text-[#2D68FF] hover:underline">RBI Master Circular on Prudential Norms on Income Recognition, Asset Classification and Provisioning pertaining to Advances</a></li>
                <li><a href="#" className="text-[#2D68FF] hover:underline">Banking Ombudsman Scheme, 2006</a></li>
              </ul>
            </div>

          </main>

          {/* Right Sidebar */}
          <aside className="hidden xl:block sticky top-8">
            
            {/* CTA Box */}
            <div className="bg-[#30333A] rounded-2xl p-6 text-white mb-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2D68FF]/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="text-xl font-bold mb-3 relative z-10">Drowning in Debt?</div>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed relative z-10">
                Stop the harassment today. Let our legal experts negotiate with your banks and reduce your payable amount by up to 50%.
              </p>
              <button className="w-full bg-[#2D68FF] hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-xl transition-colors relative z-10">
                Talk to an Expert
              </button>
            </div>

            {/* Reviews Box */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#FBBC05]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <span className="font-bold text-slate-900">4.8/5</span>
              </div>
              <p className="text-sm text-slate-600 italic mb-4">
                "I was receiving 50+ calls a day from recovery agents. SettleLoans stepped in, stopped the calls within a week, and settled my 5 Lakh personal loan for just 2 Lakhs. Highly recommended!"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2D68FF] rounded-full flex items-center justify-center text-white font-bold text-xs">RK</div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Rahul K.</div>
                  <div className="text-xs text-green-600 font-semibold flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Verified Client
                  </div>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* Footer Area */}
      <div className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">More Debt Relief Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <Link href="/credit-card-settlement" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#2D68FF] hover:shadow-lg transition-all group">
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors">Credit Card Debt Settlement</h4>
              <p className="text-sm text-slate-600">Learn how to negotiate and close your outstanding credit card bills legally.</p>
            </Link>
            <Link href="/business-loan-settlement" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#2D68FF] hover:shadow-lg transition-all group">
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors">Business Loan Relief</h4>
              <p className="text-sm text-slate-600">Strategies for MSMEs and business owners facing severe cash crunch and loan defaults.</p>
            </Link>
            <Link href="/recovery-agent-harassment-complaint" className="block bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#2D68FF] hover:shadow-lg transition-all group">
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors">Stop Recovery Harassment</h4>
              <p className="text-sm text-slate-600">Know your legal rights under RBI guidelines against abusive bank recovery agents.</p>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-[#30333A] text-white rounded-[32px] p-10 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">About SettleLoans</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              SettleLoans is India's premier debt relief and legal advisory platform. We specialize in protecting borrowers from harassment and negotiating fair, legal, and mutually beneficial settlements with financial institutions. Regain your financial freedom today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services" className="bg-[#2D68FF] hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Our Solutions
              </Link>
              <Link href="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
