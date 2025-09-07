import ChatInterface from '@/components/ChatInterface'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <ChatInterface />
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={handleNavLinkClick}
            className="fixed bottom-18 right-6 h-14 w-14 rounded-full bg-cyan-800 text-white shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
          >
            <ArrowUp className='h-8 w-8' />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserLayout
