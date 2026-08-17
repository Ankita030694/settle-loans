import type { Metadata } from 'next';
import PersonalLoanSettlementServicesClient from './PersonalLoanSettlementServicesClient';

export async function generateMetadata(): Promise<Metadata> {
  const title = "Expert Personal Loan Settlement Services in India | Settle Loan";
  const description = "Looking for professional personal loan settlement services? Hire experts to negotiate with banks, stop harassment, and reduce your debt legally. Get a free consultation today.";
  const url = "https://settleloan.in/personal-loan-settlement-services";
  const imageUrl = "https://settleloan.in/images/og/personal-loan-settlement-services.jpg";

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
