import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Legal Risks of Loan Default in India | Penalties, Court Cases & RBI Rules",
  description: "Understand the legal risks of defaulting on a loan in India without settlement. Explore RBI rules, Section 138 NI Act, SARFAESI Act, and how to protect yourself from legal action.",
  alternates: {
    canonical: "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement",
  },
};

export default function LegalRisksLoanDefaultPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#webpage",
        "url": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement",
        "name": "Legal Risks of Loan Default in India | Penalties, Court Cases & RBI Rules",
        "description": "A comprehensive guide on the legal consequences of loan default in India, covering SARFAESI, DRT, and Section 138.",
        "breadcrumb": { "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://settleloans.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Legal Risks of Loan Default",
            "item": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#article",
        "headline": "What Are the Legal Risks Associated With Defaulting on a Loan Without Settlement?",
        "description": "Deep dive into the legal and financial consequences of loan default in India and the importance of professional settlement.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Research Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-03-20",
        "dateModified": "2024-03-20",
        "mainEntityOfPage": { "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I go to jail for defaulting on a personal loan in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan default is primarily a civil matter. You cannot be arrested just for being unable to pay. However, criminal charges can occur if there is fraud involved or if a cheque associated with the loan repayment bounces under Section 138 of the NI Act."
            }
          },
          {
            "@type": "Question",
            "name": "What happens after 180 days of loan default?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By 180 days, the loan is fully classified as a Loss Asset. The bank will likely escalate to legal proceedings, such as a civil recovery suit or invoking the SARFAESI Act for secured loans, and may sell the debt to an Asset Reconstruction Company (ARC)."
            }
          },
          {
            "@type": "Question",
            "name": "Will the police arrest me for not paying credit card bills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, the police do not handle simple credit card defaults as they are civil disputes. Banks must follow court procedures. Police only get involved in cases of proven financial fraud or if ordered by a court in specific criminal proceedings."
            }
          },
          {
                "@type": "Question",
                "name": "What is a 'Wilful Defaulter'?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A wilful defaulter is defined by the RBI as someone who has the capacity to pay but chooses not to, or has diverted the loan funds for purposes other than what was originally sanctioned. This can lead to criminal charges."
                }
              },
              {
                "@type": "Question",
                "name": "Can banks file a case for personal loan default?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, banks can file a civil suit for recovery in a civil court or approach the Debt Recovery Tribunal (DRT) if the outstanding amount exceeds Rs. 20 Lakhs."
                }
              },
              {
                "@type": "Question",
                "name": "What are my rights against recovery agents?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "According to RBI guidelines, recovery agents cannot harass you, use physical force, or call before 8 AM and after 7 PM. They must also respect your privacy and not shame you in front of neighbors."
                }
              },
              {
                "@type": "Question",
                "name": "Does loan settlement clear my CIBIL score?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Loan settlement closes the account but it is marked as 'Settled' rather than 'Closed' or 'Paid'. This impacts your score negatively for several years but is better than a chronic default."
                }
              },
              {
                "@type": "Question",
                "name": "What is the SARFAESI Act?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The SARFAESI Act allows banks to seize and auction collateral for secured loans without court intervention if the loan has been an NPA for more than 90 days."
                }
              },
              {
                "@type": "Question",
                "name": "Can I settle a loan during a court case?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can always propose an out of court settlement or enter into a One-Time Settlement (OTS) scheme with the bank even if a suit is pending."
                }
              },
              {
                "@type": "Question",
                "name": "What should I do if I get a legal notice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You should consult a legal professional or a debt settlement expert immediately. Do not ignore the notice, as it may lead to an ex-parte decree against you in court."
                }
              }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
              Legal Protection Guide
            </span>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
              Legal Risks of Loan Default <br className="hidden md:block" /> Without Settlement in India
            </h1>
            <p className="text-base md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
              A comprehensive deep dive into the civil and criminal consequences of defaulting on your debt, and why silence is the most dangerous option for your financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
                Protect Yourself Today
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  Legal Risks of Loan Default
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">

          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
            <TableOfContents
              items={[
                { id: "intro-default", title: "Understanding Loan Default" },
                { id: "default-vs-settlement", title: "Default vs. Settlement" },
                { id: "legal-notices", title: "Legal & Demand Notices" },
                { id: "civil-suits", title: "Civil Recovery Lawsuits" },
                { id: "drt-process", title: "Debt Recovery Tribunal (DRT)" },
                { id: "section-138-ni", title: "Section 138 (Cheque Bounce)" },
                { id: "financial-impact", title: "CIBIL & Financial Impact" },
                { id: "recovery-agent-rules", title: "Recovery Agent Guidelines" },
                { id: "sarfaesi-act", title: "SARFAESI (Secured Loans)" },
                { id: "civil-vs-criminal", title: "Civil vs. Criminal Liability" },
                { id: "psychology-of-debt", title: "Psychology & Denial" },
                { id: "digital-lending-risks", title: "Digital Loan Harassment" },
                { id: "loan-assignment-arc", title: "Sale of Debt to ARC" },
                { id: "why-professional-help", title: "Why Settle Professionally?" },
                { id: "borrower-rights", title: "Your Rights under RBI" },
                { id: "practical-scenarios", title: "Real Life Case Scenarios" },
                { id: "success-stories", title: "Real Stories of Freedom" },
                { id: "faqs", title: "Common Legal Questions" }
              ]}
            />
          </aside>

          {/* Middle Column: Main Article */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">

            <section id="intro-default" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                What Exactly is a Loan Default? <span className="text-black">The Legal Reality</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  In the terminology of Indian banking and finance, a loan default is not just a missed payment. It is a fundamental breach of contract between a borrower and a lending institution. When you signed that loan agreement, whether it was for a personal loan, a business loan, or a credit card, you entered into a legally binding commitment. Failing to honor that commitment triggers a cascade of events that go far beyond simple interest penalties.
                </p>
                <p className="mb-6 leading-relaxed">
                  Technically, a default begins the very day after the due date if the Equated Monthly Installment (EMI) is not credited. However, the legal and regulatory machinery really starts to move after the 90 day mark. This is when the Reserve Bank of India (RBI) mandates that a loan account be classified as a Non Performing Asset (NPA). Once an account is an NPA, the bank&apos;s primary goal shifts from interest collection to recovery, and that is where the legal risks emerge.
                </p>
                <p className="mb-6 leading-relaxed">
                  The landscape of debt in India has seen a massive shift with the rise of digital lending. Today, a person can default on a loan taken through an app just as easily as they can on a traditional bank loan. But the legal consequences remain equally severe. Whether the lender is a public sector bank like SBI, a private giant like HDFC, or a small Non Banking Financial Company (NBFC), they all operate under the same legal framework of recovery.
                </p>
                <p className="mb-6 leading-relaxed">
                  Ignoring a default is the single greatest mistake a borrower can make. In our experience at SettleLoans, silence often leads to escalation. A bank interprets silence as an intention to avoid payment, which might lead them to classify you as a &quot;Wilful Defaulter&quot;, a tag that carries heavy criminal legal implications. Understanding the difference between being a victim of genuine financial hardship and being a wilful defaulter is crucial to navigating this crisis.
                </p>
                <div className="bg-[#1F5EFF]/5 p-8 rounded-2xl border border-[#1F5EFF]/10 my-10">
                  <h3 className="text-xl font-bold mb-4 text-[#1F5EFF]">The 90-Day Clock: A Critical Timeline</h3>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    The 90 day window is the most important timeline for any borrower. During this period, the bank still views you as a &quot;Regular&quot; or &quot;Stress&quot; account. You are categorized as Special Mention Account 0 (SMA-0) for 1-30 days, SMA-1 for 31-60 days, and SMA-2 for 61-90 days.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Once you cross the 90 day mark, the account becomes an NPA. From this point on, the bank is legally required to make provisions for your loan from its own profits, which makes them much more aggressive in recovery. This is the moment when the &quot;Risk Factors&quot; effectively transition from financial to legal.
                  </p>
                </div>
              </div>
            </section>

            <section id="default-vs-settlement" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Default vs. Settlement: <span className="text-black">Why Settlement is the Shield</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  Many borrowers often ask us: &quot;If I have already defaulted, isn&apos;t the damage done? Why should I settle?&quot; This is a dangerous misconception. A chronic default is an open wound that continues to bleed interest, penalties, and legal costs every single day. A settlement, on the other hand, is a legal &quot;Full and Final&quot; closure that cauterizes that wound and stops the legal machinery from moving further.
                </p>
                <p className="mb-6 leading-relaxed">
                  When you remain in a state of default without settlement, the lender has every right to keep reporting you as an &quot;Active Defaulter&quot; to credit bureaus like CIBIL. This means your debt doesn&apos;t just stay the same; it balloons. We have seen cases where a Rs. 5 Lakh loan became Rs. 15 Lakh in just a few years due to compounding penal interest and legal expenses added by the bank.
                </p>
                <p className="mb-6 leading-relaxed">
                  Settlement is a negotiation where the lender agrees to accept a portion of the outstanding amount and waive the rest, closing the account forever. While it does impact your CIBIL score (it shows as &quot;Settled&quot;), it prevents the bank from filing a lawsuit, seizing your assets, or sending recovery agents to your doorstep. It is the legal exit ramp from a highway of financial ruin.
                </p>
                <p className="mb-6 leading-relaxed">
                  Without a settlement, you are effectively living in a house with no doors. Any day, a recovery agent can show up, a legal notice can arrive, or a court summon can be served. Settlement provides you with a &quot;No Dues Certificate&quot;, which is your legal passport back to a quiet life. At SettleLoans, we emphasize that settlement is not about &quot;getting away&quot; with not paying; it is about fairly resolving an unpayable debt so that both the bank and the borrower can move on.
                </p>
              </div>
            </section>

            <section id="legal-notices" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Anatomy of <span className="text-black">Legal & Demand Notices</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  The first official indicator that your debt has moved into the &quot;Danger Zone&quot; is the receipt of a legal notice. In India, most banks follow a structured escalation process. First, you will receive &quot;Internal Recall Notices&quot; from the bank&apos;s collection department. These are warnings. However, once you receive a notice on the letterhead of an Advocate, the legal process has officially commenced.
                </p>
                <p className="mb-6 leading-relaxed">
                  A demand notice is a prerequisite for most legal actions. The bank is essentially giving you a final chance to pay the entire outstanding amount within a specified period, usually 15 or 30 days. Ignoring this notice is interpreted by the court as an admission of debt. If the case eventually goes to court, the judge will ask: &quot;The bank sent you a notice, why didn&apos;t you reply or pay?&quot;
                </p>
                <p className="mb-6 leading-relaxed">
                  There are specific types of notices you must be aware of. A &quot;Section 138 Notice&quot; is related to cheque bounces and is a precursor to a criminal case. A &quot;Section 13(2) Notice&quot; under the SARFAESI Act is for secured loans and gives you 60 days to pay before the bank seizes your property. Then there are &quot;Arbitration Notices&quot; where the bank tries to resolve the matter through a private arbitrator rather than a traditional court.
                </p>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 my-10">
                  <h3 className="text-xl font-bold mb-4">Steps to Take When You Receive a Notice</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm">!</span>
                      <span><strong>Do Not Ignore It:</strong> Ignoring a legal notice does not make the problem go away; it only makes the bank&apos;s case stronger.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-sm">1</span>
                      <span><strong>Check the Genuineness:</strong> Verify that the notice is actually from the bank or an authorized law firm. Look for the loan account number and correct outstanding details.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-sm">2</span>
                      <span><strong>Preserve the Envelope:</strong> The date of receipt is often more important than the date on the letter. Keep the speed post or courier receipt.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] flex items-center justify-center font-bold text-sm">3</span>
                      <span><strong>Draft a Reply:</strong> A well drafted legal reply explaining your financial hardship can slow down the recovery process and provide a base for settlement.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="civil-suits" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Civil Recovery Lawsuits: <span className="text-black">The Court Process</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  If the notices go unheeded, the lender may file a Civil Recovery Suit. Under the Civil Procedure Code (CPC), banks often file what is known as a &quot;Summary Suit&quot; (Order 37). This is a fast track lawsuit designed for debt recovery where the defendant is not even allowed to defend themselves unless the judge grants them &quot;Leave to Defend&quot; based on substantial merit.
                </p>
                <p className="mb-6 leading-relaxed">
                  A civil suit aims to obtain a &quot;Money Decree&quot; against the borrower. Once the court passes this decree, the bank can move for &quot;Execution&quot;. This is the most dangerous stage. In the execution process, the court can order the attachment (seizure) of your bank accounts, your movable property (cars, electronics), and even your salary. While basic essentials and a portion of the salary are exempt, the impact on one&apos;s professional and social life is devastating.
                </p>
                <p className="mb-6 leading-relaxed">
                  The Limitation Act plays a role here. Generally, a bank must file a suit within 3 years from the date of default or from the last date you acknowledged the debt (e.g., by making a small payment). If the debt is &quot;Time Barred&quot;, the bank cannot use the court to recover it, though they can still report it to CIBIL. However, banks are very meticulous about this and rarely let a large debt become time barred.
                </p>
                <p className="mb-6 leading-relaxed">
                  The cost of a civil suit is also added to your debt. You end up paying for the bank&apos;s lawyers, the court fees, and the interest accrued during the trial. A case that starts at Rs. 10 Lakh can easily end with a decree for Rs. 15 Lakh or more. This is why we at SettleLoans advocate for settlement before a suit is filed or as early as possible in the litigation.
                </p>
              </div>
            </section>

            <section id="drt-process" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Debt Recovery Tribunal (DRT): Escalation for High-Value Debts
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  For debts exceeding Rs. 20 Lakhs, banks and financial institutions traditionally skip the local civil courts and approach the Debt Recovery Tribunal (DRT). Established under the RDDBFI Act, 1993, the DRTs are specialized bodies designed for one purpose: rapid debt recovery for banks. The procedural rules are much stricter than civil courts, and the leverage for the borrower is significantly lower.
                </p>
                <p className="mb-6 leading-relaxed">
                  The DRT process begins with an application by the bank. The Recovery Officer (RO) has vast powers. They can issue arrest warrants (in rare cases of asset hiding), order the search of premises, and sell properties at lightning speed compared to a traditional court. If you lose a case in the DRT, the only way to appeal is to go to the Debt Recovery Appellate Tribunal (DRAT), where you are often required to deposit 25% to 50% of the debt just to have your appeal heard.
                </p>
                <p className="mb-6 leading-relaxed">
                  Many business owners find themselves in the DRT when their ventures fail. The psychological pressure of a DRT case is immense because it often involves personal guarantees. This means that not just the company&apos;s assets, but the personal property of the directors and their family members (who stood as guarantors) are at risk.
                </p>
                <p className="mb-6 leading-relaxed">
                  However, even the DRT encourages settlement. There are numerous &quot;Lok Adalats&quot; (People&apos;s Courts) organized within the DRT framework specifically to facilitate One Time Settlements (OTS). If you are facing a DRT case, your strategy should always be to build a strong legal defense to create leverage and then use that leverage to negotiate a favorable settlement that saves you from a total asset wipe out.
                </p>
              </div>
            </section>

            <section id="section-138-ni" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Section 138 (Cheque Bounce): <span className="text-black">The Criminal Trap</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  This is the section that causes the most fear, and for good reason. Under the Negotiable Instruments Act, a cheque bounce is a quasi criminal offense. If you have provided post dated cheques (PDCs) or &quot;Security Cheques&quot; to a lender, and those cheques are presented and returned for &quot;Insufficient Funds&quot;, the lender can file a criminal case against you.
                </p>
                <p className="mb-6 leading-relaxed">
                  Unlike a civil suit, a Section 138 case can lead to a prison term of up to 2 years and a fine that is double the amount of the cheque. While most of these cases end in a settlement rather than jail, the threat of an arrest warrant and the requirement to obtain bail is a significant burden. You will have to attend court hearings in person, which might be in a different city if the bank &apos;s office is elsewhere.
                </p>
                <p className="mb-6 leading-relaxed">
                  Similar rules now apply to electronic mandates like ECS or NACH. If your monthly auto-debit fails, it is legally similar to a cheque bounce. Lenders are increasingly using Section 25 of the Payment and Settlement Systems Act to file criminal cases for failed electronic payments.
                </p>
                <p className="mb-6 leading-relaxed">
                  At SettleLoans, we have helped many clients navigate these criminal traps. The key is to respond to the statutory 15 day notice that the bank must send before filing the case. If you pay the amount within those 15 days, no case can be filed. If you cannot pay, entering into a settlement agreement can lead to the withdrawal of the criminal case, providing you with immediate relief from the threat of prosecution.
                </p>
              </div>
            </section>

            <section id="financial-impact" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                CIBIL & Financial Impact: The Long Term Shadow
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  Beyond the courtroom, a loan default creates a permanent scar on your financial identity. Your CIBIL score is essentially your &quot;Financial Character Certificate&quot; in the modern world. A single missed payment can drop your score by 50 to 100 points. A default that lasts for months can drive your score into the 300-500 range, which is considered a &quot;No Entry&quot; zone for all regulated lenders.
                </p>
                <p className="mb-6 leading-relaxed">
                  A default remains on your credit history for 7 to 10 years. This means that even if you earn a higher salary later, you might be denied a home loan for your family or a car loan for your work because of a mistake made years ago. In many sectors, employers even check credit scores as part of background verification, especially in the finance and technology industries.
                </p>
                <p className="mb-6 leading-relaxed">
                  The compounding of debt is the other financial risk. Banks charge &quot;Default Interest&quot; which is often 2% to 3% *per month* on the total overdue amount. This is on top of your regular interest. This creates a math problem that is impossible to solve with just a regular salary. You end up working just to pay the penalties, while your principal remains stagnant.
                </p>
                <p className="mb-6 leading-relaxed">
                  Settling a loan is the only way to freeze this damage. Once an account is settled, the interest stops compounding. While the label &quot;Settled&quot; stays on your report, it allows you to start the process of &quot;Credit Rehabilitation.&quot; You can eventually get a &quot;Secured Credit Card&quot; and slowly rebuild your score. Without closure, there is no rebuilding; there is only a continuous decline.
                </p>
              </div>
            </section>

            <section id="recovery-agent-rules" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Recovery Agents: <span className="text-black">The RBI Fair Practice Code</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  For many, the most terrifying aspect of default is not the court, but the recovery agent. The knock on the door, the loud voices in the building, and the persistent calls are designed to use social shame as a weapon for recovery. However, you must know that the law is on your side when it comes to harassment.
                </p>
                <p className="mb-6 leading-relaxed">
                  The RBI&apos;s &quot;Master Circular on Loans and Advances&quot; has very strict rules for recovery. Agents are not allowed to use physical force, they are not allowed to use abusive language, and they are prohibited from making anonymous calls. They cannot call you before 8:00 AM or after 7:00 PM. They also cannot discuss your debt with your family members, your neighbors, or your colleagues.
                </p>
                <p className="mb-6 leading-relaxed">
                  Many agents use &quot;Social Shaming&quot; by creating WhatsApp groups or calling references. This is a direct violation of your Right to Privacy as upheld by the Supreme Court of India. You have the right to record these calls and report them to the Banking Ombudsman. If an agent uses physical threats, it becomes a criminal matter for the police, and you can file a First Information Report (FIR) for extortion and harassment.
                </p>
                <p className="mb-6 leading-relaxed">
                  At SettleLoans, we act as a barrier between you and these agents. When you join our program, we provide you with a &quot;harassment defense&quot; strategy. We guide you on how to handle these calls legally and how to use our professional representation to tell the bank that you are now in a formal settlement process. This often leads to a significant reduction in recovery pressure, allowing you to focus on your financial recovery.
                </p>
              </div>
            </section>

            <section id="sarfaesi-act" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The SARFAESI Act: <span className="text-black">Risks for Secured Loans</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  If you have a home loan or a loan against property (LAP), the legal risks are much more direct. The SARFAESI Act, 2002, gives banks the power to take physical possession of your property without even going to a court. This is a formidable power. If you default for 90 days, the bank will issue a Section 13(2) notice giving you 60 days to pay the full dues.
                </p>
                <p className="mb-6 leading-relaxed">
                  If you don&apos;t pay within those 60 days, the bank will issue a Section 13(4) notice and can take &quot;Symbolic Possession&quot; of your property. They can eventually approach the District Magistrate (DM) or specialized courts to take &quot;Physical Possession&quot; and then auction the property to recover their money. You have very few ways to stop this; the main route is to approach the DRT within 45 days and prove that the bank did not follow the correct procedure.
                </p>
                <p className="mb-6 leading-relaxed">
                  It is important to note that the SARFAESI Act does not apply to agricultural land or to loans below Rs. 1 Lakh. But for the average urban home owner, this is the ultimate risk. Losing your home is not just a financial loss; it is a social and psychological catastrophe.
                </p>
                <p className="mb-6 leading-relaxed">
                  However, the bank doesn&apos;t actually want your house; they want their money. Auctioning a house is a long and expensive process for the bank. This is why even during a SARFAESI proceeding, there is a large window for settlement. At SettleLoans, we have helped clients negotiate with banks even after the symbolic possession was taken, allowing them to keep their homes by agreeing on a structured settlement or a revised repayment plan.
                </p>
              </div>
            </section>

            <section id="civil-vs-criminal" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Civil vs. Criminal Liability: <span className="text-black">Can You Go to Jail?</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  One of the most persistent myths in the Indian debt landscape is that the police will show up at your house and arrest you if you don&apos;t pay your loan. Let us be very clear: **In India, loan default is primarily a civil matter, not a criminal one.** In a landmark judgment, the Supreme Court has ruled that poverty or an inability to pay a debt is not a crime. You cannot be imprisoned for failing to repay a loan due to genuine financial distress.
                </p>
                <p className="mb-6 leading-relaxed">
                  The police cannot interfere in a loan dispute unless there is an element of &quot;Criminal Intent&quot;. For example, if you provided fake salary slips to get the loan, or if you took the loan and immediately fled the country, that is fraud and cheating (Section 420 IPC), and the police will get involved. If you divert business loan funds to personal use, that is &quot;Criminal Breach of Trust&quot; (Section 406 IPC).
                </p>
                <p className="mb-6 leading-relaxed">
                  The only other way to face jail time is through the criminal proceedings under Section 138 of the NI Act (Cheque Bounce) as discussed earlier, or if you show &quot;Contempt of Court&quot; by violating a direct order to disclose your assets. Even in these cases, the goal of the court is usually to ensure payment, not to punish with imprisonment.
                </p>
                <p className="mb-6 leading-relaxed">
                  The &quot;Wilful Defaulter&quot; tag is a serious regulatory penalty. While it&apos;s not a jail sentence, it means you can never take another loan in India, you cannot start a new company, and you might be barred from entering certain professions. If the amount is large (above Rs. 1 Crore), the bank can also request the government to cancel your passport to prevent you from leaving the country.
                </p>
              </div>
            </section>

            <section id="psychology-of-debt" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                The Psychology of Debt: <span className="text-black">Breaking the Cycle of Denial</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  The greatest legal risk in a loan default is not the law itself, but the psychological paralysis that sets in. When a borrower realizes they cannot pay their EMI, the first reaction is almost always denial. They stop answering phone calls, they stop checking their mail, and they avoid the bank branch. This is a survival mechanism, but in the world of debt, it is a fatal mistake.
                </p>
                <p className="mb-6 leading-relaxed">
                  Denial leads to the bank classifying you as an &quot;Unreachable Debtor.&quot; When a bank cannot reach you, they assume you have vanished with their money. This triggers the most aggressive legal actions. If you don&apos;t reply to a legal notice, the bank can get an &quot;Ex-Parte Decree,&quot; which means the court passes a judgment against you without even hearing your side because you weren&apos;t there to defend yourself.
                </p>
                <p className="mb-6 leading-relaxed">
                  Breaking the cycle of fear is the first step toward a legal solution. You must understand that the bank is a business, and debt is just a calculation on their balance sheet. They are not your enemies; they are creditors who want to minimize their losses. Once you move from a state of fear to a state of negotiation, you regain control over the situation.
                </p>
                <p className="mb-6 leading-relaxed">
                  At SettleLoans, we often spend the first few sessions with our clients just helping them manage their anxiety. We show them that there is a legal pathway out of every debt situation. Whether it is a personal loan, a business loan, or multiple credit cards, there is always a point of compromise. By taking proactive steps today, you are preventing a legal catastrophe tomorrow.
                </p>
              </div>
            </section>

            <section id="digital-lending-risks" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Digital Lending Risks: <span className="text-black">The New Legal Frontier</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  The rise of &quot;Instant Loan Apps&quot; in India has created a unique set of legal risks. Many of these apps operate in a grey area of the law, using aggressive data scraping techniques to gain access to your contacts, gallery, and location. When a default occurs, they use this data to harass you and your social circle.
                </p>
                <p className="mb-6 leading-relaxed">
                  However, the RBI has recently issued strict &quot;Digital Lending Guidelines&quot; to curb these practices. Any app that is not linked to a regulated NBFC or Bank is illegal. If an app is harassing you by calling your contacts or sending morphed images, they are committing a crime under the Information Technology Act and the Indian Penal Code. You have the right to file a complaint with the Cyber Cell and the RBI.
                </p>
                <p className="mb-6 leading-relaxed">
                  Even for legal digital lenders, the recovery process must be fair. They cannot use your personal data for recovery purposes. If you have multiple app loans, do not try to take a new loan to pay an old one. This &quot;Debt Trap&quot; leads to a total financial collapse. The legal way out is to consolidated these debts and negotiate a settlement with the underlying NBFC that funded the app.
                </p>
              </div>
            </section>

            <section id="loan-assignment-arc" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Loan Assignment: <span className="text-black">When Your Debt is Sold to an ARC</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  When a bank realizes that a loan is unlikely to be recovered, they often &quot;Sell&quot; that debt to an Asset Reconstruction Company (ARC). In India, companies like Phoenix ARC, Edelweiss ARC, and Reliance ARC buy bundles of bad loans from banks at a massive discount (sometimes for just 10% to 20% of the value).
                </p>
                <p className="mb-6 leading-relaxed">
                  Once your loan is assigned to an ARC, the ARC becomes your new creditor. They have all the legal powers of the original bank, including the right to file suits and use the SARFAESI Act. However, because they bought your debt for a small fraction of its value, they have much more room for negotiation. An ARC is often more willing to accept a 40% or 50% settlement than a traditional bank would be.
                </p>
                <p className="mb-6 leading-relaxed">
                  If you receive a &quot;Notice of Assignment,&quot; do not panic. It is actually a great opportunity for settlement. The ARC wants a quick exit and a profit on their investment. At SettleLoans, we specialize in ARC negotiations. We understand their internal models and use that knowledge to get our clients the deepest possible waivers, often clearing debts that had been dragging on for years.
                </p>
              </div>
            </section>

            <section id="why-professional-help" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Why Professional Settlement is the <span className="text-black">Only Real Solution</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  Negotiating with a bank is not like bargaining in a market. It is a technical, legal, and bureaucratic process. If you go to the bank and say &quot;I cannot pay, please settle,&quot; the bank sees that as a sign of weakness. They will likely push you to pay more, or worse, they will use that admission to build a stronger legal case against you for &quot;Wilful Default.&quot;
                </p>
                <p className="mb-6 leading-relaxed">
                  Professional settlement services like SettleLoans provide you with three critical advantages: Leverage, Expertise, and Distance. We know the &quot;Floor Price&quot; of each bank. We know which bank is likely to settle for 30% and which one will not go below 50%. We have established relationships with the nodal officers and the legal departments of most major lenders in India.
                </p>
                <p className="mb-6 leading-relaxed">
                  By having a professional represent you, you create a &quot;Strategic Distance&quot; from the emotion of the debt. Our consultants speak the language of the bank. We don&apos;t just ask for a waiver; we provide a &quot;Hardship Dossier&quot; that complies with the bank&apos;s internal auditing requirements for a write-off. We make it easy for the bank officer to say &quot;Yes&quot; to a settlement because we provide them with the legal justification they need for their superiors.
                </p>
                <p className="mb-6 leading-relaxed">
                  Finally, we handle the paperwork. A settlement is only as good as the letter it is written on. We ensure that the settlement letter contains the critical clauses: &quot;Full and Final Settlement,&quot; &quot;Withdrawal of all Legal Cases,&quot; and &quot;Update to Credit Bureaus.&quot; Without these, you might pay the money and still find yourself facing a court case months later.
                </p>
              </div>
            </section>

            <section id="borrower-rights" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Your Rights under RBI: <span className="text-black">Don&apos;t Be a Passive Victim</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 leading-relaxed">
                  A borrower in default is often treated like they have no rights, which is far from the truth. The RBI&apos;s &quot;Charter of Customer Rights&quot; applies to you regardless of your payment status. You have the Right to Fair Treatment, the Right to Transparency, and most importantly, the Right to be Heard.
                </p>
                <p className="mb-6 leading-relaxed">
                  You have the right to visit your bank branch and ask for a meeting with the Nodal Officer to discuss your hardship. You have the right to demand a copy of the loan agreement and a detailed statement of account showing exactly how the interest and penalties were calculated. If you find errors or predatory interest rates, you can challenge them.
                </p>
                <p className="mb-6 leading-relaxed">
                  If you are facing harassment, you don&apos;t just have to sit there and take it. You can file a complaint with the bank&apos;s Internal Grievance Cell. If they don&apos;t respond within 30 days, you can escalate the matter to the Banking Ombudsman (RBIO) through the CMS portal. The Ombudsman has the power to order the bank to pay you compensation for harassment.
                </p>
                <p className="mb-6 leading-relaxed">
                  At SettleLoans, we often use these rights as part of our negotiation strategy. By identifying where the bank or its agents have violated RBI guidelines, we create a defensive wall that protects our clients and encourages the bank to offer a more reasonable settlement. Knowing your rights transforms you from a victim into a stakeholder in your own financial recovery.
                </p>
              </div>
            </section>

            <section id="practical-scenarios" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight">
                Practical Scenarios: <span className="text-black">Real-World Case Studies</span>
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="space-y-12">
                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#1F5EFF] p-4 text-white font-bold">Scenario 1: Personal Loan & Credit Card Spiral</div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">The Situation</p>
                      <p className="mb-4">Mr. Sharma, a software engineer, lost his job and defaulted on three personal loans totaling Rs. 15 Lakh. Within 6 months, agents were calling his family members, and he received a legal notice for a cheque bounce.</p>
                      <p className="text-sm font-medium text-[#1F5EFF] mb-2 uppercase tracking-wide">The Solution</p>
                      <p>Instead of hiding, Sharma partnered with SettleLoans. We replied to the legal notices with a documented proof of job loss. We negotiated with all three banks simultaneously. The result? Two loans were settled for 45% of the principal, and the cheque bounce case was withdrawn after a lump-sum payment was made.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-[#1A1A1A] p-4 text-white font-bold">Scenario 2: Business Loan & DRT Threat</div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">The Situation</p>
                      <p className="mb-4">A small apparel manufacturer took a business loan of Rs. 40 Lakh against their warehouse. The business failed, and the bank initiated DRT proceedings under SARFAESI. The family was on the verge of losing their main business asset.</p>
                      <p className="text-sm font-medium text-[#1F5EFF] mb-2 uppercase tracking-wide">The Solution</p>
                      <p>We entered the case at the DRT stage. We identified procedural lapses in the bank&apos;s 13(2) notice and filed a Securitization Application. While the legal battle was on, we proposed an OTS of Rs. 28 Lakh. Seeing the legal risk of their auction being stayed, the bank accepted the settlement, allowing the manufacturers to sell the warehouse privately at a better price and clear all debts.</p>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <div className="bg-teal-600 p-4 text-white font-bold">Scenario 3: Digital App Harassment</div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wide">The Situation</p>
                      <p className="mb-4">Anjali, a young student, took 5 small loans from instant apps (totaling Rs. 50,000). The apps gained access to her contacts and began sending morphed photos to her friends as &quot;recovery&quot;.</p>
                      <p className="text-sm font-medium text-[#1F5EFF] mb-2 uppercase tracking-wide">The Solution</p>
                      <p>This is a criminal offense by the lender. We helped Anjali file a cyber cell complaint and an RBI ombudsman report. We then sent formal notices to the apps. Faced with legal action from the regulator, the apps stopped the harassment and eventually agreed to close the loans for just the principal amount without any penalties.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="success-stories" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8 text-center">Real Stories of Freedom</h2>
              <div className="grid md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    name: "Rajesh S.",
                    loc: "Mumbai, Maharashtra",
                    type: "Personal Loan Case",
                    outcome: "Settled 15 Lakhs @ 60% Off",
                    story: "I was terrified of the court summons. SettleLoans stepped in, handled the bank's lawyers, and closed my case for a fraction of the amount. I finally have my life back."
                  },
                  {
                    name: "Anjali M.",
                    loc: "Bangalore, Karnataka",
                    type: "Credit Card Debt",
                    outcome: "Criminal Case Withdrawn",
                    story: "The bank filed a Section 138 case against me. I didn't know what to do. The team at SettleLoans negotiated a settlement and got the case withdrawn legally. Truly professional."
                  },
                  {
                    name: "Vikram K.",
                    loc: "Delhi, NCR",
                    type: "Business Loan Default",
                    outcome: "DRT Action Stayed",
                    story: "My warehouse was being auctioned under SARFAESI. SettleLoans identified legal lapses and forced the bank to the table for a settlement. Saved my business asset."
                  },
                  {
                    name: "Sunitha P.",
                    loc: "Chennai, Tamil Nadu",
                    type: "Digital App Harassment",
                    outcome: "Harassment Stopped",
                    story: "Fast loan apps were harassing my contacts. SettleLoans filed an RBI complaint and sent legal notices. The apps stopped immediately and settled for the principal amount."
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 mr-3">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-[#2E2E2E]">{review.name}</h5>
                        <p className="text-xs text-gray-400">{review.loc}</p>
                      </div>
                      <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                    </div>
                    <div className="mb-4 text-xs font-mono bg-green-50 p-2 rounded border border-green-100 uppercase tracking-tighter">
                      <span className="block text-green-700 font-bold">{review.outcome}</span>
                    </div>
                    <p className="text-sm text-gray-600 italic leading-relaxed">"{review.story}"</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="scroll-mt-32 mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4 not-prose">
                {[
                  { q: "Can banks file a case for personal loan default?", a: "Absolutely. Banks can file a civil recovery suit or approach the DRT if the amount is above Rs. 20 Lakhs. While it takes time, the court can eventually order the seizure of your secondary assets." },
                  { q: "Will the police arrest me at my home for non-payment?", a: "No. The police do not serve as collection agents for banks. They only come for specific criminal offenses like fraud or if a magistrate has issued a warrant in a Section 138 NI Act case." },
                  { q: "What happens after 180 days of non payment?", a: "After 180 days, the loan is usually classified as a 'Loss Asset'. The bank will likely sell your debt to an ARC or pursue severe legal measures like property attachment." },
                  { q: "Can my salary be deducted to pay off a defaulted loan?", a: "Yes, if the bank obtains an 'Attachment Order' from a civil court in an execution proceeding. However, under the CPC, a portion of your salary is protected for your basic survival." },
                  { q: "How long does it take for a bank to file a lawsuit?", a: "Most banks wait for 6 to 12 months after the default before moving the court. They prefer internal recovery because it's cheaper. This is your 'Golden Window' for settlement." },
                  { q: "What should I do if a recovery agent threatens me?", a: "Record the conversation, take his ID or authorization letter, and tell him you are complaining to the RBI Ombudsman. If there is physical threat, call 100 or 112 immediately." },
                  { q: "Does the SARFAESI Act apply to unsecured loans?", a: "No. SARFAESI is only for secured loans (where you have pledged property). For credit cards and personal loans, the bank must follow the regular civil court process." },
                  { q: "Can I move to another country if I have a loan default?", a: "Yes, unless the bank has obtained a 'Look Out Circular' (LOC) against you. This usually only happens in high-value business defaults or cases of suspected fraud." },
                  { q: "Is a settlement letter legally binding?", a: "Yes, a formal One Time Settlement (OTS) letter on the bank's letterhead is a legally binding contract. Once you pay as per the letter, the bank can never demand more money or file a case for that loan." },
                  { q: "What is the difference between civil and criminal cases in debt?", a: "Civil cases (Recovery Suit, DRT) focus on getting the money back. Criminal cases (Section 138, Fraud) focus on punishing a violation of the law. Settlement usually resolves both." }
                ].map((faq, i) => (
                  <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all border-b-4 border-b-[#1F5EFF]/20">
                    <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none bg-gray-50 group-open:bg-white transition-colors">
                      <span className="text-lg">{i + 1}. {faq.q}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-400 text-sm italic">Disclaimer: SettleLoans is a professional debt settlement consultancy. The information provided above is for educational purposes only and does not constitute legal advice. While we strive for accuracy, laws and RBI guidelines are subject to change. Always consult with a qualified legal professional for your specific case.</p>
            </div>

            {/* Mobile CTA (Visible only on mobile) */}
            <div className="lg:hidden mt-16 mb-8">
              <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#1F5EFF]/20">
                <div className="bg-[#1F5EFF] p-6 text-center text-white">
                  <h3 className="text-2xl font-black mb-2">Ready to Start Over?</h3>
                  <p className="opacity-90 text-sm">Join the 10,000+ Indians we&apos;ve helped find their way to financial freedom.</p>
                </div>
                <div className="p-8 text-center text-[#DEDEDE]">
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-4 px-6 rounded-xl hover:scale-105 transition-all shadow-lg text-lg">
                    Get Your Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </article>

        {/* Right Column: CTA & Resources (Sticky) */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">

            {/* CTA Container */}
            <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
              <div className="bg-[#1F5EFF] p-4 text-center">
                <h3 className="text-lg font-black text-white">Protect Your Future</h3>
              </div>
              <div className="p-6 text-center">
                <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-bold">
                  Stop the harassment and reclaim your peace of mind. Our legal experts handle everything for you.
                </p>
                <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                  Talk to a Lawyer
                </Link>
                <p className="mt-4 text-xs text-[#DEDEDE]/60 uppercase tracking-widest font-black">100% Legal & Private</p>
              </div>
            </div>

            {/* Must Read Guides */}
            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Must Read Guides</h3>
              <ul className="space-y-4 text-sm font-bold">
                <li>
                  <Link href="/rbi-rules-for-recovery-agents" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    RBI Recovery Rules 2024
                  </Link>
                </li>
                <li>
                  <Link href="/cheque-bounce" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Section 138 NI Act Guide
                  </Link>
                </li>
                <li>
                  <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Handling Legal Notices
                  </Link>
                </li>
                <li>
                  <Link href="/loan-settlement-rules-india" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Settlement vs Default
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
