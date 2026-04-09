import Link from "next/link";
import banksData from "./banks.json";
import { Metadata } from "next";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export const metadata: Metadata = {
  title: "Loan Settlement for Banks in India | Expert Debt Relief - SettleLoans",
  description: "Comprehensive list of banks and NBFCs for loan settlement in India. Professional help to settle your credit card and personal loans for 40-70% less.",
};

export default function LoanSettlementByBank() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "url": "https://settleloans.in/loan-settlement-by-bank",
        "name": "Loan Settlement for Banks in India | SettleLoans",
        "description": "Find loan settlement procedures for all major banks and NBFCs in India."
      },
      {
        "@type": "Product",
        "name": "Bank Loan Settlement Assistance",
        "description": "Professional debt negotiation services for borrowers of all Indian banks.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikas Tiwari" },
            "datePublished": "2024-03-12",
            "reviewBody": "Excellent guidance for my ICICI bank settlement. Saved more than 50%.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Priya Sharma" },
            "datePublished": "2024-02-28",
            "reviewBody": "SettleLoans staff is very professional. They helped me with my SBI credit card settlement.",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" }
          }
        ]
      }
    ]
  };

  const reviews = [
    {
      name: "Vikas Tiwari",
      bank: "ICICI Bank",
      text: "Excellent guidance for my ICICI bank settlement. Saved more than 50% on my total outstanding dues. The recovery calls stopped immediately after I joined.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      bank: "SBI",
      text: "SettleLoans staff is very professional. They handled my SBI credit card settlement with ease. I was worried about legal notices, but they managed everything.",
      rating: 5
    },
    {
      name: "Manish Reddy",
      bank: "HDFC Bank",
      text: "The best experience I've had with debt relief. They negotiated a 60% waiver for my HDFC personal loan. Highly recommended for anyone in debt trap.",
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
            Bank-Wise Resolution Experts
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a202c] mb-8 leading-tight tracking-tight">
            Loan Settlement for <br className="hidden md:block" /> Top Banks in India
          </h1>
          <p className="text-lg md:text-xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed">
            Struggling with debt? Find specialized settlement procedures for your bank. We help you negotiate with {banksData.length}+ financial institutions to settle for less.
          </p>
        </div>
      </section>

      {/* Bank Grid Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 px-4">
            <div>
              <h2 className="text-3xl font-black text-[#1a202c] mb-2 font-sans tracking-tight">
                Select Your Bank
              </h2>
              <p className="text-slate-500 font-medium italic">Click on your bank to see official settlement contact details</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0 px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-[#004c94] border border-slate-100">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               {banksData.length} ACTIVE PARTNER ROUTES
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {banksData.map((bank, index) => {
              const slug = slugify(bank.company);
              return (
                <Link
                  key={index}
                  href={`/loan-settlement-by-bank/${slug}`}
                  className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,76,148,0.2)] hover:border-[#004c94]/20 transition-all duration-500 flex flex-col items-center justify-center text-center h-full min-h-[160px] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#004c94]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="text-base font-black text-[#1a202c] group-hover:text-[#004c94] transition-colors line-clamp-2 relative z-10 font-sans tracking-tight leading-tight">
                    {bank.company}
                  </div>
                  <div className="mt-5 flex items-center text-[#ed232a] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-[10px] font-black uppercase tracking-[0.2em] relative z-10">
                    Settle Now
                    <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
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
            <h2 className="text-3xl md:text-5xl font-black text-[#1a202c] mb-4">Customer Success Stories</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-[#004c94] font-black text-sm uppercase tracking-widest">Rated 4.9/5 based on 10,000+ settlements</p>
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
                  <span className="text-xs font-bold text-[#1F5EFF] uppercase tracking-wider">Settle for {review.bank}</span>
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
              Can't find your bank?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
              We work with <strong>every registered</strong> Bank and NBFC in India. If you don't see yours here, we can still help you achieve financial freedom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 bg-[#ed232a] text-white font-black rounded-2xl hover:bg-[#d11d23] hover:scale-105 transition-all shadow-xl"
              >
                Free Case Analysis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
               <Link 
                href="/loan-settlement" 
                className="inline-flex items-center justify-center px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
              >
                General Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
