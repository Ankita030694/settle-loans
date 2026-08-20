'use client';

import React, { useState, useEffect, useRef } from 'react';

// Animated Counter with Intersection Observer and smooth deceleration
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Smooth ease-out cubic deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(easeOut * end);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="font-black">
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

interface StatsStripProps {
  className?: string;
}

export default function StatsStrip({ className = '' }: StatsStripProps) {
  return (
    <section className={`w-full bg-white border-b border-slate-200 py-4 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 text-slate-900 ${className}`}>
      <div className="max-w-[1720px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
        {/* Metric 1 */}
        <div className="p-2">
          <div className="flex items-center justify-center gap-2 mb-0.5">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-xl md:text-3xl font-black text-[#1F5EFF]">
              <AnimatedCounter end={4.9} decimals={1} suffix="/5" />
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Google Verified Rating (1,850+ Reviews)
          </p>
        </div>

        {/* Metric 2 */}
        <div className="p-2 border-l border-slate-200">
          <div className="text-xl md:text-3xl font-black text-emerald-600 mb-0.5">
            <AnimatedCounter end={200} prefix="₹ " suffix="Cr+" />
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Debt Settled Across Indian Banks
          </p>
        </div>

        {/* Metric 3 */}
        <div className="p-2 border-l border-slate-200">
          <div className="text-xl md:text-3xl font-black text-amber-500 mb-0.5">
            <AnimatedCounter end={10000} suffix="+" />
          </div>
          <p className="text-xs text-slate-600 font-medium">
            Borrowers Protected Legally
          </p>
        </div>

        {/* Metric 4 */}
        <div className="p-2 border-l border-slate-200">
          <div className="text-xl md:text-3xl font-black text-[#1F5EFF] mb-0.5">
            <AnimatedCounter end={100} suffix="%" />
          </div>
          <p className="text-xs text-slate-600 font-medium">
            RBI Fair Practices Code Compliant
          </p>
        </div>
      </div>
    </section>
  );
}
