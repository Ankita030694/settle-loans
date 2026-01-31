import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions - SettleLoans",
  description: "Read the Terms and Conditions for using SettleLoans services and website. Understand your rights and responsibilities when using our platform.",
  alternates: {
    canonical: "https://settleloans.in/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  const lastReviewed = "28 January 2026";

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] py-16 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Notice
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#DEDEDE] mb-6 leading-tight tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl text-[#DEDEDE]/80 max-w-2xl mx-auto leading-relaxed">
              These Terms and Conditions govern your use of <Link href="/" className="text-[#1F5EFF] hover:underline">SettleLoans</Link> (the "Website"), the SettleLoans platform, and all associated services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 md:px-8 py-16">
          <div className="prose prose-lg max-w-none text-[#2E2E2E]">
            <p className="mb-8 font-medium">
              By accessing or using our Website you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not accept any part of them, you must refrain from using SettleLoans services.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-[#747474] mb-12 border-b border-[#DEDEDE] pb-4">
              <span>Last reviewed:</span>
              <span className="font-bold text-[#2E2E2E]">{lastReviewed}</span>
            </div>

            <p className="mb-12">
              By using this Website, you also agree to our <Link href="/privacy-policy" className="text-[#1F5EFF] hover:underline font-bold">Privacy Policy</Link>, which explains how we collect, use, and protect your information.
            </p>

            {/* Acceptable Use */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Acceptable Use</h2>
              <p className="mb-6">
                We expect every visitor to use the SettleLoans platform responsibly and respectfully. By accessing our services you agree to:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Comply with these Terms, our Privacy Policy, and all applicable laws.",
                  "Avoid any conduct that insults, abuses, harasses, or violates the rights of other users or SettleLoans team members.",
                  "Refrain from uploading, sharing, or transmitting unlawful, defamatory, obscene, or infringing content.",
                  "Never attempt to hack, probe, reverse-engineer, or otherwise disrupt the SettleLoans platform or its security features.",
                  "Do not send spam, phishing attempts, malware, or unsolicited commercial communications using our systems."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#1F5EFF] font-bold mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Limitation of Liability</h2>
              <p className="mb-6">
                SettleLoans operates with the highest level of diligence, yet certain risks remain outside our control. To the fullest extent permitted by law, we are not liable for damages or losses arising from:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Your use or inability to use any SettleLoans service, tool, or resource.",
                  "Any unauthorized access, alteration, or use of your information despite reasonable security measures.",
                  "Actions, omissions, or statements made by third parties, including partners or advertisers, on or through the SettleLoans platform."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Indemnification */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Indemnification</h2>
              <p className="mb-6">
                You agree to protect SettleLoans, its directors, employees, partners, and affiliates from claims that arise because of your actions. This includes covering reasonable legal fees when those claims stem from:
              </p>
              <ul className="space-y-4 list-none pl-0">
                {[
                  "Your breach of these Terms and Conditions.",
                  "Violation of any law, regulation, or third-party right while using SettleLoans services.",
                  "Misuse of any content, tool, or confidential information obtained through SettleLoans."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Fees */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Fees</h2>
              <p className="mb-6">
                SettleLoans provides premium, RBI-compliant debt resolution expertise. Before you authorise any service, we will clearly communicate:
              </p>
              <div className="bg-gray-50 border border-[#DEDEDE] rounded-2xl p-6 md:p-8">
                <ul className="space-y-4 list-none pl-0 m-0">
                  {[
                    "The total professional fee payable for the negotiated service scope.",
                    "Relevant taxes, statutory charges, or third-party costs associated with execution.",
                    "The payment schedule and milestone-based deliverables."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#1F5EFF] font-black">{idx + 1}.</span>
                      <span className="font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 italic text-[#747474]">
                We begin execution only after receiving your explicit consent and the agreed payment.
              </p>
            </section>

            {/* Refunds */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black mb-6">Refunds</h2>
              <p className="mb-6">
                Our refund commitments are governed by the service agreement and statement of work signed during onboarding. Please note:
              </p>
              <ul className="space-y-4">
                <li>Professional fees already paid are non-refundable once the engagement begins.</li>
                <li>You may cancel upcoming services at any time; no further charges will be raised post-cancellation.</li>
                <li>Any discretionary goodwill adjustments are evaluated on a case-by-case basis by SettleLoans management.</li>
              </ul>
            </section>

            {/* Contact Us */}
            <section className="mb-12 bg-[#1F5EFF]/5 border border-[#1F5EFF]/20 rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-black mb-4">Contact Us</h2>
              <p className="mb-6 text-lg">
                We are here to help you understand and navigate these Terms. Reach out for clarification, escalation, or compliance queries at
              </p>
              <a href="mailto:info@settleloans.in" className="text-2xl md:text-3xl font-black text-[#1F5EFF] hover:underline block mb-8">
                info@settleloans.in
              </a>
              <div className="pt-8 border-t border-[#1F5EFF]/10">
                <h3 className="text-xl font-bold mb-4 italic">Need clarity on how these Terms apply to your situation?</h3>
                <p className="mb-8 opacity-80">
                  Schedule a call with SettleLoans's compliance team. We will walk you through the engagement process, documentation, and RBI-compliant settlement roadmap.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                  Talk to an Expert
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
