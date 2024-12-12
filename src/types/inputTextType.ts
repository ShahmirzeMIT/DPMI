export interface InputTextProps {
    data: {
      value: string;
      name: string;
      label: string;
      message: string;
      required?: boolean;
      email?: boolean;
      status?: boolean; // Indicates whether to show an error
      onChange: (e: { name: string; value: string }) => void;
    };
  }