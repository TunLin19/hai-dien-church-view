import {
  Calendar,
  FileText,
  Inbox,
  LayoutDashboard,
  Settings,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Separator } from '@radix-ui/react-separator'
import { useLocation } from 'react-router-dom'

// Menu items.
const items = [
  {
    title: 'Tổng quan',
    url: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Hộp thư đến',
    url: '/admin/inbox',
    icon: Inbox,
  },
  {
    title: 'Sự kiện',
    url: '/admin/events',
    icon: Calendar,
  },
  {
    title: 'Bài viết',
    url: '/admin/posts',
    icon: FileText,
  },
  {
    title: 'Cài đặt',
    url: '/admin/settings',
    icon: Settings,
  },
]

export function AppSidebar() {

  const location = useLocation()
  const currentPath = location.pathname

  return (
    <Sidebar className='hidden md:block'>
      <SidebarContent className='bg-cyan-800 text-white'>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="text-lg md:text-2xl font-semibold logo">Giáo xứ Hải Điền</span>
          </SidebarGroupLabel>
          <SidebarGroupContent className='mt-4'>
            <SidebarMenu>
              {items.map((item, index) => {
                const isActive = currentPath === item.url
                return (
                  <>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-2 rounded-md transition-colors
                          ${isActive
                        ? ' bg-white font-medium text-cyan-800'
                        : ' hover:bg-cyan-900 rounded-md'}
                        `}
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {index < items.length - 1 && (
                    <Separator orientation="horizontal" className="my-1 border-b border-gray-200" />
                  )}
                </>
              )})}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
