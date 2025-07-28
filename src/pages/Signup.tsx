'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { registerFormSchema } from '@/lib/validation-schemas'
import { Link } from 'react-router-dom'
import { PasswordInput } from '@/components/ui/password-input'

const formSchema = registerFormSchema

export default function SignUp() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
    } catch (error) {
      console.error('Lỗi gửi biểu mẫu', error)
    }
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center py-4 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="mx-auto max-w-xl md:w-1/3 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 text-cyan-800">
            Đăng ký
          </CardTitle>
          <CardDescription>
            Tạo tài khoản mới bằng cách điền thông tin bên dưới.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Trường họ tên */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Họ và tên</FormLabel>
                      <FormControl>
                        <Input id="name" placeholder="Nguyễn Văn A" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Trường email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="example@email.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Mật khẩu */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                      <FormControl>
                        <PasswordInput
                          id="password"
                          placeholder="******"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Xác nhận mật khẩu */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="confirmPassword">Xác nhận mật khẩu</FormLabel>
                      <FormControl>
                        <PasswordInput
                          id="confirmPassword"
                          placeholder="******"
                          autoComplete="new-password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-cyan-800 hover:bg-cyan-700 text-white font-semibold shadow"
                >
                  Đăng ký
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Đã có tài khoản?{' '}
            <Link to="/login" className="underline">
              Đăng nhập
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
