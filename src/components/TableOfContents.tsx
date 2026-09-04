"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
}

export function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="w-full">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 text-slate-800">
          <div className="text-xs font-bold uppercase tracking-wider text-[#1F5EFF] mb-3 pb-2 border-b border-slate-100 flex items-center gap-2">
            <span>Contents Index</span>
          </div>
          <nav className="flex flex-col gap-1 max-h-[calc(100vh-260px)] overflow-y-auto pr-1">
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
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full p-4 flex items-center justify-between text-[#2E2E2E] font-bold"
            aria-label="Table of contents menu"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#1F5EFF] uppercase tracking-wider font-black">Jump To:</span>
              <span className="text-xs sm:text-sm truncate max-w-[200px]">{activeItem?.title || "Table of Contents"}</span>
            </div>
            {isMobileMenuOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} /> }
          </button>
        </div>
      </div>
    </>
  );
}

export default TableOfContents;
