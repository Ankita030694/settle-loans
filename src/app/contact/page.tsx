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
                When you reach out to SettleLoans, our certified financial advisors and legal advocates first review the complete history of your loan defaults, current outstanding balance, principal component, and any unlawful penalties or penal interest levied by your lenders.
              </p>
              <p className="leading-relaxed">
                We assess your current debt-to-income ratio, identify whether your loans qualify for a One-Time Settlement (OTS) under Reserve Bank of India (RBI) circulars, and devise a customized legal strategy to immediately halt recovery agent harassment while negotiating maximum possible waivers on your outstanding dues.
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
                    Yes, absolutely. We adhere to strict client confidentiality protocols and nondisclosure practices. None of your contact numbers, salary accounts, or debt details are shared with third parties or recovery agencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. What documents should I have ready before speaking with an advocate?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Having your latest loan account statements, sanction letters, and any recent bank legal notices (such as Section 138 cheque bounce notices, Lok Adalat summons, or demand letters) helps our legal team assess your case faster and provide accurate waiver estimates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. How quickly can SettleLoans intervene if recovery agents visit my home?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Under RBI Fair Practices Code, recovery agents are strictly prohibited from using abusive language, making unsolicited calls outside 8:00 AM to 7:00 PM, or harassing your neighbors and employers. Once retained, our legal team issues immediate formal representation notices to your bank nodal officers, establishing formal legal representation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. What happens immediately after I submit this consultation form?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Once you submit your inquiry, our dedicated debt resolution coordinator analyzes your overall loan portfolio and schedules a confidential one-on-one discovery call with a senior legal associate. We evaluate your hardship grounds, verify any pending court summons or arbitration notices, and outline a realistic settlement waiver projection within 24 business hours.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Can I schedule an emergency consultation outside business hours?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes. If you are experiencing aggressive recovery agent intimidation, workplace visits, or have received an urgent Lok Adalat notice scheduled for the upcoming weekend, mark your request as urgent in the form comments. Our emergency consumer protection desk reviews distress tickets on priority even outside standard hours.
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
