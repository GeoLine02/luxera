export interface UserRegisterCredsType {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
}

export interface UserSignInCredsType {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  full_name: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  access_token?: string;
  data?: {
    token?: string;
    access_token?: string;
    user?: User;
  };
  message?: string;
}

export interface UserResponse {
  success: boolean;
  data?: User;
  message?: string;
}

export interface LoginServiceResponse {
  success: boolean;
  errors?: {
    email?: string[];
    password?: string[];
    emailOrPhone?: string[];
    general?: string[];
  };
}
