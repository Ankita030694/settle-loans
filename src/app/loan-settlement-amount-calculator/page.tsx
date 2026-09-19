import type { Metadata } from "next";
import LoanSettlementCalculatorClient from "./LoanSettlementCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Settlement Calculator | Estimate Savings",
  description: "Calculate your loan settlement savings and One-Time Settlement (OTS) amount. Understand waiver percentages and RBI rules with our estimator.",
  alternates: {
    canonical: "https://www.settleloans.in/loan-settlement-amount-calculator",
  },
  openGraph: {
    title: "Loan Settlement Calculator | Estimate Savings",
    description: "Calculate your loan settlement savings and One-Time Settlement (OTS) amount. Understand waiver percentages and RBI rules with our estimator.",
    url: "https://www.settleloans.in/loan-settlement-amount-calculator",
    type: "website",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Calculator | Estimate Savings",
    description: "Calculate your loan settlement savings and One-Time Settlement (OTS) amount. Understand waiver percentages and RBI rules with our estimator.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

export default function Page() {
  return <LoanSettlementCalculatorClient />;
}
