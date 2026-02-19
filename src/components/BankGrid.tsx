import Link from "next/link";
import Image from "next/image";

const banks = [
  {
    name: "HDFC Bank",
    logo: "/banks/37.svg",
    link: "/loan-settlement/hdfc-bank",
    description: "Settle credit cards and personal loans with HDFC Bank."
  },
  {
    name: "Axis Bank",
    logo: "/banks/7.svg",
    link: "/loan-settlement/axis-bank",
    description: "Professional help for Axis Bank debt settlement."
  },
  {
    name: "SBI Bank",
    logo: "/banks/74.svg",
    link: "/loan-settlement/sbi",
    description: "The definitive guide to SBI loan and card settlements."
  },

  {
    name: "ICICI Bank",
    logo: "/banks/40.svg",
    link: "/loan-settlement/icici-bank",
    description: "Expert settlement for ICICI credit cards and loans."
  },
  {
    name: "Kotak Mahindra",
    logo: "/banks/55.svg",
    link: "/loan-settlement/kotak-bank",
    description: "Resolve Kotak credit card and loan debts."
  },
  {
    name: "IDFC First Bank",
    logo: "/banks/42.svg",
    link: "/loan-settlement/idfc-first-bank",
    description: "Strategic settlement for IDFC personal loans."
  },
  {
    name: "RBL Bank",
    logo: "/banks/65.svg",
    link: "/loan-settlement/rbl-bank",
    description: "Professional settlement solutions for RBL Bank debt."
  },
  {
    name: "YES Bank",
    logo: "/banks/83.svg",
    link: "/loan-settlement/yes-bank",
    description: "Expert guidance for YES Bank and J.C. Flowers ARC settlements."
  },
  {
    name: "IndusInd Bank",
    logo: "/banks/46.svg",
    link: "/loan-settlement/indusind-bank",
    description: "Navigate IndusInd personal loans and credit card settlements."
  },
  {
    name: "Kisetsu Saison Finance",
    logo: "/banks/kisetsu.png",
    link: "/loan-settlement/kisetsu-saison-finance",
    description: "Specialized OTS strategies for Credit Saison India app loans."
  },
  {
    name: "Bajaj Finance",
    logo: "/banks/bajaj-finance.png",
    link: "/loan-settlement/bajaj-finance",
    description: "Settle Bajaj Finserv personal loans and SuperCard dues."
  },
  {
    name: "Fibe",
    logo: "/banks/fibe.png",
    link: "/loan-settlement/fibe",
    description: "Expert settlement for Fibe (EarlySalary) personal loans."
  },
  {
    name: "Personal Loan Settlement",
    logo: "/services/personal-loan.svg",
    link: "/what-is-personal-loan-settlement",
    description: "The ultimate guide to understanding personal loan settlement process and RBI rules."
  }
];

export default function BankGrid() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-[#f8faff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-[#004c94]/10 text-[#004c94] text-xs font-bold mb-4 tracking-widest uppercase">
            Bank Wise Settlement
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a202c] mb-6 leading-tight">
            Select Your Bank For <br className="hidden md:block" /> Specialized Settlement
          </h2>
          <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
            Each bank has unique settlement policies and OTS frameworks. Select your bank below to learn the exact step-by-step process we use to settle their debts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {banks.map((bank, i) => (
            <Link 
              key={i} 
              href={bank.link}
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#004c94]/20 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#004c94]/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
              
              <div className="h-16 w-full flex items-center justify-center mb-8 transition-all duration-500 transform group-hover:scale-110">
                <img 
                  src={bank.logo} 
                  alt={bank.name} 
                  className="max-h-12 max-w-[200px] object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-[#1a202c] mb-4 group-hover:text-[#004c94] transition-colors">{bank.name}</h3>
              <p className="text-sm text-[#4a5568] leading-relaxed mb-6">
                {bank.description}
              </p>
              
              <div className="mt-auto flex items-center text-[#ed232a] font-bold text-sm tracking-wide">
                View Settlement Guide
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-[#718096] text-sm font-medium">
            Don't see your bank? We settle loans for almost all major Indian banks and NBFCs. 
            <Link href="/contact" className="ml-2 text-[#ed232a] hover:underline font-bold">Inquire More →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
