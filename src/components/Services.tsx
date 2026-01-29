"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PointerIcon = () => (
  <svg width="38" height="38" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_dii_132_1629)">
      <rect x="6.80005" y="5.7998" width="33" height="33" rx="3" fill="#2E2E2E"/>
      <path d="M22.3154 13.2039C22.8872 12.2852 24.3097 12.3518 24.7608 13.3996L26.769 18.0656C26.823 18.1912 26.8518 18.3262 26.8537 18.4629C26.8555 18.5995 26.8305 18.7353 26.7799 18.8623C26.7293 18.9893 26.6542 19.1051 26.5589 19.2031C26.4635 19.301 26.3498 19.3793 26.2242 19.4333C26.0987 19.4874 25.9637 19.5161 25.827 19.518C25.6903 19.5199 25.5546 19.4948 25.4276 19.4442C25.3006 19.3936 25.1848 19.3185 25.0868 19.2232C24.9888 19.1279 24.9106 19.0142 24.8565 18.8886L23.4853 15.7035L21.9406 19.2994C21.6603 19.9517 21.1385 20.4735 20.4862 20.7539L16.8916 22.2986L20.4862 23.846C21.1385 24.1277 21.6603 24.6468 21.9406 25.2991L23.4853 28.8936L25.3062 24.6635L25.7642 23.5823C26.0573 22.8929 26.5468 22.3051 27.1716 21.8919C27.7965 21.4788 28.5291 21.2587 29.2782 21.259H30.605L29.2588 19.9128C29.0693 19.7164 28.9645 19.4534 28.967 19.1805C28.9695 18.9076 29.0791 18.6466 29.2722 18.4537C29.4652 18.2608 29.7264 18.1514 29.9993 18.1492C30.2722 18.147 30.5351 18.252 30.7313 18.4417L34.5895 22.2999L30.7313 26.1582C30.534 26.342 30.273 26.4421 30.0033 26.4374C29.7337 26.4326 29.4764 26.3234 29.2857 26.1327C29.095 25.942 28.9857 25.6847 28.981 25.415C28.9762 25.1453 29.0763 24.8844 29.2602 24.6871L30.6064 23.3408H29.2782C28.5829 23.3408 27.9542 23.7572 27.6822 24.397L27.22 25.4823L27.2186 25.4865L24.7621 31.1989C24.2792 32.3189 22.6942 32.3189 22.2113 31.1989L20.0282 26.1221C19.958 25.9588 19.8279 25.8286 19.6646 25.7585L14.5864 23.574C13.4678 23.0924 13.4678 21.5061 14.5864 21.0245L19.6659 18.8414C19.8287 18.7709 19.9583 18.6408 20.0282 18.4778L22.2113 13.3996L22.3154 13.2039Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_dii_132_1629" x="4.86374e-05" y="-0.000195503" width="46.6" height="46.6" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="3.4"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_132_1629"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_132_1629" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_132_1629"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_132_1629" result="effect3_innerShadow_132_1629"/>
      </filter>
    </defs>
  </svg>
);

const ServiceCard = ({ title, description, pointers, href }: { title: string, description: string, pointers: string[], href?: string }) => (
  <div 
    className="relative flex-none w-[320px] md:w-[380px] bg-white rounded-[20px] p-6 md:p-8 flex flex-col items-center text-center shadow-[inset_0_0_20.9px_0_rgba(31,94,255,0.53)] backdrop-blur-[7.45px] border border-white/20"
  >
    <h3 className="text-[#2E2E2E] text-[24px] font-bold leading-none mb-4" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      {title}
    </h3>
    <p className="text-[#2E2E2E] text-[14px] font-normal leading-tight mb-6 min-h-[60px]" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      {description}
    </p>
    
    <div className="w-full space-y-3 mb-8">
      {pointers.map((pointer, index) => (
        <div key={index} className="flex items-center gap-3 text-left">
          <PointerIcon />
          <span className="text-[#2E2E2E] text-[14px] font-medium" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
            {pointer}
          </span>
        </div>
      ))}
    </div>

    <Link 
      href={href || '/contact'}
      className="mt-auto inline-flex items-center justify-center px-6 py-3 bg-[#2E2E2E] text-white rounded-[10px] text-[18px] font-medium leading-none transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_1px_6.8px_0_rgba(0,0,0,0.35),inset_0_-4px_4px_0_rgba(255,255,255,0.1),inset_0_4px_4px_0_rgba(255,255,255,0.1)]"
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
    >
      Enquire Now
    </Link>
  </div>
);

export default function Services() {
  const services = [
    {
      title: "Personal Loan Settlement",
      description: "We recognize that life's financial challenges can be unpredictable. Our experts negotiate with lenders to secure manageable settlement plans for your unsecured personal loans.",
      href: "/services/personal-loan-settlement",
      pointers: [
        "Strategic Negotiation",
        "Debt Restructuring",
        "Legal Compliance",
        "Verified Loan Closure"
      ]
    },
    {
      title: "Credit Card Settlement",
      description: "Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.",
      href: "/services/credit-card-settlement",
      pointers: [
        "Principal Reduction",
        "Interest Waiver",
        "CIBIL Impact Management",
        "Final No-Dues Certificate"
      ]
    },
    {
      title: "Business Loan Settlement",
      description: "Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.",
      href: "/business-loan-settlement",
      pointers: [
        "Asset Protection",
        "Business Debt Relief",
        "Negotiated Repayment",
        "Commercial Compliance"
      ]
    },
    {
      title: "Car Loan Settlement",
      description: "Since car loans are secured, a default risks asset loss. We negotiate reduced balances and manageable payments, easing the fear of losing your vehicle while restoring stability.",
      href: "/contact",
      pointers: [
        "Prevent Seizure",
        "Balance Reduction",
        "Payment Restructuring",
        "Asset Preservation"
      ]
    },
    {
      title: "App Loan Settlement",
      description: "Stop aggressive, illegal harassment from digital lending apps immediately. We provide legal representation to secure a final, RBI-compliant One-Time Settlement (OTS).",
      href: "/app-loan-settlement",
      pointers: [
        "Harassment Protection",
        "RBI Compliance",
        "OTS Negotiation",
        "Digital Privacy"
      ]
    },
    {
      title: "NBFC Loan Settlement",
      description: "Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.",
      href: "/services/nbfc-loan-settlement",
      pointers: [
        "Policy Expertise",
        "Arbitration Support",
        "Structured Settlement",
        "Formal Closure"
      ]
    }
  ];

  return (
    <section id="services" className="bg-white py-16 relative overflow-hidden rounded-t-[100px] md:rounded-t-[80px]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Service.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-16">
        <div className="text-center mb-12 space-y-4">
          <h2 
            className="text-[#2E2E2E] text-[32px] md:text-[60px] font-bold leading-[1] max-w-4xl mx-auto"
            style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
          >
            Trusted by Thousands to Resolve Loans with Confidence
          </h2>
          <p 
            className="text-[#2E2E2E] text-[18px] md:text-[22px] font-normal leading-[1.07] max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
          >
            End-to-end settlement solutions designed to reduce stress, protect your rights, and guide you toward verified loan closure.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div 
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {/* Custom Styles for hiding scrollbar */}
            <style jsx>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {services.map((service, index) => (
              <div key={index} className="snap-center">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  pointers={service.pointers}
                  href={service.href}
                />
              </div>
            ))}
          </div>
          
          {/* Subtle gradient indicators for scroll (Optional but helps UX) */}
          <div className="absolute left-0 top-0 bottom-8 w-20 bg-gradient-to-r from-white/20 to-transparent pointer-events-none md:block hidden" />
          <div className="absolute right-0 top-0 bottom-8 w-20 bg-gradient-to-l from-white/20 to-transparent pointer-events-none md:block hidden" />
        </div>
      </div>
    </section>
  );
}
