export interface SearchInputProps {
    data: {
      value: string;
      name: string;
      label: string;
      message: string;
      required?: boolean;
      status?: boolean;
      onChange: (e: { name: string; value: string }) => void;
    };
  }