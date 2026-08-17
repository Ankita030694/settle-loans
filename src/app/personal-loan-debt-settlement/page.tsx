import { Metadata } from "next";
import PersonalLoanDebtSettlementClient from "./PersonalLoanDebtSettlementClient";

export async function generateMetadata(): Promise<Metadata> {
  const url = "https://settleloans.in/personal-loan-debt-settlement";
  
  return {
    title: "Personal Loan Debt Settlement vs Consolidation in India | SettleLoans",
    description: "Compare personal loan debt settlement and debt consolidation in India. Learn which debt relief strategy works best for your financial situation with SettleLoans.",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Personal Loan Debt Settlement vs Consolidation in India",
      description: "Compare personal loan debt settlement and debt consolidation in India. Learn which debt relief strategy works best for your financial situation.",
      url,
      images: [
        {
          url: "/images/og/personal-loan-debt-settlement.jpg",
          width: 1200,
          height: 630,
          alt: "Personal Loan Debt Settlement Guide by SettleLoans",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Personal Loan Debt Settlement vs Consolidation in India",
      description: "Compare personal loan debt settlement and debt consolidation in India. Learn which debt relief strategy works best for your financial situation.",
      images: ["/images/og/personal-loan-debt-settlement.jpg"],
    },
  };
}

export default function PersonalLoanDebtSettlementPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Personal Loan Debt Settlement vs Consolidation in India",
    "description": "Comprehensive guide on personal loan debt settlement versus debt consolidation in India. Learn the key differences, legal implications, and best practices.",
    "author": {
      "@type": "Person",
      "name": "Ashish Jhangra",
      "url": "https://settleloans.in/authors/ashish-jhangra"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SettleLoans",
      "logo": {
        "@type": "ImageObject",
        "url": "https://settleloans.in/images/logo.png"
      }
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PersonalLoanDebtSettlementClient />
    </>
  );
}
