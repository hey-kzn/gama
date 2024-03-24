export interface LoginRequestDTO {
  email: string;
  password: string;
}
export interface LoginResponseDTO {
  message: string;
  data: {
    access_token: string;
    refresh_token: string;
  };
}
export interface RegisterRequestDTO {
  username: string;
  email: string;
  password: string;
}
