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
            <div className="relative w-36 h-36 mb-5">
               <Image 
                  src="/logo/logo.svg" 
                  alt="SettleLoans Logo" 
                  fill
                  className="object-contain object-left"
               />
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed font-normal -mt-10">
              SettleLoans is a digital debt resolution platform that helps individuals and businesses negotiate and settle loans with banks and lenders, simplifying the legal and financial process while reducing recovery stress through transparent, ethical, and professional support across credit cards, personal, business, vehicle, and secured loans.
            </p>

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
              <Link href="/faqs/how-to-settle-loan" className="text-blue-600 hover:text-blue-800 text-base">How to Settle Loan</Link>
              <Link href="/faqs/ots-full-form" className="text-blue-600 hover:text-blue-800 text-base">OTS Full Form</Link>
              <Link href="/faqs/how-to-settle-debt-for-less" className="text-blue-600 hover:text-blue-800 text-base">Settle Debt for Less</Link>
            </div>
          </div>

          {/* Column 3: Our Offices */}
          <div className="flex flex-col gap-4 w-full lg:w-auto">
             <h3 className="text-xl font-bold text-gray-900 mb-2">Our Offices</h3>
             <div className="flex flex-col gap-3">
               <Link href="/loan-settlement/delhi" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Delhi</Link>
               <Link href="/loan-settlement/noida" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Noida</Link>
               <Link href="/loan-settlement/gurgaon" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Gurugram</Link>
               <Link href="/loan-settlement/pune" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Pune</Link>
               <Link href="/loan-settlement/mumbai" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Mumbai</Link>
               <Link href="/loan-settlement/chennai" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Chennai</Link>
               <Link href="/loan-settlement/bengaluru" className="text-blue-600 hover:text-blue-800 text-base cursor-default">Bengaluru</Link>
               <Link href="/loan-settlement/karnataka" className="text-blue-600 hover:text-blue-800 text-base">Karnataka</Link>
               <Link href="/loan-settlement/west-bengal" className="text-blue-600 hover:text-blue-800 text-base">West Bengal</Link>
               <Link href="/loan-settlement/tamil-nadu" className="text-blue-600 hover:text-blue-800 text-base">Tamil Nadu</Link>
               <Link href="/loan-settlement/uttar-pradesh" className="text-blue-600 hover:text-blue-800 text-base">Uttar Pradesh</Link>
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

        <div className="w-full bg-gray-200 h-px mt-12 mb-6"></div>

        <p className="text-center text-neutral-500 text-sm">
          © 2022 SettleLoans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
