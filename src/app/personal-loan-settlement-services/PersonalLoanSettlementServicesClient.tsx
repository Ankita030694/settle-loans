"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanSettlementServicesClient() {
  const [activeSection, setActiveSection] = useState("guidelines");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["guidelines", "reasons", "comparison", "step-by-step", "elements", "timeline", "faqs"];
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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://settleloan.in/#organization",
        "name": "Settle Loan",
        "url": "https://settleloan.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://settleloan.in/settleloan-logo.svg"
        },
        "sameAs": [
          "https://www.facebook.com/settleloan",
          "https://twitter.com/settleloan",
          "https://www.linkedin.com/company/settleloan"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://settleloan.in/personal-loan-settlement-services/#webpage",
        "url": "https://settleloan.in/personal-loan-settlement-services",
        "name": "Expert Personal Loan Settlement Services in India | Settle Loan",
        "isPartOf": {
          "@id": "https://settleloan.in/#website"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "#quick-answer"]
        }
      },
      {
        "@type": "Article",
        "@id": "https://settleloan.in/personal-loan-settlement-services/#article",
        "isPartOf": {
          "@id": "https://settleloan.in/personal-loan-settlement-services/#webpage"
        },
        "mainEntityOfPage": {
          "@id": "https://settleloan.in/personal-loan-settlement-services/#webpage"
        },
        "headline": "Expert Personal Loan Settlement Services in India",
        "image": [
          "https://settleloan.in/images/og/personal-loan-settlement-services.jpg"
        ],
        "author": {
          "@type": "Person",
          "name": "Advocate Aman Chawla",
          "url": "https://settleloan.in/authors/advocate-aman-chawla"
        },
        "publisher": {
          "@id": "https://settleloan.in/#organization"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Advocate Sneha Sharma"
        }
      },
      {
        "@type": "Product",
        "name": "Personal Loan Settlement Service",
        "image": "https://settleloan.in/images/og/personal-loan-settlement-services.jpg",
        "description": "Professional negotiation and legal protection services for individuals struggling with personal loan debt.",
        "brand": {
          "@type": "Organization",
          "name": "Settle Loan"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "142",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Amit Sharma"
            },
            "datePublished": "2023-10-15",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Sent a legal notice to stop recovery agent harassment. The calls stopped within 48 hours and we settled the loan at 50%. The lawyer was extremely professional."
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 font-sans text-slate-800">
      <Script id="schema-personal-loan-settlement-services" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      {/* Dark Hero Section - New Theme */}
      <section className="bg-[#30333A] text-white pt-32 pb-28 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[900px] mx-auto flex flex-col items-center">
          <div className="rounded-full px-5 py-1.5 mb-8 text-[11px] font-bold tracking-[0.15em] text-[#4F85F6] uppercase bg-[#253556]/80">
            FINANCIAL EMPOWERMENT & DEBT RESOLUTION
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold tracking-tight mb-7 text-[#F8FAFC] leading-[1.1]">
            Job Lost? No Income?<br/>
            Still Have Loan EMIs?
          </h1>
          <p className="text-[17px] md:text-[19px] text-slate-300/90 mb-10 max-w-[850px] leading-relaxed font-normal">
            Managing debt during unemployment is a challenge of endurance. This master guide teaches you how to protect your rights, survive recovery tactics, and negotiate a life-changing loan settlement under RBI guidelines 2026.
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
          <Link href="/send-a-legal-notice" className="hover:text-slate-900 transition-colors">Send a Legal Notice</Link> <span className="mx-2 text-slate-300">/</span>
          <span className="text-slate-900 font-bold">Personal Loan Settlement</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)_270px] xl:grid-cols-[240px_minmax(0,1fr)_290px] gap-8 items-start">
          
          {/* Left Column (Sticky TOC) */}
          <aside className="hidden lg:block sticky top-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-6">TABLE OF CONTENTS</h3>
              <ul className="space-y-5 text-[13px] font-bold text-slate-400">
                <li>
                  <a href="#guidelines" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'guidelines' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    1. RBI Guidelines on Loan Settlement
                  </a>
                </li>
                <li>
                  <a href="#reasons" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'reasons' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    2. Reasons to Hire Professional Negotiators
                  </a>
                </li>
                <li>
                  <a href="#comparison" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'comparison' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    3. Comparison of Legal Remedies
                  </a>
                </li>
                <li>
                  <a href="#step-by-step" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'step-by-step' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    4. Step-by-Step Notice Process
                  </a>
                </li>
                <li>
                  <a href="#elements" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'elements' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    5. Essential Settlement Elements
                  </a>
                </li>
                <li>
                  <a href="#timeline" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'timeline' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    6. Resolution Timeline & Escalation
                  </a>
                </li>
                <li>
                  <a href="#faqs" className={`block pl-4 border-l-[3px] transition-colors leading-snug ${activeSection === 'faqs' ? 'border-[#2D68FF] text-[#2D68FF]' : 'border-transparent hover:text-slate-700'}`}>
                    7. Frequently Asked Questions
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
                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-services&text=Personal+Loan+Settlement+Services" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-services" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fsettleloans.in%2Fpersonal-loan-settlement-services&title=Personal+Loan+Settlement+Services" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition-opacity"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>

            {/* Quick Answer Block */}
            <div id="quick-answer" className="bg-[#F8F9FA] rounded-xl p-8 mb-12 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#2D68FF]"></div>
              <h3 className="text-xs font-extrabold text-slate-800 tracking-widest uppercase mb-4 pl-1">QUICK ANSWER</h3>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base font-medium pl-1">
                Consumers can hire a professional personal loan settlement service to negotiate massive debt reductions on defaulted loans. A formally represented client benefits from a strict halt to recovery agent harassment, as all communications are legally diverted to the representatives. Failure by banks to comply with RBI guidelines empowers the legal team to file a formal complaint in the Banking Ombudsman seeking compensation for harassment and deficiency in service.
              </p>
            </div>

            <article className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-loose">
              
              <h2 id="guidelines" className="scroll-mt-32 mt-0 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                1. RBI Guidelines on Loan Settlement
              </h2>
              <p>
                Navigating a financial crisis is immensely stressful, and dealing directly with aggressive bank collection departments often exacerbates the trauma. When individuals default on <Link href="/unsecured-personal-loan-definition" className="text-[#2D68FF] font-medium hover:underline">unsecured personal loans</Link>, lenders deploy recovery agents whose tactics can blur the line between collection and harassment. Professional <Link href="/what-is-personal-loan-settlement" className="text-[#2D68FF] font-medium hover:underline">personal loan settlement services</Link> step in as a crucial buffer between the distressed borrower and the lending institution.
              </p>

              <h2 id="reasons" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                2. Reasons to Hire Professional Negotiators
              </h2>
              <p>
                By employing seasoned financial advisors and legal advocates, these services leverage institutional knowledge that the average consumer lacks. They understand precisely <Link href="/what-percentage-do-banks-accept-in-loan-settlement" className="text-[#2D68FF] font-medium hover:underline">what percentage of the principal amount banks are realistically willing to accept</Link> based on the age of the non-performing asset (NPA), the bank's internal policies, and current market conditions. 
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 my-8 not-prose">
                <ul className="space-y-6 text-[15px] text-slate-700 m-0 p-0 list-none">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Expert Negotiation Leverage:</strong> Financial institutions are far more likely to agree to a 50%+ principal reduction when dealing with a specialized legal representative.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Harassment Shield:</strong> Once hired, legal advocates formally request all communications be routed through them, effectively silencing recovery calls.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Protection from Litigation:</strong> Firms monitor for potential civil suits or cheque bounce cases under Section 138 of the NI Act, ensuring prompt countermeasures.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <p className="m-0 leading-relaxed"><strong className="text-slate-900 font-bold">Documentation & NOC:</strong> Ensures that the bank issues a legally binding No Objection Certificate (NOC), permanently closing the debt.</p>
                  </li>
                </ul>
              </div>

              <h2 id="comparison" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                3. Comparison of Legal Remedies
              </h2>
              <p>
                Choosing the right strategy for your debt is crucial. Below is a comparison of different approaches to managing severe loan default:
              </p>
              
              <div className="overflow-x-auto my-10 border border-slate-200 rounded-xl not-prose">
                <table className="w-full text-sm text-left border-collapse m-0">
                  <thead className="bg-[#F8F9FA] text-slate-700 uppercase text-xs tracking-wider">
                    <tr>
                      <th className="px-6 py-5 font-bold border-b border-slate-200">Strategy</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">Impact on Debt</th>
                      <th className="px-6 py-5 font-bold border-b border-l border-slate-200">CIBIL Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Professional Settlement</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Reduces debt by up to 50-70% legally.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Marked as 'Settled' (Negative but resolves liability).</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Full Repayment</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Pays 100% of principal + interest + penalties.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Marked as 'Closed' (Positive impact).</td>
                    </tr>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-5 font-bold text-slate-900">Ignoring Debt</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Debt balloons with extreme compound interest.</td>
                      <td className="px-6 py-5 text-slate-600 border-l border-slate-200">Marked as 'Written Off' (Severe damage).</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="step-by-step" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                4. Step-by-Step Notice Process
              </h2>
              <p>
                Engaging a professional debt resolution agency involves a structured, legally sound process designed to maximize debt reduction and ensure permanent closure of the liability.
              </p>

              <div className="space-y-8 my-10 not-prose">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">1</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Engage a Legal Representative</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Hire a specialized debt advocate who will analyze your loan agreement, statement of accounts, and current financial hardship.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">2</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Draft the Cease and Desist Notice</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Your lawyer drafts a formal notice demanding an immediate halt to third-party recovery harassment under RBI and Supreme Court guidelines.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">3</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Dispatch via Registered Post</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">The legal notice is sent via India Post with Acknowledgment Due (RPAD) directly to the bank's grievance officer and registered headquarters.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">4</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Negotiate the Settlement Amount</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">Once the bank's legal team responds, your advocate begins formal negotiations to waive off penalties and reduce the principal outstanding.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#2D68FF] text-white flex items-center justify-center font-bold text-lg mt-0.5 shadow-md shadow-blue-500/20">5</div>
                  <div>
                    <h3 className="text-[19px] font-bold text-slate-900 mb-2 tracking-tight">Secure the Official NOC</h3>
                    <p className="text-slate-600 leading-relaxed text-[15px] m-0">After the final agreed sum is paid, the bank must issue a legally binding No Objection Certificate, formally closing the loan account.</p>
                  </div>
                </div>
              </div>

              {/* Full Width Infographic */}
              <div className="my-12 relative w-[calc(100%+4rem)] -ml-8 px-4 sm:w-[calc(100%+5rem)] sm:-ml-10 sm:px-0">
                <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img 
                    src="/images/og/personal-loan-settlement-services.jpg" 
                    alt="Process of Personal Loan Settlement Services" 
                    className="w-full h-auto object-cover object-center m-0"
                  />
                </div>
              </div>
              
              <p>
                A poorly drafted notice is easily ignored by corporate legal teams. To exert maximum pressure on a bank, the legal intervention must contain specific statutory elements and clear demands.
              </p>

              <h2 id="elements" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                5. Essential Settlement Elements
              </h2>
              <p>
                The primary concern for individuals considering personal loan settlement services is the associated cost. Most reputable firms operate on a success-fee model. This means their compensation is a calculated percentage of the total debt amount they successfully eliminate. For instance, if you owe ₹10,00,000 and the agency negotiates a settlement at ₹4,00,000, their fee is based on the ₹6,00,000 saved.
              </p>

              <h2 id="timeline" className="scroll-mt-32 mt-12 mb-6 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                6. Resolution Timeline & Escalation
              </h2>
              <p>
                One of the most critical advantages of hiring a settlement firm is immediate legal protection. The Reserve Bank of India has established <Link href="/rbi-rules-for-recovery-agents" className="text-[#2D68FF] font-medium hover:underline">stringent guidelines governing the conduct of recovery agents</Link>. Unfortunately, third-party collection agencies routinely violate these regulations through public shaming, calling family members, or visiting workplaces unannounced. If you face this, filing a <Link href="/recovery-agent-harassment-complaint" className="text-[#2D68FF] font-medium hover:underline">recovery agent harassment complaint</Link> is a viable next step.
              </p>

              <h2 id="faqs" className="scroll-mt-32 mt-16 mb-8 text-[28px] font-bold text-slate-900 tracking-tight block w-fit border-b-[3px] border-[#2D68FF] pb-2">
                7. Frequently Asked Questions
              </h2>
              <div className="space-y-3 not-prose">
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(0)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">How much does a personal loan settlement service cost?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 0 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 0 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Personal loan settlement services typically charge a success fee based on the total debt reduction achieved, ensuring their goals align with yours. Reputable agencies do not ask for massive upfront payments before providing concrete negotiation results.
                    </div>
                  )}
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(1)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Can hiring a service stop recovery agent harassment immediately?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 1 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Hiring a professional personal loan settlement service allows legal experts to channel all bank communications through their authorized representatives. This intervention mandates recovery agents to cease direct contact.
                    </div>
                  )}
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button onClick={() => toggleFaq(2)} className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-slate-50 transition-colors group">
                    <span className="font-bold text-slate-900 group-hover:text-[#2D68FF] transition-colors pr-8">Will my CIBIL score be affected if I use a settlement service?</span>
                    <svg className={`w-5 h-5 text-slate-400 group-hover:text-[#2D68FF] transform transition-transform shrink-0 ${openFaq === 2 ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-6 pt-2 text-slate-600 leading-relaxed text-sm border-t border-slate-100">
                      Any debt settlement, whether negotiated independently or through a service, will reflect as 'Settled' on your CIBIL report and negatively impact your credit score. However, it resolves the debt permanently.
                    </div>
                  )}
                </div>
              </div>

              {/* References Section */}
              <div className="mt-16 pt-8 border-t border-slate-100 text-[13px] text-slate-400 leading-relaxed font-medium not-prose">
                References: <a href="#" className="text-[#2D68FF] hover:underline font-semibold">[1] Reserve Bank of India (RBI) Guidelines on Fair Practices Code for Lenders</a>. <a href="#" className="text-[#2D68FF] hover:underline font-semibold">[2] The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002</a>.
              </div>

            </article>
          </main>

          {/* Right Column (Sticky Sidebars) */}
          <aside className="space-y-6 lg:sticky lg:top-8">
            
            {/* Dark CTA Box */}
            <div className="bg-[#30333A] rounded-2xl p-7 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[#2D68FF]"></div>
              <h3 className="text-[19px] font-bold mb-4 tracking-tight">Send Legal Notice</h3>
              <p className="text-slate-400 text-sm mb-7 leading-relaxed font-medium">
                We match you with a panel advocate, handle the custom drafting, physically post the notice, and track its delivery in real-time.
              </p>
              <button className="w-full bg-[#2D68FF] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-lg transition-colors text-[15px] shadow-lg shadow-blue-500/20">
                Start Notice Intake
              </button>
            </div>

            {/* Client Reviews block */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm">
              <h3 className="text-[17px] font-extrabold text-slate-900 mb-5">Client Reviews</h3>
              <div className="flex items-center gap-3 mb-7">
                <div className="flex text-[#F59E0B]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div className="text-[13px] font-bold text-slate-900">4.9/5 <span className="font-medium text-slate-400 ml-1">(142 reviews)</span></div>
              </div>
              
              <div className="pt-5 border-t border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-extrabold text-slate-500 tracking-wider">AS</div>
                  <div className="text-sm font-extrabold text-slate-900">Amit Sharma</div>
                </div>
                <p className="text-slate-500 text-[13px] italic leading-relaxed font-medium">"Sent a legal notice to stop recovery agent harassment. The calls stopped within 48 hours and we settled the loan at 50%. The lawyer was extremely professional."</p>
              </div>
            </div>

          </aside>

        </div>
        
        {/* More Consumer Protection Guides */}
        <div className="mt-20 mb-12">
          <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">More Debt Relief Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/credit-card-settlement" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">Credit Card Settlement</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Learn how to negotiate outstanding credit card dues, stop compounding interest, and settle your debt legally.</p>
            </Link>
            
            <Link href="/banking-ombudsman-complaint" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">Banking Ombudsman Filing</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Step-by-step guide to escalating your grievance against a bank's recovery harassment to the RBI Ombudsman.</p>
            </Link>
            
            <Link href="/all-legal-notices" className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow group">
              <h3 className="text-[17px] font-bold text-slate-900 mb-2 group-hover:text-[#2D68FF] transition-colors tracking-tight">All Legal Notices</h3>
              <p className="text-[13px] text-slate-500 leading-relaxed font-medium">Explore our full suite of legal notice templates and professional drafting services for various financial disputes.</p>
            </Link>
          </div>
          
          {/* Settle Loan About Box */}
          <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#2D68FF]"></div>
            <div className="flex items-center gap-4 mb-8">
              {/* Settle Loan Logo Equivalent */}
              <div className="flex items-center">
                <span className="text-4xl font-black tracking-tighter text-slate-900">Settle</span>
                <span className="text-4xl font-black tracking-tighter text-[#2D68FF]">Loan</span>
              </div>
              <div className="h-8 w-px bg-slate-200 mx-1"></div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] max-w-[120px] leading-tight">CLAIM WHAT'S RIGHTFULLY YOURS</span>
            </div>
            
            <p className="text-slate-600 font-medium leading-loose max-w-4xl mb-12 text-[15px]">
              Settle Loan is India's trusted debt relief and legal tech platform. Founded in 2022 and headquartered in New Delhi, Settle Loan has counselled 15,000+ people on severe debt traps, personal loan defaults, and recovery harassment. Settle Loan focuses on fast out-of-court settlements and connects you with top panel advocates.
            </p>
            
            <div>
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Our Solutions:</h3>
              <div className="flex flex-wrap gap-4">
                <Link href="/send-legal-notice" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
                  Send Legal Notice
                </Link>
                <Link href="/stop-recovery-harassment" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
                  Stop Recovery Harassment
                </Link>
                <Link href="/debt-settlement-services" className="border-2 border-[#2D68FF] text-[#2D68FF] hover:bg-[#2D68FF] hover:text-white font-bold py-3.5 px-10 rounded-xl transition-colors text-sm text-center">
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
