"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { matchTopicFromPath } from '@/lib/topic-matcher';
import InteractiveLeadFunnel from './InteractiveLeadFunnel';
import { ShieldCheck, Scale, ArrowRight } from 'lucide-react';

interface MasterBlogFunnelProps {
  topic?: string;
  className?: string;
  variant?: 'card' | 'inline' | 'banner';
}

/**
 * MasterBlogFunnel:
 * Seamlessly integrates into any blog or article layout.
 * Automatically identifies the blog article topic (e.g., recovery harassment, legal notice 138,
 * account freeze, credit card debt, or personal loan default) and renders the customized 3-step funnel.
 */
export default function MasterBlogFunnel({
  topic,
  className = '',
  variant = 'card'
}: MasterBlogFunnelProps) {
  const pathname = usePathname();
  const matched = matchTopicFromPath(pathname || '', topic);

  return (
    <section className={`my-12 w-full not-prose ${className}`} aria-label="Confidential Debt Settlement Assessment">
      {variant === 'banner' ? (
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1F5EFF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F5EFF]/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4 border border-[#1F5EFF]/30">
              <Scale className="w-3.5 h-3.5 text-[#1F5EFF]" />
              <span>{matched.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {matched.headline}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-normal leading-relaxed">
              {matched.subheading}
            </p>
          </div>

          <div className="relative z-10 bg-white rounded-2xl shadow-xl text-slate-900 p-2 sm:p-4">
            <InteractiveLeadFunnel 
              variant="card" 
              defaultTopic={matched.id} 
            />
          </div>
        </div>
      ) : (
        <div className="relative">
          {/* Contextual Topic Header Strip */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2 bg-blue-50/70 border border-blue-100 rounded-2xl px-4 py-3 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-[#1F5EFF] shrink-0" />
              <span className="font-semibold text-slate-500">Topic-Matched Analysis:</span>
              <span className="font-bold text-slate-900">{matched.badge}</span>
            </div>
            <span className="text-[#1F5EFF] font-bold hidden sm:inline">
              {matched.highlightBenefit}
            </span>
          </div>

          <InteractiveLeadFunnel
            variant={variant === 'inline' ? 'inline' : 'card'}
            defaultTopic={matched.id}
            titleOverride={matched.headline}
            subtitleOverride={matched.subheading}
          />
        </div>
      )}
    </section>
  );
}
