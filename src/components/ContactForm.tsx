"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface ContactFormProps {
  variant?: 'section' | 'simple';
  collectionName?: string;
  onCancel?: () => void;
  showCloseButton?: boolean;
}

export default function ContactForm({ 
  variant = 'section', 
  collectionName = 'ContactPageForm',
  onCancel,
  showCloseButton = false
}: ContactFormProps) {
  const router = useRouter();
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
    let { name, value } = e.target;

    // Apply strict filtering for Name and Phone
    if (name === 'fullName') {
      value = value.replace(/[^a-zA-Z\s]/g, '');
    } else if (name === 'phone') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    // Validation checks
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (formData.email && !validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          collectionName: collectionName
        }),
      });

      if (!response.ok) throw new Error('Failed to submit');

      sessionStorage.setItem('formSubmitted', 'true');
      router.push('/thank-you');
      
      setSubmitStatus('success');
      if (onCancel) setTimeout(onCancel, 2000);
      
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

  const formContent = (
    <div className={`relative ${variant === 'section' ? 'w-full max-w-xl bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-3xl lg:mr-12 xl:mr-24' : 'w-full bg-white rounded-3xl p-6 shadow-2xl relative'}`}>
      {showCloseButton && (
        <button 
          onClick={onCancel}
          className="absolute top-4 right-4 p-2 text-[#6D6D6D] hover:text-[#2E2E2E] transition-colors"
          aria-label="Close form"
        >
          <X size={24} />
        </button>
      )}

      <div className={`${variant === 'section' ? 'mb-8' : 'mb-6 pr-8'}`}>
        <h2 className={`${variant === 'section' ? 'text-[32px] md:text-[48px]' : 'text-2xl'} font-bold leading-[1.1] text-[#2E2E2E]`} style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          Breathe Easy.
        </h2>
        <h2 className={`${variant === 'section' ? 'text-[32px] md:text-[48px]' : 'text-2xl'} font-bold leading-[1.1] text-[#6D6D6D]`} style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
          Let’s Move Forward.
        </h2>
      </div>

      <form onSubmit={handleSubmit} className={`${variant === 'section' ? 'space-y-6' : 'space-y-5'}`}>
        {/* Full Name */}
        <div className="relative">
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D]`}
          />
        </div>

        <div className={`grid grid-cols-1 ${variant === 'section' ? 'md:grid-cols-2 gap-6' : 'gap-5'}`}>
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

        {/* State */}
        <div className="relative">
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className={`grid ${variant === 'section' ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-2 gap-4'}`}>
          {/* Total Personal Loan Dues */}
          <div className="relative">
            <select
              name="totalPersonalLoanDues"
              value={formData.totalPersonalLoanDues}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
            >
              <option value="" disabled hidden>Personal loan dues</option>
              <option value="No Dues">No Dues</option>
              <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
              <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
              <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
              <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {/* Total Credit Card Dues */}
          <div className="relative">
            <select
              name="totalCreditCardDues"
              value={formData.totalCreditCardDues}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
            >
              <option value="" disabled hidden>Credit card dues</option>
              <option value="No Dues">No Dues</option>
              <option value="Below ₹5 Lakhs">Below ₹5 Lakhs</option>
              <option value="₹5 - ₹10 Lakhs">₹5 - ₹10 Lakhs</option>
              <option value="₹10 - ₹25 Lakhs">₹10 - ₹25 Lakhs</option>
              <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className={`grid ${variant === 'section' ? 'grid-cols-1 md:grid-cols-2 gap-6' : 'grid-cols-2 gap-4'}`}>
          {/* Monthly Income */}
          <div className="relative">
            <select
              name="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#6D6D6D] appearance-none"
            >
              <option value="" disabled hidden>Monthly income</option>
              <option value="below-25k">Below ₹25,000</option>
              <option value="25k-50k">₹25,000 - ₹50,000</option>
              <option value="50k-1l">₹50,000 - ₹1 Lakh</option>
              <option value="above-1l">Above ₹1 Lakh</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
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
              <option value="" disabled hidden>Can you pay ₹2-3k?</option>
              <option value="yes">Yes, I can arrange</option>
              <option value="no">No, I need more time</option>
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
              <svg className="w-3.5 h-3.5 text-[#6D6D6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Radios Container */}
        <div className={`${variant === 'section' ? 'space-y-6' : 'grid grid-cols-1 gap-4 py-2'}`}>
          {/* Recovery Pressure Radio */}
          <div className="space-y-3">
            <p className={`text-base ${variant === 'simple' ? 'text-sm' : ''} text-[#6D6D6D]`}>Are you facing recovery calls or bank pressure?</p>
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
                <span className={`text-base ${variant === 'simple' ? 'text-sm' : ''} transition-colors ${formData.recoveryPressure === 'yes' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>Yes</span>
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
                <span className={`text-base ${variant === 'simple' ? 'text-sm' : ''} transition-colors ${formData.recoveryPressure === 'no' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>No</span>
              </label>
            </div>
          </div>

          {/* Legal Notice Radio */}
          <div className="space-y-3">
            <p className={`text-base ${variant === 'simple' ? 'text-sm' : ''} text-[#6D6D6D]`}>Have you received any legal notice?</p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="legalNotice"
                    value="yes"
                    checked={formData.legalNotice === 'yes'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full border-[#6D6D6D] group-hover:border-[#2E2E2E] transition-colors flex items-center justify-center ${formData.legalNotice === 'yes' ? 'border-[#2E2E2E]' : ''}`}>
                    {formData.legalNotice === 'yes' && <div className="w-2.5 h-2.5 bg-[#2E2E2E] rounded-full" />}
                  </div>
                </div>
                <span className={`text-base ${variant === 'simple' ? 'text-sm' : ''} transition-colors ${formData.legalNotice === 'yes' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>Yes</span>
              </label>

              <label className="flex items-center space-x-2.5 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    name="legalNotice"
                    value="no"
                    checked={formData.legalNotice === 'no'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 border-2 rounded-full border-[#6D6D6D] group-hover:border-[#2E2E2E] transition-colors flex items-center justify-center ${formData.legalNotice === 'no' ? 'border-[#2E2E2E]' : ''}`}>
                    {formData.legalNotice === 'no' && <div className="w-2.5 h-2.5 bg-[#2E2E2E] rounded-full" />}
                  </div>
                </div>
                <span className={`text-base ${variant === 'simple' ? 'text-sm' : ''} transition-colors ${formData.legalNotice === 'no' ? 'text-[#2E2E2E] font-medium' : 'text-[#6D6D6D]'}`}>No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Queries */}
        <div className="relative">
          <textarea
            name="queries"
            placeholder="Tell us about your situation..."
            value={formData.queries}
            onChange={handleChange}
            rows={variant === 'section' ? 3 : 2}
            className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D] resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#1F5EFF] hover:bg-[#1648CC] disabled:bg-[#6D6D6D] text-white font-bold ${variant === 'section' ? 'py-4 text-xl' : 'py-3.5 text-lg mt-4'} rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98]`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        
        {submitStatus === 'success' && (
          <p className="text-green-600 text-center font-medium mt-2">Thank you! We will contact you soon.</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center font-medium mt-2">Something went wrong. Please try again.</p>
        )}

        {variant === 'simple' && onCancel && (
          <button 
            type="button"
            onClick={onCancel}
            className="w-full text-[#6D6D6D] text-sm font-medium py-2"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );

  if (variant === 'simple') {
    return formContent;
  }

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
      {formContent}
    </section>
  );
}
