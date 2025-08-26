import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z
    .string()
    .min(5, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
})

export const registerFormSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Tên phải có ít nhất 2 ký tự' })
      .max(100, { message: 'Tên không được vượt quá 100 ký tự' }),
    email: z.string().email({ message: 'Email không hợp lệ' }),
    password: z
      .string()
      .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Xác nhận mật khẩu phải có ít nhất 6 ký tự' }),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: z.ZodIssueCode.custom,
        message: 'Mật khẩu xác nhận không khớp',
      })
    }
  })
export const authenticationSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  otp: z.string().min(6).max(6),
})
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Tên phải có ít nhất 2 ký tự' })
    .max(100, { message: 'Tên không được vượt quá 100 ký tự' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  phone: z.string().min(10, { message: 'Số điện thoại không hợp lệ' }).max(15, { message: 'Số điện thoại không hợp lệ' }),
  message: z.string().min(10, { message: 'Nội dung phải có ít nhất 10 ký tự' }).max(1000, { message: 'Nội dung không được vượt quá 1000 ký tự' }),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>
export type ContactFormSchema = z.infer<typeof contactFormSchema>
export type AuthenticationSchema = z.infer<typeof authenticationSchema>
