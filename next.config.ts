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
        source: '/eligibility-checker-for-loan-settlement',
        destination: '/faqs/eligibility-checker-for-loan-settlement',
        permanent: true,
      },
      {
        source: '/free-consultation-loan-settlement',
        destination: '/faqs/free-consultation-loan-settlement',
        permanent: true,
      },
      {
        source: '/kisan-credit-card-settlement',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-fees',
        destination: '/faqs/loan-settlement-fees',
        permanent: true,
      },
      {
        source: '/loan-settlement/bajaj-finserv',
        destination: '/loan-settlement/bajaj-finance',
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
    ];
  },
};

export default nextConfig;
