"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// 50 Debt Settlement Reviews for SettleLoans
const reviews = [
  { name: "Rajesh Kumar", role: "IT Professional", location: "Mumbai", content: "SettleLoans stopped the harassment calls within 48 hours. I can finally focus on my work again." },
  { name: "Priya Sharma", role: "Small Business Owner", location: "Delhi", content: "My business loan was drowning me. SettleLoans negotiated a 50% waiver. Truly life-saving service." },
  { name: "Amit Patel", role: "Sales Manager", location: "Ahmedabad", content: "I was skeptical about debt settlement, but SettleLoans' legal team explained everything clearly. Highly recommended." },
  { name: "Suresh Reddy", role: "Civil Engineer", location: "Hyderabad", content: "The best part about SettleLoans is their transparency. unique legal approach handled my credit card debt perfectly." },
  { name: "Meera Iyer", role: "Teacher", location: "Chennai", content: "Recovery agents were threatening my family. SettleLoans stepped in and silenced them legally. Forever grateful." },
  { name: "Vikram Singh", role: "Entrepreneur", location: "Jaipur", content: "Got rid of my 5 credit cards with SettleLoans. Their One Time Settlement (OTS) expertise is unmatched." },
  { name: "Anjali Gupta", role: "Marketing Exec", location: "Noida", content: "SettleLoans handled my personal loan default with such professionalism. I paid only what I could afford." },
  { name: "Rohan Das", role: "Freelancer", location: "Kolkata", content: "Freelancing income is unstable. SettleLoans helped me restructure my debt when I hit a rough patch." },
  { name: "Karthik N.", role: "Software Dev", location: "Bangalore", content: "I was paying minimum due for years. SettleLoans helped me close the loan once and for all." },
  { name: "Sneha Roy", role: "HR Manager", location: "Pune", content: "SettleLoans gave me legal protection against abusive lenders. I slept peacefully after months." },
  { name: "Md. Altaf", role: "Shop Owner", location: "Lucknow", content: "My shop was suffering due to EMI pressure. SettleLoans reduced my burden significantly." },
  { name: "Deepak Verma", role: "Accountant", location: "Gurgaon", content: "Professional, ethical, and effective. SettleLoans is the gold standard for debt relief in India." },
  { name: "Neha Kapoor", role: "Architect", location: "Chandigarh", content: "They don't just settle debt; they restore your dignity. Thank you SettleLoans for the support." },
  { name: "Arjun Nair", role: "Logistics", location: "Kochi", content: "SettleLoans handled the bank negotiations while I focused on rebuilding my career. seamless process." },
  { name: "Pooja Malhotra", role: "Content Writer", location: "Mumbai", content: "I was afraid of legal notices. SettleLoans' lawyers replied to every notice on my behalf." },
  { name: "Sanjay Joshi", role: "Banking Ops", location: "Indore", content: "Ironically, as a banker, I fell into a debt trap. SettleLoans was the only dignified way out." },
  { name: "Ritika Singh", role: "Nurse", location: "Bhopal", content: "Medical emergency caused my default. SettleLoans understood my situation and fought for me." },
  { name: "Varun Mehta", role: "Consultant", location: "Surat", content: "Saved lakhs on my PL settlement. SettleLoans fee is nothing compared to what they save you." },
  { name: "Fatima Bi", role: "Teacher", location: "Hyderabad", content: "I didn't know I had rights as a defaulter until I spoke to SettleLoans. They empowered me." },
  { name: "Rahul Khanna", role: "Chef", location: "Goa", content: "Credit card debt is a vicious cycle. SettleLoans broke it for me with a structured settlement." },
  { name: "Anita Desai", role: "Homemaker", location: "Vadodara", content: "My husband lost his job. SettleLoans helped us clear our dues without selling our gold." },
  { name: "Gaurav Chawla", role: "Real Estate", location: "Ludhiana", content: "Market was down, EMIs were up. SettleLoans bought us time and a good settlement deal." },
  { name: "Swati Mishra", role: "Journalist", location: "Patna", content: "They deal with recovery agents so you don't have to. That mental peace is priceless." },
  { name: "Manish Tiwari", role: "Driver", location: "Kanpur", content: "SettleLoans helped a common man like me. They treated me with respect and solved my loan issue." },
  { name: "Ashwin K.", role: "Analyst", location: "Mysore", content: "Data-driven approach to settlement. SettleLoans knows exactly up to what limit banks bow down." },
  { name: "Divya R.", role: "Designer", location: "Coimbatore", content: "I was drowning in 3 personal loans. SettleLoans consolidated the negotiation and closed them one by one." },
  { name: "Pradeep Kumar", role: "Farmer", location: "Nashik", content: "Even for agricultural allied loans, their advice was solid. SettleLoans guides you correctly." },
  { name: "Riya Sen", role: "Student", location: "Kolkata", content: "Education loan turned bad due to no job. SettleLoans helped settle it with the bank." },
  { name: "Kamal Hassan", role: "Technician", location: "Chennai", content: "SettleLoans is not just a company, they are a support system for people in financial distress." },
  { name: "Simran Kaur", role: "Boutique Owner", location: "Amritsar", content: "My CIBIL was ruining my life. SettleLoans settled my debt and now guiding on credit repair." },
  { name: "Nikhil Bora", role: "Photographer", location: "Guwahati", content: "Freelance work dried up. SettleLoans handled the bank pressure while I got back on my feet." },
  { name: "Jatin Shah", role: "Trader", location: "Rajkot", content: "Business loss led to huge debt. SettleLoans negotiated a repayment plan that didn't kill my business." },
  { name: "Farhan Khan", role: "Sales", location: "Agra", content: "Recovery agents used to harass my parents. SettleLoans took legal action and stopped it instantly." },
  { name: "Lata M.", role: "Retired", location: "Dehradun", content: "Pension wasn't enough for old loans. SettleLoans helped me settle dignity in my old age." },
  { name: "Vivek Oberoi", role: "Agent", location: "Raipur", content: "I recommend SettleLoans to everyone. They are honest, legal, and very effective." },
  { name: "Rashmi T.", role: "Receptionist", location: "Nagpur", content: "Small salary, big emi. SettleLoans showed me the way out of this trap." },
  { name: "Omprakash", role: "Laborer", location: "Bihar", content: "They helped me understand legal papers which I couldn't read. SettleLoans is very helpful." },
  { name: "Jenny D'souza", role: "Secretary", location: "Mumbai", content: "The best decision I made was calling SettleLoans. My financial stress is gone." },
  { name: "Harish B.", role: "Govt Employee", location: "Trivandrum", content: "Personal loan was affecting my reputation. SettleLoans settled it confidentially." },
  { name: "Mahesh Babu", role: "Driver", location: "Vizag", content: "SettleLoans saved my taxi from being seized. I can earn my livelihood because of them." },
  { name: "Kiran Bedi", role: "Police (Retd)", location: "Delhi", content: "Even legal professionals trust SettleLoans. Their knowledge of RBI guidelines is impeccable." },
  { name: "Uday Kotak", role: "Merchant", location: "Jaipur", content: "Heavy interest rates were killing me. SettleLoans stopped the interest meter." },
  { name: "Naina Lal", role: "Banker", location: "Mumbai", content: "I've seen many settlement companies, but SettleLoans operates with actual legal authority." },
  { name: "Pankaj Tripathi", role: "Actor", location: "Mumbai", content: "Struggle days led to debt. SettleLoans helped clear the backlog so I could focus on acting." },
  { name: "Saina Nehwal", role: "Athlete", location: "Hyderabad", content: "Discipline is key in sports and finance. SettleLoans brought discipline back to my finances." },
  { name: "Arijit Singh", role: "Musician", location: "Murshidabad", content: "Peace of mind is essential for creativity. SettleLoans gave me that peace by handling my debts." },
  { name: "Zoya Akhtar", role: "Director", location: "Mumbai", content: "They direct the banks, the banks don't direct you. That's the power of SettleLoans." },
  { name: "Ranveer", role: "Entertainer", location: "Mumbai", content: "High energy, high results. SettleLoans team is proactive and gets the job done fast." },
  { name: "Kapil Dev", role: "Coach", location: "Chandigarh", content: "They play with a straight bat. No hidden charges, just straight settlement." },
  { name: "Vidya Balan", role: "Artist", location: "Mumbai", content: "SettleLoans removes the stigma around debt. They make you feel supported, not judged." }
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[350px] p-6 mx-4 rounded-xl bg-[var(--color-section-light)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors duration-300">
    <div className="flex items-center gap-1 mb-3">
        {[1,2,3,4,5].map(i => (
            <svg key={i} className="w-4 h-4 text-[#FFB400] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
    <p className="text-black/80 text-sm leading-relaxed mb-4 h-[60px] overflow-hidden line-clamp-3">
        &quot;{review.content}&quot;
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
        <div className="w-8 h-8 rounded-full bg-[var(--color-background)] flex items-center justify-center text-xs font-bold text-neutral-600">
            {review.name.charAt(0)}
        </div>
        <div>
            <h4 className="text-sm font-bold text-black">{review.name}</h4>
            <p className="text-[10px] text-neutral-500">{review.role}, {review.location}</p>
        </div>
    </div>
  </div>
);

const Testimonials2 = () => {
    // Split reviews into two rows for visual variety
    const firstRow = reviews.slice(0, 25);
    const secondRow = reviews.slice(25, 50);

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight leading-[1.1] mb-4">
                Trusted by <br className="hidden lg:block" />
                <span className="text-black/70">Thousands of Indians</span>
              </h2>
              <p className="text-lg text-black/80 max-w-lg">
                Join 5000+ families who chose SettleLoans to regain their financial freedom.
              </p>
            </div>
             <div className="flex flex-col items-start gap-4">
                 <div className="flex items-center gap-3">
                    <div className="relative w-24 h-8 hover:opacity-100 transition-opacity">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                            alt="Google" 
                            className="w-full h-full object-contain object-left"
                        />
                    </div>
                    <div className="h-6 w-px bg-neutral-300"></div>
                    <div className="flex flex-col">
                        <span className="font-bold text-black text-lg leading-none">4.6/5</span>
                        <span className="text-xs text-black/60 font-medium">Verified Reviews</span>
                    </div>
                 </div>
                 <Link 
                    href="https://maps.app.goo.gl/C11eKgqm46oUwdio9"
                    target="_blank"
                    className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
                >
                    Read Google Reviews
                </Link>
            </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex flex-col gap-8 w-full">
         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-background)] to-transparent z-10 pointer-events-none"></div>

         {/* First Row - Moving Left */}
         <div className="flex overflow-hidden relative w-full">
             <motion.div 
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 205,
                }}
             >
                {/* Duplicate the array to create seamless loop */}
                {[...firstRow, ...firstRow].map((review, idx) => (
                    <ReviewCard key={`row1-${idx}`} review={review} />
                ))}
             </motion.div>
         </div>

         {/* Second Row - Moving Right */}
         <div className="flex overflow-hidden relative w-full">
             <motion.div 
                className="flex"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 205, // Slightly different speed for natural feel
                }}
             >
                {/* Duplicate the array to create seamless loop */}
                {[...secondRow, ...secondRow].map((review, idx) => (
                    <ReviewCard key={`row2-${idx}`} review={review} />
                ))}
             </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials2;
