import { Metadata } from 'next';
import PersonalLoanSettlementCompanyClient from './PersonalLoanSettlementCompanyClient';

const urlSlug = "personal-loan-settlement-company";
const pageTitle = "Best Personal Loan Settlement Company | Debt Relief";
const pageDescription = "Compare the best personal loan settlement companies. Learn how to verify credentials, check reviews, and safely settle your debt without getting scammed.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: 'https://www.settleloans.in/personal-loan-settlement-company',
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://www.settleloans.in/${urlSlug}`,
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
      "@id": `https://www.settleloans.in/${urlSlug}`
    },
    "headline": pageTitle,
    "description": pageDescription,
    "image": `https://www.settleloans.in/images/og/${urlSlug}.jpg`,
    "author": {
      "@type": "Organization",
      "name": "SettleLoans Financial Review Team",
      "url": "https://www.settleloans.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SettleLoans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo.png"
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
