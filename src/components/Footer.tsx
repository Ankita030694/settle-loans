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
              <Link href="/ignoring-calls-of-recovery-agent" className='text-blue-600 hover:text-blue-800 text-base'>Ignoring Recovery Calls?</Link>

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
              { name: "Noida", href: "/loan-settlement/noida" },
              { name: "Odisha", href: "/loan-settlement/odisha" },
              { name: "Puducherry", href: null },
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

        <div className="w-full bg-gray-200 h-px mt-12 mb-6"></div>

        <p className="text-center text-neutral-500 text-sm">
          © 2022 SettleLoans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
