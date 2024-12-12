

export interface InputPassWordTypes {
    data: {
      value: string;
      name: string;
      label: string;
      message: string;
      required?: boolean;
      email?: boolean;
      status?:boolean;
      onChange: (e: { name: string; value: string }) => void;
    };
  }