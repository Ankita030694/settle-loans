"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    debtAmount: '',
    monthlyIncome: '',
    setupFee: '',
    recoveryPressure: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add submission logic here
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-end overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact-bg(1).png"
          alt="Contact Background"
          fill
          className="object-cover object-left"
          priority
        />
      </div>

      {/* Form Container */}
      <div className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-3xl lg:mr-12 xl:mr-24">
        <div className="mb-8">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] text-[#2E2E2E]" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
            Breathe Easy.
          </h2>
          <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] text-[#6D6D6D]" style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
            Let’s Move Forward.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
              />
            </div>
          </div>

          {/* Address */}
          <div className="relative">
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Total Debt Amount */}
            <div className="relative">
              <select
                name="debtAmount"
                value={formData.debtAmount}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
              >
                <option value="" disabled>Total debt amount</option>
                <option value="below-5">Below ₹5 Lakhs</option>
                <option value="5-10">₹5 - ₹10 Lakhs</option>
                <option value="10-25">₹10 - ₹25 Lakhs</option>
                <option value="above-25">Above ₹25 Lakhs</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {/* Monthly Income */}
            <div className="relative">
              <select
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
              >
                <option value="" disabled>Your monthly income</option>
                <option value="below-25k">Below ₹25,000</option>
                <option value="25k-50k">₹25,000 - ₹50,000</option>
                <option value="50k-1l">₹50,000 - ₹1 Lakh</option>
                <option value="above-1l">Above ₹1 Lakh</option>
              </select>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Setup Fee Arrangement */}
          <div className="relative">
            <select
              name="setupFee"
              value={formData.setupFee}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
            >
              <option value="" disabled>Can you arrange ₹2,000—₹3,000 to begin the process?</option>
              <option value="yes">Yes, I can arrange</option>
              <option value="no">No, I need more time</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Recovery Pressure Radio */}
          <div className="space-y-3">
            <p className="text-base text-[#6D6D6D]">Are you currently facing recovery calls or bank pressure?</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="recoveryPressure"
                    value="yes"
                    checked={formData.recoveryPressure === 'yes'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full border-[#6D6D6D] group-hover:border-[#2E2E2E] transition-colors flex items-center justify-center ${formData.recoveryPressure === 'yes' ? 'border-[#2E2E2E]' : ''}`}>
                    {formData.recoveryPressure === 'yes' && <div className="w-2.5 h-2.5 bg-[#2E2E2E] rounded-full" />}
                  </div>
                </div>
                <span className={`text-base transition-colors ${formData.recoveryPressure === 'yes' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>Yes</span>
              </label>

              <label className="flex items-center space-x-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="recoveryPressure"
                    value="no"
                    checked={formData.recoveryPressure === 'no'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full border-[#6D6D6D] group-hover:border-[#2E2E2E] transition-colors flex items-center justify-center ${formData.recoveryPressure === 'no' ? 'border-[#2E2E2E]' : ''}`}>
                    {formData.recoveryPressure === 'no' && <div className="w-2.5 h-2.5 bg-[#2E2E2E] rounded-full" />}
                  </div>
                </div>
                <span className={`text-base transition-colors ${formData.recoveryPressure === 'no' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1F5EFF] hover:bg-[#1648CC] text-white font-bold py-4 rounded-xl text-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
