import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SettlementLetters from "@/components/SettlementLetters";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import BankGrid from "@/components/BankGrid";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Loan Settlement & Debt Relief Services | SettleLoans",
  description:
    "Resolve personal loans, credit card dues, and recovery harassment with legal debt settlement and RBI-compliant advisory across India.",
  alternates: {
    canonical: "https://www.settleloans.in/",
  },
  openGraph: {
    title: "Loan Settlement & Debt Relief Services | SettleLoans",
    description:
      "Resolve personal loans, credit card dues, and recovery harassment with legal debt settlement and RBI-compliant advisory across India.",
    url: "https://www.settleloans.in",
    siteName: "SettleLoans",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement & Debt Relief Services | SettleLoans",
    description:
      "Resolve personal loans, credit card dues, and recovery harassment with legal debt settlement and RBI-compliant advisory across India.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[var(--background)] selection:bg-[var(--color-primary)] selection:text-white">
      
      {/* Premium Background Effects - Removed for Monochrome Theme */}
      <div className="absolute inset-0 z-0">
         {/* Clean White Background */}
      </div>

      <div className="relative z-10">
        <Hero />
        <SettlementLetters />
        <ProcessSection />
        <Services />
        <BankGrid />
        <FAQ/>

        <ContactForm />

       
      </div>
    </main>
  );
}
