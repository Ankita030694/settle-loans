import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Protection | SettleLoans",
  description: "Learn about how SettleLoans collects, uses, and protects your personal and financial information. Our commitment to your privacy and data security.",
  alternates: {
    canonical: "https://www.settleloans.in/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastReviewed = "28 January 2026";

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Privacy First
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#DEDEDE] mb-6 leading-tight tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-[#DEDEDE]/80 max-w-2xl mx-auto leading-relaxed">
              At <Link href="/" className="text-[#1F5EFF] hover:underline">SettleLoans</Link>, we protect your personal and financial data. Your privacy is our top priority.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="mb-8 font-medium">
              This Privacy Policy explains how we collect and use your data. It also details the safeguards we use. We follow RBI guidelines across our site and apps to keep your records safe.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-[#747474] mb-12 border-b border-[#DEDEDE] pb-4">
              <span>Last reviewed:</span>
              <span className="font-bold text-[#2E2E2E]">{lastReviewed}</span>
            </div>

            {/* Collection of Personal Data */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Collection of Personal Data</h2>
              <p className="mb-6">
                We collect limited personal data to start your debt relief plan. This helps us customize your settlement strategy. It also lets us send you regular case updates. We may collect:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Contact Details: Full name, email address, phone number, and state. We use these for secure updates and identity checks.",
                  "Financial Details: Monthly income, loan balances, credit card dues, and repayment ability. We use this data to check your settlement eligibility.",
                  "Debt Situation Data: Notes on legal notices or recovery calls. This data helps us tailor your legal defense plan.",
                  "Business Data: Company name, team size, and business type if you contact us on behalf of a firm.",
                  "Billing Data: Needed records to process service fees. We never store full debit or credit card numbers."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 border-l-4 border-[#1F5EFF] p-6 rounded-r-xl">
                <p className="m-0 text-sm md:text-base text-blue-900 leading-relaxed font-medium">
                  When you share your mobile number or email, you agree to receive vital service alerts. This applies even if your number is on the national DND list.
                </p>
              </div>
            </section>

            {/* Use of Technical Data */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Use of Technical Data</h3>
              <p className="mb-6">
                We may collect basic technical data to improve your experience on our site. Typical details include:
              </p>
              <ul className="space-y-4 list-none pl-0 mb-8">
                {[
                  "Device type, operating system, browser type, and language.",
                  "Time zone, screen size, exit pages, and browsing paths."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We use this general data to fix bugs, improve speed, and boost platform security.
              </p>
            </section>

            {/* Cookies & Tracking Tools */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Cookies & Tracking Tools</h3>
              <p className="mb-6">
                We use first-party cookies and secure site tools. These tools keep your session active and save your preferences. You maintain complete control over cookies:
              </p>
              <ul className="space-y-6 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>You can adjust or block cookies directly in your browser settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>You can email <a href="mailto:info@settleloans.in" className="text-[#1F5EFF] hover:underline font-bold">info@settleloans.in</a> at any time to request cookie opt-out help.</span>
                </li>
              </ul>
            </section>

            {/* Sharing of Personal Information */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Sharing Your Information</h3>
              <p className="mb-6">
                We share your details only when needed to resolve your debt. We never sell your personal details to third parties. We may share data in these cases:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Preventing fraud, checking credit risks, and securing our systems.",
                  "Working with legal partners who assist with loan negotiations.",
                  "Complying with lawful court orders or regulatory rules."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Information Security */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Information Security</h3>
              <p className="mb-6">
                We use strong safeguards to keep your data safe. These include SSL encryption, strict access controls, and regular security audits. We constantly upgrade our defenses against online threats.
              </p>
            </section>

            {/* Testimonials & Case Studies */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Testimonials & Case Studies</h3>
              <p className="mb-6">
                We may share anonymized client success stories with your permission. We remove all names and private details. You can request edits or removal at any time.
              </p>
            </section>

            {/* Data Usage & Deletion (Right to be Forgotten) */}
            <section className="mb-12">
              <h3 className="text-2xl md:text-3xl font-black mb-6">Data Usage & Right to Deletion</h3>
              <p className="mb-6">
                We use your details only to run your debt relief plan. We use this data to prepare legal replies and negotiate with banks. We never sell your personal data to third parties.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#1F5EFF] p-6 rounded-r-xl">
                <p className="m-0 text-sm md:text-base text-blue-900 leading-relaxed font-medium">
                  <strong>Want your data deleted?</strong> You have the right to be forgotten. To delete your personal records, simply email us at <a href="mailto:info@settleloans.in" className="text-[#1F5EFF] hover:underline font-bold">info@settleloans.in</a>. We will delete your data quickly.
                </p>
              </div>
            </section>

            {/* Contacting SettleLoans */}
            <section className="mb-12 bg-[#1F5EFF]/5 border border-[#1F5EFF]/20 rounded-3xl p-8 text-center">
              <h3 className="text-3xl font-black mb-4">Contact Our Privacy Team</h3>
              <p className="mb-6 text-lg">
                Do you have questions about your privacy or data rights? You can reach our team directly at:
              </p>
              <a href="mailto:info@settleloans.in" className="text-2xl md:text-3xl font-black text-[#1F5EFF] hover:underline block mb-8">
                info@settleloans.in
              </a>
              <div className="pt-8 border-t border-[#1F5EFF]/10">
                <h4 className="text-xl font-bold mb-4 italic">Learn More About Our Safeguards</h4>
                <p className="mb-8 opacity-80">
                  Our compliance team is ready to help. We can walk you through our safety protocols and data rules. We explain how we work with banks to protect your privacy.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Speak with Compliance
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
