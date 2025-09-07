'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Icon } from '@iconify/react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginFormSchema } from '@/lib/validation-schemas'
import { Link, useNavigate } from 'react-router-dom'
import { PasswordInput } from '@/components/ui/password-input'
import { sentOtpLogin } from '@/api/authService'
import { useState } from 'react'

const formSchema = loginFormSchema

export default function LoginPreview() {
  const [isLoading, setIsLoading] = useState(false);
  const navigator = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      const response = await sentOtpLogin(values);
      console.log(response)
      if (response.data.code === 200) {
        console.log('Login successful:', response.data);
        // Navigate to the OTP page with the email as state
        navigator('/otp', { state: { email: values.email, type: 'login' } });
      }
    } catch (error) {
      console.error('Lỗi gửi form', error)
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center py-4 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="mx-auto max-w-xl md:w-1/3 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 text-cyan-800">
            Đăng nhập
          </CardTitle>
          <CardDescription>
            Nhập email và mật khẩu để đăng nhập vào tài khoản của bạn.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="email"
                            placeholder="example@email.com"
                            type="email"
                            autoComplete="email"
                            className="pl-10"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <div className="flex justify-between items-center">
                        <FormLabel htmlFor="password">Mật khẩu</FormLabel>
                        <Link
                          to="#"
                          className="ml-auto inline-block text-sm underline text-indigo-600 hover:text-indigo-800"
                        >
                          Quên mật khẩu?
                        </Link>
                      </div>
                      <FormControl>
                        <PasswordInput placeholder="******" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {isLoading ? (
                  <Button
                    type="submit"
                    className="w-full bg-cyan-800 hover:bg-cyan-700 text-white font-semibold shadow"
                    disabled
                  >
                    Đang xử lý...
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full bg-cyan-800 hover:bg-cyan-700 text-white font-semibold shadow"
                  >
                    Đăng nhập
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2 border-gray-300 hover:bg-gray-50"
                  // onClick={() => signInWithGoogle()}
                >
                  <Icon icon="flat-color-icons:google" width={22} />
                  Đăng nhập với Google
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Chưa có tài khoản?{' '}
            <Link
              to="/signup"
              className="underline text-indigo-700 hover:text-indigo-900"
            >
              Đăng ký
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
