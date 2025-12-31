export interface SensitiveFieldProps {
  label: string;
  value: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  onChange: (value: string) => void;
}