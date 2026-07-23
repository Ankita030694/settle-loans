import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import TableOfContents from '@/components/TableOfContents';

export const metadata: Metadata = {
  title: "Education Loan Default Consequences in India & Co-Signer Liability",
  description: "Struggling with student loan non-payment? Learn the severe education loan default consequences in India and how to protect yourself and your parent co-signers from legal action.",
  alternates: {
    canonical: "https://example.com/education-loan-default-consequences",
  },
};

export default function EducationLoanDefaultPage() {
  const tocItems = [
    { id: 'intro', title: 'The Gravity of Loan Default' },
    { id: 'consequences', title: 'Key Default Consequences' },
    { id: 'cosigner-risks', title: 'Co-Signer & Parent Liability' },
    { id: 'legal-actions', title: 'Bank Legal Actions' },
    { id: 'protection-steps', title: 'Steps to Protect Yourself' },
    { id: 'success-stories', title: 'Settlement Success Stories' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Education Loan Default Consequences in India",
      "description": "Learn the severe education loan default consequences in India and how to protect yourself and your parent co-signers from legal action.",
      "url": "https://example.com/education-loan-default-consequences"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://example.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Loan Default",
          "item": "https://example.com/loan-default"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Education Loan Default Consequences",
          "item": "https://example.com/education-loan-default-consequences"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Education Loan Default Consequences in India & Co-Signer Liability",
      "author": {
        "@type": "Organization",
        "name": "SettleLoan Expert Team"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SettleLoan",
        "logo": {
          "@type": "ImageObject",
          "url": "https://example.com/logo.png"
        }
      },
      "datePublished": "2024-05-15T08:00:00+08:00",
      "dateModified": "2024-05-15T08:00:00+08:00"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What happens if I stop paying my education loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you stop paying, your loan will be classified as a Non-Performing Asset (NPA) after 90 days. This will crash your CIBIL score, and the bank will initiate recovery proceedings against you and your co-signers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I go to jail for not paying my education loan in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Defaulting on a loan is a civil matter, not a criminal offense. You cannot go to jail merely for inability to pay. However, ignoring court summons or providing fraudulent documents can lead to criminal charges."
          }
        },
        {
          "@type": "Question",
          "name": "Are my parents liable for my education loan default?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if your parents signed as co-borrowers or guarantors, they are equally legally liable. The bank can attach their assets and freeze their bank accounts to recover the dues."
          }
        },
        {
          "@type": "Question",
          "name": "Can the bank auction our house for an education loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the loan was secured against property (collateral), the bank can legally seize and auction the property under the SARFAESI Act to recover the outstanding amount."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a default stay on my CIBIL report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A default or settled status will reflect on your CIBIL report for up to 7 years, significantly hindering your ability to get future loans, credit cards, or even certain jobs."
          }
        },
        {
          "@type": "Question",
          "name": "Can I travel abroad if I have defaulted on my education loan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally, you can travel abroad. However, if the bank has filed a recovery suit and the court has issued a Look Out Circular (LOC) or impounded your passport, your travel may be restricted."
          }
        },
        {
          "@type": "Question",
          "name": "What is the limitation period for education loan recovery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The limitation period is typically 3 years from the date of the last payment or acknowledgment of debt. If the bank fails to file a suit within this time, the debt becomes time-barred."
          }
        },
        {
          "@type": "Question",
          "name": "Can I ask the bank for a moratorium extension?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if you are struggling to find a job, you can write to your bank requesting an extension of the moratorium period or restructuring of the EMI. Approval is at the bank's discretion."
          }
        },
        {
          "@type": "Question",
          "name": "Does settling an education loan affect my parents' CIBIL score?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, if they are co-signers, their CIBIL score will also reflect a 'Settled' status, which negatively impacts their future borrowing capacity."
          }
        },
        {
          "@type": "Question",
          "name": "How can I legally stop recovery agents from harassing me?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RBI strictly prohibits harassment by recovery agents. You can file a formal complaint with the bank's grievance officer, the Banking Ombudsman, or file a police complaint if agents use abuse or physical threats."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Education Loan Legal Consultation & Settlement Service",
      "description": "Expert legal assistance for education loan defaulters. Protect co-signers, stop harassment, and negotiate settlements.",
      "brand": {
        "@type": "Brand",
        "name": "SettleLoan"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Rahul M." },
          "datePublished": "2024-03-12",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Lost my job and couldn't pay my 15L education loan. SettleLoan stopped the bank from harassing my retired parents and negotiated a 6L settlement."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Sneha K." },
          "datePublished": "2024-02-28",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "My parents' house was on the line due to my student loan default. The legal team helped us get a moratorium extension and structured a manageable EMI plan."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Amit D." },
          "datePublished": "2024-04-05",
          "reviewRating": { "@type": "Rating", "ratingValue": "4" },
          "reviewBody": "Very professional service. They handled all the legal notices from the bank directly. Saved me from immense mental torture."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Priya V." },
          "datePublished": "2024-01-18",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "reviewBody": "Best decision to hire them. The bank was threatening my co-signer dad daily. SettleLoan intervened legally and we finally settled for 40% of the principal."
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        
        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center gap-2 text-xs md:text-sm text-[#747474]">
            <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/loan-default" className="hover:text-[#1F5EFF] transition-colors">Loan Default</Link>
            <span className="text-gray-300">/</span>
            <span className="font-bold text-[#2E2E2E]">Education Loan Default Consequences</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1F5EFF]/20 via-transparent to-transparent"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase border border-[#1F5EFF]/20">
              Student Loan Crisis
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Protect Your Future: Understanding <span className="text-[#1F5EFF]">Education Loan Default Consequences</span>
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-3xl mx-auto leading-[1.3] font-normal">
              Struggling to find a job and can't pay your education loan? Discover how to protect yourself and your parent co-signers from aggressive bank recovery and legal action.
            </p>
            <Link href="#consultation" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Immediate Legal Protection
            </Link>
          </div>
        </section>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative max-w-[1600px]">
          
          {/* Left Sidebar (TOC) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Article Content */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
            
            {/* Boxed Intro */}
            <section id="intro" className="scroll-mt-32 mb-16">
              <div className="bg-white rounded-2xl p-8 border border-[#DEDEDE] shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#1F5EFF]"></div>
                <h2 className="text-3xl md:text-5xl font-black text-[#2E2E2E] mb-6">
                  The Silent Crisis of Student Debt
                </h2>
                <p className="text-lg text-[#747474] leading-relaxed mb-6">
                  Graduating into a tough job market is stressful enough without the looming anxiety of EMIs. When a student cannot secure a job that pays enough to cover their living expenses and their education loan, defaults happen. But unlike personal loans, an education loan default directly impacts your parents or guardians who acted as co-signers or guarantors.
                </p>
                <p className="text-lg text-[#747474] leading-relaxed">
                  Ignoring the bank’s notices is the worst possible strategy. Understanding the exact <strong>education loan default consequences in India</strong> is the first step toward finding a legal and financial resolution that protects your family's assets.
                </p>
              </div>
            </section>

            {/* Key Consequences */}
            <section id="consequences" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                What Actually Happens When You Don't Pay?
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                When you default on a student loan (usually after 90 days of non-payment), a domino effect of financial and legal actions begins. Here are the core consequences you will face:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">1. Severe CIBIL Score Damage</h3>
                  <p className="text-[#2E2E2E]">Both your and your co-signer's credit scores will plummet. The account will be marked as an NPA (Non-Performing Asset), making future borrowing nearly impossible for 7 years.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">2. Aggressive Recovery Agents</h3>
                  <p className="text-[#2E2E2E]">Banks will deploy third-party recovery agencies. While RBI rules prohibit harassment, these agents often resort to calling your relatives, employers, and visiting your home.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">3. SARFAESI Act Enforcement</h3>
                  <p className="text-[#2E2E2E]">If your loan amount exceeds ₹4 Lakhs, it is likely backed by collateral (property). The bank can legally auction this property under the SARFAESI Act without court intervention.</p>
                </div>
                <div className="bg-[#f8faff] p-6 rounded-xl border border-[#DEDEDE]">
                  <h3 className="font-black text-[#1F5EFF] text-lg mb-3">4. Employment Background Checks</h3>
                  <p className="text-[#2E2E2E]">Many top-tier IT companies and MNCs in India now run background credit checks before hiring. A defaulted education loan can lead to job offer revocations.</p>
                </div>
              </div>
            </section>

            {/* Co-Signer Risks */}
            <section id="cosigner-risks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                The Hidden Danger: Co-Signer Liability
              </h2>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
                <h4 className="text-xl font-black text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                  Critical Warning for Parents
                </h4>
                <p className="text-red-900 font-medium mb-4">
                  In Indian banking law, a co-borrower or guarantor bears the exact same legal liability as the primary borrower. If the student defaults, the bank has the complete legal right to pursue the parents for the full amount.
                </p>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Parents' personal bank accounts and FDs can be frozen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>Retirement funds and pension accounts may be targeted.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    <span>The family home (if pledged as collateral) will face auction proceedings.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Legal Actions */}
            <section id="legal-actions" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                Understanding Bank Legal Actions
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Banks do not immediately seize property. There is a rigid legal process they must follow, giving you windows of opportunity to respond and protect yourself.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl mb-8 border border-gray-200">
                <h4 className="text-xl font-black text-[#2E2E2E] mb-4">The Standard Timeline of Notices:</h4>
                <ol className="list-decimal pl-5 space-y-4 text-lg text-[#555]">
                  <li><strong>Notice of Demand:</strong> Sent after the account becomes an NPA (90 days).</li>
                  <li><strong>Section 13(2) Notice (SARFAESI):</strong> Gives you 60 days to repay the full amount if collateral is involved.</li>
                  <li><strong>Section 13(4) Notice:</strong> Issued if you fail to pay within 60 days, giving the bank the right to take symbolic possession of your property.</li>
                  <li><strong>DRT Filing:</strong> For loans above ₹20 Lakhs, banks will approach the Debt Recovery Tribunal for swift recovery orders.</li>
                </ol>
              </div>
            </section>

            {/* Steps to Protect */}
            <section id="protection-steps" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-6">
                How to Protect Yourself and Settle the Loan
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                If you are facing a genuine financial hardship, you have legal rights and options. Here is how you should proceed:
              </p>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">1</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Request a Moratorium Extension</h3>
                    <p className="text-lg text-[#555] leading-relaxed">
                      If you haven't secured a job yet, submit a formal written request to the branch manager asking for a moratorium extension. Provide proof of unemployment or lower-than-expected salary.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">2</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">Propose Loan Restructuring</h3>
                    <p className="text-lg text-[#555] leading-relaxed">
                      Ask the bank to restructure the loan by extending the tenure (e.g., from 7 years to 12 years). This will drastically reduce your monthly EMI burden, making it manageable on a starter salary.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1F5EFF] text-white flex items-center justify-center font-black text-xl shadow-lg">3</div>
                  <div>
                    <h3 className="text-xl font-black text-[#2E2E2E] mb-2">One Time Settlement (OTS)</h3>
                    <p className="text-lg text-[#555] leading-relaxed">
                      If the loan has already become an NPA and you have no way to pay the massive accrued interest, you can negotiate an OTS. Banks often waive off penalties and significant portions of interest if paid in a lump sum.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-8 border-[#1F5EFF] p-8 rounded-r-2xl my-8 mt-12">
                <h4 className="text-xl font-black text-[#1F5EFF] mb-4">Why You Must Act Before the Legal Notice</h4>
                <p className="text-lg text-[#2E2E2E] mb-4">
                  Once a SARFAESI notice is issued, your negotiation power drops significantly. Engaging an expert negotiator early on ensures:
                </p>
                <div className="space-y-3 text-lg text-[#2E2E2E]">
                  <div className="flex items-center gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p>Immediate halt to recovery agent harassment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p>Protection of parents' assets and property</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1F5EFF] flex-shrink-0"></div>
                    <p>Favorable settlement terms directly with bank management</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories */}
            <section id="success-stories" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Recent Education Loan Settlements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Review Card 1 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                        R
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Rahul M.</h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 uppercase">Loan: ₹15L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 uppercase">Settled: ₹6L</span>
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    "Lost my job and couldn't pay my loan. The legal team stopped the bank from harassing my retired parents and negotiated an incredible settlement."
                  </p>
                </div>

                {/* Review Card 2 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                        S
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Sneha K.</h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 uppercase">Loan: ₹22L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 uppercase">Restructured</span>
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    "My parents' house was on the line. The legal team helped us get a moratorium extension and structured a manageable EMI plan. Lifesavers."
                  </p>
                </div>
                
                {/* Review Card 3 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                        A
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Amit D.</h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 uppercase">Loan: ₹8L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 uppercase">Settled: ₹3.5L</span>
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    "Very professional service. They handled all the legal notices from the bank directly. Saved me from immense mental torture."
                  </p>
                </div>

                {/* Review Card 4 */}
                <div className="bg-white p-8 rounded-[30px] border border-[#DEDEDE] shadow-sm hover:shadow-xl group transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] group-hover:bg-[#1F5EFF] group-hover:text-white flex items-center justify-center font-bold text-lg transition-colors">
                        P
                      </div>
                      <div>
                        <h4 className="font-bold text-[#2E2E2E]">Priya V.</h4>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4 text-xs font-bold">
                    <span className="py-1 px-3 rounded-full bg-red-100 text-red-700 uppercase">Loan: ₹12L</span>
                    <span className="py-1 px-3 rounded-full bg-green-100 text-green-700 uppercase">Settled: ₹4.8L</span>
                  </div>
                  <p className="text-[#555] leading-relaxed">
                    "The bank was threatening my co-signer dad daily. SettleLoan intervened legally and we finally settled for 40% of the principal."
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "What happens if I stop paying my education loan?", a: "If you stop paying, your loan will be classified as a Non-Performing Asset (NPA) after 90 days. This will crash your CIBIL score, and the bank will initiate recovery proceedings against you and your co-signers." },
                  { q: "Can I go to jail for not paying my education loan in India?", a: "Defaulting on a loan is a civil matter, not a criminal offense. You cannot go to jail merely for inability to pay. However, ignoring court summons or providing fraudulent documents can lead to criminal charges." },
                  { q: "Are my parents liable for my education loan default?", a: "Yes, if your parents signed as co-borrowers or guarantors, they are equally legally liable. The bank can attach their assets and freeze their bank accounts to recover the dues." },
                  { q: "Can the bank auction our house for an education loan?", a: "If the loan was secured against property (collateral), the bank can legally seize and auction the property under the SARFAESI Act to recover the outstanding amount." },
                  { q: "How long does a default stay on my CIBIL report?", a: "A default or settled status will reflect on your CIBIL report for up to 7 years, significantly hindering your ability to get future loans, credit cards, or even certain jobs." },
                  { q: "Can I travel abroad if I have defaulted on my education loan?", a: "Generally, you can travel abroad. However, if the bank has filed a recovery suit and the court has issued a Look Out Circular (LOC) or impounded your passport, your travel may be restricted." },
                  { q: "What is the limitation period for education loan recovery?", a: "The limitation period is typically 3 years from the date of the last payment or acknowledgment of debt. If the bank fails to file a suit within this time, the debt becomes time-barred." },
                  { q: "Can I ask the bank for a moratorium extension?", a: "Yes, if you are struggling to find a job, you can write to your bank requesting an extension of the moratorium period or restructuring of the EMI. Approval is at the bank's discretion." },
                  { q: "Does settling an education loan affect my parents' CIBIL score?", a: "Yes, if they are co-signers, their CIBIL score will also reflect a 'Settled' status, which negatively impacts their future borrowing capacity." },
                  { q: "How can I legally stop recovery agents from harassing me?", a: "RBI strictly prohibits harassment by recovery agents. You can file a formal complaint with the bank's grievance officer, the Banking Ombudsman, or file a police complaint if agents use abuse or physical threats." }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white border border-[#DEDEDE] rounded-xl p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-3">{faq.q}</h3>
                    <p className="text-lg text-[#555]">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lead Gen Hook */}
            <div id="consultation" className="bg-[#2E2E2E] text-white p-12 rounded-[40px] text-center mt-24 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#1F5EFF] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <h3 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
                Protect Your Parents. Stop Harassment Today.
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
                Don't let an education loan default ruin your family's peace of mind. Our legal experts can stop recovery agents and negotiate a fair settlement directly with the bank.
              </p>
              <button className="w-full md:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-5 px-12 rounded-[15px] hover:scale-105 transition-all duration-300 text-xl shadow-[0_10px_30px_rgba(31,94,255,0.3)] relative z-10">
                Schedule Free Legal Consultation
              </button>
              
              <div className="mt-16 pt-8 border-t border-gray-100 text-center relative z-10">
                <p className="text-gray-400 text-sm italic">
                  *Disclaimer: Consultation is 100% confidential. Information shared is protected under attorney-client privilege frameworks. We do not provide loans to pay off existing loans.
                </p>
              </div>
            </div>

          </article>

          {/* Right Sidebar */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-8">
              
              {/* Dark CTA Card */}
              <div className="bg-[#2E2E2E] rounded-3xl p-8 text-center text-white border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1F5EFF]/20 rounded-bl-full group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                <h4 className="text-2xl font-black mb-4 relative z-10">Notice from Bank?</h4>
                <p className="text-gray-300 text-sm mb-6 relative z-10">
                  Don't ignore it. Let our legal team draft a powerful reply to stop immediate action.
                </p>
                <button className="w-full bg-[#1F5EFF] text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-600 transition-colors relative z-10">
                  Upload Notice
                </button>
              </div>

              {/* White Resources Card */}
              <div className="bg-white rounded-3xl p-8 border border-[#DEDEDE] shadow-sm">
                <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 border-b pb-4 mb-6">
                  Legal Resources
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/sarfaesi-act-rules" className="flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      SARFAESI Act Explained
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-guidelines-recovery-agents" className="flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      RBI Rules on Harassment
                    </Link>
                  </li>
                  <li>
                    <Link href="/how-to-settle-loan" className="flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      The OTS Settlement Process
                    </Link>
                  </li>
                  <li>
                    <Link href="/cibil-score-after-settlement" className="flex items-center text-sm font-bold text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors group">
                      <span className="w-1.5 h-1.5 bg-[#DEDEDE] group-hover:bg-[#1F5EFF] rounded-full mr-3 transition-colors"></span>
                      CIBIL Impact Guide
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
