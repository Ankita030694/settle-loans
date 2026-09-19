import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | SettleLoans Debt Relief",
  description: "Get in touch with SettleLoans for legal debt settlement, loan resolution, and protection against bank recovery agent harassment across India.",
  alternates: {
    canonical: "https://www.settleloans.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-grow">
        <ContactForm titleAs="h1" />

        {/* Contact Information and Consultation Guidelines Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Direct Channels for Assistance</h2>
            <p className="text-gray-600 text-base md:text-lg">Reach our legal team directly for urgent notices, debt guidance, or anti-harassment shield.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-4">Send us your loan documents, legal notices, or settlement inquiries for confidential review.</p>
              <a href="mailto:help@settleloans.in" className="text-[#1F5EFF] font-semibold hover:underline">
                help@settleloans.in
              </a>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Advisory Hours</h3>
              <p className="text-sm text-gray-600 mb-4">Our legal associates and debt negotiators are available six days a week to support you.</p>
              <p className="text-gray-900 font-semibold">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-xs text-gray-500 mt-1">Closed on Sundays & National Holidays</p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Harassment Hotline</h3>
              <p className="text-sm text-gray-600 mb-4">Are recovery agents violating RBI guidelines or threatening you? Contact us immediately for legal protection.</p>
              <Link href="/can-recovery-agents-shame-defaulters-on-social-media-or-society-whatsapp-groups" className="text-[#1F5EFF] font-semibold hover:underline">
                Read Recovery Defense Guidelines &rarr;
              </Link>
            </div>
          </div>

          {/* Educational Content for Borrowers */}
          <div className="max-w-4xl mx-auto space-y-12 text-gray-800">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What to Expect During Your Free Consultation</h2>
              <p className="leading-relaxed mb-4">
                When you contact SettleLoans, our team reviews your complete loan history. We check your total balance, principal dues, and any unfair bank penalties or extra charges.
              </p>
              <p className="leading-relaxed">
                Next, we assess your financial situation. We check if your debt qualifies for a One-Time Settlement (OTS) under RBI rules. Then, we create a legal plan to stop agent harassment and negotiate the highest possible waiver on your debt.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <HelpCircle className="w-7 h-7 text-[#1F5EFF]" />
                Frequently Asked Consultation Questions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Is my financial information kept confidential?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, absolutely. We follow strict client privacy rules. Your contact numbers, salary details, and loan records are never shared with third parties or recovery agencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. What documents should I have ready before speaking with an advocate?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Please keep your latest loan statements, sanction letters, and any bank legal notices ready. These include Section 138 cheque bounce notices, Lok Adalat summons, or demand letters. Having these documents helps our team review your case faster and calculate accurate waiver estimates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. How quickly can SettleLoans intervene if recovery agents visit my home?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Under the RBI Fair Practices Code, recovery agents cannot use abusive language. They cannot call before 8:00 AM or after 7:00 PM. They are also barred from contacting your family, neighbors, or workplace. Once you retain our services, our legal team sends formal representation notices to bank Nodal Officers right away.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. What happens immediately after I submit this consultation form?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    After you submit your inquiry, our team reviews your loan details. We schedule a confidential call with a legal associate. We review your financial hardship, check any court notices, and share a realistic settlement plan within 24 hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Can I schedule an emergency consultation outside business hours?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes. If recovery agents visit your home or workplace, please mark your inquiry as urgent. You should also do this if you have an upcoming Lok Adalat date. Our emergency consumer defense desk reviews urgent cases on priority, even outside normal office hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
