"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

// Real data for settlement letters
const letters = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  src: `/settlement-letters/${i + 1}.jpg`,
  alt: `Settlement Letter ${i + 1}`
}));

export default function SettlementLetters() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative bg-[#2E2E2E] py-12 md:py-[10vh] overflow-hidden flex flex-col items-center">
        
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center mb-12 md:mb-[5vh]">
        <h2 
          className={`
            max-w-5xl mx-auto font-black leading-[1.1] tracking-tight text-[#DEDEDE]
            text-[clamp(35px,5vh,50px)] sm:text-[clamp(40px,6vh,60px)] md:text-[clamp(50px,7.5vh,75px)]
            transition-all duration-700 ease-in-out mb-6
          `}
          style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
        >
          Real Settlements. <br /> Real Results.
        </h2>

        <p 
          className="max-w-3xl mx-auto font-normal leading-[1.07] text-[#DEDEDE] transition-opacity duration-700
            text-[clamp(18px,2.5vh,22px)] md:text-[clamp(22px,3vh,27px)]"
          style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
        >
          Explore verified settlement letters from clients who’ve successfully resolved their loans with SettleLoans.
        </p>
      </div>

      <div className="w-full relative px-0 md:px-0">
        <Swiper
          onSwiper={setSwiperInstance}
          effect={'slide'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.4} // Mobile default: 1 active + 0.2 each side
          spaceBetween={16}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3, // 1 active + 1 full each side
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4, // 1 active + 1 full each side + 0.5 each edge (Total 4)
              spaceBetween: 40,
            }
          }}
          navigation={{
             prevEl: prevRef.current,
             nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
             if (typeof swiper.params.navigation !== 'boolean') {
                const navigation = swiper.params.navigation as any;
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
             }
          }}
          modules={[Navigation]}
          className="w-full settlement-swiper !overflow-visible"
        >
          {letters.map((letter) => (
            <SwiperSlide key={letter.id} className="transition-all duration-500 ease-out flex justify-center">
              {({ isActive, isPrev, isNext }) => {
                // Determine if this slide is one of the "side" slides or the active one
                // Swiper's loop mode makes indices tricky, so we rely on isActive and neighbor classes if needed, 
                // but for 1-2-2 we can use opacity based on distance from center.
                return (
                  <div 
                    className={`
                      relative rounded-xl transition-all duration-700 ease-out w-full
                      ${isActive ? 'z-20 scale-100 opacity-100' : 'z-10 scale-90 opacity-40 grayscale-[0.8] brightness-50'}
                    `}
                    style={{ 
                      aspectRatio: '0.707',
                    }}
                  >
                      {/* Active Blue Glow */}
                      {isActive && (
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] z-0 bg-[#007AFF] blur-[30px] opacity-60 pointer-events-none"></div>
                      )}
                       
                      {/* Card Container */ }
                     <div className={`
                         relative rounded-xl overflow-hidden h-full w-full bg-white shadow-2xl z-10
                     `}>
                           <div className="relative h-full w-full bg-white flex items-center justify-center overflow-hidden">
                              <Image 
                                  src={letter.src} 
                                  alt={letter.alt} 
                                  fill 
                                  className="object-contain" 
                                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 30vw"
                              />
                           </div>
                     </div>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center items-center gap-6 mt-12 relative z-30">
            <button ref={prevRef} className="swiper-button-prev-custom group flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#333] hover:bg-[#333] transition-all duration-300">
                <ArrowLeft className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
            <button ref={nextRef} className="swiper-button-next-custom group flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] border border-[#333] hover:bg-[#333] transition-all duration-300">
                <ArrowRight className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
            </button>
        </div>
      </div>
    </section>
  );
}
