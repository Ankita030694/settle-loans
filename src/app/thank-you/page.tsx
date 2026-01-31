"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CheckCircle2, Home, PhoneCall, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user reached here via a form submission
    const submitted = sessionStorage.getItem('formSubmitted');
    if (!submitted) {
      router.push('/');
    }
    
    // Clear the flag after a short delay so refreshing doesn't keep them here (optional)
    // Or keep it for the session duration
  }, [router]);

  return (
    <main className="min-h-screen bg-[#2E2E2E] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1F5EFF] blur-[120px] opacity-20" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1F5EFF] blur-[120px] opacity-20" />

      <div className="relative z-10 max-w-2xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl text-center">
        {/* Animated Check Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-[#1F5EFF] blur-2xl opacity-40 animate-pulse" />
            <div className="relative bg-white/10 p-5 rounded-full border border-white/20">
              <CheckCircle2 className="w-16 h-16 text-[#1F5EFF]" />
            </div>
          </div>
        </div>

        <h1 
          className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
        >
          Thank You!
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-[#DEDEDE] mb-10 leading-relaxed font-light"
          style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
        >
          Your submission was successful. One of our experts will contact you shortly to guide you through your loan settlement journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 bg-white text-[#2E2E2E] font-bold py-4 px-8 rounded-2xl hover:bg-[#DEDEDE] transition-all duration-300 group"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          
          <Link 
            href="tel:+919821219819"
            className="flex items-center justify-center gap-2 bg-[#1F5EFF] text-white font-bold py-4 px-8 rounded-2xl hover:bg-[#1648CC] transition-all duration-300 group shadow-lg shadow-[#1F5EFF]/20"
          >
            <PhoneCall className="w-5 h-5" />
            Call Us Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[#6D6D6D] text-sm italic">
            "Your peace of mind is our priority."
          </p>
        </div>
      </div>
    </main>
  );
}
