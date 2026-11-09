import type { Metadata } from "next";
import LoanSettlementCalculatorClient from "./LoanSettlementCalculatorClient";

export const metadata: Metadata = {
  title: "Loan Settlement Amount Calculator 2026 | Estimate Bank OTS Waiver %",
  description: "Calculate your personal loan and credit card One-Time Settlement (OTS) amount. Check realistic 40%–70% bank haircut percentages and 2026 RBI compromise rules.",
  alternates: {
    canonical: "https://www.settleloans.in/loan-settlement-amount-calculator",
  },
  openGraph: {
    title: "Loan Settlement Amount Calculator 2026 | Estimate Bank OTS Waiver %",
    description: "Calculate your personal loan and credit card One-Time Settlement (OTS) amount. Check realistic 40%–70% bank haircut percentages and 2026 RBI compromise rules.",
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
    title: "Loan Settlement Amount Calculator 2026 | Estimate Bank OTS Waiver %",
    description: "Calculate your personal loan and credit card One-Time Settlement (OTS) amount. Check realistic 40%–70% bank haircut percentages and 2026 RBI compromise rules.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

export default function Page() {
  return <LoanSettlementCalculatorClient />;
}
