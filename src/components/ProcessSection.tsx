"use client";

import Image from 'next/image';
import React from 'react';

const processItems = [
  {
    icon: "/handshake.png",
    title: "Direct Lender Negotiation",
    description: "We engage directly with banks and recovery teams to craft settlement terms tailored to your case."
  },
  {
    icon: "/mail.png",
    title: "Verified Settlement Records",
    description: "Receive documented settlement letters issued by lenders not just verbal confirmations."
  },
  {
    icon: "/meter.png",
    title: "Credit Recovery Guidance",
    description: "We guide you on rebuilding your credit profile after resolution for long-term financial stability."
  },
  {
    icon: "/sec.png",
    title: "Legal-Backed Process",
    description: "Every settlement follows a structured, lawful process aligned with lender policies and regulatory standards."
  },
  {
    icon: "/call.png",
    title: "Dedicated Case Manager",
    description: "A single expert guides your case from start to closure."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#2E2E2E] py-16 md:py-[12vh] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8 md:sticky md:top-24">
            <div className="space-y-6">
              <h2 
                className="font-black leading-[1.1] tracking-tight text-[#DEDEDE] text-[clamp(35px,5vh,50px)] sm:text-[clamp(40px,6vh,60px)] md:text-[clamp(50px,7.5vh,75px)] transition-all duration-700 ease-in-out"
                style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
              >
                Settlement, <br /> Backed by Process
              </h2>
              <p 
                className="font-normal leading-[1.07] text-[#DEDEDE] text-[clamp(18px,2.5vh,22px)] md:text-[clamp(22px,3vh,27px)] transition-opacity duration-700"
                style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
              >
                A secure, compliant system built to deliver real outcomes at every stage.
              </p>
            </div>
            
            <div className="relative w-full max-w-md mx-auto md:mx-0">
               <Image 
                  src="/man.png" 
                  alt="Process illustration" 
                  width={600} 
                  height={600} 
                  className="w-full h-auto object-contain"
               />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-12">
            {processItems.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative">
                  <Image 
                    src={item.icon} 
                    alt={item.title} 
                    fill 
                    className="object-contain filter transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-2">
                  <h3 
                    className="text-[#DEDEDE] font-black text-xl md:text-2xl"
                    style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-[#DEDEDE]/70 font-normal leading-relaxed text-base md:text-lg"
                    style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
