// types/auth.ts

export interface UserLoginDto {
  username: string;
  password: string;
}

export interface TokenResponseDto {
  token: string;
  expiration: string; // or Date if you parse it
}
