import { useState } from "react";
import { DollarSign, TrendingUp, TrendingDown, CreditCard } from "lucide-react";
import AnimatedStatsCard from "@/components/common/cards/AnimatedStatsCard";
import PageHeader from "@/components/common/page-header/PageHeader";
import DetailRow from "@/components/common/cards/DetailRow";
import {
  type PayrollStats,
  type PayrollItem,
} from "./interfaces/Pay.interface";

function Pay() {
  const [payrollStats] = useState<PayrollStats>({
    grossPay: 5000,
    netPay: 4200,
    totalDeductions: 800,
  });

  const [payrollItems] = useState<PayrollItem[]>([
    {
      label: "Base Salary",
      amount: 4500,
      type: "earning",
      description: "Monthly base salary",
    },
    {
      label: "Performance Bonus",
      amount: 500,
      type: "earning",
      description: "Q4 performance bonus",
    },
    {
      label: "Health Insurance",
      amount: 200,
      type: "deduction",
      description: "Monthly premium",
    },
    {
      label: "Retirement Fund",
      amount: 300,
      type: "deduction",
      description: "401k contribution",
    },
    {
      label: "Tax Withholding",
      amount: 300,
      type: "deduction",
      description: "Federal & state taxes",
    },
  ]);

  // const handleViewPayslip = (item: string) => {};

  const formatCurrency = (amount: number) => `$${amount.toLocaleString()}`;

  return (
    <div className="space-y-6">
      <PageHeader icon={CreditCard} title="Pay & Benefits" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <AnimatedStatsCard
          icon={<DollarSign size={20} />}
          label="Gross Pay"
          value={formatCurrency(payrollStats.grossPay)}
        />
        <AnimatedStatsCard
          icon={<TrendingUp size={20} />}
          label="Net Pay"
          value={formatCurrency(payrollStats.netPay)}
        />
        <AnimatedStatsCard
          icon={<TrendingDown size={20} />}
          label="Total Deductions"
          value={formatCurrency(payrollStats.totalDeductions)}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-base-content mb-4">
          Current Pay Period
        </h2>
        {payrollItems.map((item, index) => (
          <DetailRow
            key={item.label}
            title={item.label}
            subtitle={
              item.description ||
              `${item.type === "earning" ? "Earning" : "Deduction"}`
            }
            value={`${item.type === "deduction" ? "-" : "+"}${formatCurrency(
              item.amount
            )}`}
            actionText="View Details"
            // onAction={() => handleViewPayslip(item.label)}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

export default Pay;
