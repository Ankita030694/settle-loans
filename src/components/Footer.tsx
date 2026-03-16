import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-8 md:pt-[60px] px-4 md:px-[50px] pb-8 md:pb-[60px] mb-0 rounded-t-[20px] md:rounded-t-[40px] overflow-hidden overflow-x-hidden max-w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[60px]">

          {/* Column 1: Logo, Description, Contact Cards */}
          <div className="flex flex-col gap-6 w-full lg:w-[350px] shrink-0">
            <div className="relative w-36 h-36">
              <Image
                src="/logo/logo.svg"
                alt="SettleLoans Logo"
                fill
                className="object-contain object-left"
              />
            </div>

            <div className="flex flex-col gap-4 mt-4">
              {/* Email Card */}
              <a href="mailto:info@settleloan.in" className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">info@settleloan.in</span>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Phone Card */}
              <a href="tel:+919821219819" className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3">
                  <div className="text-blue-500 bg-blue-50 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">+91 98212 19819</span>
                </div>
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Address Card */}
              <a href="https://maps.app.goo.gl/Uqcz1TTYyiqjcQC7A" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-500 bg-blue-50 p-2 rounded-lg shrink-0 mt-0.5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Ground Floor, PLATINA TOWER, Mehrauli-Gurgaon Rd, A Block, DLF Phase 1, Gurugram, Haryana 122002
                </p>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Services</h3>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="text-blue-600 hover:text-blue-800 text-base font-base">Contact Us</Link>
              <Link href="/loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Loan Settlement</Link>
              <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Personal Loan Settlement</Link>
              <Link href="/services/credit-card-settlement" className="text-blue-600 hover:text-blue-800 text-base">Credit Card Settlement</Link>
              <Link href="/business-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Business Loan Settlement</Link>
              <Link href="/services/nbfc-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">NBFC Loan Settlement</Link>
              <Link href="/app-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">App Loan Settlement</Link>
              <Link href="/cheque-bounce" className="text-blue-600 hover:text-blue-800 text-base">Cheque Bounce Resolution</Link>
              <Link href="/credit-score-improvement" className="text-blue-600 hover:text-blue-800 text-base">Credit Score Improvement</Link>
              <Link href="/debt-settlement-company-in-india" className="text-blue-600 hover:text-blue-800 text-base">Debt Settlement Company India</Link>
              <Link href="/loan-settlement-lawyers" className="text-blue-600 hover:text-blue-800 text-base">Loan Settlement Lawyers</Link>
              <Link href="/punishment-for-non-payment-of-personal-loan-in-india" className="text-blue-600 hover:text-blue-800 text-base">Punishment for Personal Loan Default</Link>
              <Link href="/charities-that-pay-off-debt-in-india" className="text-blue-600 hover:text-blue-800 text-base font-bold underline">Charities That Pay Off Debt</Link>
            </div>
          </div>

          {/* Column 3: FAQs */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">FAQs</h3>
            <div className="flex flex-col gap-3">
              <Link href="/faqs/how-to-settle-loan" className="text-blue-600 hover:text-blue-800 text-base">How to Settle Loan</Link>
              <Link href="/faqs/ots-full-form" className="text-blue-600 hover:text-blue-800 text-base">OTS Full Form</Link>
              <Link href="/faqs/how-to-settle-debt-for-less" className="text-blue-600 hover:text-blue-800 text-base">Settle Debt for Less</Link>
              <Link href="/faqs/can-i-get-loan-after-settlement" className="text-blue-600 hover:text-blue-800 text-base">Loan After Settlement</Link>
              <Link href="/faqs/eligibility-checker-for-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Eligibility Checker</Link>
              <Link href="/faqs/free-consultation-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Free Consultation</Link>
              <Link href="/faqs/loan-settlement-fees" className="text-blue-600 hover:text-blue-800 text-base">Settlement Fees</Link>
              <Link href="/dont-have-job-cant-pay-emi" className="text-blue-600 hover:text-blue-800 text-base">Don't Have Job Can't Pay EMI</Link>
              <Link href="/loan-settlement-with-iarc" className="text-blue-600 hover:text-blue-800 text-base">Loan Settlement with IARC</Link>
              <Link href="/how-to-manage-loan-with-no-job" className="text-blue-600 hover:text-blue-800 text-base">Manage Loan With No Job</Link>
              <Link href="/ignoring-calls-of-recovery-agent" className='text-blue-600 hover:text-blue-800 text-base'>Ignoring Recovery Calls?</Link>
              <Link href="/loan-settlement-after-settlement-failed" className='text-blue-600 hover:text-blue-800 text-base'>Settlement Failed?</Link>
              <Link href="/what-is-personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Personal Loan Settlement</Link>
              <Link href="/mastering-loan-settlement" className="text-blue-600 hover:text-blue-800 text-base">Mastering Loan Settlement</Link>
              <Link href="/missed-your-loan-emi-heres-what-to-do" className="text-blue-600 hover:text-blue-800 text-base">Missed Your Loan EMI?</Link>
              <Link href="/ what-can-I-do-if-I-m-unable-to-pay-my-bank-loan-emi" className="text-blue-600 hover:text-blue-800 text-base">Unable to Pay EMI?</Link>
              <Link href="/which-banks-offer-debt-consolidation-loans-in-india" className="text-blue-600 hover:text-blue-800 text-base">Debt Consolidation Banks</Link>
            </div>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Legal & Compliance</h3>
            <div className="flex flex-col gap-3">
              <Link href="/terms-and-conditions" className='text-blue-600 hover:text-blue-800 text-base'>Terms & Conditions</Link>
              <Link href="/privacy-policy" className='text-blue-600 hover:text-blue-800 text-base'>Privacy Policy</Link>
            </div>
          </div>

        </div>

        {/* States Grid Section */}
        <div className="w-full mt-16 pt-12 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider text-sm opacity-70">States & Cities We Serve</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
            {[
              { name: "Andaman & Nicobar", href: "/loan-settlement/andaman-and-nicobar" },
              { name: "Andhra Pradesh", href: "/loan-settlement/andhra-pradesh" },
              { name: "Arunachal Pradesh", href: "/loan-settlement/arunachal-pradesh" },
              { name: "Assam", href: "/loan-settlement/assam" },
              { name: "Bengaluru", href: "/loan-settlement/bengaluru" },
              { name: "Bihar", href: "/loan-settlement/bihar" },
              { name: "Chandigarh", href: "/loan-settlement/chandigarh" },
              { name: "Chhattisgarh", href: "/loan-settlement/chhattisgarh" },
              { name: "Chennai", href: "/loan-settlement/chennai" },
              { name: "Dadra & Nagar Haveli", href: null },
              { name: "Daman & Diu", href: null },
              { name: "Delhi", href: "/loan-settlement/delhi" },
              { name: "Goa", href: "/loan-settlement/goa" },
              { name: "Gujarat", href: "/loan-settlement/gujarat" },
              { name: "Gurgaon", href: "/loan-settlement/gurgaon" },
              { name: "Haryana", href: "/loan-settlement/haryana" },
              { name: "HDFC Bank Settlement", href: "/loan-settlement/hdfc-bank" },
              { name: "ICICI Bank Settlement", href: "/loan-settlement/icici-bank" },
              { name: "Himachal Pradesh", href: "/loan-settlement/himachal-pradesh" },
              { name: "Jammu & Kashmir", href: null },
              { name: "Jharkhand", href: "/loan-settlement/jharkhand" },
              { name: "Karnataka", href: "/loan-settlement/karnataka" },
              { name: "Kerala", href: "/loan-settlement/kerala" },
              { name: "Ladakh", href: null },
              { name: "Lakshadweep", href: null },
              { name: "Madhya Pradesh", href: "/loan-settlement/madhya-pradesh" },
              { name: "Maharashtra", href: "/loan-settlement/maharashtra" },
              { name: "Manipur", href: null },
              { name: "Meghalaya", href: "/loan-settlement/meghalaya" },
              { name: "Mizoram", href: null },
              { name: "Mumbai", href: "/loan-settlement/mumbai" },
              { name: "Nagaland", href: null },
              { name: "Noida", href: "/loan-settlement/noida" },
              { name: "Odisha", href: "/loan-settlement/odisha" },
              { name: "Puducherry", href: null },
              { name: "Punjab", href: "/loan-settlement/punjab" },
              { name: "Pune", href: "/loan-settlement/pune" },
              { name: "Rajasthan", href: "/loan-settlement/rajasthan" },
              { name: "Sikkim", href: null },
              { name: "Tamil Nadu", href: "/loan-settlement/tamil-nadu" },
              { name: "Telangana", href: "/loan-settlement/telangana" },
              { name: "Tripura", href: null },
              { name: "Uttar Pradesh", href: "/loan-settlement/uttar-pradesh" },
              { name: "Uttarakhand", href: "/loan-settlement/uttarakhand" },
              { name: "West Bengal", href: "/loan-settlement/west-bengal" }
            ].sort((a, b) => a.name.localeCompare(b.name)).map((state) => (
              state.href ? (
                <Link
                  key={state.name}
                  href={state.href}
                  className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors duration-200 py-1"
                >
                  {state.name}
                </Link>
              ) : (
                <span
                  key={state.name}
                  className="text-gray-400 text-sm py-1 font-normal cursor-default"
                >
                  {state.name}
                </span>
              )
            ))}
          </div>
        </div>

        {/* Queries Grid Section */}
        <div className="w-full mt-12 pt-12 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-8 uppercase tracking-wider text-sm opacity-70">Queries</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
            {[
              { name: "MSME Loan Dispute Lawyer", href: "/best-lawyer-for-msme-business-loan-dispute" },
              { name: "DRT Loan Settlement Lawyer", href: "/best-lawyer-for-loan-settlement-by-drt" },
              { name: "Consortium Loan Defence", href: "/best-lawyer-for-consortium-loan-recovery-defence" },
              { name: "Mortgage Default Notice Help", href: "/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment" },
              { name: "Company Loan Matters Lawyer", href: "/best-lawyer-for-company-loan-matters" },
              { name: "MSME & Business Loan Lawyer", href: "/best-lawyer-for-msme-and-business-loans" },
              { name: "Documentation Review Lawyer", href: "/best-lawyer-for-documentation-review-of-loan-agreement" },
              { name: "Loan Recovery Documentation", href: "/best-lawyer-for-loan-recovery-documentation" },
              { name: "DRT Loan Assignment Defence", href: "/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt" },
              { name: "Car Loan Settlement Lawyer", href: "/best-lawyer-for-car-loan-settlement" },
              { name: "Business Loan Settlement Lawyer", href: "/best-lawyer-for-business-loan-settlement" },
              { name: "Notice for Loan Default Help", href: "/best-lawyer-for-notice-for-loan-default" },
              { name: "ARC Loan Assignment Dispute", href: "/best-lawyer-for-arc-loan-assignment-dispute" },
              { name: "Account Documents DRT Lawyer", href: "/best-lawyer-for-account-documents-drt" },
              { name: "DRT Lawyer in Mumbai", href: "/drt-lawyer-in-mumbai-loan-recovery" },
              { name: "Home Loan Check Bounce Lawyer", href: "/best-lawyer-for-home-loan-check-bounce-case" },
              { name: "Loan Arbitration Lawyer", href: "/best-loan-agreement-arbitration-lawyer" },
              { name: "Project Finance Recovery Lawyer", href: "/best-project-finance-builder-loan-recovery-matter-lawyer" },
              { name: "Loan Settlement During DRT", href: "/best-lawyer-for-loan-settlement-during-drt" },
              { name: "DRT Case Defence Lawyer", href: "/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" },
              { name: "Bank Recovery Defence Lawyer", href: "/best-lawyer-for-bank-loan-recovery-defence" },
              { name: "Bounced Security Check Lawyer", href: "/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes" },
              { name: "Personal Loans Lawyer", href: "/best-lawyer-for-personal-loans" },
              { name: "MSME Personal Loan Lawyer", href: "/best-lawyer-for-MSME-personal-loan" },
              { name: "MSME Loan Recovery Defence", href: "/best-lawyer-for-MSME-loan-recovery-defence" },
              { name: "Challenge ARC Assignment", href: "/best-lawyer-to-challenge-loan-assignment-to-arc" },
              { name: "Unsecured Loan Lawyer", href: "/best-lawyer-for-unsecured-loan" },
              { name: "Secured Loan Litigation Lawyer", href: "/best-lawyer-for-secured-loan-litigation-drt" },
              { name: "LAP Settlement Lawyer", href: "/best-lawyer-for-loan-against-property-settlement" },
              { name: "Education Loan Settlement Lawyer", href: "/best-lawyer-for-education-loan-settlement" },
              { name: "Loan & Mortgage Agreement Lawyer", href: "/best-lawyer-for-loan-and-mortgage-agreements" },
              { name: "Loan Recovery Cases Lawyer", href: "/best-lawyer-for-loan-recovery-cases" },
              { name: "Bank Harassment for Loan Lawyer", href: "/best-lawyer-for-bank-harassment-for-loan" },
              { name: "Loan Contract Lawyer", href: "/best-lawyer-for-loan-contract" },
              { name: "5 Lakhs Loan Settlement", href: "/5-lakhs-loan-settlement" },
              { name: "10 Lakhs Loan Settlement", href: "/10-lakhs-loan-settlement" },
              { name: "50 Lakhs Loan Settlement", href: "/50-lakhs-loan-settlement" },
              { name: "1 Crore Loan Settlement", href: "/1-crore-loan-settlement" },
              { name: "5 Crore Loan Settlement", href: "/5-crore-loan-settlement" },
              { name: "10 Crore Loan Settlement", href: "/10-crore-loan-settlement" },
              { name: "Loan Settlement Near Me", href: "/loan-settlement-near-me" },
              { name: "How to Settle Loan with Bank", href: "/how-to-settle-loan-with-bank" },
              { name: "Loan Settlement Amount Calculator", href: "/loan-settlement-amount-calculator" },
              { name: "Negotiation Steps Strategy", href: "/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender" },
              { name: "Home Loan Settlement Lawyer", href: "/best-lawyer-for-home-loan-settlement" },
              { name: "EMI Default Consequences", href: "/what-happens-if-loan-emi-not-paid" },
              { name: "Loan Settlement Process", href: "/loan-settlement-process-in-india" },
              { name: "Loan Settlement Rules", href: "/loan-settlement-rules-india" },
              { name: "Gold Loan Auction Settlement", href: "/gold-loan-settlement-process" },
              { name: "Gold Loan Interest India", href: "/gold-loan-interest-in-india" },
              { name: "Gold Loan Near Me", href: "/gold-loan-near-me" },
              { name: "Legal Help Settlement", href: "/legal-help-for-loan-settlement" },
              { name: "Legal Notice Recovery", href: "/legal-notice-for-loan-recovery" },
              { name: "Working Capital Legal Help", href: "/working-capital-loan-legal-help" },
              { name: "Startup Loan Advisory", href: "/startup-loan-legal-advisory" },
              { name: "Loan Dispute Resolution", href: "/loan-parties-dispute-resolution" },
              { name: "Foreclosure Assistance", href: "/loan-default-emi-foreclosure-assistance" },
              { name: "Corporate Loan Matters", href: "/business-corporate-loan-matters" },
              { name: "Cyber Loan Disputes", href: "/digital-online-cyber-loan-disputes" },
              { name: "Post-Settlement Help", href: "/post-loan-settlement-legal-help" },
              { name: "Recovery Freeze Defense", href: "/loan-default-recovery-freeze-defense" },
              { name: "SME Loan Dispute", href: "/SME-loan-dispute-resolution" },
              { name: "Unsanctioned Loan Case", href: "/legal-case-for-loan-sanction-without-consent" },
              { name: "Loan Agreement Review", href: "/loan-agreement-drafting-review" },
              { name: "NBFC Settlement Lawyer", href: "/best-nbfc-loan-settlement-lawyer" },
              { name: "Bad Loan Recovery Strategy", href: "/bad-loan-recovery-strategy" },
              { name: "Microfinance Settlement Lawyer", href: "/best-microfinance-loan-settlement-lawyer" },
              { name: "Non-Closure Relief", href: "/legal-help-for-non-closure-of-settled-loan" },
              { name: "EMI Settlement Lawyer", href: "/best-loan-emi-settlement-lawyer" },
              { name: "Mudra Loan Settlement", href: "/mudra-loan-settlement-legal-help" },
              { name: "Forged Loan Signatures", href: "/dispute-over-forged-loan-signatures" },
              { name: "Payday Loan Settlement", href: "/payday-loan-settlement-lawyer" },
              { name: "Overdue Loan Protection", href: "/overdue-loan-legal-protection" },
              { name: "RBI Recovery Rules 2026", href: "/rbi-new-recovery-guidelines-july-2026" },
              { name: "Bank Legal Notice Guide", href: "/bank-sent-legal-notice-for-loan-what-to-do" },
              { name: "Personal Loan Case Guide", href: "/can-bank-file-case-for-personal-loan" },
              { name: "Credit Card Default Action", href: "/legal-action-for-credit-card-default" },
              { name: "Bank Arbitration Notice", href: "/bank-arbitration-notice-loan" },
              { name: "Bank Recovery Case Guide", href: "/bank-recovery-case-in-court" },
              { name: "Recovery Agent Harassment", href: "/recovery-agents-threatening-me-what-to-do" },
              { name: "Bank Recovery Complaint", href: "/bank-recovery-harassment-complaint" },
              { name: "RBI Recovery Rules", href: "/rbi-rules-for-recovery-agents" },
              { name: "Recovery Agents Home Visit", href: "/can-recovery-agents-come-home" },
              { name: "Family Calling Law", href: "/recovery-agents-calling-family-members-law" },
              { name: "Jail for Loan Default", href: "/can-i-go-to-jail-for-loan-default-in-india" },
              { name: "Police Case Card Debt", href: "/police-case-for-credit-card-debt" },
              { name: "Bank Filed FIR Help", href: "/bank-filed-fir-for-loan-default" },
              { name: "Loan Settlement: Good or Bad?", href: "/is-loan-settlement-a-good-option-for-borrowers" },
              { name: "Blacklisted After Settlement?", href: "/will-banks-blacklist-you-after-loan-settlement" },
              { name: "Can You Get a Loan Again?", href: "/can-you-get-a-loan-again-after-settling-a-previous-loan" },
              { name: "Settle or Repay?", href: "/when-should-you-choose-loan-settlement-instead-of-repayment" },
              { name: "Bank Settlement %", href: "/what-percentage-do-banks-accept-in-loan-settlement" },
              { name: "Choosing a Trustworthy Provider", href: "/how-to-choose-a-trustworthy-debt-settlement-provider" },
              { name: "Trustworthy Agency Near Me", href: "/how-to-find-a-trustworthy-debt-settlement-agency-near-me" },
              { name: "Questions for Debt Consultant", href: "/what-questions-should-i-ask-a-debt-settlement-consultant" },
              { name: "Services for Multiple Creditors", href: "/debt-settlement-services-that-work-with-multiple-creditors" },
              { name: "Minimum Debt Requirements", href: "/what-is-minimun-debt-amount-required-for-settlement-programs" },
              { name: "Business Loan Offers", href: "/debt-settlement-offers-for-business-loans" },
              { name: "Legal Implications of Non-Payment", href: "/are-there-legal-implecations-or-non-payment-during-debt-settlement" },
              { name: "Settlement Timeline Guide", href: "/how-long-does-a-debt-settlement-typically-take" },
              { name: "Fees & Success Rates", href: "/compare-debt-settlement-fees-and-success-rate" },
              { name: "Avoid Settlement Scams", href: "/how-to-avoid-debt-settlement-scams-in-india" }
            ].map((query) => (
              <Link
                key={query.name}
                href={query.href}
                className="text-blue-600 hover:text-blue-800 font-bold text-sm transition-colors duration-200 py-1"
              >
                {query.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-full bg-gray-200 h-px mt-12 mb-6"></div>

        <p className="text-center text-neutral-500 text-sm">
          © 2022 SettleLoans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
