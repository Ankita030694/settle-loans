import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import GlobalPopupForm from "@/components/GlobalPopupForm";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

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
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1508348043563735');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1508348043563735&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body
        className={`${satoshi.variable} antialiased`}
      >
        <Navbar />
        <div>
           {children}
        </div>
        <Footer />
        <GlobalPopupForm />
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  );
}
