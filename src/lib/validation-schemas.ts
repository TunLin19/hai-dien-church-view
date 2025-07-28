import { z } from 'zod'

export const loginFormSchema = z.object({
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z
    .string()
    .min(6, { message: 'Mật khẩu phải có ít nhất 6 ký tự' }),
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

export type LoginFormSchema = z.infer<typeof loginFormSchema>
export type RegisterFormSchema = z.infer<typeof registerFormSchema>
