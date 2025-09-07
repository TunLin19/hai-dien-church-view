'use client'

import { login, register } from '@/api/authService'
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { authenticationSchema } from '@/lib/validation-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import { z } from 'zod'

const formSchema = authenticationSchema

export default function Otp() {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  const type = location.state?.type || null
  const navigator = useNavigate()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: location.state?.email || '',
      otp: '',
      fullName: location.state?.name || '',
      password: location.state?.password || '',
    },
  })
  if (!type || (type !== 'login' && type !== 'register')) {
  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center py-4 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="mx-auto max-w-xl md:w-1/3 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 text-cyan-800">
            Lỗi
          </CardTitle>
          <CardDescription>
            Đã có lỗi xảy ra. Vui lòng quay lại trang trước đó
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-cyan-800 hover:bg-cyan-700 text-white font-semibold shadow" onClick={() => navigator(-1)}>Quay lại</Button>
        </CardContent>
      </Card>
    </div>
  )
}

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      console.log('Submitting OTP:', values)
      let response = null
      if (type === 'login') {
         response = await login(values)
      }else{
         response = await register(values)
      }
      if (response.data.code === 200) {
        console.log('Login successful:', response.data)
        localStorage.setItem('token', response.data.result.token)
        navigator('/')
      }
    } catch (error) {
      console.error('Form submission error', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center py-4 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Card className="mx-auto max-w-xl md:w-1/3 shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-2 text-cyan-800">
            Xác thực
          </CardTitle>
          <CardDescription>
            Nhập mã xác thực đã gửi đến email: <strong>{location.state?.email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 mx-auto w-full"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isLoading ? (
                <Button type="submit" disabled>
                  Đang gửi...
                </Button>
              ) : (
                <Button type="submit">Gửi</Button>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
