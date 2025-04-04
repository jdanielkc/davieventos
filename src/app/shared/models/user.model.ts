// src/app/shared/models/user.model.ts
export interface User {
  userId?: number;
  firstName?: string;
  lastName?: string;
  email: string;
  token?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success?: boolean;
  message?: string;
  showMessage?: boolean;
  token?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  userId?: number;
}
