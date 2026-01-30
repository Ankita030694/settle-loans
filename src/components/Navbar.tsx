import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5">
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
            {[
              { name: 'Home', href: '/' },
              { name: 'Process', href: '/#process' },
              { name: 'Services', href: '/#services' },
              { name: 'FAQ', href: '/faqs' },
            ].map((link) => (
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
  );
}
