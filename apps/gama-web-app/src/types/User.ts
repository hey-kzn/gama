export interface User {
  id: string;
  email: string;
  JWT: { rt: string; at: string };
}
