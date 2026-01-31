"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false);

  // Form State for Mobile
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    state: '',
    totalPersonalLoanDues: '',
    totalCreditCardDues: '',
    monthlyIncome: '',
    setupFee: '',
    recoveryPressure: '',
    legalNotice: '',
    queries: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          collectionName: 'submissions' // Keep the Hero form submissions in 'submissions'
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      sessionStorage.setItem('formSubmitted', 'true');
      router.push('/thank-you');

      setSubmitStatus('success');
      setTimeout(() => setIsFixed(false), 2000); // Close form on success
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        state: '',
        totalPersonalLoanDues: '',
        totalCreditCardDues: '',
        monthlyIncome: '',
        setupFee: '',
        recoveryPressure: '',
        legalNotice: '',
        queries: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#2E2E2E] min-h-screen md:min-h-0 md:pt-[18vh] transition-colors duration-700 flex flex-col">
      {/* Bubble Effect */}
      <div 
        className={`
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[200vmax] h-[200vmax] bg-[#1F5EFF] rounded-full 
          transition-transform duration-1000 ease-in-out pointer-events-none z-0
          ${isFixed ? 'scale-100' : 'scale-0'}
        `}
        style={{ transformOrigin: 'center' }}
      />

      {/* 
        =========================================
        DESKTOP HERO (MD AND UP)
        =========================================
      */}
      <div className="hidden md:block relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-12 pb-0">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="relative w-full">
            <h1 
              className={`
                max-w-5xl mx-auto font-black leading-[1.1] tracking-tight text-[#DEDEDE]
                text-[clamp(50px,7.5vh,75px)]
                transition-all duration-700 ease-in-out
              `}
              style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
            >
              {isFixed ? "Settle Your Loans with Confidence and Clarity" : "Facing pressure from lenders or recovery agents?"}
            </h1>
          </div>
          
          <p 
            className="max-w-3xl font-normal leading-[1.07] text-[#DEDEDE] transition-opacity duration-700
              text-[clamp(22px,3vh,27px)]"
            style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
          >
            {isFixed 
              ? "We help you negotiate with lenders and resolve outstanding loans through a transparent, guided, and lawful settlement process."
              : "You don’t have to navigate legal notices and financial stress alone. We help you find a structured, lawful way forward."}
          </p>
          
          <div className="flex flex-col items-center gap-8 w-full">
            <div className="relative z-20 transition-transform duration-300">
              {!isFixed && (
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl animate-pulse-glow -z-10" />
              )}
              <button
                onClick={() => setIsFixed(!isFixed)}
                className={`relative inline-flex items-center h-20 w-50 rounded-full transition-all duration-300 ease-in-out focus:outline-none border-1 
                  ${isFixed ? 'bg-[#2E2E2E] border-[#2E2E2E]' : 'bg-[#007AFF] border-[#007AFF]'}
                `}
              >
                <span className="sr-only">Fix it toggle</span>
                {!isFixed && (
                  <span 
                    className={`absolute transition-all duration-300 ease-in-out font-black text-2xl text-white right-8`}
                  >
                    FIX IT
                  </span>
                )}
                <div
                  className={`
                    absolute top-[6px] left-[6px] h-16 w-16 rounded-full bg-white transition-transform duration-500 ease-in-out shadow-sm
                    ${isFixed ? 'translate-x-[120px]' : 'translate-x-0'}
                    ${!isFixed ? 'animate-amoeba' : ''}
                  `}
                />
              </button>
            </div>

            <div className="grid grid-cols-1 w-full mx-auto px-8 -mt-[9vh] place-items-center">
              <div 
                className={`col-start-1 row-start-1 transition-opacity duration-700 w-full flex justify-center ${isFixed ? 'opacity-0' : 'opacity-90'}`}
              >
                <Image
                  src="/Dark2.svg"
                  alt="Loan pressure illustration"
                  width={1900}
                  height={1080}
                  className="h-auto w-auto max-h-[50vh] object-contain"
                  priority
                />
              </div>
              <div 
                className={`col-start-1 row-start-1 transition-opacity duration-700 w-full flex justify-center ${isFixed ? 'opacity-90' : 'opacity-0'}`}
              >
                <Image
                  src="/Blue2.svg"
                  alt="Loan settlement illustration"
                  width={1900}
                  height={1080}
                  className="h-auto w-auto max-h-[50vh] object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =========================================
        MOBILE HERO (BELOW MD)
        =========================================
      */}
      <div className="md:hidden relative z-10 w-full px-4 pt-24 pb-12">
        <div className="flex flex-col items-center gap-8">
          {!isFixed ? (
            /* Main Content View (Default) */
            <>
              {/* Bento.svg at the top */}
              <div className="w-full flex justify-center px-4">
                <Image 
                  src="/Bento.svg" 
                  alt="Process Grid" 
                  width={400} 
                  height={400} 
                  className="w-full max-w-[340px] h-auto object-contain"
                  priority
                />
              </div>

              <div className="flex flex-col items-center text-center space-y-6">
                <h1 
                  className="font-black leading-[1.1] text-[#DEDEDE] text-4xl"
                  style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
                >
                  Facing pressure from lenders or recovery agents?
                </h1>
                <p 
                  className="font-normal leading-normal text-[#DEDEDE] text-lg px-2"
                  style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
                >
                  You don’t have to navigate legal notices and financial stress alone. We help you find a structured, lawful way forward.
                </p>
                
                {/* FIX IT Toggle */}
                <div className="relative z-20 mt-4">
                  <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl animate-pulse-glow -z-10" />
                  <button
                    onClick={() => setIsFixed(true)}
                    className="relative inline-flex items-center h-16 w-40 rounded-full bg-[#007AFF] border-2 border-[#007AFF] transition-all duration-300 focus:outline-none"
                  >
                    <span className="absolute font-black text-xl text-white right-6">FIX IT</span>
                    <div className="absolute top-[4px] left-[4px] h-12 w-12 rounded-full bg-white shadow-sm animate-amoeba" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            /* Form View (Active) */
            <div className="w-full flex flex-col items-center gap-6">
              <h1 
                className="font-black leading-[1.1] text-white text-3xl text-center"
                style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
              >
                Settle Your Loans with Confidence and Clarity
              </h1>
              
              {/* White Form Container */}
              <div className="w-full bg-white rounded-3xl p-6 shadow-2xl relative">
                {/* Close Button (Cross Sign) */}
                <button 
                  onClick={() => setIsFixed(false)}
                  className="absolute top-4 right-4 p-2 text-[#6D6D6D] hover:text-[#2E2E2E] transition-colors"
                  aria-label="Close form"
                >
                  <X size={24} />
                </button>

                <div className="mb-6 pr-8">
                  <h2 className="text-2xl font-bold text-[#2E2E2E]" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                    Breathe Easy.
                  </h2>
                  <h2 className="text-2xl font-bold text-[#6D6D6D]" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                    Let’s Move Forward.
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
                  />
                  
                  <div className="grid grid-cols-1 gap-5">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
                    />
                  </div>

                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#6D6D6D] appearance-none"
                  >
                    <option value="" disabled hidden>Select your state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>

                  <select
                    name="totalPersonalLoanDues"
                    value={formData.totalPersonalLoanDues}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#6D6D6D] appearance-none"
                  >
                    <option value="" disabled hidden>Total personal loan dues</option>
                    <option value="No Dues">No Dues</option>
                    <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                    <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
                    <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
                    <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                  </select>

                  <select
                    name="totalCreditCardDues"
                    value={formData.totalCreditCardDues}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#6D6D6D] appearance-none"
                  >
                    <option value="" disabled hidden>Total credit card dues</option>
                    <option value="No Dues">No Dues</option>
                    <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
                    <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
                    <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
                    <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                  </select>

                  <select
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#6D6D6D] appearance-none"
                  >
                    <option value="" disabled hidden>Your monthly income</option>
                    <option value="below-25k">Below ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1l">₹50,000 - ₹1 Lakh</option>
                    <option value="above-1l">Above ₹1 Lakh</option>
                  </select>

                  <select
                    name="setupFee"
                    value={formData.setupFee}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#6D6D6D] appearance-none"
                  >
                    <option value="" disabled hidden>Can you arrange ₹2,000—₹3,000?</option>
                    <option value="yes">Yes, I can arrange</option>
                    <option value="no">No, I need more time</option>
                  </select>

                  {/* Radios Container */}
                  <div className="grid grid-cols-1 gap-4 py-2">
                    {/* Recovery Pressure Radio */}
                    <div className="space-y-2">
                      <p className="text-sm text-[#6D6D6D]">Are you facing recovery calls or bank pressure?</p>
                      <div className="flex items-center space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="recoveryPressure"
                            value="yes"
                            checked={formData.recoveryPressure === 'yes'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 border-2 rounded-full border-[#6D6D6D] flex items-center justify-center ${formData.recoveryPressure === 'yes' ? 'border-[#1F5EFF]' : ''}`}>
                            {formData.recoveryPressure === 'yes' && <div className="w-2 h-2 bg-[#1F5EFF] rounded-full" />}
                          </div>
                          <span className={`text-sm ${formData.recoveryPressure === 'yes' ? 'text-[#1F5EFF] font-medium' : 'text-[#6D6D6D]'}`}>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="recoveryPressure"
                            value="no"
                            checked={formData.recoveryPressure === 'no'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 border-2 rounded-full border-[#6D6D6D] flex items-center justify-center ${formData.recoveryPressure === 'no' ? 'border-[#1F5EFF]' : ''}`}>
                            {formData.recoveryPressure === 'no' && <div className="w-2 h-2 bg-[#1F5EFF] rounded-full" />}
                          </div>
                          <span className={`text-sm ${formData.recoveryPressure === 'no' ? 'text-[#1F5EFF] font-medium' : 'text-[#6D6D6D]'}`}>No</span>
                        </label>
                      </div>
                    </div>

                    {/* Legal Notice Radio */}
                    <div className="space-y-2">
                      <p className="text-sm text-[#6D6D6D]">Have you received any legal notice?</p>
                      <div className="flex items-center space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="legalNotice"
                            value="yes"
                            checked={formData.legalNotice === 'yes'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 border-2 rounded-full border-[#6D6D6D] flex items-center justify-center ${formData.legalNotice === 'yes' ? 'border-[#1F5EFF]' : ''}`}>
                            {formData.legalNotice === 'yes' && <div className="w-2 h-2 bg-[#1F5EFF] rounded-full" />}
                          </div>
                          <span className={`text-sm ${formData.legalNotice === 'yes' ? 'text-[#1F5EFF] font-medium' : 'text-[#6D6D6D]'}`}>Yes</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer group">
                          <input
                            type="radio"
                            name="legalNotice"
                            value="no"
                            checked={formData.legalNotice === 'no'}
                            onChange={handleChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 border-2 rounded-full border-[#6D6D6D] flex items-center justify-center ${formData.legalNotice === 'no' ? 'border-[#1F5EFF]' : ''}`}>
                            {formData.legalNotice === 'no' && <div className="w-2 h-2 bg-[#1F5EFF] rounded-full" />}
                          </div>
                          <span className={`text-sm ${formData.legalNotice === 'no' ? 'text-[#1F5EFF] font-medium' : 'text-[#6D6D6D]'}`}>No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Queries */}
                  <textarea
                    name="queries"
                    placeholder="Tell us about your situation..."
                    value={formData.queries}
                    onChange={handleChange}
                    rows={2}
                    className="w-full bg-transparent border-b border-[#6D6D6D] py-2 focus:outline-none focus:border-[#1F5EFF] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D] resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1F5EFF] disabled:bg-[#6D6D6D] text-white font-bold py-3.5 rounded-xl text-lg mt-4"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="text-green-600 text-center text-sm font-medium">Thank you! We will contact you soon.</p>
                  )}
                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-center text-sm font-medium">Error submitting. Please try again.</p>
                  )}
                  
                  <button 
                    type="button"
                    onClick={() => setIsFixed(false)}
                    className="w-full text-[#6D6D6D] text-sm font-medium py-2"
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
