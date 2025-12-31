export interface FormFieldProps {
  label: string;
  type?: string;
  value: string | number;
  disabled?: boolean;
  required?: boolean;
  options?: string[];
  rows?: number;
  className?: string;
  onChange: (value: string | number) => void;
}