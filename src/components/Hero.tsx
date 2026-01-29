"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Hero() {
  const [isFixed, setIsFixed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#2E2E2E] pt-12 pb-0 md:pt-[18vh] md:pb-0 transition-colors duration-700 flex flex-col">
      {/* Bubble Effect */}
      <div 
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[200vmax] h-[200vmax] bg-[#1F5EFF] rounded-full 
          transition-transform duration-1000 ease-in-out pointer-events-none z-0
          ${isFixed ? 'scale-100' : 'scale-0'}
        `}
        style={{ transformOrigin: 'center' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="relative w-full">
            <h1 
              className={`
                max-w-5xl mx-auto font-black leading-[1.1] tracking-tight text-[#DEDEDE]
                text-[clamp(35px,5vh,50px)] sm:text-[clamp(40px,6vh,60px)] md:text-[clamp(50px,7.5vh,75px)]
                transition-all duration-700 ease-in-out
              `}
              style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
            >
              {isFixed ? "Settle Your Loans with Confidence and Clarity" : "Facing pressure from lenders or recovery agents?"}
            </h1>
          </div>
          
          <p 
            className="max-w-3xl font-normal leading-[1.07] text-[#DEDEDE] transition-opacity duration-700
              text-[clamp(18px,2.5vh,22px)] md:text-[clamp(22px,3vh,27px)]"
            style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
          >
            {isFixed 
              ? "We help you negotiate with lenders and resolve outstanding loans through a transparent, guided, and lawful settlement process."
              : "You don’t have to navigate legal notices and financial stress alone. We help you find a structured, lawful way forward."}
          </p>
          
          <div className="flex flex-col items-center gap-6 md:gap-8 w-full">
            <div className="relative z-20 transition-transform duration-300">
              {!isFixed && (
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl animate-pulse-glow -z-10" />
              )}
              <button
                onClick={() => setIsFixed(!isFixed)}
                className={`relative inline-flex items-center h-16 w-40 sm:h-20 sm:w-50 rounded-full transition-all duration-300 ease-in-out focus:outline-none border-1 
                  ${isFixed ? 'bg-[#2E2E2E] border-[#2E2E2E]' : 'bg-[#007AFF] border-[#007AFF]'}
                `}
              >
                <span className="sr-only">Fix it toggle</span>
                {!isFixed && (
                  <span 
                    className={`absolute transition-all duration-300 ease-in-out font-black text-xl sm:text-2xl text-white right-6 sm:right-8`}
                  >
                    FIX IT
                  </span>
                )}
                <div
                  className={`
                    absolute top-[6px] left-[6px] h-11 w-11 sm:h-16 sm:w-16 rounded-full bg-white transition-transform duration-500 ease-in-out shadow-sm
                    ${isFixed ? 'translate-x-[98px] sm:translate-x-[120px]' : 'translate-x-0'}
                    ${!isFixed ? 'animate-amoeba' : ''}
                  `}
                />
              </button>
            </div>

            <div className="grid grid-cols-1 w-full mx-auto px-4 sm:px-8 -mt-[9vh] place-items-center">
              <div 
                className={`col-start-1 row-start-1 transition-opacity duration-700 w-full flex justify-center ${isFixed ? 'opacity-0' : 'opacity-90'}`}
              >
                <Image
                  src="/Dark2.svg"
                  alt="Loan pressure illustration"
                  width={1900}
                  height={1080}
                  className="h-auto w-auto max-h-[50vh] object-contain"
                  priority
                />
              </div>
              <div 
                className={`col-start-1 row-start-1 transition-opacity duration-700 w-full flex justify-center ${isFixed ? 'opacity-90' : 'opacity-0'}`}
              >
                <Image
                  src="/Blue2.svg"
                  alt="Loan settlement illustration"
                  width={1900}
                  height={1080}
                  className="h-auto w-auto max-h-[50vh] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
