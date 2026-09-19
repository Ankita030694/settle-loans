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
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
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
      // City & Locality Nuanced Redirects
      {
        source: '/loan-settlement-by-city/mumbai',
        destination: '/personal-loan-settlement-mumbai',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/delhi',
        destination: '/personal-loan-settlement-delhi-ncr',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/delhi-ncr',
        destination: '/personal-loan-settlement-delhi-ncr',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/bengaluru',
        destination: '/personal-loan-settlement-bangalore',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/bangalore',
        destination: '/personal-loan-settlement-bangalore',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/hyderabad',
        destination: '/personal-loan-settlement-hyderabad',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/pune',
        destination: '/personal-loan-settlement-pune',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/chennai',
        destination: '/personal-loan-settlement-chennai',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/kolkata',
        destination: '/personal-loan-settlement-kolkata',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/ahmedabad',
        destination: '/personal-loan-settlement-ahmedabad',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/jaipur',
        destination: '/personal-loan-settlement-jaipur',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/chandigarh',
        destination: '/personal-loan-settlement-chandigarh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/lucknow',
        destination: '/personal-loan-settlement-lucknow',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/indore',
        destination: '/personal-loan-settlement-indore',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/kochi',
        destination: '/personal-loan-settlement-kochi',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/surat',
        destination: '/personal-loan-settlement-surat',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/noida',
        destination: '/loan-settlement/noida',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/gurgaon',
        destination: '/loan-settlement/gurgaon',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/salem',
        destination: '/personal-loan-settlement-salem',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/hubli-dharwad',
        destination: '/personal-loan-settlement-hubli-dharwad',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/trichy',
        destination: '/personal-loan-settlement-trichy',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/aurangabad',
        destination: '/personal-loan-settlement-aurangabad',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/mysore',
        destination: '/personal-loan-settlement-mysore',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/tamil-nadu',
        destination: '/loan-settlement/tamil-nadu',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/telangana',
        destination: '/loan-settlement/telangana',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/haryana',
        destination: '/loan-settlement/haryana',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/gujarat',
        destination: '/loan-settlement/gujarat',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/west-bengal',
        destination: '/loan-settlement/west-bengal',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/uttar-pradesh',
        destination: '/loan-settlement/uttar-pradesh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/punjab',
        destination: '/loan-settlement/punjab',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/karnataka',
        destination: '/loan-settlement/karnataka',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/maharashtra',
        destination: '/loan-settlement/maharashtra',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/odisha',
        destination: '/loan-settlement/odisha',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/madhya-pradesh',
        destination: '/loan-settlement/madhya-pradesh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/rajasthan',
        destination: '/loan-settlement/rajasthan',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/andhra-pradesh',
        destination: '/loan-settlement/andhra-pradesh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/kerala',
        destination: '/loan-settlement/kerala',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/chhattisgarh',
        destination: '/loan-settlement/chhattisgarh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/himachal-pradesh',
        destination: '/loan-settlement/himachal-pradesh',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/assam',
        destination: '/loan-settlement/assam',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/meghalaya',
        destination: '/loan-settlement/meghalaya',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/uttarakhand',
        destination: '/loan-settlement/uttarakhand',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/bihar',
        destination: '/loan-settlement/bihar',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/jharkhand',
        destination: '/loan-settlement/jharkhand',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/goa',
        destination: '/loan-settlement/goa',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city/:slug',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-city',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      // Bank Nuanced Redirects
      {
        source: '/loan-settlement-by-bank/sbi',
        destination: '/loan-settlement/sbi',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/sbi-bank',
        destination: '/loan-settlement/sbi',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/state-bank-of-india',
        destination: '/loan-settlement/sbi',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/hdfc',
        destination: '/loan-settlement/hdfc-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/hdfc-bank',
        destination: '/loan-settlement/hdfc-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/icici',
        destination: '/loan-settlement/icici-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/icici-bank',
        destination: '/loan-settlement/icici-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/axis',
        destination: '/loan-settlement/axis-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/axis-bank',
        destination: '/loan-settlement/axis-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/kotak',
        destination: '/loan-settlement/kotak-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/kotak-bank',
        destination: '/loan-settlement/kotak-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/kotak-mahindra',
        destination: '/loan-settlement/kotak-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/idfc',
        destination: '/loan-settlement/idfc-first-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/idfc-bank',
        destination: '/loan-settlement/idfc-first-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/idfc-first-bank',
        destination: '/loan-settlement/idfc-first-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/bajaj',
        destination: '/loan-settlement/bajaj-finance',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/bajaj-finance',
        destination: '/loan-settlement/bajaj-finance',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/bajaj-finserv',
        destination: '/loan-settlement/bajaj-finance',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/rbl',
        destination: '/loan-settlement/rbl-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/rbl-bank',
        destination: '/loan-settlement/rbl-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/indusind',
        destination: '/loan-settlement/indusind-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/indusind-bank',
        destination: '/loan-settlement/indusind-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/yes-bank',
        destination: '/loan-settlement/yes-bank',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/pnb',
        destination: '/pnb-personal-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/punjab-national-bank',
        destination: '/pnb-personal-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/tata-capital',
        destination: '/tata-capital-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/poonawalla-fincorp',
        destination: '/poonawalla-fincorp-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/poonawala-fin',
        destination: '/poonawalla-fincorp-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/smfg-india-credit',
        destination: '/smfg-india-credit-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/smfg',
        destination: '/smfg-india-credit-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/kissht',
        destination: '/kissht-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/iifl-finance',
        destination: '/iifl-finance-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/indifi',
        destination: '/indifi-business-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/ring-app',
        destination: '/ring-app-loan-default-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/flexiloans',
        destination: '/flexiloans-business-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/standard-chartered',
        destination: '/standard-chartered-loan-credit-card-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/aditya-birla',
        destination: '/services/nbfc-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/aditya-birla-fin',
        destination: '/services/nbfc-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank/:slug',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-by-bank',
        destination: '/loan-settlement',
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
      {
        source: '/20-lakh-personal-loan-settlement',
        destination: '/10-lakh-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/all-legal-notices',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/anti-harassment-letter',
        destination: '/police-complaint-format-recovery-agent-harassment',
        permanent: true,
      },
      {
        source: '/auto-loan',
        destination: '/overdue-payment-for-auto-loan',
        permanent: true,
      },
      {
        source: '/auto-loan-settlement',
        destination: '/overdue-payment-for-auto-loan',
        permanent: true,
      },
      {
        source: '/auto-loans',
        destination: '/overdue-payment-for-auto-loan',
        permanent: true,
      },
      {
        source: '/bajaj-finance-npa-status',
        destination: '/loan-npa-status',
        permanent: true,
      },
      {
        source: '/bank-filed-fir-for-loan-default-reality-check',
        destination: '/bank-fir-for-loan-default-reality-check',
        permanent: true,
      },
      {
        source: '/bank-ots-settlement-process',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/bank-recovery-agent-pareshan-kare-to-kya-kare',
        destination: '/bank-recovery-agent-threatening-me',
        permanent: true,
      },
      {
        source: '/bankers-right-of-set-off-explained',
        destination: '/can-banks-freeze-my-upi-phonepe-gpay-account-for-personal-loan-recovery#right-of-set-off',
        permanent: true,
      },
      {
        source: '/bank-set-off-clause-loan-recovery',
        destination: '/can-banks-freeze-my-upi-phonepe-gpay-account-for-personal-loan-recovery#right-of-set-off',
        permanent: true,
      },
      {
        source: '/banking-ombudsman-complaint',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/best-personal-loan-settlement-company',
        destination: '/personal-loan-settlement-company',
        permanent: true,
      },
      {
        source: '/blog/138-ni-act-cheque-bounce',
        destination: '/cheque-bounce',
        permanent: true,
      },
      {
        source: '/blog/credit-card-default',
        destination: '/legal-action-for-credit-card-default',
        permanent: true,
      },
      {
        source: '/blog/fake-legal-notice-format',
        destination: '/bank-sent-legal-notice-for-loan-what-to-do',
        permanent: true,
      },
      {
        source: '/blog/negotiate-late-payment-fees',
        destination: '/penalty-waiver-request-letter',
        permanent: true,
      },
      {
        source: '/late-payment-charges-waiver-request-format',
        destination: '/penalty-waiver-request-letter',
        permanent: true,
      },
      {
        source: '/blog/rbi-guidelines-for-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/blog/what-is-loan-settlement',
        destination: '/what-is-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/bnpl-default-legal-notice-settlement-guide',
        destination: '/wilful-defaulter-notice-reply-and-settlement-defense',
        permanent: true,
      },
      {
        source: '/business-loan',
        destination: '/business-loan-settlement',
        permanent: true,
      },
      {
        source: '/business-loan-recovery-process',
        destination: '/flexiloans-business-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/business-loans',
        destination: '/business-loan-settlement',
        permanent: true,
      },
      {
        source: '/can-another-bank-freeze-my-salary-account-for-a-different-bank-loan-default',
        destination: '/can-bank-freeze-salary-account-for-credit-card-payment-default',
        permanent: true,
      },
      {
        source: '/can-bajaj-finace-contact-guarantor-for-recovery',
        destination: '/can-banks-contact-guarantor-for-recovery',
        permanent: true,
      },
      {
        source: '/can-banks-sue-for-unpaid-loans',
        destination: '/can-bank-file-case-for-personal-loan',
        permanent: true,
      },
      {
        source: '/check-free-cibil',
        destination: '/check-free-cibil-score',
        permanent: true,
      },
      {
        source: '/cibil-defaulter-list',
        destination: '/check-cibil-defaulter-list',
        permanent: true,
      },
      {
        source: '/cibil-score-after-default',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/cibil-score-after-settlement',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/consumer-court-bank-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/corporate-veil-in-banking-law',
        destination: '/can-bank-freeze-company-current-account-for-directors-personal-loan-default',
        permanent: true,
      },
      {
        source: '/credit-card-debt-relief',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/credit-card-debt-settlement',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/credit-card-debt-settlement-process',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/credit-card-default-legal-action',
        destination: '/credit-card-partial-payment',
        permanent: true,
      },
      {
        source: '/credit-card-settlement-process',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/credit-card-settlement-process-india',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/credit-education',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/credit-repair',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/credit-scores',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/cybercrime-complaint-process',
        destination: '/cyber-crime-complaint-illegal-loan-apps-blackmail',
        permanent: true,
      },
      {
        source: '/dealing-with-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/dealing-with-recovery-agents',
        destination: '/ignoring-calls-of-recovery-agent',
        permanent: true,
      },
      {
        source: '/debt-settlement',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/debt-settlement-services',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/defamation-by-recovery-agents',
        destination: '/how-to-identify-fake-recovery-agents',
        permanent: true,
      },
      {
        source: '/difference-between-civil-and-criminal-liability-in-loans',
        destination: '/faqs/difference-between-loan-write-off-and-loan-settlements',
        permanent: true,
      },
      {
        source: '/difference-between-settled-and-written-off-cibil',
        destination: '/remove-post-write-off-settled-remark-cibil',
        permanent: true,
      },
      {
        source: '/dispute-credit-score',
        destination: '/cibil-dispute-wrong-overdue-entry',
        permanent: true,
      },
      {
        source: '/drt-appeal-process',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/drt-lawyer',
        destination: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery',
        permanent: true,
      },
      {
        source: '/drt-stay-order',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/drt-stay-order-process',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/drt-stay-order-rules-and-deposit-requirements',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/drt-stay-order-on-bank-auction-process',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/duplicate-noc-application',
        destination: '/download-noc-for-secured-loan',
        permanent: true,
      },
      {
        source: '/emi-bounce-charges',
        destination: '/personal-loan-emi-bounce-charges',
        permanent: true,
      },
      {
        source: '/federal-bank-loan-settlement',
        destination: '/federal-bank-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/filing-defamation-cases',
        destination: '/can-recovery-agents-shame-defaulters-on-social-media-or-society-whatsapp-groups',
        permanent: true,
      },
      {
        source: '/defamation-case-against-bank-recovery-agents',
        destination: '/can-recovery-agents-shame-defaulters-on-social-media-or-society-whatsapp-groups',
        permanent: true,
      },
      {
        source: '/guidelines',
        destination: '/bank-loan-settlement-guidelines',
        permanent: true,
      },
      {
        source: '/guides',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/guides/business-loan-foreclosure',
        destination: '/business-loan-foreclosure-letter',
        permanent: true,
      },
      {
        source: '/guides/how-to-file-ombudsman-complaint',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/guides/how-to-get-noc',
        destination: '/download-noc-for-secured-loan',
        permanent: true,
      },
      {
        source: '/guides/personal-loan-closure',
        destination: '/personal-loan-settlement-vs-closure',
        permanent: true,
      },
      {
        source: '/guides/personal-loan-settlement',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/guides/rbi-guidelines-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/guides/what-is-npa',
        destination: '/loan-npa-status',
        permanent: true,
      },
      {
        source: '/harassment-by-recovery-agents-rights',
        destination: '/can-recovery-agents-come-home',
        permanent: true,
      },
      {
        source: '/home-loan-one-time-settlement',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/home-loan-settlement-process-before-auction',
        destination: '/cashe-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/how-does-settlement-affect-cibil',
        destination: '/does-settlement-impact-a-co-borrower',
        permanent: true,
      },
      {
        source: '/how-to-deal-with-loan-recovery-agents',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-deal-with-recovery-agent-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-deal-with-recovery-agents',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-file-a-complaint-with-banking-ombudsman',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-file-banking-ombudsman-complaint',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-file-case-in-drt',
        destination: '/best-lawyer-for-drt-case-defence-for-bank-loan-recovery',
        permanent: true,
      },
      {
        source: '/how-to-file-complaint-against-recovery-agents',
        destination: '/police-complaint-format-recovery-agent-harassment',
        permanent: true,
      },
      {
        source: '/how-to-file-cybercrime-fir',
        destination: '/cyber-crime-complaint-illegal-loan-apps-blackmail',
        permanent: true,
      },
      {
        source: '/how-to-file-cyber-crime-complaint-for-loan-app-harassment',
        destination: '/cyber-crime-complaint-illegal-loan-apps-blackmail',
        permanent: true,
      },
      {
        source: '/how-to-file-rbi-ombudsman-complaint',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-file-sa-in-drt',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/how-to-file-securitisation-application-under-section-17-of-sarfaesi',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/how-to-challenge-sarfaesi-auction-in-drt-section-17-appeal',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/how-to-file-writ-petition-against-bank',
        destination: '/high-court-writ-petition-against-bank-recovery-harassment',
        permanent: true,
      },
      {
        source: '/how-to-negotiate-loan-settlement',
        destination: '/faqs/how-to-negotiate-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/how-to-read-cibil-report-for-loans',
        destination: '/how-to-improve-cibil-score-after-loan-settlement',
        permanent: true,
      },
      {
        source: '/how-to-remove-settled-status-from-cibil',
        destination: '/remove-settled-status-from-cibil',
        permanent: true,
      },
      {
        source: '/how-to-reply-to-arbitration-notice',
        destination: '/bank-arbitration-notice-loan',
        permanent: true,
      },
      {
        source: '/how-to-reply-to-section-138-notice',
        destination: '/section-138-cheque-bounce-loan-default',
        permanent: true,
      },
      {
        source: '/reply-to-section-138-notice-format-download',
        destination: '/section-138-cheque-bounce-loan-default',
        permanent: true,
      },
      {
        source: '/how-to-settle-a-personal-loan',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/how-to-settle-loan',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/how-to-settle-personal-loan',
        destination: '/faqs/how-to-settle-loan',
        permanent: true,
      },
      {
        source: '/how-to-stop-recovery-agents',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/illegal-bank-recovery-agent-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/illegal-possession-by-bank',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/impact-of-loan-settlement-on-credit-score',
        destination: '/personal-loan-settlement-cibil-impact',
        permanent: true,
      },
      {
        source: '/improve-cibil-score',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/it-professional-debt-settlement-guide',
        destination: '/it-professionals-personal-loan-debt-settlement',
        permanent: true,
      },
      {
        source: '/kisan-credit-card-loan-default-rules',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/legal',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/legal-guides',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/legal-heir-liability-for-personal-loan-default',
        destination: '/loan-guarantor-legal-liability-when-primary-borrower-defaults-in-india',
        permanent: true,
      },
      {
        source: '/legal-notice-for-loan-default',
        destination: '/legal-notice-for-loan-recovery',
        permanent: true,
      },
      {
        source: '/legal-notice-for-personal-loan-default',
        destination: '/lok-adalat-notice-for-personal-loan',
        permanent: true,
      },
      {
        source: '/legal-notice-format',
        destination: '/legal-notice-for-loan-recovery',
        permanent: true,
      },
      {
        source: '/legal-notices',
        destination: '/personal-loan-legal-notice',
        permanent: true,
      },
      {
        source: '/legal-rights',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/legal-rights-of-defaulters',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/loan-closure',
        destination: '/personal-loan-settlement-vs-closure',
        permanent: true,
      },
      {
        source: '/loan-default',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-foreclosure-letter',
        destination: '/business-loan-foreclosure-letter',
        permanent: true,
      },
      {
        source: '/loan-guides',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/loan-relief',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/loan-settlement-after-bank-files-civil-suit',
        destination: '/loan-settlement-after-settlement-failed',
        permanent: true,
      },
      {
        source: '/loan-settlement-process',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/loans',
        destination: '/loan-settlement',
        permanent: true,
      },
      {
        source: '/lok-adalat-loan-settlement',
        destination: '/lok-adalat-me-loan-settlement-kaise-kare',
        permanent: true,
      },
      {
        source: '/npa-account-regularisation',
        destination: '/loan-npa-status',
        permanent: true,
      },
      {
        source: '/npa-account-rules',
        destination: '/loan-npa-status',
        permanent: true,
      },
      {
        source: '/npa-account-settlement',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/npa-classification',
        destination: '/loan-npa-status',
        permanent: true,
      },
      {
        source: '/one-time-settlement-process',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/one-time-settlement-process-for-loans',
        destination: '/loan-settlement-process-in-india',
        permanent: true,
      },
      {
        source: '/personal-loan-default',
        destination: '/personal-loan-legal-notice',
        permanent: true,
      },
      {
        source: '/personal-loan-default-legal-action',
        destination: '/personal-loan-legal-notice',
        permanent: true,
      },
      {
        source: '/personal-loan-negotiation',
        destination: '/faqs/how-to-negotiate-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/personal-loan-prepayment-calculator',
        destination: '/loan-settlement-amount-calculator',
        permanent: true,
      },
      {
        source: '/personal-loan-recovery-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/personal-loan-vs-line-of-credit',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/personal-loans',
        destination: '/services/personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/pnb-personal-loan-settlement',
        destination: '/pnb-personal-loan-settlement-process',
        permanent: true,
      },
      {
        source: '/property-auction',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-for-loan-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-for-loan-recovery-agents-in-india',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-loan-closure',
        destination: '/personal-loan-settlement-vs-closure',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-loan-default',
        destination: '/bank-loan-settlement-guidelines',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-loan-recovery',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-on-fair-recovery-practices',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-on-loan-recovery',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-on-loan-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-on-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-guidelines-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/rbi-ombudsman-complaint',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/rbi-ombudsman-complaint-guide',
        destination: '/rbi-ombudsman-complaint-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/rbi-recovery-agent-guidelines',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/recovery-agent-threatening-me',
        destination: '/bank-recovery-agent-threatening-me',
        permanent: true,
      },
      {
        source: '/right-to-privacy-loan-defaults',
        destination: '/recording-recovery-agent-calls-legal-evidence',
        permanent: true,
      },
      {
        source: '/rto-form-35-guide',
        destination: '/download-noc-for-secured-loan',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-defense',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-guide',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-guidelines',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-notice',
        destination: '/how-to-reply-sarfaesi-notice',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-property-auction',
        destination: '/sarfaesi-act-bajaj-finance-property-action-notice',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-property-possession',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/sarfaesi-act-rules',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/section-138-cheque-bounce',
        destination: '/section-138-cheque-bounce-loan-default',
        permanent: true,
      },
      {
        source: '/section-60-cpc-protection-from-attachment',
        destination: '/bank-filed-civil-suit-for-loan-recovery-order-37-cpc-summons',
        permanent: true,
      },
      {
        source: '/send-a-legal-notice',
        destination: '/legal-notice-for-loan-recovery',
        permanent: true,
      },
      {
        source: '/send-legal-notice',
        destination: '/legal-notice-for-loan-recovery',
        permanent: true,
      },
      {
        source: '/services/cibil-repair',
        destination: '/credit-score-improvement',
        permanent: true,
      },
      {
        source: '/services/cibil-score-after-loan-settlement',
        destination: '/how-to-improve-cibil-score-after-loan-settlement',
        permanent: true,
      },
      {
        source: '/services/credit-card-settlement-process',
        destination: '/services/credit-card-settlement',
        permanent: true,
      },
      {
        source: '/services/how-to-stop-recovery-agent-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/services/legal-notice',
        destination: '/legal-notice-for-loan-recovery',
        permanent: true,
      },
      {
        source: '/services/rbi-guidelines-for-loan-defaulters',
        destination: '/top-10-rbi-rules-for-loan-defaulters-rights',
        permanent: true,
      },
      {
        source: '/settle-loan-legally',
        destination: '/startup-loan-legal-advisory',
        permanent: true,
      },
      {
        source: '/settled-vs-closed-cibil-status',
        destination: '/personal-loan-settlement-vs-closure',
        permanent: true,
      },
      {
        source: '/settlement-impact-on-cibil-score',
        destination: '/does-settlement-impact-a-co-borrower',
        permanent: true,
      },
      {
        source: '/settlement-request-letter',
        destination: '/personal-loan-settlement-letter-format',
        permanent: true,
      },
      {
        source: '/stop-bank-auction',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/stop-bank-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/stop-recovery-agent-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/stop-recovery-agents',
        destination: '/rbi-rules-for-recovery-agents',
        permanent: true,
      },
      {
        source: '/stop-recovery-harassment',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/supreme-court-judgments-on-cheque-bounce',
        destination: '/section-138-cheque-bounce-loan-default',
        permanent: true,
      },
      {
        source: '/supreme-court-judgments-on-section-65b',
        destination: '/recording-recovery-agent-calls-legal-evidence',
        permanent: true,
      },
      {
        source: '/symbolic-possession-rules',
        destination: '/sarfaesi-act-bajaj-finance-property-action-notice#symbolic-possession',
        permanent: true,
      },
      {
        source: '/symbolic-vs-physical-possession',
        destination: '/sarfaesi-act-bajaj-finance-property-action-notice#symbolic-possession',
        permanent: true,
      },
      {
        source: '/templates',
        destination: '/all-queries',
        permanent: true,
      },
      {
        source: '/understanding-co-borrower-vs-guarantor',
        destination: '/can-banks-contact-guarantor-for-recovery',
        permanent: true,
      },
      {
        source: '/understanding-emi-calculations',
        destination: '/arrear-emi-meaning-vs-overdue',
        permanent: true,
      },
      {
        source: '/understanding-sarfaesi-act-rules',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/unsecured-loan-settlement',
        destination: '/unsecured-business-loan-settlement',
        permanent: true,
      },
      {
        source: '/what-is-loan-settlement',
        destination: '/what-is-personal-loan-settlement',
        permanent: true,
      },
      {
        source: '/what-to-do-if-bank-account-frozen-for-loan-default',
        destination: '/bank-freeze-salary-account-loan-default',
        permanent: true,
      },
      {
        source: '/what-to-do-when-loan-recovery-agents-harass-you',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/what-to-do-when-recovery-agents-harass-you',
        destination: '/how-to-stop-loan-recovery-harassment',
        permanent: true,
      },
      {
        source: '/what-to-do-when-you-receive-sarfaesi-act-section-13-4-possession-notice',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/what-to-do-when-bank-issues-sarfaesi-symbolic-possession-notice',
        destination: '/auction-notice-challenge',
        permanent: true,
      },
      {
        source: '/can-i-go-to-jail-for-not-paying-personal-loan',
        destination: '/can-i-go-to-jail-for-loan-default',
        permanent: true,
      },
      {
        source: '/how-it-works',
        destination: '/#process',
        permanent: true,
      },
      {
        source: '/SME-loan-dispute-resolution',
        destination: '/sme-loan-dispute-resolution',
        permanent: true,
      },
      {
        source: '/best-lawyer-for-MSME-loan-recovery-defence',
        destination: '/best-lawyer-for-msme-loan-recovery-defence',
        permanent: true,
      },
      {
        source: '/best-lawyer-for-MSME-personal-loan',
        destination: '/best-lawyer-for-msme-personal-loan',
        permanent: true,
      },
      {
        source: '/what-can-I-do-if-I-m-unable-to-pay-my-bank-loan-emi',
        destination: '/what-can-i-do-if-i-m-unable-to-pay-my-bank-loan-emi',
        permanent: true,
      },
    ];

  },
};

export default nextConfig;
