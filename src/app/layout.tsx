import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import { Analytics } from "@vercel/analytics/next";

const satoshi = localFont({
  src: "../../public/font/WEB/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "Loan Settlement Services - Debt Relief & Legal Assistance in India",
  description: "Professional loan settlement services to help you manage debt, handle recovery agents, and find a structured legal path to financial freedom. Expert help for personal, business, and credit card loans.",
  keywords: ["loan settlement", "debt settlement India", "debt relief services", "legal help for loan defaults", "bank loan settlement", "NPA settlement experts", "credit score improvement"],
  authors: [{ name: "SettleLoans" }],
  creator: "SettleLoans",
  publisher: "SettleLoans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://settleloans.in", // Adjust to your actual domain
  },
  openGraph: {
    title: "Loan Settlement Services - Debt Relief & Legal Assistance",
    description: "Expert assistance for loan settlement and debt management. We help you deal with recovery agents and find a lawful way out of debt.",
    url: "https://settleloans.in",
    siteName: "SettleLoans",
    images: [
      {
        url: "https://settleloans.in/og-image.jpg", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "SettleLoans - Professional Debt Settlement",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Services - Debt Relief & Legal Assistance",
    description: "Expert assistance for loan settlement and debt management. We help you deal with recovery agents and find a lawful way out of debt.",
    images: ["https://settleloans.in/twitter-image.jpg"], // Ensure this image exists
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SettleLoans",
    "url": "https://settleloans.in",
    "logo": "https://settleloans.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX", // Update with actual contact
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.facebook.com/settleloans",
      "https://twitter.com/settleloans",
      "https://www.linkedin.com/company/settleloans"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${satoshi.variable} antialiased`}
      >
        <Navbar />
        <div>
           {children}
        </div>
        <Footer />
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  );
}
