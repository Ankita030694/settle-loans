'use client';

import React, { useEffect, useState } from 'react';
import { BookOpen } from 'lucide-react';

export interface TOCItem {
  id: string;
  title: string;
}

interface SidebarTOCProps {
  items: TOCItem[];
}

export default function SidebarTOC({ items }: SidebarTOCProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || '');

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

  return (
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
  );
}
