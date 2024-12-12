export interface SelectSingleProps {
    data: {
      api: string;
      name: string;
      value: string;
      label: string;
      payload: unknown;
      disabled?: boolean;
      status?: "" | "warning" | "error"; 
      onChange: (selectedOption: Option) => void;
    };
  }
  

export interface Option {
    name: string;
    key: string;
    value: string;
  }
  