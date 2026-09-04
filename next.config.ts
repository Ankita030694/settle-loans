import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap',
        destination: '/html-sitemap',
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'settleloans.in',
          },
        ],
        destination: 'https://www.settleloans.in/:path*',
        permanent: true,
      },
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
      {
        source: '/eligibility-checker-for-loan-settlement',
        destination: '/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/free-consultation-loan-settlement',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/loan-settlement-fees',
        destination: '/compare-debt-settlement-fees-and-success-rate',
        permanent: true,
      },
      {
        source: '/eligibility',
        destination: '/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/harassment-by-recovery-agents',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/html/privacy-policy.html',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/services/loan-settlement',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/service/free-credit-report',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/blog/credit-information',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/blog/how-to-neotiate-a-lump-sum',
        destination: '/faqs/how-to-negotiate-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/static/media/Terms_and_Conditions.ef33aeceb3258dd6ff40.pdf',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/static/media/Privacy_Policy.d267c00ea98943bba513.pdf',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/blog/how-to-rebuild-your-credit-score',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/service/cibil-building-programme',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/service/settlement-and-foreclosure',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/blog/impact-of-bank-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/blog/bank-lied',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/blog/debt-liberation',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/blogs',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/service/personal-loan',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
    ];

  },
};

export default nextConfig;
