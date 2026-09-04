import Link from 'next/link';
import Image from 'next/image';

export default function CompanySection() {
  return (
    <section className="mt-8 mb-8 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm max-w-3xl mx-auto">
      {/* Top Information Section */}
      <div className="p-5 md:p-6 pb-2">
        {/* Company Logo */}
        <div className="mb-4 flex justify-center md:justify-start">
          <Image 
            src="/logo/logo.svg" 
            alt="Settle Loan" 
            width={140} 
            height={40} 
            className="h-9 w-auto"
          />
        </div>

        {/* Company Description */}
        <p className="text-slate-600 leading-relaxed text-sm mb-6 text-center md:text-left">
          Settle Loan is India's trusted debt relief and loan settlement platform. We help borrowers overcome financial distress by negotiating with banks and NBFCs to legally settle personal loans and credit card debts. With our transparent, performance-based approach, you can achieve debt freedom and regain your financial peace of mind.
        </p>

        {/* Media Mentions */}
        <div className="text-center mt-6 mb-4">
          <div className="text-base font-bold text-slate-800 mb-4">Media Mentions</div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 items-center opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {/* CSS-Recreated Logos so they look like images */}
            <div className="h-8 flex items-center justify-center font-serif font-bold text-xl tracking-tighter text-slate-800">The Times</div>
            <div className="h-8 flex items-center justify-center font-sans font-black text-lg tracking-tight text-slate-900"><span className="text-slate-900">ENTR</span><span className="text-orange-500">A</span><span className="text-slate-900">CKR</span></div>
            <div className="h-8 flex items-center justify-center bg-slate-900 text-white font-bold text-[9px] px-2 py-1 leading-tight text-left">EXPRESS<br/>COMPUTER</div>
            <div className="h-8 flex items-center justify-center font-sans font-semibold text-sm tracking-wide text-slate-800">Finance Today</div>
          </div>
        </div>
      </div>

      {/* Bottom Solutions Section */}
      <div className="bg-slate-50 p-5 md:p-6 border-t border-slate-100">
        <div className="text-lg font-bold text-[#1F5EFF] mb-4">Our Solutions:</div>
        
        {/* Solutions Grid */}
        <div className="flex flex-col gap-3">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link 
              href="/personal-loan-settlement" 
              className="flex-1 flex items-center justify-center text-center p-3 rounded-lg border border-[#1F5EFF] text-[#1F5EFF] hover:bg-[#1F5EFF] hover:text-white transition-all duration-200 font-semibold text-sm bg-white"
            >
              Settle your loans
            </Link>
            <Link 
              href="/personal-loan-negotiation" 
              className="flex-1 flex items-center justify-center text-center p-3 rounded-lg border border-[#1F5EFF] text-[#1F5EFF] hover:bg-[#1F5EFF] hover:text-white transition-all duration-200 font-semibold text-sm bg-white"
            >
              Reduce your EMIs
            </Link>
            <Link 
              href="/personal-loan-debt-settlement" 
              className="flex-1 flex items-center justify-center text-center p-3 rounded-lg border border-[#1F5EFF] text-[#1F5EFF] hover:bg-[#1F5EFF] hover:text-white transition-all duration-200 font-semibold text-sm bg-white"
            >
              Eliminate your loans
            </Link>
          </div>
          
          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-3">
            <Link 
              href="/personal-loan-recovery-harassment" 
              className="flex-1 flex items-center justify-center text-center p-3 rounded-lg border border-[#1F5EFF] text-[#1F5EFF] hover:bg-[#1F5EFF] hover:text-white transition-all duration-200 font-semibold text-sm bg-white"
            >
              Support against Harassment
            </Link>
            <Link 
              href="/personal-loan-settlement-cibil-impact" 
              className="flex-1 flex items-center justify-center text-center p-3 rounded-lg border border-[#1F5EFF] text-[#1F5EFF] hover:bg-[#1F5EFF] hover:text-white transition-all duration-200 font-semibold text-sm bg-white"
            >
              Improve your Credit Score
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
