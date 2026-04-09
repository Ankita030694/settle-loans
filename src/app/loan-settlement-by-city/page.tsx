import React from "react";
import Link from "next/link";
import { locationData } from "./locationData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Lawyers for Loan Settlement & Debt Relief by City | SettleLoans",
  description:
    "Find expert advocates and lawyers for loan settlement across 1,500+ cities in India. Professional legal assistance to settle your debts and stop bank harassment.",
};

export default function LawyerByCity() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "url": "https://settleloans.in/loan-settlement-by-city",
        "name": "Loan Settlement Services by City in India | SettleLoans",
        "description": "Find specialized loan settlement lawyers and procedures for your specific city in India."
      },
      {
        "@type": "Service",
        "name": "City-Wise Loan Settlement Assistance",
        "description": "Expert legal representation for debt negotiation in over 1,500 cities across India.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2450"
        }
      }
    ]
  };

  const reviews = [
    {
      name: "Amit Patel",
      city: "Mumbai",
      text: "Found the best legal advice for my credit card settlement in Mumbai. The team stopped the calls within 48 hours. Saved 60% on my debt.",
      rating: 5
    },
    {
      name: "Suresh Rao",
      city: "Bengaluru",
      text: "Highly professional service in Bangalore. They handled my complex business loan settlement with the bank very effectively.",
      rating: 5
    },
    {
      name: "Meena Gupta",
      city: "Delhi",
      text: "I was very stressed about my personal loan in Delhi. SettleLoans' lawyers were empathetic and got me a great settlement deal.",
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-20 selection:bg-[#004c94] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-[#f8faff] py-20 px-4 md:px-8 lg:px-16 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#004c94]/5 -skew-x-12 transform origin-top"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#004c94]/10 text-[#004c94] text-xs font-bold mb-6 tracking-widest uppercase">
            Pan-India Legal Network
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a202c] mb-8 leading-tight tracking-tight">
            Loan Settlement Experts <br className="hidden md:block" /> in Your City
          </h1>
          <p className="text-lg md:text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Struggling with debt? Find specialized legal assistance in your local area. We provide expert loan settlement services across {locationData.length}+ cities in India.
          </p>
        </div>
      </section>

      {/* City Grid Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 px-4">
            <div>
              <h2 className="text-3xl font-black text-[#1a202c] mb-2 font-sans tracking-tight">
                Select Your Location
              </h2>
              <p className="text-slate-500 font-medium italic">Click on your city to find local settlement lawyers and procedures</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-[#004c94] border border-slate-100">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               {locationData.length} ACTIVE CITIES
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {locationData.map((loc, index) => {
              return (
                <Link
                  key={index}
                  href={`/loan-settlement-by-city/${loc.slug}`}
                  className="text-sm text-slate-600 hover:text-[#004c94] hover:underline transition-colors duration-200 py-1"
                >
                  Loan Settlement in {loc.name}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Review Snippets Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1a202c] mb-4">Trusted Across India</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-[#004c94] font-black text-sm uppercase tracking-widest">Help reach financial freedom in every corner of the country</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-white hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-[#4a5568] mb-8 font-medium italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex flex-col">
                  <span className="font-black text-[#1a202c]">{review.name}</span>
                  <span className="text-xs font-bold text-[#1F5EFF] uppercase tracking-wider">Settled in {review.city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-[#1a202c] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/5">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ed232a]/10 filter blur-[80px] rounded-full -mr-40 -mt-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#004c94]/10 filter blur-[80px] rounded-full -ml-40 -mb-40 animate-pulse"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">
              Get Local Legal Support
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              We have a network of <strong>expert advocates</strong> in almost every city. Don't face the banks alone—get legal protection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-[#ed232a] text-white font-black rounded-2xl hover:bg-[#d11d23] hover:scale-105 transition-all shadow-xl"
              >
                Free Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
               <Link 
                href="/loan-settlement" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
