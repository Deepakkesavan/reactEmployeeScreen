export interface DetailRowProps {
  title: string;
  subtitle: string;
  value: string | number;
  actionText?: string;
  onAction?: () => void;
  delay?: number;
}