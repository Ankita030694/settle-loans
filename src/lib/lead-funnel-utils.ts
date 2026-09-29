/**
 * Utility functions and helpers for the 3-step Interactive Assessment Funnel
 * Ensures strict zero-database schema changes, seamless localStorage drafting,
 * and robust mobile autofill phone sanitization.
 */

export interface FunnelDraft {
  step: number;
  issueId: string;
  issueTitle: string;
  issueDescription?: string;
  debtBracket: string;
  loanTypes: string[];
  hasLegalNotice: 'yes' | 'no' | 'not_sure' | '';
  notes?: string;
  updatedAt: number;
}

export interface ContactDetails {
  fullName: string;
  phone: string;
  email: string;
  state: string;
}

export const INDIAN_STATES: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

/**
 * Mobile Autofill Sanitizer:
 * Mobile browsers (iOS Safari, Android Chrome) autofill contact numbers with country code (+91),
 * leading zero, dashes, spaces, e.g. "+91 98765 43210" or "098765-43210".
 * This function dynamically strips unwanted prefixes down to the exact 10-digit Indian mobile number,
 * ensuring autofill is never silently rejected or truncated incorrectly.
 */
export function sanitizeIndianPhoneNumber(value: string): string {
  if (!value) return '';

  // Remove any non-numeric character (spaces, dashes, parentheses, plus signs)
  let digits = value.replace(/\D/g, '');

  // 1. If starts with 91 and has 12 or 13 digits (e.g. 919876543210 or 9109876543210)
  if (digits.length >= 12 && digits.startsWith('91')) {
    const withoutCountryCode = digits.slice(2);
    // If there was an extra leading 0 after 91 (e.g. +91 09876543210)
    if (withoutCountryCode.startsWith('0')) {
      digits = withoutCountryCode.slice(1);
    } else {
      digits = withoutCountryCode;
    }
  }
  // 2. If starts with 0 and has 11 digits (e.g. 09876543210)
  else if (digits.length === 11 && digits.startsWith('0')) {
    digits = digits.slice(1);
  }
  // 3. If user pasted or autofilled a string longer than 10 digits
  else if (digits.length > 10) {
    // If the last 10 digits start with valid Indian mobile digits (6, 7, 8, 9)
    const last10 = digits.slice(-10);
    if (/^[6-9]/.test(last10)) {
      digits = last10;
    } else {
      digits = digits.slice(0, 10);
    }
  }

  // Strictly clamp to max 10 digits
  return digits.slice(0, 10);
}

/**
 * Validates whether the phone number is a valid 10-digit Indian mobile number
 * (Must start with 6, 7, 8, or 9 and have exactly 10 digits)
 */
export function isValidIndianPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone);
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/**
 * LocalStorage draft management keyed per page or globally
 */
export function getFunnelStorageKey(pagePath?: string): string {
  if (typeof window === 'undefined') return 'sl_funnel_draft_default';
  const path = pagePath || window.location.pathname || 'global';
  const cleanPath = path.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase();
  return `sl_funnel_draft_${cleanPath}`;
}

export function loadFunnelDraft(storageKey: string): FunnelDraft | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Discard drafts older than 48 hours
    if (Date.now() - (parsed.updatedAt || 0) > 48 * 60 * 60 * 1000) {
      localStorage.removeItem(storageKey);
      return null;
    }
    return parsed as FunnelDraft;
  } catch (e) {
    console.warn('Error reading funnel draft from localStorage', e);
    return null;
  }
}

export function saveFunnelDraft(storageKey: string, draft: Partial<FunnelDraft>): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = loadFunnelDraft(storageKey) || {
      step: 1,
      issueId: '',
      issueTitle: '',
      debtBracket: '',
      loanTypes: [],
      hasLegalNotice: '',
      updatedAt: Date.now()
    };

    const updated: FunnelDraft = {
      ...existing,
      ...draft,
      updatedAt: Date.now()
    };

    localStorage.setItem(storageKey, JSON.stringify(updated));
  } catch (e) {
    console.warn('Error writing funnel draft to localStorage', e);
  }
}

export function clearFunnelDraft(storageKey: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(storageKey);
  } catch (e) {
    console.warn('Error clearing funnel draft from localStorage', e);
  }
}

/**
 * Bundles the multi-step inputs into a structured, readable message string
 * that the existing CRM and ContactPageForm expect.
 */
export function bundleAssessmentMessage(draft: Partial<FunnelDraft>, notes?: string): string {
  const parts: string[] = ['[Interactive 3-Step Assessment]'];

  if (draft.issueTitle) {
    parts.push(`Legal Emergency: ${draft.issueTitle}`);
  }
  if (draft.debtBracket) {
    parts.push(`Liability Bracket: ${draft.debtBracket}`);
  }
  if (draft.loanTypes && draft.loanTypes.length > 0) {
    parts.push(`Debt Facility Types: ${draft.loanTypes.join(', ')}`);
  }
  if (draft.hasLegalNotice) {
    parts.push(`Legal Notice Received: ${draft.hasLegalNotice === 'yes' ? 'Yes' : draft.hasLegalNotice === 'no' ? 'No' : 'Unsure'}`);
  }
  if (notes && notes.trim()) {
    parts.push(`Client Notes: ${notes.trim()}`);
  }

  return parts.join(' | ');
}

/**
 * Dispatches the unified payload to /api/contact matching the exact ContactPageForm schema
 */
export async function submitAssessmentFunnel(params: {
  draft: FunnelDraft;
  contact: ContactDetails;
  recaptchaToken?: string;
  storageKey?: string;
}): Promise<{ success: boolean; error?: string }> {
  const { draft, contact, recaptchaToken, storageKey } = params;

  const cleanPhone = sanitizeIndianPhoneNumber(contact.phone);
  if (!isValidIndianPhone(cleanPhone)) {
    return { success: false, error: 'Please enter a valid 10-digit Indian mobile number.' };
  }

  if (!contact.fullName.trim()) {
    return { success: false, error: 'Please enter your full name.' };
  }

  if (!validateEmail(contact.email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  if (!contact.state) {
    return { success: false, error: 'Please select your state.' };
  }

  const bundledMessage = bundleAssessmentMessage(draft, draft.notes);

  // Extract UTM parameters if present in URL
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

  // Identify debt categories
  const hasPersonalLoan = draft.loanTypes?.some(t => t.toLowerCase().includes('personal'));
  const hasCreditCard = draft.loanTypes?.some(t => t.toLowerCase().includes('card'));
  const isFacingHarassment = draft.issueId === 'harassment' || draft.issueTitle?.toLowerCase().includes('harass');
  const hasLegalNoticeValue = draft.hasLegalNotice === 'yes' || draft.issueId === 'legal_notice' ? 'yes' : '';

  const payload = {
    fullName: contact.fullName.trim(),
    phone: cleanPhone,
    mobile: cleanPhone,
    email: contact.email.trim(),
    state: contact.state,
    message: bundledMessage,
    queries: bundledMessage,
    legalNotice: hasLegalNoticeValue,
    recoveryPressure: isFacingHarassment ? 'yes' : 'no',
    totalPersonalLoanDues: hasPersonalLoan ? draft.debtBracket : '',
    totalCreditCardDues: hasCreditCard ? draft.debtBracket : '',
    monthlyIncome: '',
    setupFee: '',
    fullUrl: typeof window !== 'undefined' ? window.location.href : 'https://www.settleloans.in',
    utmParameters,
    recaptchaToken: recaptchaToken || ''
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: data.error || 'Failed to submit your assessment request. Please try again.'
      };
    }

    // Flush temporary local draft upon successful submission
    if (storageKey) {
      clearFunnelDraft(storageKey);
    }
    // Record successful submission flags
    if (typeof window !== 'undefined') {
      localStorage.setItem('formSubmitted', 'true');
      sessionStorage.setItem('formSubmitted', 'true');
      sessionStorage.setItem('sl_lead_modal_dismissed', 'true');
      localStorage.setItem(`lastSubmission_${cleanPhone}`, Date.now().toString());
    }

    return { success: true };
  } catch (err: any) {
    console.error('Assessment submission error:', err);
    return {
      success: false,
      error: err.message || 'Network error occurred. Please check your connection and try again.'
    };
  }
}
