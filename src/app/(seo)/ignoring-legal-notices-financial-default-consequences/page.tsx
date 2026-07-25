import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Ignoring Legal Notices: Financial & Default Consequences",
  description: "Throwing bank notices in the trash? Discover what happens if you ignore bank notices, Section 138 notices, and the risks of an Ex-Parte order for loan default.",
  alternates: {
    canonical: "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences"
  }
};

const tocItems = [
  { id: 'introduction', title: 'Why You Cannot Ignore Legal Notices' },
  { id: 'types-of-notices', title: 'Common Bank Notices Explained' },
  { id: 'ex-parte-order', title: 'The Danger of an Ex-Parte Order' },
  { id: 'section-138', title: 'Ignoring Section 138 Cheque Bounce Notice' },
  { id: 'financial-consequences', title: 'Financial & Default Consequences' },
  { id: 'action-plan', title: 'How to Respond to a Bank Notice' },
  { id: 'success-stories', title: 'Client Success Stories' },
  { id: 'faq', title: 'Frequently Asked Questions' }
];

export default function IgnoringLegalNoticesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences/#webpage",
        "url": "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences",
        "name": "Ignoring Legal Notices: Financial & Default Consequences",
        "description": "Discover what happens if you ignore bank notices, Section 138 notices, and the risks of an Ex-Parte order for loan default.",
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in/" },
          { "@type": "ListItem", "position": 2, "name": "Loan Defaults", "item": "https://www.settleloan.in/all-queries" },
          { "@type": "ListItem", "position": 3, "name": "Ignoring Legal Notices", "item": "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences" }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences/#article",
        "headline": "Ignoring Legal Notices: Financial & Default Consequences",
        "description": "Throwing bank notices in the trash? Ignoring legal summons will lead to an 'Ex-Parte' court order against you. Act now before you lose your defense.",
        "author": { "@type": "Organization", "name": "SettleLoan" },
        "publisher": { "@type": "Organization", "name": "SettleLoan", "logo": { "@type": "ImageObject", "url": "https://www.settleloan.in/logo.png" } },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.settleloan.in/ignoring-legal-notices-financial-default-consequences/#webpage" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What happens if I ignore bank notice for loan default?",
            "acceptedAnswer": { "@type": "Answer", "text": "Ignoring a bank notice for loan default can lead to the bank initiating aggressive legal action, such as filing a civil suit, declaring the account an NPA, or obtaining an Ex-Parte order in your absence." }
          },
          {
            "@type": "Question",
            "name": "What is an Ex-Parte order in a loan default case?",
            "acceptedAnswer": { "@type": "Answer", "text": "An Ex-Parte order is a court order passed against you in your absence because you failed to appear in court or respond to the legal summons. The court assumes you have no defense." }
          },
          {
            "@type": "Question",
            "name": "Can I go to jail if I ignore a Section 138 notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. A Section 138 notice pertains to a cheque bounce. If ignored and you fail to appear in court, the magistrate can issue a non-bailable warrant, potentially leading to arrest." }
          },
          {
            "@type": "Question",
            "name": "How long do I have to reply to a legal notice from a bank?",
            "acceptedAnswer": { "@type": "Answer", "text": "Typically, legal notices from banks give you 7 to 15 days, or up to 60 days under the SARFAESI Act, to reply or settle the dues." }
          },
          {
            "@type": "Question",
            "name": "Can ignoring a notice ruin my CIBIL score?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Ignoring the notice usually means ignoring the debt. The bank will report you as a defaulter, heavily crashing your CIBIL score." }
          },
          {
            "@type": "Question",
            "name": "Will the bank attach my property if I ignore their notices?",
            "acceptedAnswer": { "@type": "Answer", "text": "For secured loans, ignoring notices under the SARFAESI Act allows the bank to take physical possession of your property and auction it off without court intervention." }
          },
          {
            "@type": "Question",
            "name": "Can I challenge an Ex-Parte order?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can file an application to set aside an Ex-Parte order, but you must prove you had a valid reason for not appearing, which is legally complex." }
          },
          {
            "@type": "Question",
            "name": "What should I do as soon as I receive a legal notice?",
            "acceptedAnswer": { "@type": "Answer", "text": "Do not panic and do not ignore it. Consult a legal expert immediately to draft a formal legal reply addressing the bank's claims." }
          },
          {
            "@type": "Question",
            "name": "Are email notices legally valid in India?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, under the Information Technology Act, legal notices sent via registered email or even WhatsApp can be considered legally valid served summons." }
          },
          {
            "@type": "Question",
            "name": "Can a lawyer help me settle the loan after a legal notice is sent?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes, receiving a legal notice does not close the door on settlement. A lawyer can negotiate a loan settlement on your behalf even while legal proceedings are initiated." }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Loan Settlement & Legal Defense Service",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "89"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Rahul M." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I ignored a bank notice and they filed for an Ex-Parte order. SettleLoan stepped in just in time, filed a reply, and stopped the court order. Highly recommend!"
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Sonia T." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Got a section 138 notice and was terrified. Their legal team drafted a perfect response and negotiated a settlement to close the case completely."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amit K." },
            "reviewRating": { "@type": "Rating", "ratingValue": "4" },
            "reviewBody": "Very professional service. They explained exactly what happens if I ignore bank notice and helped me settle my 15 Lakh personal loan for just 5 Lakhs."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram S." },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "I was about to lose my defense in court because I threw the summons away. SettleLoan saved me from a massive legal disaster."
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Defense & Loan Settlement
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Ignoring Legal Notices: <span className="text-[#1F5EFF]">Financial & Default</span> Consequences
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Throwing bank notices in the trash? Ignoring legal summons will lead to an 'Ex-Parte' court order against you. Act now before you lose your defense.
            </p>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Expert Legal Help Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4 text-xs md:text-sm text-[#747474] flex items-center gap-2">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/all-queries" className="hover:text-[#1F5EFF] transition-colors">Loan Defaults</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Ignoring Legal Notices</span>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit">
            <TableOfContents items={tocItems} />
          </aside>

          {/* Middle Column: Main Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            <section id="introduction" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden mb-8">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Why You Cannot Ignore Legal Notices
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  When a loan goes into default and recovery agents fail to collect the dues, banks resort to their most powerful tool: <strong>legal notices</strong>. Many borrowers make the fatal mistake of ignoring these notices, thinking that out of sight means out of mind.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-[#2E2E2E]/80">
                  However, in the Indian legal system, <strong>what happens if you ignore a bank notice</strong> is disastrous. Ignoring a legal notice does not stop the legal proceedings; it merely guarantees that the proceedings happen <em>without your voice</em> being heard, leading directly to a loss of your legal rights and an inevitable court judgment against you.
                </p>
              </div>
            </section>

            <section id="types-of-notices" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Common Bank Notices Explained</h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks do not immediately file cases. They follow a step-by-step escalation matrix. Here are the most common notices borrowers receive and mistakenly ignore:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Recall Notice</h3>
                  <p className="text-base text-[#2E2E2E]/80">A notice demanding the repayment of the entire outstanding loan amount immediately because you breached the loan terms.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Arbitration Notice</h3>
                  <p className="text-base text-[#2E2E2E]/80">Summons invoking the arbitration clause in your loan agreement to settle the dispute outside traditional courts.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">Section 138 Notice</h3>
                  <p className="text-base text-[#2E2E2E]/80">Sent when a security cheque or PDC bounces. This is a criminal offense notice carrying jail time if ignored.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">SARFAESI Notice</h3>
                  <p className="text-base text-[#2E2E2E]/80">Issued under Section 13(2) for secured loans, giving the bank the right to auction your property without court intervention.</p>
                </div>
              </div>
            </section>

            <section id="ex-parte-order" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">The Danger of an Ex-Parte Order</h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h3 className="text-xl font-black text-red-700 mb-4">What is an Ex-Parte Order?</h3>
                <p className="text-lg text-red-900 leading-relaxed">
                  If the bank files a civil suit for recovery or initiates arbitration, you will be sent a summons to appear. If you ignore this summons or the notices leading up to it, the judge or arbitrator will proceed <strong>Ex-Parte</strong> (in your absence). Because you aren't there to defend yourself, the bank will win the case by default.
                </p>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Consequences of an Ex-Parte Order</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Immediate Liability:</strong> You become legally bound to pay the entire inflated amount claimed by the bank, including penal interest and legal fees.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Asset Attachment:</strong> The bank gets court permission to attach your bank accounts, salary, and even immovable properties to recover the decreed amount.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Loss of Negotiation Power:</strong> Once a judgment is passed against you, banks are rarely willing to offer settlements or haircuts.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="section-138" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Ignoring Section 138 Cheque Bounce Notice</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you <strong>ignore a Section 138 notice</strong>, you are walking directly into a trap. Under the Negotiable Instruments Act, bouncing a cheque is a criminal offense. Here is how the situation escalates rapidly if you throw the notice away:
              </p>

              <div className="space-y-12 my-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Statutory Period Expires</h3>
                    <p className="text-lg text-[#2E2E2E]/80">The notice gives you 15 days to pay the cheque amount. By ignoring it, this window closes, and the bank gets the legal right to file a criminal complaint.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Court Issues Summons</h3>
                    <p className="text-lg text-[#2E2E2E]/80">The magistrate registers the criminal case and issues summons commanding you to appear in court on a specific date.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Non-Bailable Warrant Issued</h3>
                    <p className="text-lg text-[#2E2E2E]/80">If you continue to ignore the court summons, the magistrate will issue a Non-Bailable Warrant (NBW) for your arrest.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="financial-consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Financial & Default Consequences</h2>
              <p className="text-lg leading-relaxed mb-6">
                Beyond the immediate legal risks of ignoring a notice, the long-term financial consequences are severe and can cripple your economic stability for years.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h3 className="text-2xl font-black text-[#2E2E2E] mb-4">Complete Credit Destruction</h3>
                <p className="text-lg text-[#2E2E2E]/80 leading-relaxed">
                  Ignoring a legal notice equates to abandoning the debt. Your lender will mark your account as a 'Wilful Defaulter' or 'Written Off' in your CIBIL report. Your credit score will plummet, and you will be blacklisted from obtaining loans, credit cards, or mortgages from any regulated financial institution in India for up to 7 years.
                </p>
              </div>
            </section>

            <section id="action-plan" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">How to Respond to a Bank Notice</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have received a legal notice, do not panic. Follow this strategic action plan to protect your rights:
              </p>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Strategic Steps to Take</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Do Not Acknowledge Debt Blindly:</strong> Do not reply on WhatsApp or email admitting liability. Let a lawyer handle the communication.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Draft a Formal Legal Reply:</strong> Hire an expert advocate to draft a strong counter-reply within the stipulated time, disputing inflated charges and illegal harassment tactics.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p className="text-[#2E2E2E]/90 text-lg"><strong>Initiate Settlement Talks:</strong> Use the legal reply as leverage to bring the bank to the negotiating table for a One-Time Settlement (OTS) at a highly reduced amount.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">Client Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RM
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E] text-lg">Rahul M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"I ignored a bank notice and they filed for an Ex-Parte order. SettleLoan stepped in just in time, filed a reply, and stopped the court order. Highly recommend!"</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Loan: ₹12 Lakhs</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Settled: ₹4 Lakhs</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      ST
                    </div>
                    <div>
                      <h4 className="font-black text-[#2E2E2E] text-lg">Sonia T.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"Got a section 138 notice and was terrified. Their legal team drafted a perfect response and negotiated a settlement to close the case completely."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Loan: ₹8 Lakhs</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Settled: ₹3 Lakhs</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  { q: "What happens if I ignore bank notice for loan default?", a: "Ignoring a bank notice for loan default can lead to the bank initiating aggressive legal action, such as filing a civil suit, declaring the account an NPA, or obtaining an Ex-Parte order in your absence." },
                  { q: "What is an Ex-Parte order in a loan default case?", a: "An Ex-Parte order is a court order passed against you in your absence because you failed to appear in court or respond to the legal summons. The court assumes you have no defense." },
                  { q: "Can I go to jail if I ignore a Section 138 notice?", a: "Yes. A Section 138 notice pertains to a cheque bounce. If ignored and you fail to appear in court, the magistrate can issue a non-bailable warrant, potentially leading to arrest." },
                  { q: "How long do I have to reply to a legal notice from a bank?", a: "Typically, legal notices from banks give you 7 to 15 days, or up to 60 days under the SARFAESI Act, to reply or settle the dues." },
                  { q: "Can ignoring a notice ruin my CIBIL score?", a: "Absolutely. Ignoring the notice usually means ignoring the debt. The bank will report you as a defaulter, heavily crashing your CIBIL score." },
                  { q: "Will the bank attach my property if I ignore their notices?", a: "For secured loans, ignoring notices under the SARFAESI Act allows the bank to take physical possession of your property and auction it off without court intervention." },
                  { q: "Can I challenge an Ex-Parte order?", a: "Yes, you can file an application to set aside an Ex-Parte order, but you must prove you had a valid reason for not appearing, which is legally complex." },
                  { q: "What should I do as soon as I receive a legal notice?", a: "Do not panic and do not ignore it. Consult a legal expert immediately to draft a formal legal reply addressing the bank's claims." },
                  { q: "Are email notices legally valid in India?", a: "Yes, under the Information Technology Act, legal notices sent via registered email or even WhatsApp can be considered legally valid served summons." },
                  { q: "Can a lawyer help me settle the loan after a legal notice is sent?", a: "Yes, receiving a legal notice does not close the door on settlement. A lawyer can negotiate a loan settlement on your behalf even while legal proceedings are initiated." }
                ].map((faq, index) => (
                  <details key={index} name="faq-accordion" className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md group cursor-pointer transition-shadow mb-4">
                    <summary className="list-none font-bold text-lg flex justify-between items-center outline-none text-[#2E2E2E]">
                      {faq.q}
                      <span className="text-[#1F5EFF] group-open:rotate-180 transition-transform duration-300">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </summary>
                    <div className="pt-4 mt-4 border-t border-gray-100 text-lg text-[#2E2E2E]/80 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Stop the Ex-Parte Order Now.</h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
                  Have you ignored bank notices? Let our expert lawyers draft a powerful reply and negotiate a final settlement to close your loan legally.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-5 px-12 rounded-2xl hover:scale-105 transition-all duration-300 text-xl shadow-[0_10px_40px_-10px_rgba(31,94,255,0.7)]">
                  Get Free Legal Consultation
                </Link>
                
                <div className="mt-16 pt-8 border-t border-gray-700 text-center">
                  <p className="text-gray-400 text-sm italic">
                    Disclaimer: This information is for educational purposes and does not constitute legal advice. Loan settlements depend on bank policies and individual financial conditions.
                  </p>
                </div>
              </div>
            </div>

          </article>

          {/* Right Sidebar: Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] sticky top-24 h-fit space-y-8">
            <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Received a Notice?</h3>
                <p className="text-gray-300 mb-6 text-sm">Do not ignore it. Let our lawyers draft a reply and stop legal harassment.</p>
                <Link href="/contact" className="block w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors text-sm">
                  Contact Legal Team
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Legal Resources</h3>
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-[#2E2E2E] hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    Bank Sent Legal Notice For Loan
                  </Link>
                </li>
                <li className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                  <Link href="/legal-notice-for-loan-recovery" className="text-[#2E2E2E] hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    Legal Notice For Loan Recovery
                  </Link>
                </li>
                <li className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                  <Link href="/how-to-stop-loan-recovery-harassment" className="text-[#2E2E2E] hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    Stop Loan Recovery Harassment
                  </Link>
                </li>
                <li className="flex items-center group">
                  <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                  <Link href="/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons" className="text-[#2E2E2E] hover:text-[#1F5EFF] text-sm font-medium transition-colors">
                    Order 37 CPC Summons Defence
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
