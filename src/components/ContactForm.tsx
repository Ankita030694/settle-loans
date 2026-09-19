"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface ContactFormProps {
    variant?: 'section' | 'simple';
    onCancel?: () => void;
    showCloseButton?: boolean;
    titleAs?: 'h1' | 'div';
}

export default function ContactForm({
    variant = 'section',
    onCancel,
    showCloseButton = false,
    titleAs = 'div',
}: ContactFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        state: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        let { name, value } = e.target;

        // Apply strict filtering for Name and Phone
        if (name === 'fullName') {
            value = value.replace(/[^a-zA-Z\s]/g, '');
        } else if (name === 'phone') {
            value = value.replace(/\D/g, '');
            const maxLength = value.startsWith('0') ? 11 : 10;
            value = value.slice(0, maxLength);
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('idle');
        setErrorMessage('');

        if (!formData.fullName.trim()) {
            alert("Please enter your full name.");
            return;
        }

        const isValidPhone = formData.phone.startsWith('0')
            ? formData.phone.length === 11
            : formData.phone.length === 10;

        if (!isValidPhone) {
            alert(formData.phone.startsWith('0')
                ? "Please enter a valid 11-digit phone number (starting with 0)."
                : "Please enter a valid 10-digit phone number.");
            return;
        }

        if (!formData.email.trim()) {
            alert("Please enter your email address.");
            return;
        }

        if (!validateEmail(formData.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!formData.state) {
            alert("Please select your state.");
            return;
        }

        setIsSubmitting(true);

        try {
            let recaptchaToken = '';
            if (executeRecaptcha) {
                recaptchaToken = await executeRecaptcha('contact_form_submit');
            } else {
                console.warn('Execute recaptcha not yet available');
            }

            const searchParams = new URLSearchParams(window.location.search);
            const utmParameters = {
                utm_source: searchParams.get('utm_source') || '',
                utm_medium: searchParams.get('utm_medium') || '',
                utm_campaign: searchParams.get('utm_campaign') || '',
                utm_term: searchParams.get('utm_term') || '',
                utm_content: searchParams.get('utm_content') || '',
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    queries: formData.message,
                    totalPersonalLoanDues: '',
                    totalCreditCardDues: '',
                    monthlyIncome: '',
                    setupFee: '',
                    recoveryPressure: '',
                    legalNotice: '',
                    fullUrl: window.location.href,
                    utmParameters,
                    recaptchaToken
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to submit');
            }

            localStorage.setItem(`lastSubmission_${formData.phone}`, Date.now().toString());
            localStorage.setItem('formSubmitted', 'true');
            sessionStorage.setItem('formSubmitted', 'true');
            router.push('/thank-you');

            setSubmitStatus('success');
            if (onCancel) setTimeout(onCancel, 2000);

            setFormData({
                fullName: '',
                phone: '',
                email: '',
                state: '',
                message: '',
            });
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
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
                {titleAs === 'h1' ? (
                    <h1 className={`${variant === 'section' ? 'text-[32px] md:text-[48px]' : 'text-2xl'} font-bold leading-[1.1] text-[#2E2E2E]`} style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                        Breathe Easy. <br />
                        <span className="text-[#6D6D6D]">Let’s Move Forward.</span>
                    </h1>
                ) : (
                    <>
                        <div className={`${variant === 'section' ? 'text-[32px] md:text-[48px]' : 'text-2xl'} font-bold leading-[1.1] text-[#2E2E2E]`} style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                            Breathe Easy.
                        </div>
                        <div className={`${variant === 'section' ? 'text-[32px] md:text-[48px]' : 'text-2xl'} font-bold leading-[1.1] text-[#6D6D6D]`} style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}>
                            Let’s Move Forward.
                        </div>
                    </>
                )}
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

                {/* Message */}
                <div className="relative">
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={variant === 'section' ? 3 : 2}
                        className="w-full bg-transparent border-b border-[#6D6D6D] py-1.5 focus:outline-none focus:border-[#2E2E2E] transition-colors text-base text-[#2E2E2E] placeholder:text-[#6D6D6D] resize-none"
                    />
                </div>

                {/* Disclaimer Text */}
                <div className="text-center text-xs md:text-sm text-[#2E2E2E] mt-4 mb-2 leading-relaxed">
                    By clicking submit, you agree to share these details with us for the purpose of contacting you regarding our services. Please read our{' '}
                    <Link
                        href="/privacy-policy"
                        className="text-[#f59e0b] font-semibold hover:underline"
                        onClick={onCancel}
                    >
                        Privacy Policy
                    </Link>{' '}
                    for more details.
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
                    <p className="text-red-600 text-center font-medium mt-2">{errorMessage}</p>
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
                    width={1600}
                    height={836}
                    className="w-full h-full object-cover object-left"
                    priority
                />
            </div>

            {/* Form Container */}
            {formContent}
        </section>
    );
}
