import type { Metadata } from "next";
import PersonalLoanBounceCalculatorClient from "./PersonalLoanBounceCalculatorClient";

export const metadata: Metadata = {
  title: "Personal Loan EMI Bounce Calculator | SettleLoans",
  description: "Calculate personal loan EMI bounce fees, NACH return penalties, GST, and 6-month overdue costs across 13 Indian banks and NBFCs for salaried staff.",
  alternates: {
    canonical: "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator",
  },
  openGraph: {
    title: "Personal Loan EMI Bounce Calculator | SettleLoans",
    description: "Calculate personal loan EMI bounce fees, NACH return penalties, GST, and 6-month overdue costs across 13 Indian banks and NBFCs for salaried staff.",
    url: "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator",
    type: "website",
    images: [
      {
        url: "https://www.settleloans.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Personal Loan EMI Bounce Charges Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan EMI Bounce Calculator | SettleLoans",
    description: "Calculate personal loan EMI bounce fees, NACH return penalties, GST, and 6-month overdue costs across 13 Indian banks and NBFCs for salaried staff.",
    images: ["https://www.settleloans.in/og-image.jpg"],
  },
};

export default function PersonalLoanBounceCalculatorPage() {
  return <PersonalLoanBounceCalculatorClient />;
}
