"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";
import LoanSettlementAssessmentFunnel from "@/components/LoanSettlementAssessmentFunnel";
import { getFunnelStorageKey, saveFunnelDraft } from "@/lib/lead-funnel-utils";

interface LenderSchedule {
  id: string;
  name: string;
  category: "Private Bank" | "PSU Bank" | "NBFC";
  bounceDisplay: string;
  penalDisplay: string;
  gstIncludedInBounce: boolean;
  computeLenderBounceExclOrIncl: (emi: number, bounceCount: number, monthsOverdue: number) => {
    baseTotal: number;
    gstTotal: number;
    totalWithGst: number;
    formulaNote: string;
  };
  computePenalTotal: (emi: number, monthsOverdue: number) => {
    basePenal: number;
    gstPenal: number;
    totalPenalWithGst: number;
    penalFormulaNote: string;
  };
  officialUrl: string;
  checkedDate: string;
  spokeHref: string;
  settlementHref: string;
  indicativeSettlementPctRange: [number, number];
  mandateNote: string;
}

const LENDER_SCHEDULES: LenderSchedule[] = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    category: "Private Bank",
    bounceDisplay: "Rs. 450 to Rs. 550 + 18% GST per return (tiered in a month)",
    penalDisplay: "2% per month (24% p.a.) + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount, monthsOverdue) => {
      const m = Math.max(1, monthsOverdue);
      const perMonthAvg = bounceCount / m;
      let raw = 0;
      for (let i = 0; i < bounceCount; i++) {
        const idxInMonth = Math.floor(i % Math.max(1, Math.ceil(perMonthAvg)));
        if (idxInMonth === 0) raw += 450;
        else if (idxInMonth === 1) raw += 500;
        else raw += 550;
      }
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Tiered retail return schedule: Rs. 450 (1st in month), Rs. 500 (2nd), Rs. 550 (3rd+) plus 18% GST.",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.02 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "2% per month simple penal charge on each overdue EMI installment (non-capitalized) plus 18% GST.",
      };
    },
    officialUrl: "https://www.hdfc.bank.in/content/dam/hdfcbankpws/in/en/pdf/notice-board/loan-servicing-centre-related-notices/tat-and-charges-of-standard-services.pdf",
    checkedDate: "2026-11-11",
    spokeHref: "/hdfc-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/hdfc-bank",
    indicativeSettlementPctRange: [40, 60],
    mandateNote: "Salary accounts held inside HDFC Bank face internal standing instruction sweeps and hold liens when salary credits arrive.",
  },
  {
    id: "icici",
    name: "ICICI Bank",
    category: "Private Bank",
    bounceDisplay: "Rs. 500 + 18% GST per bounce instance",
    penalDisplay: "5% per annum + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 500;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Rs. 500 per failed NACH / ECS / auto-debit presentation plus 18% GST (Rs. 590 per bounce).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * (0.05 / 12) * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "5% p.a. (approx. 0.417% per month) on overdue EMI installments plus 18% GST; non-capitalized.",
      };
    },
    officialUrl: "https://www.icici.bank.in/personal-banking/loans/personal-loan/service-charges",
    checkedDate: "2026-11-11",
    spokeHref: "/icici-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/icici-bank",
    indicativeSettlementPctRange: [42, 60],
    mandateNote: "Disrupting active repayment mandates can additionally trigger a Rs. 800 Non-Maintenance of Mode of Payment charge.",
  },
  {
    id: "axis",
    name: "Axis Bank",
    category: "Private Bank",
    bounceDisplay: "Rs. 339 to Rs. 500 + 18% GST per dishonour",
    penalDisplay: "8% per annum + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 500;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Calculated at standard Rs. 500 upper retail slab per dishonour (legacy variants start at Rs. 339) plus 18% GST.",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * (0.08 / 12) * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "8% p.a. (approx. 0.667% per month) penal charge on overdue EMI balance plus 18% GST; non-capitalized.",
      };
    },
    officialUrl: "https://www.axis.bank.in/loans/personal-loan/interest-rates-charges",
    checkedDate: "2026-11-11",
    spokeHref: "/axis-bank-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/axis-bank",
    indicativeSettlementPctRange: [40, 58],
    mandateNote: "Axis Bank executes NACH and internal direct debit runs early on due dates; manual clearance via Axis Mobile stops re-tries.",
  },
  {
    id: "sbi",
    name: "State Bank of India (SBI Xpress Credit)",
    category: "PSU Bank",
    bounceDisplay: "Rs. 250 + 18% GST per SI / NACH return",
    penalDisplay: "2.40% p.a. (up to 60 DPD) to 5% p.a. (60+ DPD) on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 250;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Rs. 250 per failed Standing Instruction / NACH return plus 18% GST (Rs. 295 per failed debit).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const annualRate = monthsOverdue > 2 ? 0.05 : 0.024;
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * (annualRate / 12) * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: `${monthsOverdue > 2 ? "5.00%" : "2.40%"} p.a. penal charge applied on irregular overdue installments plus 18% GST.`,
      };
    },
    officialUrl: "https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/personal-loans-schemes",
    checkedDate: "2026-11-11",
    spokeHref: "/sbi-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/sbi",
    indicativeSettlementPctRange: [45, 65],
    mandateNote: "SBI Xpress Credit loans tied to SBI salary accounts frequently place automated hold amounts on incoming salary credits.",
  },
  {
    id: "kotak",
    name: "Kotak Mahindra Bank",
    category: "Private Bank",
    bounceDisplay: "Rs. 750 per bounce instance (inclusive of taxes)",
    penalDisplay: "8% per annum + 18% GST on overdue EMI",
    gstIncludedInBounce: true,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const total = bounceCount * 750;
      const base = Math.round(total / 1.18);
      return {
        baseTotal: base,
        gstTotal: total - base,
        totalWithGst: total,
        formulaNote: "Rs. 750 per dishonour instance (inclusive of applicable GST per Kotak MITC).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * (0.08 / 12) * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "8% p.a. penal charge for actual days delayed on overdue EMI plus 18% GST.",
      };
    },
    officialUrl: "https://www.kotak.bank.in/en/personal-banking/loans/personal-loan/fees-and-charges.html",
    checkedDate: "2026-11-11",
    spokeHref: "/kotak-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/kotak-bank",
    indicativeSettlementPctRange: [40, 58],
    mandateNote: "Kotak personal loans typically fall on the 2nd or 5th of the month; swapping mandate accounts costs Rs. 500 + GST.",
  },
  {
    id: "bajaj",
    name: "Bajaj Finance",
    category: "NBFC",
    bounceDisplay: "Rs. 700 to Rs. 1,200 per bounce (inclusive of taxes)",
    penalDisplay: "Up to 36% p.a. (approx. 0.10% per day) on overdue EMI",
    gstIncludedInBounce: true,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const unit = 950;
      const total = bounceCount * unit;
      const base = Math.round(total / 1.18);
      return {
        baseTotal: base,
        gstTotal: total - base,
        totalWithGst: total,
        formulaNote: "Estimated at midpoint Rs. 950 per bounce (official schedule spans Rs. 700 to Rs. 1,200 inclusive of taxes per KFS).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.03 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "Calculated daily at up to 36% p.a. (3% per month) on unpaid installment plus applicable taxes.",
      };
    },
    officialUrl: "https://www.bajajfinserv.in/all-fees-and-charges",
    checkedDate: "2026-11-11",
    spokeHref: "/bajaj-finance-emi-bounce-charges",
    settlementHref: "/loan-settlement/bajaj-finance",
    indicativeSettlementPctRange: [42, 62],
    mandateNote: "Bajaj Finance presents NACH on the 2nd of the month; clearing overdue EMIs on the Experia app halts daily penal accrual.",
  },
  {
    id: "tata",
    name: "Tata Capital",
    category: "NBFC",
    bounceDisplay: "Rs. 600 + 18% GST per bounce (plus Rs. 450 mandate reject fee)",
    penalDisplay: "3% per month (36% p.a.) + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 600;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Rs. 600 per dishonoured NACH / ECS / cheque presentation plus 18% GST (Rs. 708 per bounce).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.03 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "3% per month (36% p.a.) non-capitalized penal charge on defaulted installment plus 18% GST.",
      };
    },
    officialUrl: "https://www.tatacapital.com/personal-loan/rates-and-charges.html",
    checkedDate: "2026-11-11",
    spokeHref: "/tata-capital-personal-loan-emi-bounce-charges",
    settlementHref: "/tata-capital-personal-loan-settlement",
    indicativeSettlementPctRange: [42, 60],
    mandateNote: "Failure to re-register a rejected e-Mandate within 30 days attracts an additional Rs. 450 + GST service charge.",
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    category: "Private Bank",
    bounceDisplay: "7.5% to 12% of EMI (Min Rs. 400, Max Rs. 1,000) + 18% GST",
    penalDisplay: "1% per month of unpaid EMI or Rs. 300 (whichever is higher) + 18% GST",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (emi, bounceCount) => {
      const singleBounce = Math.min(1000, Math.max(400, Math.round(emi * 0.1)));
      const raw = bounceCount * singleBounce;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: `Computed at 10% midpoint of EMI clamped to Rs. 400-Rs. 1,000 (Rs. ${singleBounce} per bounce) plus 18% GST.`,
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const monthlyPenalPerEmi = Math.max(300, Math.round(emi * 0.01));
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(monthlyPenalPerEmi * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "1% per month of unpaid EMI or Rs. 300 minimum per overdue month plus 18% GST.",
      };
    },
    officialUrl: "https://www.idfcfirst.bank.in/content/dam/idfcfirstbank/pdf/Bounce-and-Penal-Charges-Revision-Nov-25.pdf",
    checkedDate: "2026-11-11",
    spokeHref: "/idfc-first-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/idfc-first-bank",
    indicativeSettlementPctRange: [40, 58],
    mandateNote: "For salaried EMIs above Rs. 10,000, IDFC FIRST Bank's percentage bounce fee hits the Rs. 1,000 + GST ceiling quickly.",
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    category: "Private Bank",
    bounceDisplay: "Rs. 450 to Rs. 500 + 18% GST per bounce",
    penalDisplay: "24% p.a. (2% per month) on overdue EMI or Min Rs. 100 + 18% GST",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 500;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Rs. 500 per dishonoured auto-debit / cheque presentation plus 18% GST.",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.max(100 * monthsOverdue, Math.round(emi * 0.02 * avgOverdueInstallmentMonths));
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "24% p.a. (2% per month) on overdue EMI amount (minimum Rs. 100) plus 18% GST.",
      };
    },
    officialUrl: "https://www.indusind.bank.in/content/dam/indusind-corporate/schedule-of-charges/others/Personal-Loan-SOC.pdf",
    checkedDate: "2026-11-11",
    spokeHref: "/indusind-personal-loan-emi-bounce-charges",
    settlementHref: "/loan-settlement/indusind-bank",
    indicativeSettlementPctRange: [38, 58],
    mandateNote: "Swapping NACH bank accounts with IndusInd Bank carries a Rs. 500 + GST instrument swap fee.",
  },
  {
    id: "poonawalla",
    name: "Poonawalla Fincorp",
    category: "NBFC",
    bounceDisplay: "Rs. 500 to Rs. 1,500 + 18% GST per bounce",
    penalDisplay: "24% p.a. (2% per month) + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 750;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Estimated at Rs. 750 standard retail slab (schedule spans Rs. 500 to Rs. 1,500 per KFS) plus 18% GST.",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.02 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "24% p.a. (2% per month) default penal charge on overdue EMI plus 18% GST.",
      };
    },
    officialUrl: "https://poonawallafincorp.com/instant-personal-loan/interest-rates-and-charges",
    checkedDate: "2026-11-11",
    spokeHref: "/poonawalla-fincorp-emi-bounce-charges",
    settlementHref: "/poonawalla-fincorp-loan-settlement",
    indicativeSettlementPctRange: [40, 58],
    mandateNote: "Zero foreclosure fee applies on own-source payoff, making early consolidation attractive when total debt is manageable.",
  },
  {
    id: "aditya-birla",
    name: "Aditya Birla Finance (ABFL)",
    category: "NBFC",
    bounceDisplay: "Rs. 750 to Rs. 1,000 + 18% GST per bounce",
    penalDisplay: "Up to 3% per month (36% p.a.) + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 850;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Estimated at Rs. 850 per return (official schedule spans Rs. 750 to Rs. 1,000 across retail/digital variants) plus 18% GST.",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.03 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "Up to 3% per month (36% p.a.) non-capitalized late payment charge on overdue EMI plus 18% GST.",
      };
    },
    officialUrl: "https://www.adityabirlacapital.com/-/media/ABCL/pdf/Aditya-Birla-Finance-Limited/ABCL_RCMB--Physical-April25.ashx",
    checkedDate: "2026-11-11",
    spokeHref: "/aditya-birla-finance-emi-bounce-charges",
    settlementHref: "/aditya-birla-finance-loan-settlement",
    indicativeSettlementPctRange: [42, 60],
    mandateNote: "Formal loan rescheduling at ABFL attracts a separate Rs. 5,000 to Rs. 7,500 fee, so evaluate cash flow carefully first.",
  },
  {
    id: "smfg",
    name: "SMFG India Credit",
    category: "NBFC",
    bounceDisplay: "Rs. 500 + 18% GST per dishonour presentation",
    penalDisplay: "2% per month (24% p.a.) daily pro-rata + 18% GST on overdue EMI",
    gstIncludedInBounce: false,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const raw = bounceCount * 500;
      const gst = Math.round(raw * 0.18);
      return {
        baseTotal: raw,
        gstTotal: gst,
        totalWithGst: raw + gst,
        formulaNote: "Rs. 500 per dishonoured ECS / NACH / cheque presentation plus 18% GST (Rs. 590 per bounce).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.02 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "2% per month (24% p.a.) calculated day-to-day on overdue installment plus 18% GST.",
      };
    },
    officialUrl: "https://www.smfgindiacredit.com/pricing-policy/loan-charges.aspx",
    checkedDate: "2026-11-11",
    spokeHref: "/smfg-india-credit-emi-bounce-charges",
    settlementHref: "/smfg-india-credit-loan-settlement",
    indicativeSettlementPctRange: [40, 58],
    mandateNote: "SMFG India Credit generally restricts part-prepayments on personal loans; full foreclosure or structured settlement are primary exits.",
  },
  {
    id: "hero",
    name: "Hero FinCorp",
    category: "NBFC",
    bounceDisplay: "Rs. 350 per bounce instance (inclusive of taxes)",
    penalDisplay: "3% per month (36% p.a.) pro-rated daily on overdue EMI",
    gstIncludedInBounce: true,
    computeLenderBounceExclOrIncl: (_emi, bounceCount) => {
      const total = bounceCount * 350;
      const base = Math.round(total / 1.18);
      return {
        baseTotal: base,
        gstTotal: total - base,
        totalWithGst: total,
        formulaNote: "Rs. 350 per NACH / ECS / cheque dishonour instance (inclusive of applicable taxes).",
      };
    },
    computePenalTotal: (emi, monthsOverdue) => {
      const avgOverdueInstallmentMonths = (monthsOverdue * (monthsOverdue + 1)) / 2;
      const base = Math.round(emi * 0.03 * avgOverdueInstallmentMonths);
      const gst = Math.round(base * 0.18);
      return {
        basePenal: base,
        gstPenal: gst,
        totalPenalWithGst: base + gst,
        penalFormulaNote: "3% per month (36% p.a.) pro-rated daily on overdue EMI plus applicable GST.",
      };
    },
    officialUrl: "https://www.herofincorp.com/personal-loan-fees-and-charges",
    checkedDate: "2026-11-11",
    spokeHref: "/hero-fincorp-emi-bounce-charges",
    settlementHref: "/hero-fincorp-personal-loan-settlement",
    indicativeSettlementPctRange: [40, 60],
    mandateNote: "While per-bounce fees are Rs. 350, the 3% monthly overdue penal charge compounds total delay cost rapidly across 90+ DPD.",
  },
];

const tocItems = [
  { id: "bounce-calculator", title: "Interactive Bounce Calculator" },
  { id: "readiness-action", title: "Settlement Readiness Check" },
  { id: "verified-schedule-table", title: "13-Lender Charge Matrix" },
  { id: "double-debit-math", title: "Double Bounce Fee Math" },
  { id: "rbi-penal-rules", title: "RBI Penal Charge Rules" },
  { id: "nach-representation-cycle", title: "NACH Re-Presentation Cycle" },
  { id: "salaried-decision-framework", title: "Restructure vs Settle" },
  { id: "faqs", title: "Frequently Asked Questions" },
];

const faqs = [
  {
    q: "How are personal loan EMI bounce charges calculated in India?",
    a: "When an automated NACH or ECS debit fails, two separate charges usually apply: your lender levies an EMI bounce or dishonour fee (typically Rs. 250 to Rs. 1,200 per failed presentation), and the savings or salary bank holding your account levies an inward NACH return charge (commonly Rs. 250 to Rs. 500 plus 18% GST). On top of both flat fees, the lender charges a daily or monthly non-capitalized penal charge on the unpaid EMI until cleared.",
  },
  {
    q: "Can a bank or NBFC charge EMI bounce fees multiple times in the same month?",
    a: "Lenders are permitted under NPCI NACH rules to re-present a dishonoured mandate to recover an unpaid installment, and automated billing systems often log a bounce fee on each failed presentation. However, aggressive back-to-back presentations within days when the borrower has already communicated financial distress can be disputed with the Grievance Redressal Officer as unreasonable under RBI Fair Practices norms.",
  },
  {
    q: "Is 18% GST charged on both EMI bounce fees and penal charges?",
    a: "Yes. Under GST regulations applicable to banking and NBFC services, 18% GST applies to EMI dishonour fees, NACH mandate swap charges, and late payment penal charges. Some lenders such as Kotak Mahindra Bank, Bajaj Finance, and Hero FinCorp publish bounce fees inclusive of taxes, whereas HDFC Bank, ICICI Bank, Axis Bank, SBI, Tata Capital, IDFC FIRST Bank, IndusInd Bank, and SMFG India Credit add 18% GST over the base fee.",
  },
  {
    q: "Can banks add unpaid EMI bounce charges to my loan principal and charge interest on them?",
    a: "No. Under the RBI Fair Lending Practice circular on Penal Charges in Loan Accounts (effective across regulated banks and NBFCs from 2024 onward), lenders are strictly prohibited from capitalizing penal charges. They cannot fold unpaid bounce fees or late payment penalties into your principal to charge compounding interest on top of penalties.",
  },
  {
    q: "Why did my savings bank also deduct Rs. 295 or Rs. 590 when my NBFC EMI bounced?",
    a: "Whenever an external lender such as Bajaj Finance, Tata Capital, or HDFC Bank sends an electronic NACH debit request to your salary or savings bank and your balance is insufficient, your destination bank processes an inward return. Most public sector banks deduct around Rs. 250 plus 18% GST (Rs. 295) and private banks deduct Rs. 450 to Rs. 500 plus 18% GST (Rs. 531 to Rs. 590) directly from your next deposit.",
  },
  {
    q: "How does IDFC FIRST Bank calculate personal loan bounce charges differently from HDFC or ICICI?",
    a: "Unlike HDFC Bank (Rs. 450 to Rs. 550 + GST) or ICICI Bank (Rs. 500 + GST) which levy flat slabs, IDFC FIRST Bank calculates personal loan bounce charges as a percentage of the bounced EMI (7.5% to 12% depending on variant), subject to a floor of Rs. 400 and a cap of Rs. 1,000 plus 18% GST per failed presentation.",
  },
  {
    q: "If I pay my overdue EMI manually via UPI or NEFT after a bounce, will another bounce fee hit?",
    a: "If you pay through the lender's official loan portal or app at least 24 to 48 hours before their next scheduled NACH re-presentation batch, the system usually suppresses the retry. Always save the payment receipt and notify customer support immediately if a duplicate NACH file was already dispatched to NPCI.",
  },
  {
    q: "When does it make financial sense for a salaried borrower to consider personal loan settlement?",
    a: "Loan settlement is a last-resort resolution suited for salaried borrowers facing genuine hardship such as job loss, pay cuts, medical emergencies, or multi-loan EMI traps where total unsecured debt across personal loans, credit cards, and app loans is Rs. 3,00,000 or higher and monthly EMIs exceed sustainable take-home pay across 90+ days past due.",
  },
  {
    q: "Are accumulated EMI bounce fees and penal charges waived during a one-time settlement?",
    a: "In most negotiated personal loan settlements after an account reaches Non-Performing Asset (NPA) status at 90+ days past due, banks and NBFCs waive 100% of accumulated bounce fees and uncollected penal charges first, and then negotiate a structured haircut on accrued interest and principal based on documented financial hardship.",
  },
  {
    q: "What should I do if my total debt is below Rs. 3 Lakhs and EMIs are bouncing?",
    a: "When combined unsecured dues are below Rs. 3,00,000, formal legal settlement programs are rarely cost-effective relative to CIBIL impact. Instead, request an EMI due-date alignment to match your salary credit date, pay overdue installments manually to halt NACH retries, submit a first-time bounce waiver email to the branch or nodal desk, or seek a 6-to-12-month tenure extension.",
  },
  {
    q: "Does pausing or cancelling my e-NACH mandate stop personal loan penal charges?",
    a: "Stopping an active NACH mandate without lender consent only stops repeated destination-bank return fees; it does not pause your EMI obligation or penal charges, and it constitutes a payment default under your loan agreement. Only request mandate modification alongside a written restructuring or settlement representation.",
  },
  {
    q: "How quickly does a single personal loan EMI bounce affect my CIBIL score?",
    a: "A technical or single-day bounce cleared within 2 to 5 days generally causes minimal bureau damage if regularized before the lender's monthly reporting snapshot, though it still records a few Days Past Due (DPD). Crossing 30 DPD (SMA-1), 60 DPD (SMA-2), and 90 DPD (NPA) triggers steep 50 to 120+ point drops in CIBIL.",
  },
];

export default function PersonalLoanBounceCalculatorClient() {
  const [selectedLenderId, setSelectedLenderId] = useState<string>("hdfc");
  const [monthlyEmi, setMonthlyEmi] = useState<string>("18500");
  const [principalOutstanding, setPrincipalOutstanding] = useState<string>("380000");
  const [bounceCount, setBounceCount] = useState<string>("3");
  const [monthsOverdue, setMonthsOverdue] = useState<string>("2");
  const [bankSideReturnBase, setBankSideReturnBase] = useState<string>("500");
  const [otherUnsecuredDebt, setOtherUnsecuredDebt] = useState<string>("120000");
  const [monthlyRePresentationsProj, setMonthlyRePresentationsProj] = useState<string>("2");
  const [funnelRefreshKey, setFunnelRefreshKey] = useState<number>(0);

  const selectedLender = useMemo(
    () => LENDER_SCHEDULES.find((l) => l.id === selectedLenderId) || LENDER_SCHEDULES[0],
    [selectedLenderId]
  );

  const computed = useMemo(() => {
    const emi = Math.max(0, Number(monthlyEmi) || 0);
    const principal = Math.max(0, Number(principalOutstanding) || 0);
    const bounces = Math.max(0, Math.min(60, Math.round(Number(bounceCount) || 0)));
    const months = Math.max(0, Math.min(36, Math.round(Number(monthsOverdue) || 0)));
    const bankBase = Math.max(0, Number(bankSideReturnBase) || 0);
    const otherDues = Math.max(0, Number(otherUnsecuredDebt) || 0);
    const retriesPerMonth = Math.max(1, Math.min(5, Math.round(Number(monthlyRePresentationsProj) || 2)));

    const lenderBounce = selectedLender.computeLenderBounceExclOrIncl(emi, bounces, Math.max(1, months));
    const bankReturnBaseTotal = bounces * bankBase;
    const bankReturnGstTotal = Math.round(bankReturnBaseTotal * 0.18);
    const bankReturnTotalWithGst = bankReturnBaseTotal + bankReturnGstTotal;

    const penal = months > 0 && emi > 0
      ? selectedLender.computePenalTotal(emi, months)
      : { basePenal: 0, gstPenal: 0, totalPenalWithGst: 0, penalFormulaNote: selectedLender.penalDisplay };

    const totalChargesDrainSoFar =
      lenderBounce.totalWithGst + bankReturnTotalWithGst + penal.totalPenalWithGst;

    // 3-month and 6-month projections if left unresolved
    const bounces3m = bounces + retriesPerMonth * 3;
    const months3m = months + 3;
    const lb3m = selectedLender.computeLenderBounceExclOrIncl(emi, bounces3m, months3m);
    const br3m = Math.round(bounces3m * bankBase * 1.18);
    const pen3m = selectedLender.computePenalTotal(emi, months3m);
    const totalDrain3m = lb3m.totalWithGst + br3m + pen3m.totalPenalWithGst;

    const bounces6m = bounces + retriesPerMonth * 6;
    const months6m = months + 6;
    const lb6m = selectedLender.computeLenderBounceExclOrIncl(emi, bounces6m, months6m);
    const br6m = Math.round(bounces6m * bankBase * 1.18);
    const pen6m = selectedLender.computePenalTotal(emi, months6m);
    const totalDrain6m = lb6m.totalWithGst + br6m + pen6m.totalPenalWithGst;

    const unpaidInstallmentsPrincipalAndInterest = emi * months;
    const currentThisLoanClaim = principal + totalChargesDrainSoFar;
    const totalCombinedDebt = currentThisLoanClaim + otherDues;

    const [lowPct, highPct] = selectedLender.indicativeSettlementPctRange;
    const indicativeLow = Math.round((principal * lowPct) / 100);
    const indicativeHigh = Math.round((principal * highPct) / 100);

    let dpdStage = "Current / Technical Bounce (< 30 DPD)";
    if (months === 1) dpdStage = "SMA-1 Early Delinquency (31 to 60 DPD)";
    else if (months === 2) dpdStage = "SMA-2 Pre-NPA Critical Window (61 to 90 DPD)";
    else if (months >= 3) dpdStage = "90+ DPD Non-Performing Asset (NPA Settlement Window)";

    return {
      emi,
      principal,
      bounces,
      months,
      otherDues,
      retriesPerMonth,
      lenderBounce,
      bankReturnBaseTotal,
      bankReturnGstTotal,
      bankReturnTotalWithGst,
      penal,
      totalChargesDrainSoFar,
      totalDrain3m,
      totalDrain6m,
      extraLeakNext3m: Math.max(0, totalDrain3m - totalChargesDrainSoFar),
      extraLeakNext6m: Math.max(0, totalDrain6m - totalChargesDrainSoFar),
      unpaidInstallmentsPrincipalAndInterest,
      currentThisLoanClaim,
      totalCombinedDebt,
      indicativeLow,
      indicativeHigh,
      dpdStage,
      isEligibleForSettlementFunnel: totalCombinedDebt >= 300000,
    };
  }, [
    selectedLender,
    monthlyEmi,
    principalOutstanding,
    bounceCount,
    monthsOverdue,
    bankSideReturnBase,
    otherUnsecuredDebt,
    monthlyRePresentationsProj,
  ]);

  // Prefill funnel localStorage whenever totalCombinedDebt >= 3,00,000 so salaried borrower lands smoothly
  useEffect(() => {
    if (!computed.isEligibleForSettlementFunnel) return;
    const storageKey = getFunnelStorageKey("home_settlement_funnel");
    const loanLabel =
      computed.otherDues > 0
        ? "Multiple Loans (Cards & Personal Loans)"
        : "Personal Loan";
    let bracket = "₹3 Lakhs to ₹15 Lakhs";
    if (computed.totalCombinedDebt > 5000000) bracket = "Above ₹50 Lakhs";
    else if (computed.totalCombinedDebt >= 3000000) bracket = "₹30 Lakhs to ₹50 Lakhs";
    else if (computed.totalCombinedDebt >= 1500000) bracket = "₹15 Lakhs to ₹30 Lakhs";

    saveFunnelDraft(storageKey, {
      step: 3,
      issueId: "loan_settlement",
      issueTitle: loanLabel,
      debtBracket: bracket,
      loanTypes: [loanLabel],
      updatedAt: Date.now(),
    });
    setFunnelRefreshKey((k) => k + 1);
  }, [computed.isEligibleForSettlementFunnel, computed.totalCombinedDebt, computed.otherDues]);

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.settleloans.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Personal Loan EMI Bounce Charges",
            "item": "https://www.settleloans.in/personal-loan-emi-bounce-charges"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "EMI Bounce Charges Calculator",
            "item": "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator#article",
        "headline": "Personal Loan EMI Bounce & Penal Charges Calculator by Lender (2026-27)",
        "description": "Calculate cumulative EMI bounce fees, bank NACH return charges, 18% GST, and non-capitalized penal charges across 13 Indian banks and NBFCs.",
        "author": {
          "@type": "Organization",
          "name": "SettleLoans Salaried Debt Advisory"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SettleLoans",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.settleloans.in/logo/logo.svg"
          }
        },
        "datePublished": "2026-11-11",
        "dateModified": "2026-11-11",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.settleloans.in/tools/personal-loan-emi-bounce-charges-calculator#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How are personal loan EMI bounce charges calculated in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When an automated NACH or ECS debit fails, two separate charges usually apply: your lender levies an EMI bounce or dishonour fee (typically Rs. 250 to Rs. 1,200 per failed presentation), and the savings or salary bank holding your account levies an inward NACH return charge (commonly Rs. 250 to Rs. 500 plus 18% GST). On top of both flat fees, the lender charges a daily or monthly non-capitalized penal charge on the unpaid EMI until cleared."
            }
          },
          {
            "@type": "Question",
            "name": "Can a bank or NBFC charge EMI bounce fees multiple times in the same month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lenders are permitted under NPCI NACH rules to re-present a dishonoured mandate to recover an unpaid installment, and automated billing systems often log a bounce fee on each failed presentation. However, aggressive back-to-back presentations within days when the borrower has already communicated financial distress can be disputed with the Grievance Redressal Officer as unreasonable under RBI Fair Practices norms."
            }
          },
          {
            "@type": "Question",
            "name": "Is 18% GST charged on both EMI bounce fees and penal charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Under GST regulations applicable to banking and NBFC services, 18% GST applies to EMI dishonour fees, NACH mandate swap charges, and late payment penal charges. Some lenders such as Kotak Mahindra Bank, Bajaj Finance, and Hero FinCorp publish bounce fees inclusive of taxes, whereas HDFC Bank, ICICI Bank, Axis Bank, SBI, Tata Capital, IDFC FIRST Bank, IndusInd Bank, and SMFG India Credit add 18% GST over the base fee."
            }
          },
          {
            "@type": "Question",
            "name": "Can banks add unpaid EMI bounce charges to my loan principal and charge interest on them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under the RBI Fair Lending Practice circular on Penal Charges in Loan Accounts, lenders are strictly prohibited from capitalizing penal charges. They cannot fold unpaid bounce fees or late payment penalties into your principal to charge compounding interest on top of penalties."
            }
          },
          {
            "@type": "Question",
            "name": "Why did my savings bank also deduct Rs. 295 or Rs. 590 when my NBFC EMI bounced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Whenever an external lender such as Bajaj Finance, Tata Capital, or HDFC Bank sends an electronic NACH debit request to your salary or savings bank and your balance is insufficient, your destination bank processes an inward return. Most public sector banks deduct around Rs. 250 plus 18% GST (Rs. 295) and private banks deduct Rs. 450 to Rs. 500 plus 18% GST (Rs. 531 to Rs. 590) directly from your next deposit."
            }
          },
          {
            "@type": "Question",
            "name": "How does IDFC FIRST Bank calculate personal loan bounce charges differently from HDFC or ICICI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike HDFC Bank (Rs. 450 to Rs. 550 + GST) or ICICI Bank (Rs. 500 + GST) which levy flat slabs, IDFC FIRST Bank calculates personal loan bounce charges as a percentage of the bounced EMI (7.5% to 12% depending on variant), subject to a floor of Rs. 400 and a cap of Rs. 1,000 plus 18% GST per failed presentation."
            }
          },
          {
            "@type": "Question",
            "name": "If I pay my overdue EMI manually via UPI or NEFT after a bounce, will another bounce fee hit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you pay through the lender's official loan portal or app at least 24 to 48 hours before their next scheduled NACH re-presentation batch, the system usually suppresses the retry. Always save the payment receipt and notify customer support immediately if a duplicate NACH file was already dispatched to NPCI."
            }
          },
          {
            "@type": "Question",
            "name": "When does it make financial sense for a salaried borrower to consider personal loan settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Loan settlement is a last-resort resolution suited for salaried borrowers facing genuine hardship such as job loss, pay cuts, medical emergencies, or multi-loan EMI traps where total unsecured debt across personal loans, credit cards, and app loans is Rs. 3,00,000 or higher and monthly EMIs exceed sustainable take-home pay across 90+ days past due."
            }
          },
          {
            "@type": "Question",
            "name": "Are accumulated EMI bounce fees and penal charges waived during a one-time settlement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most negotiated personal loan settlements after an account reaches Non-Performing Asset (NPA) status at 90+ days past due, banks and NBFCs waive 100% of accumulated bounce fees and uncollected penal charges first, and then negotiate a structured haircut on accrued interest and principal based on documented financial hardship."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if my total debt is below Rs. 3 Lakhs and EMIs are bouncing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "When combined unsecured dues are below Rs. 3,00,000, formal legal settlement programs are rarely cost-effective relative to CIBIL impact. Instead, request an EMI due-date alignment to match your salary credit date, pay overdue installments manually to halt NACH retries, submit a first-time bounce waiver email to the branch or nodal desk, or seek a 6-to-12-month tenure extension."
            }
          },
          {
            "@type": "Question",
            "name": "Does pausing or cancelling my e-NACH mandate stop personal loan penal charges?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Stopping an active NACH mandate without lender consent only stops repeated destination-bank return fees; it does not pause your EMI obligation or penal charges, and it constitutes a payment default under your loan agreement. Only request mandate modification alongside a written restructuring or settlement representation."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly does a single personal loan EMI bounce affect my CIBIL score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A technical or single-day bounce cleared within 2 to 5 days generally causes minimal bureau damage if regularized before the lender's monthly reporting snapshot, though it still records a few Days Past Due (DPD). Crossing 30 DPD (SMA-1), 60 DPD (SMA-2), and 90 DPD (NPA) triggers steep 50 to 120+ point drops in CIBIL."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main
        className="flex-grow w-full bg-white selection:bg-[#1F5EFF] selection:text-white"
        style={{ fontFamily: "var(--font-satoshi), Satoshi, sans-serif" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* Hero Section */}
        <section className="w-full bg-[#2E2E2E] pt-24 pb-12 md:pt-36 md:pb-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#1F5EFF]/15 text-[#1F5EFF] text-xs md:text-sm font-bold mb-5 tracking-wider uppercase">
              Salaried Personal Loan Diagnostic Tool
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#DEDEDE] mb-6 leading-[1.12] tracking-tight">
              Personal Loan EMI Bounce &amp; Penal Charges Calculator
            </h1>
            <p className="text-base md:text-xl text-[#DEDEDE]/85 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
              Select your bank or NBFC to calculate exact NACH bounce fees, 18% GST, savings-bank return deductions, non-capitalized penal charges, and your 3-to-6-month overdue cost projection using verified lender schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#bounce-calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#1F5EFF] text-white font-bold py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 text-base md:text-lg shadow-lg"
              >
                Calculate Lender Bounce Drain
              </a>
              <a
                href="#verified-schedule-table"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-[10px] hover:bg-white/20 transition-all duration-300 text-base md:text-lg"
              >
                Compare 13 Lender Fee Tables
              </a>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="w-full bg-white border-b border-[#DEDEDE] overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs md:text-sm text-[#747474]">
                <li>
                  <Link href="https://www.settleloans.in/" className="hover:text-[#1F5EFF] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <Link
                    href="https://www.settleloans.in/personal-loan-emi-bounce-charges"
                    className="hover:text-[#1F5EFF] transition-colors"
                  >
                    Personal Loan EMI Bounce Charges
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li className="font-bold text-[#2E2E2E]" aria-current="page">
                  EMI Bounce Charges Calculator
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* 3-Column Layout */}
        <div className="w-full mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 flex flex-col lg:flex-row gap-10 relative">
          {/* Left Column: TOC */}
          <aside className="hidden lg:block w-1/5 min-w-[230px] relative">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </aside>

          {/* Middle Column: Calculator + Comprehensive Salaried Guide */}
          <article className="w-full lg:w-3/5 flex-1 max-w-none font-sans text-[#2E2E2E]">
            {/* Interactive Calculator Section */}
            <section
              id="bounce-calculator"
              className="scroll-mt-28 mb-12 bg-[#F8FAFC] p-6 sm:p-8 md:p-10 rounded-[32px] border-2 border-[#1F5EFF]/15 shadow-lg"
            >
              <div className="mb-8 border-b border-slate-200 pb-6">
                <h2 className="text-2xl md:text-3xl font-black text-[#2E2E2E] mb-2 tracking-tight">
                  Lender-Wise EMI Bounce &amp; Penal Cost Estimator
                </h2>
                <p className="text-sm md:text-base text-slate-600">
                  Sourced directly from official bank and NBFC Schedules of Charges and Key Fact Statement norms (verified on 11 November 2026).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Input 1: Lender */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="lender-select"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    1. Select Your Personal Loan Bank or NBFC
                  </label>
                  <select
                    id="lender-select"
                    value={selectedLenderId}
                    onChange={(e) => setSelectedLenderId(e.target.value)}
                    className="w-full p-4 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base text-[#2E2E2E] cursor-pointer"
                  >
                    {LENDER_SCHEDULES.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name} ({l.category}) - {l.bounceDisplay}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
                    <span>
                      <strong>Verified Rule:</strong> {selectedLender.bounceDisplay}
                    </span>
                    <span>•</span>
                    <a
                      href={selectedLender.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      Official Tariff Source (Checked {selectedLender.checkedDate})
                    </a>
                    <span>•</span>
                    <Link
                      href={`https://www.settleloans.in${selectedLender.spokeHref}`}
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      Read {selectedLender.name} Bounce Guide
                    </Link>
                  </div>
                </div>

                {/* Input 2: Monthly EMI */}
                <div>
                  <label
                    htmlFor="monthly-emi"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    2. Monthly Personal Loan EMI (INR)
                  </label>
                  <input
                    id="monthly-emi"
                    type="number"
                    min={1000}
                    step={500}
                    value={monthlyEmi}
                    onChange={(e) => setMonthlyEmi(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base"
                    placeholder="e.g. 18500"
                  />
                </div>

                {/* Input 3: Principal Outstanding */}
                <div>
                  <label
                    htmlFor="principal-os"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    3. Remaining Principal on This PL (INR)
                  </label>
                  <input
                    id="principal-os"
                    type="number"
                    min={0}
                    step={10000}
                    value={principalOutstanding}
                    onChange={(e) => setPrincipalOutstanding(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base"
                    placeholder="e.g. 380000"
                  />
                </div>

                {/* Input 4: Total Bounces & Re-presentations */}
                <div>
                  <label
                    htmlFor="bounce-count"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    4. Total NACH / ECS Bounces So Far
                  </label>
                  <input
                    id="bounce-count"
                    type="number"
                    min={0}
                    max={60}
                    value={bounceCount}
                    onChange={(e) => setBounceCount(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base"
                    placeholder="Include re-presentations (e.g. 3)"
                  />
                  <span className="block text-[11px] text-slate-500 mt-1">
                    Count every failed auto-debit presentation across all missed months.
                  </span>
                </div>

                {/* Input 5: Months Overdue */}
                <div>
                  <label
                    htmlFor="months-overdue"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    5. Unpaid Months Overdue So Far
                  </label>
                  <input
                    id="months-overdue"
                    type="number"
                    min={0}
                    max={36}
                    value={monthsOverdue}
                    onChange={(e) => setMonthsOverdue(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base"
                    placeholder="e.g. 2"
                  />
                  <span className="block text-[11px] text-slate-500 mt-1">
                    3+ unpaid months places a retail loan in the 90+ DPD NPA category.
                  </span>
                </div>

                {/* Input 6: Salary/Savings Bank Return Fee */}
                <div>
                  <label
                    htmlFor="bank-return-fee"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    6. Your Salary Bank Inward NACH Return Fee
                  </label>
                  <select
                    id="bank-return-fee"
                    value={bankSideReturnBase}
                    onChange={(e) => setBankSideReturnBase(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-sm cursor-pointer"
                  >
                    <option value="500">Private Salary Bank (Rs. 500 + 18% GST per bounce)</option>
                    <option value="250">PSU Salary Bank (Rs. 250 + 18% GST per bounce)</option>
                    <option value="0">Same-Bank Internal SI Only (Rs. 0 separate bank fee)</option>
                  </select>
                </div>

                {/* Input 7: Expected Monthly Retries */}
                <div>
                  <label
                    htmlFor="monthly-retries"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    7. Expected NACH Presentations / Month Ahead
                  </label>
                  <select
                    id="monthly-retries"
                    value={monthlyRePresentationsProj}
                    onChange={(e) => setMonthlyRePresentationsProj(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-sm cursor-pointer"
                  >
                    <option value="1">1 presentation per month (single debit run)</option>
                    <option value="2">2 presentations per month (1 initial + 1 retry)</option>
                    <option value="3">3 presentations per month (aggressive retry cycle)</option>
                  </select>
                </div>

                {/* Input 8: Other Unsecured Dues */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="other-dues"
                    className="block text-xs font-black text-[#2E2E2E] uppercase tracking-wider mb-2"
                  >
                    8. Other Personal Loan, Credit Card &amp; App Loan Dues Combined (INR)
                  </label>
                  <input
                    id="other-dues"
                    type="number"
                    min={0}
                    step={10000}
                    value={otherUnsecuredDebt}
                    onChange={(e) => setOtherUnsecuredDebt(e.target.value)}
                    className="w-full p-3.5 rounded-xl border-2 border-slate-200 bg-white focus:border-[#1F5EFF] outline-none font-bold text-base"
                    placeholder="Enter 0 if this is your only unsecured loan"
                  />
                  <span className="block text-[11px] text-slate-500 mt-1">
                    Salaried debt resolution covers all unsecured lenders together (SettleLoans minimum combined portfolio: Rs. 3,00,000).
                  </span>
                </div>
              </div>

              {/* Output Breakdown Cards */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1F5EFF]">
                      Live Fee &amp; Penalty Diagnostic ({selectedLender.name})
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-[#2E2E2E]">
                      Total Fee &amp; Penal Drain So Far: ₹{computed.totalChargesDrainSoFar.toLocaleString("en-IN")}
                    </h3>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    {computed.dpdStage}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Lender Bounce Fees + GST
                    </div>
                    <div className="text-2xl font-black text-[#2E2E2E]">
                      ₹{computed.lenderBounce.totalWithGst.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Base ₹{computed.lenderBounce.baseTotal.toLocaleString("en-IN")} + Tax ₹{computed.lenderBounce.gstTotal.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Salary Bank Return Fees
                    </div>
                    <div className="text-2xl font-black text-[#2E2E2E]">
                      ₹{computed.bankReturnTotalWithGst.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Inward NACH return + 18% GST at destination bank
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold text-slate-500 uppercase mb-1">
                      Penal Charges Accrued
                    </div>
                    <div className="text-2xl font-black text-[#1F5EFF]">
                      ₹{computed.penal.totalPenalWithGst.toLocaleString("en-IN")}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Non-capitalized overdue penalty + 18% GST
                    </div>
                  </div>
                </div>

                {/* 3-Month and 6-Month Projection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-red-50/70 border border-red-200">
                    <div className="text-xs font-black uppercase tracking-wider text-red-800 mb-1">
                      3-Month Unchecked Bounce Projection
                    </div>
                    <div className="text-2xl font-black text-red-900">
                      ₹{computed.totalDrain3m.toLocaleString("en-IN")} cumulative charges
                    </div>
                    <p className="text-xs text-red-800 mt-1">
                      Adds another <strong>₹{computed.extraLeakNext3m.toLocaleString("en-IN")}</strong> in pure deadweight bounce fees and penal charges over the next 90 days ({computed.retriesPerMonth} NACH tries/month).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-red-50 border border-red-300">
                    <div className="text-xs font-black uppercase tracking-wider text-red-900 mb-1">
                      6-Month Unchecked Bounce Projection
                    </div>
                    <div className="text-2xl font-black text-red-950">
                      ₹{computed.totalDrain6m.toLocaleString("en-IN")} cumulative charges
                    </div>
                    <p className="text-xs text-red-900 mt-1">
                      Adds another <strong>₹{computed.extraLeakNext6m.toLocaleString("en-IN")}</strong> in non-principal penalties over 180 days while pushing the account deep into NPA recovery.
                    </p>
                  </div>
                </div>

                {/* Lender Specific Notes */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs md:text-sm text-slate-800 space-y-1.5">
                  <p>
                    <strong>How {selectedLender.name} computes your charges:</strong> {computed.lenderBounce.formulaNote} {computed.penal.penalFormulaNote}
                  </p>
                  <p>
                    <strong>Salaried Mandate Watchout:</strong> {selectedLender.mandateNote}
                  </p>
                  <p>
                    <strong>NACH Bank-Side Return Note:</strong> Even if a lender waives its own bounce charge during a grievance or settlement, your savings bank will not refund inward NACH return fees already debited from your salary account unless the debit occurred due to a technical clearing error.
                  </p>
                </div>
              </div>
            </section>

            {/* Settlement Readiness & Conditional Rs. 3L Gate */}
            <section id="readiness-action" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                Your Salaried Debt &amp; Settlement Readiness Check
              </h2>
              <div className="p-6 sm:p-8 rounded-3xl border-2 border-slate-200 bg-white shadow-sm mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-bold uppercase text-slate-500 mb-1">
                      Combined Unsecured Debt Portfolio
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-[#2E2E2E]">
                      ₹{computed.totalCombinedDebt.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      This PL (₹{computed.currentThisLoanClaim.toLocaleString("en-IN")}) + Other PL/Cards/Apps (₹{computed.otherDues.toLocaleString("en-IN")})
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
                    <div className="text-xs font-bold uppercase text-[#1F5EFF] mb-1">
                      Indicative {selectedLender.name} Settlement Band
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-[#1F5EFF]">
                      ₹{computed.indicativeLow.toLocaleString("en-IN")} to ₹{computed.indicativeHigh.toLocaleString("en-IN")}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      Indicative {selectedLender.indicativeSettlementPctRange[0]}% to {selectedLender.indicativeSettlementPctRange[1]}% of principal on 90+ DPD NPA files (subject to hardship verification; never guaranteed).
                    </div>
                  </div>
                </div>

                {computed.isEligibleForSettlementFunnel ? (
                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-950">
                      <strong>Eligible for Structured Multi-Loan Settlement Representation (Combined Debt ≥ ₹3,00,000):</strong> Because your total unsecured exposure across personal loans, credit cards, and app loans is <strong>₹{computed.totalCombinedDebt.toLocaleString("en-IN")}</strong>, continuing to lose ₹{computed.extraLeakNext3m.toLocaleString("en-IN")}+ every quarter in NACH bounce penalties rarely resolves the root principal burden. We have pre-selected your debt bracket in the salaried assessment below so our legal resolution team can map a single consolidated strategy across all your lenders.
                    </div>
                    <LoanSettlementAssessmentFunnel key={funnelRefreshKey} />
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
                    <h3 className="text-lg md:text-xl font-black text-amber-950">
                      Combined Debt Below ₹3,00,000: Recommended Salaried Self-Help Steps
                    </h3>
                    <p className="text-sm text-amber-900 leading-relaxed">
                      SettleLoans takes on formal legal settlement representation only when a borrower&apos;s combined unsecured debt across personal loans, credit cards, and app loans is <strong>₹3,00,000 or more</strong> (if you have additional credit card or personal loan balances not entered above, add them in Box 8 to re-check). Below ₹3 Lakhs, you can stop the NACH bounce drain yourself without damaging your credit report for 7 years:
                    </p>
                    <ul className="space-y-2.5 text-sm text-amber-950 list-disc pl-5">
                      <li>
                        <strong>Pay Overdue Installments Manually Before the Next NACH Batch:</strong> Use {selectedLender.name}&apos;s official loan portal, NEFT loan account transfer, or BBPS at least 48 hours before the next scheduled NACH retry so you stop recurring bank-side return deductions.
                      </li>
                      <li>
                        <strong>Shift Your EMI Cycle Date to Match Salary Credit:</strong> If your employer credits salary on the 7th or 10th while your NACH hits on the 2nd or 5th, pay a one-time swap fee (typically Rs. 500 + GST) to move your EMI presentation window after pay day.
                      </li>
                      <li>
                        <strong>Request a Goodwill Bounce Fee Reversal:</strong> For a first or technical bounce, email {selectedLender.name}&apos;s customer care or Nodal Officer attaching your salary delay proof and citing RBI Fair Practices guidelines on non-punitive penal charges.
                      </li>
                      <li>
                        <strong>Ask for Tenure Extension Rather Than Default:</strong> Extending remaining tenure by 6 to 18 months lowers your monthly EMI immediately while preserving an active &quot;Standard&quot; CIBIL status.
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Verified 13-Lender Schedule Matrix */}
            <section id="verified-schedule-table" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                Official EMI Bounce &amp; Penal Charges Across 13 Lenders
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
                Salaried borrowers often assume every bank deducts the same flat fee when an auto-debit fails. In practice, Indian banks and NBFCs follow sharply different tariff structures. While State Bank of India levies Rs. 250 plus GST per Standing Instruction failure, NBFCs such as Bajaj Finance and Poonawalla Fincorp can levy Rs. 700 to Rs. 1,500 per bounce, and IDFC FIRST Bank ties its fee directly to a percentage of your monthly EMI. Every figure below was verified against official Schedule of Charges and Most Important Terms and Conditions publications on 11 November 2026.
              </p>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#2E2E2E] text-white">
                      <th className="p-3.5 font-bold">Bank / NBFC</th>
                      <th className="p-3.5 font-bold">EMI / NACH Bounce Fee</th>
                      <th className="p-3.5 font-bold">Overdue Penal Charge Rule</th>
                      <th className="p-3.5 font-bold">Detailed Guide</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {LENDER_SCHEDULES.map((l) => (
                      <tr key={l.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3.5 font-bold text-[#2E2E2E]">{l.name}</td>
                        <td className="p-3.5 text-slate-700">{l.bounceDisplay}</td>
                        <td className="p-3.5 text-slate-700">{l.penalDisplay}</td>
                        <td className="p-3.5 whitespace-nowrap">
                          <Link
                            href={`https://www.settleloans.in${l.spokeHref}`}
                            className="text-[#1F5EFF] font-bold hover:underline"
                          >
                            View Breakdown
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                Source verification date: 11 November 2026. Exact charges on legacy or partner-originated personal loans depend on the Key Fact Statement (KFS) executed at disbursement.
              </p>
            </section>

            {/* Double Debit Math Section */}
            <section id="double-debit-math" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                Why One Missed Salary Date Triggers Double Bank Penalties
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                The biggest surprise for salaried professionals during a cash-flow crunch is discovering that a single missed EMI deducts money in three separate places. Understanding this three-layer penalty stack explains why maintaining a near-zero balance in a salary account during NACH presentation days rapidly erodes whatever emergency cash remains.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Suppose an IT or corporate employee holds a salary account with a private sector bank and services a Rs. 22,000 personal loan EMI with an external NBFC on the 5th of every month. If a company reimbursement or salary credit is delayed until the 9th and the NBFC presents the NACH mandate twice (on the 5th and the 8th), the borrower faces:
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 space-y-3 text-sm md:text-base">
                <p>
                  <strong>Layer 1 (Lender Instrument Dishonour Fee):</strong> Two failed NACH presentations at Rs. 600 + 18% GST equal <strong>Rs. 1,416</strong> added to the loan ledger&apos;s charges bucket.
                </p>
                <p>
                  <strong>Layer 2 (Destination Salary Bank Return Fee):</strong> Two inward NACH return events at the borrower&apos;s salary bank at Rs. 500 + 18% GST equal <strong>Rs. 1,180</strong> auto-debited the moment salary lands on the 9th.
                </p>
                <p>
                  <strong>Layer 3 (Daily Pro-Rata Penal Charge):</strong> Overdue penal charges calculated from the 5th until clearance at 2% to 3% per month plus 18% GST on the unpaid Rs. 22,000 installment.
                </p>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Across three or four simultaneous personal loans or top-up loans, this double-sided NACH friction frequently drains Rs. 6,000 to Rs. 12,000 every single month without reducing a single rupee of loan principal. If you are already caught in recurring bounces across multiple accounts, read our step-by-step action guide on{" "}
                <Link
                  href="https://www.settleloans.in/stop-emi-bounce-cycle-for-good"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  stopping the EMI bounce cycle for good
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.settleloans.in/loan-overdue-nach-bounce-immediate-steps"
                  className="text-[#1F5EFF] font-semibold underline"
                >
                  immediate steps after a NACH bounce
                </Link>
                .
              </p>
            </section>

            {/* RBI Penal Charge Rules */}
            <section id="rbi-penal-rules" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                RBI Fair Practices Rules on Non-Capitalized Penal Charges
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Before the Reserve Bank of India overhauled retail loan penalty accounting under its Fair Lending Practice directions on Penal Charges in Loan Accounts, several lenders imposed &quot;penal interest&quot; over and above contractual interest rates and folded unpaid penalties back into principal. That practice caused personal loan balances to snowball exponentially during a job loss or medical crisis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Zero Compounding on Penalties
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Regulated banks and NBFCs must treat late payment levies strictly as standalone &quot;penal charges&quot; and never as extra interest added to your loan rate. Unpaid bounce fees and penal charges sit in a separate receivable bucket and cannot accrue further interest on themselves.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Key Fact Statement Transparency
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Every bounce fee, mandate swap fee, and overdue penal charge must be disclosed upfront in your Key Fact Statement (KFS) and Schedule of Charges. Lenders cannot invent ad-hoc collection visit charges or undocumented penalty slabs outside board-approved tariffs.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Proportionality &amp; Non-Discrimination
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Within a retail personal loan category, a lender cannot charge higher penal rates to individual salaried borrowers than it applies to non-individual borrowers for comparable credit facilities, and charges must remain commensurate with actual default cost.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <h3 className="text-lg font-black text-[#1F5EFF] mb-2">
                    Mandatory Pre-Debit &amp; Overdue Reminders
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    Whenever a lender levies a bounce or penal charge, it must communicate the exact reason and quantum via SMS, email, or statement entry so borrowers can verify whether multiple automated retries occurred unfairly.
                  </p>
                </div>
              </div>
              <p className="text-base md:text-lg leading-relaxed text-slate-700">
                Why does this non-capitalization rule matter so much when negotiating a personal loan settlement? Because banks and NBFCs track your core principal outstanding separately from the uncollected bounce and penal charge ledger. When a salaried borrower enters formal settlement discussions after 90+ days past due, resolution teams routinely target a complete 100% waiver of the penal and bounce bucket before negotiating the principal haircut.
              </p>
            </section>

            {/* NACH Re-Presentation Cycle */}
            <section id="nach-representation-cycle" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                How Bank and NBFC NACH Re-Presentation Cycles Work
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Under National Payments Corporation of India (NPCI) NACH operating guidelines, a lender submits an electronic debit file to your destination bank on the scheduled EMI due date (commonly the 2nd, 3rd, 5th, 7th, or 10th of the month). When your savings account returns code &quot;Insufficient Funds&quot; or &quot;Balance Insufficient,&quot; automated collection workflows differ sharply by institution:
              </p>
              <ul className="space-y-4 mb-6 text-base text-slate-700">
                <li className="p-5 rounded-2xl border border-slate-200 bg-white">
                  <strong className="text-[#2E2E2E]">Same-Bank Salary Account Standing Instructions (HDFC, ICICI, Axis, SBI, Kotak):</strong> When your personal loan and salary account sit inside the same bank, the core banking system often places a partial or full &quot;lien&quot; or &quot;hold&quot; on the overdue EMI plus bounce fee. Any fresh UPI transfer, reimbursement, or salary credit is swept automatically toward pending charges first and EMI second. Read our detailed rules on{" "}
                  <Link
                    href="https://www.settleloans.in/bank-freeze-salary-account-loan-default"
                    className="text-[#1F5EFF] font-semibold underline"
                  >
                    salary account holds and freezes during loan default
                  </Link>
                  .
                </li>
                <li className="p-5 rounded-2xl border border-slate-200 bg-white">
                  <strong className="text-[#2E2E2E]">External Bank e-NACH Mandates (Bajaj Finance, Tata Capital, IDFC FIRST, SMFG, Aditya Birla, Poonawalla, Hero FinCorp):</strong> External lenders cannot place a unilateral hold inside another bank&apos;s savings account. Instead, they dispatch NACH batch files on scheduled retry windows (often T+3, T+7, or mid-month around the 12th to 15th) while sharing UPI / BBPS payment links via SMS and WhatsApp.
                </li>
                <li className="p-5 rounded-2xl border border-slate-200 bg-white">
                  <strong className="text-[#2E2E2E]">Payment Appropriation Order:</strong> Check your loan agreement&apos;s appropriation clause carefully. If you make a partial payment after two bounces without a written settlement letter, lenders frequently adjust incoming money against costs, bounce fees, penal charges, and accrued interest before touching principal.
                </li>
              </ul>
            </section>

            {/* Salaried Decision Framework */}
            <section id="salaried-decision-framework" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-4 leading-tight">
                Salaried Borrower Decision Matrix: Cure, Restructure, or Settle
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-5">
                Not every EMI bounce calls for loan settlement. Because a &quot;Settled&quot; remark on CIBIL lowers credit scores and restricts fresh unsecured borrowing for several years, salaried employees should match their response to the severity and permanence of their cash-flow gap:
              </p>
              <div className="space-y-4 mb-6">
                <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <h3 className="text-lg font-black text-emerald-950 mb-1">
                    Scenario A: Temporary 5-to-20 Day Salary Delay (1 Bounce, Debt &lt; 35% FOIR)
                  </h3>
                  <p className="text-sm md:text-base text-emerald-900 leading-relaxed">
                    <strong>Best Move: Immediate Manual Cure + Fee Waiver Request.</strong> Pay the overdue EMI via the lender&apos;s official app or NEFT immediately so DPD stays below 30 days, swap your EMI date past your employer&apos;s payroll window, and request a goodwill reversal of the first bounce fee.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <h3 className="text-lg font-black text-amber-950 mb-1">
                    Scenario B: Moderate Pay Cut or Bonus Delay (30 to 60 DPD, Resumable Income)
                  </h3>
                  <p className="text-sm md:text-base text-amber-900 leading-relaxed">
                    <strong>Best Move: Tenure Restructuring or Consolidation.</strong> Approach the bank before 90 DPD with salary slips showing reduced pay and ask for tenure elongation or a short moratorium under board-approved restructuring policies. Compare restructuring fees (e.g. Rs. 5,000+ at some NBFCs) against monthly EMI relief.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200">
                  <h3 className="text-lg font-black text-slate-900 mb-1">
                    Scenario C: Job Loss, Medical Crisis, or Multi-PL Trap (Combined Debt ≥ ₹3L, EMIs &gt; 60% Salary)
                  </h3>
                  <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                    <strong>Best Move: Structured Legal Debt Settlement.</strong> When you are borrowing from one app or card just to fund another personal loan&apos;s NACH date and combined unsecured liabilities exceed Rs. 3,00,000, piecemeal part-payments get swallowed by bounce fees and penal charges. Transitioning salary inflows to a clean non-lender bank account, documenting hardship formally, and negotiating a full-and-final one-time settlement across all lenders protects your household essentials and closes debt permanently. Explore our dedicated{" "}
                    <Link
                      href="https://www.settleloans.in/loan-settlement-for-salaried-people"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      loan settlement guide for salaried people
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://www.settleloans.in/multiple-personal-loan-settlement"
                      className="text-[#1F5EFF] font-semibold underline"
                    >
                      multiple personal loan settlement strategy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </section>

            {/* FAQs Section */}
            <section id="faqs" className="scroll-mt-28 mb-14">
              <h2 className="text-2xl md:text-4xl font-black text-[#2E2E2E] mb-6 leading-tight">
                Frequently Asked Questions on EMI Bounce Calculations
              </h2>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <details
                    key={idx}
                    name="faq-accordion"
                    className="bg-white border border-[#DEDEDE] rounded-2xl p-6 hover:shadow-md group cursor-pointer transition-shadow"
                  >
                    <summary className="text-base md:text-lg font-bold text-[#2E2E2E] list-none relative pr-8">
                      {item.q}
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180 text-[#1F5EFF]">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-sm md:text-base text-slate-700 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Disclaimer */}
            <div className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed">
              <strong>Educational &amp; Tariff Disclaimer:</strong> Calculations generated by this tool are indicative estimates based on publicly published bank and NBFC Schedules of Charges checked on 11 November 2026. Actual bounce fees, GST applicability, and penal charges depend on your individual Key Fact Statement (KFS), loan sanction date, and destination bank tariff. Indicative settlement ranges reflect historical unsecured personal loan resolution outcomes and are never guaranteed waivers.
            </div>
          </article>

          {/* Right Column: Sticky Sidebar (STRICTLY NO h1-h6 TAGS INSIDE ASIDE!) */}
          <aside className="hidden lg:block w-1/5 min-w-[240px]">
            <div className="sticky top-24 space-y-6">
              <div className="bg-[#2E2E2E] rounded-3xl p-6 text-white border border-white/10 shadow-xl">
                <div className="text-lg font-black mb-2">
                  Multiple EMIs Bouncing?
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  If your combined personal loan, credit card, and app loan debt is ₹3,00,000 or higher, our salaried debt specialists can help stop penalty leakage and negotiate structured settlements.
                </p>
                <a
                  href="#readiness-action"
                  className="block w-full text-center bg-[#1F5EFF] text-white font-bold py-3 px-4 rounded-xl text-sm hover:bg-blue-700 transition-colors"
                >
                  Check Eligibility Now
                </a>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#DEDEDE] shadow-sm">
                <div className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3 mb-4">
                  Lender Bounce Guides
                </div>
                <ul className="space-y-3 text-xs font-semibold">
                  <li>
                    <Link
                      href="https://www.settleloans.in/hdfc-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • HDFC Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/icici-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • ICICI Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/axis-bank-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Axis Bank PL Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/sbi-personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • SBI Xpress Credit Bounce Fees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/personal-loan-emi-bounce-charges"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • RBI Limits on Bounce Charges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.settleloans.in/salary-account-ecs-mandate-cancellation-rules"
                      className="text-slate-700 hover:text-[#1F5EFF] transition-colors block"
                    >
                      • Salary ECS Mandate Rules
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
