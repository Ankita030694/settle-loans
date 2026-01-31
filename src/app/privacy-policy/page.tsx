import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - SettleLoans",
  description: "Learn about how SettleLoans collects, uses, and protects your personal and financial information. Our commitment to your privacy and data security.",
  alternates: {
    canonical: "https://settleloans.in/privacy-policy",
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
              At <Link href="/" className="text-[#1F5EFF] hover:underline">SettleLoans</Link>, protecting your personal and financial information is integral to how we operate.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="mb-8 font-medium">
              This Privacy Policy explains what data we collect, why we collect it, and the safeguards we apply while delivering RBI-compliant debt settlement services through our website and mobile experiences.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-[#747474] mb-12 border-b border-[#DEDEDE] pb-4">
              <span>Last reviewed:</span>
              <span className="font-bold text-[#2E2E2E]">{lastReviewed}</span>
            </div>

            {/* Collection of Personally Identifiable Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Collection of Personally Identifiable Information</h2>
              <p className="mb-6">
                We collect limited personal information to activate your engagement, customise settlement strategies, and keep you informed about progress. This may include:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Full name, email address, mailing address, and phone number for identification and secure communication.",
                  "Company name, team size, and business type when you enquire on behalf of an organisation.",
                  "Billing details required to process professional fees (we never store full credit/debit card numbers)."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 bg-blue-50 border-l-4 border-[#1F5EFF] p-6 rounded-r-xl">
                <p className="m-0 text-sm md:text-base text-blue-900 leading-relaxed font-medium">
                  By providing your mobile number or email address, you consent to receive essential service communications from SettleLoans—even if your number is registered on the DND list.
                </p>
              </div>
            </section>

            {/* Use of Non-Personal Identifiable Data */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Use of Non-Personal Identifiable Data</h2>
              <p className="mb-6">
                To optimise the SettleLoans experience we may capture non-identifiable analytics such as device fingerprints, locale preferences, or session behaviour. Typical data points include:
              </p>
              <ul className="space-y-4 list-none pl-0 mb-8">
                {[
                  "Device type, operating system, browser version, and language preference.",
                  "Time zone, screen resolution, referring/exit pages, and on-site navigation patterns."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We use aggregated insights to improve usability, prioritise new features, and tighten the security posture of our platform.
              </p>
            </section>

            {/* Cookies & Tracking Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Cookies & Tracking Technologies</h2>
              <p className="mb-6">
                SettleLoans relies on first-party cookies and trusted analytics tools to maintain session continuity, remember your preferences, and measure campaign effectiveness. You retain full control:
              </p>
              <ul className="space-y-6 list-none pl-0">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>Manage cookie permissions directly via your browser privacy settings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-1">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Request manual opt-out or cookie removal support by emailing <a href="mailto:info@settleloans.in" className="text-[#1F5EFF] hover:underline font-bold">info@settleloans.in</a>.</span>
                </li>
              </ul>
            </section>

            {/* Sharing of Personal Information */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Sharing of Personal Information</h2>
              <p className="mb-6">
                We disclose personal information only when necessary with trusted affiliates, operational vendors, and legal authorities. Typical scenarios include:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Fraud detection, credit risk assessment, and platform security enforcement.",
                  "Service delivery partners who assist with RBI-compliant negotiations or technology infrastructure.",
                  "Corporate restructuring events such as mergers, acquisitions, or investment diligence—always under confidentiality obligations."
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
              <h2 className="text-2xl md:text-3xl font-black mb-6">Information Security</h2>
              <p className="mb-6">
                We implement industry-standard safeguards (including SSL encryption, access controls, and regular audits) to protect your information. While no Internet transmission is 100% secure, we continually strengthen our defences.
              </p>
            </section>

            {/* Testimonials & Case Studies */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Testimonials & Case Studies</h2>
              <p className="mb-6">
                With your explicit consent, we may publish anonymised success stories or testimonials that highlight SettleLoans outcomes. You can request edits or removal at any time by contacting our team.
              </p>
            </section>

            {/* Contacting SettleLoans */}
            <section className="mb-12 bg-[#1F5EFF]/5 border border-[#1F5EFF]/20 rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-black mb-4">Contacting SettleLoans</h2>
              <p className="mb-6 text-lg">
                For privacy questions, data access requests, or escalation, reach us at:
              </p>
              <a href="mailto:info@settleloans.in" className="text-2xl md:text-3xl font-black text-[#1F5EFF] hover:underline block mb-8">
                info@settleloans.in
              </a>
              <div className="pt-8 border-t border-[#1F5EFF]/10">
                <h3 className="text-xl font-bold mb-4 italic">Want a deeper look at SettleLoans's compliance safeguards?</h3>
                <p className="mb-8 opacity-80">
                  Our compliance specialists can walk you through data handling protocols, confidentiality agreements, and how we coordinate with creditors to protect your information.
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
