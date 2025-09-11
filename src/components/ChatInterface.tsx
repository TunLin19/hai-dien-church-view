import { Icon } from '@iconify/react'
import * as Dialog from '@radix-ui/react-dialog'
import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Button } from './ui/button'

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const signupData = JSON.parse(localStorage.getItem('profile') || '{}')
      const welcomeMessages: Message[] = [
        {
          id: 'welcome-1',
          content: signupData.name
            ? `Xin chào **${signupData.name}**, tôi là AI hỗ trợ của Nhà Thờ Hải Điền`
            : 'Xin chào, tôi là AI hỗ trợ của Nhà Thờ Hải Điền',
          isBot: true,
          timestamp: new Date(),
        },
        {
          id: 'welcome-2',
          content: 'Tôi có thể giúp gì cho bạn hôm nay?',
          isBot: true,
          timestamp: new Date(),
        },
      ]
      setMessages(welcomeMessages)
    }
  }, [isOpen])

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const loadingMsgId = (Date.now() + 1).toString()
      setMessages((prev) => [
        ...prev,
        {
          id: loadingMsgId,
          content: 'Đang suy nghĩ...',
          isBot: true,
          timestamp: new Date(),
        },
      ])

      const signupData = JSON.parse(localStorage.getItem('profile') || '{}')
      const response = await fetch(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/chat-bot/stream?message=${encodeURIComponent(
          inputValue + ' ' + (signupData.name || '')
        )}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'text/event-stream' },
        }
      )

      if (!response.ok) throw new Error('API request failed')

      const reader = response.body?.getReader()
      if (!reader) throw new Error('Failed to read response')

      setMessages((prev) => prev.filter((msg) => msg.id !== loadingMsgId))

      const decoder = new TextDecoder()
      let responseText = ''
      const botMessageId = (Date.now() + 2).toString()
      setMessages((prev) => [
        ...prev,
        { id: botMessageId, content: '', isBot: true, timestamp: new Date() },
      ])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        responseText += chunk
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessageId ? { ...msg, content: responseText } : msg
          )
        )
      }
    } catch (error) {
      console.error('Gặp vấn đề trong lúc fetching API:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 3).toString(),
          content:
            'Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.',
          isBot: true,
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild>
          {isOpen ? null : (
            <button className="fixed bottom-3 right-6 h-14 w-14 rounded-full bg-cyan-800 text-white shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-105 hover:bg-cyan-700">
              <Icon icon="lucide:bot" className="h-8 w-8" />
            </button>
          )}
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
          <Dialog.Content
            className="fixed bottom-0 right-0 md:inset-0 md:mx-auto md:my-auto 
               w-2/3 md:max-w-3xl h-[55vh] md:h-[70vh] 
               bg-white rounded-2xl 
               flex flex-col shadow-2xl mb-2 z-50"
          >
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <h1 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                Tư vấn viên AI
              </h1>
              <Dialog.Close asChild>
                <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                  <Icon icon="lucide:x" className="h-5 w-5 text-gray-600" />
                </button>
              </Dialog.Close>
            </div>
            <div
              ref={chatRef}
              className="flex-grow overflow-y-auto space-y-4 p-4 bg-gray-50"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {message.isBot && (
                    <div className="flex-shrink-0">
                      <Icon
                        icon="lucide:bot"
                        className="text-primary-600 w-8 h-8 rounded-full"
                      />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-sm shadow-sm ${
                      message.isBot
                        ? 'bg-gray-100 text-gray-800'
                        : 'bg-cyan-600 text-white'
                    }`}
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {message.content}
                    </ReactMarkdown>
                  </div>

                  {!message.isBot && (
                    <div className="flex-shrink-0">
                      <img
                        src="https://img.heroui.chat/image/avatar?w=40&h=40&u=user"
                        alt="user"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center bg-gray-100 rounded-full px-2">
                <input
                  type="text"
                  className="flex-grow bg-transparent border-none focus:outline-none px-3 py-2 text-sm"
                  placeholder="Bạn cần giúp gì..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  disabled={isLoading}
                />
                <Button
                  className={`h-8 w-8 rounded-full flex items-center justify-center transition
                     ${
                       isLoading
                         ? 'opacity-50 cursor-not-allowed'
                         : 'bg-cyan-600 hover:bg-cyan-700 text-white'
                     }`}
                  onClick={handleSend}
                  disabled={isLoading}
                >
                  <Icon icon="lucide:send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default ChatInterface
