"use client";

import React, { useState, useEffect, useId } from 'react';
import { usePathname } from 'next/navigation';
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle, 
  Scale, 
  FileText, 
  CreditCard, 
  Banknote, 
  Lock, 
  Check, 
  PhoneCall,
  Loader2
} from 'lucide-react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import {
  FunnelDraft,
  ContactDetails,
  INDIAN_STATES,
  sanitizeIndianPhoneNumber,
  isValidIndianPhone,
  validateEmail,
  getFunnelStorageKey,
  loadFunnelDraft,
  saveFunnelDraft,
  submitAssessmentFunnel
} from '@/lib/lead-funnel-utils';
import { matchTopicFromPath } from '@/lib/topic-matcher';

interface InteractiveLeadFunnelProps {
  variant?: 'card' | 'inline' | 'modal';
  defaultTopic?: string;
  initialStep?: number;
  onComplete?: () => void;
  className?: string;
  titleOverride?: string;
  subtitleOverride?: string;
}

interface IssueOption {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
}

const EMERGENCY_ISSUES: IssueOption[] = [
  {
    id: 'harassment',
    title: 'Recovery Agent Harassment',
    desc: 'Abusive calls, home/work visits, threats to family',
    icon: <PhoneCall className="w-5 h-5 text-red-500" />,
    tag: 'Urgent Protection'
  },
  {
    id: 'legal_notice',
    title: 'Legal Notice / Summons',
    desc: 'Section 138 cheque bounce, Section 25, Court Notice',
    icon: <Scale className="w-5 h-5 text-amber-500" />,
    tag: '48h Response Needed'
  },
  {
    id: 'credit_card',
    title: 'Credit Card Debt Trap',
    desc: 'Stuck in 42%+ APR, endless minimum dues cycle',
    icon: <CreditCard className="w-5 h-5 text-blue-500" />,
    tag: 'Up to 70% Waiver'
  },
  {
    id: 'personal_loan',
    title: 'Personal Loan Default',
    desc: 'Missed EMIs due to job loss, illness, or pay cut',
    icon: <Banknote className="w-5 h-5 text-emerald-500" />,
    tag: 'One-Time Settlement'
  },
  {
    id: 'account_freeze',
    title: 'Bank Account Freeze Threat',
    desc: 'Threat to attach salary, lien mark, or spouse account',
    icon: <Lock className="w-5 h-5 text-purple-500" />,
    tag: 'RBI Illegal Defense'
  },
  {
    id: 'settlement_general',
    title: 'Want Debt Settlement / Haircut',
    desc: 'Ready to negotiate one-time closure across loans',
    icon: <FileText className="w-5 h-5 text-indigo-500" />,
    tag: 'Legal Negotiation'
  }
];

const DEBT_BRACKETS = [
  { label: 'Under ₹3 Lakhs', value: 'Under ₹3 Lakhs', waiver: '35% – 50% Est. Waiver', badge: 'Fast Track' },
  { label: '₹3 Lakhs – ₹10 Lakhs', value: '₹3 - 10 Lakhs', waiver: '50% – 65% Est. Waiver', badge: 'Most Common' },
  { label: '₹10 Lakhs – ₹25 Lakhs', value: '₹10 - 25 Lakhs', waiver: '55% – 70% Est. Waiver', badge: 'High Priority' },
  { label: 'Above ₹25 Lakhs', value: 'Above ₹25 Lakhs', waiver: '60% – 75% Est. Waiver', badge: 'Consortium OTS' }
];

const LOAN_TYPE_OPTIONS = [
  'Credit Cards',
  'Personal Loans',
  'Instant / NBFC Apps',
  'Business / Other'
];

export default function InteractiveLeadFunnel({
  variant = 'card',
  defaultTopic,
  initialStep = 1,
  onComplete,
  className = '',
  titleOverride,
  subtitleOverride
}: InteractiveLeadFunnelProps) {
  const pathname = usePathname();
  const phoneInputId = useId();
  const nameInputId = useId();
  const emailInputId = useId();
  const stateInputId = useId();

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Determine topic matching context
  const matchedTopic = matchTopicFromPath(pathname || '', defaultTopic);

  // Local storage draft key
  const storageKey = getFunnelStorageKey(pathname || '');

  // Step state (1, 2, 3, or 4 for celebration)
  const [currentStep, setCurrentStep] = useState<number>(initialStep);

  // Draft state
  const [draft, setDraft] = useState<FunnelDraft>({
    step: initialStep,
    issueId: matchedTopic.defaultIssueId,
    issueTitle: matchedTopic.defaultIssueTitle,
    debtBracket: '',
    loanTypes: [],
    hasLegalNotice: '',
    updatedAt: Date.now()
  });

  // Contact info state for Step 3
  const [contact, setContact] = useState<ContactDetails>({
    fullName: '',
    phone: '',
    email: '',
    state: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Restore saved draft on mount
  useEffect(() => {
    const saved = loadFunnelDraft(storageKey);
    if (saved) {
      setDraft(prev => ({
        ...prev,
        ...saved,
        // Keep matched topic if draft didn't have one selected yet
        issueId: saved.issueId || matchedTopic.defaultIssueId,
        issueTitle: saved.issueTitle || matchedTopic.defaultIssueTitle
      }));
      if (saved.step && saved.step >= 1 && saved.step <= 3) {
        setCurrentStep(saved.step);
      }
    } else {
      // Initialize with matched topic
      setDraft(prev => ({
        ...prev,
        issueId: matchedTopic.defaultIssueId,
        issueTitle: matchedTopic.defaultIssueTitle
      }));
    }
  }, [storageKey, matchedTopic.defaultIssueId, matchedTopic.defaultIssueTitle]);

  // Persist draft changes
  const updateDraft = (updates: Partial<FunnelDraft>, nextStep?: number) => {
    const newStep = nextStep ?? currentStep;
    const updated = {
      ...draft,
      ...updates,
      step: newStep,
      updatedAt: Date.now()
    };
    setDraft(updated);
    saveFunnelDraft(storageKey, updated);
    if (nextStep) {
      setCurrentStep(nextStep);
    }
  };

  // Step 1: Issue Selection handler
  const handleSelectIssue = (issue: IssueOption) => {
    updateDraft({
      issueId: issue.id,
      issueTitle: issue.title,
      issueDescription: issue.desc
    }, 2);
  };

  // Step 2: Debt Bracket Selection
  const handleSelectDebtBracket = (bracket: string) => {
    updateDraft({ debtBracket: bracket });
  };

  // Step 2: Loan Types toggle
  const handleToggleLoanType = (loanType: string) => {
    const existing = draft.loanTypes || [];
    const updated = existing.includes(loanType)
      ? existing.filter(item => item !== loanType)
      : [...existing, loanType];
    updateDraft({ loanTypes: updated });
  };

  // Step 2: Legal Notice toggle
  const handleSelectNoticeStatus = (status: 'yes' | 'no' | 'not_sure') => {
    updateDraft({ hasLegalNotice: status });
  };

  // Phone input sanitizer supporting iOS Safari & Android Chrome autofill
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const sanitized = sanitizeIndianPhoneNumber(rawVal);
    setContact(prev => ({ ...prev, phone: sanitized }));
  };

  // Name input sanitizer
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // Allow only alphabets and spaces
    const clean = rawVal.replace(/[^a-zA-Z\s]/g, '');
    setContact(prev => ({ ...prev, fullName: clean }));
  };

  // Final submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!contact.fullName.trim()) {
      setSubmitError('Please enter your full legal name.');
      return;
    }

    const cleanPhone = sanitizeIndianPhoneNumber(contact.phone);
    if (!isValidIndianPhone(cleanPhone)) {
      setSubmitError('Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).');
      return;
    }

    if (!contact.email.trim() || !validateEmail(contact.email)) {
      setSubmitError('Please enter a valid email address for your confidential assessment.');
      return;
    }

    if (!contact.state) {
      setSubmitError('Please select your state to connect with the appropriate legal counsel.');
      return;
    }

    setIsSubmitting(true);

    try {
      let recaptchaToken = '';
      if (executeRecaptcha) {
        recaptchaToken = await executeRecaptcha('interactive_funnel_submit');
      }

      const result = await submitAssessmentFunnel({
        draft,
        contact: {
          ...contact,
          phone: cleanPhone
        },
        recaptchaToken,
        storageKey
      });

      if (!result.success) {
        setSubmitError(result.error || 'Submission failed. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
      setIsSubmitting(false);

      if (onComplete) {
        setTimeout(onComplete, 2500);
      } else {
        setTimeout(() => {
          window.location.href = '/thank-you';
        }, 1800);
      }
    } catch (err: any) {
      console.error('Funnel submit exception:', err);
      setSubmitError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  // Selected bracket info for preview
  const currentBracketObj = DEBT_BRACKETS.find(b => b.value === draft.debtBracket);

  return (
    <div 
      className={`relative w-full overflow-hidden transition-all duration-300 ${
        variant === 'modal'
          ? 'bg-white rounded-3xl p-5 sm:p-7 md:p-8 max-w-2xl mx-auto shadow-2xl'
          : variant === 'card'
          ? 'bg-gradient-to-b from-white to-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xl'
          : 'bg-white rounded-3xl p-6 sm:p-10 shadow-lg'
      } ${className}`}
      style={{ fontFamily: 'var(--font-satoshi), Satoshi, sans-serif' }}
    >
      {/* Top Reassurance & Progress Header */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1F5EFF] text-xs font-bold tracking-wide uppercase">
            <ShieldCheck className="w-4 h-4 text-[#1F5EFF]" />
            <span>Advocate-Client Privilege Protected</span>
          </div>

          <div className="text-xs font-semibold text-slate-500">
            Step <span className="text-[#1F5EFF] font-bold">{Math.min(currentStep, 3)}</span> of 3
          </div>
        </div>

        {/* Progress Bar Track */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3">
          <div 
            className="bg-gradient-to-r from-[#1F5EFF] to-blue-600 h-full transition-all duration-500 ease-out"
            style={{ width: `${(Math.min(currentStep, 3) / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Title & Subtitle */}
      {!isSubmitted && (
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
            {titleOverride || (
              currentStep === 1
                ? 'What is your primary financial or legal emergency?'
                : currentStep === 2
                ? 'What is your estimated total outstanding debt?'
                : 'Where should our legal team send your confidential assessment?'
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 font-normal leading-relaxed">
            {subtitleOverride || (
              currentStep === 1
                ? 'Select your immediate concern below. Your answers are kept 100% confidential under Section 126 of the Evidence Act.'
                : currentStep === 2
                ? 'Accurate liability brackets allow our advocates to calculate your maximum eligible settlement haircut.'
                : 'Enter your verified details to receive your customized settlement window with zero obligation or sales pressure.'
            )}
          </p>
        </div>
      )}

      {/* STEP 1: Emergency Issue Selection */}
      {currentStep === 1 && !isSubmitted && (
        <div className="space-y-4 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EMERGENCY_ISSUES.map((issue) => {
              const isSelected = draft.issueId === issue.id;
              return (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => handleSelectIssue(issue)}
                  className={`group relative text-left p-4 rounded-2xl border-2 transition-all duration-200 flex flex-col justify-between hover:shadow-md cursor-pointer ${
                    isSelected
                      ? 'border-[#1F5EFF] bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-xs group-hover:scale-105 transition-transform">
                      {issue.icon}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#1F5EFF] text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {issue.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1F5EFF] transition-colors leading-snug">
                      {issue.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {issue.desc}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100/80 text-xs font-bold text-[#1F5EFF]">
                    <span>Select Issue</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Bank Notification • No Recovery Pressure</span>
            </div>
            {draft.issueId && (
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-[#1648CC] text-white font-bold py-2.5 px-5 rounded-xl text-sm transition-all shadow-md active:scale-95"
              >
                <span>Continue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STEP 2: Debt Bracket & Loan Details */}
      {currentStep === 2 && !isSubmitted && (
        <div className="space-y-6 animate-in fade-in duration-300">
          {/* Active Issue Badge */}
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
              <span className="font-semibold text-slate-500">Issue:</span>
              <span className="font-bold text-slate-900">{draft.issueTitle || 'Debt Relief'}</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="text-xs font-bold text-[#1F5EFF] hover:underline"
            >
              Change
            </button>
          </div>

          {/* Debt Liability Brackets */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-3">
              1. Select Total Outstanding Liability
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DEBT_BRACKETS.map((bracket) => {
                const isSelected = draft.debtBracket === bracket.value;
                return (
                  <button
                    key={bracket.value}
                    type="button"
                    onClick={() => handleSelectDebtBracket(bracket.value)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#1F5EFF] bg-blue-50/50 shadow-sm'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-base font-bold text-slate-900">{bracket.label}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {bracket.badge}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#1F5EFF]">
                      {bracket.waiver}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Loan Types Chips */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              2. Which Loan Facilities Do You Hold? (Select All That Apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {LOAN_TYPE_OPTIONS.map((loanType) => {
                const isSelected = draft.loanTypes?.includes(loanType);
                return (
                  <button
                    key={loanType}
                    type="button"
                    onClick={() => handleToggleLoanType(loanType)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                    <span>{loanType}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Legal Notice Status */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
              3. Have You Received a Formal Bank Legal Notice or Court Summons?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Yes, Received', value: 'yes' },
                { label: 'No Notice Yet', value: 'no' },
                { label: 'Not Sure', value: 'not_sure' }
              ].map((item) => {
                const isSelected = draft.hasLegalNotice === item.value;
                return (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => handleSelectNoticeStatus(item.value as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1F5EFF] text-white border-[#1F5EFF] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Feasibility Preview Pill */}
          {draft.debtBracket && (
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-emerald-900 uppercase tracking-wide">
                  High Feasibility Profile Detected
                </div>
                <div className="text-xs sm:text-sm text-emerald-800 mt-0.5 leading-relaxed">
                  Based on your bracket ({draft.debtBracket}), you qualify for our advocate-negotiated debt resolution framework with projected waivers between 45% and 70%.
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
            <button
              type="button"
              onClick={() => setCurrentStep(1)}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold text-sm py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="button"
              disabled={!draft.debtBracket}
              onClick={() => setCurrentStep(3)}
              className="inline-flex items-center gap-2 bg-[#1F5EFF] hover:bg-[#1648CC] disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-xl text-sm sm:text-base transition-all shadow-md active:scale-95"
            >
              <span>Continue to Confidential Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Confidential Contact Details (Mobile Autofill Optimized) */}
      {currentStep === 3 && !isSubmitted && (
        <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-300">
          {/* Summary Pill */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{draft.issueTitle}</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-600">{draft.debtBracket || 'Liability'}</span>
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="text-[#1F5EFF] font-bold hover:underline"
            >
              Edit Selections
            </button>
          </div>

          {/* Error Notice */}
          {submitError && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs sm:text-sm text-red-700 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Full Legal Name */}
          <div>
            <label htmlFor={nameInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Legal Name <span className="text-red-500">*</span>
            </label>
            <input
              id={nameInputId}
              name="fullName"
              type="text"
              required
              autoComplete="name"
              placeholder="e.g. Aditya Tiwari"
              value={contact.fullName}
              onChange={handleNameChange}
              className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all"
            />
          </div>

          {/* Phone Number with iOS/Android Autofill Sanitizer */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor={phoneInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Mobile Number (Advocate Confidential) <span className="text-red-500">*</span>
              </label>
              <span className="text-[11px] font-semibold text-slate-400">
                {contact.phone.length}/10 digits
              </span>
            </div>

            <div className="relative flex items-center">
              {/* +91 Flag Prefix */}
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
            <p className="text-[11px] text-slate-500 mt-1">
              Never shared with banks or recovery agents. Strictly protected by advocate privilege.
            </p>
          </div>

          {/* Grid: Email & State */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                placeholder="aditya@example.com"
                value={contact.email}
                onChange={(e) => setContact(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 text-slate-900 placeholder:text-slate-400 text-base focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor={stateInputId} className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                State / UT <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id={stateInputId}
                  name="state"
                  required
                  autoComplete="address-level1"
                  value={contact.state}
                  onChange={(e) => setContact(prev => ({ ...prev, state: e.target.value }))}
                  className="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 text-slate-900 text-base focus:outline-none focus:border-[#1F5EFF] focus:ring-2 focus:ring-[#1F5EFF]/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your state</option>
                  {INDIAN_STATES.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Reassurance Box */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-600 leading-relaxed flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <span>
              By submitting, your evaluation is logged securely under advocate-client confidentiality. No automated spam calls. We review your debt eligibility first.
            </span>
          </div>

          {/* Submit Actions */}
          <div className="flex items-center gap-3 pt-3">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => setCurrentStep(2)}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-bold text-sm py-3.5 px-4 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1F5EFF] hover:bg-[#1648CC] disabled:bg-slate-400 text-white font-bold py-3.5 px-6 rounded-xl text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Securing Your Assessment...</span>
                </>
              ) : (
                <>
                  <span>Get Confidential Settlement Plan</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* SUCCESS CELEBRATION STATE */}
      {isSubmitted && (
        <div className="py-8 text-center animate-in zoom-in-95 duration-400">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-2">
            Confidential Assessment Received
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
            Our legal debt resolution advocates have logged your emergency profile ({draft.issueTitle}). A senior resolution strategist will review your case file under strict advocate privilege.
          </p>

          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-2xl max-w-sm mx-auto text-xs text-slate-700 text-left space-y-1.5 mb-6">
            <div className="flex justify-between">
              <span className="text-slate-500">Registered Name:</span>
              <span className="font-bold">{contact.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Contact Number:</span>
              <span className="font-bold">+91 {contact.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Case Bracket:</span>
              <span className="font-bold text-[#1F5EFF]">{draft.debtBracket || 'Evaluation'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Confidentiality:</span>
              <span className="font-bold text-emerald-600">Active (Sec 126)</span>
            </div>
          </div>

          <div className="text-xs text-slate-400 font-medium">
            Redirecting to confirmation page...
          </div>
        </div>
      )}
    </div>
  );
}
