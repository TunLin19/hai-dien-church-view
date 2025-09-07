'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'

interface Comment {
  id: number
  author: string
  avatar: string
  content: string
  createdAt: string
}

export default function Post() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/40?img=1',
      content: 'Bài viết rất hay 👍',
      createdAt: '2 giờ trước',
    },
  ])

  const [newComment, setNewComment] = useState('')
  const [open, setOpen] = useState(false)

  const handleAddComment = () => {
    if (!newComment.trim()) return
    const c: Comment = {
      id: Date.now(),
      author: 'Bạn',
      avatar: 'https://i.pravatar.cc/40?img=2',
      content: newComment,
      createdAt: 'Vừa xong',
    }
    setComments([...comments, c])
    setNewComment('')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-xl mx-auto rounded-2xl shadow-sm">
        {/* Header */}
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40?img=10"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-semibold">Giáo xứ Hải Điền</h3>
              <p className="text-xs text-gray-500">04/09/2025 • 10:00</p>
            </div>
          </div>
        </CardContent>

        {/* Content */}
        <CardContent className="px-4 space-y-3">
          <p className="text-gray-800">
            Test
          </p>
          <img
            src="https://picsum.photos/600/300"
            alt="post-img"
            className="w-full rounded-lg"
          />
        </CardContent>

        {/* Actions */}
        <CardContent className="px-4 py-2 border-t border-gray-200">
          <div className="flex justify-around text-gray-600">
            <Button variant="ghost" size="sm" className="flex gap-1">
              <ThumbsUp size={18} /> Thích
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex gap-1"
              onClick={() => setOpen(true)}
            >
              <MessageCircle size={18} /> Bình luận
            </Button>
            <Button variant="ghost" size="sm" className="flex gap-1">
              <Share2 size={18} /> Chia sẻ
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Dialog comments */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full">
          <DialogHeader>
            <DialogTitle>Bình luận</DialogTitle>
          </DialogHeader>

          {/* Comment list */}
          <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
            {comments.map((c) => (
              <div key={c.id} className="flex gap-3">
                <img
                  src={c.avatar}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div className="bg-gray-100 px-3 py-2 rounded-2xl">
                  <p className="text-sm font-medium">{c.author}</p>
                  <p className="text-sm">{c.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t pt-3">
            <img
              src="https://i.pravatar.cc/40?img=2"
              alt="me"
              className="w-8 h-8 rounded-full"
            />
            <Input
              placeholder="Viết bình luận..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <Button onClick={handleAddComment}>Gửi</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
