import Link from "next/link";
import { Metadata } from "next";
import TableOfContents from "@/components/TableOfContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGavel,
  faScaleBalanced,
  faFileContract,
  faHandcuffs,
  faTriangleExclamation,
  faShieldHalved,
  faBan,
  faEnvelopeOpenText,
  faBuildingColumns,
  faLandmark,
  faCalendarDays,
  faMoneyBillWave,
  faCheck,
  faHandshake,
  faUserTie,
  faScaleUnbalanced,
  faBookOpen,
  faUnlockKeyhole,
  faArrowTrendUp
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Cheque Bounce (Sec 138) Lawyer & Settlement Services",
  description: "Facing a Cheque Bounce case under Section 138? Understand the legal consequences, 2-year jail term, and how to settle or defend your case legally.",
  alternates: {
    canonical: "https://settleloans.in/cheque-bounce",
  },
  keywords: [
    "cheque bounce lawyer",
    "section 138 ni act defense",
    "cheque bounce legal notice reply",
    "cheque bounce settlement process",
    "section 138 punishment india",
    "bail in cheque bounce case",
    "compoundable offence section 138",
    "how to avoid jail in cheque bounce",
    "security cheque misuse defense",
    "cheque bounce mediation"
  ]
};

export default function ChequeBouncePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://settleloans.in/cheque-bounce#webpage",
        "url": "https://settleloans.in/cheque-bounce",
        "name": "Cheque Bounce (Sec 138) Lawyer & Settlement Services",
        "description": "Facing a Cheque Bounce case under Section 138? Understand the legal consequences, 2-year jail term, and how to settle or defend your case legally.",
        "breadcrumb": { "@id": "https://settleloans.in/cheque-bounce#breadcrumb" },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://settleloans.in/cheque-bounce#breadcrumb",
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
            "name": "Cheque Bounce (Sec 138)",
            "item": "https://settleloans.in/cheque-bounce"
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://settleloans.in/cheque-bounce#service",
        "name": "Cheque Bounce Legal Defense",
        "description": "Expert legal representation and settlement services for Section 138 NI Act cases. We handle notice replies, court representation, and out-of-court settlements.",
        "provider": {
          "@type": "Organization",
          "name": "SettleLoans",
          "url": "https://settleloans.in"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "840",
          "itemReviewed": {
            "@id": "https://settleloans.in/cheque-bounce#service"
          }
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Vikram Singh" },
            "datePublished": "2024-02-20",
            "reviewBody": "I was terrified when I got the court summons. SettleLoans handled the bail and mediation. We settled the matter for the principal amount only. Great legal support!",
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "itemReviewed": {
              "@id": "https://settleloans.in/cheque-bounce#service"
            }
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://settleloans.in/cheque-bounce#article",
        "headline": "Cheque Bounce (Section 138) Law in India: The Complete Guide",
        "description": "How to handle Section 138 cases, understand legal consequences, and find paths to settlement.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Legal Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2024-01-15",
        "dateModified": "2024-01-30",
        "mainEntityOfPage": { "@id": "https://settleloans.in/cheque-bounce#webpage" }
      },
      {
        "@type": "FAQPage",
        "@id": "https://settleloans.in/cheque-bounce#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is imprisonment mandatory for a cheque bounce case?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Imprisonment is NOT mandatory, but it is a possible punishment. Section 138 allows for imprisonment up to 2 years, a fine up to double the cheque amount, or both. However, courts primarily aim to recover the money. If you show bona fide intent to settle or pay, judges rarely send you to jail. Jail is usually the last resort for those who willfully disobey court orders or refuse to pay despite ability."
            }
          },
          {
            "@type": "Question",
            "name": "What is the very first step I should take after receiving a Legal Notice?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DO NOT IGNORE IT. You have exactly 15 days from the receipt of the notice to make the payment. If the debt is genuine, try to pay or ask for time. If the debt is disputed (e.g., misuse of security cheque), you MUST send a strong legal reply within 15 days denying the liability. Failure to reply can be used against you in court as a sign of acceptance of debt."
            }
          },
          {
            "@type": "Question",
            "name": "Can I settle the case out of court after the complaint is filed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, absolutely. Section 147 of the NI Act specifically makes this offense 'Compoundable'. This means you can settle the matter at ANY stage-even after the trial has begun, or even after conviction in a lower court (during appeal). Once a settlement deed is signed and the amount is paid, the complainant withdraws the case, and one are acquitted immediately."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a typical Section 138 case take to resolve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Theoretically, the Act mandates a fast-track trial to be concluded within 6 months. However, in reality, due to the massive backlog in Indian courts, a contested case can take anywhere from 1 to 4 years. This delay is why the government introduced 'Interim Compensation' to provide immediate relief to complainants during the trial."
            }
          },
          {
            "@type": "Question",
            "name": "Do I have to appear in court personally for every hearing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As an accused in a criminal case, your presence is generally required. However, considering the nature of the offense, your lawyer can file a 'Section 205' application (Code of Criminal Procedure) to dispense with your personal attendance. If allowed by the Magistrate, your lawyer can appear on your behalf for routine hearings, and you only need to come for critical stages like plea recording and final judgment."
            }
          },
          {
            "@type": "Question",
            "name": "What is Interim Compensation and is it mandatory?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under Section 143A (introduced in 2018), the Magistrate has the power to order the accused to pay up to 20% of the cheque amount to the complainant as 'Interim Compensation' while the trial is pending. This is not mandatory in every case but is increasingly being applied to prevent delay tactics. If you are acquitted later, the complainant must return this amount with bank interest."
            }
          },
          {
            "@type": "Question",
            "name": "Does a cheque bounce affect my CIBIL/Credit Score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Directly, a cheque bounce is not reported to CIBIL as an isolated event unless it is related to a loan repayment. However, if the bounced cheque was for a loan EMI or credit card bill, the bank will report the non-payment to credit bureaus, causing severe damage to your score. A 138 criminal case itself does not appear on the CIBIL report, but the financial default does."
            }
          },
          {
            "@type": "Question",
            "name": "What if the cheque was issued as a 'Security Cheque' and not for debt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This is the most common defense. The Supreme Court has held that a 'Security Cheque' issued at the start of a contract is not for a 'legal liability existing on that date'. However, the burden of proof is on YOU to prove that the cheque was given as security and that the debt claimed is false or inflated. You need strong documentary evidence (like loan agreement, emails, or receipts) to prove this."
            }
          },
          {
            "@type": "Question",
            "name": "Can the bank block my other accounts if a cheque bounces?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A bank generally cannot freeze or block your other accounts solely because a cheque bounced, unless there is a specific court order or if the bounce is related to a loan within the same bank (right of set-off). However, if the court issues an attachment order for recovery of fine or interim compensation, then your accounts can be frozen."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if the accused person dies during the trial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Criminal liability is personal. If the accused dies, the criminal proceedings against them generally abate (end), meaning they cannot be sentenced to jail. However, the complainant can still file a civil suit against the legal heirs of the deceased to recover the money from the deceased's estate/property."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a case if the cheque is stale (older than 3 months)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. A cheque is valid only for 3 months from the date written on it. If it is presented after this period, the bank will return it as 'Stale Cheque' or 'Outdated'. You cannot file a Section 138 criminal case on a stale cheque. You would have to rely on a Civil Suit for recovery of money, which is a longer process."
            }
          },
          {
            "@type": "Question",
            "name": "Is it possible to transfer the case to a court near my home?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generally, Section 138 cases are filed in the jurisdiction where the *Complainant's Bank Branch* is located (where the cheque was presented for collection). You cannot easily transfer it to your home city just for convenience. However, if there are multiple cases filed against you by the same person in different courts, you can move the High Court or Supreme Court to club them together."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

       {/* Hero Section */}
       <section className="w-full bg-[#2E2E2E] pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/10 text-[#1F5EFF] text-sm font-bold mb-6 tracking-wider uppercase">
            Legal Defense & Settlement
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#DEDEDE] mb-8 leading-[1.1] tracking-tight">
            Cheque Bounce <br className="hidden md:block"/> (Section 138 NI Act)
          </h1>
          <p className="text-lg md:text-2xl text-[#DEDEDE]/80 mb-10 max-w-2xl mx-auto leading-[1.2] font-normal">
             Facing a legal notice or court summons? Don't panic. Understand your rights, valid defenses, and how to <strong>legally settle</strong> the matter without going to jail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
             <Link href="/contact" className="inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg shadow-lg">
              Get Legal Advice
            </Link>
             <Link href="#process" className="inline-flex items-center justify-center bg-white text-[#2E2E2E] font-bold py-4 px-10 rounded-[10px] hover:scale-105 transition-all duration-300 text-lg border border-[#DEDEDE]">
              Check Process
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="w-full bg-white border-b border-[#DEDEDE]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-[#747474]">
              <li>
                <Link href="/" className="hover:text-[#1F5EFF] transition-colors">Home</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#1F5EFF] transition-colors">Services</Link>
              </li>
              <li>
                 <span className="text-gray-300">/</span>
              </li>
              <li className="font-bold text-[#2E2E2E]" aria-current="page">
                Cheque Bounce Defense
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-16 flex flex-col lg:flex-row gap-12 relative">
        
        {/* Left Column: TOC */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <TableOfContents 
            items={[
              { id: "introduction", title: "Section 138 Overview" },
              { id: "ingredients", title: "Key Ingredients" },
              { id: "consequences", title: "Jail & Penalties" },
              { id: "ipc-comparison", title: "Sec 138 vs 420 IPC" },
              { id: "bail-process", title: "Bail Process" },
              { id: "process-steps", title: "Step-by-Step Procedure" },
              { id: "defenses", title: "Valid Defenses" },
              { id: "interim", title: "Interim Compensation" },
              { id: "settlement", title: "Settlement Options" },
              { id: "comparison", title: "Court vs Mediation" },
              { id: "mistakes", title: "Critical Mistakes" },
              { id: "judgments", title: "SC Judgments" },
              { id: "directors", title: "For Companies" },
              { id: "documents", title: "Required Documents" },
              { id: "faqs", title: "FAQs" }
            ]}
          />
        </aside>

        {/* Middle Column: CONTENT */}
        <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[var(--color-text-body)]">
          
          {/* Introduction */}
          <section id="introduction" className="mb-16">
            <h2 className="text-3xl font-black text-[#2E2E2E] mb-6">More Than Just a "Returned" Cheque</h2>
            <p className="text-lg leading-relaxed mb-6">
              In India, a cheque bounce is not just a banking error; it is a <strong>Serious Criminal Offence</strong>. Under Section 138 of the Negotiable Instruments Act, 1881, if a cheque issued by you is returned by the bank due to "Insufficient Funds", the payee has the legal right to drag you to court.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Unlike a civil suit where the worst outcome is paying money, a Section 138 case puts your personal liberty at risk. Warrants can be issued against your name, and police can show up at your doorstep if you ignore court summons.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-red-900 font-medium">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="mr-2 w-5 h-5"/> 
                    <strong>Crucial:</strong> A Section 138 case is "Bailable" initially, but it can turn into a "Non-Bailable Warrant" (NBW) if you fail to appear in court.
                </p>
            </div>
          </section>

          {/* NEW SECTION: Key Ingredients */}
          <section id="ingredients" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faBookOpen} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> When Does it Become a Crime?
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               Not every bounced cheque is an offense. For a case to be valid under Section 138, the following "Ingredients" must be met:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                    <h3 className="font-black text-lg text-[#2E2E2E] mb-2">1. Legally Enforceable Debt</h3>
                    <p className="text-sm text-gray-600">The cheque must be towards a valid debt. A cheque given as a "Gift" or for "Illegal Purposes" (e.g., gambling debt) does not attract Sec 138.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                    <h3 className="font-black text-lg text-[#2E2E2E] mb-2">2. Presentation Validity</h3>
                    <p className="text-sm text-gray-600">The cheque must be presented to the bank within its validity period (usually 3 months from the date on the cheque).</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                    <h3 className="font-black text-lg text-[#2E2E2E] mb-2">3. Return for Insufficiency</h3>
                    <p className="text-sm text-gray-600">The reason for return must be "Insufficient Funds", "Account Closed", or "Stop Payment". Sign mismatch typically doesn't attract 138 but can lead to 420 (Cheating).</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm">
                    <h3 className="font-black text-lg text-[#2E2E2E] mb-2">4. Legal Notice Service</h3>
                    <p className="text-sm text-gray-600">The payee MUST send a legal notice within 30 days of the bounce. If they skip this, they cannot file a case.</p>
                </div>
            </div>
          </section>

           {/* Consequences */}
           <section id="consequences" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faGavel} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> The Punishment
            </h2>
            <p className="text-lg leading-relaxed mb-8">
               If convicted by the court, the magistrate can impose the following penalties under the Act:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faHandcuffs} className="w-12 h-12 text-[#2E2E2E]"/>
                     </div>
                     <h3 className="font-black text-xl text-[#2E2E2E] mb-2">Imprisonment</h3>
                     <p className="text-gray-600">Up to <strong>2 Years</strong> of jail time. This is a criminal conviction that stays on your record.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-[#DEDEDE] shadow-sm flex flex-col items-center text-center">
                     <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <FontAwesomeIcon icon={faMoneyBillWave} className="w-12 h-12 text-green-700"/>
                     </div>
                     <h3 className="font-black text-xl text-[#2E2E2E] mb-2">Monetary Penalty</h3>
                     <p className="text-gray-600">Up to <strong>Twice the Amount</strong> of the cheque value. (e.g., If cheque was 5L, penalty can be 10L).</p>
                </div>
            </div>
          </section>

           {/* NEW SECTION: Sec 138 vs 420 IPC */}
           <section id="ipc-comparison" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faScaleUnbalanced} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Criminal Breach: Sec 138 vs 420 IPC
            </h2>
            <p className="mb-6 leading-relaxed">
               Many borrowers are threatened with "Cheating" cases (Section 420 IPC) by recovery agents. It is crucial to understand that a simple cheque bounce due to lack of funds is <strong>NOT Cheating</strong>.
            </p>
            <div className="overflow-x-auto">
               <table className="min-w-full text-sm text-left text-[#2E2E2E] bg-white border border-[#DEDEDE] shadow-sm rounded-lg overflow-hidden">
                   <thead className="text-xs text-[#2E2E2E] uppercase bg-gray-50 border-b border-[#DEDEDE]">
                       <tr>
                           <th className="px-6 py-4">Feature</th>
                           <th className="px-6 py-4 bg-orange-50 text-orange-900">Section 138 NI Act</th>
                           <th className="px-6 py-4 bg-red-50 text-red-900">Section 420 IPC (Cheating)</th>
                       </tr>
                   </thead>
                   <tbody className="divide-y divide-[#DEDEDE]">
                       <tr className="bg-white">
                           <td className="px-6 py-4 font-black text-[#2E2E2E]">Core Offence</td>
                           <td className="px-6 py-4">Dishonour of cheque due to insufficient funds.</td>
                           <td className="px-6 py-4">Dishonest intention to cheat and induce delivery of property.</td>
                       </tr>
                       <tr className="bg-gray-50">
                           <td className="px-6 py-4 font-black text-[#2E2E2E]">Intention (Mens Rea)</td>
                           <td className="px-6 py-4"><strong>Not Required.</strong> It is a strict liability offense.</td>
                           <td className="px-6 py-4"><strong>Must be Proved.</strong> Police must prove you planned to cheat from Day 1.</td>
                       </tr>
                       <tr className="bg-white">
                           <td className="px-6 py-4 font-black text-[#2E2E2E]">Punishment</td>
                           <td className="px-6 py-4">Up to 2 Years Jail or 2x Fine.</td>
                           <td className="px-6 py-4">Up to 7 Years Jail (Non-Bailable in some states).</td>
                       </tr>
                       <tr className="bg-gray-50">
                           <td className="px-6 py-4 font-black text-[#2E2E2E]">Bail Status</td>
                           <td className="px-6 py-4 text-green-700 font-black">Bailable (Right to Bail)</td>
                           <td className="px-6 py-4 text-red-700 font-black">Non-Bailable (Discretionary)</td>
                       </tr>
                   </tbody>
               </table>
            </div>
          </section>

           {/* Bail Process */}
           <section id="bail-process" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
              <FontAwesomeIcon icon={faUnlockKeyhole} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> The Bail Process Explained
            </h2>
            <p className="mb-6 leading-relaxed">
              Since Sec 138 is a "Bailable Offense", you have the right to get bail. You do not need to go to jail if you follow the procedure correctly on the first date of hearing.
            </p>
            <div className="bg-[#E3EDFF]/20 border border-[#DEDEDE] rounded-2xl p-8">
              <h4 className="font-black text-[#1F5EFF] mb-4">Steps to Secure Bail:</h4>
              <ol className="list-decimal list-inside space-y-4 text-[#2E2E2E] opacity-90">
                <li><strong>Appearance:</strong> You MUST appear in court on the date mentioned in the summons. Do not skip this.</li>
                <li><strong>Bail Bond:</strong> Your lawyer will file a "Bail Bond" (Personal Bond) usually of ₹10,000 to ₹50,000 depending on the cheque amount.</li>
                <li><strong>Surety:</strong> You need one "Surety" (Guarantor)-a person (friend/family) who brings their ID and property papers/FD content to guarantee your presence in future.</li>
                <li><strong>Grant of Bail:</strong> The Magistrate accepts the bond and grants bail instantly. You are then a free person during the trial.</li>
              </ol>
              <p className="mt-6 text-sm text-[#1F5EFF] italic font-black">
                Warning: If you fail to appear or furnish bail, the court issues a Non-Bailable Warrant (NBW). Then police arrest becomes a reality.
              </p>
            </div>
          </section>

           {/* DETAILED Timeline */}
           <section id="process-steps" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faCalendarDays} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Detailed Court Procedure (12 Steps)
            </h2>
            <p className="mb-6 leading-relaxed">
                The legal battle for a cheque bounce case is long and technical. Understanding each stage helps you stay prepared and avoid panic.
            </p>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                
                {[
                   { step: 1, title: "The Dishonour (Day 0)", desc: "The cheque is returned by the bank with a 'Return Memo'. Common reasons: Insufficient Funds, Account Closed, Payment Stopped." },
                   { step: 2, title: "Legal Notice (Within 30 Days)", desc: "The lender creates a mandatory Legal Demand Notice. This is the foundation of the case. If they miss this 30-day window, the case cannot be filed." },
                   { step: 3, title: "Your Reply (15 Days)", desc: "You receive the notice. You have exactly 15 days to pay or reply. A strong legal reply denying liability can discourage the lender from filing a case." },
                   { step: 4, title: "Complaint Filing (Next 30 Days)", desc: "If you don't pay, the lender files a complaint in the Magistrate court within 30 days of the notice period expiry." },
                   { step: 5, title: "Sworn Statement (Verification)", desc: "The lender stands in the witness box (pre-summoning) and confirms the complaint is true. The Magistrate verifies documents." },
                   { step: 6, title: "Issuance of Summons", desc: "The Court orders: 'Issue Summons to Accused'. You will receive a court order via Speed Post/Police asking you to appear." },
                   { step: 7, title: "Appearance & Bail", desc: "You must appear. Your lawyer moves a Bail Application. Since it's bailable, the judge grants bail on furnishing a surety bond." },
                   { step: 8, title: "Plea Recording (Notice u/s 251)", desc: "The Judge asks: 'Did you issue this cheque? Do you plead guilty?'. You say: 'I plead Not Guilty and claim trial'." },
                   { step: 9, title: "Application u/s 145(2)", desc: "Your lawyer files an application seeking permission to Cross-Examine the lender. This is crucial to break their case." },
                   { step: 10, title: "Cross Examination (The War)", desc: "Your lawyer questions the lender. Questions about their financial capacity (ITR), loan date, and source of funds are asked to prove the debt is fake." },
                   { step: 11, title: "Defense Evidence (DE)", desc: "Now it's your turn. You can enter the witness box (optional) or bring witnesses/documents to prove you repaid the loan or the security cheque was misused." },
                   { step: 12, title: "Final Arguments & Judgment", desc: "Both lawyers argue. The Judge passes the order: Acquittal (Not Guilty) or Conviction (Guilty with Jail/Fine)." }
                ].map((item, index) => (
                   <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                       <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#1F5EFF] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-black top-0 text-sm">
                           {item.step}
                       </div>
                       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-xl border border-[#DEDEDE] shadow-sm hover:shadow-md transition-all">
                           <h4 className="font-black text-[#2E2E2E] mb-1">{item.title}</h4>
                           <p className="text-sm text-[#2E2E2E]/80 leading-relaxed">{item.desc}</p>
                       </div>
                   </div>
                ))}

            </div>
             <p className="mt-8 text-sm text-gray-500 italic border-l-2 border-gray-300 pl-4 bg-gray-50 p-4 rounded-r-lg">
               <strong>Pro Tip:</strong> 90% of borrowers panic and ignore the Legal Notice. This is a mistake. Sending a strong "Reply to Notice" denying liability can stop the case before it even reaches court.
             </p>
          </section>

           {/* Defenses */}
           <section id="defenses" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faShieldHalved} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Valid Legal Defenses
            </h2>
            <p className="mb-6 leading-relaxed">
              Not every bounced cheque leads to conviction. Depending on the facts, you can argue the following defenses to get acquitted:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm transition hover:shadow-md">
                    <h4 className="font-black text-lg text-[#2E2E2E] mb-2">1. Security Cheque Misuse</h4>
                    <p className="text-sm text-gray-600">If you gave a blank signed cheque as "Security" for a loan, and the lender filled a higher amount or presented it after the loan was closed.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm transition hover:shadow-md">
                    <h4 className="font-black text-lg text-[#2E2E2E] mb-2">2. Time-Barred Debt</h4>
                    <p className="text-sm text-gray-600">A cheque cannot be legally enforced for a debt that is more than 3 years old (Time Barred under Limitation Act).</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm transition hover:shadow-md">
                    <h4 className="font-black text-lg text-[#2E2E2E] mb-2">3. Material Alteration</h4>
                    <p className="text-sm text-gray-600">If the date or amount on the cheque was altered or overwritten without your countersignature, the instrument is void.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-[#DEDEDE] shadow-sm transition hover:shadow-md">
                     <h4 className="font-black text-lg text-[#2E2E2E] mb-2">4. Jurisdiction Error</h4>
                    <p className="text-sm text-gray-600">Legally, the case must be filed where the *payee's bank* is located. If filed elsewhere, it can be dismissed for lack of jurisdiction.</p>
                </div>
            </div>
          </section>

           {/* NEW SECTION: Interim Compensation */}
           <section id="interim" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faMoneyBillWave} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Interim Compensation (Sec 143A)
            </h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-xl mb-8">
               <p className="font-black text-orange-900/80 mb-2">New Rule Alert (2018 Amendment)</p>
               <p className="text-orange-800 text-sm">
                 To prevent delays, the Courts now have the power to order the accused to pay <strong>20% of the cheque amount</strong> to the complainant as "Interim Compensation" while the trial is ongoing.
               </p>
            </div>
            
            <h3 className="text-xl font-black text-gray-900 mb-4">What happens if you don't pay this 20%?</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>The amount can be recovered exclusively as a fine under CrPC Section 421.</li>
                <li>Assets can be attached to recover this amount.</li>
                <li>However, if you are acquitted later, the complainant must return this money with interest.</li>
            </ul>
          </section>

           {/* Myths */}
           <section id="myths" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
               <FontAwesomeIcon icon={faBan} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Common Myths Busted
             </h2>
             <div className="space-y-4">
                 <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                     <div className="min-w-[4rem] font-black text-red-600">Myth</div>
                     <div>"I can just issue a 'Stop Payment' instruction to the bank and I'm safe."</div>
                 </div>
                 <div className="bg-green-50 p-4 rounded-lg flex gap-4 ml-8 border-l-4 border-green-500">
                     <div className="min-w-[4rem] font-black text-green-700">Fact</div>
                     <div className="text-sm">Supreme Court has ruled that 'Stop Payment' also attracts Section 138 if the debt is valid. It is treated same as 'Insufficient Funds'.</div>
                 </div>

                 <div className="mt-6 bg-gray-50 p-4 rounded-lg flex gap-4">
                     <div className="min-w-[4rem] font-black text-red-600">Myth</div>
                     <div>"Police will come and arrest me immediately after the bounce."</div>
                 </div>
                 <div className="bg-green-50 p-4 rounded-lg flex gap-4 ml-8 border-l-4 border-green-500">
                     <div className="min-w-[4rem] font-black text-green-700">Fact</div>
                     <div className="text-sm">Police have NO role in Section 138 initially. It is a court-driven process. Police only enter if you ignore court warrants (NBW).</div>
                 </div>
             </div>
           </section>

           {/* Settlement */}
           <section id="settlement" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faHandshake} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Settlement: The Smart Way Out
               </h2>
               <div className="bg-[#E3EDFF]/20 border border-[#DEDEDE] rounded-2xl p-8 mb-8">
                   <p className="text-[#2E2E2E] mb-6 text-lg">
                       Under <strong>Section 147</strong> of the Act, cheque bounce is a "Compoundable Offense". This implies that the law encourages settlement over jail. You can settle the case at ANY stage: from the notice period right up to the Supreme Court.
                   </p>
                   
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEDEDE]">
                          <h4 className="font-black text-[#2E2E2E] text-xl mb-3">1. Assessment Stage</h4>
                          <p className="text-sm text-[#2E2E2E] mb-2">Before fighting, assess: Do you actually owe the money?</p>
                          <ul className="text-sm text-[#2E2E2E] list-disc list-inside opacity-80">
                             <li>If <strong>YES</strong>: Settle immediately to save legal costs.</li>
                             <li>If <strong>NO</strong> (Fraud/Misuse): Fight legally.</li>
                          </ul>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-[#DEDEDE]">
                          <h4 className="font-black text-[#2E2E2E] text-xl mb-3">2. The "Compounding" Power</h4>
                           <p className="text-sm text-[#2E2E2E] opacity-80">
                             Once you agree to pay, both parties sign a "Compounding Deed". This is submitted to the court. The Judge accepts it and passes an order of Acquittal. The case vanishes as if it never happened.
                           </p>
                      </div>
                   </div>
               </div>

               <h3 className="text-2xl font-black text-[#2E2E2E] mb-6">3 Proven Methods to Settle</h3>
               <div className="space-y-6">
                   <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 rounded-xl relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                       <div className="flex-1">
                           <h4 className="text-xl font-black text-[#2E2E2E] flex items-center">
                               <span className="bg-green-100 text-green-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-black">1</span>
                               Mediation Centre (Court Annexed)
                           </h4>
                           <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                              Every District Court has a "Mediation Centre". Your lawyer can request the Judge to refer the matter there. A trained Mediator (neutral lawyer) sits with both parties.
                           </p>
                           <p className="mt-2 text-gray-600 text-sm"><strong>Benefit:</strong> What you say in mediation is confidential and cannot be used as evidence against you if settlement fails.</p>
                       </div>
                   </div>

                   <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 rounded-xl relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                       <div className="flex-1">
                           <h4 className="text-xl font-black text-[#2E2E2E] flex items-center">
                               <span className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-black">2</span>
                               National Lok Adalat
                           </h4>
                           <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                              Held every few months across India. It is a "People's Court" designed for mass settlements. Banks and NBFCs often offer heavy discounts (waiver of interest/penalty) in Lok Adalats to close old files.
                           </p>
                           <p className="mt-2 text-gray-600 text-sm"><strong>Benefit:</strong> The court decree passed here is final and binding. No appeal lies against it.</p>
                       </div>
                   </div>

                   <div className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 rounded-xl relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
                       <div className="flex-1">
                           <h4 className="text-xl font-black text-[#2E2E2E] flex items-center">
                               <span className="bg-purple-100 text-purple-700 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-black">3</span>
                               Direct Out-of-Court Settlement
                           </h4>
                           <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                              Lawyers negotiate directly. Once terms are agreed, you pay the amount via DD/RTGS. In return, the lender hands over the <strong>No Dues Certificate (NDC)</strong> and appears in court to withdraw the complaint.
                           </p>
                           <p className="mt-2 text-gray-600 text-sm"><strong>Benefit:</strong> Fastest method. No waiting for court dates.</p>
                       </div>
                   </div>
               </div>
           </section>

           {/* NEW SECTION: Comparison Table */}
           <section id="comparison" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faScaleBalanced} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Court Trial vs Mediation
               </h2>
               <div className="overflow-x-auto">
                   <table className="min-w-full text-sm text-left text-[#2E2E2E] bg-white border border-[#DEDEDE] shadow-sm rounded-lg overflow-hidden">
                       <thead className="text-xs text-[#2E2E2E] uppercase bg-gray-50 border-b border-[#DEDEDE]">
                           <tr>
                               <th className="px-6 py-3">Feature</th>
                               <th className="px-6 py-3">Court Trial (Fighting)</th>
                               <th className="px-6 py-3">Mediation (Settling)</th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-[#DEDEDE]">
                           <tr className="bg-white">
                               <td className="px-6 py-4 font-black text-[#2E2E2E]">Time Taken</td>
                               <td className="px-6 py-4 text-red-600">2 - 5 Years</td>
                               <td className="px-6 py-4 text-green-600">1 - 3 Months</td>
                           </tr>
                           <tr className="bg-gray-50">
                               <td className="px-6 py-4 font-black text-[#2E2E2E]">Outcome</td>
                               <td className="px-6 py-4">Win or Jail/Fine</td>
                               <td className="px-6 py-4">Guaranteed Closure</td>
                           </tr>
                           <tr className="bg-white">
                               <td className="px-6 py-4 font-black text-[#2E2E2E]">Cost</td>
                               <td className="px-6 py-4 text-red-600">High (Lawyer Fees per hearing)</td>
                               <td className="px-6 py-4 text-green-600">Low (One-time Settlement)</td>
                           </tr>
                           <tr className="bg-gray-50">
                               <td className="px-6 py-4 font-black text-[#2E2E2E]">Record</td>
                               <td className="px-6 py-4">Criminal Conviction Record</td>
                               <td className="px-6 py-4">Clean Slate (Compounded)</td>
                           </tr>
                       </tbody>
                   </table>
               </div>
           </section>

           {/* Mistakes */}
            <section id="mistakes" className="scroll-mt-32 mb-16">
             <h2 className="text-3xl md:text-4xl font-black text-red-600 mb-8 flex items-center">
                <FontAwesomeIcon icon={faTriangleExclamation} className="mr-4 w-12 h-12" /> Critical Mistakes to Avoid
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-black text-red-900 mb-2">1. Ignoring the Summon</h4>
                    <p className="text-sm text-red-800">
                        Thinking "If I don't receive it, they can't do anything." Reality: The court will issue a Bailable Warrant, then a Non-Bailable Warrant, and declare you a "Proclaimed Offender".
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-black text-red-900 mb-2">2. Changing Address</h4>
                    <p className="text-sm text-red-800">
                        Fleeing your address doesn't help. The court considers the notice "Served" if it was sent to your last known correct address.
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-black text-red-900 mb-2">3. Admitting Liability in Chat</h4>
                    <p className="text-sm text-red-800">
                        Sending WhatsApp messages like "Sorry I will pay next week" can be used as admission of debt in court, weakening your defense.
                    </p>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h4 className="font-black text-red-900 mb-2">4. Not Replying to Legal Notice</h4>
                    <p className="text-sm text-red-800">
                        The reply is your first line of defense. If you don't reply, the court assumes you have no valid defense to offer.
                    </p>
                </div>
             </div>
           </section>

           {/* NEW SECTION: Company Directors */}
           <section id="directors" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                 <FontAwesomeIcon icon={faUserTie} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> For Business Owners & Directors
              </h2>
              <div className="bg-gray-50 p-8 rounded-2xl border border-[#DEDEDE]">
                 <p className="mb-4 text-[#2E2E2E]">
                   If a company cheque bounces, <strong>Section 141</strong> of the NI Act kicks in. This means every person who was "In-charge of and responsible for the conduct of business" is liable.
                 </p>
                 <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <h4 className="font-black text-[#2E2E2E] mb-2">Who Gets Accused?</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                           <li>Managing Directors</li>
                           <li>Signatory Directors</li>
                           <li>Partners (in LLP/Partnership)</li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-black text-[#2E2E2E] mb-2">Who is Safe?</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                           <li>Independent/Non-Exec Directors (No daily role)</li>
                           <li>Directors who resigned BEFORE the bounce (Proof required)</li>
                           <li>Employees/Accountants (unless they signed)</li>
                        </ul>
                    </div>
                 </div>
              </div>
           </section>

           {/* Documents */}
           <section id="documents" className="scroll-mt-32 mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                   <FontAwesomeIcon icon={faFileContract} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Documents You Need
               </h2>
               <p className="mb-6">To build a strong defense or settlement, keep these ready:</p>
               <ul className="grid md:grid-cols-2 gap-4">
                   {["Copy of the Bounced Cheque", "Return Memo from Bank", "Legal Notice Received (with Envelope)", "Proof of any Partial Payments made", "Loan Agreement Copy", "Correspondence (Emails/Chats) with Lender"].map((item, i) => (
                       <li key={i} className="flex items-center bg-white p-3 rounded shadow-sm border border-[#DEDEDE]">
                           <FontAwesomeIcon icon={faCheck} className="text-green-500 mr-3 w-5 h-5"/> {item}
                       </li>
                   ))}
               </ul>
           </section>

           {/* Case Studies */}
           <section id="case-studies" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl font-black text-[#2E2E2E] mb-8 text-center">Real Cases Handled</h2>
              <div className="space-y-8">
                 <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm relative">
                     <div className="absolute top-0 right-0 bg-[#1F5EFF]/10 text-[#1F5EFF] px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-black">
                         Acquitted
                     </div>
                     <h3 className="text-xl font-black text-[#2E2E2E] mb-4">Case: The Security Cheque Defense</h3>
                     <p className="text-[var(--color-text-body)] mb-4">
                         <strong>Scenario:</strong> Client had given 5 blank cheques in 2018 for a 2L loan. Loan was repaid in 2020. In 2023, lender deposited a cheque for 10L.
                     </p>
                     <p className="text-sm text-[var(--color-text-body)] bg-gray-50 p-3 rounded border border-gray-100">
                         <strong>Outcome:</strong> We proved via bank statements that the original loan was cleared. We argued the cheque was a "Security Instrument" and not for a legally enforceable debt of 10L. Court dismissed the case.
                     </p>
                 </div>
                 
                 <div className="bg-white p-8 rounded-2xl border border-[#DEDEDE] shadow-sm relative">
                     <div className="absolute top-0 right-0 bg-[#1F5EFF]/10 text-[#1F5EFF] px-4 py-2 rounded-bl-xl rounded-tr-xl text-sm font-black">
                         Settled in Mediation
                     </div>
                     <h3 className="text-xl font-black text-[#2E2E2E] mb-4">Case: Business Loss & Settlement</h3>
                     <p className="text-[var(--color-text-body)] mb-4">
                         <strong>Scenario:</strong> Client defaulted on vendor payment of 15L due to Covid. Vendor filed Sec 138.
                     </p>
                     <p className="text-sm text-[var(--color-text-body)] bg-gray-50 p-3 rounded border border-gray-100">
                         <strong>Outcome:</strong> Instead of fighting (since debt was real), we requested mediation. Settled for 11L (Principal only) to be paid in 6 installments. Case withdrawn.
                     </p>
                 </div>
              </div>
           </section>

           {/* NEW SECTION: Judgments */}
           <section id="judgments" className="scroll-mt-32 mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 flex items-center">
                 <FontAwesomeIcon icon={faBuildingColumns} className="mr-4 w-12 h-12 text-[#1F5EFF]" /> Landmark Judgments
              </h2>
              <p className="mb-6">The Supreme Court of India has consistently ruled to protect honest borrowers and encourage settlement.</p>
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="bg-gray-50 p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                      <h4 className="font-black text-[#2E2E2E] mb-2">Damodar S. Prabhu vs. Sayed Babalal H.</h4>
                      <p className="text-sm text-[var(--color-text-body)] opacity-80">
                        <strong>Rule:</strong> Established graded guidelines for compounding. If you settle early (before trial), you pay no or less costs to legal services. Encourages early compromise.
                      </p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                      <h4 className="font-black text-[#2E2E2E] mb-2">M/s Meters and Instruments vs. Kanchan Mehta</h4>
                      <p className="text-sm text-[var(--color-text-body)] opacity-80">
                        <strong>Rule:</strong> The court can close a case even if the complainant refuses to settle, provided the accused pays the cheque amount plus reasonable interest/compensation to the court.
                      </p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                      <h4 className="font-black text-[#2E2E2E] mb-2">Dashrath Rupsingh Rathod vs. State</h4>
                      <p className="text-sm text-[var(--color-text-body)] opacity-80">
                        <strong>Rule:</strong> Clarified Jurisdiction. Case must be filed where the Payee's Bank Branch is located, stopping harassment of filing cases in remote locations.
                      </p>
                 </div>
                 <div className="bg-gray-50 p-6 rounded-xl border border-[#DEDEDE] hover:shadow-md transition-shadow">
                      <h4 className="font-black text-[#2E2E2E] mb-2">Dayawati vs. Yogesh Kumar Gosain</h4>
                      <p className="text-sm text-[var(--color-text-body)] opacity-80">
                        <strong>Rule:</strong> Delhi High Court clarified that cases referred to Mediation Centre are legally binding. Non-compliance after mediation settlement is Contempt of Court.
                      </p>
                 </div>
              </div>
           </section>

           {/* FAQs */}
           <h2 id="faqs" className="scroll-mt-32 text-3xl md:text-4xl font-black text-[#2E2E2E] mt-16 mb-8">
             Frequently Asked Questions
           </h2>
           <div className="space-y-4 not-prose mb-20">
             {[
               { 
                 q: "Is imprisonment mandatory for a cheque bounce case?", 
                 a: "Imprisonment is NOT mandatory, but it is a possible punishment. Section 138 allows for imprisonment up to 2 years, a fine up to double the cheque amount, or both. However, courts primarily aim to recover the money. If you show bona fide intent to settle or pay, judges rarely send you to jail. Jail is usually the last resort for those who willfully disobey court orders or refuse to pay despite ability." 
               },
               { 
                 q: "What is the very first step I should take after receiving a Legal Notice?", 
                 a: "DO NOT IGNORE IT. You have exactly 15 days from the receipt of the notice to make the payment. If the debt is genuine, try to pay or ask for time. If the debt is disputed (e.g., misuse of security cheque), you MUST send a strong legal reply within 15 days denying the liability. Failure to reply can be used against you in court as a sign of acceptance of debt." 
               },
               { 
                  q: "Can I settle the case out of court after the complaint is filed?", 
                  a: "Yes, absolutely. Section 147 of the NI Act specifically makes this offense 'Compoundable'. This means you can settle the matter at ANY stage-even after the trial has begun, or even after conviction in a lower court (during appeal). Once a settlement deed is signed and the amount is paid, the complainant withdraws the case, and you are acquitted immediately." 
               },
               { 
                  q: "How long does a typical Section 138 case take to resolve?", 
                  a: "Theoretically, the Act mandates a fast-track trial to be concluded within 6 months. However, in reality, due to the massive backlog in Indian courts, a contested case can take anywhere from 1 to 4 years. This delay is why the government introduced 'Interim Compensation' to provide immediate relief to complainants during the trial." 
               },
               { 
                  q: "Do I have to appear in court personally for every hearing?", 
                  a: "As an accused in a criminal case, your presence is generally required. However, considering the nature of the offense, your lawyer can file a 'Section 205' application (Code of Criminal Procedure) to dispense with your personal attendance. If allowed by the Magistrate, your lawyer can appear on your behalf for routine hearings, and you only need to come for critical stages like plea recording and final judgment." 
               },
               {
                   q: "What is Interim Compensation and is it mandatory?",
                   a: "Under Section 143A (introduced in 2018), the Magistrate has the power to order the accused to pay up to 20% of the cheque amount to the complainant as 'Interim Compensation' while the trial is pending. This is not mandatory in every case but is increasingly being applied to prevent delay tactics. If you are acquitted later, the complainant must return this amount with bank interest."
               },
               {
                   q: "Does a cheque bounce affect my CIBIL/Credit Score?",
                   a: "Directly, a cheque bounce is not reported to CIBIL as an isolated event unless it is related to a loan repayment. However, if the bounced cheque was for a loan EMI or credit card bill, the bank will report the non-payment to credit bureaus, causing severe damage to your score. A 138 criminal case itself does not appear on the CIBIL report, but the financial default does."
               },
               {
                   q: "What if the cheque was issued as a 'Security Cheque' and not for debt?",
                   a: "This is the most common defense. The Supreme Court has held that a 'Security Cheque' issued at the start of a contract is not for a 'legal liability existing on that date'. However, the burden of proof is on YOU to prove that the cheque was given as security and that the debt claimed is false or inflated. You need strong documentary evidence (like loan agreement, emails, or receipts) to prove this."
               },
               {
                   q: "Can the bank block my other accounts if a cheque bounces?",
                   a: "A bank generally cannot freeze or block your other accounts solely because a cheque bounced, unless there is a specific court order or if the bounce is related to a loan within the same bank (right of set-off). However, if the court issues an attachment order for recovery of fine or interim compensation, then your accounts can be frozen."
               },
               {
                   q: "What happens if the accused person dies during the trial?",
                   a: "Criminal liability is personal. If the accused dies, the criminal proceedings against them generally abate (end), meaning they cannot be sentenced to jail. However, the complainant can still file a civil suit against the legal heirs of the deceased to recover the money from the deceased's estate/property."
               },
               {
                   q: "Can I file a case if the cheque is stale (older than 3 months)?",
                   a: "No. A cheque is valid only for 3 months from the date written on it. If it is presented after this period, the bank will return it as 'Stale Cheque' or 'Outdated'. You cannot file a Section 138 criminal case on a stale cheque. You would have to rely on a Civil Suit for recovery of money, which is a longer process."
               },
               {
                   q: "Is it possible to transfer the case to a court near my home?",
                   a: "Generally, Section 138 cases are filed in the jurisdiction where the *Complainant's Bank Branch* is located (where the cheque was presented for collection). You cannot easily transfer it to your home city just for convenience. However, if there are multiple cases filed against you by the same person in different courts, you can move the High Court or Supreme Court to club them together."
               },
               {
                   q: "Can I pay the settlement amount in Installments?",
                   a: "Yes. Courts often allow settlement amounts to be paid in installments if the complainant agrees. You can sign a 'Joint Compromise Memo' stating the dates of each installment. If you default on an installment, the case may be revived or the court may issue a warrant."
               },
               {
                   q: "What is a 'Friendly Loan' and is cheque bounce applicable?",
                   a: "A Friendly Loan is money lent between friends/relatives without a formal agreement. Section 138 applies to friendly loans too, provided the lender can prove they had the financial capacity to lend that amount and the transaction was legal (not black money)."
               },
               {
                   q: "Can I counter-file a harassment case against the lender?",
                   a: "If the lender is using illegal recovery tactics (abusive calls, home visits by goons), you can file a Police Complaint or a Civil Injunction suit. However, filing a false counter-case just to pressurize them to withdraw the 138 case usually backfires. Focus on defending the 138 case on merits."
               },
               {
                   q: "What if the signature on the cheque does not match mine?",
                   a: "If the return memo says 'Drawers Signature Differs', Section 138 may still apply if it is proved that you intentionally signed differently to cause dishonour. However, if the signature is forged, you must immediately file a complaint for forgery and request the court to send the cheque for handwriting analysis."
               },
               {
                   q: "I have multiple bounced cheques for the same loan. How many cases?",
                   a: "The lender can file a separate case for EACH bounced cheque. This means you might have to attend 5 different cases for 5 cheques. However, you can file an application to 'club' all cases together if they are between the same parties and part of the same transaction (Section 219 CrPC)."
               },
               {
                   q: "Can a housewife or student be sued for cheque bounce?",
                   a: "Yes. Any person who signs the cheque is liable, regardless of their profession. If a housewife issues a cheque from her account (even for her husband's debt), she becomes the primary accused."
               }
             ].map((faq, i) => (
               <details key={i} className="group bg-white border border-[#DEDEDE] rounded-xl overflow-hidden hover:shadow-md transition-all">
                 <summary className="flex justify-between items-center p-5 cursor-pointer font-black text-[#2E2E2E] list-none focus:outline-none bg-[#E3EDFF]/50 group-open:bg-[#E3EDFF]">
                   <span className="text-lg pr-4">{i + 1}. {faq.q}</span>
                   <span className="transition-transform duration-300 group-open:rotate-180 flex-shrink-0">
                     <svg className="w-5 h-5 text-[#1F5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7 7"></path></svg>
                   </span>
                 </summary>
                 <div className="px-5 pb-5 text-[#2E2E2E] opacity-90 leading-relaxed border-t border-[#DEDEDE] pt-4 mt-0 bg-white">
                   {faq.a}
                 </div>
               </details>
             ))}
           </div>
           
            <div className="mt-16 pt-8 border-t border-[var(--color-border)] text-center">
              <p className="text-[var(--color-text-muted)] text-sm italic">Disclaimer: This information is for educational purposes and does not constitute legal advice. Section 138 cases are complex; consult a qualified advocate for your specific strategy.</p>
           </div>

        </article>

        {/* Right Sticky Column */}
        <aside className="hidden lg:block w-1/5 min-w-[240px] relative">
          <div className="sticky top-24 space-y-8">
             <div className="bg-[#2E2E2E] rounded-2xl shadow-xl overflow-hidden border border-[#DEDEDE]/10 group">
               <div className="bg-[#1F5EFF] p-4 text-center">
                 <h3 className="text-lg font-black text-white">Got a Court Notice?</h3>
               </div>
                 <div className="p-6 text-center">
                  <p className="mb-6 text-sm text-[#DEDEDE] opacity-80 leading-relaxed font-black">
                    Ignore it, and you face an Arrest Warrant. We handle notice replies & appearance.
                  </p>
                  <Link href="/contact" className="inline-block w-full bg-[#1F5EFF] text-white font-black py-3 px-4 rounded-[10px] hover:scale-105 transition-all shadow-md group-hover:shadow-lg">
                    Talk to Lawyer
                  </Link>
                  <p className="mt-4 text-xs text-[#DEDEDE]/60"> Confidential & Secure</p>
                </div>
             </div>

            <div className="bg-white p-6 rounded-2xl border border-[#DEDEDE] shadow-sm">
              <h3 className="text-sm font-black uppercase tracking-wider text-[#747474] mb-4 border-b border-[#DEDEDE] pb-2">Related Services</h3>
              <ul className="space-y-4 text-sm font-black">
                 <li>
                  <Link href="/services/nbfc-loan-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    NBFC Settlement
                  </Link>
                </li>
                 <li>
                  <Link href="/services/credit-card-settlement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    Credit Card Debt
                  </Link>
                </li>
                 <li>
                  <Link href="/credit-score-improvement" className="group flex items-center text-[#2E2E2E] hover:text-[#1F5EFF] transition-colors">
                     <span className="w-1.5 h-1.5 bg-[#DEDEDE] rounded-full mr-3 group-hover:bg-[#1F5EFF] transition-colors"></span>
                    CIBIL Repair
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
