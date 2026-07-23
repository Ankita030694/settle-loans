import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Check Free CIBIL Score Online | Official Report Without Impact",
  description: "Stop paying for expensive credit reports. Learn how to legally download your full, official CIBIL report for absolutely free.",
  alternates: {
    canonical: "https://www.settleloan.in/check-free-cibil-score",
  },
};

const tocItems = [
  { id: 'why-check-cibil', title: 'Why Check Your CIBIL Score?' },
  { id: 'official-free-report', title: 'How to Get Your Official Free Report' },
  { id: 'step-by-step', title: 'Step-by-Step Guide' },
  { id: 'no-impact-check', title: 'Checking Without Impacting Score' },
  { id: 'success-stories', title: 'Success Stories' },
  { id: 'faqs', title: 'Frequently Asked Questions' },
];

export default function CheckFreeCibilScorePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Check Free CIBIL Score Online | Official Report Without Impact",
      "description": "Stop paying for expensive credit reports. Learn how to legally download your full, official CIBIL report for absolutely free.",
      "url": "https://www.settleloan.in/check-free-cibil-score"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.settleloan.in/" },
        { "@type": "ListItem", "position": 2, "name": "Credit Education", "item": "https://www.settleloan.in/credit-education" },
        { "@type": "ListItem", "position": 3, "name": "Check Free CIBIL Score", "item": "https://www.settleloan.in/check-free-cibil-score" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "How to Check Your Free CIBIL Score Online",
      "author": { "@type": "Organization", "name": "SettleLoan" },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoan",
        "logo": { "@type": "ImageObject", "url": "https://www.settleloan.in/logo.png" }
      },
      "datePublished": "2024-03-15T08:00:00+08:00",
      "dateModified": "2024-03-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is it really free to check my CIBIL score?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, by law, you are entitled to one free detailed credit report from CIBIL every year. Several third-party platforms also offer free checks using a soft inquiry." }
        },
        {
          "@type": "Question",
          "name": "Will checking my CIBIL score lower it?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. When you check your own score, it's considered a 'soft inquiry' and does not impact your credit score at all." }
        },
        {
          "@type": "Question",
          "name": "How often should I check my CIBIL score?",
          "acceptedAnswer": { "@type": "Answer", "text": "It is recommended to check your CIBIL score at least once every 3 to 6 months to ensure there are no errors or fraudulent accounts." }
        },
        {
          "@type": "Question",
          "name": "What is a good CIBIL score?",
          "acceptedAnswer": { "@type": "Answer", "text": "A score above 750 is generally considered excellent and can help you get faster loan approvals at lower interest rates." }
        },
        {
          "@type": "Question",
          "name": "Can I check my CIBIL score using my PAN card?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, a PAN card is typically required by credit bureaus to uniquely identify you and fetch your credit history." }
        },
        {
          "@type": "Question",
          "name": "Are third-party apps safe for checking my score?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most recognized third-party financial apps are safe, but they may use your data for marketing. For the utmost privacy, use the official CIBIL website." }
        },
        {
          "@type": "Question",
          "name": "Why is my score different on different websites?",
          "acceptedAnswer": { "@type": "Answer", "text": "India has four major credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark). Each may have a slightly different scoring model or different updated information from banks." }
        },
        {
          "@type": "Question",
          "name": "What should I do if I find an error in my report?",
          "acceptedAnswer": { "@type": "Answer", "text": "You should immediately raise a dispute on the official CIBIL website. The bureau has 30 days to resolve the issue with the concerned bank." }
        },
        {
          "@type": "Question",
          "name": "How long does it take for a paid-off loan to reflect in CIBIL?",
          "acceptedAnswer": { "@type": "Answer", "text": "Banks usually report data to CIBIL once a month. It can take 30 to 45 days for your closed loan to reflect on your report." }
        },
        {
          "@type": "Question",
          "name": "Can I get my CIBIL report via WhatsApp?",
          "acceptedAnswer": { "@type": "Answer", "text": "Some bureaus and platforms offer quick summaries via WhatsApp, but for a detailed report, you must log into their secure web portals." }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Free Official CIBIL Report Guide",
      "description": "Comprehensive guide to securely downloading your free annual CIBIL credit report.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1048"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rajesh Kumar" },
          "datePublished": "2024-01-10",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "This guide helped me finally download my actual CIBIL report without paying random websites."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Anita S." },
          "datePublished": "2024-02-15",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "I didn't know checking my own score wouldn't drop it. Very informative and saved me money."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Vikram Desai" },
          "datePublished": "2024-02-28",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Simple, straightforward steps. Got my official PDF report from CIBIL directly in 5 minutes."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya M." },
          "datePublished": "2024-03-05",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Excellent resource! I was constantly getting tricked by fake free score sites. This is the real deal."
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
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Free Credit Report
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Check Your <span className="text-[#1F5EFF]">Free CIBIL Score</span> Online
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Stop paying for expensive credit reports. Learn how to legally download your full, official CIBIL report for absolutely free without impacting your score.
            </p>
            <Link href="#step-by-step" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Download Free Report Now
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-4">
            <p className="text-xs md:text-sm text-[#747474]">
              <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              <span className="text-gray-300 mx-2">/</span>
              <Link href="/credit-education" className="hover:text-[#1F5EFF] transition-colors">Credit Education</Link>
              <span className="text-gray-300 mx-2">/</span>
              <span className="font-bold text-[#2E2E2E]">Check Free CIBIL Score</span>
            </p>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative text-[var(--color-text-body)]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Content (Article) */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="why-check-cibil" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  Why Check Your CIBIL Score?
                </h2>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Your CIBIL score is a critical three-digit number ranging from 300 to 900 that determines your financial credibility. A strong score can unlock lower interest rates, faster loan approvals, and higher credit limits. However, checking your credit report periodically is about more than just numbers; it’s about financial hygiene.
                </p>
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  Many Indians remain unaware that they are legally entitled to one detailed credit report completely free of charge every year directly from official bureaus. Stop paying unnecessary subscription fees for information that is rightfully yours.
                </p>
              </div>
            </section>

            {/* Blue Important Box */}
            <section id="official-free-report" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Official CIBIL Report for Free
              </h2>
              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl mb-8">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">RBI Mandate on Free Reports</h4>
                <p className="text-lg leading-relaxed mb-6 text-blue-900">
                  According to the Reserve Bank of India (RBI) guidelines, every credit information company (CIC) operating in India is mandated to provide one full free credit report (FFCR) per calendar year to individuals upon request.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">You do not need a paid subscription to access this annual report.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">It contains the exact same level of detail as a paid report.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <span className="text-blue-900">You can claim one from each bureau (CIBIL, Experian, Equifax, CRIF) annually.</span>
                  </li>
                </ul>
              </div>

              {/* 4-Grid Info Boxes */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">TransUnion CIBIL</h3>
                  <p className="text-gray-700">The most widely used credit bureau in India by top banks and NBFCs.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Experian</h3>
                  <p className="text-gray-700">Known for fast updates and highly detailed alternative scoring algorithms.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">Equifax</h3>
                  <p className="text-gray-700">Offers comprehensive consumer insights and robust dispute resolution mechanisms.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-2">CRIF High Mark</h3>
                  <p className="text-gray-700">Extensively used in micro-finance and rural banking sectors.</p>
                </div>
              </div>
            </section>

            {/* Numbered Steps */}
            <section id="step-by-step" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Step-by-Step Guide to Download
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Follow these exact steps to generate your free official TransUnion CIBIL score directly from their website without getting tricked into a paid plan.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Visit Official Website</h3>
                    <p className="text-lg text-gray-700">
                      Go to the official TransUnion CIBIL website and navigate to the "Free CIBIL Score & Report" section. Avoid third-party domains pretending to be CIBIL.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Create an Account</h3>
                    <p className="text-lg text-gray-700">
                      Enter your basic details including Email ID, Name, Phone Number, and choose an ID type (PAN Card is highly recommended for accurate fetching).
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Verify Identity</h3>
                    <p className="text-lg text-gray-700">
                      You will receive an OTP on your registered mobile number and email. Enter the OTP to securely authenticate your identity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2E2E2E] mb-3">Access Dashboard</h3>
                    <p className="text-lg text-gray-700">
                      Skip any upsell pages asking for premium subscriptions. Proceed to your free dashboard to view your 3-digit score and download the PDF report.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Red Warning Box & Gray Insight Box */}
            <section id="no-impact-check" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Checking Credit Score Without Impact
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-2">Myth Buster</h4>
                <p className="text-lg text-red-900">
                  Many people falsely believe that checking their own credit score lowers it. This is completely false. Checking your own score is considered a 'Soft Inquiry'.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-gray-800 mb-4">Hard Inquiry vs. Soft Inquiry</h4>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                  <strong>Hard Inquiry:</strong> When a bank or lender checks your score because you applied for a loan or credit card. Multiple hard inquiries in a short time can lower your score.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  <strong>Soft Inquiry:</strong> When you check your own score for educational purposes or when a company checks it for pre-approved offers. Soft inquiries have absolutely zero impact on your score.
                </p>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Real User Experiences
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      RK
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Rahul K.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"I used to pay ₹1200 a year for score checks. Finally found out how to get my official RBI-mandated free report. Took 5 minutes."</p>
                  <div className="flex gap-2 text-xs font-bold uppercase tracking-wide">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Old Score: 620</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">New Score: 785</span>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-xl transition-colors">
                      SM
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Sneha M.</h4>
                      <div className="flex text-yellow-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"Checked my score securely without it dropping. Found a wrongly reported late payment, raised a dispute, and got it fixed."</p>
                  <div className="flex gap-2 text-xs font-bold uppercase tracking-wide">
                    <span className="bg-red-100 text-red-700 py-1 px-3 rounded-full">Old Score: 680</span>
                    <span className="bg-green-100 text-green-700 py-1 px-3 rounded-full">New Score: 742</span>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "Is it really free to check my CIBIL score?", a: "Yes, by law, you are entitled to one free detailed credit report from CIBIL every year. Several third-party platforms also offer free checks using a soft inquiry." },
                  { q: "Will checking my CIBIL score lower it?", a: "No. When you check your own score, it's considered a 'soft inquiry' and does not impact your credit score at all." },
                  { q: "How often should I check my CIBIL score?", a: "It is recommended to check your CIBIL score at least once every 3 to 6 months to ensure there are no errors or fraudulent accounts." },
                  { q: "What is a good CIBIL score?", a: "A score above 750 is generally considered excellent and can help you get faster loan approvals at lower interest rates." },
                  { q: "Can I check my CIBIL score using my PAN card?", a: "Yes, a PAN card is typically required by credit bureaus to uniquely identify you and fetch your credit history." }
                ].map((faq, i) => (
                  <div key={i} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-gray-700">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-black mb-6 text-white">Need Help Fixing Your Credit?</h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Have defaults, late payments, or settlement remarks ruining your CIBIL score? Let our legal experts help you remove negative marks legally.
                </p>
                <Link href="/contact-us" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-12 rounded-full hover:scale-105 transition-transform text-lg shadow-[0_0_20px_rgba(31,94,255,0.4)]">
                  Consult a Credit Expert
                </Link>
              </div>
            </div>

            {/* Disclaimer Footer */}
            <div className="mt-16 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-400 text-sm italic">
                Disclaimer: SettleLoan is a financial consulting platform. We provide guidance on legal credit repair and debt settlement. The free credit score fetch steps provided are for educational purposes. We do not directly alter credit reports.
              </p>
            </div>
            
          </article>

          {/* Right Sidebar Context Cards */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              
              {/* Card 1 (Dark CTA) */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-3">Credit Score Below 700?</h4>
                  <p className="text-sm text-gray-300 mb-6">Learn how to remove negative remarks and settlements.</p>
                  <Link href="/credit-repair" className="inline-block w-full bg-[#1F5EFF] text-white text-sm font-bold py-3 px-4 rounded-xl hover:bg-blue-600 transition-colors">
                    Repair My Credit
                  </Link>
                </div>
              </div>

              {/* Card 2 (White Resources) */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-4">Related Resources</h4>
                <ul className="space-y-4">
                  {[
                    { text: "What is a Willful Defaulter?", link: "/cibil-defaulter-list" },
                    { text: "Remove EMI Bounce Remarks", link: "/emi-bounce-charges" },
                    { text: "Improve Score Fast", link: "/improve-cibil-score" },
                    { text: "Debt Settlement Process", link: "/debt-settlement" }
                  ].map((item, i) => (
                    <li key={i} className="group">
                      <Link href={item.link} className="flex items-center text-sm text-gray-700 hover:text-[#1F5EFF] transition-colors">
                        <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </aside>
          
        </div>
      </main>
    </div>
  );
}
