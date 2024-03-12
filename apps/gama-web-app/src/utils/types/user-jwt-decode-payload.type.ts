export interface UserJwtDecodePayload {
  sub: string;
  email: string;
  iat: number;
  exp: number;
}
