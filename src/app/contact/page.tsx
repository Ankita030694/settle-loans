import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <ContactForm titleAs="h1" />
      </main>
    </div>
  );
}
