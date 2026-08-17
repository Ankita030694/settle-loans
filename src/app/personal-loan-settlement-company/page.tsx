import { Metadata } from 'next';
import PersonalLoanSettlementCompanyClient from './PersonalLoanSettlementCompanyClient';

const urlSlug = "personal-loan-settlement-company";
const pageTitle = "Best Personal Loan Settlement Company in 2024 | Find Reliable Relief";
const pageDescription = "Compare the best personal loan settlement companies. Learn how to verify credentials, check reviews, and safely settle your debt without getting scammed.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `https://settleloan.in/${urlSlug}`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://settleloan.in/${urlSlug}`,
    type: 'article',
    images: [
      {
        url: `/images/og/${urlSlug}.jpg`,
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    images: [`/images/og/${urlSlug}.jpg`],
  },
};

export default function PersonalLoanSettlementCompanyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://settleloan.in/${urlSlug}`
    },
    "headline": pageTitle,
    "description": pageDescription,
    "image": `https://settleloan.in/images/og/${urlSlug}.jpg`,
    "author": {
      "@type": "Organization",
      "name": "Settle Loan Financial Review Team",
      "url": "https://settleloan.in/author"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Settle Loan",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloan.in/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonalLoanSettlementCompanyClient />
    </>
  );
}
