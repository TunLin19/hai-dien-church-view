import type { AuthenticationSchema, LoginFormSchema, RegisterFormSchema } from "@/lib/validation-schemas";
import {apiClient} from "./apiFormat";

export const sentOtpLogin = (data:LoginFormSchema) => apiClient.post("/sent-otp-login", data);
export const login = (data:AuthenticationSchema) => apiClient.post("/login", data);
export const register = (data:AuthenticationSchema) => apiClient.post("/signup", data);
export const sentOtpRegister = (data:RegisterFormSchema) => apiClient.post("/sent-otp-signup", data);