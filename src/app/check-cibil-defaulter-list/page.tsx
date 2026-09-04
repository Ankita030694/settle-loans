import { Metadata } from 'next';
import CheckCibilDefaulterListClient from './CheckCibilDefaulterListClient';

export const metadata: Metadata = {
  title: 'How to Check My Name in CIBIL Defaulter List? Myth vs Reality (2026)',
  description: 'Wondering how to check your name in CIBIL defaulter list? Learn why a public blacklist is a myth, what DPD & Written-Off mean, how to get your CIR, and rebuild to 750+.',
  alternates: {
    canonical: 'https://www.settleloans.in/check-cibil-defaulter-list',
  },
  openGraph: {
    title: 'How to Check My Name in CIBIL Defaulter List? Myth vs Reality & Credit Guide',
    description: 'Demystifying the CIBIL defaulter list myth: discover how credit bureaus track payment histories, how to access your official credit report, and legal recovery pathways.',
    url: 'https://www.settleloans.in/check-cibil-defaulter-list',
    siteName: 'SettleLoans',
    images: [
      {
        url: 'https://www.settleloans.in/images/infographics/check-cibil-defaulter-list.jpg',
        width: 1200,
        height: 630,
        alt: 'How to Check Name in CIBIL Defaulter List Myth vs Reality Infographic',
      },
    ],
    locale: 'en_IN',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Check My Name in CIBIL Defaulter List? Score Impact & Recovery Guide',
    description: 'Learn the truth about CIBIL defaulter lists, understand DPD strings and written-off codes, and discover how to rebuild your score to 750+.',
    images: ['https://www.settleloans.in/images/infographics/check-cibil-defaulter-list.jpg'],
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.settleloans.in/check-cibil-defaulter-list#article",
      "headline": "How to Check My Name in CIBIL Defaulter List? Myth vs Reality & Credit Report Recovery Guide",
      "description": "An exhaustive legal and credit scoring breakdown explaining why a public CIBIL defaulter list does not exist in India, how credit bureaus record DPD and Written-Off accounts, and how to verify your credit report.",
      "image": "https://www.settleloans.in/images/infographics/check-cibil-defaulter-list.jpg",
      "datePublished": "2026-08-22T10:00:00+05:30",
      "dateModified": "2026-08-22T10:00:00+05:30",
      "mainEntityOfPage": "https://www.settleloans.in/check-cibil-defaulter-list",
      "author": {
        "@type": "Person",
        "name": "Ashish Jhangra",
        "url": "https://www.settleloans.in/authors/ashish-jhangra"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.settleloans.in/logo.png"
        }
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.settleloans.in/#organization",
      "name": "SettleLoans",
      "url": "https://www.settleloans.in",
      "logo": "https://www.settleloans.in/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/settleloans",
        "https://twitter.com/settleloans",
        "https://www.facebook.com/settleloans"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.settleloans.in/check-cibil-defaulter-list#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.settleloans.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services & Guides",
          "item": "https://www.settleloans.in/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Check CIBIL Defaulter List",
          "item": "https://www.settleloans.in/check-cibil-defaulter-list"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.settleloans.in/check-cibil-defaulter-list#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does TransUnion CIBIL maintain a public defaulter list in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under the Credit Information Companies (Regulation) Act, 2005 (CICRA), credit bureaus are legally prohibited from publishing public defaulter lists or retail blacklists. CIBIL functions strictly as a data repository that generates private, individual Credit Information Reports (CIR) accessible only to the borrower and authorized member financial institutions upon explicit consent."
          }
        },
        {
          "@type": "Question",
          "name": "How can I check my loan default status in my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can check your credit status by requesting your official Credit Information Report (CIR) directly from the official TransUnion CIBIL portal (cibil.com) or other licensed bureaus (Experian, Equifax, CRIF High Mark). By entering your PAN, mobile number, and identity verification credentials, you can review your complete account history, Days Past Due (DPD) entries, and account status tags for free once every calendar year."
          }
        },
        {
          "@type": "Question",
          "name": "What does DPD mean in a CIBIL credit report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "DPD stands for Days Past Due. It reflects the exact number of days a payment was delayed past its contractual due date for each specific month over a rolling 36-month window. An entry of '000' or 'STD' indicates timely payment. Values such as '030', '060', or '090+' signify severe repayment delinquency and asset degradation."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between a retail loan default and an RBI Wilful Defaulter tag?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A retail loan default occurs due to genuine economic adversity (such as job loss or medical crises) and is recorded as overdue DPD or a 'Settled' status on a confidential CIR. In contrast, an RBI Wilful Defaulter is a formal statutory classification governed by RBI Master Directives for borrowers who intentionally siphoned funds or refused repayment despite having the financial capacity, typically involving commercial exposures of ₹25 Lakhs and above with suit-filed proceedings."
          }
        },
        {
          "@type": "Question",
          "name": "Can an employer, landlord, or neighbor view my CIBIL default record?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Under Section 15 of CICRA 2005, individual credit information is strictly confidential. Only RBI-regulated member banks, registered NBFCs, and financial entities with explicit borrower authorization can pull your credit report during a formal credit evaluation. Public individuals, unauthorized employers, and landlords cannot search or access your credit file."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between 'Settled' and 'Written-Off' in CIBIL?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "'Written-Off' signifies that the lender deemed the loan unrecoverable after prolonged default (180+ days) and transferred the debt off its active ledger for accounting purposes, while legal recovery rights remain intact. 'Settled' indicates that the borrower and lender reached a mutual compromise agreement through a One-Time Settlement (OTS), legally concluding the obligation upon payment of a negotiated amount."
          }
        },
        {
          "@type": "Question",
          "name": "How do I dispute an incorrect default entry on my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Section 21 of CICRA 2005, you can initiate a formal online dispute via the CIBIL Dispute Resolution Portal. The bureau is legally mandated to verify the discrepancy with the reporting bank within 30 days. If the bank fails to respond or confirms the reporting error, CIBIL must update or expunge the erroneous default mark immediately."
          }
        },
        {
          "@type": "Question",
          "name": "Can I remove a 'Settled' or 'Written-Off' remark from CIBIL later?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your financial situation improves, you can approach the original lending institution and repay the waived balance (the difference between the total original dues and the settlement amount). Upon clearing the balance, the bank will issue a full No Dues Certificate (NDC) and instruct all credit bureaus to update the account status from 'Settled' or 'Written-Off' to 'Closed'."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a negative loan status stay on a CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under Indian credit reporting standards, payment history and negative status tags remain on the credit record for up to 7 years. However, its adverse scoring impact diminishes significantly within 18 to 24 months if you establish disciplined repayment habits through secured credit lines and maintain credit utilization below 30%."
          }
        }
      ]
    },
    {
      "@type": "FinancialService",
      "@id": "https://www.settleloans.in/check-cibil-defaulter-list#service",
      "name": "SettleLoans - CIBIL Dispute Resolution & Debt Settlement Advisory",
      "description": "Authoritative legal advisory, CIBIL forensic dispute resolution, bank OTS negotiation, and credit score reconstruction for distressed borrowers across India.",
      "url": "https://www.settleloans.in/check-cibil-defaulter-list",
      "image": "https://www.settleloans.in/images/infographics/check-cibil-defaulter-list.jpg",
      "telephone": "+91-99999-99999",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Connaught Place",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
      },
      "provider": {
        "@type": "Organization",
        "@id": "https://www.settleloans.in/#organization",
        "name": "SettleLoans",
        "url": "https://www.settleloans.in"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1850",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Harish K. Mehra"
          },
          "datePublished": "2026-07-11",
          "reviewBody": "I lived in fear for months after recovery agents threatened that my name was published on a public CIBIL blacklist. SettleLoans educated me on CICRA laws, pulled my CIR report, and helped negotiate an official OTS on my personal loan. My score has already rebounded by 80 points!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sunita Venkatesh"
          },
          "datePublished": "2026-06-28",
          "reviewBody": "My credit report erroneously showed an active default on an old credit card that was closed three years ago. SettleLoans advocates drafted a forensic CICRA Section 21 dispute, submitted proof to the bank nodal officer, and had the record corrected in 24 days.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Rohan Deshpande"
          },
          "datePublished": "2026-05-14",
          "reviewBody": "The detailed breakdown of DPD strings and written-off codes gave me absolute clarity. With their legal guidance, I settled an overdue NBFC loan with zero recovery harassment and received a genuine No Dues Certificate.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Amrita Bhattacharya"
          },
          "datePublished": "2026-08-04",
          "reviewBody": "Exceptional clarity on RBI wilful defaulter norms versus genuine retail defaults. SettleLoans provided immediate psychological relief and a practical roadmap to rebuild my creditworthiness back to prime status.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <CheckCibilDefaulterListClient />
    </>
  );
}
