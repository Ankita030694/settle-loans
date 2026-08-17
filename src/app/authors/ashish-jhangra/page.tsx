import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ashish Jhangra - Legal & Debt Resolution Professional | AMA Legal Solutions',
  description: 'Ashish Jhangra is a legal and debt resolution professional at AMA Legal Solutions, specializing in personal loan settlement, credit card debt resolution, and recovery harassment.',
};

export default function AshishJhangraProfile() {
  return (
    <div className="bg-[#F8F9FA] min-h-screen py-16">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
          
          <div className="flex flex-col md:flex-row gap-8 items-start mb-10">
            <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 bg-slate-200 relative border-4 border-white shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-[#2D68FF] text-white text-4xl font-bold">
                AJ
              </div>
            </div>
            
            <div className="pt-2">
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Ashish Jhangra</h1>
              <p className="text-lg text-[#2D68FF] font-medium mb-4">Legal and Debt Resolution Professional at AMA Legal Solutions</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold bg-[#0A66C2] text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 prose-li:text-slate-600">
            <p>
              Hi, I'm Ashish, a legal and debt resolution professional at AMA Legal Solutions. I am passionate about helping individuals and businesses overcome financial challenges through legal guidance, debt resolution, and financial recovery solutions.
            </p>
            <p>
              At AMA Legal Solutions, I work closely with clients who are facing financial stress due to personal loans, credit cards, business loans, and recovery-related issues. My role is to understand each client's situation, provide practical legal support, and help them explore lawful debt resolution options while protecting their rights.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-6">My Areas of Expertise</h3>
            <ul className="space-y-3 list-none pl-0">
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Personal Loan & Credit Card Debt Resolution
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Loan Settlement Assistance
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Legal Consultation for Debt-Related Matters
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> RBI Guidelines & Consumer Rights Awareness
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Recovery Agent Harassment Support
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Financial Dispute Resolution
              </li>
              <li className="flex items-center gap-3 m-0">
                <span className="text-[#2D68FF] font-bold">✔</span> Client Relationship Management
              </li>
            </ul>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mt-10 mb-6">
              <p className="m-0 font-medium text-blue-900 italic">
                "I believe that financial difficulties can happen to anyone, and with the right legal guidance and a structured approach, individuals can work toward financial stability and peace of mind."
              </p>
            </div>

            <p>
              My goal is to educate, support, and empower clients by providing ethical, transparent, and professional legal assistance throughout their debt resolution journey.
            </p>
            <p className="font-bold text-slate-900">
              Let's connect and build a future based on trust, compliance, and financial awareness.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link href="/personal-loan-settlement-services" className="text-[#2D68FF] font-bold hover:underline inline-flex items-center gap-2">
              ← Back to Settle Loans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
