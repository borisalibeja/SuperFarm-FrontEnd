// types/auth.ts

export interface UserLoginDto {
  username: string;
  password: string;
}

export interface TokenResponseDto {
  accessToken: string;
  refreshToken: string;
}