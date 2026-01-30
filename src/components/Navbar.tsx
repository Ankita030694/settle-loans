'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Process', href: '/#process' },
    { name: 'Services', href: '/#services' },
    { name: 'FAQ', href: '/faqs' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* 
        =========================================
        DESKTOP NAVBAR (MD AND UP)
        =========================================
      */}
      <div className="hidden md:flex justify-center pt-5">
        <nav 
          className="flex items-center px-6 gap-12"
          style={{
            borderRadius: '15px',
            background: '#FFF',
            boxShadow: '0 2px 10.2px 0 rgba(0, 0, 0, 0.29)'
          }}
        >
          {/* Left Section: Logo & Divider */}
          <div className="flex items-center h-full">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo/logo.svg" 
                alt="SettleLoans Logo" 
                width={60} 
                height={60} 
                className="object-contain p-2"
                priority
              />
            </Link>
            
            {/* Vertical Divider */}
            <div className="h-10 w-[1px] bg-[#E5E5E5] mx-6"></div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium transition-colors hover:text-[#1F5EFF]"
                  style={{ color: '#2E2E2E' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Contact Us Button */}
          <div>
            <Link
              href="/contact"
              className="flex items-center justify-center px-6 py-2.5 text-base font-medium transition-transform hover:scale-105"
              style={{
                borderRadius: '10px',
                background: '#1F5EFF',
                color: '#FFFFFF'
              }}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>

      {/* 
        =========================================
        MOBILE NAVBAR (BELOW MD)
        =========================================
      */}
      <div className="md:hidden px-4 pt-4">
        <div 
          className="bg-white overflow-hidden transition-all duration-300"
          style={{
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Main Bar */}
          <div className="flex items-center justify-between px-4 h-16">
            <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/logo/logo.svg" 
                alt="SettleLoans Logo" 
                width={45} 
                height={45} 
                className="object-contain"
                priority
              />
            </Link>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#2E2E2E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Expandable Menu */}
          <div 
            className={`transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className="px-4 pb-6 flex flex-col gap-4 border-t border-gray-50 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-1"
                  style={{ color: '#2E2E2E' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full py-3 text-base font-medium"
                  style={{
                    borderRadius: '10px',
                    background: '#1F5EFF',
                    color: '#FFFFFF'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
