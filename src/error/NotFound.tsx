import React from 'react'

export default function NotFound() {
  const path = window.location.pathname
  return (
    <div className="text-center py-20 text-red-500 text-2xl">
      Đường dẫn: "<span className="font-bold">{path}</span>" không hợp lệ!
    </div>
  )
}