export interface DataServiceProps {
  enable: boolean;
  url: string;
  parameter: any;
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
}
