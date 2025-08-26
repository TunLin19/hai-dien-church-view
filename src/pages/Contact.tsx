'use client'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactFormSchema } from '@/lib/validation-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
const formSchema = contactFormSchema
function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values)
    } catch (error) {
      console.error('Form submission error', error)
    }
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.409175362883!2d106.30784757340389!3d20.158681917096736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31360fb75a9f98e1%3A0x3e96b14468f5c5fb!2zTmjDoCBUaOG7nSBHacOhbyBY4bupIEjhuqNpIMSQaeG7gW4!5e0!3m2!1svi!2s!4v1753286863652!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Hải Điền map"
          />
        </div>
        {/* Form liên hệ (nếu muốn) */}
        <div className="max-w-xl mx-auto bg-white p-4 border-t rounded-lg shadow-lg w-full">
          <h2 className="text-xl font-medium mb-4 text-center">Gửi lời nhắn</h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 max-w-3xl mx-auto"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Họ và tên" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Số điện thoại"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nội dung"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="flex ml-auto bg-cyan-800" type="submit">
                Gửi đi
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Contact Section */}
      <section className="mt-12">
        <div className="rounded-lg bg-gray-100 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-medium mb-3">Thông tin liên lạc</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Địa chỉ: 123 Đường ABC, Xã Hải Điền</li>
                <li>Điện thoại: (84) 234 567 890</li>
                <li>Email: giaoxuhaidien@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">
                Giờ làm việc văn phòng
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>Thứ 2 - Thứ 6: 8:00 - 17:00</li>
                <li>Thứ 7: 8:00 - 12:00</li>
                <li>Chúa Nhật: Đóng cửa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
