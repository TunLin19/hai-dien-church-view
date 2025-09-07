import { getHistory } from '@/api/viewService'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'

interface History {
  id: string
  title: string
  url: string
  type: boolean
  description: string
}

function About() {
  const [loading, setLoading] = useState(true)
  const [history, setHistory] = useState<History[]>([])
  useEffect(() => {
    getHistory()
      .then((res) => {
        const histories = Array.isArray(res.data) ? res.data : res.data.result
        setHistory(histories || [])
        console.log('History loaded:', histories)
      })
      .catch((error) => {
        console.error('Error fetching history:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* History Section */}
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin text-cyan-800" size={48} />
        </div>
      ) : (
        <>
          <section className="mb-12">
            {history.map((item) => (
              <div key={item.id} className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                <div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
                <div className="flex justify-center">
                  {item.type ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="mb-4 md:w-3/4 w-full h-60 md:h-100 object-fill rounded-lg"
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      className="h-60 md:h-100 md:w-3/4 w-full object-cover rounded-lg"
                    ></video>
                  )}
                </div>
              </div>
            ))}
          </section>

          {/* Community Section */}
          <section className="">
            <h2 className="text-2xl font-semibold">Cộng Đoàn Giáo Xứ</h2>
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="text-xl font-medium mb-3">Thống kê</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Số giáo dân: 5,000</li>
                  <li>Số giáo họ: 4</li>
                  <li>Số hội đoàn: 10</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h3 className="text-xl font-medium mb-3">Các Hội Đoàn</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Hội Các Bà Mẹ Công Giáo</li>
                  <li>Đoàn Thiếu Nhi Thánh Thể</li>
                  <li>Ca Đoàn Thánh Tâm</li>
                  <li>Hội Legio Mariae</li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}

export default About
