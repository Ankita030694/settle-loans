"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
}

export default function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    items.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
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
      <div className="hidden lg:block sticky top-24">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-[var(--color-border)] shadow-sm p-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-4 pl-3">
            Contents
          </h3>
          <nav className="flex flex-col gap-1">
            {items.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={`text-sm py-2 pl-3 border-l-2 transition-all duration-200 ease-in-out ${
                  activeId === heading.id
                    ? "border-[var(--color-primary)] text-[var(--color-primary)] font-semibold bg-teal-50/50 rounded-r-md"
                    : "border-transparent text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:border-gray-200"
                }`}
              >
                {heading.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Floating Section Navigator */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[999]">
        <div className={`bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'mb-4' : 'mb-0'}`}>
          {isMobileMenuOpen && (
            <div className="max-h-[60vh] overflow-y-auto p-4 bg-gray-50 border-b border-gray-100">
              <div className="flex flex-col gap-2">
                {items.map((heading) => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={(e) => handleClick(e, heading.id)}
                    className={`block p-3 rounded-xl text-sm transition-all ${
                      activeId === heading.id
                        ? "bg-[#1F5EFF] text-white font-bold"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {heading.title}
                  </a>
                ))}
              </div>
            </div>
          )}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full p-4 flex items-center justify-between text-[#2E2E2E] font-bold"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#1F5EFF] uppercase tracking-wider font-black">Jump To:</span>
              <span className="text-sm truncate max-w-[200px]">{activeItem.title}</span>
            </div>
            {isMobileMenuOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} /> }
          </button>
        </div>
      </div>
    </>
  );
}
