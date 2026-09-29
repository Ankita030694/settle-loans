"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Scale, ShieldCheck, ArrowRight } from "lucide-react";
import { matchTopicFromPath } from "@/lib/topic-matcher";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
}

export function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Match topic dynamically based on current blog page path
  const matched = matchTopicFromPath(pathname || "");

  const handleOpenAssessment = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-interactive-lead-modal', {
          detail: { topic: matched.id, step: 1 }
        })
      );
    }
  };

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      let currentId = items[0]?.id || "";

      for (let i = 0; i < items.length; i++) {
        const el = document.getElementById(items[i].id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= top - 20) {
            currentId = items[i].id;
          }
        }
      }
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveId(id);
      setIsMobileMenuOpen(false);
    }
  };

  if (items.length === 0) return null;

  const activeItem = items.find(item => item.id === activeId) || items[0];

  return (
    <>
      {/* Desktop Sidebar TOC */}
      <div className="w-full space-y-4">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
            <span>Contents Index</span>
          </div>
          <nav className="flex flex-col gap-1 max-h-[calc(100vh-320px)] overflow-y-auto pr-1">
            {items.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`text-xs py-1.5 px-2.5 rounded-lg border-l-2 transition-all duration-200 ease-in-out leading-snug ${
                    isActive
                      ? "border-[#1F5EFF] text-[#1F5EFF] font-bold bg-blue-50 shadow-xs"
                      : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {heading.title}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Topic-Matched Assessment Sidebar Card */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-blue-950 text-white rounded-2xl p-4 border border-slate-800 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

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

      {/* Mobile Floating Section Navigator */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[999]">
        <div className={`bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'mb-4' : 'mb-0'}`}>
          {isMobileMenuOpen && (
            <div className="max-h-[60vh] overflow-y-auto p-4 bg-gray-50 border-b border-gray-100">
              <div className="flex flex-col gap-2">
                {items.map((heading) => {
                  const isActive = activeId === heading.id;
                  return (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      onClick={(e) => handleClick(e, heading.id)}
                      className={`block p-3 rounded-xl text-xs sm:text-sm transition-all ${
                        isActive
                          ? "bg-[#1F5EFF] text-white font-bold"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {heading.title}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          <div className="w-full p-3 flex items-center justify-between gap-2 bg-white">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex-1 flex items-center justify-between text-[#2E2E2E] font-bold text-left min-w-0 pr-2"
              aria-label="Table of contents menu"
            >
              <div className="flex items-center gap-2 truncate">
                <span className="text-[10px] text-[#1F5EFF] uppercase tracking-wider font-black shrink-0">Jump To:</span>
                <span className="text-xs truncate">{activeItem?.title || "Contents"}</span>
              </div>
              {isMobileMenuOpen ? <ChevronDown size={18} className="shrink-0" /> : <ChevronUp size={18} className="shrink-0" /> }
            </button>

            {/* Quick 1-tap mobile assessment button */}
            <button
              type="button"
              onClick={handleOpenAssessment}
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold text-xs py-2 px-3 rounded-xl shadow-md active:scale-95 transition-all"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>Evaluate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableOfContents;
