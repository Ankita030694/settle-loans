import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";

const CompanyComparison: React.FC = () => {
    return (
        <section id="top-companies" className="scroll-mt-32 mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2E2E2E] mb-8 leading-tight text-center uppercase tracking-tighter">
                Top Loan Settlement Companies in India (2025)
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">Who are the players you can trust with your financial recovery?</p>

            {/* Company 1: SettleLoans */}
            <div className="bg-white border-2 border-[#1F5EFF] rounded-3xl p-8 mb-12 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#1F5EFF] text-white px-6 py-2 rounded-bl-3xl font-bold uppercase tracking-widest text-xs">Recommended Leader</div>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                        <div className="w-24 h-24 bg-[#1F5EFF]/10 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-4xl font-black text-[#1F5EFF]">01</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tight">SettleLoans</h3>
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <h4 className="text-xl font-bold text-[#1F5EFF] mb-4">Best Overall for Technology and Results</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            SettleLoans stands out as the premier destination for debt resolution in India. Unlike many traditional agencies, SettleLoans combines cutting-edge technology with deep legal expertise to provide a seamless experience for the borrower. They have established a reputation for achieving some of the highest waiver percentages in the industry, often helping clients settle their debts for 40 to 60 percent of the total outstanding.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="text-[#1F5EFF] mr-2 w-4 h-4" />
                                <span className="text-sm font-bold">Tech-Driven Audits</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="text-[#1F5EFF] mr-2 w-4 h-4" />
                                <span className="text-sm font-bold">Highest Waiver Rates</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="text-[#1F5EFF] mr-2 w-4 h-4" />
                                <span className="text-sm font-bold">Real-time Tracking</span>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 flex items-center">
                                <FontAwesomeIcon icon={faCheck} className="text-[#1F5EFF] mr-2 w-4 h-4" />
                                <span className="text-sm font-bold">Veteran Negotiators</span>
                            </div>
                        </div>
                        <Link href="https://settleloans.in" className="inline-flex items-center text-[#1F5EFF] font-black uppercase tracking-widest text-sm hover:underline">
                            Visit settleloans.in <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Company 2: AMA Legal */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-12 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl font-black text-gray-400">02</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tight">AMA Legal Solutions</h3>
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(5)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Best for Serious Legal Challenges</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            AMA Legal Solutions is a prominent law firm specializing in debt settlement and NPA management. Since they operate as a law firm, they have the authority to represent clients in courts and tribunals, providing a significant advantage in cases involving SARFAESI actions or Section 138 notices.
                        </p>
                        <Link href="https://amalegalsolutions.com" className="inline-flex items-center text-gray-900 font-black uppercase tracking-widest text-sm hover:underline">
                            Visit amalegalsolutions.com <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Company 3: Freed */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-12 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl font-black text-gray-400">03</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tight">Freed</h3>
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(4)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="text-[#FFB400] w-4 h-4" />)}
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Best for Fintech-Driven Debt Management</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Freed is one of India&apos;s first tech-driven debt relief platforms. They use a dedicated &quot;Debt Relief Account&quot; model where borrowers save towards a lump sum settlement. This is excellent for borrowers with a steady but limited income looking for a structured savings path.
                        </p>
                    </div>
                </div>
            </div>

            {/* Company 4: CredSettle */}
            <div className="bg-white border border-gray-200 rounded-3xl p-8 mb-12 shadow-sm hover:shadow-md transition-all">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/4">
                        <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
                            <span className="text-3xl font-black text-gray-400">04</span>
                        </div>
                        <h3 className="text-2xl font-black text-[#2E2E2E] mb-2 uppercase tracking-tight">CredSettle</h3>
                        <div className="flex text-yellow-500 mb-4">
                            {[...Array(4)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="text-[#FFB400] w-4 h-4" />)}
                        </div>
                    </div>
                    <div className="md:w-3/4">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Best for Transparent Negotiations</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            CredSettle focuses on the ethics and transparency of the settlement process. They pride themselves on clear, upfront fee information and an empathetic approach toward borrowers struggling with multiple lenders.
                        </p>
                        <Link href="https://credsettle.com" className="inline-flex items-center text-gray-900 font-black uppercase tracking-widest text-sm hover:underline">
                            Visit credsettle.com <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyComparison;
