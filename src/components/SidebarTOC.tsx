'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BookOpen, Scale, ArrowRight, ShieldCheck } from 'lucide-react';
import { matchTopicFromPath } from '@/lib/topic-matcher';

export interface TOCItem {
  id: string;
  title: string;
}

interface SidebarTOCProps {
  items: TOCItem[];
}

export default function SidebarTOC({ items = [] }: SidebarTOCProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');
  const pathname = usePathname();
  const matched = matchTopicFromPath(pathname || '');

  useEffect(() => {
    if (!items || items.length === 0) return;

    const handleScroll = () => {
      const scrollOffset = 180; // Distance from top of viewport
      let currentActive = items[0]?.id || '';

      // Check if user is scrolled near the bottom of the page
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (isBottom) {
        setActiveId(items[items.length - 1].id);
        return;
      }

      for (let i = 0; i < items.length; i++) {
        const el = document.getElementById(items[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= scrollOffset) {
            currentActive = items[i].id;
          }
        }
      }

      setActiveId(currentActive);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  const handleOpenAssessment = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-interactive-lead-modal', {
          detail: { topic: matched.id, step: 1 }
        })
      );
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200 text-slate-900 font-bold text-sm">
          <BookOpen className="w-4 h-4 text-[#1F5EFF]" />
          <span>Table of Contents</span>
        </div>
        <nav className="space-y-1 text-xs">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`block py-1.5 px-2.5 rounded-lg transition-all duration-150 leading-snug ${
                  isActive
                    ? 'bg-[#1F5EFF] text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
                }`}
              >
                {item.title}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Topic-Matched Assessment Sidebar Card */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 text-white rounded-2xl p-4 border border-slate-800 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-20 h-20 bg-[#1F5EFF]/20 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1F5EFF]/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-2 border border-[#1F5EFF]/30">
          <Scale className="w-3 h-3 text-[#1F5EFF]" />
          <span>{matched.badge}</span>
        </div>

        <h4 className="text-sm font-black text-white leading-snug mb-1.5">
          {matched.headline}
        </h4>
        <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
          {matched.highlightBenefit}. Free 3-step confidential legal assessment.
        </p>

        <button
          type="button"
          onClick={handleOpenAssessment}
          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-md active:scale-95 cursor-pointer"
        >
          <span>Start Assessment</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-2 font-medium">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Advocate-Client Privilege Protected</span>
        </div>
      </div>
    </div>
  );
}
