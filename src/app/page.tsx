import Hero from "@/components/Hero";
import SettlementLetters from "@/components/SettlementLetters";
import ProcessSection from "@/components/ProcessSection";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

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
        <FAQ/>

        <ContactForm />

       
      </div>
    </main>
  );
}
