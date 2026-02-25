'use client';

import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function GlobalPopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the popup has already been shown in this session
    const hasBeenShown = sessionStorage.getItem('globalPopupShown');

    if (!hasBeenShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('globalPopupShown', 'true');
      }, 5000); // 5 seconds delay

      return () => clearTimeout(timer);
    }
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Form Container */}
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl animate-in fade-in zoom-in duration-300">
            <ContactForm 
              variant="simple" 
              showCloseButton={true} 
              onCancel={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
