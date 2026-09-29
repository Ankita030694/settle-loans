/**
 * Automatic topic matching system for blogs, landing pages, and interactive intake.
 * Intelligently maps current page URLs and titles to borrower pain points.
 */

export interface TopicContext {
  id: string;
  badge: string;
  headline: string;
  subheading: string;
  defaultIssueId: string;
  defaultIssueTitle: string;
  highlightBenefit: string;
}

export const TOPIC_PROFILES: Record<string, TopicContext> = {
  harassment: {
    id: 'harassment',
    badge: 'RBI Anti-Harassment Defense',
    headline: 'Stop Recovery Agent Harassment Immediately',
    subheading: 'Relentless calls, abusive language, or home/office visits violate RBI regulations. Get immediate advocate protection.',
    defaultIssueId: 'harassment',
    defaultIssueTitle: 'Recovery Agent Harassment',
    highlightBenefit: 'Immediate Cease-and-Desist Legal Protection'
  },
  legal_notice: {
    id: 'legal_notice',
    badge: 'Urgent Legal Defense',
    headline: 'Received a Bank Legal Notice or Summons?',
    subheading: 'Section 138 cheque bounce, Section 25, or arbitration notices demand an immediate formal legal reply to protect you.',
    defaultIssueId: 'legal_notice',
    defaultIssueTitle: 'Legal Notice Received / Section 138',
    highlightBenefit: 'Advocate Reply within 48 Hours'
  },
  account_freeze: {
    id: 'account_freeze',
    badge: 'Salary & Account Protection',
    headline: 'Is the Bank Threatening to Freeze Your Account?',
    subheading: 'Banks cannot illegally attach a spouse\'s account or seize your salary without due process. Assert your rights under RBI rules.',
    defaultIssueId: 'account_freeze',
    defaultIssueTitle: 'Bank Account Freeze Threat',
    highlightBenefit: 'Lien Removal & Ombudsman Representation'
  },
  credit_card: {
    id: 'credit_card',
    badge: 'Credit Card Debt Relief',
    headline: 'Break Free from the 42%+ Credit Card Interest Trap',
    subheading: 'Stop paying endless minimum dues that barely touch the principal. Settle outstanding balances with massive fee waivers.',
    defaultIssueId: 'credit_card',
    defaultIssueTitle: 'Credit Card Debt Trap',
    highlightBenefit: 'Waive Finance Charges & Penalties'
  },
  personal_loan: {
    id: 'personal_loan',
    badge: 'Personal Loan Resolution',
    headline: 'Unable to Pay Your Personal Loan EMIs?',
    subheading: 'Genuine financial hardship (job loss, medical emergency) is recognized by banks for One-Time Settlement (OTS).',
    defaultIssueId: 'personal_loan',
    defaultIssueTitle: 'Personal Loan Default',
    highlightBenefit: 'RBI-Compliant One-Time Settlement'
  },
  settlement_general: {
    id: 'settlement_general',
    badge: 'Confidential Assessment',
    headline: 'Check Your Debt Settlement Eligibility & Savings',
    subheading: 'Find out the realistic settlement range for your loans and get shielded under advocate-client confidentiality.',
    defaultIssueId: 'settlement_general',
    defaultIssueTitle: 'Want Debt Settlement / Haircut',
    highlightBenefit: 'Estimate 45% - 75% Debt Reduction'
  }
};

/**
 * Automatically inspects the current URL pathname or passed topic slug
 * and resolves the most relevant topic context.
 */
export function matchTopicFromPath(pathname?: string, explicitTopic?: string): TopicContext {
  if (explicitTopic && TOPIC_PROFILES[explicitTopic]) {
    return TOPIC_PROFILES[explicitTopic];
  }

  const path = (pathname || (typeof window !== 'undefined' ? window.location.pathname : '')).toLowerCase();

  // Harassment patterns
  if (
    path.includes('harass') ||
    path.includes('recovery-agent') ||
    path.includes('police') ||
    path.includes('threat') ||
    path.includes('shame') ||
    path.includes('calling-family') ||
    path.includes('dharna') ||
    path.includes('refusing-to-leave') ||
    path.includes('snatching') ||
    path.includes('recording') ||
    path.includes('employer') ||
    path.includes('ombudsman')
  ) {
    return TOPIC_PROFILES.harassment;
  }

  // Legal Notice / Court patterns
  if (
    path.includes('notice') ||
    path.includes('138') ||
    path.includes('cheque-bounce') ||
    path.includes('summons') ||
    path.includes('warrant') ||
    path.includes('arbitration') ||
    path.includes('section-25') ||
    path.includes('court') ||
    path.includes('order-37') ||
    path.includes('drt') ||
    path.includes('writ')
  ) {
    return TOPIC_PROFILES.legal_notice;
  }

  // Account freeze / spouse recovery patterns
  if (
    path.includes('freeze') ||
    path.includes('unblock') ||
    path.includes('salary-account') ||
    path.includes('spouse') ||
    path.includes('separate-salary') ||
    path.includes('lien') ||
    path.includes('upi') ||
    path.includes('set-off') ||
    path.includes('provident-fund') ||
    path.includes('attachment')
  ) {
    return TOPIC_PROFILES.account_freeze;
  }

  // Credit card patterns
  if (
    path.includes('credit-card') ||
    path.includes('card-default') ||
    path.includes('minimum-due') ||
    path.includes('card-settlement')
  ) {
    return TOPIC_PROFILES.credit_card;
  }

  // Personal loan patterns
  if (
    path.includes('personal-loan') ||
    path.includes('emi') ||
    path.includes('default') ||
    path.includes('overdue') ||
    path.includes('npa') ||
    path.includes('education-loan') ||
    path.includes('business-loan')
  ) {
    return TOPIC_PROFILES.personal_loan;
  }

  // Fallback to general settlement
  return TOPIC_PROFILES.settlement_general;
}
