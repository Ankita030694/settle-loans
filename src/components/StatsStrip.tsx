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
          <div className="text-xl md:text-3xl font-black text-[#1F5EFF] mb-0.5">
            <AnimatedCounter end={4.9} decimals={1} suffix="/5" />
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
