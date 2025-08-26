import type { AuthenticationSchema, LoginFormSchema } from "@/lib/validation-schemas";
import apiClient from "./apiFormat";

export const sentOtpLogin = (data:LoginFormSchema) => apiClient.post("/sent-otp-login", data);
export const login = (data:AuthenticationSchema) => apiClient.post("/login", data);