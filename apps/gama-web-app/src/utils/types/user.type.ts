export interface User {
  id: string;
  username: string;
  email: string;
  JWT: { rt: string; at: string };
}
