"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { X, Scale } from 'lucide-react';
import InteractiveLeadFunnel from './InteractiveLeadFunnel';

interface ModalDetailEvent extends Event {
  detail?: {
    topic?: string;
    step?: number;
  };
}

export default function InteractiveLeadModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTopic, setActiveTopic] = useState<string | undefined>(undefined);
  const [initialStep, setInitialStep] = useState<number>(1);
  const pathname = usePathname();

  // Helper to safely check if popup is dismissed or form already submitted
  const isBlockedBySession = useCallback(() => {
    if (typeof window === 'undefined') return true;
    try {
      const isDismissed = sessionStorage.getItem('sl_lead_modal_dismissed') === 'true';
      const isSubmitted = 
        localStorage.getItem('formSubmitted') === 'true' ||
        sessionStorage.getItem('formSubmitted') === 'true';
      return isDismissed || isSubmitted;
    } catch (e) {
      return false;
    }
  }, []);

  // Close modal and set session memory so it does NOT repeat automatically
  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('sl_lead_modal_dismissed', 'true');
      } catch (e) {
        // ignore storage errors
      }
    }
  };

  // Custom Event listener: allows ANY button, link, or script site-wide to open the modal
  useEffect(() => {
    const handleOpenEvent = (e: ModalDetailEvent) => {
      if (e.detail?.topic) {
        setActiveTopic(e.detail.topic);
      }
      if (e.detail?.step) {
        setInitialStep(e.detail.step);
      }
      setIsOpen(true);
    };

    window.addEventListener('open-lead-modal', handleOpenEvent as EventListener);
    window.addEventListener('open-interactive-lead-modal', handleOpenEvent as EventListener);

    return () => {
      window.removeEventListener('open-lead-modal', handleOpenEvent as EventListener);
      window.removeEventListener('open-interactive-lead-modal', handleOpenEvent as EventListener);
    };
  }, []);

  // Smart non-intrusive auto-trigger with session memory
  useEffect(() => {
    // Never auto-popup on contact, thank-you, or admin pages
    if (
      pathname === '/contact' || 
      pathname === '/thank-you' || 
      pathname?.startsWith('/admin')
    ) {
      setIsOpen(false);
      return;
    }

    if (isBlockedBySession()) {
      return;
    }

    // Timer trigger: 35 seconds of engaged reading
    const timer = setTimeout(() => {
      if (!isBlockedBySession()) {
        setIsOpen(true);
      }
    }, 35000);

    // Scroll depth trigger: when user scrolls past 50% of the page
    const handleScroll = () => {
      if (isBlockedBySession() || isOpen) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrolledPercent = (window.scrollY / scrollTotal) * 100;
        if (scrolledPercent > 55) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Exit intent trigger on desktop (user cursor moves towards browser tab/exit)
    const handleMouseLeave = (e: MouseEvent) => {
      if (isBlockedBySession() || isOpen) return;
      if (e.clientY <= 10) {
        setIsOpen(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pathname, isOpen, isBlockedBySession]);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Centered Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[105] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop with soft blur */}
          <div 
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal Card Container: Vertically Centered with safe mobile keyboard height */}
          <div 
            className="relative w-full max-w-2xl my-auto z-10 max-h-[92vh] overflow-y-auto rounded-3xl animate-in zoom-in-95 fade-in duration-300 shadow-2xl scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              type="button"
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
              aria-label="Close Assessment Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Render Standalone Interactive Lead Funnel in modal variant */}
            <InteractiveLeadFunnel 
              variant="modal"
              defaultTopic={activeTopic}
              initialStep={initialStep}
              onComplete={handleClose}
            />
          </div>
        </div>
      )}
    </>
  );
}
