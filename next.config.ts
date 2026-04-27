import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/services/anti-harassment',
        destination: '/ignoring-calls-of-recovery-agent',
        permanent: true,
      },
      {
        source: '/services/business-debt-settlement',
        destination: '/business-loan-settlement',
        permanent: true,
      },
      {
        source: '/services/credit-score-improvement',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/kisan-credit-card-settlement',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/arbitration-for-loan-settlement',
        destination: '/bank-arbitration-notice-loan',
        permanent: true,
      },
      {
        source: '/best-lawyer-for-debt-recovery-tribunal-case',
        destination: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery',
        permanent: true,
      },
      {
        source: '/best-lawyer-for-loan-recovery-defence',
        destination: '/best-lawyer-for-bank-loan-recovery-defence',
        permanent: true,
      },
      {
        source: '/calculate-loan-settlement-amount-formula-and-tools',
        destination: '/loan-settlement-amount-calculator',
        permanent: true,
      },
      {
        source: '/can-i-get-loan-after-settlement',
        destination: '/faqs/can-i-get-loan-after-settlement',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/credit-card-settlement',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/debt-restructuring-vs-settlement',
        destination: '/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers',
        permanent: true,
      },
      {
        source: '/faqs/loan-settlement-letter-format-india',
        destination: '/loan-settlement-letter-format-noc-format',
        permanent: true,
      },
      {
        source: '/faqs/what-is-loan-settlement-process-in-india',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/how-to-handle-a-loan-settlement-by-yourself-a-brief-guide',
        destination: '/can-i-settle-my-loan-without-a-lawyer',
        permanent: true,
      },
      {
        source: '/how-to-handle-recovery-agent-harrasement',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-initiate-a-full-and-final-settlement-discussion-with-my-bank',
        destination: '/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank',
        permanent: true,
      },
      {
        source: '/how-to-negotiate-personal-loan-settlement',
        destination: '/faqs/how-to-negotiate-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/how-to-rebuild-credit-score-after-loan-settlement',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/how-to-remove-loan-default-from-cibil-finances-india',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/how-to-stop-e-auction-by-bank',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/how-to-stop-harassment-by-loan-collection-agents-in-india',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-stop-recovery-agent-home-visit',
        destination: '/recovery-agent-home-visit-rules',
        permanent: true,
      },
      {
        source: '/is-is-possible-to-settle-joint-loan',
        destination: '/faqs/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers',
        permanent: true,
      },
      {
        source: '/is-loan-settlement-a-good-option',
        destination: '/is-loan-settlement-a-good-option-for-borrowers',
        permanent: true,
      },
      {
        source: '/loan-settlement-fees-and-success-rates-in-india',
        destination: '/compare-debt-settlement-fees-and-success-rate',
        permanent: true,
      },
      {
        source: '/loan-settlement-process-step-by-step-guide',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/loan-settlement/bangalore',
        destination: '/loan-settlement/bengaluru',
        permanent: true,
      },
      {
        source: '/medical-emergency-loan-settlement',
        destination: '/loan-settlement-during-medical-emergency',
        permanent: true,
      },
      {
        source: '/negotiation-tactics-for-debt-settlement',
        destination: '/find-debt-settlement-services-known-for-effective-negotiation',
        permanent: true,
      },
      {
        source: '/npa-loan-settlement-process',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/ots-loan-settlement-process',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/personal-loan-recovery-process-by-banks-in-india',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/personal-loan-settlement',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/personal-loan-settlement-process',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-2002-overview',
        destination: '/bad-loan-recovery-strategy',
        permanent: true,
      },
      {
        source: '/what-is-one-time-settlement-ots-in-banking',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/what-to-do-when-recovery-agent-calls-you',
        destination: '/recovery-agents-threatening-me-what-to-do',
        permanent: true,
      },
      {
        source: '/top-rated-loan-settlement-consultants-for-small-business-loans-page',
        destination: '/top-rated-loan-settlement-consultants-for-small-business-loans',
        permanent: true,
      },
      {
        source: '/what-documents-needed-for-debt-settlement-services',
        destination: '/what-documents-are-needed-for-debt-settlement-services',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/aditya-birla',
        destination: '/loan-settlement-by-bank/aditya-birla-fin',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/bajaj-finserv',
        destination: '/loan-settlement/bajaj-finance',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/hdfc-bank',
        destination: '/loan-settlement/hdfc-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/icici-bank',
        destination: '/loan-settlement/icici-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/idfc-bank',
        destination: '/loan-settlement/idfc-first-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/kotak-mahindra',
        destination: '/loan-settlement/kotak-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/poonawalla-fincorp',
        destination: '/loan-settlement-by-bank/poonawala-fin',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/sbi-bank',
        destination: '/loan-settlement/sbi',
        permanent: true,
      },
    ];

  },
};

export default nextConfig;
