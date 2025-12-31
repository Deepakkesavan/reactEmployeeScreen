import { CreditCard } from "lucide-react";
import { SectionWrapper } from "./shared/SectionWrapper";
import { FormField } from "./shared/FormField";
import { SensitiveField } from "./shared/SensitiveField";
import { type BankDetailsSectionProps } from './interfaces/BankDetailsSection.interface';

function BankDetailsSection({ data }: BankDetailsSectionProps) {
  return (
    <SectionWrapper
      title="Bank Details"
      icon={CreditCard}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          label="Bank Name"
          value={data.bankName}
          disabled
          onChange={() => {}}
        />
        <SensitiveField
          label="Account Number"
          value={data.accountNumber}
          disabled
          onChange={() => {}}
        />
        <FormField
          label="IFSC Code"
          value={data.ifscCode}
          disabled
          onChange={() => {}}
        />
        <SensitiveField
          label="UAN"
          value={data.uan}
          disabled
          onChange={() => {}}
        />
      </div>
    </SectionWrapper>
  );
}

export default BankDetailsSection;