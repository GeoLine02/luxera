export type SignUpState = {
  success: boolean;
  errors?: {
    fullName?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
  message?: string;
  data?: unknown;
};
