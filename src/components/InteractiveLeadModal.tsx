"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import InteractiveLeadFunnel from './InteractiveLeadFunnel';

interface ModalDetailEvent extends Event {
  detail?: {
    topic?: string;
    step?: number;
  };
}

/**
 * Checks if current pathname is a utility, compliance, transactional, or admin route
 * where interactive lead popups must strictly NEVER appear.
 */
export function isUtilityOrExcludedRoute(path?: string | null): boolean {
  if (!path) return false;
  const p = path.toLowerCase();

  // Exact matches for utility, legal compliance, and index sitemap pages
  if (
    p === '/contact' ||
    p === '/thank-you' ||
    p === '/privacy-policy' ||
    p === '/terms-and-conditions' ||
    p === '/all-queries' ||
    p === '/html-sitemap' ||
    p === '/sitemap.xml' ||
    p === '/robots.txt'
  ) {
    return true;
  }

  // Prefix matches for administrative, author profiles, and backend API routes
  if (
    p.startsWith('/admin') ||
    p.startsWith('/authors') ||
    p.startsWith('/api')
  ) {
    return true;
  }

  return false;
}

export default function InteractiveLeadModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTopic, setActiveTopic] = useState<string | undefined>(undefined);
  const [initialStep, setInitialStep] = useState<number>(1);
  const pathname = usePathname();

  // Helper to safely check if popup is dismissed or form already submitted in this session
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

  // Helper to check if user is actively typing or interacting with an on-page inline funnel
  const isInteractingWithInlineFunnel = useCallback(() => {
    if (typeof window === 'undefined') return false;
    try {
      const isFunnelActive = sessionStorage.getItem('sl_funnel_active') === 'true';
      const activeEl = document.activeElement;
      const isInsideInlineAssessment = Boolean(
        activeEl && document.getElementById('settlement-assessment')?.contains(activeEl)
      );
      return isFunnelActive || isInsideInlineAssessment;
    } catch (e) {
      return false;
    }
  }, []);

  // Close modal and remember dismissal in session so it never auto-repeats annoying popups
  const handleClose = useCallback(() => {
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('sl_lead_modal_dismissed', 'true');
      } catch (e) {
        // ignore storage errors
      }
    }
  }, []);

  // Custom Event Listener: allows ANY button, link, or script site-wide to trigger the modal
  useEffect(() => {
    const handleOpenEvent = (e: ModalDetailEvent) => {
      // Never open on utility/admin routes even if triggered via event
      if (isUtilityOrExcludedRoute(pathname)) return;

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
  }, [pathname]);

  // Global Click Delegation: Enables buttons with [data-open-modal], [data-lead-modal],
  // .js-open-lead-modal, or href="#lead-assessment" / href="#lead-modal" to open the modal
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (isUtilityOrExcludedRoute(pathname)) return;

      const target = (e.target as HTMLElement)?.closest(
        '[data-open-modal], [data-lead-modal], .js-open-lead-modal, a[href="#lead-assessment"], a[href="#lead-modal"]'
      );

      if (target) {
        e.preventDefault();
        const topic = target.getAttribute('data-topic') || undefined;
        const stepAttr = target.getAttribute('data-step');
        const step = stepAttr ? parseInt(stepAttr, 10) : 1;

        if (topic) setActiveTopic(topic);
        if (step && !isNaN(step)) setInitialStep(step);
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [pathname]);

  // Smart non-intrusive auto-triggers with session memory
  useEffect(() => {
    // 1. Strictly block all utility, admin, contact, and compliance pages
    if (isUtilityOrExcludedRoute(pathname)) {
      setIsOpen(false);
      return;
    }

    // 2. Block if already dismissed or submitted
    if (isBlockedBySession()) {
      return;
    }

    // Timer trigger: 35 seconds of engaged reading
    const timer = setTimeout(() => {
      if (!isBlockedBySession() && !isInteractingWithInlineFunnel()) {
        setIsOpen(true);
      }
    }, 35000);

    // Scroll depth trigger: when user scrolls past 55% of the page
    const handleScroll = () => {
      if (isBlockedBySession() || isOpen || isInteractingWithInlineFunnel()) return;
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollTotal > 0) {
        const scrolledPercent = (window.scrollY / scrollTotal) * 100;
        if (scrolledPercent > 55) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    // Exit intent trigger on desktop (user cursor moves toward browser tab/exit)
    const handleMouseLeave = (e: MouseEvent) => {
      if (isBlockedBySession() || isOpen || isInteractingWithInlineFunnel()) return;
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
  }, [pathname, isOpen, isBlockedBySession, isInteractingWithInlineFunnel]);

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
  }, [isOpen, handleClose]);

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
