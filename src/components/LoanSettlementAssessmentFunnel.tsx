"use client";

import React, { useState, useEffect, useId } from 'react';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Loader2,
  ShieldCheck
} from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  ContactDetails,
  sanitizeIndianPhoneNumber,
  isValidIndianPhone,
  validateEmail,
  getFunnelStorageKey,
  loadFunnelDraft,
  saveFunnelDraft,
  clearFunnelDraft
} from '@/lib/lead-funnel-utils';

interface LoanSettlementAssessmentFunnelProps {
  className?: string;
  variant?: 'full' | 'inline';
}

// Question 1 Options: Simple radio options strictly on loan settlement
const LOAN_TYPE_OPTIONS = [
  { id: 'personal_loan', label: 'Personal Loan' },
  { id: 'credit_card', label: 'Credit Card Dues' },
  { id: 'payday_loans', label: 'Payday Loans' },
  { id: 'multiple_loans', label: 'Multiple Loans (Cards & Personal Loans)' },
  { id: 'business_loan', label: 'Business Loan' }
];

// Question 2 Options: Simple radio options for debt bracket
const DEBT_AMOUNT_OPTIONS = [
  { id: '3_to_15_lakh', label: '₹3 Lakhs to ₹15 Lakhs' },
  { id: '15_to_30_lakh', label: '₹15 Lakhs to ₹30 Lakhs' },
  { id: '30_to_50_lakh', label: '₹30 Lakhs to ₹50 Lakhs' },
  { id: 'above_50_lakh', label: 'Above ₹50 Lakhs' }
];

export default function LoanSettlementAssessmentFunnel({
  className = '',
  variant = 'inline'
}: LoanSettlementAssessmentFunnelProps) {
  const phoneInputId = useId();
  const nameInputId = useId();
  const emailInputId = useId();

  const { executeRecaptcha } = useGoogleReCaptcha();
  const storageKey = getFunnelStorageKey('home_settlement_funnel');

  // Step 1 (Loan Type), Step 2 (Loan Amount), Step 3 (Contact Info), Step 4 (Success)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selected MCQ state
  const [selectedLoanType, setSelectedLoanType] = useState<string>('');
  const [selectedDebtAmount, setSelectedDebtAmount] = useState<string>('');

  // Contact Info state
  const [contact, setContact] = useState<ContactDetails>({
    fullName: '',
    phone: '',
    email: '',
    state: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Helper to ensure global popup does not interrupt while interacting
  const markInteraction = () => {
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('sl_funnel_active', 'true');
        window.dispatchEvent(new CustomEvent('block-global-popup'));
      } catch (e) {
        // ignore storage errors
      }
    }
  };

  // Restore draft from localStorage on load
  useEffect(() => {
    const draft = loadFunnelDraft(storageKey);
    if (draft) {
      if (draft.issueTitle) setSelectedLoanType(draft.issueTitle);
      if (draft.debtBracket) setSelectedDebtAmount(draft.debtBracket);
      if (draft.step && draft.step >= 1 && draft.step <= 3) {
        setCurrentStep(draft.step);
      }
    }
  }, [storageKey]);

  // Save progress incrementally
  const saveStep = (stepNum: number, loanType?: string, debtAmt?: string) => {
    markInteraction();
    const type = loanType ?? selectedLoanType;
    const debt = debtAmt ?? selectedDebtAmount;
    saveFunnelDraft(storageKey, {
      step: stepNum,
      issueId: 'loan_settlement',
      issueTitle: type,
      debtBracket: debt,
      loanTypes: type ? [type] : [],
      updatedAt: Date.now()
    });
  };

  // Step 1: Select Question 1
  const handleSelectLoanType = (label: string) => {
    markInteraction();
    setSelectedLoanType(label);
    saveStep(2, label, selectedDebtAmount);
    setCurrentStep(2);
  };

  // Step 2: Select Question 2
  const handleSelectDebtAmount = (label: string) => {
    markInteraction();
    setSelectedDebtAmount(label);
    saveStep(3, selectedLoanType, label);
    setCurrentStep(3);
  };

  // Step 3: Phone input with mobile autofill sanitizer
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = sanitizeIndianPhoneNumber(e.target.value);
    setContact(prev => ({ ...prev, phone: cleaned }));
  };

  // Step 3: Full Name input
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleanName = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setContact(prev => ({ ...prev, fullName: cleanName }));
  };

  // Final Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!contact.fullName.trim()) {
      setSubmitError('Please enter your full name.');
      return;
    }

    const cleanPhone = sanitizeIndianPhoneNumber(contact.phone);
    if (!isValidIndianPhone(cleanPhone)) {
      setSubmitError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!contact.email.trim() || !validateEmail(contact.email)) {
      setSubmitError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      let recaptchaToken = '';
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('loan_settlement_funnel_submit');
      }

      // Bundled message string for zero backend schema changes
      const bundledMessage = `[Loan Settlement Assessment] Loan Type: ${selectedLoanType || 'Loan Settlement'} | Total Debt Amount: ${selectedDebtAmount || 'Not specified'}`;

      let utmParameters = {
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_term: '',
        utm_content: ''
      };

      if (typeof window !== 'undefined') {
        const searchParams = new URLSearchParams(window.location.search);
        utmParameters = {
          utm_source: searchParams.get('utm_source') || '',
          utm_medium: searchParams.get('utm_medium') || '',
          utm_campaign: searchParams.get('utm_campaign') || '',
          utm_term: searchParams.get('utm_term') || '',
          utm_content: searchParams.get('utm_content') || ''
        };
      }

      const isCard = selectedLoanType.toLowerCase().includes('card');
      const isPersonal = selectedLoanType.toLowerCase().includes('personal');

      const payload = {
        fullName: contact.fullName.trim(),
        phone: cleanPhone,
        mobile: cleanPhone,
        email: contact.email.trim(),
        state: contact.state,
        message: bundledMessage,
        queries: bundledMessage,
        legalNotice: '',
        recoveryPressure: '',
        totalPersonalLoanDues: isPersonal ? selectedDebtAmount : '',
        totalCreditCardDues: isCard ? selectedDebtAmount : '',
        monthlyIncome: '',
        setupFee: '',
        fullUrl: typeof window !== 'undefined' ? window.location.href : 'https://www.settleloans.in',
        utmParameters,
        recaptchaToken
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setSubmitError(data.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Cleanup local draft and set session flags
      clearFunnelDraft(storageKey);
      if (typeof window !== 'undefined') {
        localStorage.setItem('formSubmitted', 'true');
        sessionStorage.setItem('formSubmitted', 'true');
        sessionStorage.setItem('sl_lead_modal_dismissed', 'true');
        localStorage.setItem(`lastSubmission_${cleanPhone}`, Date.now().toString());
      }

      setIsSuccess(true);
      setIsSubmitting(false);

      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 1500);

    } catch (err: any) {
      console.error('Submission failed', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="settlement-assessment" 
      onClickCapture={markInteraction}
      onFocusCapture={markInteraction}
      className={variant === 'full' 
        ? `w-full py-12 md:py-16 bg-[#F8FAFC] text-[#2E2E2E] border-y border-slate-200/80 ${className}`
        : `w-full my-10 py-8 px-3 sm:px-6 bg-slate-50/70 border border-slate-200/90 rounded-3xl text-[#2E2E2E] shadow-sm not-prose ${className}`
      }
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Loan Settlement Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Check Your Loan Settlement Options
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Answer 2 quick questions to evaluate your settlement eligibility.
          </p>
        </div>

        {/* Clean Light-Mode Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* Step Counter & Progress Track */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
              <span>Step {Math.min(currentStep, 3)} of 3</span>
              <span className="text-[#1F5EFF]">
                {currentStep === 1 ? 'Loan Type' : currentStep === 2 ? 'Outstanding Amount' : 'Contact Details'}
              </span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#1F5EFF] h-full transition-all duration-300 ease-out"
                style={{ width: `${(Math.min(currentStep, 3) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* QUESTION 1: MCQ with clean Radio Buttons */}
          {currentStep === 1 && !isSuccess && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                1. What type of loan do you want to settle?
              </h3>

              <fieldset className="space-y-3" aria-label="Loan Type Selection">
                {LOAN_TYPE_OPTIONS.map((option) => {
                  const isChecked = selectedLoanType === option.label;
                  return (
                    <label
                      key={option.id}
                      onClick={() => handleSelectLoanType(option.label)}
                      className={`min-h-[52px] w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border-2 transition-all cursor-pointer select-none active:scale-[0.99] ${
                        isChecked 
                          ? 'border-[#1F5EFF] bg-blue-50/40 text-slate-900 font-bold shadow-xs' 
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 font-medium'
                      }`}
                    >
                      {/* Standard Accessible Radio Input */}
                      <input
                        type="radio"
                        name="loan_type"
                        value={option.label}
                        checked={isChecked}
                        onChange={() => handleSelectLoanType(option.label)}
                        className="sr-only"
                      />
                      
                      {/* Custom Visible Radio Circle */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'border-[#1F5EFF] bg-[#1F5EFF]' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>

                      <span className="text-base leading-tight">{option.label}</span>
                    </label>
                  );
                })}
              </fieldset>

              <div className="pt-4 flex justify-end">
                {selectedLoanType && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* QUESTION 2: MCQ with clean Radio Buttons */}
          {currentStep === 2 && !isSuccess && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  2. What is your total outstanding loan amount?
                </h3>
              </div>

              {/* Selected Question 1 Pill */}
              <div className="bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs flex items-center justify-between text-slate-600 mb-4">
                <span>Loan: <strong className="text-slate-900">{selectedLoanType}</strong></span>
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-[#1F5EFF] font-bold hover:underline"
                >
                  Change
                </button>
              </div>

              <fieldset className="space-y-3" aria-label="Debt Amount Selection">
                {DEBT_AMOUNT_OPTIONS.map((option) => {
                  const isChecked = selectedDebtAmount === option.label;
                  return (
                    <label
                      key={option.id}
                      onClick={() => handleSelectDebtAmount(option.label)}
                      className={`min-h-[52px] w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl border-2 transition-all cursor-pointer select-none active:scale-[0.99] ${
                        isChecked 
                          ? 'border-[#1F5EFF] bg-blue-50/40 text-slate-900 font-bold shadow-xs' 
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700 font-medium'
                      }`}
                    >
                      <input
                        type="radio"
                        name="debt_amount"
                        value={option.label}
                        checked={isChecked}
                        onChange={() => handleSelectDebtAmount(option.label)}
                        className="sr-only"
                      />

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isChecked ? 'border-[#1F5EFF] bg-[#1F5EFF]' : 'border-slate-300 bg-white'
                      }`}>
                        {isChecked && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>

                      <span className="text-base leading-tight">{option.label}</span>
                    </label>
                  );
                })}
              </fieldset>

              <div className="pt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold text-sm py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                {selectedDebtAmount && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: Autofillable Contact Fields (Mobile Friendly) */}
          {currentStep === 3 && !isSuccess && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
              
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs flex items-center justify-between text-slate-600 mb-2">
                <div className="truncate pr-2">
                  <span className="font-bold text-slate-900">{selectedLoanType}</span>
                  <span className="mx-1.5">•</span>
                  <span>{selectedDebtAmount}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-[#1F5EFF] font-bold hover:underline shrink-0"
                >
                  Edit
                </button>
              </div>

              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-700 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label htmlFor={nameInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id={nameInputId}
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  value={contact.fullName}
                  onChange={handleNameChange}
                  className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all"
                />
              </div>

              {/* Phone with Autofill Sanitizer */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor={phoneInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] font-semibold text-slate-400">
                    {contact.phone.length}/10 digits
                  </span>
                </div>

                <div className="relative flex items-center">
                  <div className="absolute left-3.5 flex items-center gap-1.5 pointer-events-none select-none text-slate-700 font-bold text-sm">
                    <span className="text-base" role="img" aria-label="India Flag">🇮🇳</span>
                    <span>+91</span>
                    <span className="text-slate-300 font-normal">|</span>
                  </div>

                  <input
                    id={phoneInputId}
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    required
                    placeholder="98765 43210"
                    value={contact.phone}
                    onChange={handlePhoneChange}
                    className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-20 pr-10 text-slate-900 placeholder:text-slate-400 text-base font-medium tracking-wide focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all"
                  />

                  {isValidIndianPhone(contact.phone) && (
                    <CheckCircle2 className="absolute right-3.5 w-5 h-5 text-emerald-600 pointer-events-none" />
                  )}
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor={emailInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id={emailInputId}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="name@example.com"
                  value={contact.email}
                  onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all"
                />
              </div>

              {/* Confidentiality Notice */}
              <div className="text-[11px] text-slate-500 leading-normal pt-1">
                🔒 100% Confidential. Your details are never shared with recovery agents or banks.
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold text-sm py-3 px-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-[#1648CC] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Settlement Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Success State */}
          {isSuccess && (
            <div className="py-8 text-center animate-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-1">
                Assessment Submitted!
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto mb-4">
                Thank you, {contact.fullName}. We have received your settlement details and will review your case shortly.
              </p>
              <div className="text-xs text-slate-400 font-medium">
                Redirecting you...
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
