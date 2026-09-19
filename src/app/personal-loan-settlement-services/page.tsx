import type { Metadata } from 'next';
import PersonalLoanSettlementServicesClient from './PersonalLoanSettlementServicesClient';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Personal Loan Settlement Assistance | SettleLoans";
  const description = "Professional personal loan settlement in India. Negotiate with banks, stop harassment, and reduce debt legally with expert advocates. Free consultation.";
  const url = "https://www.settleloans.in/personal-loan-settlement-services";
  const imageUrl = "https://www.settleloans.in/images/og/personal-loan-settlement-services.jpg";

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
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Personal Loan Settlement Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Page() {
  return <PersonalLoanSettlementServicesClient />;
}
