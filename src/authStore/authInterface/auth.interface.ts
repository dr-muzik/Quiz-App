export interface User {
  courses: string[];
  id: number;
  phone: string;
  username: string;
  occupation: string;
  email: string;
  fullName: string;
}

export interface LoginUserInput {
  password: string;
  username: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

export interface SignupUserInput {
  confirmPassword: string;
  courses: string[];
  password: string;
  phone: string;
  username: string;
  occupation: string;
  email: string;
  fullName: string;
}
