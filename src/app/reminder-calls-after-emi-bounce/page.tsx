import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: 'Handling Reminder Calls After an EMI Bounce | Stop Harassment',
  description: 'Getting 20 calls a day after a single EMI bounce? Learn the exact script to use with tele-callers to stop the harassment and understand your rights.',
  alternates: {
    canonical: 'https://www.settleloans.in/reminder-calls-after-emi-bounce'
  }
};

const tocItems = [
  { id: 'why-banks-call', title: 'Why Banks Call Incessantly' },
  { id: 'your-rights', title: 'Your Rights Against Harassment' },
  { id: 'how-to-talk', title: 'How to Talk to Recovery Agents' },
  { id: 'stop-recovery-calls', title: 'Steps to Stop Recovery Calls' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' }
];

export default function ReminderCallsAfterEmiBouncePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloans.in/reminder-calls-after-emi-bounce/#webpage",
        "url": "https://www.settleloans.in/reminder-calls-after-emi-bounce",
        "name": "Handling Reminder Calls After an EMI Bounce",
        "description": "Getting 20 calls a day after a single EMI bounce? Learn the exact script to use with tele-callers to stop the harassment.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloans.in" },
          { "@type": "ListItem", "position": 2, "name": "Loan Guides", "item": "https://www.settleloans.in/guides" },
          { "@type": "ListItem", "position": 3, "name": "Handling Reminder Calls After an EMI Bounce", "item": "https://www.settleloans.in/reminder-calls-after-emi-bounce" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/reminder-calls-after-emi-bounce/#article",
        "headline": "Handling Reminder Calls After an EMI Bounce",
        "description": "Stop recovery calls and learn how to talk to recovery agents with our proven scripts.",
        "author": { "@type": "Organization", "name": "SettleLoans", "url": "https://www.settleloans.in" },
        "publisher": { "@type": "Organization", "name": "SettleLoans", "logo": { "@type": "ImageObject", "url": "https://www.settleloans.in/logo.png" } },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloans.in/reminder-calls-after-emi-bounce/#webpage" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Can a bank call for EMI payment 20 times a day?", "acceptedAnswer": { "@type": "Answer", "text": "No, RBI guidelines strictly prohibit banks from harassing borrowers with excessive calls. They can only contact you during reasonable hours (typically 8 AM to 7 PM)." } },
          { "@type": "Question", "name": "How to stop recovery calls permanently?", "acceptedAnswer": { "@type": "Answer", "text": "You can stop recovery calls by communicating your situation in writing, restructuring your loan, or raising a formal complaint with the banking ombudsman if harassment occurs." } },
          { "@type": "Question", "name": "What is the exact script to use with tele-callers?", "acceptedAnswer": { "@type": "Answer", "text": "State clearly: 'I am aware of my missed payment. Please do not call repeatedly as it violates RBI guidelines. Send me an email with the details, and I will respond.'" } },
          { "@type": "Question", "name": "Can recovery agents call my relatives or friends?", "acceptedAnswer": { "@type": "Answer", "text": "No. Recovery agents are not legally allowed to contact your relatives, friends, or employer regarding your loan default." } },
          { "@type": "Question", "name": "Do I have to answer every call from the bank?", "acceptedAnswer": { "@type": "Answer", "text": "While you should not evade the bank entirely, you are not obligated to answer 20 calls a day. Answer once, state your position, and request written communication." } },
          { "@type": "Question", "name": "What should I do if agents use abusive language?", "acceptedAnswer": { "@type": "Answer", "text": "Record the call, note down the agent's details, and file a formal grievance with the bank's nodal officer and the RBI Ombudsman." } },
          { "@type": "Question", "name": "Can a single EMI bounce lead to legal action?", "acceptedAnswer": { "@type": "Answer", "text": "A single EMI bounce usually results in a late fee and reminder calls, not immediate legal action. Legal steps typically start after 90 days of continuous default (NPA)." } },
          { "@type": "Question", "name": "Will an EMI bounce affect my CIBIL score?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, even a single missed payment will be reported to credit bureaus and can negatively impact your CIBIL score." } },
          { "@type": "Question", "name": "Is it better to ignore calls or talk to the bank?", "acceptedAnswer": { "@type": "Answer", "text": "It is always better to communicate with the bank. Ignoring calls can escalate the situation. Be polite but firm about your rights." } },
          { "@type": "Question", "name": "Can I request more time to pay my EMI?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can request a forbearance or a temporary moratorium, though approval is at the bank's discretion and usually requires proof of financial hardship." } }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Harassment Protection Service",
        "description": "Expert legal assistance to stop recovery harassment and negotiate loan settlements.",
        "brand": { "@type": "Brand", "name": "SettleLoans" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "1250"
        },
        "review": [
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Amit Sharma" }, "reviewBody": "SettleLoans helped me stop the 30+ daily calls from recovery agents. I can finally breathe." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Priya Singh" }, "reviewBody": "The exact script they provided worked like magic. The bank stopped calling my relatives." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "4.5" }, "author": { "@type": "Person", "name": "Ravi Kumar" }, "reviewBody": "Excellent guidance on dealing with aggressive recovery agents. Highly recommended." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Neha Gupta" }, "reviewBody": "I was stressed about my single EMI bounce, but SettleLoans showed me my rights and stopped the harassment." }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Stop Harassment Now
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Handling <span className="text-[#1F5EFF]">Reminder Calls</span> After an EMI Bounce
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Getting 20 calls a day after a single EMI bounce? Learn the exact script to use with tele-callers to stop the harassment.
            </p>
            <Link href="#stop-recovery-calls" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get the Script
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <div className="text-xs md:text-sm text-[#747474] flex items-center gap-2">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <Link href="/guides" className="hover:text-[#1F5EFF] transition-colors">Loan Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="font-bold text-[#2E2E2E]">Handling Reminder Calls After an EMI Bounce</span>
            </div>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Intro Section */}
            <section id="why-banks-call" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">Why Banks Call Incessantly</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Missing an EMI is stressful enough, but the barrage of calls that follows can turn a financial hiccup into a daily nightmare. Often, a bank calling for EMI payment will outsource to third-party tele-callers who get incentivized based on collection metrics, leading them to call you up to 20 times a day.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Understanding why these calls happen and recognizing that you have legal protections is the first step to regaining control. You do not have to endure harassment just because you missed a payment.
                </p>
              </div>
            </section>

            {/* Your Rights Section */}
            <section id="your-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Your Rights Against Harassment</h2>
              
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h3 className="text-xl font-black text-[#1F5EFF] mb-4">The RBI Guidelines Protect You</h3>
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  The Reserve Bank of India (RBI) has strict guidelines regarding debt collection. Banks and their recovery agents must adhere to a code of conduct. If they violate these, you have the right to file a complaint.
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Calls can only be made between 8:00 AM and 7:00 PM.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Use of abusive language, threats, or intimidation is strictly forbidden.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">Agents cannot contact your friends, family, or employer about your debt.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-gray-800">They cannot show up unannounced or humiliate you publicly.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Keep Records</h3>
                  <p className="text-gray-700">Always record abusive or excessively frequent calls. Keep a log of dates, times, and phone numbers.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Ask for ID</h3>
                  <p className="text-gray-700">Demand the name of the caller, their agency, and the name of the bank official overseeing your account.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Refuse Unlawful Contact</h3>
                  <p className="text-gray-700">Explicitly state that they do not have permission to contact anyone else regarding your loan.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Escalate Issues</h3>
                  <p className="text-gray-700">If harassed, send a formal email to the bank's Grievance Redressal Officer detailing the abuse.</p>
                </div>
              </div>

            </section>

            {/* How to Talk Section */}
            <section id="how-to-talk" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Talk to Recovery Agents</h2>
              
              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <p className="text-lg leading-relaxed mb-6 text-gray-800">
                  Knowing how to talk to recovery agents is crucial. Showing fear or anger only fuels their persistence. You need to remain calm, authoritative, and clear about your boundaries.
                </p>
                <p className="text-lg leading-relaxed font-bold mb-2 text-gray-900">The Exact Script to Use:</p>
                <p className="text-lg leading-relaxed italic text-gray-700 bg-white p-4 rounded-lg border border-gray-300">
                  "I acknowledge the missed payment on my loan. However, receiving multiple calls a day is harassment and violates RBI guidelines. I will not engage over the phone further. Please send any communication via official email. If this harassment continues, I will escalate this to the banking ombudsman."
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-2">What NEVER to Do:</h3>
                <p className="text-red-900">
                  Do not make false promises about payment dates just to get them off the phone. Do not lose your temper or use abusive language, as they often record calls and can use it against you. Never give them alternate contact numbers of friends or family.
                </p>
              </div>
            </section>

            {/* Steps to Stop Calls Section */}
            <section id="stop-recovery-calls" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Steps to Stop Recovery Calls</h2>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Answer Once and State Your Case</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Do not completely ignore the calls initially. Answer one call, state your situation clearly, use the script mentioned above, and request all future communication in writing via email.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Send a Formal Email</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Write to the customer service email of your bank. State that you are facing financial hardship, acknowledge the missed EMI, and formally request a halt to telephonic harassment. Mention that you have received X number of calls in a single day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Install Call Blocking Apps</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Once you have formally communicated with the bank via email, you are under no obligation to entertain 20 calls a day. Use applications like Truecaller to identify and block spam recovery numbers to protect your mental peace.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Complain to the Ombudsman</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      If the harassment persists after 30 days of filing a complaint with the bank, escalate the matter to the RBI Ombudsman online. Attach your call logs and emails as proof of harassment.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories Section */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      A
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" /></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"I was getting 30+ calls a day. I used the script, followed it up with an email to the nodal officer, and within 48 hours, the calls completely stopped. I could finally think straight."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan Amount: ₹5,00,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Harassment Stopped</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      P
                    </div>
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" /></svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">"The agents started calling my office. I immediately filed an RBI ombudsman complaint and sent legal notice. The bank apologized and penalized the agency."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-700 text-xs font-bold">Loan Amount: ₹12,00,000</span>
                    <span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-700 text-xs font-bold">Settled Peacefully</span>
                  </div>
                </div>

              </div>
            </section>

            {/* FAQs Section */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  { q: "Can a bank call for EMI payment 20 times a day?", a: "No, RBI guidelines strictly prohibit banks from harassing borrowers with excessive calls. They can only contact you during reasonable hours (typically 8 AM to 7 PM)." },
                  { q: "How to stop recovery calls permanently?", a: "You can stop recovery calls by communicating your situation in writing, restructuring your loan, or raising a formal complaint with the banking ombudsman if harassment occurs." },
                  { q: "What is the exact script to use with tele-callers?", a: "State clearly: 'I am aware of my missed payment. Please do not call repeatedly as it violates RBI guidelines. Send me an email with the details, and I will respond.'" },
                  { q: "Can recovery agents call my relatives or friends?", a: "No. Recovery agents are not legally allowed to contact your relatives, friends, or employer regarding your loan default." },
                  { q: "Do I have to answer every call from the bank?", a: "While you should not evade the bank entirely, you are not obligated to answer 20 calls a day. Answer once, state your position, and request written communication." },
                  { q: "What should I do if agents use abusive language?", a: "Record the call, note down the agent's details, and file a formal grievance with the bank's nodal officer and the RBI Ombudsman." },
                  { q: "Can a single EMI bounce lead to legal action?", a: "A single EMI bounce usually results in a late fee and reminder calls, not immediate legal action. Legal steps typically start after 90 days of continuous default (NPA)." },
                  { q: "Will an EMI bounce affect my CIBIL score?", a: "Yes, even a single missed payment will be reported to credit bureaus and can negatively impact your CIBIL score." },
                  { q: "Is it better to ignore calls or talk to the bank?", a: "It is always better to communicate with the bank. Ignoring calls can escalate the situation. Be polite but firm about your rights." },
                  { q: "Can I request more time to pay my EMI?", a: "Yes, you can request a forbearance or a temporary moratorium, though approval is at the bank's discretion and usually requires proof of financial hardship." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow">
                    <summary className="font-bold text-lg text-[#2E2E2E] outline-none">{faq.q}</summary>
                    <p className="mt-4 text-gray-700 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Stop the Harassment Now.</h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Are you facing relentless calls and mental torture over a bounced EMI? Speak to our legal experts today and put an end to the harassment immediately.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 text-lg shadow-[0_0_20px_rgba(31,94,255,0.4)]">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: The content on this page is for informational purposes only and does not constitute financial or legal advice. Always consult with a qualified professional before taking any action.
              </p>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="text-2xl font-black mb-4">End Call Harassment</div>
                  <p className="text-sm text-gray-300 mb-6">
                    Our legal team can draft and send a formal cease and desist notice to your bank to stop illegal recovery practices.
                  </p>
                  <Link href="/contact" className="block w-full py-3 px-4 bg-[#1F5EFF] rounded-xl font-bold hover:bg-blue-600 transition-colors">
                    Get Legal Help
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <div className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">
                  Helpful Resources
                </div>
                <ul className="space-y-4">
                  <li>
                    <Link href="/guides/rbi-guidelines-recovery-agents" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Guidelines on Recovery
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/how-to-file-ombudsman-complaint" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Filing an Ombudsman Complaint
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/what-is-npa" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Understanding NPA Accounts
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides/personal-loan-settlement" className="flex items-center text-gray-700 hover:text-[#1F5EFF] group transition-colors text-sm font-medium">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      Personal Loan Settlement Guide
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
