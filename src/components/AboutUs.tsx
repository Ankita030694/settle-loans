import React from 'react';

export default function AboutUs() {
  return (
    <section className="py-16 bg-[var(--color-section-light)] border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Introduction & Mission */}
        <div className="text-center max-w-4xl mx-auto mb-12 animate-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-4 tracking-tight">
            India&#39;s Premier <br className="hidden md:block"/>
            <span className="text-[var(--color-secondary)]">Ethical Debt Resolution Service</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
            As the most trusted name in debt settlement across India, we dedicate ourselves to removing the heavy burden of unsecured loans. We empower families and business owners to regain financial stability through legal and effective debt reduction strategies.
          </p>
          <div className="h-0.5 w-16 bg-[var(--color-primary)] mx-auto rounded-full opacity-20"></div>
          <p className="mt-6 text-sm text-gray-500 max-w-2xl mx-auto">
             We go beyond simple negotiation. We execute RBI compliant settlements that legally halt recovery agent harassment and create a dignified, clear roadmap to your debt free life.
          </p>
        </div>

        {/* 2. Social Proof & Media Bar - Monochrome */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 border-y border-[var(--color-border)] bg-white py-8 px-6 lg:px-12 items-center">
            
            {/* Google Reviews */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-2 group">
               <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-black fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 ))}
               </div>
               <div className="font-bold text-xl text-black">4.8/5 <span className="font-normal text-gray-500 text-sm">Customer Rating</span></div>
               <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-5.98l.98-4.06c.05-.2.02-.4-.08-.58-.1-.17-.28-.28-.48-.28H9.3c-.3 0-.58.17-.7.44L4.35 15.9c-.06.13-.05.27.02.4.08.13.22.2.38.2H11l-.98 4.06c-.05.2-.02.4.08.58.1.17.28.28.48.28H17c.3 0 .58-.17.7-.44l4.25-9.25c.06-.13.05-.27-.02-.4-.08-.13-.22-.2-.38-.2z"/></svg> 
                  Google Reviews
               </div>
               <div className="text-xs text-gray-400">Trusted by 5000+ Indians</div>
            </div>

            {/* Media Separator - Desktop */}
            <div className="hidden lg:block w-px h-16 bg-neutral-200 mx-auto"></div>

            {/* Media Logos */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Featured In Major Finance News</p>
                <div className="flex flex-wrap justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-serif font-bold text-xl text-black">Financial Express</span>
                    <span className="font-serif font-bold text-xl text-black">Mint</span>
                    <span className="font-serif font-bold text-xl text-black">Economic Times</span>
                </div>
            </div>

            {/* Media Separator - Desktop */}
            <div className="hidden lg:block w-px h-16 bg-neutral-200 mx-auto"></div>

             {/* Trustpilot Reviews */}
             <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-2 group">
               <div className="flex items-center gap-1">
                 <div className="bg-[#00b67a] p-0.5 rounded-sm"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                 <div className="bg-[#00b67a] p-0.5 rounded-sm"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                 <div className="bg-[#00b67a] p-0.5 rounded-sm"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                 <div className="bg-[#00b67a] p-0.5 rounded-sm"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
                 <div className="bg-[#00b67a] p-0.5 rounded-sm"><svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg></div>
               </div>
               <div className="font-bold text-xl text-black">4.7/5 <span className="font-normal text-gray-500 text-sm">Excellent</span></div>
               <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <span className="text-black font-bold">Trustpilot</span> Verified
               </div>
               <div className="text-xs text-gray-400">High Success Rate</div>
            </div>

        </div>

        {/* 3. The Timeline Story */}
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
             <h3 className="text-2xl font-bold text-black mb-2">The SettleLoans Journey: Fighting For You</h3>
             <p className="text-sm text-gray-500">A timeline of empowering Indian borrowers towards freedom.</p>
          </div>

          <div className="relative">
             {/* Vertical Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-neutral-200 hidden md:block"></div>

             <div className="space-y-8">
               
               {/* 2025 */}
               <TimelineItem 
                 year="2025" 
                 title="Your New Financial Chapter"
                 content="We are now 100% focused on securing your future throughout this year. Our mission is to provide the final legal resolution that clears your debt history and restores your peace of mind forever."
                 align="right"
               />

               {/* 2024 */}
               <TimelineItem 
                 year="2024" 
                 title="Pan India Expansion"
                 content="We scaled our legal operations to reach every state in India to ensure that no borrower has to face recovery harassment alone, regardless of their location."
                 align="left"
               />

               {/* 2023 */}
               <TimelineItem 
                 year="2023" 
                 title="Setting Industry Standards"
                 content="We established new benchmarks for negotiation success and client protection, becoming the gold standard for ethical debt settlement in the country."
                 align="right"
               />

               {/* 2022 */}
               <TimelineItem 
                 year="2022" 
                 title="Strengthening Legal Shields"
                 content="We solidified our partnerships with consumer court lawyers to provide bulletproof protection for our clients against unlawful recovery tactics."
                 align="left"
               />

               {/* 2021 */}
               <TimelineItem 
                 year="2021" 
                 title="The Inception"
                 content="SettleLoans was founded with a single powerful vision. To fight for the rights of the common borrower and bring dignity back to the debt resolution process."
                 align="right"
               />

             </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ year, title, content, align }: { year: string, title: string, content: string, align: 'left' | 'right' }) {
  const isRight = align === 'right';
  
  return (
    <div className={`flex flex-col md:flex-row items-center justify-between group ${isRight ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Content Side */}
      <div className={`w-full md:w-[45%] mb-4 md:mb-0 ${isRight ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
        <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
           <span className="inline-block px-2.5 py-0.5 rounded-full bg-black text-white text-[10px] font-bold mb-2">{year}</span>
           <h4 className="text-lg font-bold text-black mb-1">{title}</h4>
           <p className="text-gray-600 text-xs leading-relaxed">{content}</p>
           
           {/* Arrow for Desktop */}
           <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white border-t border-r border-neutral-200 rotate-45 ${isRight ? '-left-1.5 border-t-0 border-r-0 border-b border-l' : '-right-1.5'}`}></div>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-black ring-4 ring-neutral-100 hidden md:block z-10"></div>

      {/* Empty Side for Balance */}
      <div className="w-full md:w-[45%]"></div>
      
    </div>
  );
}
