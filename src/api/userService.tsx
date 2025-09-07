import { apiClientAuth } from "./apiFormat";

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
}
export const info = () => apiClientAuth.get("/info");