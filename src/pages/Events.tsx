import { getEvents } from '@/api/eventService'
import { Loader } from 'lucide-react'
import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'

export interface Event {
  id: string
  title: string
  image?: string
  time: string
  date: string
  eventType: string
  institute: string
  eventStatus: string
  description: string
}

function Events() {
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [events, setEvents] = useState<Event[]>([])
  useEffect(() => {
    getEvents()
      .then((res) => {
        const events = Array.isArray(res.data) ? res.data : res.data.result
        setEvents(events || [])
        console.log('Events loaded:', events)
      })
      .catch((error) => {
        console.error('Error fetching events:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin text-cyan-800" size={48} />
        </div>
      ) : (
        <>
          {/* Filter buttons */}
          <div className="flex gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-md ${
                filter === 'all' ? 'bg-cyan-800 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setFilter('all')}
            >
              Tất cả
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                filter === 'LONG_TERM'
                  ? 'bg-cyan-800 text-white'
                  : 'bg-gray-100'
              }`}
              onClick={() => setFilter('LONG_TERM')}
            >
              Thường kỳ
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                filter === 'SPECIAL' ? 'bg-cyan-800 text-white' : 'bg-gray-100'
              }`}
              onClick={() => setFilter('SPECIAL')}
            >
              Đặc biệt
            </button>
            <button
              onClick={() => setFilter('CLASS')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'CLASS' ? 'bg-cyan-800 text-white' : 'bg-gray-100'
              }`}
            >
              Lớp học
            </button>
          </div>

          {/* Events grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => filter === 'all' || event.eventType === filter)
              .map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
          </div>

          {/* Empty state */}
          {events.filter(
            (event) => filter === 'all' || event.eventType === filter
          ).length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Không có sự kiện nào trong mục này.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default Events
