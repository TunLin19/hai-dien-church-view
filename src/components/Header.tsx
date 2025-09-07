import { info, type User } from '@/api/userService'
import { Calendar, FileText, House, Info, LogIn, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const menuItems = [
    { name: 'Trang chủ', path: '/', icon: <House /> },
    { name: 'Giới thiệu', path: '/about', icon: <Info /> },
    { name: 'Liên hệ', path: '/contact', icon: <Mail /> },
    { name: 'Lịch sự kiện', path: '/events', icon: <Calendar /> },
    { name: 'Bài viết', path: '/posts', icon: <FileText /> },
  ]
  useEffect(() => {
    if (!token) return

    const fetchUserInfo = async () => {
      try {
        const res = await info()
        const response: User = res.data.result
        console.log('✅ User info fetched:', response)

        setUser(response)
      } catch (err) {
        console.error('❌ Error fetching user info:', err)
      }
    }

    fetchUserInfo()
  }, [token])
  const handleNavLinkClick = () => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-cyan-800 text-white sticky top-0 z-50 shadow-md w-full">
      <div className="container mx-auto p-4 flex items-center">
        <div className="flex items-center">
          <h1 className="text-lg md:text-2xl font-semibold">
            <span className="logo">Giáo xứ Hải Điền</span>
          </h1>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block pl-12">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-1 py-1 text-center min-w-[120px] transition-all duration-200 ${
                      isActive
                        ? ' border-b-2 font-medium'
                        : ' hover:bg-cyan-900 rounded-md'
                    }`
                  }
                  onClick={handleNavLinkClick}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full shadow-lg hover:shadow-xl flex items-center justify-center z-50 transition-all duration-300 hover:scale-105 hover:bg-cyan-700">
                  <Avatar className="w-10 h-10 text-cyan-800 bg-white">
                    <AvatarFallback>{user.fullName.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span className="font-semibold">{user.fullName}</span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link to="/taikhoan/thong-tin-ca-nhan">
                    Thông tin cá nhân
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-red-600"
                  onClick={() => {
                    localStorage.removeItem("token")
                    navigate("/login")
                  }}
                >
                  Đăng xuất
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button className="flex items-center gap-2 bg-holy-gold text-holy-blue font-semibold px-4 py-2 rounded-xl shadow hover:bg-holy-blue hover:text-white transition-colors duration-200">
                <LogIn size={18} />
                <p className="hidden md:block">Đăng nhập</p>
              </Button>
            </Link>
          )}

          {/* Mobile menu button giữ nguyên */}
          <button
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-holy-gold rounded-md p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-cyan-800">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block py-3 px-4 transition-colors ${
                      isActive
                        ? 'bg-holy-gold text-white font-medium bg-cyan-900'
                        : 'hover:bg-cyan-900'
                    }`
                  }
                  onClick={handleNavLinkClick}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
