import { Metadata } from "next";
import PersonalLoanSettlementLawyerClient from "./PersonalLoanSettlementLawyerClient";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://www.settleloans.in/personal-loan-settlement-lawyer";
  const title = "Expert Personal Loan Settlement Lawyer | Stop Recovery Harassment";
  const description = "Facing legal notices or bank recovery harassment? Hire a specialized personal loan settlement lawyer in India to negotiate your debt and protect your rights.";

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: "/images/og/personal-loan-settlement-lawyer.jpg",
          width: 1200,
          height: 630,
          alt: "Personal Loan Settlement Lawyer in India",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/personal-loan-settlement-lawyer.jpg"],
    },
  };
}

export default function PersonalLoanSettlementLawyerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Expert Personal Loan Settlement Lawyer | Stop Recovery Harassment",
    "description": "Facing legal notices or bank recovery harassment? Hire a specialized personal loan settlement lawyer in India to negotiate your debt and protect your rights.",
    "author": {
      "@type": "Person",
      "name": "Ashish Jhangra",
      "url": "https://www.settleloans.in/authors/ashish-jhangra"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SettleLoans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.settleloans.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.settleloans.in/personal-loan-settlement-lawyer"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonalLoanSettlementLawyerClient />
    </>
  );
}
