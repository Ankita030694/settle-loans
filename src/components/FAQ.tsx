"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const faqs = [
  {
    question: "What types of loans can SettleLoans help with?",
    answer: "We specialize in settling unsecured loans such as personal loans, credit card debts, and business loans. We also provide legal representation for dealing with digital lending apps and NBFC loans."
  },
  {
    question: "How long does the settlement process usually take?",
    answer: "The timeline typically ranges from 3 to 12 months, depending on the number of creditors, the outstanding amount, and the negotiation phase with the lenders."
  },
  {
    question: "Will recovery calls stop once I start the process?",
    answer: "Yes. Once you enroll, we provide a legal shield by filing formal RBI complaints against abusive lenders and diverting recovery calls to our legal team."
  },
  {
    question: "Is SettleLoans a bank or financial institution?",
    answer: "No, SettleLoans is a professional debt settlement and legal advisory firm. We represent borrowers to negotiate with banks and NBFCs for a legal and final settlement of their debts."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="bg-white py-16 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background Top Gradient/Blur */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#E0EDFF] to-white pointer-events-none opacity-60" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="lg:w-[45%] space-y-6">
            <h2 className="text-[#2E2E2E] text-[48px] md:text-[60px] font-bold leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
              Frequently Asked <br className="hidden md:block"/> Questions
            </h2>
            <p className="text-[#6D6D6D] text-[18px] md:text-[22px] font-normal leading-[1.2] max-w-md transition-all duration-300" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
              Clear answers to help you understand our process, pricing, and what to expect at every step.
            </p>
            
            <div className="flex items-center gap-4 py-2">
              <div className="flex -space-x-3 overflow-hidden">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                ].map((src, i) => (
                  <div key={i} className="inline-block h-12 w-12 rounded-full ring-2 ring-white overflow-hidden relative">
                    <Image src={src} alt="User" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[#2E2E2E] text-xl font-bold leading-none" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>100+ Successful Settlements</p>
                <p className="text-[#6D6D6D] text-sm font-medium" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>Last Month</p>
              </div>
            </div>

            <button className="bg-[#1F5EFF] text-white px-8 py-3 rounded-[10px] text-lg font-medium transition-all duration-300 hover:bg-[#1648CC] hover:shadow-lg active:scale-[0.98]">
              Request Assistance
            </button>
          </div>

          {/* Right Column (Accordion) */}
          <div className="lg:w-[55%] w-full space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                  className={`w-full text-left min-h-[80px] px-8 py-3 flex items-center justify-between gap-4 transition-all duration-300 rounded-[15px] ${openIndex === index ? 'bg-[#C7D9FF] text-black shadow-sm' : 'bg-[#E3EDFF] hover:bg-[#D4E4FF] text-[#2E2E2E]'}`}
                >
                  <span className="text-[18px] md:text-[21px] font-bold leading-tight" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 py-4 text-[#4A4A4A] text-[17px] leading-relaxed bg-white/50 backdrop-blur-sm rounded-b-[15px] -mt-1 border-x border-b border-[#C7D9FF]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
