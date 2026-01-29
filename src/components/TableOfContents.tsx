"use client";

import { useEffect, useState } from "react";

interface TableOfContentsProps {
  items: { id: string; title: string }[];
}

export default function TableOfContents({ items = [] }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

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
      // Offset for sticky header if one exists, otherwise just scroll
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
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="sticky top-24">
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
  );
}
