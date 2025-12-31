export interface PayrollStats {
  grossPay: number;
  netPay: number;
  totalDeductions: number;
}

export interface PayrollItem {
  label: string;
  amount: number;
  type: 'earning' | 'deduction';
  description?: string;
}